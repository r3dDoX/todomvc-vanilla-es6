#tool nuget:?package=NUnit.ConsoleRunner&version=3.4.0
#addin "Cake.Npm"

//////////////////////////////////////////////////////////////////////
// ARGUMENTS
//////////////////////////////////////////////////////////////////////

var target = Argument("target", "Default");

//////////////////////////////////////////////////////////////////////
// PREPARATION
//////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////
// TASKS
//////////////////////////////////////////////////////////////////////

Task("NpmInstall")
    .Does(() =>
{
    Npm.Install();

    // Note: there it is also possible to define dependencies in the build script. Examples:
    // Npm.Install(settings => settings.Package("gulp").Globally());
    // Npm.Install(settings => settings.Package("gulp", ">3.9 && <4.0", "myorg"));

    // Note: npm install --production
    // Npm.Install(settings => settings.ForProduction());
});

Task("BuildCss")
    .IsDependentOn("NpmInstall")
    .Does(() =>
{
    Npm.RunScript("build:css");
});

Task("BundleJs")
    .IsDependentOn("NpmInstall")
    .Does(() =>
{
    Npm.RunScript("bundle:js");
});

Task("UglifyJs")
    .IsDependentOn("NpmInstall")
    .IsDependentOn("BundleJs")
    .Does(() =>
{
    Npm.RunScript("uglify:js");
});

Task("Default")
    .IsDependentOn("UglifyJs")
    .IsDependentOn("BuildCss");

Task("Hello")
    .Does(() =>
{
    Npm.RunScript("hello");
});

RunTarget(target);