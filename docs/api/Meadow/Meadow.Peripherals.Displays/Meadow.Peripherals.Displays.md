---
title: Namespace Meadow.Peripherals.Displays
sidebar_label: Meadow.Peripherals.Displays
slug: /docs/api/Meadow/Meadow.Peripherals.Displays
---
# Namespace Meadow.Peripherals.Displays
## Classes
### [TextDisplayConfig](../Meadow.Peripherals.Displays/TextDisplayConfig)
Represents Text Display configurations
## Interfaces
### [IBacklitDisplay](../Meadow.Peripherals.Displays/IBacklitDisplay)
Defines a Display with a controllable backlight
### [IColorInvertableDisplay](../Meadow.Peripherals.Displays/IColorInvertableDisplay)
Represents a display that supports inverting colors
### [IDisplay](../Meadow.Peripherals.Displays/IDisplay)
Display Interface
### [IPixelBuffer](../Meadow.Peripherals.Displays/IPixelBuffer)
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
### [IPixelDisplay](../Meadow.Peripherals.Displays/IPixelDisplay)
Represents a pixel based graphics display
### [IPixelDisplayProvider](../Meadow.Peripherals.Displays/IPixelDisplayProvider)
Represents an object that can create IPixelDisplays
### [IResizablePixelDisplay](../Meadow.Peripherals.Displays/IResizablePixelDisplay)
Represents a resizable pixel based graphics display
### [IRotatableDisplay](../Meadow.Peripherals.Displays/IRotatableDisplay)
Represents a display that supports rotation in 90 degree increments
### [ITextDisplay](../Meadow.Peripherals.Displays/ITextDisplay)
Defines a Text Display
## Enums
### [ColorMode](../Meadow.Peripherals.Displays/ColorMode)
Enum for Display color mode, defines bit depth and RGB order
### [RotationType](../Meadow.Peripherals.Displays/RotationType)
Display rotation
