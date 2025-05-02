---
title: Class ThumbJoystick
sidebar_label: ThumbJoystick
description: Represents a ThumbJoystick
slug: >-
  /docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Hid/ThumbJoystick
---
# Class ThumbJoystick
Represents a ThumbJoystick

###### **Assembly**: ThumbJoystick.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.Grove.git/blob/develop/Source/ThumbJoystick/Driver/ThumbJoystick.cs#L10)
```csharp title="Declaration"
public class ThumbJoystick : AnalogJoystick, IObservable<IChangeResult<AnalogJoystickPosition>>, ISamplingSensor<AnalogJoystickPosition>, ISensor<AnalogJoystickPosition>, ISensor, ISamplingSensor, IAnalogJoystick, IDisposable
```
**Inheritance:** `System.Object` -> `Meadow.Foundation.ObservableBase<Meadow.Peripherals.Sensors.Hid.AnalogJoystickPosition>` -> `Meadow.Foundation.SamplingSensorBase<Meadow.Peripherals.Sensors.Hid.AnalogJoystickPosition>` -> `Meadow.Foundation.Sensors.Hid.AnalogJoystick`

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Peripherals.Sensors.Hid.AnalogJoystickPosition>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Peripherals.Sensors.Hid.AnalogJoystickPosition>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Peripherals.Sensors.Hid.AnalogJoystickPosition>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Peripherals.Sensors.Hid.IAnalogJoystick`, `System.IDisposable`


## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Peripherals.Sensors.Hid.AnalogJoystickPosition>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Peripherals.Sensors.Hid.AnalogJoystickPosition>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Peripherals.Sensors.Hid.AnalogJoystickPosition>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Peripherals.Sensors.Hid.IAnalogJoystick`
* `System.IDisposable`
