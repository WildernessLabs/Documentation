---
layout: Meadow
title: Get started with Meadow.Windows
subtitle: "To get up and running with Meadow.Windows, follow these steps:"
---

Meadow.Windows offers an environment for developing Meadow code that can run on Windows, and with an extra add-on can even access general-purpose input/output (GPIO) pins. Developing with Meadow.Windows requires setting up your development machine with some prerequisites. Then, after connecting any external components, you can deploy and run your Meadow application.

Running Meadow applications on Windows can provide a very convenient development loop for prototyping and testing your Meadow applications, quickly iterating and seeing the result of code changes, potentially using the same components you would use on a Meadow Feather or Core-Compute module by way of an FTDI breakout board such as FT232H that provide GPIO, SPI, and I2C. (In this early stage, Meadow.Windows does not yet support I2C.)

You can also quickly prototype graphics using an emulated IDisplay object that renders to a standard window on your Windows machine before deploying them to component displays. Additionally, running Meadow applications on more extensive hardware can also provide capabilities for intensive workloads requiring much more processing power.

## Prerequisites

Before you can get started with Meadow.Windows, make sure your [development machine is set up for Meadow development](../../Hello_World/index.md).

If you don't already have it, you may want to install the .NET 7.0 SDK. You can find the latest version of the .NET SDK for Windows from the [.NET downloads](https://dotnet.microsoft.com/download/dotnet/). (Currently, all Meadow.Windows samples are targeting .NET 7.0, though they also support targeting .NET 6.0.)

### Using GPIO and SPI

With an additional accessory, you can add GPIO and SPI capabilities to your Windows device. You can use an [FTDI breakout board such as FT232H](https://www.adafruit.com/product/2264) to provide GPIO and SPI capabilities. (The FT232H also supports I2C, but in this early stage, Meadow.Windows does not yet support it.)

## Create your first Meadow.Windows app

1. Create a new dotnet app on your development machine and navigate to that new project.

    ```command
    dotnet new console --output MeadowWindowsSampleApp
    cd MeadowWindowsSampleApp
    ```

    This will ensure the Meadow app has the project settings that will work within Meadow.Windows.

1. Add the Meadow.Windows NuGet reference to your project.

    ```command
    dotnet add package Meadow.Windows
    ```

1. Replace the contents of the `Program.cs` file in your project with the following.

    ```csharp
    using Meadow;
    using Meadow.Devices;

    public class MeadowApp : App<Windows>
    {
        static async Task Main(string[] args)
        {
            await MeadowOS.Start(args);
        }

        public override Task Initialize()
        {
            Resolver.Log.Info("Initialize...");

            return base.Initialize();
        }

        public override Task Run()
        {
            Resolver.Log.Info("Run...");

            Resolver.Log.Info("Hello, Meadow.Windows!");

            return base.Run();
        }
    }
    ```

    This is a simple Meadow.Windows app that will output some messages to the console at various stages of the Meadow app.

1. Build the app for your development machine using either Visual Studio or the `dotnet` tool.

    ```command
    dotnet build
    ```

1. Run the app.

    ```command
    dotnet run
    ```

    At the end of the Meadow app launch output, you should see the following output from your app.

    ```console
    Initialize...
    Run...
    Hello, Meadow.Windows!
    ```

You have a Meadow.Windows app running on your Windows development machine. You can continue to develop and test your Meadow app on your development machine. When you are ready, you can deploy your Meadow app to other Windows device like any other .NET app.

## Adapt a Meadow app for Meadow.Windows

You can also modify an existing Meadow app to run on Meadow.Windows by adjusting the `App` type and adding the following static `Main` method to your `MeadowApp` class.

For example, here are the changes to make the MeadowApp class work on Meadow.Windows, configured for Windows.

1. Configure the project type to be an executable by changing the project output type to a .NET 7 executable in the project file.

    ```xml
    <Project Sdk="Microsoft.NET.Sdk">
        <PropertyGroup>
            <OutputType>Exe</OutputType>
            <TargetFramework>net7.0</TargetFramework>
            <ImplicitUsings>enable</ImplicitUsings>
            <Nullable>enable</Nullable>
        </PropertyGroup>

        ...
    </Project>
    ```

1. Within the Meadow app's class file, change the `App` type to align with your target Meadow.Windows device: `App<Windows>`.

    ```csharp
    public class MeadowApp : App<Windows>
    {
        ...
    }
    ```

1. Within the `MeadowApp` class, or whatever your app's class name is, add a new `Main` method to give the app a target to launch when the app is run.

    ```csharp
    public static async Task Main(string[] args)
    {
        await MeadowOS.Start(args);
    }
    ```

Your Meadow app should now be able to run on Meadow.Windows, calling into the usual `Initialize` and `Run` methods of your app.

## Next steps

Now that you have your Meadow.Windows device set up and your first Meadow app running on it, you can start working with the [Meadow.Foundation](../../../Meadow.Foundation/Getting_Started/index.md) libraries to add functionality to your Meadow app. Check out the other [Meadow.Windows samples in the Meadow.Desktop.Samples](https://github.com/WildernessLabs/Meadow.Desktop.Samples/tree/main/Source/Windows).
