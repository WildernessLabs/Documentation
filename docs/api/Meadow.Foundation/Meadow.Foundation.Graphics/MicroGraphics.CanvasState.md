---
title: Class MicroGraphics.CanvasState
sidebar_label: MicroGraphics.CanvasState
description: Represents a canvas state
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Graphics/MicroGraphics.CanvasState
---
# Class MicroGraphics.CanvasState
Represents a canvas state

###### **Assembly**: MicroGraphics.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.Canvas.cs#L11)
```csharp title="Declaration"
protected class MicroGraphics.CanvasState
```
## Properties
### CurrentFont
The current font
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.Canvas.cs#L16)
```csharp title="Declaration"
public IFont? CurrentFont { get; set; }
```
### Stroke
The current stroke when drawing primitives
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.Canvas.cs#L21)
```csharp title="Declaration"
public int Stroke { get; set; }
```
### Rotation
The canvas rotation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.Canvas.cs#L26)
```csharp title="Declaration"
public RotationType Rotation { get; set; }
```
### PenColor
The current pen color
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroGraphics/Driver/MicroGraphics.Canvas.cs#L31)
```csharp title="Declaration"
public Color PenColor { get; set; }
```
