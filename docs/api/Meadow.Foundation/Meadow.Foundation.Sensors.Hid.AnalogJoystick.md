---
uid: Meadow.Foundation.Sensors.Hid.AnalogJoystick

---

| AnalogJoystick | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Sensors/Hid) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" alt="NuGet Gallery for Meadow.Foundation" /></a> |

### Code Example

```csharp
AnalogJoystick? joystick;

public override Task Initialize()
{
    joystick = new AnalogJoystick(
        Device.CreateAnalogInputPort(Device.Pins.A01, 1, TimeSpan.FromMilliseconds(10), new Voltage(3.3)),
        Device.CreateAnalogInputPort(Device.Pins.A00, 1, TimeSpan.FromMilliseconds(10), new Voltage(3.3)),
        null);

    // assume that the stick is in the center when it starts up
    _ = joystick?.SetCenterPosition(); //fire and forget

    //==== Classic Events
    if (joystick != null)
    {
        joystick.Updated += JoystickUpdated;
    }

    //==== IObservable
    joystick?.StartUpdating(TimeSpan.FromMilliseconds(20));

    return Task.CompletedTask;
}

void JoystickUpdated(object sender, IChangeResult<AnalogJoystickPosition> e)
{
    Resolver.Log.Info($"Horizontal: {e.New.Horizontal:n2}, Vertical: {e.New.Vertical:n2}");
    Resolver.Log.Info($"Digital position: {joystick?.DigitalPosition}");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples/Sensors.HID.AnalogJoystick_Sample)

### Wiring Example

<img src="/docs/API_Assets/Meadow.Foundation.Sensors.Hid.AnalogJoystick/AnalogJoystick_Fritzing.png" />
