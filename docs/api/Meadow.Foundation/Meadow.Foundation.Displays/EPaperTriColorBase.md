---
title: Class EPaperTriColorBase
sidebar_label: EPaperTriColorBase
description: Provide an interface for ePaper 3 color displays
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays/EPaperTriColorBase
---
# Class EPaperTriColorBase
Provide an interface for ePaper 3 color displays

###### **Assembly**: EPaper.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperTriColorBase.cs#L11)
```csharp title="Declaration"
public abstract class EPaperTriColorBase : EPaperBase, ISpiPeripheral, IDisposable, IPixelDisplay, IDisplay
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Displays.EPaperBase](../Meadow.Foundation.Displays/EPaperBase)

**Derived:**  
[Meadow.Foundation.Displays.Epd4in2bV2](../Meadow.Foundation.Displays/Epd4in2bV2), [Meadow.Foundation.Displays.Il0373](../Meadow.Foundation.Displays/Il0373), [Meadow.Foundation.Displays.Il0376F](../Meadow.Foundation.Displays/Il0376F), [Meadow.Foundation.Displays.Il0398](../Meadow.Foundation.Displays/Il0398), [Meadow.Foundation.Displays.Il91874](../Meadow.Foundation.Displays/Il91874), [Meadow.Foundation.Displays.Ssd1680](../Meadow.Foundation.Displays/Ssd1680), [Meadow.Foundation.Displays.Ssd1681](../Meadow.Foundation.Displays/Ssd1681), [Meadow.Foundation.Displays.Uc8151c](../Meadow.Foundation.Displays/Uc8151c)

**Implements:**  
`Meadow.Hardware.ISpiPeripheral`, `System.IDisposable`, `Meadow.Peripherals.Displays.IPixelDisplay`, `Meadow.Peripherals.Displays.IDisplay`

## Properties
### EnabledColor
The color to draw when a pixel is enabled
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperTriColorBase.cs#L16)
```csharp title="Declaration"
public Color EnabledColor { get; }
```
### DisabledColor
The color to draw when a pixel is disabled
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperTriColorBase.cs#L21)
```csharp title="Declaration"
public Color DisabledColor { get; }
```
### IsBlackInverted
Is the black pixel data inverted
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperTriColorBase.cs#L26)
```csharp title="Declaration"
protected abstract bool IsBlackInverted { get; }
```
### IsColorInverted
Is the color pixel data inverted
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperTriColorBase.cs#L31)
```csharp title="Declaration"
protected abstract bool IsColorInverted { get; }
```
### ColorMode
The currently set color mode for the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperTriColorBase.cs#L34)
```csharp title="Declaration"
public ColorMode ColorMode { get; }
```
### SupportedColorModes
The Color mode supported by the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperTriColorBase.cs#L37)
```csharp title="Declaration"
public ColorMode SupportedColorModes { get; }
```
### Width
Width of the display in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperTriColorBase.cs#L46)
```csharp title="Declaration"
public virtual int Width { get; }
```
### Height
Height of the display in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperTriColorBase.cs#L49)
```csharp title="Declaration"
public virtual int Height { get; }
```
### PixelBuffer
The pixel buffer - not directly accessible
Use buffer.LightBuffer and buffer.DarkBuffer to access byte arrays
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperTriColorBase.cs#L55)
```csharp title="Declaration"
public IPixelBuffer PixelBuffer { get; }
```
## Fields
### imageBuffer
The buffer the holds the black pixel data for the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperTriColorBase.cs#L43)
```csharp title="Declaration"
protected Buffer2bppColorEPaper imageBuffer
```
## Methods
### CreateBuffer(int, int)
Create an offscreen buffer for the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperTriColorBase.cs#L118)
```csharp title="Declaration"
protected virtual void CreateBuffer(int width, int height)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *width* | The width in pixels |
| `System.Int32` | *height* | The height in pixels |

### Initialize()
Initialize the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperTriColorBase.cs#L126)
```csharp title="Declaration"
protected abstract void Initialize()
```
### Clear(bool)
Clear the display buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperTriColorBase.cs#L132)
```csharp title="Declaration"
public void Clear(bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *updateDisplay* | Update the display if true |

### Fill(Color, bool)
Fill the display buffer with a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperTriColorBase.cs#L142)
```csharp title="Declaration"
public void Fill(Color color, bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *color* | The color - normalized to black, white or color |
| `System.Boolean` | *updateDisplay* | Refresh the display if true |

### Fill(int, int, int, int, Color)
Fill a region of the display buffer with a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperTriColorBase.cs#L159)
```csharp title="Declaration"
public void Fill(int x, int y, int width, int height, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x location |
| `System.Int32` | *y* | The y location |
| `System.Int32` | *width* | The width to fill in pixels |
| `System.Int32` | *height* | The height to fill in pixels |
| `Meadow.Color` | *color* | The color to fill - normalized to black, white or color |

### Clear(bool, bool)
Clear the display buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperTriColorBase.cs#L169)
```csharp title="Declaration"
public void Clear(bool enabled, bool updateDisplay = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *enabled* | If true, fill with the enabled color (default is white) |
| `System.Boolean` | *updateDisplay* | If true, refresh the display |

### DrawPixel(int, int, bool)
Draw a pixel
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperTriColorBase.cs#L185)
```csharp title="Declaration"
public void DrawPixel(int x, int y, bool enabled)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x location in pixels |
| `System.Int32` | *y* | The y location in pixels |
| `System.Boolean` | *enabled* | If true, use the enabled color (default is white) |

### DrawBlackPixel(int, int, bool)
Draw a black pixel
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperTriColorBase.cs#L193)
```csharp title="Declaration"
public void DrawBlackPixel(int x, int y, bool enabled)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x location in pixels |
| `System.Int32` | *y* | The y location in pixels |
| `System.Boolean` | *enabled* | If true, use the enabled color (default is white) |

### InvertPixel(int, int)
Invert a pixel
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperTriColorBase.cs#L205)
```csharp title="Declaration"
public void InvertPixel(int x, int y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x location in pixels |
| `System.Int32` | *y* | The y location in pixels |

### DrawColoredPixel(int, int, bool)
Set a colored pixel (on or off)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperTriColorBase.cs#L216)
```csharp title="Declaration"
public void DrawColoredPixel(int x, int y, bool isOn)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x pixel location |
| `System.Int32` | *y* | The y pixel location |
| `System.Boolean` | *isOn* | True for on, false for off |

### DrawPixel(int, int, Color)
Draw a pixel
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperTriColorBase.cs#L227)
```csharp title="Declaration"
public void DrawPixel(int x, int y, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x pixel location |
| `System.Int32` | *y* | The y pixel location |
| `Meadow.Color` | *color* | The pixel color |

### WriteBuffer(int, int, IPixelBuffer)
Write a buffer to the display buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperTriColorBase.cs#L238)
```csharp title="Declaration"
public void WriteBuffer(int x, int y, IPixelBuffer displayBuffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x position in pixels to write the buffer |
| `System.Int32` | *y* | The y position in pixels to write the buffer |
| `Meadow.Peripherals.Displays.IPixelBuffer` | *displayBuffer* | The buffer to write |

### SendCommand(Command)
Send a command to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperTriColorBase.cs#L247)
```csharp title="Declaration"
protected void SendCommand(EPaperTriColorBase.Command command)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Displays.EPaperTriColorBase.Command](../Meadow.Foundation.Displays/EPaperTriColorBase.Command) | *command* | The command |

### Show()
Update the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperTriColorBase.cs#L256)
```csharp title="Declaration"
public virtual void Show()
```

##### Exceptions

`System.NotImplementedException`  

### Show(int, int, int, int)
Update a region of the display from the offscreen buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/EPaperTriColorBase.cs#L268)
```csharp title="Declaration"
public virtual void Show(int left, int top, int right, int bottom)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *left* | Left bounds in pixels |
| `System.Int32` | *top* | Top bounds in pixels |
| `System.Int32` | *right* | Right bounds in pixels |
| `System.Int32` | *bottom* | Bottom bounds in pixels |


## Implements

* `Meadow.Hardware.ISpiPeripheral`
* `System.IDisposable`
* `Meadow.Peripherals.Displays.IPixelDisplay`
* `Meadow.Peripherals.Displays.IDisplay`
