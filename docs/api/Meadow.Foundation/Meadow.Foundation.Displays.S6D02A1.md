---
uid: Meadow.Foundation.Displays.S6D02A1
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.S6D02A1
---

| S6D02A1 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.TftSpi/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.TftSpi.svg?label=Meadow.Foundation.Displays.TftSpi" alt="NuGet Gallery for Meadow.Foundation.Displays.TftSpi" /></a> |

The **S6D02A1** is a display controller used to drive color displays over SPI using 12, 16 or 18 bbp. These displays require a backlight. These displays are commonly found with a resolution of 128x160.

The Meadow.Foundation S6D02A1 driver currently only supports 16bpp RGB565.

### Code Example

```csharp
MicroGraphics graphics;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing ...");

    var spiBus = Device.CreateSpiBus();

    Resolver.Log.Info("Create display driver instance");

    var display = new S6D02A1
    (
        spiBus: spiBus,
        chipSelectPin: Device.Pins.D02,
        dcPin: Device.Pins.D01,
        resetPin: Device.Pins.D00,
        width: 128, height: 160
    );

    graphics = new MicroGraphics(display)
    {
        IgnoreOutOfBoundsPixels = true,
        CurrentFont = new Font8x8()
    };

    return base.Initialize();
}

public override Task Run()
{
    graphics.Clear();

    graphics.DrawTriangle(10, 10, 50, 50, 10, 50, Meadow.Foundation.Color.Red);
    graphics.DrawRectangle(20, 15, 40, 20, Meadow.Foundation.Color.Yellow, false);
    graphics.DrawCircle(50, 50, 40, Meadow.Foundation.Color.Blue, false);
    graphics.DrawText(5, 5, "Meadow F7");

    graphics.Show();

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Samples/S6D02A1_Sample)

### Wiring Example

 To wire a S6D02A1 to your Meadow board, connect the following:

| S6D02A1 | Meadow Pin |
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

![SevenSegment displays](/API_Assets/Meadow.Foundation.Displays.Tft.S6D02A1/S6D02A1_Fritzing.png)

# Class S6D02A1
Represents a Samsung S6D02A1 TFT color display

###### **Assembly**: TftSpi.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/Drivers/S6D02A1.cs#L9)
```csharp title="Declaration"
public class S6D02A1 : TftSpiBase, IGraphicsDisplay, ISpiPeripheral, IDisposable, IRotatableDisplay
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Displays.TftSpiBase](../TftSpiBase)

**Implements:**  
[Meadow.Foundation.Graphics.IGraphicsDisplay](../IRotatableDisplay)

## Properties
### DefaultColorMode
The default display color mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/Drivers/S6D02A1.cs#L14)
```csharp title="Declaration"
public override ColorMode DefaultColorMode { get; }
```
### SupportedColorModes
The color modes supported by the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/Drivers/S6D02A1.cs#L19)
```csharp title="Declaration"
public override ColorMode SupportedColorModes { get; }
```
## Methods
### Initialize()
Initialize the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/Drivers/S6D02A1.cs#L59)
```csharp title="Declaration"
protected override void Initialize()
```
### SetRotation(RotationType)
Set the display rotation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/Drivers/S6D02A1.cs#L128)
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
