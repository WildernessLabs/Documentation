---
title: Class AsciiConsole
sidebar_label: AsciiConsole
description: Represents a display driver for an ASCII console
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays/AsciiConsole
---
# Class AsciiConsole
Represents a display driver for an ASCII console

###### **Assembly**: AsciiConsole.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.AsciiConsole/Driver/AsciiConsole.cs#L9)
```csharp title="Declaration"
public class AsciiConsole : IPixelDisplay, IDisplay
```
**Implements:**  
`Meadow.Peripherals.Displays.IPixelDisplay`, `Meadow.Peripherals.Displays.IDisplay`

## Properties
### ColorMode
The currently set color mode for the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.AsciiConsole/Driver/AsciiConsole.cs#L15)
```csharp title="Declaration"
public ColorMode ColorMode { get; }
```
### SupportedColorModes
The Color mode supported by the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.AsciiConsole/Driver/AsciiConsole.cs#L18)
```csharp title="Declaration"
public ColorMode SupportedColorModes { get; }
```
### Width
Width of the display in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.AsciiConsole/Driver/AsciiConsole.cs#L21)
```csharp title="Declaration"
public int Width { get; }
```
### Height
Height of the display in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.AsciiConsole/Driver/AsciiConsole.cs#L24)
```csharp title="Declaration"
public int Height { get; }
```
### PixelBuffer
Provide a buffer that matches this display's color depth, height, and width
This should be the buffer that is sent to the device when Show is called
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.AsciiConsole/Driver/AsciiConsole.cs#L27)
```csharp title="Declaration"
public IPixelBuffer PixelBuffer { get; }
```
## Methods
### Clear(bool)
Clear the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.AsciiConsole/Driver/AsciiConsole.cs#L44)
```csharp title="Declaration"
public void Clear(bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *updateDisplay* | Update the display once the buffer has been cleared when true |

### DrawPixel(int, int, Color)
Draw a single pixel at the specified color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.AsciiConsole/Driver/AsciiConsole.cs#L50)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.AsciiConsole/Driver/AsciiConsole.cs#L56)
```csharp title="Declaration"
public void DrawPixel(int x, int y, bool enabled)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x position in pixels |
| `System.Int32` | *y* | y position in pixels |
| `System.Boolean` | *enabled* | On if true, off if false |

### Fill(Color, bool)
Clear the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.AsciiConsole/Driver/AsciiConsole.cs#L62)
```csharp title="Declaration"
public void Fill(Color fillColor, bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *fillColor* | The color used to fill the display buffer |
| `System.Boolean` | *updateDisplay* | Update the display once the buffer has been cleared when true |

### Fill(int, int, int, int, Color)
Clear the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.AsciiConsole/Driver/AsciiConsole.cs#L72)
```csharp title="Declaration"
public void Fill(int x, int y, int width, int height, Color fillColor)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x position in pixels |
| `System.Int32` | *y* | y position in pixels |
| `System.Int32` | *width* | width to fill in pixels |
| `System.Int32` | *height* | height to fill in pixels |
| `Meadow.Color` | *fillColor* | The color used to fill the display buffer |

### InvertPixel(int, int)
Invert the color of a single pixel
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.AsciiConsole/Driver/AsciiConsole.cs#L78)
```csharp title="Declaration"
public void InvertPixel(int x, int y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x position in pixels |
| `System.Int32` | *y* | y position in pixels |

### Show()
Transfer the contents of the buffer to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.AsciiConsole/Driver/AsciiConsole.cs#L84)
```csharp title="Declaration"
public void Show()
```
### Show(int, int, int, int)
Transfer part of the contents of the buffer to the display
bounded by left, top, right and bottom
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.AsciiConsole/Driver/AsciiConsole.cs#L97)
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

### WriteBuffer(int, int, IPixelBuffer)
Draw a buffer to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.AsciiConsole/Driver/AsciiConsole.cs#L110)
```csharp title="Declaration"
public void WriteBuffer(int x, int y, IPixelBuffer displayBuffer)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *x* |
| `System.Int32` | *y* |
| `Meadow.Peripherals.Displays.IPixelBuffer` | *displayBuffer* |


## Implements

* `Meadow.Peripherals.Displays.IPixelDisplay`
* `Meadow.Peripherals.Displays.IDisplay`
