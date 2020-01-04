---
uid: Meadow.Foundation.Sensors.Switches.DipSwitch
remarks: *content
---

| DipSwitch   |             |
|-------------|-------------|
| Status      | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Core/Sensors/Switches)  |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" style="width: auto; height: -webkit-fill-available;" /></a> |

**DipSwitch** represents a DIP-switch wired in a bus configuration, in which all switches are terminated to the same ground/common or high pin.

<img src="../../API_Assets/Meadow.Foundation.Sensors.Switches.DipSwitch/DIP_Switches.jpg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    public void App()
    {
        var dipSwitch = new DipSwitch(IDigitalPin[] {
            Device.Pins.D05, Device.Pins.D06, 
            Device.Pins.D07, Device.Pins.D08, 
            Device.Pins.D09, Device.Pins.D10, 
            Device.Pins.D11, Device.Pins.D12,  },
            CircuitTerminationType.CommonGround);

        dipSwitch.Changed += (object s, ArrayEventArgs e) =>
        {
            Debug.Print("Switch " + e.ItemIndex + " changed to " 
                + (((ISwitch)e.Item).IsOn ? "on" : "off"));
        };

        Thread.Sleep(Timeout.Infinite);
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Core.Samples) 

### Wiring Example

<img src="../../API_Assets/Meadow.Foundation.Sensors.Switches.DipSwitch/DipSwitch.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />