---
title: Namespace Meadow.Foundation.Graphics.Buffers
sidebar_label: Meadow.Foundation.Graphics.Buffers
---
# Namespace Meadow.Foundation.Graphics.Buffers
## Classes
### [Buffer1bpp](../Meadow.Foundation.Graphics.Buffers/Buffer1bpp)
Represents a 1bpp pixel buffer with horizontal pixel packing
1 byte represents 8 pixels on the x-axis
### [Buffer1bppV](../Meadow.Foundation.Graphics.Buffers/Buffer1bppV)
Represents a 1bpp pixel buffer with vertical pixel packing
1 byte represents 8 pixels on the y-axis
### [Buffer2bppEPaper](../Meadow.Foundation.Graphics.Buffers/Buffer2bppEPaper)
Represents a 2bpp buffer
This is specifically built for 3 color eInk displays and wraps two 1bpp buffers
### [BufferGray4](../Meadow.Foundation.Graphics.Buffers/BufferGray4)
Represents a 4bpp pixel buffer
### [BufferGray8](../Meadow.Foundation.Graphics.Buffers/BufferGray8)
Represents a 8bpp grayscale pixel buffer
### [BufferIndexed4](../Meadow.Foundation.Graphics.Buffers/BufferIndexed4)
Represents a 4bpp pixel buffer with indexed colors
### [BufferRgb332](../Meadow.Foundation.Graphics.Buffers/BufferRgb332)
Represents a 8bpp color pixel buffer
### [BufferRgb444](../Meadow.Foundation.Graphics.Buffers/BufferRgb444)
Represents a 12bpp color pixel buffer
### [BufferRgb565](../Meadow.Foundation.Graphics.Buffers/BufferRgb565)
Represents a 16bpp color pixel buffer
### [BufferRgb888](../Meadow.Foundation.Graphics.Buffers/BufferRgb888)
Represents a 24bpp color pixel buffer
### [BufferRgba8888](../Meadow.Foundation.Graphics.Buffers/BufferRgba8888)
Represents a 32bpp color pixel buffer
### [PixelBufferBase](../Meadow.Foundation.Graphics.Buffers/PixelBufferBase)
Represents a pixel buffer
## Interfaces
### [IPixelBuffer](../Meadow.Foundation.Graphics.Buffers/IPixelBuffer)
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
