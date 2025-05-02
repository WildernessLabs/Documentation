---
title: Class Date
sidebar_label: Date
description: Text display menu Date input type
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.UI.InputTypes/Date
---
# Class Date
Text display menu Date input type

###### **Assembly**: TextDisplayMenu.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/InputTypes/Date.cs#L8)
```csharp title="Declaration"
public class Date : InputBase, IMenuInputItem, IPage
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Displays.UI.InputTypes.InputBase](../Meadow.Foundation.Displays.UI.InputTypes/InputBase)

**Implements:**  
[Meadow.Foundation.Displays.UI.IMenuInputItem](../Meadow.Foundation.Displays.UI/IMenuInputItem), [Meadow.Foundation.Displays.UI.IPage](../Meadow.Foundation.Displays.UI/IPage)

## Methods
### GetInput(string, object)
Get input from user
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/InputTypes/Date.cs#L63)
```csharp title="Declaration"
public override void GetInput(string itemID, object currentValue)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *itemID* | id of the menu item |
| `System.Object` | *currentValue* | current value of the menu item |

### Previous()
Send a Previous input to the item
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/InputTypes/Date.cs#L85)
```csharp title="Declaration"
public override bool Previous()
```

##### Returns

`System.Boolean`: true### Next()
Send a Next input to the item
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/InputTypes/Date.cs#L113)
```csharp title="Declaration"
public override bool Next()
```

##### Returns

`System.Boolean`: true### Select()
Send a Select input to the item
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/InputTypes/Date.cs#L127)
```csharp title="Declaration"
public override bool Select()
```

##### Returns

`System.Boolean`: true### Back()
Send a Back input to the item
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/InputTypes/Date.cs#L148)
```csharp title="Declaration"
public override bool Back()
```

##### Returns

`System.Boolean`: true### ParseValue(object)
Parse the current value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/InputTypes/Date.cs#L168)
```csharp title="Declaration"
protected override void ParseValue(object value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *value* | The value to parse as a string |

## Events
### ValueChanged
Raised when the date value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/InputTypes/Date.cs#L16)
```csharp title="Declaration"
public override event ValueChangedHandler ValueChanged
```
##### Event Type
[Meadow.Foundation.Displays.UI.ValueChangedHandler](../Meadow.Foundation.Displays.UI/ValueChangedHandler)

## Implements

* [Meadow.Foundation.Displays.UI.IMenuInputItem](../Meadow.Foundation.Displays.UI/IMenuInputItem)
* [Meadow.Foundation.Displays.UI.IPage](../Meadow.Foundation.Displays.UI/IPage)
