---
title: Class BufferRgb888
sidebar_label: BufferRgb888
description: Represents a 24bpp color pixel buffer
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Graphics.Buffers/BufferRgb888
---
# Class BufferRgb888
Represents a 24bpp color pixel buffer

###### **Assembly**: MicroGraphics.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferRgb888.cs#L9)
```csharp title="Declaration"
public class BufferRgb888 : PixelBufferBase, IPixelBuffer, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Graphics.Buffers.PixelBufferBase](../Meadow.Foundation.Graphics.Buffers/PixelBufferBase)

**Implements:**  
`Meadow.Peripherals.Displays.IPixelBuffer`, `System.IDisposable`

## Properties
### ColorMode
Color mode of the buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferRgb888.cs#L14)
```csharp title="Declaration"
public override ColorMode ColorMode { get; }
```
## Methods
### GetPixelInt(int, int)
Get the pixel color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferRgb888.cs#L42)
```csharp title="Declaration"
public int GetPixelInt(int x, int y)
```

##### Returns

`System.Int32`: The pixel color as a 888 24bpp int
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The X pixel position |
| `System.Int32` | *y* | The Y pixel position |

### GetPixel(int, int)
Get the pixel color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferRgb888.cs#L56)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferRgb888.cs#L73)
```csharp title="Declaration"
public override void SetPixel(int x, int y, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | X pixel position |
| `System.Int32` | *y* | Y pixel position |
| `Meadow.Color` | *color* | The pixel color |

### Fill(Color)
Fill buffer with a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferRgb888.cs#L86)
```csharp title="Declaration"
public override void Fill(Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *color* | The fill color |

### Fill(int, int, int, int, Color)
Fill with a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferRgb888.cs#L112)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferRgb888.cs#L147)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/BufferRgb888.cs#L164)
```csharp title="Declaration"
public override void WriteBuffer(int x, int y, IPixelBuffer buffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x origin |
| `System.Int32` | *y* | y origin |
| `Meadow.Peripherals.Displays.IPixelBuffer` | *buffer* | buffer to write |


## Implements

* `Meadow.Peripherals.Displays.IPixelBuffer`
* `System.IDisposable`
