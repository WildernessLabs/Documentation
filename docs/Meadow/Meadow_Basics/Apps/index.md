---
layout: Meadow
title: Meadow Applications
subtitle: Meadow Basics
---

# Meadow Applications

Meadow projects are built as .NET framework class libraries, but the code is executed like an application on the Meadow hardware.

## Meadow Package

When you create a new Meadow application, the `Meadow` core package should be automatically added. It can be manually installed via NuGet:

```console
> nuget install Meadow
```

## `App` Class

The main Meadow application class should inherit [Meadow.App](/docs/api/Meadow/Meadow.App-1.html), which provides a way for Meadow OS to notify the application of system events, such as going to sleep or waking up. Meadow will scan your application assembly for a class that implements `IApp` and launch that automatically.

The `App` declaration requires a generic parameters, `D`, representing the device type. For `D`, you'll need to pass a `Meadow.IDevice` that represents the board you're using. For example, if your app class is called `LEDApp`, and you're using a Meadow Feather v2 board, your `LEDApp` declaration would look like the following:

```csharp
public class LEDApp : App<F7FeatherV2>
```

If you're using a Feather v1 board, you'll use this signature:

```csharp
public class LEDApp : App<F7FeatherV1>
```

### `D` = Device

Specifying the `D` parameter sets the current device so that it can be accessed via the [`Device`](/docs/api/Meadow/Meadow.Devices.IMeadowDevice.html) property of the `IApp`:

```csharp
var redLED = new DigitalOutputPort(Device.Pins.OnboardLEDRed, false);
```

### Accessing your running App, Device, or Log

If you need access to the currently running Meadow App, Device, or Log, you can access those via the [`Resolver`](/docs/api/Meadow/Meadow.Resolver.html) class.

```csharp
MyApp myApp = Resolver.App;
```

Therefore, any public members are also available without having to cast. For instance, if your app class had a property called `InstalledName`, it could be accessed as follows:

```csharp
var name = Resolver.App.InstalledName;
```

## Sample Meadow Application

Here is a complete example of an application that cycles through several colors on the onboard LED:

```csharp
// Change F7FeatherV2 to F7FeatherV1 for V1.x boards
public class MeadowApp : App<F7FeatherV2>
{
    RgbPwmLed onboardLed;

    public override Task Run()
    {
        CycleColors(TimeSpan.FromMilliseconds(1000));
        return base.Run();
    }
    
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

    void ShowColor(Color color, TimeSpan duration)
    {
        Console.WriteLine($"Color: {color}");
        onboardLed.SetColor(color);
        Thread.Sleep(duration);
        onboardLed.Stop();
    }
}
```

## [Next - Input/Output](/Meadow/Meadow_Basics/IO/)
