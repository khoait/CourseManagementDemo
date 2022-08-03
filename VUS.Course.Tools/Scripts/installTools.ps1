[Net.ServicePointManager]::SecurityProtocol = "tls12"

$sourceNugetExe = "https://dist.nuget.org/win-x86-commandline/latest/nuget.exe"
$targetNugetExe = ".\nuget.exe"
Remove-Item ..\Tools -Force -Recurse -ErrorAction Ignore
Invoke-WebRequest $sourceNugetExe -OutFile $targetNugetExe
Set-Alias nuget $targetNugetExe -Scope Global -Verbose

##
##Download Plugin Registration Tool
##
##./nuget install Microsoft.CrmSdk.XrmTooling.PluginRegistrationTool -O ..\Tools
##md ..\Tools\PluginRegistration
##$prtFolder = Get-ChildItem ../Tools | Where-Object {$_.Name -match 'Microsoft.CrmSdk.XrmTooling.PluginRegistrationTool.'}
##move ..\Tools\$prtFolder\tools\*.* ..\Tools\PluginRegistration
##Remove-Item ..\Tools\$prtFolder -Force -Recurse

##
##Download CoreTools
##
##./nuget install  Microsoft.CrmSdk.CoreTools -O ..\Tools
##md ..\Tools\CoreTools
##$coreToolsFolder = Get-ChildItem ../Tools | Where-Object {$_.Name -match 'Microsoft.CrmSdk.CoreTools.'}
##move ..\Tools\$coreToolsFolder\content\bin\coretools\*.* ..\Tools\CoreTools
##Remove-Item ..\Tools\$coreToolsFolder -Force -Recurse

##
##Download Configuration Migration
##
##./nuget install  Microsoft.CrmSdk.XrmTooling.ConfigurationMigration.Wpf -O ..\Tools
##md ..\Tools\ConfigurationMigration
##$configMigFolder = Get-ChildItem ../Tools | Where-Object {$_.Name -match 'Microsoft.CrmSdk.XrmTooling.ConfigurationMigration.Wpf.'}
##move ..\Tools\$configMigFolder\tools\*.* ..\Tools\ConfigurationMigration
##Remove-Item ..\Tools\$configMigFolder -Force -Recurse

##
##Download Package Deployer 
##
##./nuget install  Microsoft.CrmSdk.XrmTooling.PackageDeployment.WPF -O ..\Tools
##md ..\Tools\PackageDeployment
##$pdFolder = Get-ChildItem ../Tools | Where-Object {$_.Name -match 'Microsoft.CrmSdk.XrmTooling.PackageDeployment.Wpf.'}
##move ..\Tools\$pdFolder\tools\*.* ..\Tools\PackageDeployment
##Remove-Item ..\Tools\$pdFolder -Force -Recurse


##
##Download XrmCIFramework PowerShell module
##
./nuget install XrmCIFramework -O ..\Tools
md -Force ..\Tools\XrmCIFramework
$xrmCIFolder = Get-ChildItem ../Tools | Where-Object {$_.Name -match 'XrmCIFramework.'}
move ..\Tools\$xrmCIFolder\tools\*.* ..\Tools\XrmCIFramework
Remove-Item ..\Tools\$xrmCIFolder -Force -Recurse

##
##Remove NuGet.exe
##
Remove-Item nuget.exe

## PSGallery should be available
$PSVersionTable.PSVersion
Install-PackageProvider -Name NuGet -Force -Scope CurrentUser

Save-Package "microsoft.xrm.tooling.crmconnector.powershell" -Path ..\Tools
Save-Package "microsoft.xrm.tooling.packagedeployment.powershell" -Path ..\Tools
Save-Package "microsoft.xrm.tooling.configurationmigration" -RequiredVersion 1.0.0.61 -Path ..\Tools
Save-Package "microsoft.powerApps.checker.powerShell" -Path ..\Tools