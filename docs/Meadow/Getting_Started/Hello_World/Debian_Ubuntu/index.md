---
layout: Meadow
title: Hello, Meadow! 
subtitle: Create, deploy, and understand your first Meadow application on Linux (Debian, Ubuntu).
---

This guide shows you how to create a project and deploy the Hello Meadow application on Linux (Debian, Ubuntu).

## Setting up a new project

1. Creating a new project can be done with the dotnet CLI. The following command creates a new .Net5.0 Console Application.
    ```
    dotnet new console -f net5.0 -o ProjectName
    ```
    Replace _ProjectName_ with the name of your project, in this case let the name be _HelloMeadow_.  

2. The next step is to add the Meadow dependencies with the dotnet CLI command `dotnet add package`.  
    From nuget the dependencies [Meadow](https://www.nuget.org/packages/Meadow/) and [Meadow.Foundation](https://www.nuget.org/packages/Meadow.Foundation/) need to be added. The site provieds the commands that need to be executed to add the dependencies.  
    After adding both dependencies the `HelloMeadow.csproj` should look like this:
    ```xml
    <Project Sdk="Microsoft.NET.Sdk">

        <PropertyGroup>
            <OutputType>Exe</OutputType>
            <TargetFramework>net5.0</TargetFramework>
        </PropertyGroup>

        <ItemGroup>
            <PackageReference Include="Meadow" Version="0.18.0" />
            <PackageReference Include="Meadow.Foundation" Version="0.20.0" />
        </ItemGroup>

    </Project>
    ```
    Important is that `ItemGroup` has the to package references `Meadow` and `Meadow.Foundation`.

3. Now that we have added the needed dependencies one more step is needed to be done to get a executable which runs on the Meadow. In the project file `HelloMeadow.csproj` the target framework needs to be changed from `net5.0` to `net4.8`.  
The project file should now look like this. 
    ```xml
    <Project Sdk="Microsoft.NET.Sdk">

        <PropertyGroup>
            <OutputType>Exe</OutputType>
            <TargetFramework>net5.0</TargetFramework>
        </PropertyGroup>

        <ItemGroup>
            <PackageReference Include="Meadow" Version="0.18.0" />
            <PackageReference Include="Meadow.Foundation" Version="0.20.0" />
        </ItemGroup>

    </Project>
    ```
    After changing the target framework we need to restore the dependencies and tools of the project. This is done with following command:
    ```
    dotnet restore
    ```

## Example: HelloMeadow

For the HelloMeadow application we need a file `Program.cs` and `MeadowApp.cs`. The `Program.cs` allready exists but you need to create the `MeadowApp.cs`. We are first going to take a look at the complete `Program` class followed by the `MeadowApp` class. Then we are going to discuss the details of both classes.

{% include hello_meadow_code.md%}

## Building the project 
  
Building the project is done with `dotnet msbuild project_file`. To build the HelloMeadow application execute following command:

```
dotnet msbuild HelloMeadow.csproj
```

When the build was successfull you should now have a directory `/bin/debug/net4.8` with all the files from the build.  

## Deploying the App to Meadow

From the build directory you now need to upload the following files to the Meadow:
* System.dll
* System.Core.dll
* mscorlib.dll
* Meadow.dll
* Meadow.Foundation.dll
* App.exe

Note: You need to rename the `HelloMeadow.exe` to `App.exe`.

Now the files need to be uploaded to the Meadow with the [Meadow CLI](Meadow/Meadow_Basics/Meadow_CLI/).

The steps are:  
1. Disabling mono
   ```
   meadow --MonoDisable
   ```
3. Transfer the files to the Meadow
   ```
   meadow --WriteFile -f [FileName]
   ```
4. Start mono again  
   Start mono with the command:
   ```
   meadow --MonoEnable
   ```

   If the LED is not pulsing and no error is shown try following:
   1. Set the trace level to `3` to see all messages  
      ```
      meadow --SetTraceLevel --TraceLevel 3 
      ``` 
    2. Enable the tracing
        ```
        meadow --TraceEnable
        ```
    3. Start mono and keep the connection open
        ```
        meadow --MonoEnable --KeepAlive
        ```
   

## Next

Now that you understand the basics of a Meadow application, we recommend learning about the following topics:

 * [Hardware I/O](/Meadow/Meadow_Basics/IO/)
 * [Meadow.Foundation](/Meadow/Meadow.Foundation/)