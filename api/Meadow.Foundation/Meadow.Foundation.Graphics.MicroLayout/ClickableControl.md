---
title: Class ClickableControl
sidebar_label: ClickableControl
description: "Represents a base class for clickable display controls in the user interface."
---
# Class ClickableControl
Represents a base class for clickable display controls in the user interface.

###### **Assembly**: MicroLayout.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/ClickableControl.cs#L8)
```csharp title="Declaration"
public abstract class ClickableControl : ThemedControl, IThemedControl, IClickableControl, IControl
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Graphics.MicroLayout.Control](../Meadow.Foundation.Graphics.MicroLayout/Control) -> [Meadow.Foundation.Graphics.MicroLayout.ThemedControl](../Meadow.Foundation.Graphics.MicroLayout/ThemedControl)

**Derived:**  
[Meadow.Foundation.Graphics.MicroLayout.Button](../Meadow.Foundation.Graphics.MicroLayout/Button)

**Implements:**  
[Meadow.Foundation.Graphics.MicroLayout.IThemedControl](../Meadow.Foundation.Graphics.MicroLayout/IThemedControl), [Meadow.Foundation.Graphics.MicroLayout.IClickableControl](../Meadow.Foundation.Graphics.MicroLayout/IClickableControl), [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl)

## Properties
### Pressed
Gets or sets a value indicating whether the clickable control is in a pressed state.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/ClickableControl.cs#L20)
```csharp title="Declaration"
public bool Pressed { get; set; }
```
## Events
### Clicked
Occurs when the clickable control is clicked.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/ClickableControl.cs#L13)
```csharp title="Declaration"
public event EventHandler Clicked
```
##### Event Type
`System.EventHandler`

## Implements

* [Meadow.Foundation.Graphics.MicroLayout.IThemedControl](../Meadow.Foundation.Graphics.MicroLayout/IThemedControl)
* [Meadow.Foundation.Graphics.MicroLayout.IClickableControl](../Meadow.Foundation.Graphics.MicroLayout/IClickableControl)
* [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl)
