---
uid: Meadow.Foundation.Displays.Ili9341
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ili9341
---

| Ili9341 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.TftSpi/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.TftSpi.svg?label=Meadow.Foundation.Displays.TftSpi" alt="NuGet Gallery for Meadow.Foundation.Displays.TftSpi" /></a> |

The **ILI9341** is a display controller used to drive color displays over SPI using 12, 16 or 18 bbp. These displays require a backlight. These displays are commonly found with a resolution of 320x240.

The Meadow.Foundation ILI9341 driver currently only supports 16bpp RGB565.

### Code Example

```csharp
MicroGraphics graphics;
Ili9341 display;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing ...");

    Resolver.Log.Info("Create display driver instance");

    display = new Ili9341
    (
        spiBus: Device.CreateSpiBus(),
        chipSelectPin: Device.Pins.D13,
        dcPin: Device.Pins.D14,
        resetPin: Device.Pins.D15,
        width: 240, height: 320
    );

    graphics = new MicroGraphics(display)
    {
        IgnoreOutOfBoundsPixels = true,
        CurrentFont = new Font12x16()
    };

    return base.Initialize();
}

public override Task Run()
{
    graphics.Clear();

    graphics.DrawTriangle(10, 30, 50, 50, 10, 50, Meadow.Foundation.Color.Red);
    graphics.DrawRectangle(20, 45, 40, 20, Meadow.Foundation.Color.Yellow, false);
    graphics.DrawCircle(50, 50, 40, Meadow.Foundation.Color.Blue, false);
    graphics.DrawText(5, 5, "Meadow F7", Meadow.Foundation.Color.White);

    graphics.Show();

    DisplayTest();

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Samples/Ili9341_Sample)

### Wiring Example

 To wire a ILI9341 to your Meadow board, connect the following:

| ILI9341 | Meadow Pin |
|---------|------------|
| LED-    | 3V3        |
| LED+    | GND        |
| MOSI    | MOSI       |
| SCK     | SCK        |
| RESET   | D15        |
| A0      | D14        |
| CS      | D13        |
| VCC     | 3V3        |
| GND     | GND        |

It should look like the following diagram:

![Wiring a ILI9341 to a Meadow F7](/API_Assets/Meadow.Foundation.Displays.Tft.Ili9341/Ili9341_Fritzing.png)

# Class Ili9341
Represents a Ili9341 TFT color display

###### **Assembly**: TftSpi.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/Drivers/Ili9341.cs#L10)
```csharp title="Declaration"
public class Ili9341 : TftSpiBase, IGraphicsDisplay, ISpiPeripheral, IDisposable, IRotatableDisplay
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Displays.TftSpiBase](../TftSpiBase)

**Implements:**  
[Meadow.Foundation.Graphics.IGraphicsDisplay](../IRotatableDisplay)

## Properties
### DefaultSpiBusSpeed
SPI bus speed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/Drivers/Ili9341.cs#L15)
```csharp title="Declaration"
public override Frequency DefaultSpiBusSpeed { get; }
```
### DefaultColorMode
The default display color mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/Drivers/Ili9341.cs#L20)
```csharp title="Declaration"
public override ColorMode DefaultColorMode { get; }
```
### SupportedColorModes
The color modes supported by the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/Drivers/Ili9341.cs#L25)
```csharp title="Declaration"
public override ColorMode SupportedColorModes { get; }
```
## Methods
### Initialize()
Initialize the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/Drivers/Ili9341.cs#L65)
```csharp title="Declaration"
protected override void Initialize()
```
### SetRotation(RotationType)
Set the display rotation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/Drivers/Ili9341.cs#L132)
```csharp title="Declaration"
public void SetRotation(RotationType rotation)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.RotationType](../RotationType) | *rotation* | The rotation value |


## Implements

* [Meadow.Foundation.Graphics.IGraphicsDisplay](../IGraphicsDisplay)
* `Meadow.Hardware.ISpiPeripheral`
* `System.IDisposable`
* [Meadow.Foundation.Graphics.IRotatableDisplay](../IRotatableDisplay)
