---
uid: Meadow.Foundation.Displays.Ssd1306

---

| Ssd1306 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.Ssd130x/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.Ssd130x.svg?label=Meadow.Foundation.Displays.Ssd130x" alt="NuGet Gallery for Meadow.Foundation.Displays.Ssd130x" /></a> |

The **SSD1306** is a display controller used to control small, low resolution, single color OLED displays. OLED displays generate their own light - no backlight is included or required.

SDD1306 displays can be found supporting both I2C and SPI and come in resolutions of 32x128, 64x128, 16x96 and 64x96.

You may find mutlicolor variants, however, the color is achieved by placing one or more color filter over the single color display.

### Code Example

```csharp
MicroGraphics graphics;
Ssd1306 display;

public override Task Initialize()
{
    //CreateSpiDisplay();
    CreateI2CDisplay();

    graphics = new MicroGraphics(display);

    return base.Initialize();
}

void CreateSpiDisplay()
{
    Resolver.Log.Info("Create Display with SPI...");

    display = new Ssd1306
    (
        spiBus: Device.CreateSpiBus(),
        chipSelectPin: Device.Pins.D02,
        dcPin: Device.Pins.D01,
        resetPin: Device.Pins.D00,
        displayType: Ssd1306.DisplayType.OLED128x64
    );
}

void CreateI2CDisplay()
{
    Resolver.Log.Info("Create Display with I2C...");

    display = new Ssd1306
    (
        i2cBus: Device.CreateI2cBus(Meadow.Hardware.I2cBusSpeed.FastPlus),
        address: 60,
        displayType: Ssd1306.DisplayType.OLED128x32
    );
}

public override Task Run()
{
    graphics.Clear();
    graphics.CurrentFont = new Font8x12();
    graphics.DrawText(0, 0, "Meadow F7", Meadow.Foundation.Color.White);
    graphics.DrawRectangle(5, 14, 30, 10, true);

    graphics.Show();

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Samples/Ssd1306_Sample)

### Wiring Example

 To wire a Ssd1306 to your Meadow board using I2C, connect the following:

| Ssd1306 | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |

The OLED displays are available with a SPI or I2C interfaces. Wiring for the I2C interface is as follows:

<img src="../../API_Assets/Meadow.Foundation.Displays.Ssd1306/Ssd1306_Fritzing.png" />




