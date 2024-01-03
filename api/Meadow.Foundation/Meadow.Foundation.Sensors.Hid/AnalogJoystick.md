---
title: Class AnalogJoystick
sidebar_label: AnalogJoystick
description: "2-axis analog joystick"
---
# Class AnalogJoystick
2-axis analog joystick

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/AnalogJoystick.cs#L14)
```csharp title="Declaration"
public class AnalogJoystick : SamplingSensorBase<AnalogJoystickPosition>, IObservable<IChangeResult<AnalogJoystickPosition>>, ISamplingSensor<AnalogJoystickPosition>, ISensor<AnalogJoystickPosition>, ISensor, ISamplingSensor, IAnalogJoystick, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Peripherals.Sensors.Hid.AnalogJoystickPosition>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Peripherals.Sensors.Hid.AnalogJoystickPosition>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Peripherals.Sensors.Hid.AnalogJoystickPosition>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Peripherals.Sensors.Hid.IAnalogJoystick`, `System.IDisposable`

## Properties
### HorizontalInputPort
Analog port connected to horizontal joystick pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/AnalogJoystick.cs#L30)
```csharp title="Declaration"
protected IAnalogInputPort HorizontalInputPort { get; set; }
```
### VerticalInputPort
Analog port connected to vertical joystick pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/AnalogJoystick.cs#L35)
```csharp title="Declaration"
protected IAnalogInputPort VerticalInputPort { get; set; }
```
### IsHorizontalInverted
Is the horizontal / x-axis inverted
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/AnalogJoystick.cs#L40)
```csharp title="Declaration"
public bool IsHorizontalInverted { get; set; }
```
### IsVerticalInverted
Is the vertical / y-axis inverted
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/AnalogJoystick.cs#L45)
```csharp title="Declaration"
public bool IsVerticalInverted { get; set; }
```
### Position
Current position of analog joystick
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/AnalogJoystick.cs#L50)
```csharp title="Declaration"
public AnalogJoystickPosition? Position { get; protected set; }
```
### DigitalPosition
Digital position of joystick
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/AnalogJoystick.cs#L55)
```csharp title="Declaration"
public DigitalJoystickPosition? DigitalPosition { get; }
```
### Calibration
Calibration for 2-axis analog joystick
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/AnalogJoystick.cs#L60)
```csharp title="Declaration"
public AnalogJoystick.JoystickCalibration Calibration { get; protected set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/AnalogJoystick.cs#L65)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Fields
### sampleCount
Number of samples used to calculate position
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/AnalogJoystick.cs#L20)
```csharp title="Declaration"
protected int sampleCount
```
### sampleIntervalMs
Interval between samples
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/AnalogJoystick.cs#L25)
```csharp title="Declaration"
protected int sampleIntervalMs
```
## Methods
### SetCenterPosition()
sets the current position as the center position and
saves to the calibration.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/AnalogJoystick.cs#L214)
```csharp title="Declaration"
public Task SetCenterPosition()
```

##### Returns

`System.Threading.Tasks.Task`
### GetDigitalJoystickPosition()
Translates an analog position into a digital position, taking into
account the calibration information.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/AnalogJoystick.cs#L230)
```csharp title="Declaration"
protected DigitalJoystickPosition GetDigitalJoystickPosition()
```

##### Returns

`Meadow.Peripherals.Sensors.Hid.DigitalJoystickPosition`: The digital joystick position as DigitalJoystickPosition### ReadSensor()
Convenience method to get the current temperature. For frequent reads, use
StartSampling() and StopSampling() in conjunction with the SampleBuffer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/AnalogJoystick.cs#L285)
```csharp title="Declaration"
protected override Task<AnalogJoystickPosition> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Peripherals.Sensors.Hid.AnalogJoystickPosition>`
### StartUpdating(TimeSpan?)
Starts continuously sampling the sensor.

This method also starts raising `Changed` events and IObservable
subscribers getting notified. Use the `readIntervalDuration` parameter
to specify how often events and notifications are raised/sent.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/AnalogJoystick.cs#L315)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* | A `TimeSpan` that specifies how long to
     wait between readings. This value influences how often `*Updated`
     events are raised and `IObservable` consumers are notified.
     The default is 5 seconds. |

### StopUpdating()
Stops sampling the joystick position
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/AnalogJoystick.cs#L334)
```csharp title="Declaration"
public override void StopUpdating()
```
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/AnalogJoystick.cs#L388)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/AnalogJoystick.cs#L398)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Peripherals.Sensors.Hid.AnalogJoystickPosition>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Peripherals.Sensors.Hid.AnalogJoystickPosition>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Peripherals.Sensors.Hid.AnalogJoystickPosition>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Peripherals.Sensors.Hid.IAnalogJoystick`
* `System.IDisposable`
