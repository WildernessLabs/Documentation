---
title: Class NumericBase
sidebar_label: NumericBase
description: "Represents a base Numeric input type"
---
# Class NumericBase
Represents a base Numeric input type

###### **Assembly**: TextDisplayMenu.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/NumericBase.cs#L8)
```csharp title="Declaration"
public abstract class NumericBase : InputBase, IMenuInputItem, IPage
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Displays.UI.InputTypes.InputBase](../Meadow.Foundation.Displays.UI.InputTypes/InputBase)

**Derived:**  
[Meadow.Foundation.Displays.UI.InputTypes.Age](../Meadow.Foundation.Displays.UI.InputTypes/Age), [Meadow.Foundation.Displays.UI.InputTypes.Numerical](../Meadow.Foundation.Displays.UI.InputTypes/Numerical), [Meadow.Foundation.Displays.UI.InputTypes.Temperature](../Meadow.Foundation.Displays.UI.InputTypes/Temperature)

**Implements:**  
[Meadow.Foundation.Displays.UI.IMenuInputItem](../Meadow.Foundation.Displays.UI/IMenuInputItem), [Meadow.Foundation.Displays.UI.IPage](../Meadow.Foundation.Displays.UI/IPage)

## Methods
### GetInput(string, object)
Get the input
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/NumericBase.cs#L58)
```csharp title="Declaration"
public override void GetInput(string itemID, object currentValue)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *itemID* | The item id |
| `System.Object` | *currentValue* | The current value |


##### Exceptions

`System.InvalidOperationException`  
Throws if not initialized
### Previous()
Send a Previous input to the item
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/NumericBase.cs#L78)
```csharp title="Declaration"
public override bool Previous()
```

##### Returns

`System.Boolean`: true### Next()
Send a Next input to the item
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/NumericBase.cs#L98)
```csharp title="Declaration"
public override bool Next()
```

##### Returns

`System.Boolean`: true### Select()
Send a Select input to the item
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/NumericBase.cs#L117)
```csharp title="Declaration"
public override bool Select()
```

##### Returns

`System.Boolean`: true### Back()
Send a Back input to the item
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/NumericBase.cs#L134)
```csharp title="Declaration"
public override bool Back()
```

##### Returns

`System.Boolean`: true### ParseValue(object)
Parse a value for the item
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/NumericBase.cs#L151)
```csharp title="Declaration"
protected override void ParseValue(object value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *value* | The string value as an object |

## Events
### ValueChanged
Raised when the numeric value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/NumericBase.cs#L20)
```csharp title="Declaration"
public override event ValueChangedHandler ValueChanged
```
##### Event Type
[Meadow.Foundation.Displays.UI.ValueChangedHandler](../Meadow.Foundation.Displays.UI/ValueChangedHandler)

## Implements

* [Meadow.Foundation.Displays.UI.IMenuInputItem](../Meadow.Foundation.Displays.UI/IMenuInputItem)
* [Meadow.Foundation.Displays.UI.IPage](../Meadow.Foundation.Displays.UI/IPage)
