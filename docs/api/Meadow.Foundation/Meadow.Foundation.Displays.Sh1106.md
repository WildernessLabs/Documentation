---
uid: Meadow.Foundation.Displays.Sh1106
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Sh1106
---

| Sh1106 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Sh110x) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Sh110x/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.Sh1106/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.Sh1106.svg?label=Meadow.Foundation.Displays.Sh1106" alt="NuGet Gallery for Meadow.Foundation.Displays.Sh1106" /></a> |

### Code Example

```csharp
MicroGraphics graphics;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    var sh1106 = new Sh1106
    (
        spiBus: Device.CreateSpiBus(),
        chipSelectPin: Device.Pins.D02,
        dcPin: Device.Pins.D01,
        resetPin: Device.Pins.D00
    );

    graphics = new MicroGraphics(sh1106);
    graphics.CurrentFont = new Font8x8();
    graphics.Rotation = RotationType._180Degrees;

    return base.Initialize();
}

public override Task Run()
{
    graphics.Clear();
    graphics.DrawRectangle(0, 0, 128, 64, false);
    graphics.DrawTriangle(10, 10, 50, 50, 10, 50, false);
    graphics.DrawRectangle(20, 15, 40, 20, true);
    graphics.DrawText(5, 5, "SH1106");
    graphics.Show();

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Sh110x/Samples/Sh1106_Sample)

