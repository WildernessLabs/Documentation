---
title: Class BufferGray4
sidebar_label: BufferGray4
description: Represents a 4bpp pixel buffer
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Graphics.Buffers/BufferGray4
---
# Class BufferGray4
Represents a 4bpp pixel buffer

###### **Assembly**: MicroGraphics.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferGray4.cs#L9)
```csharp title="Declaration"
public class BufferGray4 : PixelBufferBase, IPixelBuffer, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Graphics.Buffers.PixelBufferBase](../Meadow.Foundation.Graphics.Buffers/PixelBufferBase)

**Implements:**  
`Meadow.Peripherals.Displays.IPixelBuffer`, `System.IDisposable`

## Properties
### ColorMode
Color mode of the buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferGray4.cs#L14)
```csharp title="Declaration"
public override ColorMode ColorMode { get; }
```
## Methods
### Fill(Color)
Fill buffer with a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferGray4.cs#L40)
```csharp title="Declaration"
public override void Fill(Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *color* | The fill color |

### Fill(int, int, int, int, Color)
Fill a region with a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferGray4.cs#L63)
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
Get the pixel color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferGray4.cs#L88)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferGray4.cs#L101)
```csharp title="Declaration"
public override void SetPixel(int x, int y, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | X pixel position |
| `System.Int32` | *y* | Y pixel position |
| `Meadow.Color` | *color* | The pixel color |

### SetPixel(int, int, byte)
Set the pixel to a shade of gray
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferGray4.cs#L112)
```csharp title="Declaration"
public void SetPixel(int x, int y, byte gray)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | X pixel position |
| `System.Int32` | *y* | Y pixel position |
| `System.Byte` | *gray* | The pixel gray value |

### InvertPixel(int, int)
Invert the pixel
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferGray4.cs#L126)
```csharp title="Declaration"
public override void InvertPixel(int x, int y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x position of pixel |
| `System.Int32` | *y* | y position of pixel |

### WriteBuffer(int, int, IPixelBuffer)
Write a buffer to a specific location in the current buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferGray4.cs#L141)
```csharp title="Declaration"
public override void WriteBuffer(int x, int y, IPixelBuffer buffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x origin |
| `System.Int32` | *y* | y origin |
| `Meadow.Peripherals.Displays.IPixelBuffer` | *buffer* | buffer to write |

### GetPixel4bpp(int, int)
Get a pixel's 4bpp grayscale value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferGray4.cs#L171)
```csharp title="Declaration"
public byte GetPixel4bpp(int x, int y)
```

##### Returns

`System.Byte`: The pixel color as a 4bpp gray value
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The X pixel position |
| `System.Int32` | *y* | The Y pixel position |


## Implements

* `Meadow.Peripherals.Displays.IPixelBuffer`
* `System.IDisposable`
