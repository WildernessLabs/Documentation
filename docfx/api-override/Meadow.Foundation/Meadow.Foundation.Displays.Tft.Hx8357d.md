---
uid: Meadow.Foundation.Displays.Tft.Hx8357d
remarks: *content
---

| Hx8357d       |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.TftSpi) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.TftSpi/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.TftSpi.svg?label=Meadow.Foundation.Displays.TftSpi" style="width: auto; height: -webkit-fill-available;" /></a> |

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Hx8357d display;
    GraphicsLibrary graphics;

    public MeadowApp ()
    {
        var config = new SpiClockConfiguration(6000, SpiClockConfiguration.Mode.Mode0);
        var spiBus = Device.CreateSpiBus(Device.Pins.SCK, Device.Pins.MOSI, Device.Pins.MISO, config);

        display = new Hx8357d(
            device: Device, 
            spiBus: spiBus,
            resetPin: Device.Pins.D00,
            dcPin: Device.Pins.D01,
            chipSelectPin: Device.Pins.D02,
            width: 320, height: 480);

        graphics = new GraphicsLibrary(display);

        graphics.CurrentFont = new Font8x8();
        graphics.Clear();
        graphics.DrawTriangle(10, 10, 50, 50, 10, 50, Meadow.Foundation.Color.Red);
        graphics.DrawRectangle(20, 15, 40, 20, Meadow.Foundation.Color.Yellow, false);
        graphics.DrawCircle(50, 50, 40, Meadow.Foundation.Color.Blue, false);
        graphics.DrawText(5, 5, "Meadow F7 SPI");
        graphics.Show();
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/WIP/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Samples/Displays.TftSpi.Hx8357d_Sample)

### Circuit Example

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