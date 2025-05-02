---
title: Class Epd7in5V2
sidebar_label: Epd7in5V2
description: >-
  Represents an WaveShare Epd7in5 v2 ePaper display 800x480, 7.5inch e-Ink
  display, SPI interface
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays/Epd7in5V2
---
# Class Epd7in5V2
Represents an WaveShare Epd7in5 v2 ePaper display
800x480, 7.5inch e-Ink display, SPI interface

###### **Assembly**: ePaperWaveShare.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd7in5V2.cs#L12)
```csharp title="Declaration"
public class Epd7in5V2 : EPaperBase, ISpiPeripheral, IDisposable, IPixelDisplay, IDisplay
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Displays.EPaperBase](../Meadow.Foundation.Displays/EPaperBase)

**Implements:**  
`Meadow.Hardware.ISpiPeripheral`, `System.IDisposable`, `Meadow.Peripherals.Displays.IPixelDisplay`, `Meadow.Peripherals.Displays.IDisplay`

## Properties
### ColorMode
The currently set color mode for the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd7in5V2.cs#L15)
```csharp title="Declaration"
public ColorMode ColorMode { get; protected set; }
```
### SupportedColorModes
The Color mode supported by the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd7in5V2.cs#L18)
```csharp title="Declaration"
public ColorMode SupportedColorModes { get; }
```
### PixelBuffer
Provide a buffer that matches this display's color depth, height, and width
This should be the buffer that is sent to the device when Show is called
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd7in5V2.cs#L21)
```csharp title="Declaration"
public IPixelBuffer PixelBuffer { get; }
```
### EnabledColor
The color to draw when a pixel is enabled
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd7in5V2.cs#L24)
```csharp title="Declaration"
public Color EnabledColor { get; }
```
### DisabledColor
The color to draw when a pixel is disabled
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd7in5V2.cs#L27)
```csharp title="Declaration"
public Color DisabledColor { get; }
```
### Width
Width of display in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd7in5V2.cs#L37)
```csharp title="Declaration"
public int Width { get; }
```
### Height
Height of display in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd7in5V2.cs#L42)
```csharp title="Declaration"
public int Height { get; }
```
### MinimumRefreshInterval
The minimum delay required by the hardware between screen redraws
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd7in5V2.cs#L47)
```csharp title="Declaration"
public TimeSpan MinimumRefreshInterval { get; }
```
## Fields
### imageBuffer
Buffer to hold display data
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd7in5V2.cs#L32)
```csharp title="Declaration"
protected IPixelBuffer imageBuffer
```
## Methods
### Initialize()
Initialize the display driver
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd7in5V2.cs#L118)
```csharp title="Declaration"
protected void Initialize()
```
### Clear(bool)
Clear display buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd7in5V2.cs#L203)
```csharp title="Declaration"
public void Clear(bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *updateDisplay* | force display update |

### Clear(bool, bool)
Clear the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd7in5V2.cs#L213)
```csharp title="Declaration"
public void Clear(bool enabled, bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *enabled* | Set the display to the enabled or disabled color (defaults are black and white) |
| `System.Boolean` | *updateDisplay* | Update the display once the buffer has been cleared when true |

### Fill(Color, bool)
Clear the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd7in5V2.cs#L235)
```csharp title="Declaration"
public void Fill(Color color, bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *color* | Color to set the display |
| `System.Boolean` | *updateDisplay* | Update the display once the buffer has been cleared when true |

### Fill(int, int, int, int, Color)
Fill the display buffer with a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd7in5V2.cs#L255)
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

### DrawPixel(int, int, bool)
Draw a single pixel
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd7in5V2.cs#L266)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd7in5V2.cs#L284)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd7in5V2.cs#L294)
```csharp title="Declaration"
public void InvertPixel(int x, int y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x coordinate of pixel |
| `System.Int32` | *y* | y coordinate of pixel |

### WriteBuffer(int, int, IPixelBuffer)
Draw a buffer at a specific location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd7in5V2.cs#L305)
```csharp title="Declaration"
public void WriteBuffer(int x, int y, IPixelBuffer displayBuffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x location in pixels |
| `System.Int32` | *y* | y location in pixels |
| `Meadow.Peripherals.Displays.IPixelBuffer` | *displayBuffer* |  |

### Reset()
Reset the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd7in5V2.cs#L313)
```csharp title="Declaration"
protected override void Reset()
```
### SetPartialWindow(int, int, int, int)
Set partial address window to update display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd7in5V2.cs#L333)
```csharp title="Declaration"
protected void SetPartialWindow(int x, int y, int width, int height)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | X start position in pixels |
| `System.Int32` | *y* | Y start position in pixels |
| `System.Int32` | *width* | Width in pixels |
| `System.Int32` | *height* | Height in pixels |

### Show()
Copy the display buffer to the display
If called more frequently than every 3 seconds, a not supported exception will be thrown
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd7in5V2.cs#L355)
```csharp title="Declaration"
public void Show()
```

##### Exceptions

`System.NotSupportedException`  
Thrown if called more frequently than every 3 seconds
### Show(int, int, int, int)
Copy the display buffer to the display for a set region
If called more frequently than every 3 seconds, a not supported exception will be thrown
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd7in5V2.cs#L420)
```csharp title="Declaration"
public void Show(int left, int top, int right, int bottom)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *left* | left bounds of region in pixels |
| `System.Int32` | *top* | top bounds of region in pixels |
| `System.Int32` | *right* | right bounds of region in pixels |
| `System.Int32` | *bottom* | bottom bounds of region in pixels |


##### Exceptions

`System.NotSupportedException`  
Thrown if called more frequently than every 3 seconds
### DisplayFrame()
Send a refresh command to the display 
Does not transfer new data
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd7in5V2.cs#L501)
```csharp title="Declaration"
public void DisplayFrame()
```
### Sleep()
Set the device to low power mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaperWaveShare/Driver/Drivers/Epd7in5V2.cs#L511)
```csharp title="Declaration"
protected void Sleep()
```

## Implements

* `Meadow.Hardware.ISpiPeripheral`
* `System.IDisposable`
* `Meadow.Peripherals.Displays.IPixelDisplay`
* `Meadow.Peripherals.Displays.IDisplay`
