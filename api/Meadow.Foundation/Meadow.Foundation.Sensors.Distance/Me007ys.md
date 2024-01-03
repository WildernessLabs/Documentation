---
title: Class Me007ys
sidebar_label: Me007ys
description: "Represents the ME007YS serial distance sensor"
---
# Class Me007ys
Represents the ME007YS serial distance sensor

###### **Assembly**: Me007ys.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Me007ys/Driver/Me007ys.cs#L13)
```csharp title="Declaration"
public class Me007ys : PollingSensorBase<Length>, IObservable<IChangeResult<Length>>, IRangeFinder, ISamplingSensor<Length>, ISensor<Length>, ISensor, ISamplingSensor, ISleepAwarePeripheral, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Length>>`, `Meadow.Peripherals.Sensors.Distance.IRangeFinder`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Length>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Length>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.ISleepAwarePeripheral`, `System.IDisposable`

## Properties
### Distance
Distance from sensor to object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Me007ys/Driver/Me007ys.cs#L18)
```csharp title="Declaration"
public Length? Distance { get; protected set; }
```
### OutOfRangeValue
Value returned when the sensor cannot determine the distance
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Me007ys/Driver/Me007ys.cs#L23)
```csharp title="Declaration"
public Length OutOfRangeValue { get; }
```
### SensorReadTimeOut
The maximum time to wait for a sensor reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Me007ys/Driver/Me007ys.cs#L28)
```csharp title="Declaration"
public TimeSpan SensorReadTimeOut { get; set; }
```
## Methods
### MeasureDistance()
Start a distance measurement
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Me007ys/Driver/Me007ys.cs#L71)
```csharp title="Declaration"
public void MeasureDistance()
```
### Read()
Convenience method to get the current sensor reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Me007ys/Driver/Me007ys.cs#L79)
```csharp title="Declaration"
public override Task<Length> Read()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Length>`
### ReadSensor()
Read the distance from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Me007ys/Driver/Me007ys.cs#L88)
```csharp title="Declaration"
protected override Task<Length> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Length>`
### StartUpdating(TimeSpan?)
Start updating distances
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Me007ys/Driver/Me007ys.cs#L97)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* | The interval used to notify external subscribers |

### StopUpdating()
Stop sampling
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Me007ys/Driver/Me007ys.cs#L108)
```csharp title="Declaration"
public override void StopUpdating()
```
### BeforeSleep(CancellationToken)
Called before the platform goes into Sleep state
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Me007ys/Driver/Me007ys.cs#L184)
```csharp title="Declaration"
public Task BeforeSleep(CancellationToken cancellationToken)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Threading.CancellationToken` | *cancellationToken* |

### AfterWake(CancellationToken)
Called after the platform returns to Wake state
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Me007ys/Driver/Me007ys.cs#L198)
```csharp title="Declaration"
public Task AfterWake(CancellationToken cancellationToken)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Threading.CancellationToken` | *cancellationToken* |

### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Me007ys/Driver/Me007ys.cs#L207)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Me007ys/Driver/Me007ys.cs#L228)
```csharp title="Declaration"
public void Dispose()
```

## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Length>>`
* `Meadow.Peripherals.Sensors.Distance.IRangeFinder`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Length>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Length>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.ISleepAwarePeripheral`
* `System.IDisposable`
