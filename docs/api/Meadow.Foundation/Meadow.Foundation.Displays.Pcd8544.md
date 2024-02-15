---
uid: Meadow.Foundation.Displays.Pcd8544
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Pcd8544
---

| Pcd8544 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.Pcd8544/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.Pcd8544.svg?label=Meadow.Foundation.Displays.Pcd8544" alt="NuGet Gallery for Meadow.Foundation.Displays.Pcd8544" /></a> |

The **PCD8544** display, also known as a Nokia 5110 LCD, is a single color 84x84 LCD display. Data is sent to the display via SPI. The also typically also include an LED backlight controlled via a single pin. 

These displays have excellent visibility in daylight, even without the backlight, making them a good choice for builds with low-power restrictions and require visibility is bright light or daylight.

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
| DIN     | COPI       |
| DC      | D00        |
| CE      | D01        |
| RST     | D02        |

![SevenSegment displays](/API_Assets/Meadow.Foundation.Displays.Pcd8544/PCD8544_Fritzing.png)

# Class Pcd8544
Represents a Pcd8544 monochrome display

###### **Assembly**: Pcd8544.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544/Driver/Pcd8544.cs#L12)
```csharp title="Declaration"
public class Pcd8544 : IGraphicsDisplay, ISpiPeripheral, IDisposable
```
**Implements:**  
[Meadow.Foundation.Graphics.IGraphicsDisplay](../IGraphicsDisplay), `Meadow.Hardware.ISpiPeripheral`, `System.IDisposable`

## Properties
### ColorMode
Display color mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544/Driver/Pcd8544.cs#L17)
```csharp title="Declaration"
public ColorMode ColorMode { get; }
```
### SupportedColorModes
The Color mode supported by the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544/Driver/Pcd8544.cs#L22)
```csharp title="Declaration"
public ColorMode SupportedColorModes { get; }
```
### Height
Height of display in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544/Driver/Pcd8544.cs#L27)
```csharp title="Declaration"
public int Height { get; }
```
### Width
Width of display in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544/Driver/Pcd8544.cs#L32)
```csharp title="Declaration"
public int Width { get; }
```
### PixelBuffer
The buffer the holds the pixel data for the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544/Driver/Pcd8544.cs#L37)
```csharp title="Declaration"
public IPixelBuffer PixelBuffer { get; }
```
### IsDisplayInverted
Is the display inverted
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544/Driver/Pcd8544.cs#L42)
```csharp title="Declaration"
public bool IsDisplayInverted { get; }
```
### DefaultSpiBusSpeed
The default SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544/Driver/Pcd8544.cs#L47)
```csharp title="Declaration"
public Frequency DefaultSpiBusSpeed { get; }
```
### SpiBusSpeed
The SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544/Driver/Pcd8544.cs#L52)
```csharp title="Declaration"
public Frequency SpiBusSpeed { get; set; }
```
### DefaultSpiBusMode
The default SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544/Driver/Pcd8544.cs#L61)
```csharp title="Declaration"
public SpiClockConfiguration.Mode DefaultSpiBusMode { get; }
```
### SpiBusMode
The SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544/Driver/Pcd8544.cs#L66)
```csharp title="Declaration"
public SpiClockConfiguration.Mode SpiBusMode { get; set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544/Driver/Pcd8544.cs#L75)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Fields
### spiComms
SPI Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544/Driver/Pcd8544.cs#L89)
```csharp title="Declaration"
protected ISpiCommunications spiComms
```
### imageBuffer
Buffer to hold display data
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544/Driver/Pcd8544.cs#L94)
```csharp title="Declaration"
protected Buffer1bpp imageBuffer
```
### commandBuffer
Buffer to hold internal command data to be sent over the SPI bus
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544/Driver/Pcd8544.cs#L99)
```csharp title="Declaration"
protected Memory<byte> commandBuffer
```
## Methods
### Clear(bool)
Clear the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544/Driver/Pcd8544.cs#L170)
```csharp title="Declaration"
public void Clear(bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *updateDisplay* | If true, it will force a display update |

### DrawPixel(int, int, bool)
Draw pixel at location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544/Driver/Pcd8544.cs#L186)
```csharp title="Declaration"
public void DrawPixel(int x, int y, bool enabled)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x position in pixels |
| `System.Int32` | *y* | y position in pixels |
| `System.Boolean` | *enabled* | True = turn on pixel, false = turn off pixel |

### InvertPixel(int, int)
Invert pixel at a location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544/Driver/Pcd8544.cs#L196)
```csharp title="Declaration"
public void InvertPixel(int x, int y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x position in pixels |
| `System.Int32` | *y* | y position in pixels |

### DrawPixel(int, int, Color)
Draw pixel at location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544/Driver/Pcd8544.cs#L207)
```csharp title="Declaration"
public void DrawPixel(int x, int y, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x position in pixels |
| `System.Int32` | *y* | y position in pixels |
| `Meadow.Color` | *color* | any value other than black will make the pixel visible |

### Show()
Update the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544/Driver/Pcd8544.cs#L215)
```csharp title="Declaration"
public void Show()
```
### Show(int, int, int, int)
Update a region of the display 
Currently always does a full screen update for this display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544/Driver/Pcd8544.cs#L228)
```csharp title="Declaration"
public void Show(int left, int top, int right, int bottom)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *left* | The left position in pixels |
| `System.Int32` | *top* | The top position in pixels |
| `System.Int32` | *right* | The right position in pixels |
| `System.Int32` | *bottom* | The bottom position in pixels |

### InvertDisplay(bool)
Invert the entire display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544/Driver/Pcd8544.cs#L237)
```csharp title="Declaration"
public void InvertDisplay(bool inverse)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *inverse* | Invert if true, normal if false |

### Fill(Color, bool)
Fill with color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544/Driver/Pcd8544.cs#L252)
```csharp title="Declaration"
public void Fill(Color fillColor, bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *fillColor* | color - converted to on/off |
| `System.Boolean` | *updateDisplay* | should refresh display |

### Fill(int, int, int, int, Color)
Fill region with color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544/Driver/Pcd8544.cs#L267)
```csharp title="Declaration"
public void Fill(int x, int y, int width, int height, Color fillColor)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x position |
| `System.Int32` | *y* | y position |
| `System.Int32` | *width* | width of region |
| `System.Int32` | *height* | height of region |
| `Meadow.Color` | *fillColor* | color - converted to on/off |

### WriteBuffer(int, int, IPixelBuffer)
Draw buffer at location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544/Driver/Pcd8544.cs#L278)
```csharp title="Declaration"
public void WriteBuffer(int x, int y, IPixelBuffer displayBuffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x position in pixels |
| `System.Int32` | *y* | y position in pixels |
| [Meadow.Foundation.Graphics.Buffers.IPixelBuffer](../IPixelBuffer) | *displayBuffer* | buffer to draw |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544/Driver/Pcd8544.cs#L284)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Pcd8544/Driver/Pcd8544.cs#L294)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* [Meadow.Foundation.Graphics.IGraphicsDisplay](../IGraphicsDisplay)
* `Meadow.Hardware.ISpiPeripheral`
* `System.IDisposable`
