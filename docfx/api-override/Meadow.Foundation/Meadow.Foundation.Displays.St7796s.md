---
uid: Meadow.Foundation.Displays.St7796s
remarks: *content
---

| St7796s | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.TftSpi/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.TftSpi.svg?label=Meadow.Foundation.Displays.TftSpi" alt="NuGet Gallery for Meadow.Foundation.Displays.TftSpi" /></a> |

### Code Example

```csharp
MicroGraphics graphics;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing ...");

    var spiBus = Device.CreateSpiBus();

    Resolver.Log.Info("Create display driver instance");

    var display = new Ssd1331
    (
        spiBus: spiBus,
        resetPin: Device.Pins.D00,
        chipSelectPin: Device.Pins.D02,
        dcPin: Device.Pins.D01,
        width: 96, height: 64
    );

    graphics = new MicroGraphics(display);
    graphics.CurrentFont = new Font8x8();

    return base.Initialize();
}

public override Task Run()
{
    graphics.Clear();

    graphics.DrawTriangle(10, 10, 50, 50, 10, 50, Meadow.Foundation.Color.Red);
    graphics.DrawRectangle(20, 15, 40, 20, Meadow.Foundation.Color.Yellow, false);
    graphics.DrawText(5, 5, "Meadow F7");

    graphics.Show();

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Samples/St7796s_Sample)

### Wiring Example

 To wire a St7796s to your Meadow board, connect the following:

| St7796s | Meadow Pin |
|---------|------------|
| GND     | GND        |
| VCC     | 3V3        |
| SCL     | SCK        |
| SDA     | MOSI       |
| CS      | D02        |
| DC      | D01        |
| RESET   | D00        |

It should look like the following diagram:

<img src="../../API_Assets/Meadow.Foundation.Displays.Tft.St7796s/St7796s_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />




