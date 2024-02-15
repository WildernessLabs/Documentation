---
uid: Meadow.Foundation.Displays.Ssd1351
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ssd1351
---

| Ssd1351 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.TftSpi/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.TftSpi.svg?label=Meadow.Foundation.Displays.TftSpi" alt="NuGet Gallery for Meadow.Foundation.Displays.TftSpi" /></a> |

The **SSD1351** is a display controller used to drive 16bpp (RGB565) color OLED displays over SPI. These displays are commonly found with a resolution of 128x128.

### Code Example

```csharp
MicroGraphics graphics;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing ...");

    var spiBus = Device.CreateSpiBus();

    var display = new Ssd1351(
        spiBus: spiBus,
        chipSelectPin: Device.Pins.D02,
        dcPin: Device.Pins.D01,
        resetPin: Device.Pins.D00,
        width: 128, height: 128);

    graphics = new MicroGraphics(display)
    {
        CurrentFont = new Font8x12(),
        IgnoreOutOfBoundsPixels = true
    };

    return base.Initialize();
}

public override Task Run()
{
    graphics.Clear();

    graphics.DrawCircle(80, 80, 40, Meadow.Foundation.Color.Cyan, false);

    int indent = 0;
    int spacing = 10;
    int y = indent;

    graphics.DrawText(indent, y, "Meadow F7 (SSD1351)");

    graphics.DrawText(indent, y += spacing, "Red", Meadow.Foundation.Color.Red);
    graphics.DrawText(indent, y += spacing, "Purple", Meadow.Foundation.Color.Purple);
    graphics.DrawText(indent, y += spacing, "BlueViolet", Meadow.Foundation.Color.BlueViolet);
    graphics.DrawText(indent, y += spacing, "Blue", Meadow.Foundation.Color.Blue);
    graphics.DrawText(indent, y += spacing, "Cyan", Meadow.Foundation.Color.Cyan);
    graphics.DrawText(indent, y += spacing, "LawnGreen", Meadow.Foundation.Color.LawnGreen);
    graphics.DrawText(indent, y += spacing, "GreenYellow", Meadow.Foundation.Color.GreenYellow);
    graphics.DrawText(indent, y += spacing, "Yellow", Meadow.Foundation.Color.Yellow);
    graphics.DrawText(indent, y += spacing, "Orange", Meadow.Foundation.Color.Orange);
    graphics.DrawText(indent, y += spacing, "Brown", Meadow.Foundation.Color.Brown);

    graphics.Show();

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Samples/Ssd1351_Sample)

### Wiring Example

 To wire a Ssd1351 to your Meadow board, connect the following:

| Ssd1351 | Meadow Pin |
|---------|------------|
| LED-    | 3V3        |
| LED+    | GND        |
| MOSI    | COPI       |
| SCK     | SCK        |
| RESET   | D15        |
| A0      | D14        |
| CS      | D13        |
| VCC     | 3V3        |
| GND     | GND        |

It should look like the following diagram:

![Wiring a Ssd1351 to a Meadow F7](/API_Assets/Meadow.Foundation.Displays.Tft.Ssd1351/Ssd1351_Fritzing.png)

# Class Ssd1351
Represents a Ssd1351 TFT color display

###### **Assembly**: TftSpi.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/Drivers/Ssd1351.cs#L9)
```csharp title="Declaration"
public class Ssd1351 : TftSpiBase, IGraphicsDisplay, ISpiPeripheral, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Displays.TftSpiBase](../TftSpiBase)

**Implements:**  
[Meadow.Foundation.Graphics.IGraphicsDisplay](../IGraphicsDisplay), `Meadow.Hardware.ISpiPeripheral`, `System.IDisposable`

## Properties
### DefaultColorMode
The default display color mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/Drivers/Ssd1351.cs#L14)
```csharp title="Declaration"
public override ColorMode DefaultColorMode { get; }
```
### SupportedColorModes
The color modes supported by the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/Drivers/Ssd1351.cs#L19)
```csharp title="Declaration"
public override ColorMode SupportedColorModes { get; }
```
## Methods
### Initialize()
Initialize the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/Drivers/Ssd1351.cs#L57)
```csharp title="Declaration"
protected override void Initialize()
```
### SetAddressWindow(int, int, int, int)
Set address window to update
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/Drivers/Ssd1351.cs#L140)
```csharp title="Declaration"
protected override void SetAddressWindow(int x0, int y0, int x1, int y1)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x0* | Start x position in pixels |
| `System.Int32` | *y0* | End x position in pixels |
| `System.Int32` | *x1* | Start y position in pixels |
| `System.Int32` | *y1* | End y position in pixels |

### InvertDisplay(bool)
Invert the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/Drivers/Ssd1351.cs#L157)
```csharp title="Declaration"
public void InvertDisplay(bool invert)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *invert* |


## Implements

* [Meadow.Foundation.Graphics.IGraphicsDisplay](../IGraphicsDisplay)
* `Meadow.Hardware.ISpiPeripheral`
* `System.IDisposable`
