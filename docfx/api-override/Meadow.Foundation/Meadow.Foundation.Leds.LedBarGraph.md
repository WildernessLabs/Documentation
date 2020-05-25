---
uid: Meadow.Foundation.Leds.LedBarGraph
remarks: *content
---

| LedBarGraph |             |
|-------------|-------------|
| Status      | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Core/Leds/) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" style="width: auto; height: -webkit-fill-available;" /></a> |

An LED Bar Graph is packaged array of LEDs commonly used to indicate level or progress and commonly include 8 or 10 leds.

The **LedBarGraph** class allows you to control an led bar graph using GPIO.

<img src="../../API_Assets/Meadow.Foundation.Leds.LedBarGraph/img_LedBarGraph.jpg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

Use the `SetLed` method to turn on or off LEDs individually, or assign a value on the `Percentage` property to represent it visually on the graph bar, like a battery indicator, temperature, humidity, etc.  

### Code Example

The following example shows how to use the property **Percentage** to slowly fill and empty a 10 LED battery level graph:

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    DigitalOutputPort _blueLED;
    LedBarGraph _ledBarGraph;

    public MeadowApp()
    {
        _blueLED = new DigitalOutputPort(Device.Pins.OnboardLEDBlue, true);

        IDigitalOutputPort[] ports =
        {
            Device.CreateDigitalOutputPort(Device.Pins.D06),
            Device.CreateDigitalOutputPort(Device.Pins.D07),
            Device.CreateDigitalOutputPort(Device.Pins.D08),
            Device.CreateDigitalOutputPort(Device.Pins.D09),
            Device.CreateDigitalOutputPort(Device.Pins.D10),
            Device.CreateDigitalOutputPort(Device.Pins.D11),
            Device.CreateDigitalOutputPort(Device.Pins.D12),
            Device.CreateDigitalOutputPort(Device.Pins.D13),
            Device.CreateDigitalOutputPort(Device.Pins.D14),
            Device.CreateDigitalOutputPort(Device.Pins.D15),
        };

        _ledBarGraph = new LedBarGraph(ports);

        Run();
    }

    void Run()
    {
        while (true)
        {
            float percentage = 0;

            while (percentage < 1)
            {
                _ledBarGraph.Percentage = percentage;
                percentage += 0.1f;
                Thread.Sleep(200);                    
            }

            percentage = 1.0f;

            while (percentage > 0)
            {
                _ledBarGraph.Percentage = percentage;
                percentage -= 0.1f;
                Thread.Sleep(200);                    
            }
        }
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Core.Samples) 

### Wiring Example

<img src="../../API_Assets/Meadow.Foundation.Leds.LedBarGraph/LedBarGraph.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />