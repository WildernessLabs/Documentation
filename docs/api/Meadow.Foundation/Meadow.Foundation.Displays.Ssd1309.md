---
uid: Meadow.Foundation.Displays.Ssd1309

---

| Ssd1309 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.Ssd130x/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.Ssd130x.svg?label=Meadow.Foundation.Displays.Ssd130x" alt="NuGet Gallery for Meadow.Foundation.Displays.Ssd130x" /></a> |

The **SSD1309** is a display controller used to control small, low resolution, single color OLED displays. OLED displays generate their own light - no backlight is included or required.

SSD1309 displays can be found supporting both I2C and SPI and come in resolutions of 32x128, 64x128, 16x96 and 64x96.

You may find mutlicolor variants, however, the color is achieved by placing one or more color filter over the single color display.

### Code Example

```csharp
MicroGraphics graphics;
Ssd1309 display;

public override Task Initialize()
{
    CreateSpiDisplay();
    //CreateI2CDisplay();

    Resolver.Log.Info("Create canvas...");
    graphics = new MicroGraphics(display);

    return base.Initialize();
}

void CreateSpiDisplay()
{
    Resolver.Log.Info("Create Display with SPI...");

    var config = new Meadow.Hardware.SpiClockConfiguration(new Frequency(6000, Frequency.UnitType.Kilohertz), Meadow.Hardware.SpiClockConfiguration.Mode.Mode0);

    var bus = Device.CreateSpiBus(Device.Pins.SCK, Device.Pins.MOSI, Device.Pins.MISO, config);

    display = new Ssd1309
    (
        spiBus: bus,
        chipSelectPin: Device.Pins.D02,
        dcPin: Device.Pins.D01,
        resetPin: Device.Pins.D00
    );
}

void CreateI2CDisplay()
{
    Resolver.Log.Info("Create Display with I2C...");

    display = new Ssd1309
    (
        i2cBus: Device.CreateI2cBus(),
        address: 60
    );
}

public override Task Run()
{
    graphics.Clear();
    graphics.CurrentFont = new Font8x12();
    graphics.DrawText(0, 0, "Meadow F7", Meadow.Foundation.Color.White);
    graphics.DrawRectangle(5, 14, 30, 10, true);

    Resolver.Log.Info("Show...");
    graphics.Show();
    Resolver.Log.Info("Show Complete");

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Samples/Ssd1309_Sample)

### Wiring Example

 To wire a Ssd1309 to your Meadow board using I2C, connect the following:

| Ssd1309 | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |

The OLED displays are available with a SPI or I2C interfaces. Wiring for the I2C interface is as follows:

![Wiring a Ssd1309 to a Meadow F7](../../API_Assets/Meadow.Foundation.Displays.Ssd1309/SSD1309_Fritzing.png)
