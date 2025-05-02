---
title: Class Epd2in15g
sidebar_label: Epd2in15g
description: >-
  Represents a WaveShare color ePaper color display 296x160, 2.15" e-Ink
  four-color display, SPI interface
slug: /docs/api/Meadow.Foundation/Displays.ePaperWaveShare.Drivers/Epd2in15g
---
# Class Epd2in15g
Represents a WaveShare color ePaper color display
296x160, 2.15" e-Ink four-color display, SPI interface

###### **Assembly**: ePaperWaveShare.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd2in15g.cs#L14)
```csharp title="Declaration"
public class Epd2in15g : EPaperBase, ISpiPeripheral, IDisposable, IPixelDisplay, IDisplay
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Displays.EPaperBase](../Meadow.Foundation.Displays/EPaperBase)

**Implements:**  
`Meadow.Hardware.ISpiPeripheral`, `System.IDisposable`, `Meadow.Peripherals.Displays.IPixelDisplay`, `Meadow.Peripherals.Displays.IDisplay`

## Properties
### ColorMode
The currently set color mode for the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd2in15g.cs#L17)
```csharp title="Declaration"
public ColorMode ColorMode { get; }
```
### SupportedColorModes
The Color mode supported by the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd2in15g.cs#L20)
```csharp title="Declaration"
public ColorMode SupportedColorModes { get; }
```
### PixelBuffer
Provide a buffer that matches this display's color depth, height, and width
This should be the buffer that is sent to the device when Show is called
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd2in15g.cs#L23)
```csharp title="Declaration"
public IPixelBuffer PixelBuffer { get; }
```
### EnabledColor
The color to draw when a pixel is enabled
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd2in15g.cs#L26)
```csharp title="Declaration"
public Color EnabledColor { get; }
```
### DisabledColor
The color to draw when a pixel is disabled
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd2in15g.cs#L29)
```csharp title="Declaration"
public Color DisabledColor { get; }
```
### Width
Width of the display in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd2in15g.cs#L37)
```csharp title="Declaration"
public int Width { get; }
```
### Height
Height of the display in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd2in15g.cs#L40)
```csharp title="Declaration"
public int Height { get; }
```
## Fields
### imageBuffer
Buffer to hold display data
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd2in15g.cs#L34)
```csharp title="Declaration"
protected readonly BufferIndexed2 imageBuffer
```
## Methods
### Clear(bool)
Clear display buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd2in15g.cs#L172)
```csharp title="Declaration"
public void Clear(bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *updateDisplay* | force display update |

### Fill(Color)
Clear the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd2in15g.cs#L186)
```csharp title="Declaration"
public void Fill(Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *color* | Color to set the display |

### Fill(int, int, int, int, Color)
Fill the display buffer with a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd2in15g.cs#L199)
```csharp title="Declaration"
public void Fill(int x, int y, int width, int height, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x location in pixels to start fill |
| `System.Int32` | *y* | y location in pixels to start fill |
| `System.Int32` | *width* | w in pixels to fill |
| `System.Int32` | *height* | h in pixels to fill |
| `Meadow.Color` | *color* | color to fill |

### Clear()
Clear the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd2in15g.cs#L207)
```csharp title="Declaration"
public void Clear()
```
### Show()
Draw the display buffer to screen
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd2in15g.cs#L215)
```csharp title="Declaration"
public void Show()
```
### Show(int, int, int, int)
Transfer part of the contents of the buffer to the display
bounded by left, top, right and bottom
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd2in15g.cs#L243)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd2in15g.cs#L253)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd2in15g.cs#L269)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd2in15g.cs#L280)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd2in15g.cs#L290)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd2in15g.cs#L298)
```csharp title="Declaration"
public void WriteBuffer(int x, int y, IPixelBuffer displayBuffer)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *x* |
| `System.Int32` | *y* |
| `Meadow.Peripherals.Displays.IPixelBuffer` | *displayBuffer* |

### WaitForBusyState(bool)
Wait until the display busy state is set
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd2in15g.cs#L306)
```csharp title="Declaration"
protected virtual void WaitForBusyState(bool state)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *state* |

### Reset()
Reset the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd2in15g.cs#L326)
```csharp title="Declaration"
protected override void Reset()
```
### Sleep()
Enter deep sleep mode
call reset to wake display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd2in15g.cs#L343)
```csharp title="Declaration"
public void Sleep()
```

## Implements

* `Meadow.Hardware.ISpiPeripheral`
* `System.IDisposable`
* `Meadow.Peripherals.Displays.IPixelDisplay`
* `Meadow.Peripherals.Displays.IDisplay`
