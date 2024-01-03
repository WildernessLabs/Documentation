---
title: Class OnOff
sidebar_label: OnOff
description: "Text display menu on/off input item"
---
# Class OnOff
Text display menu on/off input item

###### **Assembly**: TextDisplayMenu.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/InputTypes/OnOff.cs#L6)
```csharp title="Declaration"
public class OnOff : ListBase, IMenuInputItem, IPage
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Displays.UI.InputTypes.InputBase](../Meadow.Foundation.Displays.UI.InputTypes/InputBase) -> [Meadow.Foundation.Displays.UI.InputTypes.ListBase](../Meadow.Foundation.Displays.UI.InputTypes/ListBase)

**Implements:**  
[Meadow.Foundation.Displays.UI.IMenuInputItem](../Meadow.Foundation.Displays.UI/IMenuInputItem), [Meadow.Foundation.Displays.UI.IPage](../Meadow.Foundation.Displays.UI/IPage)

## Methods
### Next()
Go to the next item in the list
For On/Off this is a toggle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/InputTypes/OnOff.cs#L23)
```csharp title="Declaration"
public override bool Next()
```

##### Returns

`System.Boolean`: true### Previous()
Go to the previous item in the list
For On/Off this is a toggle
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Displays.TextDisplayMenu/Driver/InputTypes/OnOff.cs#L42)
```csharp title="Declaration"
public override bool Previous()
```

##### Returns

`System.Boolean`: true
## Implements

* [Meadow.Foundation.Displays.UI.IMenuInputItem](../Meadow.Foundation.Displays.UI/IMenuInputItem)
* [Meadow.Foundation.Displays.UI.IPage](../Meadow.Foundation.Displays.UI/IPage)
