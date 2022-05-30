---
uid: Meadow.Foundation.Displays.TftSpi.Hx8357d
remarks: *content
---

| Hx8357d | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/Drivers) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.TftSpi/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.TftSpi.svg?label=Meadow.Foundation.Displays.TftSpi" alt="NuGet Gallery for Hx8357d" /></a> |

### Code Example

```csharp
MicroGraphics graphics;

public MeadowApp()
{
    Console.WriteLine("Initializing ...");

    var config = new SpiClockConfiguration(new Frequency(12000, Frequency.UnitType.Kilohertz), SpiClockConfiguration.Mode.Mode0);
    var spiBus = Device.CreateSpiBus(Device.Pins.SCK, Device.Pins.MOSI, Device.Pins.MISO, config);

    Console.WriteLine("Create display driver instance");

    var display = new Hx8357d(device: Device, spiBus: spiBus,
        chipSelectPin: Device.Pins.D02,
        dcPin: Device.Pins.D01,
        resetPin: Device.Pins.D00,
        width: 320, height: 480)
    {
        IgnoreOutOfBoundsPixels = true
    };

    Console.WriteLine("Create graphics lib");

    graphics = new MicroGraphics(display);

    graphics.Clear();

    graphics.DrawRectangle(120, 0, 120, 220, Color.White, true);
    graphics.DrawRectangle(0, 0, 120, 20, Color.Red, true);
    graphics.DrawRectangle(0, 20, 120, 20, Color.Purple, true);
    graphics.DrawRectangle(0, 40, 120, 20, Color.Blue, true);
    graphics.DrawRectangle(0, 60, 120, 20, Color.Green, true);
    graphics.DrawRectangle(0, 80, 120, 20, Color.Yellow, true);
    graphics.DrawRectangle(0, 120, 120, 20, Color.Orange, true);

    graphics.Show();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Samples/Hx8357d_Sample)

### Wiring Example

 To wire a Hx8357d to your Meadow board, connect the following:

| Hx8357b | Meadow Pin |
|---------|------------|
| GND     | GND        |
| VCC     | 3V3        |
| SCL     | SCK        |
| SDA     | MOSI       |
| RESET   | D00        |
| DC      | D01        |
| CS      | D02        |

It should look like the following diagram:

<img src="../../API_Assets/Meadow.Foundation.Displays.Tft.Hx8357d/Hx8357d_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />




