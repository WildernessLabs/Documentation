---
title: Class NesClassicController
sidebar_label: NesClassicController
description: Represents a Nintendo NES Classic Mini controller
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid/NesClassicController
---
# Class NesClassicController
Represents a Nintendo NES Classic Mini controller

###### **Assembly**: WiiExtensionControllers.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/NesClassicController.cs#L10)
```csharp title="Declaration"
public class NesClassicController : WiiClassicControllerBase, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Sensors.Hid.WiiExtensionControllerBase](../Meadow.Foundation.Sensors.Hid/WiiExtensionControllerBase) -> [Meadow.Foundation.Sensors.Hid.WiiClassicControllerBase](../Meadow.Foundation.Sensors.Hid/WiiClassicControllerBase)

**Implements:**  
`Meadow.Hardware.II2cPeripheral`

## Properties
### DPad
D-pad
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/NesClassicController.cs#L15)
```csharp title="Declaration"
public IDigitalJoystick DPad { get; }
```
### AButton
A Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/NesClassicController.cs#L20)
```csharp title="Declaration"
public IButton AButton { get; }
```
### BButton
B Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/NesClassicController.cs#L24)
```csharp title="Declaration"
public IButton BButton { get; }
```
### StartButton
+ Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/NesClassicController.cs#L29)
```csharp title="Declaration"
public IButton StartButton { get; }
```
### SelectButton
- Button
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/NesClassicController.cs#L33)
```csharp title="Declaration"
public IButton SelectButton { get; }
```
## Methods
### Update()
Get the latest sensor data from the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/Drivers/NesClassicController.cs#L46)
```csharp title="Declaration"
public override void Update()
```

## Implements

* `Meadow.Hardware.II2cPeripheral`
