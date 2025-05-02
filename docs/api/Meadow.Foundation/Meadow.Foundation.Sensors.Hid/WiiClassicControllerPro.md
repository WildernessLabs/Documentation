---
title: Class WiiClassicControllerPro
sidebar_label: WiiClassicControllerPro
description: Represents a Nintendo Wii I2C Classic Controller Pro
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid/WiiClassicControllerPro
---
# Class WiiClassicControllerPro
Represents a Nintendo Wii I2C Classic Controller Pro

###### **Assembly**: WiiExtensionControllers.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicControllerPro.cs#L10)
```csharp title="Declaration"
public class WiiClassicControllerPro : WiiClassicControllerBase, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Sensors.Hid.WiiExtensionControllerBase](../Meadow.Foundation.Sensors.Hid/WiiExtensionControllerBase) -> [Meadow.Foundation.Sensors.Hid.WiiClassicControllerBase](../Meadow.Foundation.Sensors.Hid/WiiClassicControllerBase)

**Implements:**  
`Meadow.Hardware.II2cPeripheral`

## Properties
### DPad
D-pad
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicControllerPro.cs#L15)
```csharp title="Declaration"
public IDigitalJoystick DPad { get; }
```
### XButton
X Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicControllerPro.cs#L20)
```csharp title="Declaration"
public IButton XButton { get; }
```
### YButton
Y Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicControllerPro.cs#L24)
```csharp title="Declaration"
public IButton YButton { get; }
```
### AButton
A Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicControllerPro.cs#L28)
```csharp title="Declaration"
public IButton AButton { get; }
```
### BButton
B Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicControllerPro.cs#L32)
```csharp title="Declaration"
public IButton BButton { get; }
```
### LButton
L Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicControllerPro.cs#L37)
```csharp title="Declaration"
public IButton LButton { get; }
```
### RButton
R Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicControllerPro.cs#L41)
```csharp title="Declaration"
public IButton RButton { get; }
```
### ZLButton
ZL Button (at bottom of trigger)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicControllerPro.cs#L45)
```csharp title="Declaration"
public IButton ZLButton { get; }
```
### ZRButton
ZR Button (at bottom of trigger)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicControllerPro.cs#L49)
```csharp title="Declaration"
public IButton ZRButton { get; }
```
### PlusButton
+ Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicControllerPro.cs#L54)
```csharp title="Declaration"
public IButton PlusButton { get; }
```
### MinusButton
- Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicControllerPro.cs#L58)
```csharp title="Declaration"
public IButton MinusButton { get; }
```
### HomeButton
Home Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicControllerPro.cs#L62)
```csharp title="Declaration"
public IButton HomeButton { get; }
```
### LeftAnalogStick
Left analog joystick (6 or 8 bits of precision)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicControllerPro.cs#L67)
```csharp title="Declaration"
public IAnalogJoystick LeftAnalogStick { get; }
```
### RightAnalogStick
Right analog joystick (5 or 8 bits of precision)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicControllerPro.cs#L72)
```csharp title="Declaration"
public IAnalogJoystick RightAnalogStick { get; }
```
## Methods
### Update()
Get the latest sensor data from the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicControllerPro.cs#L90)
```csharp title="Declaration"
public override void Update()
```

## Implements

* `Meadow.Hardware.II2cPeripheral`
