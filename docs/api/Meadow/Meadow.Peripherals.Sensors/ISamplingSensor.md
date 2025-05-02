---
title: Interface ISamplingSensor
sidebar_label: ISamplingSensor
description: Abstraction for a sampling/observable sensor
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors/ISamplingSensor
---
# Interface ISamplingSensor
Abstraction for a sampling/observable sensor

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/ISamplingSensor.cs#L20)
```csharp title="Declaration"
public interface ISamplingSensor
```
## Properties
### UpdateInterval
A `TimeSpan` that specifies how long to wait between readings
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/ISamplingSensor.cs#L25)
```csharp title="Declaration"
TimeSpan UpdateInterval { get; }
```
### IsSampling
Gets a value indicating whether the sensor is currently sampling
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/ISamplingSensor.cs#L31)
```csharp title="Declaration"
bool IsSampling { get; }
```
## Methods
### StartUpdating(TimeSpan?)
Starts updating the sensor on the updateInterval frequency specified
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/ISamplingSensor.cs#L38)
```csharp title="Declaration"
void StartUpdating(TimeSpan? updateInterval = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* | A TimeSpan that specifies how long to
    wait between readings |

### StopUpdating()
Stops sampling the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/ISamplingSensor.cs#L43)
```csharp title="Declaration"
void StopUpdating()
```
