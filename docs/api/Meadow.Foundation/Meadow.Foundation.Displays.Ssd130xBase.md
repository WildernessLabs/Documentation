---
uid: Meadow.Foundation.Displays.Ssd130x
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ssd130xBase
---

| Ssd130x       |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.Ssd130x/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.Ssd130x.svg?label=Meadow.Foundation.Displays.Ssd130x" alt="NuGet Gallery for Ssd130x" /></a> |

The Meadow.Foundation Ssd130x package contains a selection of drivers for common displays that use the I2C bus. This includes common single color OLED displays like the SSD1306 and SSD1309.

# Class Ssd130xBase
Represents the SSD130x family of OLED displays

###### **Assembly**: Ssd130x.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.Setup.cs#L8)
```csharp title="Declaration"
public abstract class Ssd130xBase : IGraphicsDisplay, ISpiPeripheral, II2cPeripheral, IDisposable
```
**Derived:**  
[Meadow.Foundation.Displays.Ssd1306](../Ssd1306)

**Implements:**  
[Meadow.Foundation.Graphics.IGraphicsDisplay](../IGraphicsDisplay), `Meadow.Hardware.ISpiPeripheral`, `Meadow.Hardware.II2cPeripheral`, `System.IDisposable`

## Properties
### ColorMode
The display color mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L17)
```csharp title="Declaration"
public ColorMode ColorMode { get; }
```
### SupportedColorModes
The Color mode supported by the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L22)
```csharp title="Declaration"
public ColorMode SupportedColorModes { get; }
```
### Width
The width of the display in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L27)
```csharp title="Declaration"
public int Width { get; }
```
### Height
The height of the display in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L32)
```csharp title="Declaration"
public int Height { get; }
```
### PixelBuffer
The buffer the holds the pixel data for the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L37)
```csharp title="Declaration"
public IPixelBuffer PixelBuffer { get; }
```
### DefaultSpiBusSpeed
The default SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L42)
```csharp title="Declaration"
public Frequency DefaultSpiBusSpeed { get; }
```
### SpiBusSpeed
The SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L47)
```csharp title="Declaration"
public Frequency SpiBusSpeed { get; set; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L56)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### DefaultSpiBusMode
The default SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L61)
```csharp title="Declaration"
public SpiClockConfiguration.Mode DefaultSpiBusMode { get; }
```
### SpiBusMode
The SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L66)
```csharp title="Declaration"
public SpiClockConfiguration.Mode SpiBusMode { get; set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L75)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
### InvertDisplay
Invert the entire display (true) or return to normal mode (false)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L158)
```csharp title="Declaration"
public bool InvertDisplay { get; set; }
```
### Contrast
Get / Set the contrast of the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L175)
```csharp title="Declaration"
public byte Contrast { get; set; }
```
### Sleep
Put the display to sleep (turns the display off)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L193)
```csharp title="Declaration"
public bool Sleep { get; set; }
```
### Oled128x64SetupSequence
Sequence of bytes that should be sent to a 128x64 OLED display to setup the device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.Setup.cs#L16)
```csharp title="Declaration"
protected Span<byte> Oled128x64SetupSequence { get; }
```
### Oled128x32SetupSequence
Sequence of bytes that should be sent to a 128x32 OLED display to setup the device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.Setup.cs#L25)
```csharp title="Declaration"
protected Span<byte> Oled128x32SetupSequence { get; }
```
### Oled72x40SetupSequence
Sequence of bytes that should be sent to a 72x40 OLED display to setup the device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.Setup.cs#L34)
```csharp title="Declaration"
protected Span<byte> Oled72x40SetupSequence { get; }
```
### Oled96x16SetupSequence
Sequence of bytes that should be sent to a 96x16 OLED display to setup the device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.Setup.cs#L43)
```csharp title="Declaration"
protected Span<byte> Oled96x16SetupSequence { get; }
```
### Oled64x48SetupSequence
Sequence of bytes that should be sent to a 64x48 OLED display to setup the device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.Setup.cs#L51)
```csharp title="Declaration"
protected Span<byte> Oled64x48SetupSequence { get; }
```
## Fields
### createdPorts
Did we create the port(s) used by the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L80)
```csharp title="Declaration"
protected bool createdPorts
```
### spiComms
SPI Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L85)
```csharp title="Declaration"
protected ISpiCommunications? spiComms
```
### dataCommandPort
The data command port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L90)
```csharp title="Declaration"
protected IDigitalOutputPort? dataCommandPort
```
### resetPort
The reset port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L95)
```csharp title="Declaration"
protected IDigitalOutputPort? resetPort
```
### chipSelectPort
The chip select port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L100)
```csharp title="Declaration"
protected IDigitalOutputPort? chipSelectPort
```
### connectionType
The connection type (I2C or SPI)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L105)
```csharp title="Declaration"
protected Ssd130xBase.ConnectionType connectionType
```
### Data
Helper bool for the data command port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L110)
```csharp title="Declaration"
protected const bool Data = true
```
### Command
Helper bool for the data command port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L115)
```csharp title="Declaration"
protected const bool Command = false
```
### PAGE_SIZE
The display page size in bytes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L120)
```csharp title="Declaration"
protected const int PAGE_SIZE = 16
```
### i2cComms
I2C Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L125)
```csharp title="Declaration"
protected II2cCommunications? i2cComms
```
### imageBuffer
Buffer holding the pixels in the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L130)
```csharp title="Declaration"
protected Buffer1bpp imageBuffer
```
### readBuffer
Read buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L135)
```csharp title="Declaration"
protected byte[]? readBuffer
```
### commandBuffer
Display command buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L140)
```csharp title="Declaration"
protected Memory<byte> commandBuffer
```
### pageBuffer
Page buffer to hold one page of data
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L145)
```csharp title="Declaration"
protected byte[]? pageBuffer
```
### showPreamble
Sequence of command bytes that must be sent to the display before
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L150)
```csharp title="Declaration"
protected byte[]? showPreamble
```
### displayType
The Ssd1306 display type used to specify the resolution
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L211)
```csharp title="Declaration"
protected Ssd130xBase.DisplayType displayType
```
## Methods
### SendCommands(Span&lt;byte&gt;)
Send a sequence of commands to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L236)
```csharp title="Declaration"
protected void SendCommands(Span<byte> commands)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Span<System.Byte>` | *commands* | List of commands to send |

### Show()
Send the internal pixel buffer to display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L256)
```csharp title="Declaration"
public void Show()
```
### Show(int, int, int, int)
Copy a region of the display buffer to the screen
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L287)
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

### Clear(bool)
Clear the display buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L296)
```csharp title="Declaration"
public void Clear(bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *updateDisplay* | Immediately update the display when true |

### DrawPixel(int, int, Color)
Draw pixel at a location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L312)
```csharp title="Declaration"
public void DrawPixel(int x, int y, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x location in pixels |
| `System.Int32` | *y* | y location in pixels |
| `Meadow.Color` | *color* | Black - pixel off, any color - turn on pixel |

### DrawPixel(int, int, bool)
Draw pixel at a location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L323)
```csharp title="Declaration"
public void DrawPixel(int x, int y, bool enabled)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x location in pixels |
| `System.Int32` | *y* | y location in pixels |
| `System.Boolean` | *enabled* | True = turn on pixel, false = turn off pixel |

### InvertPixel(int, int)
Invert a pixel at a location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L333)
```csharp title="Declaration"
public void InvertPixel(int x, int y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | Abscissa of the pixel to the set / reset |
| `System.Int32` | *y* | Ordinate of the pixel to the set / reset |

### StartScrolling(ScrollDirection)
Start the display scrolling in the specified direction
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L342)
```csharp title="Declaration"
public void StartScrolling(Ssd130xBase.ScrollDirection direction)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Displays.Ssd130xBase.ScrollDirection](../Ssd130xBase.ScrollDirection) | *direction* | Direction that the display should scroll |

### StartScrolling(ScrollDirection, byte, byte)
Start the display scrolling
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L357)
```csharp title="Declaration"
public void StartScrolling(Ssd130xBase.ScrollDirection direction, byte startPage, byte endPage)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Displays.Ssd130xBase.ScrollDirection](../Ssd130xBase.ScrollDirection) | *direction* | Direction that the display should scroll |
| `System.Byte` | *startPage* | Start page for the scroll |
| `System.Byte` | *endPage* | End page for the scroll |

### StopScrolling()
Turn off scrolling
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L393)
```csharp title="Declaration"
public void StopScrolling()
```
### Fill(Color, bool)
Fill the display with a normalized color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L403)
```csharp title="Declaration"
public virtual void Fill(Color color, bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *color* | The color used to fill the display, will normalize to black/off or white/on |
| `System.Boolean` | *updateDisplay* | If true, update the display, if false, only update the off-screen buffer |

### Fill(int, int, int, int, Color)
Fill the display with a normalized color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L421)
```csharp title="Declaration"
public virtual void Fill(int x, int y, int width, int height, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The start x position in pixels |
| `System.Int32` | *y* | The start y position in pixels |
| `System.Int32` | *width* | The width to fill in pixels |
| `System.Int32` | *height* | The height to fill in pixels |
| `Meadow.Color` | *color* | The color, will normalize to black/off or white/on |

### WriteBuffer(int, int, IPixelBuffer)
Write a buffer to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L432)
```csharp title="Declaration"
public virtual void WriteBuffer(int x, int y, IPixelBuffer displayBuffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x start position in pixels |
| `System.Int32` | *y* | The y start position in pixels |
| [Meadow.Foundation.Graphics.Buffers.IPixelBuffer](../IPixelBuffer) | *displayBuffer* | The buffer to write/copy to the display |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L438)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Ssd130x/Driver/Ssd130xBase.cs#L448)
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
* `Meadow.Hardware.II2cPeripheral`
* `System.IDisposable`
