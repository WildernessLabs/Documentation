---
uid: Meadow.Foundation.Displays.Ssd1327
remarks: *content
---

| Ssd1327 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd1327) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd1327/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.Ssd1327/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.Ssd1327.svg?label=Meadow.Foundation.Displays.Ssd1327" alt="NuGet Gallery for Ssd1327" /></a> |

### Code Example

```csharp
MicroGraphics graphics;

public MeadowApp()
{
    Console.WriteLine("Initialize display...");

    var spiBus = Device.CreateSpiBus();

    var display = new Ssd1327(Device, spiBus, Device.Pins.D02, Device.Pins.D01, Device.Pins.D00);

    display.SetContrast(60);

    graphics = new MicroGraphics(display);
    graphics.CurrentFont = new Font8x12();

    graphics.Clear();

    for(int i = 10; i > 0; i--)
    {   //interate across different brightnesses
        graphics.DrawText(0, i * 11, "SSD1327", Color.FromRgb(i * 0.1, i * 0.1, i * 0.1));
    } 

    graphics.Show();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd1327/Samples/Ssd1327_Sample)

### Wiring Example

To wire a Ssd1327 to your Meadow board, connect the following:

| Ssd1327  | Meadow Pin |
|----------|------------|
| GND      | GND        |
| VCC      | 3V3        |
| SCL      | SCK        |
| SDA      | MOSI       |
| RESET    | D00        |
| DC       | D01        |
| CS       | D02        |

It should look like the following diagram:

<img src="../../API_Assets/Meadow.Foundation.Displays.Ssd1327/Ssd1327_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

