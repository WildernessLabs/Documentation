---
uid: Meadow.Foundation.Grove.Displays.OLEDDisplay1_12inch

---

| OLEDDisplay1_12inch | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/OLEDDisplay1_12inch) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Displays.OLEDDisplay112/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Displays.OLEDDisplay112.svg?label=Meadow.Foundation.Grove.Displays.OLEDDisplay112" alt="NuGet Gallery for Meadow.Foundation.Grove.Displays.OLEDDisplay112" /></a> |

### Code Example

```csharp
OLEDDisplay1_12inch display;
MicroGraphics graphics;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    display = new OLEDDisplay1_12inch(Device.CreateI2cBus(), OLEDDisplayVersion.Version3x);

    graphics = new MicroGraphics(display)
    {
        CurrentFont = new Font8x8(),
        Rotation = RotationType._180Degrees
    };

    return Task.CompletedTask;
}

public override Task Run()
{
    graphics.Clear();
    graphics.DrawRectangle(0, 0, graphics.Width, graphics.Height, false);
    graphics.DrawTriangle(10, 10, 50, 50, 10, 50, false);
    graphics.DrawRectangle(20, 15, 40, 20, true);
    graphics.DrawText(5, 5, "SH1107");
    graphics.Show();

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/OLEDDisplay1_12inch/Sample/OLEDDisplay1_12inch_Sample)

