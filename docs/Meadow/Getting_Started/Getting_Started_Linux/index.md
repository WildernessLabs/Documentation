---
layout: Meadow
title: Get started with Meadow.Linux
subtitle: "To get up and running with Meadow.Linux, follow these steps:"
---

TODO: Add to TOC

Meadow.Linux offers an environment for developing Meadow code that can run on Linux distributions where .NET is available, including Raspberry Pi computers and NVIDIA Jetson development boards where you can access general-purpose input/output (GPIO) pins. Developing with Meadow.Linux requires setting up your development machine with some prerequisites. Then, after connecting any external components, you can deploy and run your Meadow application.

Running Meadow applications on Linux can provide a very convenient development loop for prototyping and testing your Meadow applications, quickly iterating and seeing the result of code changes even using the same components you would use on a Meadow Feather or Core-Compute module.

You can also quickly prototype graphics using an emulated IDisplay object that renders to a window on your Linux machine before deploying them to component displays. Additionally, running Meadow applications on more extensive hardware can also provide capabilities for intesive workloads requiring much more processing power.

## Supported Meadow.Linux platforms

Here are the currently tested platforms and OS versions for Meadow.Linux, along with the version of Meadow.Core that was last used to test them.

| Hardware | Distro | Meadow.Core Version tested |
| :---: | :---: | :---: |
| Raspberry Pi 4 | Raspberry Pi OS (bullseye) | RC-3 |
| Raspberry Pi Zero 2 W | Raspberry Pi OS (bullseye) | Beta 6.2 |
| Jetson Nano | Ubuntu 20.04 | Beta 6.2 |
| Jetson AGX Xavier | Ubuntu 18.04 | RC-2 |
| krtkl snickerdoodle black | Ubuntu 20.04 | RC-1 |
| Windows Subsystem for Linux 2 (WSL2) | Ubuntu 20.04 | RC-3 |

You can also find any supported boards in the [Meadow.Linux implementation pinouts](https://github.com/WildernessLabs/Meadow.Core/tree/develop/source/implementations/linux/Meadow.Linux/Hardware/Pinouts). Each class represents the configuration for a specific board.

## Prerequisites

Before you can get started with Meadow.Linux, make sure your [development machine is set up for Meadow development](Hello_World/).

To get started with Meadow.Linux, you will need to install the following prerequisites on your host Linux machine.

* Install the .NET SDK on your Linux machine, following the [instructions for your Linux distribution and preferred installation style, manual, scripted, or package](https://learn.microsoft.com/en-us/dotnet/core/install/linux).

    You can also find the latest version of the .NET SDK for Linux from the [.NET downloads](https://dotnet.microsoft.com/download/dotnet/).

    For example, you can install .NET 7 on Raspberry Pi OS using a scripted install.

    ```bash
    wget https://dot.net/v1/dotnet-install.sh -O dotnet-install.sh
    sudo chmod +x ./dotnet-install.sh
    ./dotnet-install.sh --channel 7.0
    ```

* If your board supports GPIO, SPI, or I2C, and you want to use it with your Meadow apps, you may need to manually enable these features on your Linux machine.

    For example, on Raspberry Pi OS, these features are disabled by default. You can manually enable these features using the `raspi-config` GUI utility and enable them from the **Interface Options**.

    Alternatively, you can enable SPI and I2C directly using the following commands. (Note that, in `raspi-config`, zero [0] means enabled, and one [1] means disabled.)

    ```bash
    sudo raspi-config nonint do_spi 0
    sudo raspi-config nonint do_i2c 0
    ```

    However you enable these features on your Raspberry Pi, you will need to reboot the machine for the changes to take effect.

    ```bash
    sudo reboot
    ```

* If you want to be able to control and copy files to your Linux machine from a development machine, you may want to enable SSH access as well.

    For the Raspberry Pi, you can enable SSH access using the `raspi-config` utility and enable it from the **Interface Options**, where you may have also enabled SPI and I2C capabilities.

    Again, you can also enable SSH access directly using the following command.

    ```bash
    sudo raspi-config nonint do_ssh 0
    ```

    With SSH enabled, you can connect to your Raspberry Pi using the `ssh` command or your preferred SSH client.

    You can also use `scp` to copy files to your Raspberry Pi over an SSH connection.

## Development and Deployment options

Meadow.Linux offers several options for development and deployment. You can use your regular development machine to write your Meadow app and then deploy it to your Meadow.Linux device. Or, you can use your Meadow.Linux device as your development machine and write, build, and run your Meadow app directly. Additionally, you can use your Meadow.Linux device as a remote development machine and develop your Meadow app on you Linux device through a remote connection from your development machine using Visual Studio Code and Visual Studio Code Server.

For simplicity, we'll use a seaparate development machine and then deploy the app to the Meadow.Linux device.

## Create your first Meadow.Linux app

1. Create a new dotnet app on your development machine and navigate to that new project.

    ```bash
    dotnet new console --output MeadowLinuxSampleApp
    cd MeadowLinuxSampleApp
    ```

    This will ensure the Meadow app has the project settings that will work within Meadow.Linux.

1. Add the Meadow.Linux NuGet reference to your project.

    ```bash
    dotnet add package Meadow.Linux
    ```

1. Replace the contents of the `Program.cs` file in your project with the following.

    ```csharp
    using Meadow;
    using Meadow.Devices;
    using Meadow.Pinouts;

    public class MeadowApp : App<Linux<RaspberryPi>>
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

            Resolver.Log.Info("Hello, Meadow.Linux!");

            return base.Run();
        }
    }
    ```

    This is a simple Meadow.Linux app that will output some messages to the console at various stages of the Meadow app.

1. Build the app for your development machine.

    For example, to build the app in Release mode for a Linux device running on an ARM processor, such as a Raspberry Pi, you can use the following `dotnet publish` command that targets the `linux-arm` runtime.

    ```bash
    dotnet publish --runtime linux-arm --configuration Release
    ```

1. Deploy the resulting Linux ARM app build output to your Meadow.Linux device.

    You can use the `scp` command to copy the app build output to your Meadow.Linux device, changing the username and host (`pi@raspberry`) to match your account and device. You can also adjust the target destination, currently set to `MeadowLinuxSampleApp` in the user's home directory.

    ```bash
    scp -r 'bin/Release/net7.0/linux-arm/publish/' pi@raspberry:~/MeadowLinuxSampleApp/
    ```

    You will be asked for your password for the user on your remote device, though that can be avoided by setting up trusted SSH keys.

1. Run the app on your remote Meadow.Linux device.

    This can be done directly on the device or over an SSH connection. For the Raspberry Pi example over SSH, you can connnect and run your deployed app with the following commands.

    ```bash
    ssh pi@raspberry
    cd MeadowLinuxSampleApp
    dotnet MeadowLinuxSampleApp.dll
    ```

    At the end of the Meadow app launch output, you should see the following output from your app.

    ```bash
    Initialize...
    Run...
    Hello, Meadow.Linux!
    ```

You have a Meadow.Linux app running on your target device. You can now continue developing on your development machine and deploying the resulting changes to your Meadow.Linux device.

On many Linux devices, you can also develop directly on the device and build your app there using the .NET SDK.

## Adapt a Meadow app for Meadow.Linux

You can also modify an existing Meadow app to run on Meadow.Linux by adjusting the `App` type and adding the following static `Main` method to your `MeadowApp` class.

For example, here are the changes to make the MeadowApp class work on Meadow.Linux, configured for a Raspberry Pi.

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

1.  Within the Meadow app's class file, change the `App` type to align with your target Meadow.Linux device, such as `App<Linux<RaspberryPi>>` for a Raspberry Pi. This requires an additional `using` statement for the `Meadow.Pinouts` namespace.

    ```csharp
    using Meadow.Pinouts;
    ...

    public class MeadowApp : App<Linux<RaspberryPi>>
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

Your Meadow app should now be able to run on Meadow.Linux, calling into the usual `Initialize` and `Run` methods of your app.

## Next steps

Now that you have your Meadow.Linux device set up and your first Meadow app running on it, you can start working with the [Meadow.Foundation](../Meadow.Foundation/Getting_Started/) libraries to add functionality to your Meadow app. Check out the other [Meadow.Linux samples in the Meadow.Core.Samples](https://github.com/WildernessLabs/Meadow.Core.Samples/tree/main/Source/Meadow.Linux.Samples).
