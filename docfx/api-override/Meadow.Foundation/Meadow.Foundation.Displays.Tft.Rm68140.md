---
uid: Meadow.Foundation.Displays.Tft.Rm68140
remarks: *content
---

| Rm68140       |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.TftSpi) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.TftSpi/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.TftSpi.svg?label=Meadow.Foundation.Displays.TftSpi" style="width: auto; height: -webkit-fill-available;" /></a> |

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Rm68140 display;
    GraphicsLibrary graphics;

    public MeadowApp ()
    {
        display = new Rm68140(
            device: Device, 
            spiBus: Device.CreateSpiBus(),
			chipSelectPin: Device.Pins.D02,
			dcPin: Device.Pins.D01,
            resetPin: Device.Pins.D00,
			width: 320, height: 480,
			displayColorMode: DisplayColorMode.Format12bppRgb444);

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

### Circuit Example

 To wire a Rm68140 to your Meadow board, connect the following:

| Rm68140 | Meadow Pin |
|---------|------------|
| GND     | GND        |
| VCC     | 3V3        |
| SCL     | SCK        |
| SDA     | MOSI       |
| CS      | D02        |
| DC      | D01        |
| RESET   | D00        |

It should look like the following diagram:

<img src="../../API_Assets/Meadow.Foundation.Displays.Tft.Rm68140/Rm68140_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />