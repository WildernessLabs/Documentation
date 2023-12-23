---
uid: Meadow.Foundation.Sensors.Switches.SpdtSwitch

---

| SpdtSwitch | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Sensors/Switches) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" alt="NuGet Gallery for Meadow.Foundation" /></a> |

**SpdtSwitch** represents a simple, two position, Single-Pole-Dual-Throw (SPDT) switch that closes a circuit to either ground/common or high depending on position.

<img src="../../API_Assets/Meadow.Foundation.Sensors.Switches.SpdtSwitch/SPDT_Switch.png"  />

The following example shows how to use a SPDT switch:

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    DigitalOutputPort _blueLED;
    SpdtSwitch _spdtSwitch;

    public MeadowApp()
    {
        _blueLED = new DigitalOutputPort(Device.Pins.OnboardLEDBlue, true);

        _spdtSwitch = new SpdtSwitch(Device.Pins.D13);
        _spdtSwitch.Changed += (s, e) =>
        {
            Console.WriteLine("Switch Changed");
            Console.WriteLine("Switch on: " + _spdtSwitch.IsOn.ToString());
        };

        Console.WriteLine("Initial switch state, isOn: " + _spdtSwitch.IsOn.ToString());
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples) 

### Code Example

```csharp
protected SpdtSwitch spdtSwitch;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    spdtSwitch = new SpdtSwitch(Device.CreateDigitalInterruptPort(Device.Pins.D15, InterruptMode.EdgeBoth, ResistorMode.InternalPullDown));
    spdtSwitch.Changed += (s, e) =>
    {
        Resolver.Log.Info(spdtSwitch.IsOn ? "Switch is on" : "Switch is off");
    };

    Resolver.Log.Info("SpdtSwitch ready...");

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples/Sensors.Switches.SpdtSwitch_Sample)

### Wiring Example

<img src="../../API_Assets/Meadow.Foundation.Sensors.Switches.SpdtSwitch/SpdtSwitch_Fritzing.svg" 
