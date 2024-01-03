---
title: Interface IMenuInputItem
sidebar_label: IMenuInputItem
description: "Text display TextDisplayMenu Input abstraction"
---
# Interface IMenuInputItem
Text display TextDisplayMenu Input abstraction

###### **Assembly**: TextDisplayMenu.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/Interfaces/IMenuInputItem.cs#L8)
```csharp title="Declaration"
public interface IMenuInputItem : IPage
```
## Methods
### Init(ITextDisplay)
Initialize
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/Interfaces/IMenuInputItem.cs#L14)
```csharp title="Declaration"
void Init(ITextDisplay display)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.Displays.ITextDisplay` | *display* | The display to render the menu |

### GetInput(string, object)
Get input
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/Interfaces/IMenuInputItem.cs#L21)
```csharp title="Declaration"
void GetInput(string itemID, object currentValue)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *itemID* | Item id |
| `System.Object` | *currentValue* | Current value |

## Events
### ValueChanged
Raised when the value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/Interfaces/IMenuInputItem.cs#L26)
```csharp title="Declaration"
event ValueChangedHandler ValueChanged
```
##### Event Type
[Meadow.Foundation.Displays.UI.ValueChangedHandler](../Meadow.Foundation.Displays.UI/ValueChangedHandler)
