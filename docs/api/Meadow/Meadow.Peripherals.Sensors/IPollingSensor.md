---
title: Interface IPollingSensor
sidebar_label: IPollingSensor
description: Abstraction for a sensor that polls its value
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors/IPollingSensor
---
# Interface IPollingSensor
Abstraction for a sensor that polls its value

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/IPollingSensor.cs#L6)
```csharp title="Declaration"
public interface IPollingSensor : ISamplingSensor
```
## Properties
### SensorMonitor
Gets or sets the monitor responsible for reading the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/IPollingSensor.cs#L11)
```csharp title="Declaration"
ISensorMonitor? SensorMonitor { get; set; }
```
