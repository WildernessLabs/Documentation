---
title: Class CharlieWing
sidebar_label: CharlieWing
description: "Represents an Adafruit CharliePlex 15x7 feather wing"
---
# Class CharlieWing
Represents an Adafruit CharliePlex 15x7 feather wing

###### **Assembly**: CharlieWing.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/CharlieWing/Driver/CharlieWing.cs#L12)
```csharp title="Declaration"
public class CharlieWing : IGraphicsDisplay
```
**Implements:**  
`Meadow.Foundation.Graphics.IGraphicsDisplay`

## Properties
### ColorMode
Color mode of display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/CharlieWing/Driver/CharlieWing.cs#L22)
```csharp title="Declaration"
public ColorMode ColorMode { get; }
```
### Width
Width of display in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/CharlieWing/Driver/CharlieWing.cs#L27)
```csharp title="Declaration"
public int Width { get; }
```
### Height
Height of display in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/CharlieWing/Driver/CharlieWing.cs#L32)
```csharp title="Declaration"
public int Height { get; }
```
### Frame
The Is31fl3731 active frame
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/CharlieWing/Driver/CharlieWing.cs#L37)
```csharp title="Declaration"
public byte Frame { get; set; }
```
### PixelBuffer
The pixel buffer that represents the offscreen buffer
Not implemented for this driver
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/CharlieWing/Driver/CharlieWing.cs#L43)
```csharp title="Declaration"
public IPixelBuffer PixelBuffer { get; }
```
### SupportedColorModes
Color modes supported by the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/CharlieWing/Driver/CharlieWing.cs#L48)
```csharp title="Declaration"
public ColorMode SupportedColorModes { get; }
```
## Fields
### iS31FL3731
Is31fl3731 object to manage the leds
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/CharlieWing/Driver/CharlieWing.cs#L17)
```csharp title="Declaration"
protected readonly Is31fl3731 iS31FL3731
```
## Methods
### Clear(bool)
Clear the display buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/CharlieWing/Driver/CharlieWing.cs#L71)
```csharp title="Declaration"
public void Clear(bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *updateDisplay* | Force a display update if true, false to clear the buffer |

### DrawPixel(int, int, Color)
Turn on an RGB LED with the specified color on (x,y) coordinates
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/CharlieWing/Driver/CharlieWing.cs#L82)
```csharp title="Declaration"
public void DrawPixel(int x, int y, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x position in pixels 0 indexed from the left |
| `System.Int32` | *y* | The y position in pixels 0 indexed from the top |
| `Meadow.Foundation.Color` | *color* | The color to draw normalized to black/off or white/on |

### DrawPixel(int, int, bool)
Turn on a LED on (x,y) coordinates
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/CharlieWing/Driver/CharlieWing.cs#L93)
```csharp title="Declaration"
public void DrawPixel(int x, int y, bool colored)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x position in pixels 0 indexed from the left |
| `System.Int32` | *y* | The y position in pixels 0 indexed from the top |
| `System.Boolean` | *colored* | Led is on if true, off if false |

### DrawPixel(int, int, byte)
Turn on LED with the specified brightness on (x,y) coordinates
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/CharlieWing/Driver/CharlieWing.cs#L104)
```csharp title="Declaration"
public void DrawPixel(int x, int y, byte brightness)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x position in pixels 0 indexed from the left |
| `System.Int32` | *y* | The y position in pixels 0 indexed from the top |
| `System.Byte` | *brightness* | The led brightness from 0-255 |

### InvertPixel(int, int)
Invert the color of the pixel at the given location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/CharlieWing/Driver/CharlieWing.cs#L127)
```csharp title="Declaration"
public void InvertPixel(int x, int y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x position in pixels 0 indexed from the left |
| `System.Int32` | *y* | The y position in pixels 0 indexed from the top |

### WriteBuffer(int, int, IPixelBuffer)
Draw a buffer to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/CharlieWing/Driver/CharlieWing.cs#L138)
```csharp title="Declaration"
public void WriteBuffer(int x, int y, IPixelBuffer displayBuffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x position in pixels 0 indexed from the left |
| `System.Int32` | *y* | The y position in pixels 0 indexed from the top |
| `Meadow.Foundation.Graphics.Buffers.IPixelBuffer` | *displayBuffer* | The display buffer to draw to the CharlieWing |

### Fill(Color, bool)
Fill the display buffer to a normalized color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/CharlieWing/Driver/CharlieWing.cs#L154)
```csharp title="Declaration"
public void Fill(Color fillColor, bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Foundation.Color` | *fillColor* | The clear color which will be normalized to black/off or white/on |
| `System.Boolean` | *updateDisplay* | Force a display update if true, false to clear the buffer |

### Fill(int, int, int, int, Color)
Fill the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/CharlieWing/Driver/CharlieWing.cs#L173)
```csharp title="Declaration"
public void Fill(int x, int y, int width, int height, Color fillColor)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x position in pixels 0 indexed from the left |
| `System.Int32` | *y* | The y position in pixels 0 indexed from the top |
| `System.Int32` | *width* | The width to fill in pixels |
| `System.Int32` | *height* | The height to fill in pixels |
| `Meadow.Foundation.Color` | *fillColor* | The fillColor color which will be normalized to black/off or white/on |

### Show()
Update the display from the offscreen buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/CharlieWing/Driver/CharlieWing.cs#L187)
```csharp title="Declaration"
public void Show()
```
### Show(int, int, int, int)
Update a region of the display from the offscreen buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/CharlieWing/Driver/CharlieWing.cs#L199)
```csharp title="Declaration"
public void Show(int left, int top, int right, int bottom)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *left* | The left bounding position in pixels |
| `System.Int32` | *top* | The top bounding position in pixels |
| `System.Int32` | *right* | The right bounding position in pixels |
| `System.Int32` | *bottom* | The bottom bounding position in pixels |

### Show(byte)
Update the display from a specific iS31FL3731 frame
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/CharlieWing/Driver/CharlieWing.cs#L208)
```csharp title="Declaration"
public void Show(byte frame)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *frame* | The frame to show (0-7) |


## Implements

* `Meadow.Foundation.Graphics.IGraphicsDisplay`
