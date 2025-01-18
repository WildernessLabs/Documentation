---
uid: Meadow.Foundation.Leds.PwmLed
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Leds.PwmLed
---

| PwmLed | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Leds) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" alt="NuGet Gallery for Meadow.Foundation" /></a> |

**PwmLed** represents an LED whose voltage (and brightness) is controlled by the duty-cycle of a PWM signal. It can be used both with Leds that have been current limited with in-series resistors, or Leds without resistors.

Controlling an LED via a PWM signal is more power efficient than using a current-limiting resistor. It also provides more control, allowing multiple grades of brightness. 

To use PwmLed without a resistor, pass in the forward voltage (voltage drop) of the LED to the `forwardVoltage` constructor parameter, and the class will limit its output to the maximum forward voltage rating of the LED.

To use with an LED that has a resistor in series, pass `0.0` or `TypicalForwardVoltage.ResistorLimited` for the `forwardVoltage` parameter.

### Code Example

```csharp
PwmLedBarGraph pwmLedBarGraph;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

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

    pwmLedBarGraph = new PwmLedBarGraph(pins, new Voltage(2.2));

    return Task.CompletedTask;
}

public override async Task Run()
{
    Resolver.Log.Info("TestLedBarGraph...");

    float percentage = 0;

    while (true)
    {
        Resolver.Log.Info("Turning them on and off for 200ms using SetLed...");
        for (int i = 0; i < pwmLedBarGraph.Count; i++)
        {
            await pwmLedBarGraph.SetLed(i, true);
            await Task.Delay(100);
            await pwmLedBarGraph.SetLed(i, false);
        }

        await Task.Delay(1000);

        Resolver.Log.Info("Turning them on using Percentage...");
        while (percentage < 1)
        {
            percentage += 0.01f;
            await pwmLedBarGraph.SetPercentage(Math.Min(1.0f, percentage));
            await Task.Delay(100);
        }

        await Task.Delay(1000);

        Resolver.Log.Info("Turning them off using Percentage...");
        while (percentage > 0)
        {
            percentage -= 0.01f;
            await pwmLedBarGraph.SetPercentage(Math.Max(0.0f, percentage));
            await Task.Delay(100);
        }

        await Task.Delay(1000);

        Resolver.Log.Info("Blinking for 5 seconds at 500ms on/off...");
        await pwmLedBarGraph.StartBlink();
        await Task.Delay(5000);
        await pwmLedBarGraph.StopAnimation();

        await Task.Delay(1000);

        Resolver.Log.Info("Bar blinking with high and low brightness for 5 seconds...");
        await pwmLedBarGraph.StartBlink(TimeSpan.FromMilliseconds(200), TimeSpan.FromMilliseconds(200), 0.75f, 0.25f);
        await Task.Delay(5000);
        await pwmLedBarGraph.StopAnimation();

        await Task.Delay(1000);

        Resolver.Log.Info("Bar pulsing for 5 seconds...");
        await pwmLedBarGraph.StartPulse();
        await Task.Delay(5000);
        await pwmLedBarGraph.StopAnimation();

        await Task.Delay(1000);

        await pwmLedBarGraph.SetBrightness(0);

        await Task.Delay(1000);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples/Leds.PwmLedBarGraph_Sample)

### Wiring Example

![PWM LED connected to a Meadow F7](/API_Assets/Meadow.Foundation.Leds.PwmLed/PwmLed_Fritzing.svg)
