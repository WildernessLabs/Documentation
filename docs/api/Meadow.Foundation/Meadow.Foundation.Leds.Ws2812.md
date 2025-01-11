---
uid: Meadow.Foundation.Leds.Ws2812
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Leds.Ws2812
---

| Ws2812 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Leds.Ws2812) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Leds.Ws2812/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Leds.Ws2812/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Leds.Ws2812.svg?label=Meadow.Foundation.Leds.Ws2812" alt="NuGet Gallery for Meadow.Foundation.Leds.Ws2812" /></a> |
### Code Example

```csharp
private Ws2812 neoPixels;

private readonly int ledCount = 24;

public override Task Initialize()
{
    var spiBus = Device.CreateSpiBus();
    neoPixels = new Ws2812(spiBus, ledCount);

    return base.Initialize();
}

public override async Task Run()
{
    while (true)
    {
        for (int i = 0; i < neoPixels.NumberOfLeds; i++)
        {
            neoPixels.SetAllLeds(Color.Black);
            neoPixels.SetLed(i, Color.Blue);
            neoPixels.Show();
            await Task.Delay(100);
        }
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Leds.Ws2812/Samples/Ws2812_Sample)


