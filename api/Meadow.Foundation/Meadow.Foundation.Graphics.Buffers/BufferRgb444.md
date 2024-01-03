---
title: Class BufferRgb444
sidebar_label: BufferRgb444
description: "Represents a 12bpp color pixel buffer"
---
# Class BufferRgb444
Represents a 12bpp color pixel buffer

###### **Assembly**: MicroGraphics.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferRgb444.cs#L8)
```csharp title="Declaration"
public class BufferRgb444 : PixelBufferBase, IPixelBuffer, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Graphics.Buffers.PixelBufferBase](../Meadow.Foundation.Graphics.Buffers/PixelBufferBase)

**Implements:**  
[Meadow.Foundation.Graphics.Buffers.IPixelBuffer](../Meadow.Foundation.Graphics.Buffers/IPixelBuffer), `System.IDisposable`

## Properties
### ColorMode
Color mode of the buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferRgb444.cs#L13)
```csharp title="Declaration"
public override ColorMode ColorMode { get; }
```
## Methods
### GetPixel12bpp(int, int)
Get the pixel color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferRgb444.cs#L41)
```csharp title="Declaration"
public ushort GetPixel12bpp(int x, int y)
```

##### Returns

`System.UInt16`: The pixel color as a 12bpp value
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The X pixel position |
| `System.Int32` | *y* | The Y pixel position |

### GetPixel(int, int)
Get the pixel color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferRgb444.cs#L70)
```csharp title="Declaration"
public override Color GetPixel(int x, int y)
```

##### Returns

`Meadow.Color`: The pixel color
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The X pixel position |
| `System.Int32` | *y* | The Y pixel position |

### SetPixel(int, int, Color)
Set the pixel color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferRgb444.cs#L103)
```csharp title="Declaration"
public override void SetPixel(int x, int y, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | X pixel position |
| `System.Int32` | *y* | Y pixel position |
| `Meadow.Color` | *color* | The pixel color |

### SetPixel(int, int, ushort)
Set the pixel color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferRgb444.cs#L114)
```csharp title="Declaration"
public void SetPixel(int x, int y, ushort color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | X pixel position |
| `System.Int32` | *y* | Y pixel position |
| `System.UInt16` | *color* | The pixel color packed as a 12 bpp ushort |

### Fill(Color)
Fill buffer with a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferRgb444.cs#L141)
```csharp title="Declaration"
public override void Fill(Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *color* | The fill color |

### Fill(int, int, int, int, Color)
Fill with a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferRgb444.cs#L168)
```csharp title="Declaration"
public override void Fill(int x, int y, int width, int height, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | X start position in pixels |
| `System.Int32` | *y* | Y start position in pixels |
| `System.Int32` | *width* | Width in pixels |
| `System.Int32` | *height* | Height in pixels |
| `Meadow.Color` | *color* | The fill color |


##### Exceptions

`System.ArgumentOutOfRangeException`  
Throws an exception if fill area is beyond the buffer bounds
### InvertPixel(int, int)
Invert the pixel
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferRgb444.cs#L193)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferRgb444.cs#L229)
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
