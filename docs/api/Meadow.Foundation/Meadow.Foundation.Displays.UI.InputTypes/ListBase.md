---
title: Class ListBase
sidebar_label: ListBase
description: Text display menu base List input type
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.UI.InputTypes/ListBase
---
# Class ListBase
Text display menu base List input type

###### **Assembly**: TextDisplayMenu.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/InputTypes/ListBase.cs#L8)
```csharp title="Declaration"
public abstract class ListBase : InputBase, IMenuInputItem, IPage
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Displays.UI.InputTypes.InputBase](../Meadow.Foundation.Displays.UI.InputTypes/InputBase)

**Derived:**  
[Meadow.Foundation.Displays.UI.InputTypes.Boolean](../Meadow.Foundation.Displays.UI.InputTypes/Boolean), [Meadow.Foundation.Displays.UI.InputTypes.OnOff](../Meadow.Foundation.Displays.UI.InputTypes/OnOff)

**Implements:**  
[Meadow.Foundation.Displays.UI.IMenuInputItem](../Meadow.Foundation.Displays.UI/IMenuInputItem), [Meadow.Foundation.Displays.UI.IPage](../Meadow.Foundation.Displays.UI/IPage)

## Properties
### OutputDisplay
The output display text
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/InputTypes/ListBase.cs#L28)
```csharp title="Declaration"
protected string OutputDisplay { get; }
```
## Fields
### choices
List of choices for the input
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/InputTypes/ListBase.cs#L13)
```csharp title="Declaration"
protected string[] choices
```
### selectedIndex
Selected index in the list
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/InputTypes/ListBase.cs#L18)
```csharp title="Declaration"
protected int selectedIndex
```
## Methods
### GetInput(string, object)
Get the input
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/InputTypes/ListBase.cs#L42)
```csharp title="Declaration"
public override void GetInput(string itemID, object currentValue)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *itemID* | Item ID |
| `System.Object` | *currentValue* | Current value |


##### Exceptions

`System.InvalidOperationException`  
Throw if not initialized
### Next()
Scroll to the next item in the list
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/InputTypes/ListBase.cs#L60)
```csharp title="Declaration"
public override bool Next()
```

##### Returns

`System.Boolean`: true### Select()
Select the current item in the list
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/InputTypes/ListBase.cs#L74)
```csharp title="Declaration"
public override bool Select()
```

##### Returns

`System.Boolean`: true### Back()
Select the current item in the list
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/InputTypes/ListBase.cs#L84)
```csharp title="Declaration"
public override bool Back()
```

##### Returns

`System.Boolean`: true### Previous()
Scroll to the previous item in the list
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/InputTypes/ListBase.cs#L94)
```csharp title="Declaration"
public override bool Previous()
```

##### Returns

`System.Boolean`: true### ParseValue(object)
Parse a value for the item
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/InputTypes/ListBase.cs#L108)
```csharp title="Declaration"
protected override void ParseValue(object value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *value* | The string value as an object |

## Events
### ValueChanged
The value changed event handler
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/InputTypes/ListBase.cs#L23)
```csharp title="Declaration"
public override event ValueChangedHandler ValueChanged
```
##### Event Type
[Meadow.Foundation.Displays.UI.ValueChangedHandler](../Meadow.Foundation.Displays.UI/ValueChangedHandler)

## Implements

* [Meadow.Foundation.Displays.UI.IMenuInputItem](../Meadow.Foundation.Displays.UI/IMenuInputItem)
* [Meadow.Foundation.Displays.UI.IPage](../Meadow.Foundation.Displays.UI/IPage)
