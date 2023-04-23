---
layout: Meadow
title: Get started with Meadow.Linux
subtitle: "To get up and running with Meadow.Linux, follow these steps:"
---

TODO: Add to TOC

Meadow.Linux offers an environment for developing Meadow code that can run on Linux distributions where .NET is available, including Raspberry Pi computers and NVIDIA Jetson development boards where you can access general-purpose input/output (GPIO) pins. Developing with Meadow.Linux requires setting up your development machine with some prerequisites. Then, after connecting any external components, you can deploy and run your Meadow application.

## Supported Meadow.Linux platforms

Here are the currently tested platforms and OS versions for Meadow.Linux, along with the version of Meadow.Core that was last used to test them.

| Hardware | Distro | Meadow.Core Version tested |
| :---: | :---: | :---: |
| Raspberry Pi 4 | Raspberry Pi OS (bullseye) | Beta 6.2 |
| Raspberry Pi Zero 2 W | Raspberry Pi OS (bullseye) | Beta 6.2 |
| Jetson Nano | Ubuntu 20.04 | Beta 6.2 |
| Jetson Xavier AGX | Ubuntu 18.04 | RC-2 |
| KRTKL Snickerdoodle Black | Ubuntu 20.04 | RC-1 |
| AMD64 Ubuntu 20.04 under WSL2  | Ubuntu 20.04 | RC-1 |

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

1. Add the Meadow.Linux NuGet reference to your project.

    ```bash
    dotnet add package Meadow.Linux
    ```

1. Replace the contents of the `Program.cs` file in your project with the following.

    ```csharp

    // TODO:

    ```
1. TODO:
1. Develop your app on your development machine
1. Deploy your app to the remote Linux device
1. Build and run your app on the remote Linux device

## Adapt a Meadow app for Meadow.Linux

You can also modify an existing Meadow app to run on Meadow.Linux by adjusting the `App` type and adding the following static `Main` method to your `MeadowApp` class.

For example, here are the changes to make the MeadowApp class work on Meadow.Linux, configured for a Raspberry Pi.

```csharp
public class MeadowApp : App<Linux<RaspberryPi>>
{
    public static async Task Main(string[] args)
    {
        await MeadowOS.Start(args);
    }

    ...
}
```

## Next steps

Now that you have your Meadow.Linux device set up and your first Meadow app running on it, you can start working with the [Meadow.Foundation](../Meadow.Foundation/Getting_Started/) libraries to add functionality to your Meadow app. Check out the other [Meadow.Linux samples in the Meadow.Core.Samples](https://github.com/WildernessLabs/Meadow.Core.Samples/tree/main/Source/Meadow.Linux.Samples).
