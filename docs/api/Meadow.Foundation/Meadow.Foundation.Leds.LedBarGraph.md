---
uid: Meadow.Foundation.Leds.LedBarGraph

---

| LedBarGraph | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Leds) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" alt="NuGet Gallery for Meadow.Foundation" /></a> |

An LED Bar Graph is packaged array of LEDs commonly used to indicate level or progress and commonly include 8 or 10 leds.

The **LedBarGraph** class allows you to control an led bar graph using GPIO.

![LED bar graphs](/API_Assets/Meadow.Foundation.Leds.LedBarGraph/img_LedBarGraph.jpg)

Use the `SetLed` method to turn on or off LEDs individually, or assign a value on the `Percentage` property to represent it visually on the graph bar, like a battery indicator, temperature, humidity, etc.  

### Code Example

```csharp
LedBarGraph ledBarGraph;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    // Using an array of Pins 
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

    ledBarGraph = new LedBarGraph(pins);

    return Task.CompletedTask;
}

public override async Task Run()
{
    Resolver.Log.Info("TestLedBarGraph...");

    float percentage = 0;

    while (true)
    {
        Resolver.Log.Info("Turning them on and off for 200ms using SetLed...");
        for (int i = 0; i < ledBarGraph.Count; i++)
        {
            await ledBarGraph.SetLed(i, true);
            await Task.Delay(100);
            await ledBarGraph.SetLed(i, false);
        }

        await Task.Delay(1000);

        Resolver.Log.Info("Turning them on using Percentage...");
        while (percentage < 1)
        {
            percentage += 0.10f;
            await ledBarGraph.SetPercentage(Math.Min(1.0f, percentage));
            await Task.Delay(100);
        }

        await Task.Delay(1000);

        Resolver.Log.Info("Turning them off using Percentage...");
        while (percentage > 0)
        {
            percentage -= 0.10f;
            await ledBarGraph.SetPercentage(Math.Max(0.0f, percentage));
            await Task.Delay(100);
        }

        await Task.Delay(1000);

        Resolver.Log.Info("Charging animation...");
        while (percentage < 1)
        {
            percentage += 0.10f;
            await ledBarGraph.SetPercentage(Math.Min(1.0f, percentage));
            await ledBarGraph.StartBlink(ledBarGraph.GetTopLedForPercentage());
            await Task.Delay(2000);
        }

        await Task.Delay(1000);

        Resolver.Log.Info("Discharging animation...");
        while (percentage > 0)
        {
            percentage -= 0.10f;
            await ledBarGraph.SetPercentage(Math.Max(0.0f, percentage));
            await ledBarGraph.StartBlink(ledBarGraph.GetTopLedForPercentage());
            await Task.Delay(2000);
        }

        await Task.Delay(1000);

        Resolver.Log.Info("Blinking for 5 seconds at 500ms on/off...");
        await ledBarGraph.StartBlink();
        await Task.Delay(5000);
        await ledBarGraph.StopAnimation();

        await Task.Delay(1000);

        Resolver.Log.Info("Blinking for 5 seconds at 200ms on/off...");
        await ledBarGraph.StartBlink(TimeSpan.FromMilliseconds(200), TimeSpan.FromMilliseconds(200));
        await Task.Delay(5000);
        await ledBarGraph.StopAnimation();

        await Task.Delay(1000);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples/Leds.LedBarGraph_Sample)

### Wiring Example

![Circuit layout sample showing an LED BAR graph connected to a Meadow F7](/API_Assets/Meadow.Foundation.Leds.LedBarGraph/LedBarGraph_Fritzing.svg)
