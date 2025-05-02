---
title: Interface IAnalogTrigger
sidebar_label: IAnalogTrigger
description: Interface describing a variable button trigger
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Hid/IAnalogTrigger
---
# Interface IAnalogTrigger
Interface describing a variable button trigger

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Hid/IAnalogTrigger.cs#L8)
```csharp title="Declaration"
public interface IAnalogTrigger
```
## Properties
### Position
Position of analog trigger
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Hid/IAnalogTrigger.cs#L13)
```csharp title="Declaration"
double? Position { get; }
```
## Events
### Updated
Raised when a new reading has been made.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Hid/IAnalogTrigger.cs#L18)
```csharp title="Declaration"
event EventHandler<ChangeResult<double>> Updated
```
##### Event Type
`System.EventHandler<Meadow.ChangeResult<System.Double>>`
