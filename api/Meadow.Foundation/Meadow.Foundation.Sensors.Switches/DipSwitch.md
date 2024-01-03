---
title: Class DipSwitch
sidebar_label: DipSwitch
description: "Represents a DIP-switch wired in a bus configuration, in which all switches 
are terminated to the same ground/common or high pin."
---
# Class DipSwitch
Represents a DIP-switch wired in a bus configuration, in which all switches 
are terminated to the same ground/common or high pin.

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Switches/DipSwitch.cs#L11)
```csharp title="Declaration"
public class DipSwitch
```
## Properties
### this[int]
Returns the ISwitch at the specified index.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Switches/DipSwitch.cs#L18)
```csharp title="Declaration"
public ISwitch this[int i] { get; }
```
### Switches
Returns the switch array.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Switches/DipSwitch.cs#L23)
```csharp title="Declaration"
public ISwitch[] Switches { get; }
```
## Methods
### HandleSwitchChanged(int)
Event handler when switch value has been changed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Switches/DipSwitch.cs#L80)
```csharp title="Declaration"
protected void HandleSwitchChanged(int switchNumber)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *switchNumber* |

## Events
### Changed
Raised when one of the switches is switched on or off.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Switches/DipSwitch.cs#L28)
```csharp title="Declaration"
public event ArrayEventHandler Changed
```
##### Event Type
[Meadow.Foundation.ArrayEventHandler](../Meadow.Foundation/ArrayEventHandler)
