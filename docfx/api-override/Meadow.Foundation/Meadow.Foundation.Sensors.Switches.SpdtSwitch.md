---
uid: Meadow.Foundation.Sensors.Switches.SpdtSwitch
remarks: *content
---

| SpdtSwitch  |             |
|-------------|-------------|
| Status      | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Core/Sensors/Switches)  |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" style="width: auto; height: -webkit-fill-available;" /></a> |

**SpdtSwitch** represents a simple, two position, Single-Pole-Dual-Throw (SPDT) switch that closes a circuit to either ground/common or high depending on position.

<img src="../../API_Assets/Meadow.Foundation.Sensors.Switches.SpdtSwitch/SPDT_Switch.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

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

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Core.Samples) 

### Wiring Example

<img src="../../API_Assets/Meadow.Foundation.Sensors.Switches.SpdtSwitch/SpdtSwitch.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />