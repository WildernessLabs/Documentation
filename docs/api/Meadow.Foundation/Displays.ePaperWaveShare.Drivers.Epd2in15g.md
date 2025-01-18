---
uid: Displays.ePaperWaveShare.Drivers.Epd2in15g
slug: /docs/api/Meadow.Foundation/Displays.ePaperWaveShare.Drivers.Epd2in15g
---

| Epd2in15g | |
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

    var display = new Epd2in15g(
            spiBus: Device.CreateSpiBus(),
            chipSelectPin: Device.Pins.A04,
            dcPin: Device.Pins.A03,
            resetPin: Device.Pins.A02,
            busyPin: Device.Pins.A01);

    graphics = new MicroGraphics(display);

    return Task.CompletedTask;
}

public override Task Run()
{
    Resolver.Log.Info("Run");

    graphics.Clear();

    graphics.CurrentFont = new Font12x16();
    graphics.DrawText(0, 0, "Meadow F7", Color.Black, scaleFactor: ScaleFactor.X2);
    graphics.DrawText(0, 50, "Yellow", Color.Yellow, scaleFactor: ScaleFactor.X2);
    graphics.DrawText(0, 100, "Red", Color.Red, scaleFactor: ScaleFactor.X2);

    graphics.Show();

    Resolver.Log.Info("Run complete");

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Samples/Epd2in15g_Sample)

