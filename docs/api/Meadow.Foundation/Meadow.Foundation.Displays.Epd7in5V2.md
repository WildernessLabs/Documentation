---
uid: Meadow.Foundation.Displays.Epd7in5V2
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Epd7in5V2
---

| Epd7in5V2 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.ePaperWaveShare/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.ePaperWaveShare.svg?label=Meadow.Foundation.Displays.ePaperWaveShare" alt="NuGet Gallery for Meadow.Foundation.Displays.ePaperWaveShare" /></a> |
### Code Example

```csharp
MicroGraphics graphics;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize ...");

    var display = new Epd7in5V2(
        spiBus: Device.CreateSpiBus(),
        chipSelectPin: Device.Pins.D03,
        dcPin: Device.Pins.D02,
        resetPin: Device.Pins.D01,
        busyPin: Device.Pins.D00,
        ColorMode.Format2bppGray);

    graphics = new MicroGraphics(display);

    return Task.CompletedTask;
}

public override Task Run()
{
    Resolver.Log.Info("Run");

    graphics.Clear();

    graphics.CurrentFont = new Font12x16();
    graphics.DrawText(0, 0, "Meadow F7", Color.Black, scaleFactor: ScaleFactor.X2);
    graphics.DrawText(0, 50, $"Black ({Color.Black.R}, {Color.Black.G}, {Color.Black.B})", Color.Black, scaleFactor: ScaleFactor.X2);
    graphics.DrawText(0, 100, $"Slate Gray ({Color.SlateGray.R}, {Color.SlateGray.G}, {Color.SlateGray.B})", Color.SlateGray, scaleFactor: ScaleFactor.X2);
    graphics.DrawText(0, 150, $"Dim Gray ({Color.DimGray.R}, {Color.DimGray.G}, {Color.DimGray.B})", Color.DimGray, scaleFactor: ScaleFactor.X2);
    graphics.DrawText(0, 200, $"Dark Gray ({Color.DarkGray.R}, {Color.DarkGray.G}, {Color.DarkGray.B})", Color.DarkGray, scaleFactor: ScaleFactor.X2);

    graphics.DrawRectangle(0, 240, graphics.Width, graphics.Height - 240, Color.SlateGray, true);

    graphics.DrawText(0, 250, $"Dark Gray ({Color.DarkGray.R}, {Color.DarkGray.G}, {Color.DarkGray.B})", Color.DarkGray, scaleFactor: ScaleFactor.X2);
    graphics.DrawText(0, 300, $"Light Gray ({Color.LightGray.R}, {Color.LightGray.G}, {Color.LightGray.B})", Color.LightGray, scaleFactor: ScaleFactor.X2);
    graphics.DrawText(0, 350, $"White ({Color.White.R}, {Color.White.G}, {Color.White.B})", Color.White, scaleFactor: ScaleFactor.X2);

    graphics.Show();

    Resolver.Log.Info("Run complete");

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Samples/Epd7in5V2_Sample)

