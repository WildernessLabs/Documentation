---
layout: Meadow
title: Hello, Meadow!
subtitle: Create, deploy, and understand your first Meadow application.
---

Once [Meadow.OS has been deployed to your board](/Meadow/Getting_Started/Deploying_Meadow), you can create and deploy Meadow apps to it.

The video below shows you how to create and deploy your first Meadow app on a Mac:
<p><iframe width="640" height="360" src="https://www.youtube.com/embed/wkekz5I7ycE" frameborder="3" allowfullscreen></iframe></p>

Alternatively, you can follow this step by step guide for both macOS and Windows: 

## Step 1: Install Visual Studio Meadow Extensions

## Prerequisites

You'll need [Visual Studio 2019 or 2022 for Windows or Visual Studio 8.10.xx or 2022 for Mac](https://visualstudio.microsoft.com/downloads/).

You can use any edition including Enterprise, Professional, or the free Community edition.

On Windows you'll also need to make sure that you install the Mobile Framework when asked what Frameworks to install.
This will allow you to debug your Meadow apps.

**Important**: Make sure to include the **Mobile Development with .NET** component when installing Visual Studio.

![Screenshot of Visual Studio Installer showing the Mobile development with .NET payload selected under Desktop & Mobile install options.](Mobile.NET.png)

## Windows

You'll need to install the VS Tools for Meadow Extension by [downloading it](https://marketplace.visualstudio.com/items?itemName=WildernessLabs.vsmeadow01) or through the Extension Manager

 1. In Visual Studio, go to **Extensions** > **Manage Extensions**.
 2. Click **Online** and search for `Meadow`.
 3. Install **VS Tools for Meadow**, shut down all instances of Visual Studio, and restart.

### macOS

Install the latest version of Visual Studio for Mac.

You'll also need to install the Meadow IDE Extension for Visual Studio for Mac.

 1. On the menu go to **Visual Studio** -> **Extensions**.
 2. Click the **Gallery** tab.
 3. Search for `Meadow`.
 4. Select the **Meadow** IDE extension.
 5. Click **Install...**

![Visual Studio for Mac Extension Manager showing the Meadow extension in the Gallery search results.](meadow_extension.png)

## Step 2: Create a new Meadow Project

### Windows

 1. Open Visual Studio 2019.
 2. Click **Create a new project**.
 3. Search for `Meadow` (make sure to clear all filters).
 4. Select **Meadow Application** and press **Next**.
 5. Name your project `HelloMeadow` and choose project location.
 6. Press **Create**.

### macOS

 1. Open Visual Studio.
 2. Create a new Project: **File** -> **New Solution..**.
 3. In the **Meadow** section, select *Meadow Application* and press **Next**.
 4. Name your project `HelloMeadow` and choose project location.
 5. Press **Create**.

## Step 3: Deploy your Application

The Meadow application template is a simple application that will pulse the onboard LED. As long as the [Meadow.OS is deployed to your Meadow board](/Meadow/Getting_Started/Deploying_Meadow), you can use the same techniques to deploy a Meadow application as you would any other .NET application:

### macOS

 1. Connect your Meadow device to your development machine
 2. Press the **Play** button in Visual Studio to compile and deploy your application
 3. Wait 30-60 seconds for your application to start

### Windows

 1. Connect your Meadow device to your development machine
 2. Right-click anywhere in the toolbar area and you'll see *Meadow Device List* in the dropdown. Click on it and it will be added to your toolbar.
 3. Select the Meadow device COM port that correspond to your board in the Meadow Device List toolbar dropdown
 4. Right-click project in Solution Explorer and choose **Deploy**.
 5. Wait 30-60 seconds for your application to start

## Understanding the `Hello, World` App

The Meadow app template has one file: `MeadowApp.cs`. Let's take a quick look at that file.

### MeadowApp.cs

Meadow will automatically scan for a class that implements `IApp` and launch it for you.

Let's take a brief look at the MeadowApp class:

```csharp
using Meadow;
using Meadow.Devices;
using Meadow.Foundation;
using Meadow.Foundation.Leds;
using Meadow.Peripherals.Leds;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace HelloMeadow
{
    // Change F7FeatherV2 to F7FeatherV1 for V1.x boards
    public class MeadowApp : App<F7FeatherV2>
    {
        RgbPwmLed onboardLed;

        public override Task Initialize()
        {
            Console.WriteLine("Initialize hardware...");

            onboardLed = new RgbPwmLed(device: Device,
                redPwmPin: Device.Pins.OnboardLedRed,
                greenPwmPin: Device.Pins.OnboardLedGreen,
                bluePwmPin: Device.Pins.OnboardLedBlue,
                CommonType.CommonAnode);
            return base.Initialize();
        }

        public override Task Run()
        {
            CycleColors(TimeSpan.FromMilliseconds(1000));
            return base.Run();
        }

        void CycleColors(TimeSpan duration)
        {
            Console.WriteLine("Cycle colors...");

            while (true)
            {
                ShowColorPulse(Color.Blue, duration);
                ShowColorPulse(Color.Cyan, duration);
                ShowColorPulse(Color.Green, duration);
                ShowColorPulse(Color.GreenYellow, duration);
                ShowColorPulse(Color.Yellow, duration);
                ShowColorPulse(Color.Orange, duration);
                ShowColorPulse(Color.OrangeRed, duration);
                ShowColorPulse(Color.Red, duration);
                ShowColorPulse(Color.MediumVioletRed, duration);
                ShowColorPulse(Color.Purple, duration);
                ShowColorPulse(Color.Magenta, duration);
                ShowColorPulse(Color.Pink, duration);
            }
        }

        void ShowColorPulse(Color color, TimeSpan duration)
        {
            onboardLed.StartPulse(color, (duration / 2));
            Thread.Sleep(duration);
            onboardLed.Stop();
        }
    }
}
```

### Meadow Namespaces

Let's break down parts of this class into pieces. First, the Meadow namespaces:

```csharp
using Meadow;
using Meadow.Devices;
using Meadow.Foundation;
using Meadow.Foundation.Leds;
using Meadow.Peripherals.Leds;
```

These are the typical minimum set of namespaces in a Meadow app class and provide the following functionality:

* `Meadow` - The root namespace contains Meadow application and OS classes, enabling you to interact with the Meadow.OS.
* `Meadow.Devices` - Contains device-specific definitions for different Meadow boards, such as the F7 Micro Dev board, or the F7 Micro embeddable board.
* `Meadow.Foundation` - [Meadow.Foundation](/Meadow/Meadow.Foundation) is a set of open-source peripheral drivers and hardware control libraries that make hardware development with Meadow, plug-and-play.
* `Meadow.Foundation.Leds` - Provided with the Meadow.Foundation library. Used to simplify use of RGB LEDs in this sample.
* `Meadow.Peripherals.Leds` - Provided with the Meadow.Contracts library. Used to access LED type enumeration.

### MeadowApp Class Definition

Notice that the `HelloMeadow` application class inherits from `App`, and has one generic arguments, in this case `F7FeatherV2`:

```csharp
public class HelloMeadow : App<F7FeatherV2>
```

All Meadow applications should inherit from the [App](/docs/api/Meadow/Meadow.App-2.html) base class. Under the hood, Meadow.OS will look for a class in your code inheriting from `IApp`, such as the `App` implementation, and launches the app automatically. It also provides hooks for getting notified during system events, such as the board being put to sleep.

`App` requires one parameter: the current device definition. This is passed in to provide a strongly-typed reference to the current device.

The device class defines properties and capabilities of the current device, such as the pins. While your app is running, your code can access the current device from the `Device` property on the [`Resolver`](/docs/api/Meadow.Contracts/Meadow.Resolver.html) class, allowing you to access them using autocomplete, via the specific device type:

```csharp
Device.Pins.OnboardLedRed
```

```csharp
public override Task Run()
{
    CycleColors(TimeSpan.FromMilliseconds(1000));
    return base.Run();
}
```

From your app, Meadow.OS will call the `Initialize()` method, described below, for any setup code. Meadow will then call the `Run()` method which calls the `CycleColors` method with a duration of 1000 milliseconds.

### Controlling the Onboard LED via Ports

Direct access to hardware Input/Output (IO) is generally available via _ports_ and _buses_. In this case, Meadow.Foundation is doing that work for us and we are accessing an `RgbPwmLed` from the pins we tell it to use. In this case, we use Meadow's on-board pulse-width modulated LED light with three sub-component LEDs that are red, green, and blue:

```csharp
RgbPwmLed onboardLed;
...

public override Task Initialize()
{
    Console.WriteLine("Initialize hardware...");

    onboardLed = new RgbPwmLed(device: Device,
        redPwmPin: Device.Pins.OnboardLedRed,
        greenPwmPin: Device.Pins.OnboardLedGreen,
        bluePwmPin: Device.Pins.OnboardLedBlue,
        CommonType.CommonAnode);

    return base.Initialize();
}
```

The `Initialize` call writes to the console for informational purposes, useful when debugging and watching your app start. Then RGB LED is then created from the device itself, using the named `Pins` connected to the on-board LED available on the particular device specified above in the `App` definition.

#### Digital Output

To pulse the color of the light emitted via the onboard LED, we can utilize the built in `StartPulse()` method of the `RgbPwmLed` class, this is done in the ShowColorPulse method, which takes a color and duration. All of this is tied together with the CycleColors call which will simply cycle through a variety of colors:


```csharp
void CycleColors(TimeSpan duration)
{
    Console.WriteLine("Cycle colors...");

    while (true)
    {
        ShowColorPulse(Color.Blue, duration);
        ShowColorPulse(Color.Cyan, duration);
        ShowColorPulse(Color.Green, duration);
        ShowColorPulse(Color.GreenYellow, duration);
        ShowColorPulse(Color.Yellow, duration);
        ShowColorPulse(Color.Orange, duration);
        ShowColorPulse(Color.OrangeRed, duration);
        ShowColorPulse(Color.Red, duration);
        ShowColorPulse(Color.MediumVioletRed, duration);
        ShowColorPulse(Color.Purple, duration);
        ShowColorPulse(Color.Magenta, duration);
        ShowColorPulse(Color.Pink, duration);
    }
}

void ShowColorPulse(Color color, TimeSpan duration)
{
    onboardLed.StartPulse(color, (duration / 2));
    Thread.Sleep(duration);
    onboardLed.Stop();
}
```

## Next

Now that you understand the basics of a Meadow application, we recommend learning about the following topics:

* [Hardware I/O](/Meadow/Meadow_Basics/IO/)
* [Meadow.Foundation](/Meadow/Meadow.Foundation/)
