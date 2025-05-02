---
title: Class CJoystick
sidebar_label: CJoystick
description: Represents a mikroBUS Joystick Click board
slug: >-
  /docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS.Sensors.Hid/CJoystick
---
# Class CJoystick
Represents a mikroBUS Joystick Click board

###### **Assembly**: CJoystick.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.mikroBUS.git/blob/develop/Source/CJoystick/Driver/CJoystick.cs#L14)
```csharp title="Declaration"
public class CJoystick : As5013, IObservable<IChangeResult<AnalogJoystickPosition>>, ISamplingSensor<AnalogJoystickPosition>, ISensor<AnalogJoystickPosition>, ISamplingSensor, IAnalogJoystick, II2cPeripheral, IButton, ISensor<bool>, ISensor
```
**Inheritance:** `System.Object` -> `Meadow.Foundation.ObservableBase<Meadow.Peripherals.Sensors.Hid.AnalogJoystickPosition>` -> `Meadow.Foundation.SamplingSensorBase<Meadow.Peripherals.Sensors.Hid.AnalogJoystickPosition>` -> `Meadow.Foundation.Sensors.Hid.As5013`

**Implements:**  

<details>
<summary>Expand</summary>

`System.IObservable<Meadow.IChangeResult<Meadow.Peripherals.Sensors.Hid.AnalogJoystickPosition>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Peripherals.Sensors.Hid.AnalogJoystickPosition>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Peripherals.Sensors.Hid.AnalogJoystickPosition>`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Peripherals.Sensors.Hid.IAnalogJoystick`, `Meadow.Hardware.II2cPeripheral`, `Meadow.Peripherals.Sensors.Buttons.IButton`, `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`, `Meadow.Peripherals.Sensors.ISensor`
</details>



## Properties
### LongClickedThreshold
The minimum duration for a long press
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.mikroBUS.git/blob/develop/Source/CJoystick/Driver/CJoystick.cs#L21)
```csharp title="Declaration"
public TimeSpan LongClickedThreshold { get; set; }
```
### State
Returns the raw state of the center push button 
If pressed - returns true, otherwise false
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.mikroBUS.git/blob/develop/Source/CJoystick/Driver/CJoystick.cs#L31)
```csharp title="Declaration"
public bool State { get; }
```
## Events
### PressStarted
Raised when a press starts (the button is pushed down; circuit is closed).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.mikroBUS.git/blob/develop/Source/CJoystick/Driver/CJoystick.cs#L36)
```csharp title="Declaration"
public event EventHandler PressStarted
```
##### Event Type
`System.EventHandler`
### PressEnded
Raised when a press ends (the button is released; circuit is opened).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.mikroBUS.git/blob/develop/Source/CJoystick/Driver/CJoystick.cs#L41)
```csharp title="Declaration"
public event EventHandler PressEnded
```
##### Event Type
`System.EventHandler`
### Clicked
Raised when the button circuit is re-opened after it has been closed (at the end of a “press”.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.mikroBUS.git/blob/develop/Source/CJoystick/Driver/CJoystick.cs#L46)
```csharp title="Declaration"
public event EventHandler Clicked
```
##### Event Type
`System.EventHandler`
### LongClicked
Raised when the button circuit is pressed for at least LongClickedThreshold.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.mikroBUS.git/blob/develop/Source/CJoystick/Driver/CJoystick.cs#L51)
```csharp title="Declaration"
public event EventHandler LongClicked
```
##### Event Type
`System.EventHandler`

## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Peripherals.Sensors.Hid.AnalogJoystickPosition>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Peripherals.Sensors.Hid.AnalogJoystickPosition>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Peripherals.Sensors.Hid.AnalogJoystickPosition>`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Peripherals.Sensors.Hid.IAnalogJoystick`
* `Meadow.Hardware.II2cPeripheral`
* `Meadow.Peripherals.Sensors.Buttons.IButton`
* `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`
* `Meadow.Peripherals.Sensors.ISensor`
