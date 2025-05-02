---
title: Class EPaperMonoBase
sidebar_label: EPaperMonoBase
description: Provide an interface for ePaper monochrome displays
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays/EPaperMonoBase
---
# Class EPaperMonoBase
Provide an interface for ePaper monochrome displays

###### **Assembly**: EPaper.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L10)
```csharp title="Declaration"
public abstract class EPaperMonoBase : EPaperBase, ISpiPeripheral, IDisposable, IPixelDisplay, IDisplay
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Displays.EPaperBase](../Meadow.Foundation.Displays/EPaperBase)

**Derived:**  
[Meadow.Foundation.Displays.Epd4in2](../Meadow.Foundation.Displays/Epd4in2), [Meadow.Foundation.Displays.Il3897](../Meadow.Foundation.Displays/Il3897), [Meadow.Foundation.Displays.Il91874V03](../Meadow.Foundation.Displays/Il91874V03), [Meadow.Foundation.Displays.Ssd1608](../Meadow.Foundation.Displays/Ssd1608)

**Implements:**  
`Meadow.Hardware.ISpiPeripheral`, `System.IDisposable`, `Meadow.Peripherals.Displays.IPixelDisplay`, `Meadow.Peripherals.Displays.IDisplay`

## Properties
### ColorMode
The currently set color mode for the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L13)
```csharp title="Declaration"
public ColorMode ColorMode { get; }
```
### SupportedColorModes
The Color mode supported by the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L16)
```csharp title="Declaration"
public ColorMode SupportedColorModes { get; }
```
### PixelBuffer
Provide a buffer that matches this display's color depth, height, and width
This should be the buffer that is sent to the device when Show is called
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L19)
```csharp title="Declaration"
public IPixelBuffer PixelBuffer { get; }
```
### EnabledColor
The color to draw when a pixel is enabled
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L22)
```csharp title="Declaration"
public Color EnabledColor { get; }
```
### DisabledColor
The color to draw when a pixel is disabled
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L25)
```csharp title="Declaration"
public Color DisabledColor { get; }
```
### Width
Width of display in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L35)
```csharp title="Declaration"
public int Width { get; }
```
### Height
Height of display in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L40)
```csharp title="Declaration"
public int Height { get; }
```
## Fields
### imageBuffer
Buffer to hold display data
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L30)
```csharp title="Declaration"
protected readonly Buffer1bppV imageBuffer
```
## Methods
### Initialize()
Initialize display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L98)
```csharp title="Declaration"
protected abstract void Initialize()
```
### Clear(bool)
Clear display buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L104)
```csharp title="Declaration"
public void Clear(bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *updateDisplay* | force display update |

### Fill(Color, bool)
Clear the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L114)
```csharp title="Declaration"
public void Fill(Color color, bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *color* | Color to set the display (not used on ePaper displays) |
| `System.Boolean` | *updateDisplay* | Update the display once the buffer has been cleared when true |

### Fill(int, int, int, int, Color)
Fill the display buffer with a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L127)
```csharp title="Declaration"
public void Fill(int x, int y, int width, int height, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x location in pixels to start fill |
| `System.Int32` | *y* | y location in pixels to start fill |
| `System.Int32` | *width* | width in pixels to fill |
| `System.Int32` | *height* | height in pixels to fill |
| `Meadow.Color` | *color* | color to fill |

### Clear(bool, bool)
Clear the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L137)
```csharp title="Declaration"
public void Clear(bool enabled, bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *enabled* | Set the display to the enabled or disabled color (defaults are black and white) |
| `System.Boolean` | *updateDisplay* | Update the display once the buffer has been cleared when true |

### DrawPixel(int, int, bool)
Draw a single pixel
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L153)
```csharp title="Declaration"
public void DrawPixel(int x, int y, bool enabled)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x location |
| `System.Int32` | *y* | y location |
| `System.Boolean` | *enabled* | Turn the pixel on (true) or off (false) |

### DrawPixel(int, int, Color)
Draw a single pixel
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L164)
```csharp title="Declaration"
public void DrawPixel(int x, int y, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x location |
| `System.Int32` | *y* | y location |
| `Meadow.Color` | *color* | Color of pixel |

### InvertPixel(int, int)
Invert color of pixel
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L174)
```csharp title="Declaration"
public void InvertPixel(int x, int y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x coordinate of pixel |
| `System.Int32` | *y* | y coordinate of pixel |

### Show(int, int, int, int)
Draw the display buffer to screen
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L182)
```csharp title="Declaration"
public virtual void Show(int left, int top, int right, int bottom)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *left* |
| `System.Int32` | *top* |
| `System.Int32` | *right* |
| `System.Int32` | *bottom* |

### Show()
Draw the display buffer to screen
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L191)
```csharp title="Declaration"
public virtual void Show()
```
### WriteBuffer(int, int, IPixelBuffer)
Draw a buffer at a specific location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L203)
```csharp title="Declaration"
public void WriteBuffer(int x, int y, IPixelBuffer displayBuffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x location in pixels |
| `System.Int32` | *y* | y location in pixels |
| `Meadow.Peripherals.Displays.IPixelBuffer` | *displayBuffer* |  |

### SetFrameMemory(byte[], int, int, int, int)
Set frame buffer memory of display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L216)
```csharp title="Declaration"
public virtual void SetFrameMemory(byte[] buffer, int x, int y, int width, int height)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *buffer* | buffer |
| `System.Int32` | *x* | x location |
| `System.Int32` | *y* | y location |
| `System.Int32` | *width* | width in pixels |
| `System.Int32` | *height* | height in pixels |

### SetFrameMemory(byte[])
Set frame buffer memory of display (full screen)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L268)
```csharp title="Declaration"
public virtual void SetFrameMemory(byte[] buffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *buffer* | The image buffer |

### DisplayFrame()
Display frame buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L285)
```csharp title="Declaration"
public virtual void DisplayFrame()
```
### Sleep()
Set display to sleep mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L321)
```csharp title="Declaration"
protected virtual void Sleep()
```
### SendCommand(Command)
Set command to display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperMonoBase.cs#L331)
```csharp title="Declaration"
protected void SendCommand(EPaperMonoBase.Command command)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Displays.EPaperMonoBase.Command](../Meadow.Foundation.Displays/EPaperMonoBase.Command) | *command* | command |


## Implements

* `Meadow.Hardware.ISpiPeripheral`
* `System.IDisposable`
* `Meadow.Peripherals.Displays.IPixelDisplay`
* `Meadow.Peripherals.Displays.IDisplay`
