---
uid: Meadow.Foundation.Leds.Led
remarks: *content
---

| Led | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Leds) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" alt="NuGet Gallery for Led" /></a> |

An **LED** is a diode (a component that attempts to let current flow only one way through it) that emits light when voltage is applied to it. Because it is a diode, it only works when a voltage is applied in one direction. 

LEDs commonly have one lead longer (the Cathode) than the other (the Anode). The longer cathode leg indicates that it should be connected to the positive (+) side of a circuit.

### Code Example

```csharp
LedBarGraph ledBarGraph;

public MeadowApp()
{
    Console.WriteLine("Initializing...");

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

    ledBarGraph = new LedBarGraph(Device, pins);

    TestLedBarGraph();
}

protected void TestLedBarGraph()
{
    Console.WriteLine("TestLedBarGraph...");

    decimal percentage = 0;

    while (true)
    {
        Console.WriteLine("Turning them on and off for 1 second using SetLed...");
        for (int i = 0; i < ledBarGraph.Count; i++)
        {
            ledBarGraph.SetLed(i, true);
            Thread.Sleep(1000);
            ledBarGraph.SetLed(i, false);
        }

        Thread.Sleep(1000);

        Console.WriteLine("Turning them on using Percentage...");
        while (percentage < 1)
        {
            percentage += 0.10m;
            Console.WriteLine($"{percentage}");
            ledBarGraph.Percentage = (float) Math.Min(1.0m, percentage);
            Thread.Sleep(500);
        }

        Thread.Sleep(1000);

        Console.WriteLine("Turning them off using Percentage...");
        while (percentage > 0)
        {
            percentage -= 0.10m;
            Console.WriteLine($"{percentage}");
            ledBarGraph.Percentage = (float) Math.Max(0.0m, percentage);
            Thread.Sleep(500);
        }

        Thread.Sleep(1000);

        Console.WriteLine("Blinking for 3 seconds...");
        ledBarGraph.StartBlink();
        Thread.Sleep(3000);
        ledBarGraph.Stop();

        Thread.Sleep(1000);

        Console.WriteLine("Blinking for 3 seconds...");
        ledBarGraph.StartBlink(TimeSpan.FromSeconds(1), TimeSpan.FromSeconds(1));
        Thread.Sleep(3000);
        ledBarGraph.Stop();

        Thread.Sleep(1000);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples/Leds.LedBarGraph_Sample)

### Wiring Example

<img src="../../API_Assets/Meadow.Foundation.Leds.Led/Led_Fritzing.svg" 
