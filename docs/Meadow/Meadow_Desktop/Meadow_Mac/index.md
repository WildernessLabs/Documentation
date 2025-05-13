---
layout: Meadow
title: Get started with Meadow.Mac
subtitle: "To get up and running with Meadow.Mac, follow these steps:"
---

Meadow.Mac provides an environment for developing Meadow applications on macOS, with optional GPIO support through an add-on accessory. Setting up Meadow.Mac requires configuring your development machine and connecting external components before you can deploy and run your Meadow application.

unning Meadow applications on a Mac offers a convenient and fast development loop for prototyping and testing. You can use the same components you would on a Meadow Feather or Core-Compute module by connecting an FTDI breakout board like the FT232H, which supports GPIO, SPI, and (in the future) I2C.

Meadow.Mac also allows for prototyping graphics using an emulated IDisplay object, rendering to a standard window on your Mac. Additionally, running Meadow apps on macOS can leverage the hardware's increased processing power for intensive workloads.

## Prerequisites

Before starting with Meadow.Mac, ensure your [development machine is set up for Meadow development](/Meadow/Getting_Started/Hello_World/).

If you haven't already, install the .NET 8.0 SDK for macOS. You can find the latest version on the [.NET downloads page](https://dotnet.microsoft.com/download/dotnet/).

### Using GPIO and SPI

To add GPIO and SPI capabilities to your Mac, you can use an [FTDI breakout board such as FT232H](https://www.adafruit.com/product/2264).

## Create your first Meadow.Mac app

1. Create a new .NET console application:

    ```command
    dotnet new console --output MeadowMacSampleApp
    cd MeadowMacSampleApp
    ```

    This will ensure the Meadow app has the project settings that will work within Meadow.Mac.

1. Add the Meadow.Mac NuGet package:

    ```command
    dotnet add package Meadow.Mac
    ```

1. Replace the contents of the `Program.cs` file:

    ```csharp
    using Meadow;
    using Meadow.Devices;

    public class MeadowApp : App<Mac>
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

            Resolver.Log.Info("Hello, Meadow.Mac!");

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
    Hello, Meadow.Mac!
    ```

You now have a Meadow.Mac app running on your Mac development machine.

## Adapt a Meadow app for Meadow.Mac

To update an existing Meadow app to target a Mac, adjust the app’s structure as follows:

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

1. Change the app type to Meadow.Mac:

    ```csharp
    public class MeadowApp : App<Mac>
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

Your Meadow app should now be able to run on macOS, calling into the usual `Initialize` and `Run` methods of your app.

## Next steps

With your Meadow.Mac setup complete, start exploring the [Meadow.Foundation](../../../Meadow.Foundation/Getting_Started/) libraries to add functionality to your Meadow app. You can also find additional examples in the [samples in the Meadow.Desktop.Samples](https://github.com/WildernessLabs/Meadow.Samples/tree/main/Source/Mac).
