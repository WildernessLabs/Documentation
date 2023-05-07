---
uid: Meadow.Foundation.Displays.Pcd8544
remarks: *content
---

| Pcd8544 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.Pcd8544/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.Pcd8544.svg?label=Meadow.Foundation.Displays.Pcd8544" alt="NuGet Gallery for Meadow.Foundation.Displays.Pcd8544" /></a> |

The **PCD8544** display, also known as a Nokia 5110 LCD, is a single color 84x84 LCD display. Data is sent to the display via SPI. The also typically also include an led backlight controlled via a single pin. 

These displays have excellent visibility in daylight, even without the backlight, making them a good choice for builds with low-power restrictions and require visibility is bright light or daylight.

### Purchasing

* [NOKIA 5110 SPI LCD graphic display 84x48](https://www.ebay.com/sch/i.html?LH_CAds=&_ex_kw=&_fpos=&_fspt=1&_mPrRngCbx=1&_nkw=Nokia+5110+arduino&_sacat=&_sadis=&_sop=12&_udhi=&_udlo=&_fosrp=1)

### Code Example

```csharp
MicroGraphics graphics;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    var display = new Pcd8544
    (
        spiBus: Device.CreateSpiBus(),
        chipSelectPin: Device.Pins.D01,
        dcPin: Device.Pins.D00,
        resetPin: Device.Pins.D02
    );

    graphics = new MicroGraphics(display);

    return base.Initialize();
}

public override Task Run()
{
    graphics.Clear(true);
    graphics.CurrentFont = new Font8x12();
    graphics.DrawText(0, 0, "PCD8544");
    graphics.DrawRectangle(5, 14, 30, 10, true);

    graphics.Show();

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544/Samples/Pcd8544_Sample)

### Wiring Example

 To wire a PCD8544 to your Meadow board, connect the following:

| PCD8544 | Meadow Pin |
|---------|------------|
| GND     | GND        |
| LIGHT   | GND        |
| VCC     | 3V3        |
| CLK     | SCK        |
| DIN     | MOSI       |
| DC      | D00        |
| CE      | D01        |
| RST     | D02        |

<img src="../../API_Assets/Meadow.Foundation.Displays.Pcd8544/PCD8544_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />




