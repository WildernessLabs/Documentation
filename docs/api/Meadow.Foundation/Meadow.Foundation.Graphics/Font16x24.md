---
title: Class Font16x24
sidebar_label: Font16x24
description: Represents a 16x24 bitmap font
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Graphics/Font16x24
---
# Class Font16x24
Represents a 16x24 bitmap font

###### **Assembly**: MicroGraphics.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Fonts/Font16x24.cs#L6)
```csharp title="Declaration"
public class Font16x24 : IFont
```
**Implements:**  
[Meadow.Foundation.Graphics.IFont](../Meadow.Foundation.Graphics/IFont)

## Properties
### Width
Width of a character in the font.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Fonts/Font16x24.cs#L11)
```csharp title="Declaration"
public int Width { get; }
```
### Height
Height of a character in the font.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Fonts/Font16x24.cs#L16)
```csharp title="Declaration"
public int Height { get; }
```
### this[char]
Get the binary representation of an ASCII character from the
font table.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Fonts/Font16x24.cs#L157)
```csharp title="Declaration"
public byte[] this[char character] { get; }
```

## Implements

* [Meadow.Foundation.Graphics.IFont](../Meadow.Foundation.Graphics/IFont)
