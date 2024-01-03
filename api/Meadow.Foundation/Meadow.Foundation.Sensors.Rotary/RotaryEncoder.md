---
title: Class RotaryEncoder
sidebar_label: RotaryEncoder
description: "Digital rotary encoder that uses two-bit Gray Code to encode rotation."
---
# Class RotaryEncoder
Digital rotary encoder that uses two-bit Gray Code to encode rotation.

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Rotary/RotaryEncoder.cs#L11)
```csharp title="Declaration"
public class RotaryEncoder : IRotaryEncoder, IDisposable
```
**Derived:**  
[Meadow.Foundation.Sensors.Rotary.RotaryEncoderWithButton](../Meadow.Foundation.Sensors.Rotary/RotaryEncoderWithButton)

**Implements:**  
`Meadow.Peripherals.Sensors.Rotary.IRotaryEncoder`, `System.IDisposable`

## Properties
### APhasePort
Returns the pin connected to the A-phase output on the rotary encoder.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Rotary/RotaryEncoder.cs#L21)
```csharp title="Declaration"
protected IDigitalInterruptPort APhasePort { get; }
```
### BPhasePort
Returns the pin connected to the B-phase output on the rotary encoder.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Rotary/RotaryEncoder.cs#L26)
```csharp title="Declaration"
protected IDigitalInterruptPort BPhasePort { get; }
```
### LastDirectionOfRotation
Gets the last direction of rotation
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Rotary/RotaryEncoder.cs#L31)
```csharp title="Declaration"
public RotationDirection? LastDirectionOfRotation { get; protected set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Rotary/RotaryEncoder.cs#L64)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Rotary/RotaryEncoder.cs#L156)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Rotary/RotaryEncoder.cs#L166)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |

## Events
### Rotated
Raised when the rotary encoder is rotated and returns a RotaryTurnedEventArgs object which describes the direction of rotation.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Rotary/RotaryEncoder.cs#L16)
```csharp title="Declaration"
public event EventHandler<RotaryChangeResult> Rotated
```
##### Event Type
`System.EventHandler<Meadow.Peripherals.Sensors.Rotary.RotaryChangeResult>`

## Implements

* `Meadow.Peripherals.Sensors.Rotary.IRotaryEncoder`
* `System.IDisposable`
