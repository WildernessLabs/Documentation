---
uid: Meadow.Foundation.Displays.Ili9225
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ili9225
---

| Ili9225 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.TftSpi/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.TftSpi.svg?label=Meadow.Foundation.Displays.TftSpi" alt="NuGet Gallery for Meadow.Foundation.Displays.TftSpi" /></a> |
### Code Example

```csharp
MicroGraphics graphics;
Ili9225 display;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing ...");

    display = new Ili9225
    (
        spiBus: Device.CreateSpiBus(),
        chipSelectPin: Device.Pins.D02,
        dcPin: Device.Pins.D00,
        resetPin: Device.Pins.D01
    );

    graphics = new MicroGraphics(display)
    {
        IgnoreOutOfBoundsPixels = true,
        CurrentFont = new Font12x16()
    };

    return base.Initialize();
}

public override Task Run()
{
    Resolver.Log.Info("Run ...");

    graphics.Clear();

    graphics.DrawTriangle(10, 30, 50, 50, 10, 50, Color.Red);
    graphics.DrawRectangle(20, 45, 40, 20, Color.Yellow, false);
    graphics.DrawCircle(50, 50, 40, Color.Blue, false);
    graphics.DrawText(5, 5, "Meadow F7", Color.White);

    graphics.Show();

    Resolver.Log.Info("Complete ...");

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Samples/Ili9225_Sample)

