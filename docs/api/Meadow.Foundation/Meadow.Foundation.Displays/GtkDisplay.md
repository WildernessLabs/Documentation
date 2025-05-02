---
title: Class GtkDisplay
sidebar_label: GtkDisplay
description: Represents a GTK graphics display
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays/GtkDisplay
---
# Class GtkDisplay
Represents a GTK graphics display

###### **Assembly**: Gtk.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L13)
```csharp title="Declaration"
public class GtkDisplay : IResizablePixelDisplay, IPixelDisplay, IDisplay, ITouchScreen
```
**Implements:**  
`Meadow.Peripherals.Displays.IResizablePixelDisplay`, `Meadow.Peripherals.Displays.IPixelDisplay`, `Meadow.Peripherals.Displays.IDisplay`, `Meadow.Hardware.ITouchScreen`

## Properties
### Rotation
Gets the current rotation of the touchscreen
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L34)
```csharp title="Declaration"
public RotationType Rotation { get; }
```
### PixelBuffer
Provide a buffer that matches this display's color depth, height, and width
This should be the buffer that is sent to the device when Show is called
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L37)
```csharp title="Declaration"
public IPixelBuffer PixelBuffer { get; }
```
### ColorMode
The currently set color mode for the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L40)
```csharp title="Declaration"
public ColorMode ColorMode { get; }
```
### Width
Width of the display in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L43)
```csharp title="Declaration"
public int Width { get; }
```
### Height
Height of the display in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L46)
```csharp title="Declaration"
public int Height { get; }
```
### SupportedColorModes
The Color mode supported by the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L49)
```csharp title="Declaration"
public ColorMode SupportedColorModes { get; }
```
### IsTouched
Returns &lt;b&gt;true&lt;/b&gt; if the touchscreen is currently being touched, otherwise &lt;b&gt;false&lt;/b&gt;
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L52)
```csharp title="Declaration"
public bool IsTouched { get; }
```
## Methods
### Resize(int, int, float)
Rsizes the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L80)
```csharp title="Declaration"
public void Resize(int width, int height, float displayScale = 1)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *width* | The new display width |
| `System.Int32` | *height* | The new display height |
| `System.Single` | *displayScale* | The new display height |

### Run()
Run the application
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L159)
```csharp title="Declaration"
public void Run()
```
### Show()
Performs a full display update
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L183)
```csharp title="Declaration"
public void Show()
```
### Show(int, int, int, int)
Partial screen update
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L196)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L206)
```csharp title="Declaration"
public void Clear(bool updateDisplay = false)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *updateDisplay* |

### Fill(Color, bool)
Fills the entire display with a given color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L217)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L231)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L243)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L255)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L266)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L278)
```csharp title="Declaration"
public void WriteBuffer(int x, int y, IPixelBuffer displayBuffer)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *x* |
| `System.Int32` | *y* |
| `Meadow.Peripherals.Displays.IPixelBuffer` | *displayBuffer* |

## Events
### TouchDown
Event raised when the touchscreen is pressed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L16)
```csharp title="Declaration"
public event TouchEventHandler TouchDown
```
##### Event Type
`Meadow.Hardware.TouchEventHandler`
### TouchUp
Event raised when the touchscreen is released
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L18)
```csharp title="Declaration"
public event TouchEventHandler TouchUp
```
##### Event Type
`Meadow.Hardware.TouchEventHandler`
### TouchClick
Event raised when a cycle of press and release has occurred
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L20)
```csharp title="Declaration"
public event TouchEventHandler TouchClick
```
##### Event Type
`Meadow.Hardware.TouchEventHandler`
### TouchMoved
Event raised when a cycle of press and release has occurred
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Gtk/Driver/Gtk.cs#L22)
```csharp title="Declaration"
public event TouchEventHandler TouchMoved
```
##### Event Type
`Meadow.Hardware.TouchEventHandler`

## Implements

* `Meadow.Peripherals.Displays.IResizablePixelDisplay`
* `Meadow.Peripherals.Displays.IPixelDisplay`
* `Meadow.Peripherals.Displays.IDisplay`
* `Meadow.Hardware.ITouchScreen`
