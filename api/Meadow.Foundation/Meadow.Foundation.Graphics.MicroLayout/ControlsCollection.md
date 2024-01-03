---
title: Class ControlsCollection
sidebar_label: ControlsCollection
description: "Represents a collection of display controls on a [Meadow.Foundation.Graphics.MicroLayout.DisplayScreen](../Meadow.Foundation.Graphics.MicroLayout/DisplayScreen)."
---
# Class ControlsCollection
Represents a collection of display controls on a [Meadow.Foundation.Graphics.MicroLayout.DisplayScreen](../Meadow.Foundation.Graphics.MicroLayout/DisplayScreen).

###### **Assembly**: MicroLayout.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/ControlsCollection.cs#L9)
```csharp title="Declaration"
public sealed class ControlsCollection : IEnumerable<IControl>, IEnumerable
```
**Implements:**  
`System.Collections.Generic.IEnumerable<Meadow.Foundation.Graphics.MicroLayout.IControl>`, `System.Collections.IEnumerable`

## Properties
### this[int]
Gets a control from the Controls collection by index
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/ControlsCollection.cs#L33)
```csharp title="Declaration"
public IControl this[int index] { get; }
```
### Count
Gets the number of display controls in the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/ControlsCollection.cs#L53)
```csharp title="Declaration"
public int Count { get; }
```
## Methods
### Clear()
Removes all display controls from the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/ControlsCollection.cs#L41)
```csharp title="Declaration"
public void Clear()
```
### Add(params IControl[])
Adds one or more display controls to the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/ControlsCollection.cs#L59)
```csharp title="Declaration"
public void Add(params IControl[] controls)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Foundation.Graphics.MicroLayout.IControl[]` | *controls* | The display controls to add. |

### GetEnumerator()
Returns an enumerator that iterates through the collection of display controls.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Graphics.MicroLayout/Driver/ControlsCollection.cs#L84)
```csharp title="Declaration"
public IEnumerator<IControl> GetEnumerator()
```

##### Returns

`System.Collections.Generic.IEnumerator<Meadow.Foundation.Graphics.MicroLayout.IControl>`: An enumerator that can be used to iterate through the collection.
## Implements

* `System.Collections.Generic.IEnumerable<Meadow.Foundation.Graphics.MicroLayout.IControl>`
* `System.Collections.IEnumerable`
