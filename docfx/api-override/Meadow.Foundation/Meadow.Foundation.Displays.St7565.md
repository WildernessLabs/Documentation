---
uid: Meadow.Foundation.Displays.St7565
remarks: *content
---

| St7565 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.St7565) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.St7565/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.St7565.svg?label=Meadow.Foundation.Displays.St7565" alt="NuGet Gallery for St7565" /></a> |

### Code Example

```csharp
MicroGraphics graphics;

public MeadowApp()
{
    Console.WriteLine("Initializing...");

    var sT7565 = new St7565
    (
        device: Device, 
        spiBus: Device.CreateSpiBus(),
        chipSelectPin: Device.Pins.D02,
        dcPin: Device.Pins.D00,
        resetPin: Device.Pins.D01,
        width: 128, 
        height: 64
    );

    graphics = new MicroGraphics(sT7565);

    graphics.CurrentFont = new Font8x8();
    graphics.Clear();
    graphics.DrawTriangle(10, 10, 50, 50, 10, 50, Meadow.Foundation.Color.Red);
    graphics.DrawRectangle(20, 15, 40, 20, Meadow.Foundation.Color.Yellow, true);            
    graphics.DrawText(5, 5, "ST7565");
    graphics.Show();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Samples/St7565_Sample)

### Wiring Example

 To wire a ST7565 to your Meadow board, connect the following:

| ST7565 | Meadow Pin |
|--------|------------|
| LEDA   | GND        |
| GND    | GND        |
| VCC    | 3V3        |
| SDA    | MOSI       |
| SCL    | SCK        |
| A0     | D00        |
| RST    | D01        |
| CS     | D02        |

<img src="../../API_Assets/Meadow.Foundation.Displays.St7565/St7565_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />




