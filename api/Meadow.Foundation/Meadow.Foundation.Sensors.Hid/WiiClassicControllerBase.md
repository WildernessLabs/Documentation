---
title: Class WiiClassicControllerBase
sidebar_label: WiiClassicControllerBase
description: "Abstract base class that represents 
Nintendo Wiimote I2C extension controllers 
Based on the Wii classic controller including:
Classic Pro, Snes classic, and Nes classic controllers"
---
# Class WiiClassicControllerBase
Abstract base class that represents 
Nintendo Wiimote I2C extension controllers 
Based on the Wii classic controller including:
Classic Pro, Snes classic, and Nes classic controllers

###### **Assembly**: WiiExtensionControllers.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiClassicControllerBase.cs#L11)
```csharp title="Declaration"
public abstract class WiiClassicControllerBase : WiiExtensionControllerBase, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Sensors.Hid.WiiExtensionControllerBase](../Meadow.Foundation.Sensors.Hid/WiiExtensionControllerBase)

**Derived:**  
[Meadow.Foundation.Sensors.Hid.NesClassicController](../Meadow.Foundation.Sensors.Hid/NesClassicController), [Meadow.Foundation.Sensors.Hid.SnesClassicController](../Meadow.Foundation.Sensors.Hid/SnesClassicController), [Meadow.Foundation.Sensors.Hid.WiiClassicController](../Meadow.Foundation.Sensors.Hid/WiiClassicController), [Meadow.Foundation.Sensors.Hid.WiiClassicControllerPro](../Meadow.Foundation.Sensors.Hid/WiiClassicControllerPro)

**Implements:**  
`Meadow.Hardware.II2cPeripheral`

## Properties
### LeftJoystickX
Get the x-axis value for the left analog joystick (classic and classic pro)
0-63 in normal mode, 0-255 is high resolution mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiClassicControllerBase.cs#L17)
```csharp title="Declaration"
protected byte LeftJoystickX { get; }
```
### LeftJoystickY
Get the y-axis value for the left analog joystick (classic and classic pro)
0-63 in normal mode, 0-255 is high resolution mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiClassicControllerBase.cs#L22)
```csharp title="Declaration"
protected byte LeftJoystickY { get; }
```
### RightJoystickX
Get the x-axis value for the right analog joystick (classic and classic pro)
0-31 in normal mode, 0-255 is high resolution mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiClassicControllerBase.cs#L28)
```csharp title="Declaration"
protected byte RightJoystickX { get; }
```
### RightJoystickY
Get the y-axis value for the right analog joystick (classic and classic pro)
0-31 in normal mode, 0-255 is high resolution mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiClassicControllerBase.cs#L34)
```csharp title="Declaration"
protected byte RightJoystickY { get; }
```
### LeftTriggerPosition
Left trigger position (original classic controller only)
0-31 in normal mode, 0-255 is high resolution mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiClassicControllerBase.cs#L40)
```csharp title="Declaration"
protected byte LeftTriggerPosition { get; }
```
### RightTriggerPosition
Right trigger position (original classic controller only)
0-31 in normal mode, 0-255 is high resolution mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiClassicControllerBase.cs#L46)
```csharp title="Declaration"
protected byte RightTriggerPosition { get; }
```
### PlusButtonPressed
Is Plus (Start) button pressed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiClassicControllerBase.cs#L51)
```csharp title="Declaration"
protected bool PlusButtonPressed { get; }
```
### MinusButtonPressed
Is Minus (Select) button pressed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiClassicControllerBase.cs#L55)
```csharp title="Declaration"
protected bool MinusButtonPressed { get; }
```
### HomeButtonPressed
Is Home button pressed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiClassicControllerBase.cs#L59)
```csharp title="Declaration"
protected bool HomeButtonPressed { get; }
```
### LButtonPressed
Is L button pressed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiClassicControllerBase.cs#L64)
```csharp title="Declaration"
protected bool LButtonPressed { get; }
```
### RButtonPressed
Is R button pressed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiClassicControllerBase.cs#L68)
```csharp title="Declaration"
protected bool RButtonPressed { get; }
```
### ZLButtonPressed
Is ZL button pressed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiClassicControllerBase.cs#L72)
```csharp title="Declaration"
protected bool ZLButtonPressed { get; }
```
### ZRButtonPressed
Is ZR button pressed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiClassicControllerBase.cs#L76)
```csharp title="Declaration"
protected bool ZRButtonPressed { get; }
```
### XButtonPressed
Is X button pressed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiClassicControllerBase.cs#L81)
```csharp title="Declaration"
protected bool XButtonPressed { get; }
```
### YButtonPressed
Is Y button pressed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiClassicControllerBase.cs#L85)
```csharp title="Declaration"
protected bool YButtonPressed { get; }
```
### AButtonPressed
Is A button pressed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiClassicControllerBase.cs#L89)
```csharp title="Declaration"
protected bool AButtonPressed { get; }
```
### BButtonPressed
Is B button pressed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiClassicControllerBase.cs#L93)
```csharp title="Declaration"
protected bool BButtonPressed { get; }
```
### DPadLeftPressed
Is D-pad left pressed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiClassicControllerBase.cs#L98)
```csharp title="Declaration"
protected bool DPadLeftPressed { get; }
```
### DPadRightPressed
Is D-pad right pressed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiClassicControllerBase.cs#L102)
```csharp title="Declaration"
protected bool DPadRightPressed { get; }
```
### DPadUpPressed
Is D-pad up pressed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiClassicControllerBase.cs#L106)
```csharp title="Declaration"
protected bool DPadUpPressed { get; }
```
### DPadDownPressed
Is D-pad down pressed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiClassicControllerBase.cs#L110)
```csharp title="Declaration"
protected bool DPadDownPressed { get; }
```
## Fields
### useHighResolutionMode
Use high resolution mode for analog controls (Classic and Classic Pro controllers)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiClassicControllerBase.cs#L115)
```csharp title="Declaration"
protected bool useHighResolutionMode
```
## Methods
### Initialize()
Initialize the extension controller
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.WiiExtensionControllers/Driver/WiiClassicControllerBase.cs#L129)
```csharp title="Declaration"
protected override void Initialize()
```

## Implements

* `Meadow.Hardware.II2cPeripheral`
