---
uid: Meadow.Foundation.Displays.Ch1115
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ch1115
---

| Ch1115 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Ch1115) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Ch1115/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.Ch1115/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.Ch1115.svg?label=Meadow.Foundation.Displays.Ch1115" alt="NuGet Gallery for Meadow.Foundation.Displays.Ch1115" /></a> |

### Code Example

```csharp
MicroGraphics graphics;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    var ch1115 = new Ch1115
    (
        spiBus: Device.CreateSpiBus(),
        chipSelectPin: Device.Pins.D02,
        dcPin: Device.Pins.D01,
        resetPin: Device.Pins.D00,
        width: 128,
        height: 64
    );

    graphics = new MicroGraphics(ch1115);
    graphics.CurrentFont = new Font8x8();

    return base.Initialize();
}

public override Task Run()
{
    graphics.Clear();
    graphics.DrawTriangle(10, 10, 50, 50, 10, 50, false);
    graphics.DrawRectangle(20, 15, 40, 20, true);
    graphics.DrawText(5, 5, "CH1115");
    graphics.Show();

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Ch1115/Samples/Ch1115_Sample)

