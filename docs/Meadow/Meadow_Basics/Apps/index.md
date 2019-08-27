---
layout: Meadow
title: Meadow Applications
subtitle: Meadow Basics
---

# Meadow Applications

Meadow applications are basically just .NET console applications. In fact, for now, to create a new Meadow application, you'll create a regular console application and in `static void Main`, launch a [`Meadow.IApp`](xref:Meadow.IApp):

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

Once the console application is created, the `Meadow` core package should be installed via Nuget:

```
> nuget install Meadow
```

## `AppBase` Class

The main Meadow application class should inherit @"Meadow.AppBase", which provides a way for Meadow OS to notify the application of system events such as going to sleep, or waking up.

Currently, we don't enforce the use of `AppBase`, but in a future build of Meadow, it'll scan your Meadow application assembly for a class that implements `IApp` and launch that automatically, so it's a good practice to use the pattern now.

The `AppBase` declaration requires two generic parameters; `D`, and `A`, representing the device type and the application class type, respectively. For `D`, you'll need to pass a `Meadow.IDevice` that represents the board you're using, such as `F7Micro`. For `A`, you should pass the typename of your application class itself. 

For example, if your app class is called `LEDApp`, and you're using a Meadow F7 Micro board, your `LEDApp` declaration would look like the following:

```csharp
public class LEDApp : AppBase<F7Micro, LEDApp>
```

### `D` = Device

Specifying the `D` parameter sets the current device so that it can be accessed via the [Device](xref:Meadow.AppBase.Device) property of the `IApp`:

```csharp
var redLED = new DigitalOutputPort(Device.Pins.OnboardLEDRed, false);
```

### `A` = App

Specifying the `A` type parameter in `AppBase` allows the app class instance to be available via the `Current` property and strongly typed:

```
MyApp myApp = MyApp.Current;
```

Therefore, any public members are also available without having to cast. For instance, if your app class had a property called `InstalledName`, it could be accessed as follows:

```
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
    class LEDApp : AppBase<F7Micro, LEDApp>
    {
        private IDigitalOutputPort redLED;
        private IDigitalOutputPort blueLED;
        private IDigitalOutputPort greenLED;

        public override void Run()
        {
            CreateOutputs();
            ShowLights();
        }

        public void CreateOutputs()
        {
            redLED = Device.CreateDigitalOutputPort(Device.Pins.OnboardLEDRed);
            blueLED = Device.CreateDigitalOutputPort(Device.Pins.OnboardLEDBlue);
            greenLED = Device.CreateDigitalOutputPort(Device.Pins.OnboardLEDGreen);
        }

        public void ShowLights()
        {
            var state = false;

            while(true)
            {
                state = !state;

                Console.WriteLine($"State: {state}");

                redLED.State = state;
                Thread.Sleep(200);
                greenLED.State = state;
                Thread.Sleep(200);
                blueLED.State = state;
                Thread.Sleep(200);
            }
        }
    }
}
```

# [Next - Input/Output](/Guides/Meadow_Basics/IO/)