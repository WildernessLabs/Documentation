---
uid: Meadow.Foundation.Leds.RgbLed
remarks: *content
---

| RgbLed      |             |
|-------------|-------------|
| Status      | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Core/Leds/)  |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" style="width: auto; height: -webkit-fill-available;" /></a> |

**RgbLed** represents an RGB LED whose color is controlled by three digital output ports. These diodes consist of four legs - one for each of the colors mentioned and one for a common cathode (ground) or common anode (vcc), which is also the longest one.

<img src="../../API_Assets/Meadow.Foundation.Leds.RgbLed/RgbLed.jpg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

To connect these deds to Meadow, it is recommended to use an external resistor of ~270 to 1K ohms to prevent too much current from flowing through the led and causing damage. 

### Circuit of a common anode RGB LED

<img src="../../API_Assets/Meadow.Foundation.Leds.RgbLed/RgbLed_CommonAnode.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

### Circuit of a common cathode RGB LED

<img src="../../API_Assets/Meadow.Foundation.Leds.RgbLed/RgbLed_CommonCathode.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

### Code Example

The following example code loops through all the colors possible with digital output ports only.

```csharp
public class RgbLedApp : App<F7Micro, RgbLedApp>
{
    public RgbLedApp()
    {
        // create a new common cathode RgbLed (otherwise set IsCommonCathode = false)
        var rgbLed = new RgbLed(
            Device.CreateDigitalOutputPort(Device.Pins.D14),
            Device.CreateDigitalOutputPort(Device.Pins.D13),
            Device.CreateDigitalOutputPort(Device.Pins.D12));

        // alternate between blinking and pulsing the LED 
        while (true)
        {
            for (int i = 0; i < (int)RgbLed.Colors.count; i++)
            {
                rgbLed.SetColor((RgbLed.Colors)i);
                Thread.Sleep(500);
            }

            for (int i = 0; i < (int)RgbLed.Colors.count; i++)
            {
                rgbLed.StartBlink((RgbLed.Colors)i);
                Thread.Sleep(3000);
            }
        }
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Core.Samples) 