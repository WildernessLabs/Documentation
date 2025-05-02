---
title: Class NeoPixelWing
sidebar_label: NeoPixelWing
description: Represents Adafruits NeoPixel FeatherWing
slug: >-
  /docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings/NeoPixelWing
---
# Class NeoPixelWing
Represents Adafruits NeoPixel FeatherWing

###### **Assembly**: NeoPixelWing.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/NeoPixelWing/Driver/NeoPixelWing.cs#L11)
```csharp title="Declaration"
public class NeoPixelWing : IPixelDisplay, IDisplay
```
**Implements:**  
`Meadow.Peripherals.Displays.IPixelDisplay`, `Meadow.Peripherals.Displays.IDisplay`

## Properties
### ColorMode
Color mode of display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/NeoPixelWing/Driver/NeoPixelWing.cs#L16)
```csharp title="Declaration"
public ColorMode ColorMode { get; }
```
### Width
Width of display in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/NeoPixelWing/Driver/NeoPixelWing.cs#L21)
```csharp title="Declaration"
public int Width { get; }
```
### Height
Height of display in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/NeoPixelWing/Driver/NeoPixelWing.cs#L26)
```csharp title="Declaration"
public int Height { get; }
```
### PixelBuffer
The pixel buffer that represents the offscreen buffer
Not implemented for this driver
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/NeoPixelWing/Driver/NeoPixelWing.cs#L32)
```csharp title="Declaration"
public IPixelBuffer PixelBuffer { get; protected set; }
```
### SupportedColorModes
Color modes supported by the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/NeoPixelWing/Driver/NeoPixelWing.cs#L37)
```csharp title="Declaration"
public ColorMode SupportedColorModes { get; }
```
### Leds
Returns Ws2812 instance
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/NeoPixelWing/Driver/NeoPixelWing.cs#L42)
```csharp title="Declaration"
public Ws2812 Leds { get; protected set; }
```
## Methods
### Clear(bool)
Clear the display buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/NeoPixelWing/Driver/NeoPixelWing.cs#L58)
```csharp title="Declaration"
public void Clear(bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *updateDisplay* | Force a display update if true, false to clear the buffer |

### DrawPixel(int, int, Color)
Turn on an RGB LED with the specified color on (x,y) coordinates
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/NeoPixelWing/Driver/NeoPixelWing.cs#L74)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/NeoPixelWing/Driver/NeoPixelWing.cs#L85)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/NeoPixelWing/Driver/NeoPixelWing.cs#L95)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/NeoPixelWing/Driver/NeoPixelWing.cs#L106)
```csharp title="Declaration"
public void WriteBuffer(int x, int y, IPixelBuffer displayBuffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x position in pixels 0 indexed from the left |
| `System.Int32` | *y* | The y position in pixels 0 indexed from the top |
| `Meadow.Peripherals.Displays.IPixelBuffer` | *displayBuffer* | The display buffer to draw to the CharlieWing |

### Fill(Color, bool)
Fill the display buffer to a normalized color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/NeoPixelWing/Driver/NeoPixelWing.cs#L116)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/NeoPixelWing/Driver/NeoPixelWing.cs#L132)
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
Update the display from the offscreen buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/NeoPixelWing/Driver/NeoPixelWing.cs#L140)
```csharp title="Declaration"
public void Show()
```
### Show(int, int, int, int)
Update a region of the display from the offscreen buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings.git/blob/develop/Source/NeoPixelWing/Driver/NeoPixelWing.cs#L160)
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

* `Meadow.Peripherals.Displays.IPixelDisplay`
* `Meadow.Peripherals.Displays.IDisplay`
