---
layout: Meadow
title: Get started with Meadow.Windows
subtitle: "To get up and running with Meadow.Windows, follow these steps:"
---

Meadow.Windows offers an environment for developing Meadow code that can run on Windows, and with an extra add-on can even access general-purpose input/output (GPIO) pins. Developing with Meadow.Windows requires setting up your development machine with some prerequisites. Then, after connecting any external components, you can deploy and run your Meadow application.

Running Meadow applications on Windows can provide a very convenient development loop for prototyping and testing your Meadow applications, quickly iterating and seeing the result of code changes, potentially using the same components you would use on a Meadow Feather or Core-Compute module by way of an FTDI breakout board such as FT232H that provide GPIO, SPI, and I2C. (In this early stage, Meadow.Windows does not yet support I2C.)

You can also quickly prototype graphics using an emulated IDisplay object that renders to a standard window on your Windows machine before deploying them to component displays. Additionally, running Meadow applications on more extensive hardware can also provide capabilities for intensive workloads requiring much more processing power.

## Prerequisites

Before starting with Meadow.Windows, ensure your [development machine is set up for Meadow development](/Meadow/Getting_Started/Hello_World/).

If you haven't already, install the .NET 8.0 SDK for macOS. You can find the latest version on the [.NET downloads page](https://dotnet.microsoft.com/download/dotnet/).

### Using GPIO and SPI

To add GPIO and SPI capabilities to your Windows PC, you can use an [FTDI breakout board such as FT232H](https://www.adafruit.com/product/2264).

## Create your first Meadow.Windows app

1. Create a new .NET console application:

    ```command
    dotnet new console --output MeadowWindowsSampleApp
    cd MeadowWindowsSampleApp
    ```

    This will ensure the Meadow app has the project settings that will work within Meadow.Windows.

1. Add the Meadow.Windows NuGet package:

    ```command
    dotnet add package Meadow.Windows
    ```

1. Replace the contents of the `Program.cs` file:

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

    This simple app logs messages at various stages of the Meadow application.

1. Build the app:

    ```command
    dotnet build
    ```

1. Run the app:

    ```command
    dotnet run
    ```

    The console output should display:

    ```console
    Initialize...
    Run...
    Hello, Meadow.Windows!
    ```

You now have a Meadow.Windows app running on your Windows development machine.

## Adapt a Meadow app for Meadow.Windows

To update an existing Meadow app to target a Windows PC, adjust the app’s structure as follows:

1. Update the project file to target an executable:

    ```xml
    <Project Sdk="Microsoft.NET.Sdk">
        <PropertyGroup>
            <OutputType>Exe</OutputType>
            <TargetFramework>net8.0</TargetFramework>
            <ImplicitUsings>enable</ImplicitUsings>
            <Nullable>enable</Nullable>
        </PropertyGroup>

        ...
    </Project>
    ```

1. Change the app type to Meadow.Windows:

    ```csharp
    public class MeadowApp : App<Windows>
    {
        ...
    }
    ```

1. Add the Main method to the MeadowApp class:

    ```csharp
    public static async Task Main(string[] args)
    {
        await MeadowOS.Start(args);
    }
    ```

Your Meadow app should now be able to run on Windows, calling into the usual `Initialize` and `Run` methods of your app.

## Next steps

Now that you have your Meadow.Windows device set up and your first Meadow app running on it, you can start working with the [Meadow.Foundation](../../../Meadow.Foundation/Getting_Started/) libraries to add functionality to your Meadow app. Check out the other [Meadow.Windows samples in the Meadow.Desktop.Samples](https://github.com/WildernessLabs/Meadow.Samples/tree/main/Source/Windows).
