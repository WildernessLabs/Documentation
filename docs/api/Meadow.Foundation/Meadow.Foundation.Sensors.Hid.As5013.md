---
uid: Meadow.Foundation.Sensors.Hid.As5013
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.As5013
---

| As5013 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.As5013) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.As5013/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Hid.As5013/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Hid.As5013.svg?label=Meadow.Foundation.Sensors.Hid.As5013" alt="NuGet Gallery for Meadow.Foundation.Sensors.Hid.As5013" /></a> |

### Code Example

```csharp
As5013 joystick;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing ...");

    joystick = new As5013(Device.CreateI2cBus());

    joystick.Updated += As5013_Updated;

    return Task.CompletedTask;
}

public override Task Run()
{
    joystick.StartUpdating(TimeSpan.FromMilliseconds(100));

    return Task.CompletedTask;
}

private void As5013_Updated(object sender, IChangeResult<Meadow.Peripherals.Sensors.Hid.AnalogJoystickPosition> e)
{
    Resolver.Log.Info($"{e.New.Horizontal}, {e.New.Vertical}");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Hid.As5013/Samples/As5013_Sample)

### Wiring Example

To wire a As5013 to your Meadow board, connect the following:

| As5013  | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| SCL     | D08 (SCL)   |
| SDA     | D07 (SDA)   |
| VCC     | 3V3         |
