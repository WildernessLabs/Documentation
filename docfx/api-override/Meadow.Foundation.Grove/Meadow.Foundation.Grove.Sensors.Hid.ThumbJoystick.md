---
uid: Meadow.Foundation.Grove.Sensors.Hid.ThumbJoystick
remarks: *content
---

| ThumbJoystick | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/ThumbJoystick) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Sensors.Hid.ThumbJoystick/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Sensors.Hid.ThumbJoystick.svg?label=Meadow.Foundation.Grove.Sensors.Hid.ThumbJoystick" /></a> |

### Code Example

```csharp
ThumbJoystick joystick;

public MeadowApp()
{
    Initialize();

    // assume that the stick is in the center when it starts up
    _ = joystick.SetCenterPosition(); //fire and forget

    joystick.Updated += JoystickUpdated;

    joystick.StartUpdating(TimeSpan.FromMilliseconds(20));
}

void Initialize()
{
    Console.WriteLine("Initializing hardware...");

    //==== Joystick
    // these are pretty fast updates (40ms in total), if you need more time to process, you can
    // increase the sample interval duration and/or standby duration.
    joystick = new ThumbJoystick(
        Device.CreateAnalogInputPort(Device.Pins.A01, 1, TimeSpan.FromMilliseconds(10), new Voltage(3.3)),
        Device.CreateAnalogInputPort(Device.Pins.A02, 1, TimeSpan.FromMilliseconds(10), new Voltage(3.3)),
        null, false);

    Console.WriteLine("Hardware initialization complete.");
}

void JoystickUpdated(object sender, IChangeResult<JoystickPosition> e)
{
    Console.WriteLine($"Horizontal: {e.New.Horizontal:n2}, Vertical: {e.New.Vertical:n2}");
    Console.WriteLine($"Digital position: {joystick.DigitalPosition}");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/ThumbJoystick)

### Wiring Example

| ThumbJoystick | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |


















