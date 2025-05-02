---
title: Class LedMatrix8x16Wing
sidebar_label: LedMatrix8x16Wing
description: Represents an Adafruit Led Matrix 8x16 feather wing (HT16K33)
slug: >-
  /docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings/LedMatrix8x16Wing
---
# Class LedMatrix8x16Wing
Represents an Adafruit Led Matrix 8x16 feather wing (HT16K33)

###### **Assembly**: LedMatrix8x16Wing.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/LedMatrix8x16Wing/Driver/LedMatrix8x16Wing.PixelBuffer.cs#L5)
```csharp title="Declaration"
public class LedMatrix8x16Wing : IPixelDisplay, IDisplay, IPixelBuffer
```
**Implements:**  
`Meadow.Peripherals.Displays.IPixelDisplay`, `Meadow.Peripherals.Displays.IDisplay`, `Meadow.Peripherals.Displays.IPixelBuffer`

## Properties
### ColorMode
Returns the color mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/LedMatrix8x16Wing/Driver/LedMatrix8x16Wing.cs#L17)
```csharp title="Declaration"
public ColorMode ColorMode { get; }
```
### SupportedColorModes
Color modes supported by the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/LedMatrix8x16Wing/Driver/LedMatrix8x16Wing.cs#L22)
```csharp title="Declaration"
public ColorMode SupportedColorModes { get; }
```
### Width
Returns the width of the RGB LED matrix
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/LedMatrix8x16Wing/Driver/LedMatrix8x16Wing.cs#L27)
```csharp title="Declaration"
public int Width { get; }
```
### Height
Returns the height of the RGB LED matrix
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/LedMatrix8x16Wing/Driver/LedMatrix8x16Wing.cs#L32)
```csharp title="Declaration"
public int Height { get; }
```
### IgnoreOutOfBoundsPixels
Gets/Sets property to ignore boundaries when drawing outside of the LED matrix
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/LedMatrix8x16Wing/Driver/LedMatrix8x16Wing.cs#L37)
```csharp title="Declaration"
public bool IgnoreOutOfBoundsPixels { get; set; }
```
### PixelBuffer
The pixel buffer that represents the offscreen buffer
Not implemented for this driver
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/LedMatrix8x16Wing/Driver/LedMatrix8x16Wing.cs#L43)
```csharp title="Declaration"
public IPixelBuffer PixelBuffer { get; }
```
### BitDepth
The bit depth of the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/LedMatrix8x16Wing/Driver/LedMatrix8x16Wing.PixelBuffer.cs#L10)
```csharp title="Declaration"
public int BitDepth { get; }
```
### ByteCount
The total bytes used for the display buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/LedMatrix8x16Wing/Driver/LedMatrix8x16Wing.PixelBuffer.cs#L15)
```csharp title="Declaration"
public int ByteCount { get; }
```
### Buffer
The backing buffer for the pixel buffer (not implemented)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/LedMatrix8x16Wing/Driver/LedMatrix8x16Wing.PixelBuffer.cs#L20)
```csharp title="Declaration"
public byte[] Buffer { get; }
```
## Methods
### Clear(bool)
Clear the RGB LED Matrix offscreen buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/LedMatrix8x16Wing/Driver/LedMatrix8x16Wing.cs#L59)
```csharp title="Declaration"
public void Clear(bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *updateDisplay* | Force a display update if true, false to clear the buffer |

### Clear()
Clear the RGB LED Matrix offscreen buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/LedMatrix8x16Wing/Driver/LedMatrix8x16Wing.cs#L67)
```csharp title="Declaration"
public void Clear()
```
### DrawPixel(int, int, Color)
Turn on an RGB LED with the specified color on (x,y) coordinates
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/LedMatrix8x16Wing/Driver/LedMatrix8x16Wing.cs#L78)
```csharp title="Declaration"
public void DrawPixel(int x, int y, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x position in pixels 0 indexed from the left |
| `System.Int32` | *y* | The y position in pixels 0 indexed from the top |
| `Meadow.Color` | *color* | The color to draw normalized to black/off or white/on |

### DrawPixel(int, int, bool)
Turn on a LED on (x,y) coordinates
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/LedMatrix8x16Wing/Driver/LedMatrix8x16Wing.cs#L89)
```csharp title="Declaration"
public void DrawPixel(int x, int y, bool colored)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x position in pixels 0 indexed from the left |
| `System.Int32` | *y* | The y position in pixels 0 indexed from the top |
| `System.Boolean` | *colored* | Led is on if true, off if false |

### InvertPixel(int, int)
Invert the color of the pixel at the given location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/LedMatrix8x16Wing/Driver/LedMatrix8x16Wing.cs#L113)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/LedMatrix8x16Wing/Driver/LedMatrix8x16Wing.cs#L139)
```csharp title="Declaration"
public void WriteBuffer(int x, int y, IPixelBuffer displayBuffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x position in pixels 0 indexed from the left |
| `System.Int32` | *y* | The y position in pixels 0 indexed from the top |
| `Meadow.Peripherals.Displays.IPixelBuffer` | *displayBuffer* | The display buffer to draw to the display |

### Fill(Color, bool)
Fill the display buffer to a normalized color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/LedMatrix8x16Wing/Driver/LedMatrix8x16Wing.cs#L155)
```csharp title="Declaration"
public void Fill(Color fillColor, bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *fillColor* | The clear color which will be normalized to black/off or white/on |
| `System.Boolean` | *updateDisplay* | Force a display update if true, false to clear the buffer |

### Fill(int, int, int, int, Color)
Fill the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/LedMatrix8x16Wing/Driver/LedMatrix8x16Wing.cs#L173)
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
| `Meadow.Color` | *fillColor* | The fillColor color which will be normalized to black/off or white/on |

### Show()
Show changes on the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/LedMatrix8x16Wing/Driver/LedMatrix8x16Wing.cs#L188)
```csharp title="Declaration"
public void Show()
```
### Show(int, int, int, int)
Update a region of the display from the offscreen buffer 
Currently always redraws the entire display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/LedMatrix8x16Wing/Driver/LedMatrix8x16Wing.cs#L201)
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

### Fill(Color)
Fill the display with a normalized color to on/off
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/LedMatrix8x16Wing/Driver/LedMatrix8x16Wing.PixelBuffer.cs#L26)
```csharp title="Declaration"
public void Fill(Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *color* | The color to fill |

### GetPixel(int, int)
Get the Color of the pixel at a location (not implemented)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/LedMatrix8x16Wing/Driver/LedMatrix8x16Wing.PixelBuffer.cs#L38)
```csharp title="Declaration"
public Color GetPixel(int x, int y)
```

##### Returns

`Meadow.Color`: The pixel color
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x position in pixels |
| `System.Int32` | *y* | The y position in pixels |


##### Exceptions

`System.NotImplementedException`  

### SetPixel(int, int, Color)
Set a pixel at a specific location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/LedMatrix8x16Wing/Driver/LedMatrix8x16Wing.PixelBuffer.cs#L49)
```csharp title="Declaration"
public void SetPixel(int x, int y, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x position in pixels |
| `System.Int32` | *y* | The y position in pixels |
| `Meadow.Color` | *color* | The pixel color normalized to on/off |


## Implements

* `Meadow.Peripherals.Displays.IPixelDisplay`
* `Meadow.Peripherals.Displays.IDisplay`
* `Meadow.Peripherals.Displays.IPixelBuffer`
