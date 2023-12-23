---
uid: Meadow.Foundation.Displays.Uc1609c

---

| Uc1609c | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.Uc1609c/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.Uc1609c.svg?label=Meadow.Foundation.Displays.Uc1609c" alt="NuGet Gallery for Meadow.Foundation.Displays.Uc1609c" /></a> |

### Code Example

```csharp
MicroGraphics graphics;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    var uc1609c = new Uc1609c
    (
        spiBus: Device.CreateSpiBus(),
        chipSelectPin: Device.Pins.A03,
        dcPin: Device.Pins.A04,
        resetPin: Device.Pins.A05,
        width: 192,
        height: 64
    );

    graphics = new MicroGraphics(uc1609c)
    {
        CurrentFont = new Font8x8()
    };

    return base.Initialize();
}

public override Task Run()
{
    graphics.Clear();
    graphics.DrawTriangle(10, 10, 50, 50, 10, 50, false);
    graphics.DrawRectangle(20, 15, 40, 20, true);
    graphics.DrawText(5, 5, "UC1609C");
    graphics.DrawCircle(96, 32, 16);
    graphics.Show();

    Resolver.Log.Info("Run complete");

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Uc1609c/Samples/Uc1609c_Sample)

