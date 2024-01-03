---
title: Class Hcsr04
sidebar_label: Hcsr04
description: "HCSR04 Distance Sensor - driver not complete"
---
# Class Hcsr04
HCSR04 Distance Sensor - driver not complete

###### **Assembly**: Hcsr04.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04/Driver/Hcsr04.cs#L13)
```csharp title="Declaration"
public class Hcsr04 : SamplingSensorBase<Length>, IObservable<IChangeResult<Length>>, IRangeFinder, ISamplingSensor<Length>, ISensor<Length>, ISensor, ISamplingSensor, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`)

**Derived:**  
[Meadow.Foundation.ICs.IOExpanders.SerialWombatBase.Hcsr04](../Meadow.Foundation.ICs.IOExpanders/SerialWombatBase.Hcsr04)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Length>>`, `Meadow.Peripherals.Sensors.Distance.IRangeFinder`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Length>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Length>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`

## Properties
### Distance
Returns current distance
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04/Driver/Hcsr04.cs#L18)
```csharp title="Declaration"
public Length? Distance { get; protected set; }
```
### MinimumDistance
Minimum valid distance in cm
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04/Driver/Hcsr04.cs#L23)
```csharp title="Declaration"
public double MinimumDistance { get; }
```
### MaximumDistance
Maximum valid distance in cm
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04/Driver/Hcsr04.cs#L28)
```csharp title="Declaration"
public double MaximumDistance { get; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04/Driver/Hcsr04.cs#L43)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Fields
### triggerPort
Port for trigger Pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04/Driver/Hcsr04.cs#L33)
```csharp title="Declaration"
protected IDigitalOutputPort? triggerPort
```
### echoPort
Port for echo Pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04/Driver/Hcsr04.cs#L38)
```csharp title="Declaration"
protected IDigitalInterruptPort? echoPort
```
## Methods
### MeasureDistance()
Sends a trigger signal
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04/Driver/Hcsr04.cs#L86)
```csharp title="Declaration"
public virtual void MeasureDistance()
```
### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04/Driver/Hcsr04.cs#L135)
```csharp title="Declaration"
protected override Task<Length> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Length>`: The latest sensor reading### StartUpdating(TimeSpan?)
Starts continuously sampling the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04/Driver/Hcsr04.cs#L144)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval = null)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* |

### StopUpdating()
Stops sampling the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04/Driver/Hcsr04.cs#L153)
```csharp title="Declaration"
public override void StopUpdating()
```
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04/Driver/Hcsr04.cs#L159)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Hcsr04/Driver/Hcsr04.cs#L169)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
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
