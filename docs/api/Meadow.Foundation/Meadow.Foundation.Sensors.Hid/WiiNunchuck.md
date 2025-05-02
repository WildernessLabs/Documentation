---
title: Class WiiNunchuck
sidebar_label: WiiNunchuck
description: Represents a Nintendo Wii I2C Nunchuck
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid/WiiNunchuck
---
# Class WiiNunchuck
Represents a Nintendo Wii I2C Nunchuck

###### **Assembly**: WiiExtensionControllers.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiNunchuck.cs#L11)
```csharp title="Declaration"
public class WiiNunchuck : WiiExtensionControllerBase, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Sensors.Hid.WiiExtensionControllerBase](../Meadow.Foundation.Sensors.Hid/WiiExtensionControllerBase)

**Implements:**  
`Meadow.Hardware.II2cPeripheral`

## Properties
### CButton
C Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiNunchuck.cs#L16)
```csharp title="Declaration"
public IButton CButton { get; }
```
### ZButton
Z Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiNunchuck.cs#L20)
```csharp title="Declaration"
public IButton ZButton { get; }
```
### AnalogStick
Analog joystick (8 bits of precision)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiNunchuck.cs#L25)
```csharp title="Declaration"
public IAnalogJoystick AnalogStick { get; }
```
### Acceleration3D
Acceleration data from accelerometer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiNunchuck.cs#L30)
```csharp title="Declaration"
public Acceleration3D? Acceleration3D { get; protected set; }
```
## Methods
### Update()
Get the latest sensor data from the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiNunchuck.cs#L54)
```csharp title="Declaration"
public override void Update()
```

## Implements

* `Meadow.Hardware.II2cPeripheral`
