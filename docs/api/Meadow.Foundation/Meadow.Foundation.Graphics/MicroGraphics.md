---
title: Class MicroGraphics
sidebar_label: MicroGraphics
description: Provide high level graphics functions
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Graphics/MicroGraphics
---
# Class MicroGraphics
Provide high level graphics functions

###### **Assembly**: MicroGraphics.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.TextDisplay.cs#L6)
```csharp title="Declaration"
public class MicroGraphics : ITextDisplay, IDisplay
```
**Implements:**  
`Meadow.Peripherals.Displays.ITextDisplay`, `Meadow.Peripherals.Displays.IDisplay`

## Properties
### PixelBuffer
PixelBuffer draw target
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L24)
```csharp title="Declaration"
protected IPixelBuffer PixelBuffer { get; }
```
### EnabledColor
The color used when a pixel is enabled (on)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L35)
```csharp title="Declaration"
public Color EnabledColor { get; }
```
### DisabledColor
The color used when a pixel is not enabled (off)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L40)
```csharp title="Declaration"
public Color DisabledColor { get; }
```
### CurrentFont
Font used for drawing text to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L45)
```csharp title="Declaration"
public IFont CurrentFont { get; set; }
```
### ColorMode
Current color mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L67)
```csharp title="Declaration"
public ColorMode ColorMode { get; }
```
### Rotation
Current rotation used for drawing pixels to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L72)
```csharp title="Declaration"
public RotationType Rotation { get; set; }
```
### ColorInversion
Current display color inversion
Note - not all displays support color inversion
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L92)
```csharp title="Declaration"
public bool ColorInversion { get; set; }
```
### Stroke
Stroke / line thickness when drawing lines or shape outlines
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L108)
```csharp title="Declaration"
public int Stroke { get; set; }
```
### PenColor
Current pen color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L113)
```csharp title="Declaration"
public Color PenColor { get; set; }
```
### Height
Return the height of the display after accounting for the rotation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L118)
```csharp title="Declaration"
public int Height { get; }
```
### Width
Return the width of the display after accounting for the rotation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L133)
```csharp title="Declaration"
public int Width { get; }
```
### DisplayConfig
Text display configuration for use with text display menu
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L148)
```csharp title="Declaration"
public TextDisplayConfig DisplayConfig { get; }
```
### DelayBetweenFrames
Optional enforced delay between updates when calling ShowBuffered
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L153)
```csharp title="Declaration"
public TimeSpan DelayBetweenFrames { get; set; }
```
### CursorColumn
The current cursor column relative to text/font
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.TextDisplay.cs#L94)
```csharp title="Declaration"
public byte CursorColumn { get; }
```
### CursorLine
The current cursor line relative to the text
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.TextDisplay.cs#L99)
```csharp title="Declaration"
public byte CursorLine { get; }
```
## Fields
### canvasState
The current canvas state
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.Canvas.cs#L37)
```csharp title="Declaration"
protected MicroGraphics.CanvasState? canvasState
```
### display
Display object responsible for managing the buffer and rendering
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L19)
```csharp title="Declaration"
protected readonly IPixelDisplay? display
```
### IgnoreOutOfBoundsPixels
ignore pixels that are outside of the pixel buffer coordinate space
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L30)
```csharp title="Declaration"
public bool IgnoreOutOfBoundsPixels
```
## Methods
### DrawLineAntialiased(float, float, float, float, Color)
Draws an anti-aliased line between two points using the Xiaolin Wu algorithm
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.Antialiasing.cs#L18)
```csharp title="Declaration"
public void DrawLineAntialiased(float x0, float y0, float x1, float y1, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *x0* | The x-coordinate of the starting point of the line |
| `System.Single` | *y0* | The y-coordinate of the starting point of the line |
| `System.Single` | *x1* | The x-coordinate of the ending point of the line |
| `System.Single` | *y1* | The y-coordinate of the ending point of the line |
| `Meadow.Color` | *color* | The color of the line |

### DrawTriangleAntialiased(int, int, int, int, int, int, Color, bool)
Draw an anti-aliased triangle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.Antialiasing.cs#L103)
```csharp title="Declaration"
public void DrawTriangleAntialiased(int x0, int y0, int x1, int y1, int x2, int y2, Color color, bool filled = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x0* | Vertex #0 x coordinate |
| `System.Int32` | *y0* | Vertex #0 y coordinate |
| `System.Int32` | *x1* | Vertex #1 x coordinate |
| `System.Int32` | *y1* | Vertex #1 y coordinate |
| `System.Int32` | *x2* | Vertex #2 x coordinate |
| `System.Int32` | *y2* | Vertex #2 y coordinate |
| `Meadow.Color` | *color* | The color of the triangle |
| `System.Boolean` | *filled* | Draw a filled triangle? |

### SaveState()
Save any state variables
Includes: CurrentFont, Stroke, and Rotation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.Canvas.cs#L43)
```csharp title="Declaration"
public void SaveState()
```
### RestoreState()
Restore saved state variables and apply them to the MicroGraphics instance 
Includes: CurrentFont, Stroke, and Rotation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.Canvas.cs#L57)
```csharp title="Declaration"
public void RestoreState()
```
### DrawPixel(int, int, Color)
Draw a single pixel using the pen color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L194)
```csharp title="Declaration"
public virtual void DrawPixel(int x, int y, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x location |
| `System.Int32` | *y* | y location |
| `Meadow.Color` | *color* | Color of pixel |

### DrawPixel(int, int, bool)
Draw a single pixel
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L217)
```csharp title="Declaration"
public void DrawPixel(int x, int y, bool enabled)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x location |
| `System.Int32` | *y* | y location |
| `System.Boolean` | *enabled* | Turn the pixel on (true) or off (false) |

### DrawPixel(int, int)
Draw a single pixel
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L227)
```csharp title="Declaration"
public virtual void DrawPixel(int x, int y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x location |
| `System.Int32` | *y* | y location |

### DrawPixel(int)
Draw a single pixel using the pen color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L236)
```csharp title="Declaration"
public virtual void DrawPixel(int index)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *index* | pixel location in buffer |

### InvertPixel(int, int)
Invert the color of the pixel at the given location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L251)
```csharp title="Declaration"
public void InvertPixel(int x, int y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x location |
| `System.Int32` | *y* | y location |

### InvertRectangle(int, int, int, int)
Invert all pixels within a rectangle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L268)
```csharp title="Declaration"
public virtual void InvertRectangle(int x, int y, int width, int height)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x start |
| `System.Int32` | *y* | y start |
| `System.Int32` | *width* | width of area to invert |
| `System.Int32` | *height* | height of area to invert |

### DrawLine(int, int, int, int, bool)
Draw a line using Bresenhams line drawing algorithm
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L287)
```csharp title="Declaration"
public void DrawLine(int x0, int y0, int x1, int y1, bool enabled)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x0* | Abscissa of the starting point of the line |
| `System.Int32` | *y0* | Ordinate of the starting point of the line |
| `System.Int32` | *x1* | Abscissa of the end point of the line |
| `System.Int32` | *y1* | Ordinate of the end point of the line |
| `System.Boolean` | *enabled* | Turn the pixel on (true) or off (false) |

### DrawLine(int, int, int, float, bool)
Draw a line using polar coordinates
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L300)
```csharp title="Declaration"
public void DrawLine(int x, int y, int length, float angle, bool enabled)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | Abscissa of the starting point of the line |
| `System.Int32` | *y* | Ordinate of the starting point of the line |
| `System.Int32` | *length* | Length of line |
| `System.Single` | *angle* | Angle in radians |
| `System.Boolean` | *enabled* | Turn the pixel on (true) or off (false) |

### DrawLine(int, int, int, int)
Draw a line using Bresenhams line drawing algorithm
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L316)
```csharp title="Declaration"
public void DrawLine(int x0, int y0, int x1, int y1)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x0* | Abscissa of the starting point of the line |
| `System.Int32` | *y0* | Ordinate of the starting point of the line |
| `System.Int32` | *x1* | Abscissa of the end point of the line |
| `System.Int32` | *y1* | Ordinate of the end point of the line |

### DrawLine(int, int, int, float, Color)
Draw a line from a point to a position defined by a radius and an angle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L413)
```csharp title="Declaration"
public void DrawLine(int x, int y, int length, float angle, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* |  |
| `System.Int32` | *y* | Ordinate of the starting point of the line |
| `System.Int32` | *length* | length of line |
| `System.Single` | *angle* | angle to draw line in radians |
| `Meadow.Color` | *color* | The color of the line |

### DrawLine(int, int, int, int, Color)
Draw a line using Bresenhams line drawing algorithm
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L433)
```csharp title="Declaration"
public void DrawLine(int x0, int y0, int x1, int y1, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x0* | Abscissa of the starting point of the line |
| `System.Int32` | *y0* | Ordinate of the starting point of the line |
| `System.Int32` | *x1* | Abscissa of the end point of the line |
| `System.Int32` | *y1* | Ordinate of the end point of the line |
| `Meadow.Color` | *color* | Color of the line to be drawn |

### DrawHorizontalLine(int, int, int, bool)
Draw a horizontal line.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L495)
```csharp title="Declaration"
public void DrawHorizontalLine(int x, int y, int length, bool enabled)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | Abscissa of the starting point of the line |
| `System.Int32` | *y* | Ordinate of the starting point of the line |
| `System.Int32` | *length* | Length of the line to draw |
| `System.Boolean` | *enabled* | Turn the pixel on (true) or off (false) |

### DrawHorizontalLine(int, int, int)
Draw a horizontal line
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L506)
```csharp title="Declaration"
public void DrawHorizontalLine(int x, int y, int length)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | Abscissa of the starting point of the line |
| `System.Int32` | *y* | Ordinate of the starting point of the line |
| `System.Int32` | *length* | Length of the line to draw |

### DrawHorizontalLine(int, int, int, Color)
Draw a horizontal line
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L518)
```csharp title="Declaration"
public void DrawHorizontalLine(int x, int y, int length, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | Abscissa of the starting point of the line |
| `System.Int32` | *y* | Ordinate of the starting point of the line |
| `System.Int32` | *length* | Length of the line to draw |
| `Meadow.Color` | *color* | The color of the line |

### DrawVerticalLine(int, int, int, bool)
Draw a vertical line.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L560)
```csharp title="Declaration"
public void DrawVerticalLine(int x, int y, int length, bool enabled)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | Abscissa of the starting point of the line |
| `System.Int32` | *y* | Ordinate of the starting point of the line |
| `System.Int32` | *length* | Length of the line to draw |
| `System.Boolean` | *enabled* | Show the line when (true) or off (false) |

### DrawVerticalLine(int, int, int)
Draw a vertical line
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L571)
```csharp title="Declaration"
public void DrawVerticalLine(int x, int y, int length)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | Abscissa of the starting point of the line |
| `System.Int32` | *y* | Ordinate of the starting point of the line |
| `System.Int32` | *length* | Length of the line to draw |

### DrawVerticalLine(int, int, int, Color)
Draw a vertical line
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L593)
```csharp title="Declaration"
public void DrawVerticalLine(int x, int y, int length, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | Abscissa of the starting point of the line |
| `System.Int32` | *y* | Ordinate of the starting point of the line |
| `System.Int32` | *length* | Length of the line to draw |
| `Meadow.Color` | *color* | The color of the line |

### DrawArc(int, int, int, Angle, Angle, Color, bool)
Draw a circular arc between two angles
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L641)
```csharp title="Declaration"
public void DrawArc(int centerX, int centerY, int radius, Angle startAngle, Angle endAngle, Color color, bool centerBetweenPixels = true)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *centerX* | Abscissa of the center point of the circle |
| `System.Int32` | *centerY* | Ordinate of the center point of the circle |
| `System.Int32` | *radius* | Radius of the circle |
| `Meadow.Units.Angle` | *startAngle* | The arc starting angle |
| `Meadow.Units.Angle` | *endAngle* | The arc ending angle |
| `Meadow.Color` | *color* | The color of the circle |
| `System.Boolean` | *centerBetweenPixels* | If true, the center of the arc is between the assigned pixel and the next pixel, false it's directly on the center pixel |

### DrawArc(int, int, int, Angle, Angle, bool, bool)
Draw a circular arc between two angles
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L715)
```csharp title="Declaration"
public void DrawArc(int centerX, int centerY, int radius, Angle startAngle, Angle endAngle, bool enabled = true, bool centerBetweenPixels = true)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *centerX* | Abscissa of the center point of the circle |
| `System.Int32` | *centerY* | Ordinate of the center point of the circle |
| `System.Int32` | *radius* | Radius of the circle |
| `Meadow.Units.Angle` | *startAngle* | The arc starting angle |
| `Meadow.Units.Angle` | *endAngle* | The arc ending angle |
| `System.Boolean` | *enabled* | Should draw the arc (true) or remove (false) |
| `System.Boolean` | *centerBetweenPixels* | If true, the center of the arc is between the assigned pixel and the next pixel, false it's directly on the center pixel |

### DrawArc(int, int, int, Angle, Angle, bool)
Draw a circular arc between two angles using PenColor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L732)
```csharp title="Declaration"
public void DrawArc(int centerX, int centerY, int radius, Angle startAngle, Angle endAngle, bool centerBetweenPixels = true)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *centerX* | Abscissa of the center point of the circle |
| `System.Int32` | *centerY* | Ordinate of the center point of the circle |
| `System.Int32` | *radius* | Radius of the circle |
| `Meadow.Units.Angle` | *startAngle* | The arc starting angle |
| `Meadow.Units.Angle` | *endAngle* | The arc ending angle |
| `System.Boolean` | *centerBetweenPixels* | If true, the center of the arc is between the assigned pixel and the next pixel, false it's directly on the center pixel |

### DrawTriangle(int, int, int, int, int, int, Color, bool)
Draw a  triangle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L748)
```csharp title="Declaration"
public void DrawTriangle(int x0, int y0, int x1, int y1, int x2, int y2, Color color, bool filled = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x0* | Vertex #0 x coordinate |
| `System.Int32` | *y0* | Vertex #0 y coordinate |
| `System.Int32` | *x1* | Vertex #1 x coordinate |
| `System.Int32` | *y1* | Vertex #1 y coordinate |
| `System.Int32` | *x2* | Vertex #2 x coordinate |
| `System.Int32` | *y2* | Vertex #2 y coordinate |
| `Meadow.Color` | *color* | Color of triangle |
| `System.Boolean` | *filled* | Draw a filled triangle? |

### DrawTriangle(int, int, int, int, int, int, bool, bool)
Draw a triangle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L776)
```csharp title="Declaration"
public void DrawTriangle(int x0, int y0, int x1, int y1, int x2, int y2, bool enabled = true, bool filled = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x0* | Vertex #0 x coordinate |
| `System.Int32` | *y0* | Vertex #0 y coordinate |
| `System.Int32` | *x1* | Vertex #1 x coordinate |
| `System.Int32` | *y1* | Vertex #1 y coordinate |
| `System.Int32` | *x2* | Vertex #2 x coordinate |
| `System.Int32` | *y2* | Vertex #2 y coordinate |
| `System.Boolean` | *enabled* | Should the triangle add (true) or remove (false) |
| `System.Boolean` | *filled* | Draw a filled triangle? |

### DrawTriangle(int, int, int, int, int, int, bool)
Draw a triangle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L794)
```csharp title="Declaration"
public void DrawTriangle(int x0, int y0, int x1, int y1, int x2, int y2, bool filled = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x0* | Vertex #0 x coordinate |
| `System.Int32` | *y0* | Vertex #0 y coordinate |
| `System.Int32` | *x1* | Vertex #1 x coordinate |
| `System.Int32` | *y1* | Vertex #1 y coordinate |
| `System.Int32` | *x2* | Vertex #2 x coordinate |
| `System.Int32` | *y2* | Vertex #2 y coordinate |
| `System.Boolean` | *filled* | Draw a filled triangle? |

### DrawCircle(int, int, int, bool, bool, bool)
Draw a circle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L899)
```csharp title="Declaration"
public void DrawCircle(int centerX, int centerY, int radius, bool enabled, bool filled = false, bool centerBetweenPixels = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *centerX* | Abscissa of the center point of the circle |
| `System.Int32` | *centerY* | Ordinate of the center point of the circle |
| `System.Int32` | *radius* | Radius of the circle |
| `System.Boolean` | *enabled* | Show the circle when true |
| `System.Boolean` | *filled* | Draw a filled circle? |
| `System.Boolean` | *centerBetweenPixels* | Set center between pixels |

### DrawCircle(int, int, int, Color, bool, bool)
Draw a circle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L918)
```csharp title="Declaration"
public void DrawCircle(int centerX, int centerY, int radius, Color color, bool filled = false, bool centerBetweenPixels = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *centerX* | Abscissa of the center point of the circle |
| `System.Int32` | *centerY* | Ordinate of the center point of the circle |
| `System.Int32` | *radius* | Radius of the circle |
| `Meadow.Color` | *color* | The color of the circle |
| `System.Boolean` | *filled* | Draw a filled circle |
| `System.Boolean` | *centerBetweenPixels* | If true, the center of the circle is between the assigned pixel and the next pixel, false it's directly on the center pixel |

### DrawCircle(int, int, int, bool, bool)
Draw a circle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L955)
```csharp title="Declaration"
public void DrawCircle(int centerX, int centerY, int radius, bool filled = false, bool centerBetweenPixels = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *centerX* | Abscissa of the center point of the circle |
| `System.Int32` | *centerY* | Ordinate of the center point of the circle |
| `System.Int32` | *radius* | Radius of the circle |
| `System.Boolean` | *filled* | Draw a filled circle? |
| `System.Boolean` | *centerBetweenPixels* | If true, the center of the circle is between the assigned pixel and the next pixel, false it's directly on the center pixel |

### DrawCircleQuadrant(int, int, int, int, bool, bool, bool)
Draws a circle quadrant (quarter circle)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L970)
```csharp title="Declaration"
public void DrawCircleQuadrant(int centerX, int centerY, int radius, int quadrant, bool enabled = true, bool filled = false, bool centerBetweenPixels = false)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *centerX* |
| `System.Int32` | *centerY* |
| `System.Int32` | *radius* |
| `System.Int32` | *quadrant* |
| `System.Boolean` | *enabled* |
| `System.Boolean` | *filled* |
| `System.Boolean` | *centerBetweenPixels* |

### DrawCircleQuadrant(int, int, int, int, bool, bool)
Draws a circle quadrant (quarter circle)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L984)
```csharp title="Declaration"
public void DrawCircleQuadrant(int centerX, int centerY, int radius, int quadrant, bool filled = false, bool centerBetweenPixels = false)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *centerX* |
| `System.Int32` | *centerY* |
| `System.Int32` | *radius* |
| `System.Int32` | *quadrant* |
| `System.Boolean` | *filled* |
| `System.Boolean` | *centerBetweenPixels* |

### DrawCircleQuadrant(int, int, int, int, Color, bool, bool)
Draws a circle quadrant (quarter circle)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L999)
```csharp title="Declaration"
public void DrawCircleQuadrant(int centerX, int centerY, int radius, int quadrant, Color color, bool filled = false, bool centerBetweenPixels = false)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *centerX* |
| `System.Int32` | *centerY* |
| `System.Int32` | *radius* |
| `System.Int32` | *quadrant* |
| `Meadow.Color` | *color* |
| `System.Boolean` | *filled* |
| `System.Boolean` | *centerBetweenPixels* |

### DrawRectangle(int, int, int, int, bool, bool)
Draw a rectangle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1187)
```csharp title="Declaration"
public void DrawRectangle(int x, int y, int width, int height, bool enabled, bool filled = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | Abscissa of the top left corner |
| `System.Int32` | *y* | Ordinate of the top left corner |
| `System.Int32` | *width* | Width of the rectangle |
| `System.Int32` | *height* | Height of the rectangle |
| `System.Boolean` | *enabled* | Turn pixels on (true) or turn pixels off (false) |
| `System.Boolean` | *filled* | Fill the rectangle (true) or draw the outline (false, default) |

### DrawRectangle(Rect, bool)
Draw a rectangle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1197)
```csharp title="Declaration"
public void DrawRectangle(Rect rectangle, bool filled = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.Rect](../Meadow.Foundation.Graphics/Rect) | *rectangle* | Rectangle to draw |
| `System.Boolean` | *filled* | Fill the rectangle (true) or draw the outline (false, default) |

### DrawRectangle(int, int, int, int, bool)
Draw a rectangle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1211)
```csharp title="Declaration"
public void DrawRectangle(int x, int y, int width, int height, bool filled = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | Abscissa of the top left corner |
| `System.Int32` | *y* | Ordinate of the top left corner |
| `System.Int32` | *width* | Width of the rectangle |
| `System.Int32` | *height* | Height of the rectangle |
| `System.Boolean` | *filled* | Fill the rectangle (true) or draw the outline (false, default) |

### DrawRectangle(Rect, Color, bool)
Draw a rectangle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1222)
```csharp title="Declaration"
public void DrawRectangle(Rect rectangle, Color color, bool filled = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.Rect](../Meadow.Foundation.Graphics/Rect) | *rectangle* | Rectangle to draw |
| `Meadow.Color` | *color* | The color of the rectangle |
| `System.Boolean` | *filled* | Fill the rectangle (true) or draw the outline (false, default) |

### DrawRectangle(int, int, int, int, Color, bool)
Draw a rectangle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1237)
```csharp title="Declaration"
public void DrawRectangle(int x, int y, int width, int height, Color color, bool filled = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | Abscissa of the top left corner |
| `System.Int32` | *y* | Ordinate of the top left corner |
| `System.Int32` | *width* | Width of the rectangle |
| `System.Int32` | *height* | Height of the rectangle |
| `Meadow.Color` | *color* | The color of the rectangle |
| `System.Boolean` | *filled* | Fill the rectangle (true) or draw the outline (false, default) |

### DrawHorizontalGradient(int, int, int, int, Color, Color)
Draw a horizontal gradient filled rectangle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1276)
```csharp title="Declaration"
public void DrawHorizontalGradient(int x, int y, int width, int height, Color colorLeft, Color colorRight)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | Abscissa of the top left corner |
| `System.Int32` | *y* | Ordinate of the top left corner |
| `System.Int32` | *width* | Width of the rectangle |
| `System.Int32` | *height* | Height of the rectangle |
| `Meadow.Color` | *colorLeft* | The start (left) color of the gradient |
| `Meadow.Color` | *colorRight* | The end (right) color of the gradient |

### DrawVerticalGradient(int, int, int, int, Color, Color)
Draw a vertical gradient filled rectangle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1294)
```csharp title="Declaration"
public void DrawVerticalGradient(int x, int y, int width, int height, Color colorTop, Color colorBottom)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | Abscissa of the top left corner |
| `System.Int32` | *y* | Ordinate of the top left corner |
| `System.Int32` | *width* | Width of the rectangle |
| `System.Int32` | *height* | Height of the rectangle |
| `Meadow.Color` | *colorTop* | The start (top) color of the gradient |
| `Meadow.Color` | *colorBottom* | The end (bottom) color of the gradient |

### DrawRoundedRectangle(int, int, int, int, int, bool, bool)
Draw a rounded rectangle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1313)
```csharp title="Declaration"
public void DrawRoundedRectangle(int x, int y, int width, int height, int cornerRadius, bool enabled, bool filled = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | Abscissa of the top left corner |
| `System.Int32` | *y* | Ordinate of the top left corner |
| `System.Int32` | *width* | Width of the rectangle |
| `System.Int32` | *height* | Height of the rectangle |
| `System.Int32` | *cornerRadius* | Radius of the corners of the rectangle |
| `System.Boolean` | *enabled* | Turn pixels on (true) or turn pixels off (false) |
| `System.Boolean` | *filled* | Fill the rectangle (true) or draw the outline (false, default) |

### DrawRoundedRectangle(int, int, int, int, int, bool)
Draw a rounded rectangle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1327)
```csharp title="Declaration"
public void DrawRoundedRectangle(int x, int y, int width, int height, int cornerRadius, bool filled = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | Abscissa of the top left corner |
| `System.Int32` | *y* | Ordinate of the top left corner |
| `System.Int32` | *width* | Width of the rectangle |
| `System.Int32` | *height* | Height of the rectangle |
| `System.Int32` | *cornerRadius* | Radius of the corners of the rectangle |
| `System.Boolean` | *filled* | Fill the rectangle (true) or draw the outline (false, default) |

### DrawRoundedRectangle(int, int, int, int, int, Color, bool)
Draw a rounded rectangle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1342)
```csharp title="Declaration"
public void DrawRoundedRectangle(int x, int y, int width, int height, int cornerRadius, Color color, bool filled = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | Abscissa of the top left corner |
| `System.Int32` | *y* | Ordinate of the top left corner |
| `System.Int32` | *width* | Width of the rectangle |
| `System.Int32` | *height* | Height of the rectangle |
| `System.Int32` | *cornerRadius* | Radius of the corners of the rectangle |
| `Meadow.Color` | *color* | The color of the rectangle |
| `System.Boolean` | *filled* | Fill the rectangle (true) or draw the outline (false, default) |

### MeasureText(string, ScaleFactor)
Get the size in pixels of a string using the current font
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1386)
```csharp title="Declaration"
public Size MeasureText(string text, ScaleFactor scaleFactor = ScaleFactor.X1)
```

##### Returns

[Meadow.Foundation.Graphics.Size](../Meadow.Foundation.Graphics/Size)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *text* | The string to measure |
| [Meadow.Foundation.Graphics.ScaleFactor](../Meadow.Foundation.Graphics/ScaleFactor) | *scaleFactor* | Scale factor used to calculate the size |

### MeasureText(string, IFont, ScaleFactor)
Get the size in pixels of a string for a given font and scale factor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1397)
```csharp title="Declaration"
public Size MeasureText(string text, IFont font, ScaleFactor scaleFactor = ScaleFactor.X1)
```

##### Returns

[Meadow.Foundation.Graphics.Size](../Meadow.Foundation.Graphics/Size)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *text* | The string to measure |
| [Meadow.Foundation.Graphics.IFont](../Meadow.Foundation.Graphics/IFont) | *font* | The font used to calculate the text size |
| [Meadow.Foundation.Graphics.ScaleFactor](../Meadow.Foundation.Graphics/ScaleFactor) | *scaleFactor* | Scale factor used to calculate the size |

### DrawText(int, int, string, Color, ScaleFactor, HorizontalAlignment, VerticalAlignment, IFont?)
Draw a text message on the display using the current font.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1413)
```csharp title="Declaration"
public void DrawText(int x, int y, string text, Color color, ScaleFactor scaleFactor = ScaleFactor.X1, HorizontalAlignment alignmentH = HorizontalAlignment.Left, VerticalAlignment alignmentV = VerticalAlignment.Top, IFont? font = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | Abscissa of the location of the text |
| `System.Int32` | *y* | Ordinate of the location of the text |
| `System.String` | *text* | Text to display |
| `Meadow.Color` | *color* | Color of the text |
| [Meadow.Foundation.Graphics.ScaleFactor](../Meadow.Foundation.Graphics/ScaleFactor) | *scaleFactor* | Scale factor used to calculate the size |
| [Meadow.Foundation.Graphics.HorizontalAlignment](../Meadow.Foundation.Graphics/HorizontalAlignment) | *alignmentH* | Horizontal alignment: Left, Center or right aligned text |
| [Meadow.Foundation.Graphics.VerticalAlignment](../Meadow.Foundation.Graphics/VerticalAlignment) | *alignmentV* | Vertical alignment: Top, Center or bottom aligned text |
| [Meadow.Foundation.Graphics.IFont](../Meadow.Foundation.Graphics/IFont) | *font* | Optional font used to draw the text |

### DrawBuffer(int, int, IPixelBuffer, HorizontalAlignment, VerticalAlignment)
Draw a buffer onto the display buffer at the given location
For best performance, source buffer should be the same color depth as the target display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1440)
```csharp title="Declaration"
public void DrawBuffer(int x, int y, IPixelBuffer buffer, HorizontalAlignment alignmentH = HorizontalAlignment.Left, VerticalAlignment alignmentV = VerticalAlignment.Top)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x location of target to draw buffer |
| `System.Int32` | *y* | y location of target to draw buffer |
| `Meadow.Peripherals.Displays.IPixelBuffer` | *buffer* | the source buffer to write to the display buffer |
| [Meadow.Foundation.Graphics.HorizontalAlignment](../Meadow.Foundation.Graphics/HorizontalAlignment) | *alignmentH* | Horizontal alignment: Left, Center or right align the buffer to the x location |
| [Meadow.Foundation.Graphics.VerticalAlignment](../Meadow.Foundation.Graphics/VerticalAlignment) | *alignmentV* | Vertical alignment: Top, Center or bottom align the buffer to the y location |

### DrawBuffer(int, int, IPixelBuffer)
Draw a buffer onto the display buffer at the given location
For best performance, source buffer should be the same color depth as the target display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1457)
```csharp title="Declaration"
public void DrawBuffer(int x, int y, IPixelBuffer buffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x location of target to draw buffer |
| `System.Int32` | *y* | y location of target to draw buffer |
| `Meadow.Peripherals.Displays.IPixelBuffer` | *buffer* | the source buffer to write to the display buffer |

### DrawBufferWithTransparencyColor(int, int, IPixelBuffer, Color)
Draw a buffer onto the display buffer at the given location
with a transparency color that will not be drawn
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1524)
```csharp title="Declaration"
public void DrawBufferWithTransparencyColor(int x, int y, IPixelBuffer buffer, Color transparencyColor)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x location of target to draw buffer |
| `System.Int32` | *y* | y location of target to draw buffer |
| `Meadow.Peripherals.Displays.IPixelBuffer` | *buffer* | the source buffer to write to the display buffer |
| `Meadow.Color` | *transparencyColor* | the color to ignore when drawing the buffer |

### GetPixel(int, int)
Get the color for a pixel at a given location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1577)
```csharp title="Declaration"
public virtual Color GetPixel(int x, int y)
```

##### Returns

`Meadow.Color`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x location |
| `System.Int32` | *y* | y location |

### DrawPixelWithAlpha(float, float, Color)
Draws a pixel with alpha blending at the specified coordinates using the given color and it's alpha value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1600)
```csharp title="Declaration"
public void DrawPixelWithAlpha(float x, float y, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *x* | The x-coordinate of the pixel |
| `System.Single` | *y* | The y-coordinate of the pixel |
| `Meadow.Color` | *color* | The color to draw |

### DrawPixelWithAlpha(float, float, Color, float)
Draws a pixel with alpha blending at the specified coordinates using the given color an external alpha value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1615)
```csharp title="Declaration"
public void DrawPixelWithAlpha(float x, float y, Color color, float alpha)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *x* | The x-coordinate of the pixel |
| `System.Single` | *y* | The y-coordinate of the pixel |
| `Meadow.Color` | *color* | The color to draw |
| `System.Single` | *alpha* | The alpha value |

### DrawImage(int, int, Image, HorizontalAlignment, VerticalAlignment)
Draw an Image onto the display buffer at the specified location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1629)
```csharp title="Declaration"
public void DrawImage(int x, int y, Image image, HorizontalAlignment alignmentH = HorizontalAlignment.Left, VerticalAlignment alignmentV = VerticalAlignment.Top)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x location of target to draw buffer |
| `System.Int32` | *y* | x location of target to draw buffer |
| [Meadow.Foundation.Graphics.Image](../Meadow.Foundation.Graphics/Image) | *image* | the source image to write to the display buffer |
| [Meadow.Foundation.Graphics.HorizontalAlignment](../Meadow.Foundation.Graphics/HorizontalAlignment) | *alignmentH* | Horizontal alignment: Left, Center or right align the image to the x location |
| [Meadow.Foundation.Graphics.VerticalAlignment](../Meadow.Foundation.Graphics/VerticalAlignment) | *alignmentV* | Vertical alignment: Top, Center or bottom align the image to the y location |

### DrawImage(int, int, Image)
Draw an Image onto the display buffer at the specified location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1649)
```csharp title="Declaration"
public void DrawImage(int x, int y, Image image)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x location of target to draw buffer |
| `System.Int32` | *y* | x location of target to draw buffer |
| [Meadow.Foundation.Graphics.Image](../Meadow.Foundation.Graphics/Image) | *image* | the source image to write to the display buffer |

### DrawImage(Image)
Draw an Image onto the display buffer at (0, 0)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1656)
```csharp title="Declaration"
public void DrawImage(Image image)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.Image](../Meadow.Foundation.Graphics/Image) | *image* | the source image to write to the display buffer |

### DrawText(int, int, string, ScaleFactor, HorizontalAlignment, VerticalAlignment)
Draw a text message on the display using the current font
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1668)
```csharp title="Declaration"
public void DrawText(int x, int y, string text, ScaleFactor scaleFactor = ScaleFactor.X1, HorizontalAlignment alignmentH = HorizontalAlignment.Left, VerticalAlignment alignmentV = VerticalAlignment.Top)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | Abscissa of the location of the text |
| `System.Int32` | *y* | Ordinate of the location of the text |
| `System.String` | *text* | Text to display |
| [Meadow.Foundation.Graphics.ScaleFactor](../Meadow.Foundation.Graphics/ScaleFactor) | *scaleFactor* | Scale factor used to calculate the size |
| [Meadow.Foundation.Graphics.HorizontalAlignment](../Meadow.Foundation.Graphics/HorizontalAlignment) | *alignmentH* | Horizontal alignment: Left, Center or right aligned text |
| [Meadow.Foundation.Graphics.VerticalAlignment](../Meadow.Foundation.Graphics/VerticalAlignment) | *alignmentV* | Vertical alignment: Top, Center or bottom aligned text |

### Show()
Update the display target from the buffer (thread safe)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1814)
```csharp title="Declaration"
public virtual void Show()
```
### ShowBuffered()
Update the display target from the buffer (thread safe) while respecting MinimumTimeBetweenUpdates
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1834)
```csharp title="Declaration"
public virtual Task ShowBuffered()
```

##### Returns

`System.Threading.Tasks.Task`
### ShowUnsafe()
Update the display target from the buffer (not thread safe)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1870)
```csharp title="Declaration"
public virtual void ShowUnsafe()
```
### ShowUnsafe(int, int, int, int)
Update a region of the display
Note: not all displays support partial updates
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1879)
```csharp title="Declaration"
public virtual void ShowUnsafe(int left, int top, int right, int bottom)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *left* |
| `System.Int32` | *top* |
| `System.Int32` | *right* |
| `System.Int32` | *bottom* |

### Show(int, int, int, int)
Update a region of the the display target from the buffer (thread safe)
Note: not all displays support partial updates
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1892)
```csharp title="Declaration"
public virtual void Show(int left, int top, int right, int bottom)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *left* | The left coordinate of the display area to update |
| `System.Int32` | *top* | The top coordinate of the display area to update |
| `System.Int32` | *right* | The right coordinate of the display area to update |
| `System.Int32` | *bottom* | The bottom coordinate of the display area to update |

### Show(Rect)
Update a region of the display
Note: not all displays support partial updates
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1928)
```csharp title="Declaration"
public virtual void Show(Rect rect)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Foundation.Graphics.Rect](../Meadow.Foundation.Graphics/Rect) | *rect* |

### Clear(bool)
Clear the pixel buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1937)
```csharp title="Declaration"
public virtual void Clear(bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *updateDisplay* | Update the display immediately when true |

### Clear(int, int, int, int, bool)
Clear a region of the display pixel buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1962)
```csharp title="Declaration"
public virtual void Clear(int originX, int originY, int width, int height, bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *originX* | The X coord to start |
| `System.Int32` | *originY* | The Y coord to start |
| `System.Int32` | *width* | The width of the region to clear |
| `System.Int32` | *height* | The height of the region to clear |
| `System.Boolean` | *updateDisplay* | Update the display immediately when true |

### Clear(Color, bool)
Clear the pixel buffer to a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1977)
```csharp title="Declaration"
public virtual void Clear(Color color, bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *color* | Color to set display |
| `System.Boolean` | *updateDisplay* | Update the display immediately when true |

### DrawBitmap(int, int, int, int, byte[], Color, ScaleFactor)
Writes a 1-bit bitmap stored in a byte array
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1994)
```csharp title="Declaration"
protected void DrawBitmap(int x, int y, int width, int height, byte[] bitmap, Color color, ScaleFactor scaleFactor = ScaleFactor.X1)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | Abscissa of the top left corner of the bitmap |
| `System.Int32` | *y* | Ordinate of the top left corner of the bitmap |
| `System.Int32` | *width* | Width of the bitmap in pixels |
| `System.Int32` | *height* | Height of the bitmap in pixels |
| `System.Byte[]` | *bitmap* | Bitmap to display |
| `Meadow.Color` | *color* | The color of the bitmap |
| [Meadow.Foundation.Graphics.ScaleFactor](../Meadow.Foundation.Graphics/ScaleFactor) | *scaleFactor* | The integer scale factor (default is 1) |

### DrawBitmap(int, int, int, int, byte[], ScaleFactor)
Writes a 1-bit bitmap to the buffer - used for font rendering
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L2044)
```csharp title="Declaration"
protected void DrawBitmap(int x, int y, int width, int height, byte[] bitmap, ScaleFactor scaleFactor = ScaleFactor.X1)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | Abscissa of the top left corner of the bitmap |
| `System.Int32` | *y* | Ordinate of the top left corner of the bitmap |
| `System.Int32` | *width* | Width of the bitmap in pixels |
| `System.Int32` | *height* | Height of the bitmap in pixels |
| `System.Byte[]` | *bitmap* | Bitmap to display |
| [Meadow.Foundation.Graphics.ScaleFactor](../Meadow.Foundation.Graphics/ScaleFactor) | *scaleFactor* | The integer scale factor (default is 1) |

### GetXForRotation(int, int)
Get x pixel position for the current graphics rotation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L2055)
```csharp title="Declaration"
protected int GetXForRotation(int x, int y)
```

##### Returns

`System.Int32`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The non-rotated x position |
| `System.Int32` | *y* | The non-rotated y position |

### GetYForRotation(int, int)
Get y pixel position for the current graphics rotation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L2074)
```csharp title="Declaration"
protected int GetYForRotation(int x, int y)
```

##### Returns

`System.Int32`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The non-rotated x position |
| `System.Int32` | *y* | The non-rotated y position |

### DrawPath(GraphicsPath, bool, bool)
Draw a graphics path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.GraphicsPath.cs#L14)
```csharp title="Declaration"
public void DrawPath(GraphicsPath path, bool enabled, bool filled = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.GraphicsPath](../Meadow.Foundation.Graphics/GraphicsPath) | *path* | The path |
| `System.Boolean` | *enabled* | Should pixels be enabled (on) or disabled (off) |
| `System.Boolean` | *filled* | Fill the path (true) or draw the outline (false, default) |

### DrawPath(GraphicsPath, bool)
Draw a graphics path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.GraphicsPath.cs#L24)
```csharp title="Declaration"
public void DrawPath(GraphicsPath path, bool filled = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.GraphicsPath](../Meadow.Foundation.Graphics/GraphicsPath) | *path* | The path |
| `System.Boolean` | *filled* | Fill the path (true) or draw the outline (false, default) |

### DrawPath(GraphicsPath, Color, bool)
Draw a graphics path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.GraphicsPath.cs#L35)
```csharp title="Declaration"
public void DrawPath(GraphicsPath path, Color color, bool filled = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.GraphicsPath](../Meadow.Foundation.Graphics/GraphicsPath) | *path* | The path |
| `Meadow.Color` | *color* | The color to draw the path |
| `System.Boolean` | *filled* | Fill the path (true) or draw the outline (false, default) |

### FillPath(GraphicsPath, Color)
Draw a filled graphics path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.GraphicsPath.cs#L63)
```csharp title="Declaration"
protected void FillPath(GraphicsPath path, Color fillColor)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.GraphicsPath](../Meadow.Foundation.Graphics/GraphicsPath) | *path* | The path |
| `Meadow.Color` | *fillColor* | The color to fill the path |

### Write(string)
Write text to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.TextDisplay.cs#L13)
```csharp title="Declaration"
public void Write(string text)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *text* | The text |


##### Exceptions

`System.Exception`  
Throws if no font is set
### WriteLine(string, byte, bool)
Write a line of text in White
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.TextDisplay.cs#L33)
```csharp title="Declaration"
public void WriteLine(string text, byte lineNumber, bool showCursor = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *text* | The text |
| `System.Byte` | *lineNumber* | The line to write |
| `System.Boolean` | *showCursor* | True to show the cursor |


##### Exceptions

`System.Exception`  
Throws if no font is set
### WriteLine(string, byte, Color, bool)
Write a line of text
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.TextDisplay.cs#L46)
```csharp title="Declaration"
public void WriteLine(string text, byte lineNumber, Color textColor, bool showCursor = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *text* | The text |
| `System.Byte` | *lineNumber* | The line to write |
| `Meadow.Color` | *textColor* | Optional color to use for drawing the text |
| `System.Boolean` | *showCursor* | True to show the cursor |


##### Exceptions

`System.Exception`  
Throws if no font is set
### ClearLines()
Clear all lines of text
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.TextDisplay.cs#L74)
```csharp title="Declaration"
public void ClearLines()
```
### ClearLine(byte)
Clear a single line of text
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.TextDisplay.cs#L83)
```csharp title="Declaration"
public void ClearLine(byte lineNumber)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *lineNumber* | The line to clear |

### SetCursorPosition(byte, byte)
Set the cursor position relative to the text
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.TextDisplay.cs#L106)
```csharp title="Declaration"
public void SetCursorPosition(byte column, byte line)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *column* | The text column |
| `System.Byte` | *line* | The line column |


## Implements

* `Meadow.Peripherals.Displays.ITextDisplay`
* `Meadow.Peripherals.Displays.IDisplay`
