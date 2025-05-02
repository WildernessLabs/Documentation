---
title: Class Buffer2bppColorEPaper
sidebar_label: Buffer2bppColorEPaper
description: >-
  Represents a 2bpp buffer This is specifically built for 3 color eInk displays
  and wraps two 1bpp buffers
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Graphics.Buffers/Buffer2bppColorEPaper
---
# Class Buffer2bppColorEPaper
Represents a 2bpp buffer
This is specifically built for 3 color eInk displays and wraps two 1bpp buffers

###### **Assembly**: EPaper.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppColorEPaper.cs#L9)
```csharp title="Declaration"
public class Buffer2bppColorEPaper : IPixelBuffer
```
**Implements:**  
`Meadow.Peripherals.Displays.IPixelBuffer`

## Properties
### Width
Width of buffer in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppColorEPaper.cs#L21)
```csharp title="Declaration"
public int Width { get; }
```
### Height
Height of buffer in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppColorEPaper.cs#L26)
```csharp title="Declaration"
public int Height { get; }
```
### ColorMode
The ColorMode of the pixel buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppColorEPaper.cs#L29)
```csharp title="Declaration"
public ColorMode ColorMode { get; }
```
### BitDepth
Bit depth of display as an integer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppColorEPaper.cs#L34)
```csharp title="Declaration"
public int BitDepth { get; }
```
### ByteCount
Number of bytes in buffer
The totals the byte count from both internal 1bpp buffers
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppColorEPaper.cs#L40)
```csharp title="Declaration"
public int ByteCount { get; }
```
### Buffer
No direct access to a unified buffer
Access BufferBlack and BufferColor instead
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppColorEPaper.cs#L46)
```csharp title="Declaration"
public byte[] Buffer { get; }
```
### BlackBuffer
The buffer for black pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppColorEPaper.cs#L51)
```csharp title="Declaration"
public byte[] BlackBuffer { get; }
```
### ColorBuffer
The buffer for color pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppColorEPaper.cs#L56)
```csharp title="Declaration"
public byte[] ColorBuffer { get; }
```
## Methods
### Clear()
Clear the buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppColorEPaper.cs#L78)
```csharp title="Declaration"
public void Clear()
```
### Fill(Color)
Fill with a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppColorEPaper.cs#L88)
```csharp title="Declaration"
public void Fill(Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *color* | The fill color |

### Fill(int, int, int, int, Color)
Fill with a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppColorEPaper.cs#L107)
```csharp title="Declaration"
public void Fill(int originX, int originY, int width, int height, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *originX* | X start position in pixels |
| `System.Int32` | *originY* | Y start position in pixels |
| `System.Int32` | *width* | Width in pixels |
| `System.Int32` | *height* | Height in pixels |
| `Meadow.Color` | *color* | The fill color |

### GetPixel(int, int)
Get the pixel color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppColorEPaper.cs#L124)
```csharp title="Declaration"
public Color GetPixel(int x, int y)
```

##### Returns

`Meadow.Color`: The pixel color
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The X pixel position |
| `System.Int32` | *y* | The Y pixel position |

### InvertPixel(int, int)
Invert the pixel
Not currently supported
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppColorEPaper.cs#L135)
```csharp title="Declaration"
public void InvertPixel(int x, int y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x position of pixel |
| `System.Int32` | *y* | y position of pixel |

### SetColorPixel(int, int, bool)
Set a color pixel on or off
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppColorEPaper.cs#L146)
```csharp title="Declaration"
public void SetColorPixel(int x, int y, bool isOn)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x location in pixels |
| `System.Int32` | *y* | y location in pixels |
| `System.Boolean` | *isOn* | true for on, false for off |

### SetBlackPixel(int, int, bool)
Set a black pixel on or off
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppColorEPaper.cs#L166)
```csharp title="Declaration"
public void SetBlackPixel(int x, int y, bool isOn)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x location in pixels |
| `System.Int32` | *y* | y location in pixels |
| `System.Boolean` | *isOn* | true for on, false for off |

### SetPixel(int, int, Color)
Set a pixel to a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppColorEPaper.cs#L186)
```csharp title="Declaration"
public void SetPixel(int x, int y, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x location in pixels |
| `System.Int32` | *y* | y location in pixels |
| `Meadow.Color` | *color* | The color - will normalize to black, white or color |

### WriteBuffer(int, int, IPixelBuffer)
Write a buffer to the buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppColorEPaper.cs#L213)
```csharp title="Declaration"
public void WriteBuffer(int x, int y, IPixelBuffer buffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x position in pixels to write the buffer |
| `System.Int32` | *y* | The y position in pixels to write the buffer |
| `Meadow.Peripherals.Displays.IPixelBuffer` | *buffer* | The buffer to write |


## Implements

* `Meadow.Peripherals.Displays.IPixelBuffer`
