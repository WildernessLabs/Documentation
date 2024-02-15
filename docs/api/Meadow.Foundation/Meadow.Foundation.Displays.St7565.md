---
uid: Meadow.Foundation.Displays.St7565
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.St7565
---

| St7565 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.St7565) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.St7565/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.St7565.svg?label=Meadow.Foundation.Displays.St7565" alt="NuGet Gallery for Meadow.Foundation.Displays.St7565" /></a> |

### Code Example

```csharp
MicroGraphics graphics;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    var sT7565 = new St7565
    (
        spiBus: Device.CreateSpiBus(),
        chipSelectPin: Device.Pins.D02,
        dcPin: Device.Pins.D00,
        resetPin: Device.Pins.D01,
        width: 128,
        height: 64
    );

    graphics = new MicroGraphics(sT7565);
    graphics.CurrentFont = new Font8x8();

    return base.Initialize();
}

public override Task Run()
{
    graphics.Clear();
    graphics.DrawTriangle(10, 10, 50, 50, 10, 50, false);
    graphics.DrawRectangle(20, 15, 40, 20, true);
    graphics.DrawText(5, 5, "ST7565");
    graphics.Show();

    return base.Run();
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

![Wiring a Ssd1681 to a Meadow F7](/API_Assets/Meadow.Foundation.Displays.St7565/St7565_Fritzing.png)

# Class St7565
Provide an interface to the ST7565 family of displays

###### **Assembly**: St7565.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Driver/St7565.Enums.cs#L6)
```csharp title="Declaration"
public class St7565 : IGraphicsDisplay, ISpiPeripheral, IDisposable
```
**Implements:**  
[Meadow.Foundation.Graphics.IGraphicsDisplay](../IGraphicsDisplay), `Meadow.Hardware.ISpiPeripheral`, `System.IDisposable`

## Properties
### ColorMode
The display color mode - 1 bit per pixel monochrome
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Driver/St7565.cs#L18)
```csharp title="Declaration"
public ColorMode ColorMode { get; }
```
### SupportedColorModes
The Color mode supported by the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Driver/St7565.cs#L23)
```csharp title="Declaration"
public ColorMode SupportedColorModes { get; }
```
### Width
The display width in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Driver/St7565.cs#L28)
```csharp title="Declaration"
public int Width { get; }
```
### Height
The display height in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Driver/St7565.cs#L33)
```csharp title="Declaration"
public int Height { get; }
```
### PixelBuffer
The buffer the holds the pixel data for the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Driver/St7565.cs#L38)
```csharp title="Declaration"
public IPixelBuffer PixelBuffer { get; }
```
### DefaultSpiBusSpeed
The default SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Driver/St7565.cs#L43)
```csharp title="Declaration"
public Frequency DefaultSpiBusSpeed { get; }
```
### SpiBusSpeed
The SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Driver/St7565.cs#L48)
```csharp title="Declaration"
public Frequency SpiBusSpeed { get; set; }
```
### DefaultSpiBusMode
The default SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Driver/St7565.cs#L57)
```csharp title="Declaration"
public SpiClockConfiguration.Mode DefaultSpiBusMode { get; }
```
### SpiBusMode
The SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Driver/St7565.cs#L62)
```csharp title="Declaration"
public SpiClockConfiguration.Mode SpiBusMode { get; set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Driver/St7565.cs#L71)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Fields
### spiComms
SPI Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Driver/St7565.cs#L81)
```csharp title="Declaration"
protected ISpiCommunications spiComms
```
## Methods
### InvertDisplay(bool)
Invert the entire display (true) or return to normal mode (false).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Driver/St7565.cs#L139)
```csharp title="Declaration"
public void InvertDisplay(bool cmd)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *cmd* |

### PowerSaveMode()
Set display into power saving mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Driver/St7565.cs#L154)
```csharp title="Declaration"
public void PowerSaveMode()
```
### SetContrast(byte)
Set the display contrast
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Driver/St7565.cs#L193)
```csharp title="Declaration"
public void SetContrast(byte contrast)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *contrast* | The contrast value (0-63) |

### Show()
Send the internal pixel buffer to display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Driver/St7565.cs#L229)
```csharp title="Declaration"
public void Show()
```
### Show(int, int, int, int)
Update a region of the display from the offscreen buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Driver/St7565.cs#L252)
```csharp title="Declaration"
public void Show(int left, int top, int right, int bottom)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *left* | Left bounds in pixels |
| `System.Int32` | *top* | Top bounds in pixels |
| `System.Int32` | *right* | Right bounds in pixels |
| `System.Int32` | *bottom* | Bottom bounds in pixels |

### Clear(bool)
Clear the display buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Driver/St7565.cs#L281)
```csharp title="Declaration"
public void Clear(bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *updateDisplay* | Immediately update the display when true |

### DrawPixel(int, int, Color)
Draw pixel at a location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Driver/St7565.cs#L294)
```csharp title="Declaration"
public void DrawPixel(int x, int y, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | Abscissa of the pixel to the set / reset |
| `System.Int32` | *y* | Ordinate of the pixel to the set / reset |
| `Meadow.Color` | *color* | Any color = turn on pixel, black = turn off pixel |

### DrawPixel(int, int, bool)
Draw pixel at a location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Driver/St7565.cs#L305)
```csharp title="Declaration"
public void DrawPixel(int x, int y, bool enabled)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | Abscissa of the pixel to the set / reset |
| `System.Int32` | *y* | Ordinate of the pixel to the set / reset |
| `System.Boolean` | *enabled* | True = turn on pixel, false = turn off pixel |

### InvertPixel(int, int)
Invert a pixel at a location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Driver/St7565.cs#L315)
```csharp title="Declaration"
public void InvertPixel(int x, int y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | Abscissa of the pixel to the set / reset |
| `System.Int32` | *y* | Ordinate of the pixel to the set / reset |

### StartScrolling(ScrollDirection)
Start the display scrolling in the specified direction.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Driver/St7565.cs#L324)
```csharp title="Declaration"
public void StartScrolling(St7565.ScrollDirection direction)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Displays.St7565.ScrollDirection](../St7565.ScrollDirection) | *direction* | Direction that the display should scroll |

### StartScrolling(ScrollDirection, byte, byte)
Start the display scrolling
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Driver/St7565.cs#L339)
```csharp title="Declaration"
public void StartScrolling(St7565.ScrollDirection direction, byte startPage, byte endPage)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Displays.St7565.ScrollDirection](../St7565.ScrollDirection) | *direction* | Direction that the display should scroll |
| `System.Byte` | *startPage* | Start page for the scroll |
| `System.Byte` | *endPage* | End page for the scroll |

### StopScrolling()
Turn off scrolling
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Driver/St7565.cs#L377)
```csharp title="Declaration"
public void StopScrolling()
```
### Fill(Color, bool)
Fill display buffer with a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Driver/St7565.cs#L387)
```csharp title="Declaration"
public void Fill(Color clearColor, bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *clearColor* | The fill color |
| `System.Boolean` | *updateDisplay* | If true, update display |

### Fill(int, int, int, int, Color)
Fill with a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Driver/St7565.cs#L402)
```csharp title="Declaration"
public void Fill(int x, int y, int width, int height, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | X start position in pixels |
| `System.Int32` | *y* | Y start position in pixels |
| `System.Int32` | *width* | Width in pixels |
| `System.Int32` | *height* | Height in pixels |
| `Meadow.Color` | *color* | The fill color |

### WriteBuffer(int, int, IPixelBuffer)
Write a buffer to the display offscreen buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Driver/St7565.cs#L413)
```csharp title="Declaration"
public void WriteBuffer(int x, int y, IPixelBuffer displayBuffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x position in pixels to write the buffer |
| `System.Int32` | *y* | The y position in pixels to write the buffer |
| [Meadow.Foundation.Graphics.Buffers.IPixelBuffer](../IPixelBuffer) | *displayBuffer* | The buffer to write |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Driver/St7565.cs#L419)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.St7565/Driver/St7565.cs#L429)
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
