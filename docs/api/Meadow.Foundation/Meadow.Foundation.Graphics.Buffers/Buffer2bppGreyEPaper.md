---
title: Class Buffer2bppGreyEPaper
sidebar_label: Buffer2bppGreyEPaper
description: >-
  Represents a 2bpp greysacle buffer This is specifically built for 4 color
  grayscale eInk displays and wraps two 1bpp buffers
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Graphics.Buffers/Buffer2bppGreyEPaper
---
# Class Buffer2bppGreyEPaper
Represents a 2bpp greysacle buffer
This is specifically built for 4 color grayscale eInk displays and wraps two 1bpp buffers

###### **Assembly**: EPaper.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppGrayEPaper.cs#L9)
```csharp title="Declaration"
public class Buffer2bppGreyEPaper : IPixelBuffer
```
**Implements:**  
`Meadow.Peripherals.Displays.IPixelBuffer`

## Properties
### Width
Width of buffer in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppGrayEPaper.cs#L22)
```csharp title="Declaration"
public int Width { get; }
```
### Height
Height of buffer in pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppGrayEPaper.cs#L27)
```csharp title="Declaration"
public int Height { get; }
```
### ColorMode
The ColorMode of the pixel buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppGrayEPaper.cs#L30)
```csharp title="Declaration"
public ColorMode ColorMode { get; }
```
### BitDepth
Bit depth of display as an integer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppGrayEPaper.cs#L35)
```csharp title="Declaration"
public int BitDepth { get; }
```
### ByteCount
Number of bytes in buffer
The totals the byte count from both internal 1bpp buffers
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppGrayEPaper.cs#L41)
```csharp title="Declaration"
public int ByteCount { get; }
```
### Buffer
No direct access to a unified buffer
Access BufferBlack and BufferColor instead
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppGrayEPaper.cs#L47)
```csharp title="Declaration"
public byte[] Buffer { get; }
```
### LightBuffer
The buffer for light and dark grey pixels
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppGrayEPaper.cs#L52)
```csharp title="Declaration"
public byte[] LightBuffer { get; }
```
### DarkBuffer
The buffer to darken pixels to light gray and black
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppGrayEPaper.cs#L57)
```csharp title="Declaration"
public byte[] DarkBuffer { get; }
```
## Methods
### Clear()
Clear the buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppGrayEPaper.cs#L79)
```csharp title="Declaration"
public void Clear()
```
### Fill(Color)
Fill with a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppGrayEPaper.cs#L89)
```csharp title="Declaration"
public void Fill(Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Color` | *color* | The fill color |

### Fill(int, int, int, int, Color)
Fill with a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppGrayEPaper.cs#L108)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppGrayEPaper.cs#L125)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppGrayEPaper.cs#L136)
```csharp title="Declaration"
public void InvertPixel(int x, int y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | x position of pixel |
| `System.Int32` | *y* | y position of pixel |

### SetPixel(int, int, Color)
Set a pixel to a color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppGrayEPaper.cs#L147)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Driver/Buffer2bppGrayEPaper.cs#L178)
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
