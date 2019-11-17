---
uid: Meadow.Foundation.Sensors.Switches.SpdtSwitch
remarks: *content
---

Represents a simple, two position, Single-Pole-Dual-Throw (SPDT) switch that closes a circut to either ground/common or high depending on position.

![](../../API_Assets/Meadow.Foundation.Sensors.Switches.SpdtSwitch/SPDT_Switch.png)

---
uid: Meadow.Foundation.Sensors.Switches.SpdtSwitch
example: [*content]
---

The following example shows how to use a SPDT switch:

```csharp
using Meadow;
using Meadow.Devices;
using Meadow.Foundation.Sensors.Switches;
using Meadow.Hardware;
using System.Threading;

namespace SpdtSwitch_Sample
{
    public class Program
    {
        static IApp _app; 
        public static void Main()
        {
            _app = new App();
        }
    }
    
    public class App : AppBase<F7Micro, App>
    {
        DigitalOutputPort _blueLED;
        SpdtSwitch _spdtSwitch;

        public App ()
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
}
```

##### Example Circuit

![](../../API_Assets/Meadow.Foundation.Sensors.Switches.SpdtSwitch/SpdtSwitch.svg)