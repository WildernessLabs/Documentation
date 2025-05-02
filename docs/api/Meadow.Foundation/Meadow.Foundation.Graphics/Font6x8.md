---
title: Class Font6x8
sidebar_label: Font6x8
description: Represents a 6x8 bitmap font
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Graphics/Font6x8
---
# Class Font6x8
Represents a 6x8 bitmap font

###### **Assembly**: MicroGraphics.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Fonts/Font6x8.cs#L6)
```csharp title="Declaration"
public class Font6x8 : IFont
```
**Implements:**  
[Meadow.Foundation.Graphics.IFont](../Meadow.Foundation.Graphics/IFont)

## Properties
### Width
Width of a character in the font.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Fonts/Font6x8.cs#L11)
```csharp title="Declaration"
public int Width { get; }
```
### Height
Height of a character in the font.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Fonts/Font6x8.cs#L16)
```csharp title="Declaration"
public int Height { get; }
```
### this[char]
Get the binary representation of an ASCII character from the
font table.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Fonts/Font6x8.cs#L129)
```csharp title="Declaration"
public byte[] this[char character] { get; }
```

## Implements

* [Meadow.Foundation.Graphics.IFont](../Meadow.Foundation.Graphics/IFont)
