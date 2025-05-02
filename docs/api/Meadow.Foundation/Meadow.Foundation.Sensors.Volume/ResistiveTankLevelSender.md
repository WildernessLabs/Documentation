---
title: Class ResistiveTankLevelSender
sidebar_label: ResistiveTankLevelSender
description: Represents a generic resistive tank level sender sensor.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Volume/ResistiveTankLevelSender
---
# Class ResistiveTankLevelSender
Represents a generic resistive tank level sender sensor.

###### **Assembly**: ResistiveTankLevelSender.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Volume.ResistiveTankLevelSender/Driver/ResistiveTankLevelSender.cs#L30)
```csharp title="Declaration"
public abstract class ResistiveTankLevelSender : SamplingSensorBase<int>, IObservable<IChangeResult<int>>, ISamplingSensor<int>, ISensor<int>, ISensor, ISamplingSensor, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`)

**Derived:**  
[Meadow.Foundation.Sensors.Volume.ResistiveTankLevelSender_12in_33_240](../Meadow.Foundation.Sensors.Volume/ResistiveTankLevelSender_12in_33_240)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<System.Int32>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.Int32>`, `Meadow.Peripherals.Sensors.ISensor<System.Int32>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`

## Properties
### IsDisposed
Gets a value indicating whether the object is disposed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Volume.ResistiveTankLevelSender/Driver/ResistiveTankLevelSender.cs#L48)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
### ResistanceToFillLevelMap
Gets the mapping of resistance (in ohms) to fill level (in 0-100 percent).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Volume.ResistiveTankLevelSender/Driver/ResistiveTankLevelSender.cs#L56)
```csharp title="Declaration"
protected abstract Dictionary<int, int> ResistanceToFillLevelMap { get; }
```
### FillLevelPercent
Gets the measured fill level percentage.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Volume.ResistiveTankLevelSender/Driver/ResistiveTankLevelSender.cs#L126)
```csharp title="Declaration"
public int FillLevelPercent { get; }
```
## Methods
### ReadSensor()
Read value from sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Volume.ResistiveTankLevelSender/Driver/ResistiveTankLevelSender.cs#L154)
```csharp title="Declaration"
protected override Task<int> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.Int32>`: unitized value### StartUpdating(TimeSpan?)
Starts updating the sensor on the updateInterval frequency specified
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Volume.ResistiveTankLevelSender/Driver/ResistiveTankLevelSender.cs#L160)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* | A TimeSpan that specifies how long to
    wait between readings |

### StopUpdating()
Stops sampling the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Volume.ResistiveTankLevelSender/Driver/ResistiveTankLevelSender.cs#L170)
```csharp title="Declaration"
public override void StopUpdating()
```
### Dispose(bool)

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Volume.ResistiveTankLevelSender/Driver/ResistiveTankLevelSender.cs#L176)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *disposing* |

### Dispose()
Disposes the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Volume.ResistiveTankLevelSender/Driver/ResistiveTankLevelSender.cs#L192)
```csharp title="Declaration"
public void Dispose()
```
## Events
### FillLevelChanged
Occurs when the fill level changes.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Volume.ResistiveTankLevelSender/Driver/ResistiveTankLevelSender.cs#L38)
```csharp title="Declaration"
public event EventHandler<int>? FillLevelChanged
```
##### Event Type
`System.EventHandler<System.Int32>`

## Implements

* `System.IObservable<Meadow.IChangeResult<System.Int32>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.Int32>`
* `Meadow.Peripherals.Sensors.ISensor<System.Int32>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `System.IDisposable`
