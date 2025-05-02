---
title: Interface ISamplingSensor<UNIT>
sidebar_label: ISamplingSensor<UNIT>
description: Abstraction for a sampling/observable sensor
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors/ISamplingSensor`UNIT`
---
# Interface ISamplingSensor&lt;UNIT&gt;
Abstraction for a sampling/observable sensor

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/ISamplingSensor.cs#L8)
```csharp title="Declaration"
public interface ISamplingSensor<UNIT> : ISensor<UNIT>, ISensor, ISamplingSensor where UNIT : struct
```
## Events
### Updated
Raised when a change is detected
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/ISamplingSensor.cs#L14)
```csharp title="Declaration"
event EventHandler<IChangeResult<UNIT>> Updated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<<UNIT>>>`
