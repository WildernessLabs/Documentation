---
title: Class BufferIndexed4
sidebar_label: BufferIndexed4
description: >-
  Represents a 4bpp pixel buffer with indexed colors Each pixel is represented
  by 4 bits, allowing for 8 distinct colors
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Graphics.Buffers/BufferIndexed4
---
# Class BufferIndexed4
Represents a 4bpp pixel buffer with indexed colors
Each pixel is represented by 4 bits, allowing for 8 distinct colors

###### **Assembly**: MicroGraphics.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferIndexed4.cs#L11)
```csharp title="Declaration"
public class BufferIndexed4 : PixelBufferBase, IPixelBuffer, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Graphics.Buffers.PixelBufferBase](../Meadow.Foundation.Graphics.Buffers/PixelBufferBase)

**Implements:**  
`Meadow.Peripherals.Displays.IPixelBuffer`, `System.IDisposable`

## Properties
### ColorMode
Color mode of the buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferIndexed4.cs#L16)
```csharp title="Declaration"
public override ColorMode ColorMode { get; }
```
## Fields
### IndexedColors
The indexed colors as an 8 element array of Color values
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferIndexed4.cs#L21)
```csharp title="Declaration"
public readonly Color[] IndexedColors
```
## Methods
### Fill(Color)
Fill buffer with a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferIndexed4.cs#L47)
```csharp title="Declaration"
public override void Fill(Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *color* | The fill color |

### Fill(int, int, int, int, Color)
Fill a rectangular area with a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferIndexed4.cs#L71)
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

### GetPixel(int, int)
Get the pixel color at a given coordinate
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferIndexed4.cs#L97)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferIndexed4.cs#L109)
```csharp title="Declaration"
public override void SetPixel(int x, int y, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | X pixel position |
| `System.Int32` | *y* | Y pixel position |
| `Meadow.Color` | *color* | The pixel color |

### SetPixel(int, int, int)
Set the pixel using a color index
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferIndexed4.cs#L121)
```csharp title="Declaration"
public void SetPixel(int x, int y, int colorIndex)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | X pixel position |
| `System.Int32` | *y* | Y pixel position |
| `System.Int32` | *colorIndex* | The color index (0-7) |

### InvertPixel(int, int)
Invert the pixel color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferIndexed4.cs#L140)
```csharp title="Declaration"
public override void InvertPixel(int x, int y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x position of pixel |
| `System.Int32` | *y* | y position of pixel |

### WriteBuffer(int, int, IPixelBuffer)
Write a buffer into this buffer at a specified location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferIndexed4.cs#L151)
```csharp title="Declaration"
public override void WriteBuffer(int x, int y, IPixelBuffer buffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x origin |
| `System.Int32` | *y* | y origin |
| `Meadow.Peripherals.Displays.IPixelBuffer` | *buffer* | buffer to write |

### GetColorIndexForPixel(int, int)
Get the pixel's color index (0-7) at a given coordinate
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferIndexed4.cs#L181)
```csharp title="Declaration"
public byte GetColorIndexForPixel(int x, int y)
```

##### Returns

`System.Byte`: The 4-bit color index
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The X pixel position |
| `System.Int32` | *y* | The Y pixel position |


## Implements

* `Meadow.Peripherals.Displays.IPixelBuffer`
* `System.IDisposable`
