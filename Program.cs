using Auth0.AspNetCore.Authentication;
using GoLinks.Api;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddSingleton<GoLinkService>();
builder.Services.AddSingleton<GoLinkRepository>();
builder.Services.Configure<CookiePolicyOptions>(options =>
{
    options.MinimumSameSitePolicy = SameSiteMode.None;
});
ConfigurationManager configuration = builder.Configuration;
builder.Services.AddAuth0WebAppAuthentication(options =>
{
    options.Domain = configuration["Auth0:Domain"];
    options.ClientId = configuration["Auth0:ClientId"];
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{url}");

app.MapFallbackToFile("index.html");;

app.Run();
