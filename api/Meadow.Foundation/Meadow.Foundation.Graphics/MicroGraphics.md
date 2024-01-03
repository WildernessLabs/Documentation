---
title: Class MicroGraphics
sidebar_label: MicroGraphics
description: "Provide high level graphics functions"
---
# Class MicroGraphics
Provide high level graphics functions

###### **Assembly**: MicroGraphics.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.TextDisplay.cs#L6)
```csharp title="Declaration"
public class MicroGraphics : ITextDisplay
```
**Implements:**  
`Meadow.Peripherals.Displays.ITextDisplay`

## Properties
### PixelBuffer
PixelBuffer draw target
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L22)
```csharp title="Declaration"
protected IPixelBuffer PixelBuffer { get; }
```
### EnabledColor
The color used when a pixel is enabled (on)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L33)
```csharp title="Declaration"
public Color EnabledColor { get; }
```
### DisabledColor
The color used when a pixel is not enabled (off)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L38)
```csharp title="Declaration"
public Color DisabledColor { get; }
```
### CurrentFont
Font used for drawing text to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L43)
```csharp title="Declaration"
public IFont CurrentFont { get; set; }
```
### ColorMode
Current color mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L65)
```csharp title="Declaration"
public ColorMode ColorMode { get; }
```
### Rotation
Current rotation used for drawing pixels to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L70)
```csharp title="Declaration"
public RotationType Rotation { get; set; }
```
### Stroke
Stroke / line thickness when drawing lines or shape outlines
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L89)
```csharp title="Declaration"
public int Stroke { get; set; }
```
### PenColor
Current pen color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L94)
```csharp title="Declaration"
public Color PenColor { get; set; }
```
### Height
Return the height of the display after accounting for the rotation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L99)
```csharp title="Declaration"
public int Height { get; }
```
### Width
Return the width of the display after accounting for the rotation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L114)
```csharp title="Declaration"
public int Width { get; }
```
### DisplayConfig
Text display configuration for use with text display menu
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L129)
```csharp title="Declaration"
public TextDisplayConfig DisplayConfig { get; }
```
### DelayBetweenFrames
Optional enforced delay between updates when calling ShowBuffered
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L134)
```csharp title="Declaration"
public TimeSpan DelayBetweenFrames { get; set; }
```
### CursorColumn
The current cursor column relative to text/font
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.TextDisplay.cs#L81)
```csharp title="Declaration"
public byte CursorColumn { get; }
```
### CursorLine
The current cursor line relative to the text
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.TextDisplay.cs#L86)
```csharp title="Declaration"
public byte CursorLine { get; }
```
## Fields
### canvasState
The current canvas state
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.Canvas.cs#L36)
```csharp title="Declaration"
protected MicroGraphics.CanvasState? canvasState
```
### display
Display object responsible for managing the buffer and rendering
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L17)
```csharp title="Declaration"
protected readonly IGraphicsDisplay? display
```
### IgnoreOutOfBoundsPixels
ignore pixels that are outside of the pixel buffer coordinate space
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L28)
```csharp title="Declaration"
public bool IgnoreOutOfBoundsPixels
```
## Methods
### SaveState()
Save any state variables
Includes: CurrentFont, Stroke, and Rotation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.Canvas.cs#L42)
```csharp title="Declaration"
public void SaveState()
```
### RestoreState()
Restore saved state variables and apply them to the MicroGraphics instance 
Includes: CurrentFont, Stroke, and Rotation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.Canvas.cs#L56)
```csharp title="Declaration"
public void RestoreState()
```
### DrawPixel(int, int, Color)
Draw a single pixel using the pen color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L175)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L198)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L208)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L217)
```csharp title="Declaration"
public virtual void DrawPixel(int index)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *index* | pixel location in buffer |

### InvertPixel(int, int)
Invert the color of the pixel at the given location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L232)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L249)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L268)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L281)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L297)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L315)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L335)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L413)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L424)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L436)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L468)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L479)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L505)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L538)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L612)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L629)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L645)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L673)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L691)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L796)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L815)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L852)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L867)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L881)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L896)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1084)
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

### DrawRectangle(int, int, int, int, bool)
Draw a rectangle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1097)
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

### DrawRectangle(int, int, int, int, Color, bool)
Draw a rectangle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1111)
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

### DrawRoundedRectangle(int, int, int, int, int, bool, bool)
Draw a rounded rectangle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1151)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1165)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1180)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1224)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1235)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1251)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1278)
```csharp title="Declaration"
public void DrawBuffer(int x, int y, IPixelBuffer buffer, HorizontalAlignment alignmentH = HorizontalAlignment.Left, VerticalAlignment alignmentV = VerticalAlignment.Top)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x location of target to draw buffer |
| `System.Int32` | *y* | x location of target to draw buffer |
| [Meadow.Foundation.Graphics.Buffers.IPixelBuffer](../Meadow.Foundation.Graphics.Buffers/IPixelBuffer) | *buffer* | the source buffer to write to the display buffer |
| [Meadow.Foundation.Graphics.HorizontalAlignment](../Meadow.Foundation.Graphics/HorizontalAlignment) | *alignmentH* | Horizontal alignment: Left, Center or right align the buffer to the x location |
| [Meadow.Foundation.Graphics.VerticalAlignment](../Meadow.Foundation.Graphics/VerticalAlignment) | *alignmentV* | Vertical alignment: Top, Center or bottom align the buffer to the y location |

### DrawBuffer(int, int, IPixelBuffer)
Draw a buffer onto the display buffer at the given location
For best performance, source buffer should be the same color depth as the target display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1295)
```csharp title="Declaration"
public void DrawBuffer(int x, int y, IPixelBuffer buffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x location of target to draw buffer |
| `System.Int32` | *y* | x location of target to draw buffer |
| [Meadow.Foundation.Graphics.Buffers.IPixelBuffer](../Meadow.Foundation.Graphics.Buffers/IPixelBuffer) | *buffer* | the source buffer to write to the display buffer |

### DrawImage(int, int, Image, HorizontalAlignment, VerticalAlignment)
Draw an Image onto the display buffer at the specified location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1362)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1382)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1389)
```csharp title="Declaration"
public void DrawImage(Image image)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.Image](../Meadow.Foundation.Graphics/Image) | *image* | the source image to write to the display buffer |

### DrawText(int, int, string, ScaleFactor, HorizontalAlignment, VerticalAlignment)
Draw a text message on the display using the current font
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1401)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1541)
```csharp title="Declaration"
public virtual void Show()
```
### ShowBuffered()
Update the display target from the buffer (thread safe) while respecting MinimumTimeBetweenUpdates
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1561)
```csharp title="Declaration"
public virtual Task ShowBuffered()
```

##### Returns

`System.Threading.Tasks.Task`
### ShowUnsafe()
Update the display target from the buffer (not thread safe)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1597)
```csharp title="Declaration"
public virtual void ShowUnsafe()
```
### ShowUnsafe(int, int, int, int)
Update a region of the display
Note: not all displays support partial updates
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1606)
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
Update a region of the display
Note: not all displays support partial updates
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1615)
```csharp title="Declaration"
public virtual void Show(int left, int top, int right, int bottom)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *left* |
| `System.Int32` | *top* |
| `System.Int32` | *right* |
| `System.Int32` | *bottom* |

### Show(Rect)
Update a region of the display
Note: not all displays support partial updates
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1636)
```csharp title="Declaration"
public virtual void Show(Rect rect)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Foundation.Graphics.Rect](../Meadow.Foundation.Graphics/Rect) | *rect* |

### Clear(bool)
Clear the pixel buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1645)
```csharp title="Declaration"
public virtual void Clear(bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *updateDisplay* | Update the display immediately when true |

### Clear(int, int, int, int, bool)
Clear a region of the display pixel buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1670)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1685)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1702)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1752)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1763)
```csharp title="Declaration"
public int GetXForRotation(int x, int y)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.cs#L1782)
```csharp title="Declaration"
public int GetYForRotation(int x, int y)
```

##### Returns

`System.Int32`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The non-rotated x position |
| `System.Int32` | *y* | The non-rotated y position |

### DrawPath(GraphicsPath, bool)
Draw a graphics path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.GraphicsPath.cs#L10)
```csharp title="Declaration"
public void DrawPath(GraphicsPath path, bool enabled)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.GraphicsPath](../Meadow.Foundation.Graphics/GraphicsPath) | *path* | The path |
| `System.Boolean` | *enabled* | Should pixels be enabled (on) or disabled (off) |

### DrawPath(GraphicsPath)
Draw a graphics path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.GraphicsPath.cs#L19)
```csharp title="Declaration"
public void DrawPath(GraphicsPath path)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.GraphicsPath](../Meadow.Foundation.Graphics/GraphicsPath) | *path* | The path |

### DrawPath(GraphicsPath, Color)
Draw a graphics path
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.GraphicsPath.cs#L29)
```csharp title="Declaration"
public void DrawPath(GraphicsPath path, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.GraphicsPath](../Meadow.Foundation.Graphics/GraphicsPath) | *path* | The path |
| `Meadow.Color` | *color* | The color to draw the path |

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
Write a line of text
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
### ClearLines()
Clear all lines of text
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.TextDisplay.cs#L61)
```csharp title="Declaration"
public void ClearLines()
```
### ClearLine(byte)
Clear a single line of text
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.TextDisplay.cs#L70)
```csharp title="Declaration"
public void ClearLine(byte lineNumber)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *lineNumber* | The line to clear |

### SetCursorPosition(byte, byte)
Set the cursor position relative to the text
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.TextDisplay.cs#L93)
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
