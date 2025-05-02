---
title: Class AnalogJoystick.JoystickCalibration
sidebar_label: AnalogJoystick.JoystickCalibration
description: >-
  Calibration class for new sensor types.  This allows new sensors to be used
  with this class.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid/AnalogJoystick.JoystickCalibration
---
# Class AnalogJoystick.JoystickCalibration
Calibration class for new sensor types.  This allows new sensors
to be used with this class.

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/AnalogJoystick.Calibration.cs#L15)
```csharp title="Declaration"
public class AnalogJoystick.JoystickCalibration
```
## Properties
### HorizontalCenter
Voltage at horizontal center
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/AnalogJoystick.Calibration.cs#L20)
```csharp title="Declaration"
public Voltage HorizontalCenter { get; protected set; }
```
### HorizontalMin
Voltage at minimum horizontal position
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/AnalogJoystick.Calibration.cs#L25)
```csharp title="Declaration"
public Voltage HorizontalMin { get; protected set; }
```
### HorizontalMax
Voltage at maximum horizontal position
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/AnalogJoystick.Calibration.cs#L29)
```csharp title="Declaration"
public Voltage HorizontalMax { get; protected set; }
```
### VerticalCenter
Voltage at vertical center
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/AnalogJoystick.Calibration.cs#L34)
```csharp title="Declaration"
public Voltage VerticalCenter { get; protected set; }
```
### VerticalMin
Voltage at vertical minimum position
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/AnalogJoystick.Calibration.cs#L38)
```csharp title="Declaration"
public Voltage VerticalMin { get; protected set; }
```
### VerticalMax
Voltage at vertical maximum position
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/AnalogJoystick.Calibration.cs#L42)
```csharp title="Declaration"
public Voltage VerticalMax { get; protected set; }
```
### DeadZone
Voltage range of center deadzone
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Sensors/Hid/AnalogJoystick.Calibration.cs#L47)
```csharp title="Declaration"
public Voltage DeadZone { get; protected set; }
```
