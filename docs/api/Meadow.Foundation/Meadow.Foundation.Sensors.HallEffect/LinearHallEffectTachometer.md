---
title: Class LinearHallEffectTachometer
sidebar_label: LinearHallEffectTachometer
description: Represents a Lineal Hall Effect tachometer.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.HallEffect/LinearHallEffectTachometer
---
# Class LinearHallEffectTachometer
Represents a Lineal Hall Effect tachometer.

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/HallEffect/DigitalTachometer.cs#L9)
```csharp title="Declaration"
public class LinearHallEffectTachometer : IDisposable
```
**Implements:**  
`System.IDisposable`

## Properties
### RPMChangeNotificationThreshold
Any changes to the RPMs that are greater than the RPM change
threshold will cause an event to be raised when the instance is
set to update automatically.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/HallEffect/DigitalTachometer.cs#L22)
```csharp title="Declaration"
public float RPMChangeNotificationThreshold { get; set; }
```
### InputPort
Input port for the tachometer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/HallEffect/DigitalTachometer.cs#L27)
```csharp title="Declaration"
protected IDigitalInterruptPort InputPort { get; set; }
```
### NumberOfMagnets
Returns number of magnets of the sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/HallEffect/DigitalTachometer.cs#L32)
```csharp title="Declaration"
public ushort NumberOfMagnets { get; }
```
### RPMs
Returns number of revolutions per minute.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/HallEffect/DigitalTachometer.cs#L37)
```csharp title="Declaration"
public int RPMs { get; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/HallEffect/DigitalTachometer.cs#L62)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Fields
### rpms
Revolutions per minute
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/HallEffect/DigitalTachometer.cs#L42)
```csharp title="Declaration"
protected float rpms
```
### lastNotifiedRPMs
Last notified RPM value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/HallEffect/DigitalTachometer.cs#L47)
```csharp title="Declaration"
protected float lastNotifiedRPMs
```
### revolutionTimeStart
Revolution start time
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/HallEffect/DigitalTachometer.cs#L52)
```csharp title="Declaration"
protected DateTime revolutionTimeStart
```
### numberOfReads
Number of reads
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/HallEffect/DigitalTachometer.cs#L57)
```csharp title="Declaration"
protected ushort numberOfReads
```
## Methods
### OnRaiseRPMChanged()
Notify when RPMs change
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/HallEffect/DigitalTachometer.cs#L151)
```csharp title="Declaration"
protected void OnRaiseRPMChanged()
```
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/HallEffect/DigitalTachometer.cs#L158)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/HallEffect/DigitalTachometer.cs#L168)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |

## Events
### RPMsChanged
Event raised when the RPM change is greater than the 
RPMChangeNotificationThreshold value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/HallEffect/DigitalTachometer.cs#L15)
```csharp title="Declaration"
public event EventHandler<ChangeResult<float>> RPMsChanged
```
##### Event Type
`System.EventHandler<Meadow.ChangeResult<System.Single>>`

## Implements

* `System.IDisposable`
