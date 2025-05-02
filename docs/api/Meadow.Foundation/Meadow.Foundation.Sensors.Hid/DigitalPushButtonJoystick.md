---
title: Class DigitalPushButtonJoystick
sidebar_label: DigitalPushButtonJoystick
description: >-
  Represents a 4 switch digital joystick / directional pad (D-pad) with a center
  push button
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid/DigitalPushButtonJoystick
---
# Class DigitalPushButtonJoystick
Represents a 4 switch digital joystick / directional pad (D-pad) with a center push button

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/DigitalPushButtonJoystick.cs#L12)
```csharp title="Declaration"
public class DigitalPushButtonJoystick : DigitalJoystick, IDisposable, IDigitalPushButtonJoystick, IDigitalJoystick, IButton, ISensor<bool>, ISensor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Sensors.Hid.DigitalJoystick](../Meadow.Foundation.Sensors.Hid/DigitalJoystick)

**Implements:**  
`System.IDisposable`, `Meadow.Peripherals.Sensors.Hid.IDigitalPushButtonJoystick`, `Meadow.Peripherals.Sensors.Hid.IDigitalJoystick`, `Meadow.Peripherals.Sensors.Buttons.IButton`, `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`, `Meadow.Peripherals.Sensors.ISensor`

## Properties
### LongClickedThreshold
The minimum duration for a long press.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/DigitalPushButtonJoystick.cs#L15)
```csharp title="Declaration"
public TimeSpan LongClickedThreshold { get; set; }
```
### State
Returns the current raw state of the switch. If the switch 
is pressed (connected), returns true, otherwise false.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/DigitalPushButtonJoystick.cs#L18)
```csharp title="Declaration"
public bool State { get; }
```
## Methods
### Read()
Convenience method to get the current sensor reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/DigitalPushButtonJoystick.cs#L53)
```csharp title="Declaration"
public Task<bool> Read()
```

##### Returns

`System.Threading.Tasks.Task<System.Boolean>`
## Events
### PressStarted
Raised when a press starts (the button is pushed down; circuit is closed).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/DigitalPushButtonJoystick.cs#L21)
```csharp title="Declaration"
public event EventHandler? PressStarted
```
##### Event Type
`System.EventHandler`
### PressEnded
Raised when a press ends (the button is released; circuit is opened).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/DigitalPushButtonJoystick.cs#L23)
```csharp title="Declaration"
public event EventHandler? PressEnded
```
##### Event Type
`System.EventHandler`
### Clicked
Raised when the button circuit is re-opened after it has been closed (at the end of a “press”.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/DigitalPushButtonJoystick.cs#L25)
```csharp title="Declaration"
public event EventHandler? Clicked
```
##### Event Type
`System.EventHandler`
### LongClicked
Raised when the button circuit is pressed for at least LongClickedThreshold.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/DigitalPushButtonJoystick.cs#L27)
```csharp title="Declaration"
public event EventHandler? LongClicked
```
##### Event Type
`System.EventHandler`

## Implements

* `System.IDisposable`
* `Meadow.Peripherals.Sensors.Hid.IDigitalPushButtonJoystick`
* `Meadow.Peripherals.Sensors.Hid.IDigitalJoystick`
* `Meadow.Peripherals.Sensors.Buttons.IButton`
* `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`
* `Meadow.Peripherals.Sensors.ISensor`
