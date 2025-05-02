---
title: Interface ISwitch
sidebar_label: ISwitch
description: Represents a generic switch
slug: /docs/api/Meadow/Meadow.Peripherals.Switches/ISwitch
---
# Interface ISwitch
Represents a generic switch

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Switches/ISwitch.cs#L9)
```csharp title="Declaration"
public interface ISwitch : ISensor<bool>, ISensor
```
## Properties
### IsOn
Describes whether or not the switch circuit is closed/connected (IsOn = true), or open (IsOn = false).
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Switches/ISwitch.cs#L14)
```csharp title="Declaration"
bool IsOn { get; }
```
## Events
### Changed
Raised when the switch circuit is opened or closed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Switches/ISwitch.cs#L19)
```csharp title="Declaration"
event EventHandler Changed
```
##### Event Type
`System.EventHandler`
