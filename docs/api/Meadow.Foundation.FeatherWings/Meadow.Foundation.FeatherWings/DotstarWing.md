---
title: Class DotstarWing
sidebar_label: DotstarWing
description: "Represents Adafruit's Dotstar feather wing 12x6"
---
# Class DotstarWing
Represents Adafruit's Dotstar feather wing 12x6

###### **Assembly**: DotstarWing.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/DotstarWing/Driver/DotstarWing.cs#L12)
```csharp title="Declaration"
public class DotstarWing : IGraphicsDisplay
```
**Implements:**  
`Meadow.Foundation.Graphics.IGraphicsDisplay`

## Properties
### ColorMode
Returns the color mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/DotstarWing/Driver/DotstarWing.cs#L19)
```csharp title="Declaration"
public ColorMode ColorMode { get; }
```
### SupportedColorModes
Color modes supported by the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/DotstarWing/Driver/DotstarWing.cs#L24)
```csharp title="Declaration"
public ColorMode SupportedColorModes { get; }
```
### Width
Returns the width of the RGB LED matrix
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/DotstarWing/Driver/DotstarWing.cs#L29)
```csharp title="Declaration"
public int Width { get; }
```
### Height
Returns the height of the RGB LED matrix
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/DotstarWing/Driver/DotstarWing.cs#L34)
```csharp title="Declaration"
public int Height { get; }
```
### Brightness
Get/Sets the RGB LED Matrix brightness
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/DotstarWing/Driver/DotstarWing.cs#L39)
```csharp title="Declaration"
public float Brightness { get; set; }
```
### PixelBuffer
Get the offscreen pixel buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/DotstarWing/Driver/DotstarWing.cs#L48)
```csharp title="Declaration"
public IPixelBuffer PixelBuffer { get; }
```
## Methods
### Clear(bool)
Clear the RGB LED Matrix buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/DotstarWing/Driver/DotstarWing.cs#L63)
```csharp title="Declaration"
public void Clear(bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *updateDisplay* | If true, update the display, if false, only clear the buffer |

### DrawPixel(int, int, Color)
Turn on an RGB LED with the specified color on (x,y) coordinates
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/DotstarWing/Driver/DotstarWing.cs#L74)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/DotstarWing/Driver/DotstarWing.cs#L93)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/DotstarWing/Driver/DotstarWing.cs#L101)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/DotstarWing/Driver/DotstarWing.cs#L110)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/DotstarWing/Driver/DotstarWing.cs#L118)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/DotstarWing/Driver/DotstarWing.cs#L129)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/DotstarWing/Driver/DotstarWing.cs#L135)
```csharp title="Declaration"
public void Show()
```
### Show(int, int, int, int)
Update a region of the display from the offscreen buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/main/Source/DotstarWing/Driver/DotstarWing.cs#L145)
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


## Implements

* `Meadow.Foundation.Graphics.IGraphicsDisplay`
