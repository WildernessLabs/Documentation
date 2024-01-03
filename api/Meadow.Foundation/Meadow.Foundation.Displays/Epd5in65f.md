---
title: Class Epd5in65f
sidebar_label: Epd5in65f
description: "Represents a WaveShare 5.65\" ACeP 7 color e-Paper display"
---
# Class Epd5in65f
Represents a WaveShare 5.65" ACeP 7 color e-Paper display

###### **Assembly**: ePaperWaveShare.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd5in65f.cs#L10)
```csharp title="Declaration"
public class Epd5in65f : EPaperBase, ISpiPeripheral, IDisposable, IGraphicsDisplay
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Displays.EPaperBase](../Meadow.Foundation.Displays/EPaperBase)

**Implements:**  
`Meadow.Hardware.ISpiPeripheral`, `System.IDisposable`, [Meadow.Foundation.Graphics.IGraphicsDisplay](../Meadow.Foundation.Graphics/IGraphicsDisplay)

## Properties
### ColorMode
Display color mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd5in65f.cs#L15)
```csharp title="Declaration"
public ColorMode ColorMode { get; }
```
### SupportedColorModes
The Color mode supported by the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd5in65f.cs#L20)
```csharp title="Declaration"
public ColorMode SupportedColorModes { get; }
```
### PixelBuffer
The buffer the holds the pixel data for the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd5in65f.cs#L25)
```csharp title="Declaration"
public IPixelBuffer PixelBuffer { get; }
```
### EnabledColor
The color to draw when a pixel is enabled
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd5in65f.cs#L30)
```csharp title="Declaration"
public Color EnabledColor { get; }
```
### DisabledColor
The color to draw when a pixel is disabled
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd5in65f.cs#L35)
```csharp title="Declaration"
public Color DisabledColor { get; }
```
### Width
Width of display in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd5in65f.cs#L45)
```csharp title="Declaration"
public int Width { get; }
```
### Height
Height of display in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd5in65f.cs#L50)
```csharp title="Declaration"
public int Height { get; }
```
## Fields
### imageBuffer
Buffer to hold display data
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd5in65f.cs#L40)
```csharp title="Declaration"
protected readonly BufferIndexed4 imageBuffer
```
## Methods
### Clear(bool)
Clear display buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd5in65f.cs#L149)
```csharp title="Declaration"
public void Clear(bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *updateDisplay* | force display update |

### Fill(Color)
Clear the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd5in65f.cs#L163)
```csharp title="Declaration"
public void Fill(Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *color* | Color to set the display |

### Fill(int, int, int, int, Color)
Fill the display buffer with a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd5in65f.cs#L176)
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

### Clear()
Clear the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd5in65f.cs#L184)
```csharp title="Declaration"
public void Clear()
```
### Show()
Draw the display buffer to screen
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd5in65f.cs#L192)
```csharp title="Declaration"
public void Show()
```
### Show(int, int, int, int)
Transfer part of the contents of the buffer to the display
bounded by left, top, right and bottom
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd5in65f.cs#L220)
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

### Fill(Color, bool)
Clear the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd5in65f.cs#L257)
```csharp title="Declaration"
public void Fill(Color fillColor, bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *fillColor* | The color used to fill the display buffer |
| `System.Boolean` | *updateDisplay* | Update the display once the buffer has been cleared when true |

### DrawPixel(int, int, Color)
Draw a single pixel at the specified color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd5in65f.cs#L273)
```csharp title="Declaration"
public void DrawPixel(int x, int y, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x position in pixels |
| `System.Int32` | *y* | y position in pixels |
| `Meadow.Color` | *color* | The Meadow Foundation color of the pixel |

### DrawPixel(int, int, bool)
Enable or disable a single pixel (used for 1bpp displays)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd5in65f.cs#L284)
```csharp title="Declaration"
public void DrawPixel(int x, int y, bool enabled)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x position in pixels |
| `System.Int32` | *y* | y position in pixels |
| `System.Boolean` | *enabled* | On if true, off if false |

### InvertPixel(int, int)
Invert the color of a single pixel
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd5in65f.cs#L294)
```csharp title="Declaration"
public void InvertPixel(int x, int y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x position in pixels |
| `System.Int32` | *y* | y position in pixels |

### WriteBuffer(int, int, IPixelBuffer)
Draw a buffer to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd5in65f.cs#L302)
```csharp title="Declaration"
public void WriteBuffer(int x, int y, IPixelBuffer displayBuffer)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *x* |
| `System.Int32` | *y* |
| [Meadow.Foundation.Graphics.Buffers.IPixelBuffer](../Meadow.Foundation.Graphics.Buffers/IPixelBuffer) | *displayBuffer* |

### WaitForBusyState(bool)
Wait until the display busy state is set
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd5in65f.cs#L310)
```csharp title="Declaration"
protected virtual void WaitForBusyState(bool state)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *state* |

### Sleep()
Enter deep sleep mode
call reset to wake display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd5in65f.cs#L331)
```csharp title="Declaration"
public void Sleep()
```

## Implements

* `Meadow.Hardware.ISpiPeripheral`
* `System.IDisposable`
* [Meadow.Foundation.Graphics.IGraphicsDisplay](../Meadow.Foundation.Graphics/IGraphicsDisplay)
