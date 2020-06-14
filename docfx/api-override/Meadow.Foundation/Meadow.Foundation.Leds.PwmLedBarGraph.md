---
uid: Meadow.Foundation.Leds.PwmLedBarGraph
remarks: *content
---

| LedBarGraph |             |
|-------------|-------------|
| Status      | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Core/Leds/) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" style="width: auto; height: -webkit-fill-available;" /></a> |

An LED Bar Graph is packaged array of LEDs commonly used to indicate level or progress and commonly include 8 or 10 leds.

The **PwmLedBarGraph** class allows you to control an led bar graph using PWM ports.

<img src="../../API_Assets/Meadow.Foundation.Leds.PwmLedBarGraph/img_LedBarGraph.jpg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

Use the `SetLed` method to turn on or off LEDs individually, or assign a value on the `Percentage` property to represent it visually on the graph bar, like a battery indicator, temperature, humidity, etc.  

### Code Example

The following example shows how to use the intanciate a PwmLedBarGraph witn an array of PWM ports, and turn on/off leds individually, make the entire bar blink and pulse:

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    PwmLedBarGraph pwmLedBarGraph;

    public MeadowApp()
    {
        Console.WriteLine("Initializing...");

        // Using an array of IPwmPorts
        IPwmPort[] ports =
        {
                Device.CreatePwmPort(Device.Pins.D04),
                Device.CreatePwmPort(Device.Pins.D05),
                Device.CreatePwmPort(Device.Pins.D06),
                Device.CreatePwmPort(Device.Pins.D07),
                Device.CreatePwmPort(Device.Pins.D08),
                Device.CreatePwmPort(Device.Pins.D09),
                Device.CreatePwmPort(Device.Pins.D10),
                Device.CreatePwmPort(Device.Pins.D11),
                Device.CreatePwmPort(Device.Pins.D12),
                Device.CreatePwmPort(Device.Pins.D13)
        };
        pwmLedBarGraph = new PwmLedBarGraph(ports, 0.25f);            

        TestPwmLedBarGraph();
    }

    protected void TestPwmLedBarGraph()
    {
        Console.WriteLine("TestLedBarGraph...");

        float percentage = 0;

        while (true)
        {
            Console.WriteLine("Turning them on using SetLed...");
            for (int i = 0; i < pwmLedBarGraph.Count; i++)
            {
                pwmLedBarGraph.SetLed(i, true);
                Thread.Sleep(300);
            }

            Thread.Sleep(1000);

            Console.WriteLine("Turning them off using SetLed...");
            for (int i = pwmLedBarGraph.Count - 1; i >= 0; i--)
            {
                pwmLedBarGraph.SetLed(i, false);
                Thread.Sleep(300);
            }

            Thread.Sleep(1000);

            Console.WriteLine("Turning them on using Percentage...");
            while (percentage <= 1)
            {
                percentage += 0.01f;
                pwmLedBarGraph.Percentage = Math.Min(1.0f, percentage);
                Thread.Sleep(100);
            }

            Thread.Sleep(1000);

            Console.WriteLine("Turning them off using Percentage...");
            while (percentage >= 0)
            {
                percentage -= 0.01f;
                pwmLedBarGraph.Percentage = Math.Max(0.0f, percentage);
                Thread.Sleep(100);
            }

            Thread.Sleep(1000);

            Console.WriteLine("Bar blinking on and off...");
            pwmLedBarGraph.StartBlink();
            Thread.Sleep(3000);
            pwmLedBarGraph.Stop();

            Thread.Sleep(1000);

            Console.WriteLine("Bar pulsing...");
            pwmLedBarGraph.StartPulse();
            Thread.Sleep(3000);
            pwmLedBarGraph.Stop();

            Thread.Sleep(1000);
        }
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Core.Samples) 

### Wiring Example

<img src="../../API_Assets/Meadow.Foundation.Leds.PwmLedBarGraph/PwmLedBarGraph_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />