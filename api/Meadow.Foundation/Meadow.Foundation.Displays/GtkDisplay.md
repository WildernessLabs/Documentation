---
title: Class GtkDisplay
sidebar_label: GtkDisplay
description: "Represents a GTK graphics display"
---
# Class GtkDisplay
Represents a GTK graphics display

###### **Assembly**: Gtk.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L13)
```csharp title="Declaration"
public class GtkDisplay : IGraphicsDisplay, ITouchScreen
```
**Implements:**  
[Meadow.Foundation.Graphics.IGraphicsDisplay](../Meadow.Foundation.Graphics/IGraphicsDisplay), `Meadow.Hardware.ITouchScreen`

## Properties
### PixelBuffer
Provide a buffer that matches this display's color depth, height, and width
This should be the buffer that is sent to the device when Show is called
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L38)
```csharp title="Declaration"
public IPixelBuffer PixelBuffer { get; }
```
### ColorMode
Current color mode of display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L43)
```csharp title="Declaration"
public ColorMode ColorMode { get; }
```
### Width
Width of the display, in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L48)
```csharp title="Declaration"
public int Width { get; }
```
### Height
Height of the display, in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L52)
```csharp title="Declaration"
public int Height { get; }
```
### SupportedColorModes
The color modes supported by the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L57)
```csharp title="Declaration"
public ColorMode SupportedColorModes { get; }
```
## Methods
### Run()
Run the application
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L156)
```csharp title="Declaration"
public void Run()
```
### Show()
Performs a full display update
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L180)
```csharp title="Declaration"
public void Show()
```
### Show(int, int, int, int)
Partial screen update
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L193)
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

### Clear(bool)
Clears the display buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L203)
```csharp title="Declaration"
public void Clear(bool updateDisplay = false)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *updateDisplay* |

### Fill(Color, bool)
Fills the entire display with a given color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L214)
```csharp title="Declaration"
public void Fill(Color fillColor, bool updateDisplay = false)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Color` | *fillColor* |
| `System.Boolean` | *updateDisplay* |

### Fill(int, int, int, int, Color)
Fills a region with a given color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L228)
```csharp title="Declaration"
public void Fill(int x, int y, int width, int height, Color fillColor)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *x* |
| `System.Int32` | *y* |
| `System.Int32` | *width* |
| `System.Int32` | *height* |
| `Meadow.Color` | *fillColor* |

### DrawPixel(int, int, Color)
Fills a pixel with a given color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L240)
```csharp title="Declaration"
public void DrawPixel(int x, int y, Color color)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *x* |
| `System.Int32` | *y* |
| `Meadow.Color` | *color* |

### DrawPixel(int, int, bool)
Fills a pixel with either black or white
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L252)
```csharp title="Declaration"
public void DrawPixel(int x, int y, bool colored)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *x* |
| `System.Int32` | *y* |
| `System.Boolean` | *colored* |

### InvertPixel(int, int)
Inverts the pixel at the given location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L263)
```csharp title="Declaration"
public void InvertPixel(int x, int y)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *x* |
| `System.Int32` | *y* |

### WriteBuffer(int, int, IPixelBuffer)
Draws to the pixel buffer at a specified location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L275)
```csharp title="Declaration"
public void WriteBuffer(int x, int y, IPixelBuffer displayBuffer)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *x* |
| `System.Int32` | *y* |
| [Meadow.Foundation.Graphics.Buffers.IPixelBuffer](../Meadow.Foundation.Graphics.Buffers/IPixelBuffer) | *displayBuffer* |

## Events
### TouchDown
Event fired when the display gets a mouse down
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L18)
```csharp title="Declaration"
public event TouchEventHandler TouchDown
```
##### Event Type
`Meadow.Hardware.TouchEventHandler`
### TouchUp
Event fired when the display gets a mouse up
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L22)
```csharp title="Declaration"
public event TouchEventHandler TouchUp
```
##### Event Type
`Meadow.Hardware.TouchEventHandler`
### TouchClick
Event fired when the display gets a mouse click
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L26)
```csharp title="Declaration"
public event TouchEventHandler TouchClick
```
##### Event Type
`Meadow.Hardware.TouchEventHandler`

## Implements

* [Meadow.Foundation.Graphics.IGraphicsDisplay](../Meadow.Foundation.Graphics/IGraphicsDisplay)
* `Meadow.Hardware.ITouchScreen`
