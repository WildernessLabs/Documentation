---
title: Class Buffer1bpp
sidebar_label: Buffer1bpp
description: "Represents a 1bpp pixel buffer with horizontal pixel packing
1 byte represents 8 pixels on the x-axis"
---
# Class Buffer1bpp
Represents a 1bpp pixel buffer with horizontal pixel packing
1 byte represents 8 pixels on the x-axis

###### **Assembly**: MicroGraphics.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/Buffer1bpp.cs#L9)
```csharp title="Declaration"
public class Buffer1bpp : PixelBufferBase, IPixelBuffer, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Graphics.Buffers.PixelBufferBase](../Meadow.Foundation.Graphics.Buffers/PixelBufferBase)

**Derived:**  
[Meadow.Foundation.Graphics.Buffers.Buffer1bppV](../Meadow.Foundation.Graphics.Buffers/Buffer1bppV)

**Implements:**  
[Meadow.Foundation.Graphics.Buffers.IPixelBuffer](../Meadow.Foundation.Graphics.Buffers/IPixelBuffer), `System.IDisposable`

## Properties
### ColorMode
Color mode of the buffer - 1 bit per pixel
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/Buffer1bpp.cs#L14)
```csharp title="Declaration"
public override ColorMode ColorMode { get; }
```
## Methods
### GetPixelIsEnabled(int, int)
Is the pixel on / enabled for a given location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/Buffer1bpp.cs#L65)
```csharp title="Declaration"
public virtual bool GetPixelIsEnabled(int x, int y)
```

##### Returns

`System.Boolean`: true if pixel is set / enabled
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x location in pixels |
| `System.Int32` | *y* | y location in pixels |

### GetPixel(int, int)
Get the pixel color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/Buffer1bpp.cs#L78)
```csharp title="Declaration"
public override Color GetPixel(int x, int y)
```

##### Returns

`Meadow.Color`: The pixel color as a Color object - will be black or white only
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x location of pixel |
| `System.Int32` | *y* | y location of pixel |

### SetPixel(int, int, bool)
Set a pixel in the display buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/Buffer1bpp.cs#L89)
```csharp title="Declaration"
public virtual void SetPixel(int x, int y, bool enabled)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x position in pixels from left |
| `System.Int32` | *y* | y position in pixels from top |
| `System.Boolean` | *enabled* | is pixel enabled (on) |

### SetPixel(int, int, Color)
Set a pixel in the display buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/Buffer1bpp.cs#L104)
```csharp title="Declaration"
public override void SetPixel(int x, int y, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x position in pixels from left |
| `System.Int32` | *y* | y position in pixels from top |
| `Meadow.Color` | *color* | the color of the pixel - will snap to black or white (on/off) |

### Fill(Color)
Fill the buffer with a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/Buffer1bpp.cs#L113)
```csharp title="Declaration"
public override void Fill(Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *color* | the fill color - will snap to black or white (on/off) |

### Fill(int, int, int, int, Color)
Fill the buffer with a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/Buffer1bpp.cs#L127)
```csharp title="Declaration"
public override void Fill(int x, int y, int width, int height, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x position in pixels |
| `System.Int32` | *y* | The y position in pixels |
| `System.Int32` | *width* | Width to fill in pixels |
| `System.Int32` | *height* | Height to fill in pixels |
| `Meadow.Color` | *color* | The color to fill |


##### Exceptions

`System.ArgumentOutOfRangeException`  
Throws an exception if the fill region is outside of the buffer
### Clear(bool)
Clear the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/Buffer1bpp.cs#L159)
```csharp title="Declaration"
public void Clear(bool enabled)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *enabled* | should the display pixels be enabled / on or clear / off |

### InvertPixel(int, int)
Invert a pixel
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/Buffer1bpp.cs#L180)
```csharp title="Declaration"
public override void InvertPixel(int x, int y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x position of pixel |
| `System.Int32` | *y* | y position of pixel |

### WriteBuffer(int, int, IPixelBuffer)
Write a buffer to specific location to the current buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/Buffer1bpp.cs#L193)
```csharp title="Declaration"
public override void WriteBuffer(int x, int y, IPixelBuffer buffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x origin |
| `System.Int32` | *y* | y origin |
| [Meadow.Foundation.Graphics.Buffers.IPixelBuffer](../Meadow.Foundation.Graphics.Buffers/IPixelBuffer) | *buffer* | buffer to write |


## Implements

* [Meadow.Foundation.Graphics.Buffers.IPixelBuffer](../Meadow.Foundation.Graphics.Buffers/IPixelBuffer)
* `System.IDisposable`
