---
title: Class WiiClassicController
sidebar_label: WiiClassicController
description: "Represents a Nintendo Wii I2C Classic Controller"
---
# Class WiiClassicController
Represents a Nintendo Wii I2C Classic Controller

###### **Assembly**: WiiExtensionControllers.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L10)
```csharp title="Declaration"
public class WiiClassicController : WiiClassicControllerBase, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Sensors.Hid.WiiExtensionControllerBase](../Meadow.Foundation.Sensors.Hid/WiiExtensionControllerBase) -> [Meadow.Foundation.Sensors.Hid.WiiClassicControllerBase](../Meadow.Foundation.Sensors.Hid/WiiClassicControllerBase)

**Implements:**  
`Meadow.Hardware.II2cPeripheral`

## Properties
### DPad
D-pad
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L15)
```csharp title="Declaration"
public IDigitalJoystick DPad { get; }
```
### XButton
X Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L20)
```csharp title="Declaration"
public IButton XButton { get; }
```
### YButton
Y Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L24)
```csharp title="Declaration"
public IButton YButton { get; }
```
### AButton
A Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L28)
```csharp title="Declaration"
public IButton AButton { get; }
```
### BButton
B Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L32)
```csharp title="Declaration"
public IButton BButton { get; }
```
### LButton
L Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L37)
```csharp title="Declaration"
public IButton LButton { get; }
```
### RButton
R Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L41)
```csharp title="Declaration"
public IButton RButton { get; }
```
### ZLButton
ZL Button (at bottom of trigger)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L45)
```csharp title="Declaration"
public IButton ZLButton { get; }
```
### ZRButton
ZR Button (at bottom of trigger)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L49)
```csharp title="Declaration"
public IButton ZRButton { get; }
```
### PlusButton
+ Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L54)
```csharp title="Declaration"
public IButton PlusButton { get; }
```
### MinusButton
- Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L58)
```csharp title="Declaration"
public IButton MinusButton { get; }
```
### HomeButton
Home Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L62)
```csharp title="Declaration"
public IButton HomeButton { get; }
```
### LeftAnalogStick
Left analog joystick (6 or 8 bits of precision)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L67)
```csharp title="Declaration"
public IAnalogJoystick LeftAnalogStick { get; }
```
### RightAnalogStick
Right analog joystick (5 or 8 bits of precision)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L72)
```csharp title="Declaration"
public IAnalogJoystick RightAnalogStick { get; }
```
### LeftTrigger
Left analog trigger (5 or 8 bits of precision)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L77)
```csharp title="Declaration"
public IAnalogTrigger LeftTrigger { get; }
```
### RightTrigger
Right analog trigger (5 or 8 bits of precision)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L81)
```csharp title="Declaration"
public IAnalogTrigger RightTrigger { get; }
```
## Methods
### Update()
Get the latest sensor data from the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/WiiClassicController.cs#L101)
```csharp title="Declaration"
public override void Update()
```

## Implements

* `Meadow.Hardware.II2cPeripheral`
