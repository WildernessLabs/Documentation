---
title: Interface IPixelBuffer
sidebar_label: IPixelBuffer
description: >-
  IPixelBuffer provides a standard interface for representing the display state
  of a device capable of displaying pixels. It specifies methods for performing
  common primitive operations on a buffer of pixel data.

  Conceptually, implementing classes should:

  1. Specify a bit depth for pixels 2. Specify a color mode 3. Preserve the
  display state as a byte[] in the PixelBuffer 4. Optimize primitive drawing
  methods for the bit depth of pixels 5. Be abstracted/decoupled from a specific
  device driver
slug: /docs/api/Meadow/Meadow.Peripherals.Displays/IPixelBuffer
---
# Interface IPixelBuffer
IPixelBuffer provides a standard interface for
representing the display state of a device capable of
displaying pixels. It specifies methods for performing
common primitive operations on a buffer of pixel data.

Conceptually, implementing classes should:

1. Specify a bit depth for pixels
2. Specify a color mode
3. Preserve the display state as a byte[] in the PixelBuffer
4. Optimize primitive drawing methods for the bit depth of pixels
5. Be abstracted/decoupled from a specific device driver

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelBuffer.cs#L17)
```csharp title="Declaration"
public interface IPixelBuffer
```
## Properties
### Width
The width of the pixel buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelBuffer.cs#L22)
```csharp title="Declaration"
int Width { get; }
```
### Height
The height of the pixel buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelBuffer.cs#L27)
```csharp title="Declaration"
int Height { get; }
```
### ColorMode
The ColorMode of the pixel buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelBuffer.cs#L32)
```csharp title="Declaration"
ColorMode ColorMode { get; }
```
### BitDepth
The BitDepth of the chosen ColorMode
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelBuffer.cs#L37)
```csharp title="Declaration"
int BitDepth { get; }
```
### ByteCount
The number of bytes in this pixel buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelBuffer.cs#L42)
```csharp title="Declaration"
int ByteCount { get; }
```
### Buffer
The byte array that holds all pixel data
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelBuffer.cs#L47)
```csharp title="Declaration"
byte[] Buffer { get; }
```
## Methods
### SetPixel(int, int, Color)
Set the color of the pixel at the provided coordinates
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelBuffer.cs#L55)
```csharp title="Declaration"
void SetPixel(int x, int y, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | X coordinate of the pixel: 0,0 at top left |
| `System.Int32` | *y* | Y coordinate of the pixel: 0,0 at top left |
| [Meadow.Color](../Meadow/Color) | *color* | The pixel color |

### GetPixel(int, int)
Get the color of a pixel - may be scaled based on buffer color depth
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelBuffer.cs#L62)
```csharp title="Declaration"
Color GetPixel(int x, int y)
```

##### Returns

[Meadow.Color](../Meadow/Color)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | X coordinate of the pixel: 0,0 at top left |
| `System.Int32` | *y* | Y coordinate of the pixel: 0,0 at top left |

### InvertPixel(int, int)
Invert the color of a pixel at the provided location
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelBuffer.cs#L69)
```csharp title="Declaration"
void InvertPixel(int x, int y)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The X coord to invert |
| `System.Int32` | *y* | The Y coord to invert |

### WriteBuffer(int, int, IPixelBuffer)
Writes another pixel buffer into this buffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelBuffer.cs#L78)
```csharp title="Declaration"
void WriteBuffer(int originX, int originY, IPixelBuffer buffer)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *originX* | The X origin to start writing |
| `System.Int32` | *originY* | The Y origin to start writing |
| [Meadow.Peripherals.Displays.IPixelBuffer](../Meadow.Peripherals.Displays/IPixelBuffer) | *buffer* | The buffer to write into this buffer |

### Fill(Color)
Fills the buffer with the provided color
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelBuffer.cs#L84)
```csharp title="Declaration"
void Fill(Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Color](../Meadow/Color) | *color* | The color to fill |

### Fill(int, int, int, int, Color)
Fills part of the buffer with the provided color
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelBuffer.cs#L94)
```csharp title="Declaration"
void Fill(int originX, int originY, int width, int height, Color color)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *originX* | The X coord to start filling |
| `System.Int32` | *originY* | The Y coord to start filling |
| `System.Int32` | *width* | The width to fill |
| `System.Int32` | *height* | The height to fill |
| [Meadow.Color](../Meadow/Color) | *color* | The color to fill |

### Clear()
Clears the buffer (writes 0s to the byte array)
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelBuffer.cs#L99)
```csharp title="Declaration"
void Clear()
```
### Clear(int, int, int, int)
Clears a region of the buffer (writes 0s to the byte array)
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Displays/IPixelBuffer.cs#L108)
```csharp title="Declaration"
void Clear(int originX, int originY, int width, int height)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *originX* | The X coord to start |
| `System.Int32` | *originY* | The Y coord to start |
| `System.Int32` | *width* | The width of the region to clear |
| `System.Int32` | *height* | The height of the region to clear |

