---
title: Class PixelBufferBase
sidebar_label: PixelBufferBase
description: "Represents a pixel buffer"
---
# Class PixelBufferBase
Represents a pixel buffer

###### **Assembly**: MicroGraphics.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/PixelBufferBase.cs#L9)
```csharp title="Declaration"
public abstract class PixelBufferBase : IPixelBuffer, IDisposable
```
**Derived:**  

<details><summary>Expand</summary>

[Meadow.Foundation.Graphics.Buffers.Buffer1bpp](../Meadow.Foundation.Graphics.Buffers/Buffer1bpp), [Meadow.Foundation.Graphics.Buffers.BufferGray4](../Meadow.Foundation.Graphics.Buffers/BufferGray4), [Meadow.Foundation.Graphics.Buffers.BufferGray8](../Meadow.Foundation.Graphics.Buffers/BufferGray8), [Meadow.Foundation.Graphics.Buffers.BufferIndexed4](../Meadow.Foundation.Graphics.Buffers/BufferIndexed4), [Meadow.Foundation.Graphics.Buffers.BufferRgb332](../Meadow.Foundation.Graphics.Buffers/BufferRgb332), [Meadow.Foundation.Graphics.Buffers.BufferRgb444](../Meadow.Foundation.Graphics.Buffers/BufferRgb444), [Meadow.Foundation.Graphics.Buffers.BufferRgb565](../Meadow.Foundation.Graphics.Buffers/BufferRgb565), [Meadow.Foundation.Graphics.Buffers.BufferRgb888](../Meadow.Foundation.Graphics.Buffers/BufferRgb888), [Meadow.Foundation.Graphics.Buffers.BufferRgba8888](../Meadow.Foundation.Graphics.Buffers/BufferRgba8888)
</details>



**Implements:**  
[Meadow.Foundation.Graphics.Buffers.IPixelBuffer](../Meadow.Foundation.Graphics.Buffers/IPixelBuffer), `System.IDisposable`

## Properties
### Width
Width of buffer in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/PixelBufferBase.cs#L14)
```csharp title="Declaration"
public int Width { get; protected set; }
```
### Height
Height of buffer in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/PixelBufferBase.cs#L19)
```csharp title="Declaration"
public int Height { get; protected set; }
```
### ColorMode
Color mode of the buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/PixelBufferBase.cs#L24)
```csharp title="Declaration"
public virtual ColorMode ColorMode { get; protected set; }
```
### BitDepth
Bit depth of display as an integer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/PixelBufferBase.cs#L29)
```csharp title="Declaration"
public int BitDepth { get; }
```
### ByteCount
Number of bytes in buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/PixelBufferBase.cs#L56)
```csharp title="Declaration"
public int ByteCount { get; }
```
### Buffer
The buffer that holds the pixel data
The packing structure in buffer-specific
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/PixelBufferBase.cs#L62)
```csharp title="Declaration"
public byte[] Buffer { get; protected set; }
```
## Methods
### InitializeBuffer(bool)
Initialize the pixel buffer based on the current
width, height and color depth
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/PixelBufferBase.cs#L115)
```csharp title="Declaration"
public void InitializeBuffer(bool replaceIfExists = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *replaceIfExists* | If true, will recreates the buffer if it already exists |

### Clear()
Clear the array that stores the pixel buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/PixelBufferBase.cs#L126)
```csharp title="Declaration"
public virtual void Clear()
```
### Fill(Color)
Fill the entire pixel buffer with a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/PixelBufferBase.cs#L138)
```csharp title="Declaration"
public abstract void Fill(Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *color* | Fill color |

### Fill(int, int, int, int, Color)
Fill a region of the pixel buffer with a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/PixelBufferBase.cs#L148)
```csharp title="Declaration"
public abstract void Fill(int originX, int originY, int width, int height, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *originX* | X pixel to start fill |
| `System.Int32` | *originY* | Y pixel to start fill |
| `System.Int32` | *width* | Width to fill |
| `System.Int32` | *height* | height to fill |
| `Meadow.Color` | *color* | Fill color |

### GetPixel(int, int)
Get pixel at location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/PixelBufferBase.cs#L156)
```csharp title="Declaration"
public abstract Color GetPixel(int x, int y)
```

##### Returns

`Meadow.Color`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | X pixel location |
| `System.Int32` | *y* | Y pixel location |

### SetPixel(int, int, Color)
Set pixel at location to a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/PixelBufferBase.cs#L164)
```csharp title="Declaration"
public abstract void SetPixel(int x, int y, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | X pixel location |
| `System.Int32` | *y* | Y pixel location |
| `Meadow.Color` | *color* | Pixel color |

### InvertPixel(int, int)
Invert pixel color at location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/PixelBufferBase.cs#L171)
```csharp title="Declaration"
public abstract void InvertPixel(int x, int y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | X pixel location |
| `System.Int32` | *y* | Y pixel location |

### WriteBuffer(int, int, IPixelBuffer)
Default way to write a buffer into this buffer.

This is very slow and should be avoided if possible.
It loops through every pixel. If the buffer bit depths match
there should be faster ways to write using Array.Copy.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/PixelBufferBase.cs#L183)
```csharp title="Declaration"
public virtual void WriteBuffer(int originX, int originY, IPixelBuffer buffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *originX* | The X coord to start writing |
| `System.Int32` | *originY* | The Y coord to start writing |
| [Meadow.Foundation.Graphics.Buffers.IPixelBuffer](../Meadow.Foundation.Graphics.Buffers/IPixelBuffer) | *buffer* | The buffer to copy into this buffer |

### WriteBufferSlow(int, int, IPixelBuffer)
A slow buffer write operation that writes pixel-by-pixel using
the Color struct to scale color based on bit depth.

This method can handle buffers with mismatched bit depths.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/PixelBufferBase.cs#L197)
```csharp title="Declaration"
protected void WriteBufferSlow(int originX, int originY, IPixelBuffer buffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *originX* | The X coord to start writing the buffer |
| `System.Int32` | *originY* | The Y coord to start writing the buffer |
| [Meadow.Foundation.Graphics.Buffers.IPixelBuffer](../Meadow.Foundation.Graphics.Buffers/IPixelBuffer) | *buffer* | The buffer to write |

### RotateAndConvert&lt;T&gt;(RotationType)
Create a new buffer from the existing buffer with a new rotation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/PixelBufferBase.cs#L214)
```csharp title="Declaration"
public T RotateAndConvert<T>(RotationType rotation) where T : PixelBufferBase, new()
```

##### Returns

`<T>`: The new buffer
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.RotationType](../Meadow.Foundation.Graphics/RotationType) | *rotation* | Rotation |

##### Type Parameters
| Name | Description |
|:--- |:--- |
| `T` | Buffer type |
### ScaleUp&lt;T&gt;(int)
Create a new buffer scaled up from the existing buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/PixelBufferBase.cs#L263)
```csharp title="Declaration"
public T ScaleUp<T>(int scaleFactor) where T : PixelBufferBase, new()
```

##### Returns

`<T>`: The new buffer
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *scaleFactor* | Integer scale ratio |

##### Type Parameters
| Name | Description |
|:--- |:--- |
| `T` | Buffer type |
### ConvertPixelBuffer&lt;T&gt;()
Create a new pixel buffer and 
copy/convert pixel data from existing buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/PixelBufferBase.cs#L290)
```csharp title="Declaration"
public T ConvertPixelBuffer<T>() where T : PixelBufferBase, new()
```

##### Returns

`<T>`: A pixel buffer derived from PixelBufferBase##### Type Parameters
| Name | Description |
|:--- |:--- |
| `T` | The buffer type to convert to |
### GetColorDistance(Color, Color)
Calculate the uncorrected distance between two colors using bytes for red, green, blue
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/PixelBufferBase.cs#L340)
```csharp title="Declaration"
public double GetColorDistance(Color color1, Color color2)
```

##### Returns

`System.Double`: The distance as a double
##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Color` | *color1* |
| `Meadow.Color` | *color2* |

### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/PixelBufferBase.cs#L353)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/PixelBufferBase.cs#L369)
```csharp title="Declaration"
public void Dispose()
```

## Implements

* [Meadow.Foundation.Graphics.Buffers.IPixelBuffer](../Meadow.Foundation.Graphics.Buffers/IPixelBuffer)
* `System.IDisposable`
