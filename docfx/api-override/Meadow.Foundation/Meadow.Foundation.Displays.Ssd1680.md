---
uid: Meadow.Foundation.Displays.Ssd1680
remarks: *content
---

| Ssd1680 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Datasheets) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.ePaper/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.ePaper.svg?label=Meadow.Foundation.Displays.ePaper" alt="NuGet Gallery for Meadow.Foundation.Displays.ePaper" /></a> |
### Code Example

```csharp
MicroGraphics graphics;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize ...");

    var display = new Ssd1680(
        spiBus: Device.CreateSpiBus(),
        chipSelectPin: Device.Pins.A04,
        dcPin: Device.Pins.A03,
        resetPin: Device.Pins.A02,
        busyPin: Device.Pins.A01,
        width: 122,
        height: 250);

    graphics = new MicroGraphics(display)
    {
        Rotation = RotationType._270Degrees
    };

    return base.Initialize();
}

public override Task Run()
{
    Resolver.Log.Info("Run ...");

    graphics.Clear();

    graphics.DrawRectangle(10, 40, 120, 60, Color.Black, true);
    graphics.DrawRectangle(20, 80, 120, 90, Color.Red, true);

    graphics.CurrentFont = new Font12x16();
    graphics.DrawText(2, 20, "Meadow F7", Color.Black);
    graphics.DrawText(30, 50, "Color", Color.Red);
    graphics.DrawText(50, 90, "Black", Color.Black);
    graphics.DrawText(50, 120, "White", Color.White);

    graphics.Show();

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Samples/SSD1680_Sample)


