
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json.Serialization;
using SICREYD.Entities;
using SICREYD.Models;
using SICREYD.Services;

namespace CourseLibrary.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers(setupAction =>
            {
                setupAction.ReturnHttpNotAcceptable = true;
            })
            .AddNewtonsoftJson(setupAction =>
            {
                setupAction.SerializerSettings.ContractResolver =
                    new CamelCasePropertyNamesContractResolver();
            })
            .AddXmlDataContractSerializerFormatters()
            .ConfigureApiBehaviorOptions(setupAction =>
            {
                setupAction.InvalidModelStateResponseFactory = context =>
                {
                    var problemDetails = new ValidationProblemDetails(context.ModelState)
                    {
                        Type = "https://courselibrary.com/modelvalidationproblem",
                        Title = "One or model validation errors occurred.",
                        Status = StatusCodes.Status422UnprocessableEntity,
                        Detail = "See the errors property for details.",
                        Instance = context.HttpContext.Request.Path
                    };

                    problemDetails.Extensions.Add("traceId", context.HttpContext.TraceIdentifier);

                    return new UnprocessableEntityObjectResult(problemDetails)
                    {
                        ContentTypes = { "application/problem+json" }
                    };
                };
            });

            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

            //defino los repositorios a usar
            services.AddScoped<ICruzRojaRepository, CruzRojaRepository>();

            //defino la conexion con la base de datos
            var connection = Configuration.GetConnectionString("CruzRojaDB");
            services.AddDbContextPool<CruzRojaContext2>(options => options.UseSqlServer(connection));
            services.AddControllers();
          
            JwtSettings settings = GetJwtSettings();

            services.AddSingleton<JwtSettings>(settings);

            //obtener la configuracion del token 
            services
                .AddAuthentication
                (
                    options =>
                    {
                        options.DefaultAuthenticateScheme = "JwtBearer";
                        options.DefaultChallengeScheme = "JwtBearer";
                    }
                )
                .AddJwtBearer
                (
                    "JwtBearer", jwtBearerOptions =>
                    {
                        jwtBearerOptions.TokenValidationParameters = new TokenValidationParameters
                        {
                            ValidateIssuerSigningKey = true,
                            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(settings.Key)),

                            ValidateIssuer = true,
                            ValidIssuer = settings.Issuer,

                            ValidateAudience = true,
                            ValidAudience = settings.Audience,

                            ValidateLifetime = true,
                            ClockSkew = TimeSpan.FromMinutes(settings.MinutesToExpiration)
                        };
                    }
                );

            services.AddAuthorization(cfg =>
                cfg.AddPolicy("ListUsers", p =>
                    p.RequireClaim("ListUsers", "true")));

            services.AddAuthorization(cfg =>
               cfg.AddPolicy("ListUserId", p =>
                   p.RequireClaim("ListUserId", "true")));

            services.AddAuthorization(cfg =>
              cfg.AddPolicy("AddNewUser", p =>
                  p.RequireClaim("AddNewUser", "true")));

            services.AddAuthorization(cfg =>
               cfg.AddPolicy("UpdateUser", p =>
                   p.RequireClaim("UpdateUser", "true")));

            services.AddAuthorization(cfg =>
              cfg.AddPolicy("DeleteUser", p =>
                  p.RequireClaim("DeleteUser", "true")));

            services.AddCors();

            services.AddControllers().AddNewtonsoftJson(options =>
                options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
                );

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_3_0);

            services.AddMvc(Options => Options.EnableEndpointRouting = false);


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

            app.UseAuthentication();

            app.UseHttpsRedirection();
            app.UseMvc();
        }

        public JwtSettings GetJwtSettings()
        {
            JwtSettings settings = new JwtSettings();

            settings.Key = Configuration["JwtSettings:key"];
            settings.Audience = Configuration["JwtSettings:audience"];
            settings.Issuer = Configuration["JwtSettings:issuer"];
            settings.MinutesToExpiration = Convert.ToInt32(Configuration["JwtSettings:minutesToExpiration"]);

            return settings;
        }

    }
}