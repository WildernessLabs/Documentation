---
uid: Meadow.Foundation.Grove.Sensors.Hid.ThumbJoystick
remarks: *content
---

| ThumbJoystick | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/ThumbJoystick/Driver) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Sensors.Hid.ThumbJoystick/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Sensors.Hid.ThumbJoystick.svg?label=Meadow.Foundation.Grove.Sensors.Hid.ThumbJoystick" alt="NuGet Gallery for Meadow.Foundation.Grove.Sensors.Hid.ThumbJoystick" /></a> |

### Code Example

```csharp
ThumbJoystick joystick;

public override Task Initialize()
{
    Console.WriteLine("Initializing hardware...");

    joystick = new ThumbJoystick(
        Device.CreateAnalogInputPort(Device.Pins.A01, 1, TimeSpan.FromMilliseconds(10), new Voltage(3.3)),
        Device.CreateAnalogInputPort(Device.Pins.A02, 1, TimeSpan.FromMilliseconds(10), new Voltage(3.3)),
        null);

    joystick.Updated += JoystickUpdated;

    return Task.CompletedTask;
}

public override async Task Run()
{
    await joystick.SetCenterPosition();

    joystick.StartUpdating(TimeSpan.FromMilliseconds(20));
}

private void JoystickUpdated(object sender, IChangeResult<AnalogJoystickPosition> e)
{
    Console.WriteLine($"Horizontal: {e.New.Horizontal:n2}, Vertical: {e.New.Vertical:n2}");
    Console.WriteLine($"Digital position: {joystick.DigitalPosition}");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/ThumbJoystick/Sample/ThumbJoystick_Sample)

### Wiring Example

| ThumbJoystick | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |

