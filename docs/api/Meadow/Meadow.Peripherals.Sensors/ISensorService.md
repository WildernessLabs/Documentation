---
title: Interface ISensorService
sidebar_label: ISensorService
description: Represents a sensor service interface for registering sensors.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors/ISensorService
---
# Interface ISensorService
Represents a sensor service interface for registering sensors.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/ISensorService.cs#L8)
```csharp title="Declaration"
public interface ISensorService
```
## Methods
### RegisterSensor(ISensor)
Registers a sampling sensor with the sensor service.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/ISensorService.cs#L14)
```csharp title="Declaration"
void RegisterSensor(ISensor sensor)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Peripherals.Sensors.ISensor](../Meadow.Peripherals.Sensors/ISensor) | *sensor* | The sensor to register. |

### GetSensorsOfType&lt;TSensor&gt;()
Gets all registered sensors of a specified type
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/ISensorService.cs#L20)
```csharp title="Declaration"
IEnumerable<TSensor> GetSensorsOfType<TSensor>() where TSensor : ISensor
```

##### Returns

`System.Collections.Generic.IEnumerable<<TSensor>>`
##### Type Parameters
| Name | Description |
|:--- |:--- |
| `TSensor` | The type of sensor to search for |
### GetSensorsWithData&lt;TUnit&gt;()
Gets all registered sensors that can provide data of a specified unit type
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/ISensorService.cs#L25)
```csharp title="Declaration"
IEnumerable<ISensor> GetSensorsWithData<TUnit>() where TUnit : struct
```

##### Returns

`System.Collections.Generic.IEnumerable<Meadow.Peripherals.Sensors.ISensor>`
##### Type Parameters
| Name | Description |
|:--- |:--- |
| `TUnit` | The unit type of the sensor data to search for |
