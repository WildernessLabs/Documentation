---
title: Interface IControl
sidebar_label: IControl
description: Represents a display control in the user interface.
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Graphics.MicroLayout/IControl
---
# Interface IControl
Represents a display control in the user interface.

###### **Assembly**: MicroLayout.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/IControl.cs#L6)
```csharp title="Declaration"
public interface IControl
```
## Properties
### Parent
Gets of sets the Control's Parent, if it has one.  If the Control is unparented (i.e. Parent is null) then it is directly on the DisplayScreen
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/IControl.cs#L11)
```csharp title="Declaration"
IControl? Parent { get; set; }
```
### Left
Gets or sets the left coordinate of the display control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/IControl.cs#L16)
```csharp title="Declaration"
int Left { get; set; }
```
### ScreenLeft
Gets left coordinate of the control with respect to the screen
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/IControl.cs#L21)
```csharp title="Declaration"
int ScreenLeft { get; }
```
### ScreenTop
Gets top coordinate of the control with respect to the screen
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/IControl.cs#L26)
```csharp title="Declaration"
int ScreenTop { get; }
```
### ScreenRight
Gets right coordinate of the control with respect to the screen
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/IControl.cs#L31)
```csharp title="Declaration"
int ScreenRight { get; }
```
### ScreenBottom
Gets bottom coordinate of the control with respect to the screen
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/IControl.cs#L36)
```csharp title="Declaration"
int ScreenBottom { get; }
```
### Right
Gets right coordinate of the display control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/IControl.cs#L41)
```csharp title="Declaration"
int Right { get; }
```
### Top
Gets or sets the top coordinate of the display control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/IControl.cs#L46)
```csharp title="Declaration"
int Top { get; set; }
```
### Bottom
Gets bottom coordinate of the display control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/IControl.cs#L51)
```csharp title="Declaration"
int Bottom { get; }
```
### IsVisible
Gets or sets whether the control is visible.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/IControl.cs#L56)
```csharp title="Declaration"
bool IsVisible { get; set; }
```
### Width
Gets or sets the width of the display control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/IControl.cs#L61)
```csharp title="Declaration"
int Width { get; set; }
```
### Height
Gets or sets the height of the display control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/IControl.cs#L66)
```csharp title="Declaration"
int Height { get; set; }
```
### IsInvalid
Gets a value indicating whether the display control is currently invalid and needs to be refreshed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/IControl.cs#L71)
```csharp title="Declaration"
bool IsInvalid { get; }
```
## Methods
### Refresh(MicroGraphics)
Refreshes the display control using the specified [Meadow.Foundation.Graphics.MicroGraphics](../Meadow.Foundation.Graphics/MicroGraphics) object.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/IControl.cs#L77)
```csharp title="Declaration"
void Refresh(MicroGraphics graphics)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.MicroGraphics](../Meadow.Foundation.Graphics/MicroGraphics) | *graphics* | The [Meadow.Foundation.Graphics.MicroGraphics](../Meadow.Foundation.Graphics/MicroGraphics) object to use for refreshing the display control. |

### Invalidate()
Marks the display control as invalid and in need of refreshing.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/IControl.cs#L82)
```csharp title="Declaration"
void Invalidate()
```
### Contains(int, int)
Checks if the specified coordinates are contained within the display control's area.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/IControl.cs#L90)
```csharp title="Declaration"
bool Contains(int x, int y)
```

##### Returns

`System.Boolean`: `true` if the coordinates are contained within the display control's area; otherwise, `false`.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *x* | The x-coordinate to check. |
| `System.Int32` | *y* | The y-coordinate to check. |

