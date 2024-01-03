---
title: Class MaxBotix
sidebar_label: MaxBotix
description: "Represents the MaxBotix series of distance sensors"
---
# Class MaxBotix
Represents the MaxBotix series of distance sensors

###### **Assembly**: MaxBotix.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.MaxBotix/Driver/MaxBotix.Serial.cs#L8)
```csharp title="Declaration"
public class MaxBotix : ByteCommsSensorBase<Length>, IObservable<IChangeResult<Length>>, IRangeFinder, ISamplingSensor<Length>, ISensor<Length>, ISensor, ISamplingSensor, IDisposable, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`) -> [Meadow.Foundation.ByteCommsSensorBase&lt;UNIT&gt;](../Meadow.Foundation/ByteCommsSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Length>>`, `Meadow.Peripherals.Sensors.Distance.IRangeFinder`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Length>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Length>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`, `Meadow.Hardware.II2cPeripheral`

## Properties
### Distance
Distance from sensor to object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.MaxBotix/Driver/MaxBotix.cs#L16)
```csharp title="Declaration"
public Length? Distance { get; protected set; }
```
### VCC
voltage common collector (VCC) typically 3.3V
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.MaxBotix/Driver/MaxBotix.cs#L21)
```csharp title="Declaration"
public double VCC { get; set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.MaxBotix/Driver/MaxBotix.cs#L26)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.MaxBotix/Driver/MaxBotix.I2c.cs#L12)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Methods
### MeasureDistance()
Start a distance measurement
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.MaxBotix/Driver/MaxBotix.cs#L41)
```csharp title="Declaration"
public void MeasureDistance()
```
### ReadSensor()
Read the distance from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.MaxBotix/Driver/MaxBotix.cs#L51)
```csharp title="Declaration"
protected override Task<Length> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Length>`

##### Exceptions

`System.NotImplementedException`  

### StartUpdating(TimeSpan?)
Start updating distances
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.MaxBotix/Driver/MaxBotix.cs#L66)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* |

### StopUpdating()
Stop sampling
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.MaxBotix/Driver/MaxBotix.cs#L93)
```csharp title="Declaration"
public override void StopUpdating()
```
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.MaxBotix/Driver/MaxBotix.cs#L128)
```csharp title="Declaration"
public override void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.MaxBotix/Driver/MaxBotix.cs#L139)
```csharp title="Declaration"
protected override void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Length>>`
* `Meadow.Peripherals.Sensors.Distance.IRangeFinder`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Length>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Length>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `System.IDisposable`
* `Meadow.Hardware.II2cPeripheral`
