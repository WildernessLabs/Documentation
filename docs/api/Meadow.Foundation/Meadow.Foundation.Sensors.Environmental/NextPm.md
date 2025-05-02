---
title: Class NextPm
sidebar_label: NextPm
description: Represents a TERA Sensor NextPM serial particulate matter sensor
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental/NextPm
---
# Class NextPm
Represents a TERA Sensor NextPM serial particulate matter sensor

###### **Assembly**: NextPm.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.NextPm/Driver/NextPm.Serial.cs#L10)
```csharp title="Declaration"
public class NextPm : PollingSensorBase<(ParticulateReading? reading10s, ParticulateReading? reading1min, ParticulateReading? reading15min, Temperature? temperature, RelativeHumidity? humidity)>, IObservable<IChangeResult<(ParticulateReading? reading10s, ParticulateReading? reading1min, ParticulateReading? reading15min, Temperature? temperature, RelativeHumidity? humidity)>>, ISamplingSensor<(ParticulateReading? reading10s, ParticulateReading? reading1min, ParticulateReading? reading15min, Temperature? temperature, RelativeHumidity? humidity)>, ISensor<(ParticulateReading? reading10s, ParticulateReading? reading1min, ParticulateReading? reading15min, Temperature? temperature, RelativeHumidity? humidity)>, ISensor, ISamplingSensor, IDisposable, IPowerControllablePeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Foundation.Sensors.Environmental.ParticulateReading>,System.Nullable<Meadow.Foundation.Sensors.Environmental.ParticulateReading>,System.Nullable<Meadow.Foundation.Sensors.Environmental.ParticulateReading>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Foundation.Sensors.Environmental.ParticulateReading>,System.Nullable<Meadow.Foundation.Sensors.Environmental.ParticulateReading>,System.Nullable<Meadow.Foundation.Sensors.Environmental.ParticulateReading>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Foundation.Sensors.Environmental.ParticulateReading>,System.Nullable<Meadow.Foundation.Sensors.Environmental.ParticulateReading>,System.Nullable<Meadow.Foundation.Sensors.Environmental.ParticulateReading>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`, `Meadow.IPowerControllablePeripheral`

## Properties
### IsDisposed
Returns true if the object is disposed, otherwise false
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.NextPm/Driver/NextPm.cs#L43)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### GetFirmwareVersion()
Gets the sensor's firmware
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.NextPm/Driver/NextPm.cs#L54)
```csharp title="Declaration"
public Task<short> GetFirmwareVersion()
```

##### Returns

`System.Threading.Tasks.Task<System.Int16>`: The sensor's firmware version### IsAsleep()
Checks to see if the sensor is in Sleep mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.NextPm/Driver/NextPm.cs#L64)
```csharp title="Declaration"
public Task<bool> IsAsleep()
```

##### Returns

`System.Threading.Tasks.Task<System.Boolean>`: &lt;b&gt;True&lt;/b&gt; if the sensor is in Sleep mode### PowerOff()
Puts the device into Sleep mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.NextPm/Driver/NextPm.cs#L73)
```csharp title="Declaration"
public Task PowerOff()
```

##### Returns

`System.Threading.Tasks.Task`
### PowerOn()
Wakes the device from Sleep mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.NextPm/Driver/NextPm.cs#L81)
```csharp title="Declaration"
public Task PowerOn()
```

##### Returns

`System.Threading.Tasks.Task`
### GetFanSpeed()
Gets the fan speed (in percentage)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.NextPm/Driver/NextPm.cs#L89)
```csharp title="Declaration"
public Task<int> GetFanSpeed()
```

##### Returns

`System.Threading.Tasks.Task<System.Int32>`
### SetFanSpeed(int)
Sets the sensor fan speed (in percentage)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.NextPm/Driver/NextPm.cs#L105)
```csharp title="Declaration"
public Task SetFanSpeed(int speedPercent)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *speedPercent* |


##### Exceptions

`System.ArgumentOutOfRangeException`  

### GetTemperatureAndHumidity()
Gets the sensor's current Temperature and Humidity readings
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.NextPm/Driver/NextPm.cs#L120)
```csharp title="Declaration"
public Task<(Temperature temperature, RelativeHumidity humidity)> GetTemperatureAndHumidity()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<Meadow.Units.Temperature,Meadow.Units.RelativeHumidity>>`
### Get10SecondAverageReading()
Gets the average particulate reading for the past 10 seconds
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.NextPm/Driver/NextPm.cs#L136)
```csharp title="Declaration"
public Task<ParticulateReading> Get10SecondAverageReading()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Foundation.Sensors.Environmental.ParticulateReading>`
### Get1MinuteAverageReading()
Gets the average particulate reading for the past 60 seconds
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.NextPm/Driver/NextPm.cs#L145)
```csharp title="Declaration"
public Task<ParticulateReading> Get1MinuteAverageReading()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Foundation.Sensors.Environmental.ParticulateReading>`
### Get15MinuteAverageReading()
Gets the average particulate reading for the past 15 minutes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.NextPm/Driver/NextPm.cs#L154)
```csharp title="Declaration"
public Task<ParticulateReading> Get15MinuteAverageReading()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Foundation.Sensors.Environmental.ParticulateReading>`
### RaiseEventsAndNotify(IChangeResult&lt;(ParticulateReading? reading10s, ParticulateReading? reading1min, ParticulateReading? reading15min, Temperature? temperature, RelativeHumidity? humidity)&gt;)
Notify observers
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.NextPm/Driver/NextPm.cs#L161)
```csharp title="Declaration"
protected override void RaiseEventsAndNotify(IChangeResult<(ParticulateReading? reading10s, ParticulateReading? reading1min, ParticulateReading? reading15min, Temperature? temperature, RelativeHumidity? humidity)> changeResult)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Foundation.Sensors.Environmental.ParticulateReading>,System.Nullable<Meadow.Foundation.Sensors.Environmental.ParticulateReading>,System.Nullable<Meadow.Foundation.Sensors.Environmental.ParticulateReading>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>` | *changeResult* | provides new and old values |

### ReadSensor()
Read value from sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.NextPm/Driver/NextPm.cs#L192)
```csharp title="Declaration"
protected override Task<(ParticulateReading? reading10s, ParticulateReading? reading1min, ParticulateReading? reading15min, Temperature? temperature, RelativeHumidity? humidity)> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<System.Nullable<Meadow.Foundation.Sensors.Environmental.ParticulateReading>,System.Nullable<Meadow.Foundation.Sensors.Environmental.ParticulateReading>,System.Nullable<Meadow.Foundation.Sensors.Environmental.ParticulateReading>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>`: unitized value### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.NextPm/Driver/NextPm.cs#L252)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.NextPm/Driver/NextPm.cs#L265)
```csharp title="Declaration"
public void Dispose()
```
## Events
### Readings10sUpdated
Raised when a new 10-second average reading is taken
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.NextPm/Driver/NextPm.cs#L22)
```csharp title="Declaration"
public event EventHandler<IChangeResult<ParticulateReading>> Readings10sUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Foundation.Sensors.Environmental.ParticulateReading>>`
### Readings1minUpdated
Raised when a new 1-minute average reading is taken
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.NextPm/Driver/NextPm.cs#L26)
```csharp title="Declaration"
public event EventHandler<IChangeResult<ParticulateReading>> Readings1minUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Foundation.Sensors.Environmental.ParticulateReading>>`
### Readings15minUpdated
Raised when a new 15-minute average reading is taken
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.NextPm/Driver/NextPm.cs#L30)
```csharp title="Declaration"
public event EventHandler<IChangeResult<ParticulateReading>> Readings15minUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Foundation.Sensors.Environmental.ParticulateReading>>`
### TemperatureUpdated
Raised when a new temperature reading is taken
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.NextPm/Driver/NextPm.cs#L34)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Temperature>> TemperatureUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Temperature>>`
### HumidityUpdated
Raised when a new humidity reading is taken
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.NextPm/Driver/NextPm.cs#L38)
```csharp title="Declaration"
public event EventHandler<IChangeResult<RelativeHumidity>> HumidityUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.RelativeHumidity>>`

## Implements

* `System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Foundation.Sensors.Environmental.ParticulateReading>,System.Nullable<Meadow.Foundation.Sensors.Environmental.ParticulateReading>,System.Nullable<Meadow.Foundation.Sensors.Environmental.ParticulateReading>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Foundation.Sensors.Environmental.ParticulateReading>,System.Nullable<Meadow.Foundation.Sensors.Environmental.ParticulateReading>,System.Nullable<Meadow.Foundation.Sensors.Environmental.ParticulateReading>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>`
* `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Foundation.Sensors.Environmental.ParticulateReading>,System.Nullable<Meadow.Foundation.Sensors.Environmental.ParticulateReading>,System.Nullable<Meadow.Foundation.Sensors.Environmental.ParticulateReading>,System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.RelativeHumidity>>>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `System.IDisposable`
* `Meadow.IPowerControllablePeripheral`
