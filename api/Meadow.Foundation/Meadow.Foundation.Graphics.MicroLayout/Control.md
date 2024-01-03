---
title: Class Control
sidebar_label: Control
description: "Represents a base class for display controls in the user interface."
---
# Class Control
Represents a base class for display controls in the user interface.

###### **Assembly**: MicroLayout.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Control.cs#L6)
```csharp title="Declaration"
public abstract class Control : IControl
```
**Derived:**  
[Meadow.Foundation.Graphics.MicroLayout.ThemedControl](../Meadow.Foundation.Graphics.MicroLayout/ThemedControl)

**Implements:**  
[Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl)

## Properties
### IsInvalid
Gets or sets a value indicating whether the control needs to be redrawn.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Control.cs#L17)
```csharp title="Declaration"
public virtual bool IsInvalid { get; }
```
### Context
Gets or sets the context object associated with the control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Control.cs#L22)
```csharp title="Declaration"
public object? Context { get; set; }
```
### Parent
Gets of sets the Control's Paretn, if it has one.  If the Control is unparented (i.e. Parent is null) then it is directly on the DisplayScreen
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Control.cs#L25)
```csharp title="Declaration"
public IControl? Parent { get; set; }
```
### Visible
Gets or sets a value indicating whether the control is visible.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Control.cs#L73)
```csharp title="Declaration"
public virtual bool Visible { get; set; }
```
### Left
Gets or sets the left coordinate of the control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Control.cs#L82)
```csharp title="Declaration"
public int Left { get; set; }
```
### Top
Gets or sets the top coordinate of the control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Control.cs#L91)
```csharp title="Declaration"
public int Top { get; set; }
```
### Width
Gets or sets the width of the control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Control.cs#L100)
```csharp title="Declaration"
public int Width { get; set; }
```
### Height
Gets or sets the height of the control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Control.cs#L109)
```csharp title="Declaration"
public int Height { get; set; }
```
### Bottom
Gets the bottom coordinate of the control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Control.cs#L118)
```csharp title="Declaration"
public int Bottom { get; }
```
### Right
Gets the right coordinate of the control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Control.cs#L123)
```csharp title="Declaration"
public int Right { get; }
```
## Methods
### SetInvalidatingProperty&lt;T&gt;(ref T, T)
Sets a property value and marks the control as invalid, requiring a redraw.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Control.cs#L50)
```csharp title="Declaration"
protected void SetInvalidatingProperty<T>(ref T field, T value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `<T>` | *field* | The reference to the field to set. |
| `<T>` | *value* | The new value to assign to the property. |

##### Type Parameters
| Name | Description |
|:--- |:--- |
| `T` | The type of the property. |
### Invalidate()
Marks the control as invalid, requiring a redraw.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Control.cs#L65)
```csharp title="Declaration"
public virtual void Invalidate()
```
### Refresh(MicroGraphics)
Refreshes the control by redrawing it on the specified [Meadow.Foundation.Graphics.MicroGraphics](../Meadow.Foundation.Graphics/MicroGraphics) surface.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Control.cs#L129)
```csharp title="Declaration"
public void Refresh(MicroGraphics graphics)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.MicroGraphics](../Meadow.Foundation.Graphics/MicroGraphics) | *graphics* | The [Meadow.Foundation.Graphics.MicroGraphics](../Meadow.Foundation.Graphics/MicroGraphics) surface to redraw the control on. |

### OnDraw(MicroGraphics)
Performs the actual drawing of the control on the specified [Meadow.Foundation.Graphics.MicroGraphics](../Meadow.Foundation.Graphics/MicroGraphics) surface.
This method must be implemented in derived classes.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/Controls/Control.cs#L146)
```csharp title="Declaration"
protected abstract void OnDraw(MicroGraphics graphics)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Graphics.MicroGraphics](../Meadow.Foundation.Graphics/MicroGraphics) | *graphics* | The [Meadow.Foundation.Graphics.MicroGraphics](../Meadow.Foundation.Graphics/MicroGraphics) surface to draw the control on. |


## Implements

* [Meadow.Foundation.Graphics.MicroLayout.IControl](../Meadow.Foundation.Graphics.MicroLayout/IControl)
