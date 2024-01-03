---
title: Class DigitalJoystick
sidebar_label: DigitalJoystick
description: "Represents a 4 switch digital joystick / directional pad (D-pad)"
---
# Class DigitalJoystick
Represents a 4 switch digital joystick / directional pad (D-pad)

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/DigitalJoystick.cs#L11)
```csharp title="Declaration"
public class DigitalJoystick : IDigitalJoystick, IDisposable
```
**Implements:**  
`Meadow.Peripherals.Sensors.Hid.IDigitalJoystick`, `System.IDisposable`

## Properties
### Position
Get the current digital joystick position
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/DigitalJoystick.cs#L16)
```csharp title="Declaration"
public DigitalJoystickPosition? Position { get; protected set; }
```
### ButtonUp
The PushButton class for the up digital joystick switch
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/DigitalJoystick.cs#L26)
```csharp title="Declaration"
public PushButton ButtonUp { get; protected set; }
```
### ButtonDown
The PushButton class for the down digital joystick switch
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/DigitalJoystick.cs#L30)
```csharp title="Declaration"
public PushButton ButtonDown { get; protected set; }
```
### ButtonLeft
The PushButton class for the left digital joystick switch
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/DigitalJoystick.cs#L34)
```csharp title="Declaration"
public PushButton ButtonLeft { get; protected set; }
```
### ButtonRight
The PushButton class for the right digital joystick switch
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/DigitalJoystick.cs#L38)
```csharp title="Declaration"
public PushButton ButtonRight { get; protected set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/DigitalJoystick.cs#L43)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/DigitalJoystick.cs#L163)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/DigitalJoystick.cs#L173)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |

## Events
### Updated
Raised when the digital joystick position changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/DigitalJoystick.cs#L21)
```csharp title="Declaration"
public event EventHandler<ChangeResult<DigitalJoystickPosition>> Updated
```
##### Event Type
`System.EventHandler<Meadow.ChangeResult<Meadow.Peripherals.Sensors.Hid.DigitalJoystickPosition>>`

## Implements

* `Meadow.Peripherals.Sensors.Hid.IDigitalJoystick`
* `System.IDisposable`
