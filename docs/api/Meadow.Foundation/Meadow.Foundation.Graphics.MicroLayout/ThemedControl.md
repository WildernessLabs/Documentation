---
title: Class ThemedControl
sidebar_label: ThemedControl
description: Represents a base class for themed display controls in the user interface.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Graphics.MicroLayout/ThemedControl
---
# Class ThemedControl
Represents a base class for themed display controls in the user interface.

###### **Assembly**: MicroLayout.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/ThemedControl.cs#L6)
```csharp title="Declaration"
public abstract class ThemedControl : Control, IThemedControl, IControl
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Graphics.MicroLayout.Control](../Meadow.Foundation.Graphics.MicroLayout/Control)

**Derived:**  

<details>
<summary>Expand</summary>

[Meadow.Foundation.Graphics.MicroLayout.Box](../Meadow.Foundation.Graphics.MicroLayout/Box), [Meadow.Foundation.Graphics.MicroLayout.ChartControl](../Meadow.Foundation.Graphics.MicroLayout/ChartControl), [Meadow.Foundation.Graphics.MicroLayout.Circle](../Meadow.Foundation.Graphics.MicroLayout/Circle), [Meadow.Foundation.Graphics.MicroLayout.ClickableControl](../Meadow.Foundation.Graphics.MicroLayout/ClickableControl), [Meadow.Foundation.Graphics.MicroLayout.Crosshair](../Meadow.Foundation.Graphics.MicroLayout/Crosshair), [Meadow.Foundation.Graphics.MicroLayout.GradientBox](../Meadow.Foundation.Graphics.MicroLayout/GradientBox), [Meadow.Foundation.Graphics.MicroLayout.MicroLayout](../Meadow.Foundation.Graphics.MicroLayout/MicroLayout), [Meadow.Foundation.Graphics.MicroLayout.Picture](../Meadow.Foundation.Graphics.MicroLayout/Picture), [Meadow.Foundation.Graphics.MicroLayout.ProgressBar](../Meadow.Foundation.Graphics.MicroLayout/ProgressBar)
</details>



**Implements:**  
[Meadow.Foundation.Graphics.MicroLayout.IThemedControl](../Meadow.Foundation.Graphics.MicroLayout/IThemedControl), [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl)

## Methods
### ApplyTheme(DisplayTheme)
Applies the specified display theme to the control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/ThemedControl.cs#L12)
```csharp title="Declaration"
public abstract void ApplyTheme(DisplayTheme theme)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.MicroLayout.DisplayTheme](../Meadow.Foundation.Graphics.MicroLayout/DisplayTheme) | *theme* | The display theme to apply. |


## Implements

* [Meadow.Foundation.Graphics.MicroLayout.IThemedControl](../Meadow.Foundation.Graphics.MicroLayout/IThemedControl)
* [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl)
