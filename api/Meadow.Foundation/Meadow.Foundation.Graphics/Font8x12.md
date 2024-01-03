---
title: Class Font8x12
sidebar_label: Font8x12
description: "Represents a 8x12 bitmap font"
---
# Class Font8x12
Represents a 8x12 bitmap font

###### **Assembly**: MicroGraphics.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Fonts/Font8x12.cs#L6)
```csharp title="Declaration"
public class Font8x12 : IFont
```
**Implements:**  
[Meadow.Foundation.Graphics.IFont](../Meadow.Foundation.Graphics/IFont)

## Properties
### Width
Width of a character in the font.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Fonts/Font8x12.cs#L11)
```csharp title="Declaration"
public int Width { get; }
```
### Height
Height of a character in the font.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Fonts/Font8x12.cs#L16)
```csharp title="Declaration"
public int Height { get; }
```
### this[char]
Get the binary representation of an ASCII character from the
font table.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Fonts/Font8x12.cs#L130)
```csharp title="Declaration"
public byte[] this[char character] { get; }
```

## Implements

* [Meadow.Foundation.Graphics.IFont](../Meadow.Foundation.Graphics/IFont)
