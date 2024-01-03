---
title: Class SnesClassicController
sidebar_label: SnesClassicController
description: "Represents a Nintendo SNES Classic Mini controller"
---
# Class SnesClassicController
Represents a Nintendo SNES Classic Mini controller

###### **Assembly**: WiiExtensionControllers.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/SnesClassicController.cs#L10)
```csharp title="Declaration"
public class SnesClassicController : WiiClassicControllerBase, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Sensors.Hid.WiiExtensionControllerBase](../Meadow.Foundation.Sensors.Hid/WiiExtensionControllerBase) -> [Meadow.Foundation.Sensors.Hid.WiiClassicControllerBase](../Meadow.Foundation.Sensors.Hid/WiiClassicControllerBase)

**Implements:**  
`Meadow.Hardware.II2cPeripheral`

## Properties
### DPad
D-pad
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/SnesClassicController.cs#L15)
```csharp title="Declaration"
public IDigitalJoystick DPad { get; }
```
### XButton
X Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/SnesClassicController.cs#L20)
```csharp title="Declaration"
public IButton XButton { get; }
```
### YButton
Y Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/SnesClassicController.cs#L24)
```csharp title="Declaration"
public IButton YButton { get; }
```
### AButton
A Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/SnesClassicController.cs#L28)
```csharp title="Declaration"
public IButton AButton { get; }
```
### BButton
B Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/SnesClassicController.cs#L32)
```csharp title="Declaration"
public IButton BButton { get; }
```
### LButton
L Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/SnesClassicController.cs#L37)
```csharp title="Declaration"
public IButton LButton { get; }
```
### RButton
R Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/SnesClassicController.cs#L41)
```csharp title="Declaration"
public IButton RButton { get; }
```
### StartButton
+ Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/SnesClassicController.cs#L46)
```csharp title="Declaration"
public IButton StartButton { get; }
```
### SelectButton
- Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/SnesClassicController.cs#L50)
```csharp title="Declaration"
public IButton SelectButton { get; }
```
## Methods
### Update()
Get the latest sensor data from the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/SnesClassicController.cs#L63)
```csharp title="Declaration"
public override void Update()
```

## Implements

* `Meadow.Hardware.II2cPeripheral`
