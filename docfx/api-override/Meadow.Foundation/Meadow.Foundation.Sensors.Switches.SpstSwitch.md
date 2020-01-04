---
uid: Meadow.Foundation.Sensors.Switches.SpstSwitch
remarks: *content
---

| SpstSwitch    |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Core/Sensors/Switches)  |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" style="width: auto; height: -webkit-fill-available;" /></a> |

**SpstSwitch** represents a simple, on/off, Single-Pole-Single-Throw (SPST) switch that closes a circuit to either ground/common or high:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Switches.SpstSwitch/SPST_Switch.jpg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

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

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Core.Samples) 

### Wiring Example

<img src="../../API_Assets/Meadow.Foundation.Sensors.Switches.SpstSwitch/SpstSwitch.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />