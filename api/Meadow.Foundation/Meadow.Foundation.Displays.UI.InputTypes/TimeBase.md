---
title: Class TimeBase
sidebar_label: TimeBase
description: "A base time input type"
---
# Class TimeBase
A base time input type

###### **Assembly**: TextDisplayMenu.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/TimeBase.cs#L8)
```csharp title="Declaration"
public abstract class TimeBase : InputBase, IMenuInputItem, IPage
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Displays.UI.InputTypes.InputBase](../Meadow.Foundation.Displays.UI.InputTypes/InputBase)

**Derived:**  
[Meadow.Foundation.Displays.UI.InputTypes.Time](../Meadow.Foundation.Displays.UI.InputTypes/Time), [Meadow.Foundation.Displays.UI.InputTypes.TimeDetailed](../Meadow.Foundation.Displays.UI.InputTypes/TimeDetailed), [Meadow.Foundation.Displays.UI.InputTypes.TimeShort](../Meadow.Foundation.Displays.UI.InputTypes/TimeShort)

**Implements:**  
[Meadow.Foundation.Displays.UI.IMenuInputItem](../Meadow.Foundation.Displays.UI/IMenuInputItem), [Meadow.Foundation.Displays.UI.IPage](../Meadow.Foundation.Displays.UI/IPage)

## Fields
### timeParts
Value for each time part
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/TimeBase.cs#L13)
```csharp title="Declaration"
protected int[] timeParts
```
### position
The current position
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/TimeBase.cs#L18)
```csharp title="Declaration"
protected byte position
```
### timeMode
The time mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/TimeBase.cs#L23)
```csharp title="Declaration"
protected TimeBase.TimeMode timeMode
```
## Methods
### GetInput(string, object)
Get input from user
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/TimeBase.cs#L105)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/TimeBase.cs#L127)
```csharp title="Declaration"
public override bool Previous()
```

##### Returns

`System.Boolean`: true### Next()
Send a Next input to the item
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/TimeBase.cs#L153)
```csharp title="Declaration"
public override bool Next()
```

##### Returns

`System.Boolean`: true### Select()
Send a Select input to the item
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/TimeBase.cs#L167)
```csharp title="Declaration"
public override bool Select()
```

##### Returns

`System.Boolean`: true### Back()
Send a Back input to the item
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/TimeBase.cs#L187)
```csharp title="Declaration"
public override bool Back()
```

##### Returns

`System.Boolean`: true### ParseValue(object)
Parse a value for the item
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/TimeBase.cs#L220)
```csharp title="Declaration"
protected override void ParseValue(object value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *value* | The TimeSpan value as an object |

## Events
### ValueChanged
Raised if the input value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/TimeBase.cs#L29)
```csharp title="Declaration"
public override event ValueChangedHandler ValueChanged
```
##### Event Type
[Meadow.Foundation.Displays.UI.ValueChangedHandler](../Meadow.Foundation.Displays.UI/ValueChangedHandler)

## Implements

* [Meadow.Foundation.Displays.UI.IMenuInputItem](../Meadow.Foundation.Displays.UI/IMenuInputItem)
* [Meadow.Foundation.Displays.UI.IPage](../Meadow.Foundation.Displays.UI/IPage)
