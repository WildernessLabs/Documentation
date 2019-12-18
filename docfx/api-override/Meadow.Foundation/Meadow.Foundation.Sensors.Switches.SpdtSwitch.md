---
uid: Meadow.Foundation.Sensors.Switches.SpdtSwitch
remarks: *content
---

| SpdtSwitch |             |
|-----------|-------------|
| Status        | Working          |
| Source code        | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Core/Sensors/Switches)  |
| | |

Represents a simple, two position, Single-Pole-Dual-Throw (SPDT) switch that closes a circut to either ground/common or high depending on position.

![](../../API_Assets/Meadow.Foundation.Sensors.Switches.SpdtSwitch/SPDT_Switch.png)

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

### Example Wiring

![](../../API_Assets/Meadow.Foundation.Sensors.Switches.SpdtSwitch/SpdtSwitch.svg)