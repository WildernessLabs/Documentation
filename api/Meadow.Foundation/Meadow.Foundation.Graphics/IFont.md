---
title: Interface IFont
sidebar_label: IFont
description: "Font class abstraction"
---
# Interface IFont
Font class abstraction

###### **Assembly**: MicroGraphics.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Fonts/IFont.cs#L6)
```csharp title="Declaration"
public interface IFont
```
## Properties
### Width
Width of a character in the font
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Fonts/IFont.cs#L11)
```csharp title="Declaration"
int Width { get; }
```
### Height
Height of a character in the font
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Fonts/IFont.cs#L16)
```csharp title="Declaration"
int Height { get; }
```
### this[char]
Get the binary representation of the ASCII character from the font table
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/Fonts/IFont.cs#L23)
```csharp title="Declaration"
byte[] this[char character] { get; }
```
