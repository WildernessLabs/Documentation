---
layout: Meadow
title: Meadow Applications
subtitle: Meadow Basics
---

# Meadow Applications

Meadow projects are based on .NET framework console applications. You'll likely notice some similarities as you build Meadow applications. To create a new Meadow application, you'll create a new Meadow application and in `static void Main`, launch a [`Meadow.IApp`](xref:Meadow.IApp):

```csharp
using System.Threading;
using Meadow;

namespace HelloLED
{
    class MainClass
    {
        static IApp app;

        static void Main(string[] args)
        {
            // instantiate new meadow app
            app = new LEDApp();
            Thread.Sleep(Timeout.Infinite);
        }
    }
}
```

## Meadow Package

When you create a new Meadow application, the `Meadow` core package should be automatically added. It can manually installed via NuGet:

```bash
> nuget install Meadow
```

## `App` Class

The main Meadow application class should inherit @"Meadow.App", which provides a way for Meadow OS to notify the application of system events, such as going to sleep or waking up.

Currently, we don't enforce the use of `App`, but in a future build of Meadow, it'll scan your Meadow application assembly for a class that implements `IApp` and launch that automatically. So, it's a good practice to use this pattern now.

The `App` declaration requires two generic parameters; `D`, and `A`, representing the device type and the application class type, respectively. For `D`, you'll need to pass a `Meadow.IDevice` that represents the board you're using, such as `F7Micro`. For `A`, you should pass the typename of your application class itself.

For example, if your app class is called `LEDApp`, and you're using a Meadow F7 Micro board, your `LEDApp` declaration would look like the following:

```csharp
public class LEDApp : App<F7Micro, LEDApp>
```

### `D` = Device

Specifying the `D` parameter sets the current device so that it can be accessed via the [Device](xref:Meadow.App.Device) property of the `IApp`:

```csharp
var redLED = new DigitalOutputPort(Device.Pins.OnboardLEDRed, false);
```

### `A` = App

Specifying the `A` type parameter in `App` allows the app class instance to be available via the `Current` property and strongly typed:

```csharp
MyApp myApp = MyApp.Current;
```

Therefore, any public members are also available without having to cast. For instance, if your app class had a property called `InstalledName`, it could be accessed as follows:

```csharp
var name = MyApp.Current.InstalledName;
```

## Sample Meadow Application

Here is a complete example of an application that cycles through some colors on the onboard LED:

```csharp
using System;
using System.Threading;
using Meadow;
using Meadow.Devices;
using Meadow.Hardware;

namespace HelloLED
{
    class LEDApp : App<F7Micro, LEDApp>
    {
        private IDigitalOutputPort redLed;
        private IDigitalOutputPort blueLed;
        private IDigitalOutputPort greenLed;

        public override void Run()
        {
            CreateOutputs();
            ShowLights();
        }

        public void CreateOutputs()
        {
            redLed = Device.CreateDigitalOutputPort(Device.Pins.OnboardLedRed);
            blueLed = Device.CreateDigitalOutputPort(Device.Pins.OnboardLedBlue);
            greenLed = Device.CreateDigitalOutputPort(Device.Pins.OnboardLedGreen);
        }

        public void ShowLights()
        {
            var state = false;

            while(true)
            {
                state = !state;

                Console.WriteLine($"State: {state}");

                redLed.State = state;
                Thread.Sleep(200);
                greenLed.State = state;
                Thread.Sleep(200);
                blueLed.State = state;
                Thread.Sleep(200);
            }
        }
    }
}
```

# [Next - Input/Output](/Meadow/Meadow_Basics/IO/)
