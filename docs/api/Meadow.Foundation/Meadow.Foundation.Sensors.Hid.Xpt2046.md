---
uid: Meadow.Foundation.Sensors.Hid.Xpt2046
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.Xpt2046
---

| Xpt2046 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Xpt2046) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Xpt2046/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Hid.Xpt2046/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Hid.Xpt2046.svg?label=Meadow.Foundation.Sensors.Hid.Xpt2046" alt="NuGet Gallery for Meadow.Foundation.Sensors.Hid.Xpt2046" /></a> |
### Code Example

```csharp
private Xpt2046 touchScreen;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    var i2cBus = Device.CreateI2cBus(I2cBusSpeed.Fast);

    touchScreen = new Xpt2046(
        Device.CreateSpiBus(),
        Device.Pins.D04.CreateDigitalInterruptPort(InterruptMode.EdgeFalling, ResistorMode.InternalPullUp),
        Device.Pins.D05.CreateDigitalOutputPort(true));

    touchScreen.TouchDown += TouchScreen_TouchDown;

    return Task.CompletedTask;
}

private void TouchScreen_TouchDown(ITouchScreen sender, TouchPoint point)
{
    Resolver.Log.Info($"Touch at location: X:{point.ScreenX}, Y:{point.ScreenY}");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Xpt2046/Samples/Xpt2046_Sample)


