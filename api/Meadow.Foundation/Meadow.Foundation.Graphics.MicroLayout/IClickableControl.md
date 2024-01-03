---
title: Interface IClickableControl
sidebar_label: IClickableControl
description: "Represents a clickable display control in the user interface."
---
# Interface IClickableControl
Represents a clickable display control in the user interface.

###### **Assembly**: MicroLayout.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/IClickableControl.cs#L8)
```csharp title="Declaration"
public interface IClickableControl : IControl
```
## Properties
### Pressed
Gets or sets a value indicating whether the clickable display control is currently pressed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/IClickableControl.cs#L18)
```csharp title="Declaration"
bool Pressed { get; set; }
```
## Events
### Clicked
Occurs when the clickable display control is clicked.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/IClickableControl.cs#L13)
```csharp title="Declaration"
event EventHandler Clicked
```
##### Event Type
`System.EventHandler`
