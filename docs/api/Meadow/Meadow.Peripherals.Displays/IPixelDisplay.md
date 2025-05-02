---
title: Interface IPixelDisplay
sidebar_label: IPixelDisplay
description: Represents a pixel based graphics display
slug: /docs/api/Meadow/Meadow.Peripherals.Displays/IPixelDisplay
---
# Interface IPixelDisplay
Represents a pixel based graphics display

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelDisplay.cs#L8)
```csharp title="Declaration"
public interface IPixelDisplay : IDisplay
```
## Properties
### ColorMode
The currently set color mode for the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelDisplay.cs#L13)
```csharp title="Declaration"
ColorMode ColorMode { get; }
```
### SupportedColorModes
The Color mode supported by the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelDisplay.cs#L18)
```csharp title="Declaration"
ColorMode SupportedColorModes { get; }
```
### Width
Width of the display in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelDisplay.cs#L40)
```csharp title="Declaration"
int Width { get; }
```
### Height
Height of the display in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelDisplay.cs#L45)
```csharp title="Declaration"
int Height { get; }
```
### PixelBuffer
Provide a buffer that matches this display's color depth, height, and width
This should be the buffer that is sent to the device when Show is called
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelDisplay.cs#L51)
```csharp title="Declaration"
IPixelBuffer PixelBuffer { get; }
```
### EnabledColor
The color to draw when a pixel is enabled
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelDisplay.cs#L56)
```csharp title="Declaration"
Color EnabledColor { get; }
```
### DisabledColor
The color to draw when a pixel is disabled
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelDisplay.cs#L61)
```csharp title="Declaration"
Color DisabledColor { get; }
```
## Methods
### IsColorTypeSupported(ColorMode)
Is the color mode supported on this display
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelDisplay.cs#L24)
```csharp title="Declaration"
bool IsColorTypeSupported(ColorMode mode)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Peripherals.Displays.ColorMode](../Meadow.Peripherals.Displays/ColorMode) | *mode* | The color mode |

### SetColorMode(ColorMode)
Set the color mode for the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelDisplay.cs#L32)
```csharp title="Declaration"
void SetColorMode(ColorMode mode)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Peripherals.Displays.ColorMode](../Meadow.Peripherals.Displays/ColorMode) | *mode* |

### Show()
Transfer the contents of the buffer to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelDisplay.cs#L66)
```csharp title="Declaration"
void Show()
```
### Show(int, int, int, int)
Transfer part of the contents of the buffer to the display
bounded by left, top, right and bottom
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelDisplay.cs#L72)
```csharp title="Declaration"
void Show(int left, int top, int right, int bottom)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *left* |
| `System.Int32` | *top* |
| `System.Int32` | *right* |
| `System.Int32` | *bottom* |

### Clear(bool)
Clear the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelDisplay.cs#L78)
```csharp title="Declaration"
void Clear(bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *updateDisplay* | Update the display once the buffer has been cleared when true |

### Fill(Color, bool)
Clear the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelDisplay.cs#L85)
```csharp title="Declaration"
void Fill(Color fillColor, bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Color](../Meadow/Color) | *fillColor* | The color used to fill the display buffer |
| `System.Boolean` | *updateDisplay* | Update the display once the buffer has been cleared when true |

### Fill(int, int, int, int, Color)
Clear the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelDisplay.cs#L95)
```csharp title="Declaration"
void Fill(int x, int y, int width, int height, Color fillColor)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x position in pixels |
| `System.Int32` | *y* | y position in pixels |
| `System.Int32` | *width* | width to fill in pixels |
| `System.Int32` | *height* | height to fill in pixels |
| [Meadow.Color](../Meadow/Color) | *fillColor* | The color used to fill the display buffer |

### DrawPixel(int, int, Color)
Draw a single pixel at the specified color
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelDisplay.cs#L103)
```csharp title="Declaration"
void DrawPixel(int x, int y, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x position in pixels |
| `System.Int32` | *y* | y position in pixels |
| [Meadow.Color](../Meadow/Color) | *color* | The Meadow Foundation color of the pixel |

### DrawPixel(int, int, bool)
Enable or disable a single pixel (used for 1bpp displays)
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelDisplay.cs#L111)
```csharp title="Declaration"
void DrawPixel(int x, int y, bool enabled)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x position in pixels |
| `System.Int32` | *y* | y position in pixels |
| `System.Boolean` | *enabled* | On if true, off if false |

### InvertPixel(int, int)
Invert the color of a single pixel
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelDisplay.cs#L118)
```csharp title="Declaration"
void InvertPixel(int x, int y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x position in pixels |
| `System.Int32` | *y* | y position in pixels |

### WriteBuffer(int, int, IPixelBuffer)
Draw a buffer to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelDisplay.cs#L123)
```csharp title="Declaration"
void WriteBuffer(int x, int y, IPixelBuffer displayBuffer)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *x* |
| `System.Int32` | *y* |
| [Meadow.Peripherals.Displays.IPixelBuffer](../Meadow.Peripherals.Displays/IPixelBuffer) | *displayBuffer* |

