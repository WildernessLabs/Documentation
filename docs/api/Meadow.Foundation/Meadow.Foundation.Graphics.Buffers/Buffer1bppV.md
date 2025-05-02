---
title: Class Buffer1bppV
sidebar_label: Buffer1bppV
description: >-
  Represents a 1bpp pixel buffer with vertical pixel packing 1 byte represents 8
  pixels on the y-axis
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Graphics.Buffers/Buffer1bppV
---
# Class Buffer1bppV
Represents a 1bpp pixel buffer with vertical pixel packing
1 byte represents 8 pixels on the y-axis

###### **Assembly**: MicroGraphics.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/Buffer1bppV.cs#L10)
```csharp title="Declaration"
public class Buffer1bppV : Buffer1bpp, IPixelBuffer, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Graphics.Buffers.PixelBufferBase](../Meadow.Foundation.Graphics.Buffers/PixelBufferBase) -> [Meadow.Foundation.Graphics.Buffers.Buffer1bpp](../Meadow.Foundation.Graphics.Buffers/Buffer1bpp)

**Implements:**  
`Meadow.Peripherals.Displays.IPixelBuffer`, `System.IDisposable`

## Methods
### GetPixelIsEnabled(int, int)
Is the pixel enabled / on for a given location
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/Buffer1bppV.cs#L62)
```csharp title="Declaration"
public override bool GetPixelIsEnabled(int x, int y)
```

##### Returns

`System.Boolean`: true if pixel is set / enabled
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x location in pixels |
| `System.Int32` | *y* | y location in pixels |

### SetPixel(int, int, bool)
Set a pixel in the display buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/Buffer1bppV.cs#L73)
```csharp title="Declaration"
public override void SetPixel(int x, int y, bool enabled)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x position in pixels from left |
| `System.Int32` | *y* | y position in pixels from top |
| `System.Boolean` | *enabled* | is pixel enabled (on) |

### Fill(int, int, int, int, Color)
Fill with a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/Buffer1bppV.cs#L90)
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
Invert a pixel
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/Buffer1bppV.cs#L115)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Buffers/Buffer1bppV.cs#L126)
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
