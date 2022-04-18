---
uid: Meadow.Foundation.Leds.PwmLed
remarks: *content
---

| PwmLed | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Leds) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" /></a> |

**PwmLed* represents an LED whose voltage (and brightness) is controlled by the duty-cycle of a PWM signal. It can be used both with Leds that have been current limited with in-series resistors, or Leds without resistors.

Controlling an LED via a PWM signal is more power efficient than using a current-limiting resistor. It also provides more control, allowing multiple grades of brightness. 

To use PwmLed without a resistor, pass in the forward voltage (voltage drop) of the LED to the `forwardVoltage` constructor parameter, and the class will limit its output to the maximum forward voltage rating of the LED.

To use with an LED that has a resistor in series, pass `0.0` or `TypicalForwardVoltage.ResistorLimited` for the `forwardVoltage` parameter.

### Code Example

```csharp
PwmLedBarGraph pwmLedBarGraph;

public MeadowApp()
{
    Console.WriteLine("Initializing...");

    // Using an array of Pins that support PWM (D02 - D13)
    IPin[] pins =
    {
         Device.Pins.D11,
         Device.Pins.D10,
         Device.Pins.D09,
         Device.Pins.D08,
         Device.Pins.D07,
         Device.Pins.D06,
         Device.Pins.D05,
         Device.Pins.D04,
         Device.Pins.D03,
         Device.Pins.D02
    };
    pwmLedBarGraph = new PwmLedBarGraph(Device, pins, new Voltage(3.3));

    TestPwmLedBarGraph();
}

protected void TestPwmLedBarGraph()
{
    Console.WriteLine("TestLedBarGraph...");

    decimal percentage = 0;

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
        while (percentage < 1)
        {
            percentage += 0.01m;
            pwmLedBarGraph.Percentage = (float) Math.Min(1.0m, percentage);
            Thread.Sleep(100);
        }

        Thread.Sleep(1000);

        Console.WriteLine("Turning them off using Percentage...");
        while (percentage > 0)
        {
            percentage -= 0.01m;
            pwmLedBarGraph.Percentage = (float)Math.Max(0.0m, percentage);
            Thread.Sleep(100);
        }

        Thread.Sleep(1000);

        Console.WriteLine("Bar blinking on and off...");
        pwmLedBarGraph.StartBlink();
        Thread.Sleep(3000);
        pwmLedBarGraph.Stop();

        Thread.Sleep(1000);

        Console.WriteLine("Bar blinking with high and low brightness...");
        pwmLedBarGraph.StartBlink(TimeSpan.FromMilliseconds(500), TimeSpan.FromMilliseconds(500), 1f, 0.25f);
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

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples/Leds.PwmLedBarGraph_Sample)

### Wiring Example

<img src="../../API_Assets/Meadow.Foundation.Leds.PwmLed/PwmLed_Fritzing.svg" 
