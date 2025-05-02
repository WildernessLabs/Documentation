---
title: Interface ISensorMonitor
sidebar_label: ISensorMonitor
description: >-
  Represents a sensor monitor interface for starting and stopping sensor
  sampling.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors/ISensorMonitor
---
# Interface ISensorMonitor
Represents a sensor monitor interface for starting and stopping sensor sampling.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/ISensorMonitor.cs#L8)
```csharp title="Declaration"
public interface ISensorMonitor
```
## Methods
### StartSampling(ISamplingSensor)
Starts sensor sampling.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/ISensorMonitor.cs#L19)
```csharp title="Declaration"
void StartSampling(ISamplingSensor sensor)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Peripherals.Sensors.ISamplingSensor](../Meadow.Peripherals.Sensors/ISamplingSensor) | *sensor* | Sensor to start sampling |

### StopSampling(ISamplingSensor)
Stops sensor sampling.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/ISensorMonitor.cs#L25)
```csharp title="Declaration"
void StopSampling(ISamplingSensor sensor)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Peripherals.Sensors.ISamplingSensor](../Meadow.Peripherals.Sensors/ISamplingSensor) | *sensor* | Sensor to stop sampling |

## Events
### SampleAvailable
Raised when a monitored sensor is read
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/ISensorMonitor.cs#L13)
```csharp title="Declaration"
event EventHandler<object> SampleAvailable
```
##### Event Type
`System.EventHandler<System.Object>`
