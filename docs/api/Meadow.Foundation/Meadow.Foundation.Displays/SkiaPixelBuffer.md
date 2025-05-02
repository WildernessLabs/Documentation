---
title: Class SkiaPixelBuffer
sidebar_label: SkiaPixelBuffer
description: Represents a pixel buffer that uses SkiaSharp for rendering.
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays/SkiaPixelBuffer
---
# Class SkiaPixelBuffer
Represents a pixel buffer that uses SkiaSharp for rendering.

###### **Assembly**: Meadow.Silk.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Silk/Driver/SkiaPixelBuffer.cs#L9)
```csharp title="Declaration"
public class SkiaPixelBuffer : IPixelBuffer
```
**Implements:**  
`Meadow.Peripherals.Displays.IPixelBuffer`

## Properties
### SKBitmap
Gets the underlying SkiaSharp bitmap.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Silk/Driver/SkiaPixelBuffer.cs#L14)
```csharp title="Declaration"
public SKBitmap SKBitmap { get; }
```
### Width
Gets the width of the pixel buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Silk/Driver/SkiaPixelBuffer.cs#L19)
```csharp title="Declaration"
public int Width { get; }
```
### Height
Gets the height of the pixel buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Silk/Driver/SkiaPixelBuffer.cs#L24)
```csharp title="Declaration"
public int Height { get; }
```
### ColorMode
Gets the color mode of the pixel buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Silk/Driver/SkiaPixelBuffer.cs#L29)
```csharp title="Declaration"
public ColorMode ColorMode { get; }
```
### BitDepth
Gets the bit depth of the pixel buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Silk/Driver/SkiaPixelBuffer.cs#L34)
```csharp title="Declaration"
public int BitDepth { get; }
```
### ByteCount
Gets the byte count of the pixel buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Silk/Driver/SkiaPixelBuffer.cs#L39)
```csharp title="Declaration"
public int ByteCount { get; }
```
### Buffer
Gets the buffer containing pixel data.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Silk/Driver/SkiaPixelBuffer.cs#L44)
```csharp title="Declaration"
public byte[] Buffer { get; }
```
## Methods
### Clear()
Clears the pixel buffer, filling it with black.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Silk/Driver/SkiaPixelBuffer.cs#L59)
```csharp title="Declaration"
public void Clear()
```
### Fill(Color)
Fills the entire pixel buffer with the specified color.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Silk/Driver/SkiaPixelBuffer.cs#L68)
```csharp title="Declaration"
public void Fill(Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *color* | The color to fill the pixel buffer with. |

### Fill(int, int, int, int, Color)
Fills a specified region of the pixel buffer with the specified color.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Silk/Driver/SkiaPixelBuffer.cs#L81)
```csharp title="Declaration"
public void Fill(int originX, int originY, int width, int height, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *originX* | The x-coordinate of the region's origin. |
| `System.Int32` | *originY* | The y-coordinate of the region's origin. |
| `System.Int32` | *width* | The width of the region. |
| `System.Int32` | *height* | The height of the region. |
| `Meadow.Color` | *color* | The color to fill the region with. |

### GetPixel(int, int)
Gets the color of the pixel at the specified coordinates.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Silk/Driver/SkiaPixelBuffer.cs#L94)
```csharp title="Declaration"
public Color GetPixel(int x, int y)
```

##### Returns

`Meadow.Color`: The color of the pixel at the specified coordinates.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x-coordinate of the pixel. |
| `System.Int32` | *y* | The y-coordinate of the pixel. |

### InvertPixel(int, int)
Inverts the color of the pixel at the specified coordinates.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Silk/Driver/SkiaPixelBuffer.cs#L105)
```csharp title="Declaration"
public void InvertPixel(int x, int y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x-coordinate of the pixel. |
| `System.Int32` | *y* | The y-coordinate of the pixel. |

### SetPixel(int, int, Color)
Sets the color of the pixel at the specified coordinates.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Silk/Driver/SkiaPixelBuffer.cs#L117)
```csharp title="Declaration"
public void SetPixel(int x, int y, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x-coordinate of the pixel. |
| `System.Int32` | *y* | The y-coordinate of the pixel. |
| `Meadow.Color` | *color* | The color to set the pixel to. |

### WriteBuffer(int, int, IPixelBuffer)
Writes the pixel data from another pixel buffer into this buffer at the specified origin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Silk/Driver/SkiaPixelBuffer.cs#L128)
```csharp title="Declaration"
public void WriteBuffer(int originX, int originY, IPixelBuffer buffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *originX* | The x-coordinate of the origin. |
| `System.Int32` | *originY* | The y-coordinate of the origin. |
| `Meadow.Peripherals.Displays.IPixelBuffer` | *buffer* | The pixel buffer to copy data from. |

### WritePartialBuffer(int, int, int, int, IPixelBuffer)
Writes the pixel data from another pixel buffer into this buffer at the specified location
Assumes both buffers are the same dimensions
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.Silk/Driver/SkiaPixelBuffer.cs#L154)
```csharp title="Declaration"
public void WritePartialBuffer(int left, int top, int right, int bottom, IPixelBuffer buffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *left* |  |
| `System.Int32` | *top* |  |
| `System.Int32` | *right* |  |
| `System.Int32` | *bottom* |  |
| `Meadow.Peripherals.Displays.IPixelBuffer` | *buffer* | The pixel buffer to copy data from |


## Implements

* `Meadow.Peripherals.Displays.IPixelBuffer`
