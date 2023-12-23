---
uid: Meadow.Foundation.Sensors.Switches.SpstSwitch

---

| SpstSwitch | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Sensors/Switches) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" alt="NuGet Gallery for Meadow.Foundation" /></a> |

**SpstSwitch** represents a simple, on/off, Single-Pole-Single-Throw (SPST) switch that closes a circuit to either ground/common or high:

<img src="/docs/API_Assets/Meadow.Foundation.Sensors.Switches.SpstSwitch/SPST_Switch.jpg"  />

Use the [`CircuitTerminationType`](/API/CircuitTerminationType) to specify whether the other side of the switch terminates to ground or high.

The following example shows how to use a SPST switch:

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    DigitalOutputPort _blueLED;
    SpstSwitch _spstSwitch;

    public MeadowApp()
    {
        _blueLED = new DigitalOutputPort(Device.Pins.OnboardLEDBlue, true);

        _spstSwitch = new SpstSwitch(Device.Pins.D13, CircuitTerminationType.High);
        _spstSwitch.Changed += (s, e) =>
        {
            Console.WriteLine("Switch Changed");
            Console.WriteLine("Switch on: " + _spstSwitch.IsOn.ToString());
        };

        Console.WriteLine("Initial switch state, isOn: " + _spstSwitch.IsOn.ToString());
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples) 

### Code Example

```csharp
protected SpstSwitch spstSwitch;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    spstSwitch = new SpstSwitch(Device.CreateDigitalInterruptPort(Device.Pins.D02, InterruptMode.EdgeFalling, ResistorMode.InternalPullDown));
    spstSwitch.Changed += (s, e) =>
    {
        Resolver.Log.Info("Switch Changed");
        Resolver.Log.Info($"Switch on: {spstSwitch.IsOn}");
    };

    Resolver.Log.Info("SpstSwitch ready...");

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples/Sensors.Switches.SpstSwitch_Sample)

### Wiring Example

<img src="/docs/API_Assets/Meadow.Foundation.Sensors.Switches.SpstSwitch/SpstSwitch_Fritzing.svg" />
