---
title: Class InputBase
sidebar_label: InputBase
description: Represents a base input menu item
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.UI.InputTypes/InputBase
---
# Class InputBase
Represents a base input menu item

###### **Assembly**: TextDisplayMenu.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/InputBase.cs#L8)
```csharp title="Declaration"
public abstract class InputBase : IMenuInputItem, IPage
```
**Derived:**  
[Meadow.Foundation.Displays.UI.InputTypes.Date](../Meadow.Foundation.Displays.UI.InputTypes/Date), [Meadow.Foundation.Displays.UI.InputTypes.ListBase](../Meadow.Foundation.Displays.UI.InputTypes/ListBase), [Meadow.Foundation.Displays.UI.InputTypes.NumericBase](../Meadow.Foundation.Displays.UI.InputTypes/NumericBase), [Meadow.Foundation.Displays.UI.InputTypes.TimeBase](../Meadow.Foundation.Displays.UI.InputTypes/TimeBase)

**Implements:**  
[Meadow.Foundation.Displays.UI.IMenuInputItem](../Meadow.Foundation.Displays.UI/IMenuInputItem), [Meadow.Foundation.Displays.UI.IPage](../Meadow.Foundation.Displays.UI/IPage)

## Fields
### display
The ITextDisplay object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/InputBase.cs#L13)
```csharp title="Declaration"
protected ITextDisplay display
```
### isInitialized
Is the item initialized
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/InputBase.cs#L18)
```csharp title="Declaration"
protected bool isInitialized
```
### itemID
The item id
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/InputBase.cs#L23)
```csharp title="Declaration"
protected string itemID
```
## Methods
### GetInput(string, object)
Get input
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/InputBase.cs#L35)
```csharp title="Declaration"
public abstract void GetInput(string itemID, object currentValue)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *itemID* | Item id |
| `System.Object` | *currentValue* | Current value |

### ParseValue(object)
Parse value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/InputBase.cs#L41)
```csharp title="Declaration"
protected abstract void ParseValue(object value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *value* | Value to parse |

### Init(ITextDisplay)
Initialize the input
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/InputBase.cs#L47)
```csharp title="Declaration"
public void Init(ITextDisplay display)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Displays.ITextDisplay` | *display* | The display to show the input item |

### UpdateInputLine(string)
Update the input line on the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/InputBase.cs#L59)
```csharp title="Declaration"
protected void UpdateInputLine(string text)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *text* | The new text to display |

### Previous()
Previous input
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/InputBase.cs#L70)
```csharp title="Declaration"
public abstract bool Previous()
```

##### Returns

`System.Boolean`: True if successful### Next()
Next input
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/InputBase.cs#L76)
```csharp title="Declaration"
public abstract bool Next()
```

##### Returns

`System.Boolean`: True if successful### Select()
Select input
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/InputBase.cs#L82)
```csharp title="Declaration"
public abstract bool Select()
```

##### Returns

`System.Boolean`: True if successful### Back()
Back input
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/InputBase.cs#L88)
```csharp title="Declaration"
public abstract bool Back()
```

##### Returns

`System.Boolean`: True if successful## Events
### ValueChanged
The event raised when the menu item value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/BaseClasses/InputBase.cs#L28)
```csharp title="Declaration"
public abstract event ValueChangedHandler ValueChanged
```
##### Event Type
[Meadow.Foundation.Displays.UI.ValueChangedHandler](../Meadow.Foundation.Displays.UI/ValueChangedHandler)

## Implements

* [Meadow.Foundation.Displays.UI.IMenuInputItem](../Meadow.Foundation.Displays.UI/IMenuInputItem)
* [Meadow.Foundation.Displays.UI.IPage](../Meadow.Foundation.Displays.UI/IPage)
