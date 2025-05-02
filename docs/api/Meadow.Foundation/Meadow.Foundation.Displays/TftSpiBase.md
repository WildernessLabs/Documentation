---
title: Class TftSpiBase
sidebar_label: TftSpiBase
description: >-
  Base class for TFT SPI displays These displays typically support 16 and 18
  bit, some also include 8, 9, 12 and/or 24 bit color
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays/TftSpiBase
---
# Class TftSpiBase
Base class for TFT SPI displays
These displays typically support 16 and 18 bit, some also include 8, 9, 12 and/or 24 bit color

###### **Assembly**: TftSpi.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.Enums.cs#L6)
```csharp title="Declaration"
public abstract class TftSpiBase : IColorInvertableDisplay, IPixelDisplay, IDisplay, ISpiPeripheral, IDisposable
```
**Derived:**  

<details>
<summary>Expand</summary>

[Meadow.Foundation.Displays.Gc9a01](../Meadow.Foundation.Displays/Gc9a01), [Meadow.Foundation.Displays.Hx8357d](../Meadow.Foundation.Displays/Hx8357d), [Meadow.Foundation.Displays.Ili9163](../Meadow.Foundation.Displays/Ili9163), [Meadow.Foundation.Displays.Ili9225](../Meadow.Foundation.Displays/Ili9225), [Meadow.Foundation.Displays.Ili9341](../Meadow.Foundation.Displays/Ili9341), [Meadow.Foundation.Displays.Ili9481](../Meadow.Foundation.Displays/Ili9481), [Meadow.Foundation.Displays.Ili9486](../Meadow.Foundation.Displays/Ili9486), [Meadow.Foundation.Displays.Ili9488](../Meadow.Foundation.Displays/Ili9488), [Meadow.Foundation.Displays.Rm68140](../Meadow.Foundation.Displays/Rm68140), [Meadow.Foundation.Displays.S6D02A1](../Meadow.Foundation.Displays/S6D02A1), [Meadow.Foundation.Displays.Ssd1331](../Meadow.Foundation.Displays/Ssd1331), [Meadow.Foundation.Displays.Ssd1351](../Meadow.Foundation.Displays/Ssd1351), [Meadow.Foundation.Displays.St7735](../Meadow.Foundation.Displays/St7735), [Meadow.Foundation.Displays.St7789](../Meadow.Foundation.Displays/St7789), [Meadow.Foundation.Displays.St7796s](../Meadow.Foundation.Displays/St7796s)
</details>



**Implements:**  
`Meadow.Peripherals.Displays.IColorInvertableDisplay`, `Meadow.Peripherals.Displays.IPixelDisplay`, `Meadow.Peripherals.Displays.IDisplay`, `Meadow.Hardware.ISpiPeripheral`, `System.IDisposable`

## Properties
### SetAddressBuffer
Temporary buffer that can be used to batch set address window buffer commands
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L19)
```csharp title="Declaration"
protected byte[] SetAddressBuffer { get; }
```
### ColorMode
The currently set color mode for the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L22)
```csharp title="Declaration"
public ColorMode ColorMode { get; }
```
### SupportedColorModes
The Color mode supported by the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L25)
```csharp title="Declaration"
public abstract ColorMode SupportedColorModes { get; }
```
### Rotation
The current rotation of the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L30)
```csharp title="Declaration"
public RotationType Rotation { get; protected set; }
```
### DefaultColorMode
The display default color mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L35)
```csharp title="Declaration"
public abstract ColorMode DefaultColorMode { get; }
```
### IsColorInverted
Gets whether the display color is inverted
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L38)
```csharp title="Declaration"
public bool IsColorInverted { get; protected set; }
```
### Width
Width of the display in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L41)
```csharp title="Declaration"
public int Width { get; }
```
### Height
Height of the display in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L44)
```csharp title="Declaration"
public int Height { get; }
```
### PixelBuffer
Provide a buffer that matches this display's color depth, height, and width
This should be the buffer that is sent to the device when Show is called
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L47)
```csharp title="Declaration"
public IPixelBuffer PixelBuffer { get; }
```
### DefaultSpiBusSpeed
The default SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L52)
```csharp title="Declaration"
public virtual Frequency DefaultSpiBusSpeed { get; }
```
### SpiBusSpeed
The SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L57)
```csharp title="Declaration"
public Frequency SpiBusSpeed { get; set; }
```
### DefaultSpiBusMode
The default SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L66)
```csharp title="Declaration"
public virtual SpiClockConfiguration.Mode DefaultSpiBusMode { get; }
```
### SpiBusMode
The SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L71)
```csharp title="Declaration"
public SpiClockConfiguration.Mode SpiBusMode { get; set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L80)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Fields
### dataCommandPort
The data command port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L90)
```csharp title="Declaration"
protected IDigitalOutputPort dataCommandPort
```
### resetPort
The reset port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L95)
```csharp title="Declaration"
protected IDigitalOutputPort? resetPort
```
### chipSelectPort
The chip select port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L100)
```csharp title="Declaration"
protected IDigitalOutputPort? chipSelectPort
```
### spiDisplay
The spi peripheral for the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L105)
```csharp title="Declaration"
protected ISpiCommunications spiDisplay
```
### imageBuffer
The off-screen image buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L110)
```csharp title="Declaration"
protected IPixelBuffer imageBuffer
```
### Data
Data convenience bool
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L115)
```csharp title="Declaration"
protected const bool Data = true
```
### Command
Command convenience bool
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L120)
```csharp title="Declaration"
protected const bool Command = false
```
### nativeHeight
The display's native height without rotation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L130)
```csharp title="Declaration"
protected int nativeHeight
```
### nativeWidth
The display's native width without rotation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L135)
```csharp title="Declaration"
protected int nativeWidth
```
### setAddressLastX0
Previous x0 value passed to SetAddressWindow
Used for optimization to avoid unnecessary SPI commands
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L141)
```csharp title="Declaration"
protected int setAddressLastX0
```
### setAddressLastX1
Previous x1 value passed to SetAddressWindow
Used for optimization to avoid unnecessary SPI commands
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L147)
```csharp title="Declaration"
protected int setAddressLastX1
```
### setAddressLastY0
Previous y0 value passed to SetAddressWindow
Used for optimization to avoid unnecessary SPI commands
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L153)
```csharp title="Declaration"
protected int setAddressLastY0
```
### setAddressLastY1
Previous y1 value passed to SetAddressWindow
Used for optimization to avoid unnecessary SPI commands
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L159)
```csharp title="Declaration"
protected int setAddressLastY1
```
## Methods
### Initialize()
Initialize the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L125)
```csharp title="Declaration"
protected abstract void Initialize()
```
### SetColorMode(ColorMode)
Set color mode for the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L215)
```csharp title="Declaration"
public virtual void SetColorMode(ColorMode colorMode)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Peripherals.Displays.ColorMode` | *colorMode* |


##### Exceptions

`System.ArgumentException`  
throw if the color mode isn't supported by the display
### IsColorTypeSupported(ColorMode)
Is the color mode supported on this display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L234)
```csharp title="Declaration"
public virtual bool IsColorTypeSupported(ColorMode colorType)
```

##### Returns

`System.Boolean`: true if supported
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Displays.ColorMode` | *colorType* | The color mode |

### CreateBuffer(ColorMode, int, int)
Create an off-screen buffer for the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L246)
```csharp title="Declaration"
protected void CreateBuffer(ColorMode colorMode, int width, int height)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Displays.ColorMode` | *colorMode* | The color mode |
| `System.Int32` | *width* | The width in pixels |
| `System.Int32` | *height* | The height in pixels |


##### Exceptions

`System.ArgumentException`  
Throws an exception if the color mode isn't supported
### SetAddressWindow(int, int, int, int)
Set address window for display updates
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L278)
```csharp title="Declaration"
protected virtual void SetAddressWindow(int x0, int y0, int x1, int y1)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x0* | X start in pixels |
| `System.Int32` | *y0* | Y start in pixels |
| `System.Int32` | *x1* | X end in pixels |
| `System.Int32` | *y1* | Y end in pixels |

### Clear(bool)
Clear the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L311)
```csharp title="Declaration"
public void Clear(bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *updateDisplay* | Update the display once the buffer has been cleared when true. |

### Fill(Color, bool)
Fill the display buffer with a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L323)
```csharp title="Declaration"
public void Fill(Color color, bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *color* | The fill color |
| `System.Boolean` | *updateDisplay* | If true, update the display after filling the buffer |

### WriteBuffer(int, int, IPixelBuffer)
Write a buffer to the display off-screen buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L339)
```csharp title="Declaration"
public void WriteBuffer(int x, int y, IPixelBuffer buffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x position in pixels to write the buffer |
| `System.Int32` | *y* | The y position in pixels to write the buffer |
| `Meadow.Peripherals.Displays.IPixelBuffer` | *buffer* | The buffer to write |

### DrawPixel(int, int, bool)
Draw pixel at a location
Primarily used for monochrome displays, prefer overload that accepts a Color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L351)
```csharp title="Declaration"
public void DrawPixel(int x, int y, bool enabled)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x location in pixels |
| `System.Int32` | *y* | y location in pixels |
| `System.Boolean` | *enabled* | Turn the pixel on (true) or off (false). |

### DrawPixel(int, int, Color)
Draw a single pixel
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L362)
```csharp title="Declaration"
public void DrawPixel(int x, int y, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x location in pixels |
| `System.Int32` | *y* | y location in pixels |
| `Meadow.Color` | *color* | Color of pixel. |

### DrawPixel(int, int, byte, byte, byte)
Draw a single pixel
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L375)
```csharp title="Declaration"
public void DrawPixel(int x, int y, byte r, byte g, byte b)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x location in pixels |
| `System.Int32` | *y* | y location in pixels |
| `System.Byte` | *r* | 8 bit red value |
| `System.Byte` | *g* | 8 bit green value |
| `System.Byte` | *b* | 8 bit blue value |

### InvertPixel(int, int)
Invert the color of a single pixel as represented in the display buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L385)
```csharp title="Declaration"
public void InvertPixel(int x, int y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x location in pixels |
| `System.Int32` | *y* | y location in pixels |

### Fill(int, int, int, int, Color)
Fill with a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L398)
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

### Show()
Draw the display buffer to screen
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L406)
```csharp title="Declaration"
public void Show()
```
### Show(int, int, int, int)
Transfer part of the contents of the buffer to the display
bounded by left, top, right and bottom
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L419)
```csharp title="Declaration"
public void Show(int left, int top, int right, int bottom)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *left* |
| `System.Int32` | *top* |
| `System.Int32` | *right* |
| `System.Int32` | *bottom* |

### InvertDisplayColor(bool)
Invert the display colors
True to invert, false for normal colors
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L470)
```csharp title="Declaration"
public virtual void InvertDisplayColor(bool invert)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *invert* |

### Write(byte)
Write a byte to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L480)
```csharp title="Declaration"
protected void Write(byte value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *value* | The byte to send |

### Write(byte[])
Write a buffer to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L489)
```csharp title="Declaration"
protected void Write(byte[] data)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *data* | The data to send |

### DelayMs(int)
Delay
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L498)
```csharp title="Declaration"
protected void DelayMs(int millseconds)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *millseconds* | Milliseconds to delay |

### SendCommand(Register)
Send a command to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L507)
```csharp title="Declaration"
protected void SendCommand(TftSpiBase.Register command)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Displays.TftSpiBase.Register](../Meadow.Foundation.Displays/TftSpiBase.Register) | *command* | The command to send |

### SendCommand(LcdCommand)
Send a command to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L516)
```csharp title="Declaration"
protected void SendCommand(TftSpiBase.LcdCommand command)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Displays.TftSpiBase.LcdCommand](../Meadow.Foundation.Displays/TftSpiBase.LcdCommand) | *command* | The command to send as an LcdCommand |

### SendCommand(byte)
Send a command to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L526)
```csharp title="Declaration"
protected void SendCommand(byte command)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *command* | The command to send as a byte |

### SendData(int)
Send a single byte to the display (convenience method)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L541)
```csharp title="Declaration"
protected void SendData(int data)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *data* | The data to send |

### SendData(byte)
Send a single byte to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L550)
```csharp title="Declaration"
protected void SendData(byte data)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *data* | The byte to send |

### SendData(byte[])
Send a byte array of data to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L560)
```csharp title="Declaration"
protected void SendData(byte[] data)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *data* | The data |

### Clear(Color)
Clear the display buffer to a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L570)
```csharp title="Declaration"
public void Clear(Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *color* | The clear color |

### UpdateBuffer()
Update the display buffer if the dimensions change on rotation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L578)
```csharp title="Declaration"
protected void UpdateBuffer()
```
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L601)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.TftSpi/Driver/TftSpiBase.cs#L611)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `Meadow.Peripherals.Displays.IColorInvertableDisplay`
* `Meadow.Peripherals.Displays.IPixelDisplay`
* `Meadow.Peripherals.Displays.IDisplay`
* `Meadow.Hardware.ISpiPeripheral`
* `System.IDisposable`
