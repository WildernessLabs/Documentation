---
title: Class A02yyuw
sidebar_label: A02yyuw
description: Represents the A02YYUW serial distance sensor
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance/A02yyuw
---
# Class A02yyuw
Represents the A02YYUW serial distance sensor

###### **Assembly**: A02yyuw.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Driver/A02yyuw.cs#L13)
```csharp title="Declaration"
public class A02yyuw : PollingSensorBase<Length>, IObservable<IChangeResult<Length>>, IRangeFinder, ISamplingSensor<Length>, ISensor<Length>, ISensor, ISamplingSensor, ISleepAwarePeripheral, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Length>>`, `Meadow.Peripherals.Sensors.Distance.IRangeFinder`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Length>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Length>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.ISleepAwarePeripheral`, `System.IDisposable`

## Properties
### Distance
Distance from sensor to object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Driver/A02yyuw.cs#L18)
```csharp title="Declaration"
public Length? Distance { get; }
```
### OutOfRangeValue
Value returned when the sensor cannot determine the distance
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Driver/A02yyuw.cs#L23)
```csharp title="Declaration"
public Length OutOfRangeValue { get; }
```
### SensorReadTimeOut
The maximum time to wait for a sensor reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Driver/A02yyuw.cs#L28)
```csharp title="Declaration"
public TimeSpan SensorReadTimeOut { get; set; }
```
## Fields
### BaudRate
The baud rate of the sensor (9600)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Driver/A02yyuw.cs#L35)
```csharp title="Declaration"
public static readonly int BaudRate
```
## Methods
### MeasureDistance()
Start a distance measurement
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Driver/A02yyuw.cs#L72)
```csharp title="Declaration"
public void MeasureDistance()
```
### Read()
Convenience method to get the current sensor reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Driver/A02yyuw.cs#L80)
```csharp title="Declaration"
public override Task<Length> Read()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Length>`
### ReadSensor()
Read the distance from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Driver/A02yyuw.cs#L89)
```csharp title="Declaration"
protected override Task<Length> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Length>`
### StartUpdating(TimeSpan?)
Start updating distances
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Driver/A02yyuw.cs#L98)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* | The interval used to notify external subscribers |

### StopUpdating()
Stop sampling
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Driver/A02yyuw.cs#L109)
```csharp title="Declaration"
public override void StopUpdating()
```
### BeforeSleep(CancellationToken)
Called before the platform goes into Sleep state
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Driver/A02yyuw.cs#L185)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Driver/A02yyuw.cs#L199)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Driver/A02yyuw.cs#L208)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Driver/A02yyuw.cs#L229)
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
