---
title: Enum ErrorConditions
sidebar_label: ErrorConditions
description: Represents various error conditions for a motor or electronic system.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.MotorControllers.StepperOnline/ErrorConditions
---
# Enum ErrorConditions
Represents various error conditions for a motor or electronic system.

###### **Assembly**: Motors.StepperOnline.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/ErrorConditions.cs#L9)
```csharp title="Declaration"
[Flags]
public enum ErrorConditions
```
## Fields
### None
No error conditions.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/ErrorConditions.cs#L15)
```csharp title="Declaration"
None = 0
```
### LockedRotor
Indicates a locked rotor condition.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/ErrorConditions.cs#L20)
```csharp title="Declaration"
LockedRotor = 1
```
### OverCurrent
Indicates an overcurrent condition.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/ErrorConditions.cs#L25)
```csharp title="Declaration"
OverCurrent = 2
```
### HallValueAbnormal
Indicates an abnormal Hall sensor value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/ErrorConditions.cs#L30)
```csharp title="Declaration"
HallValueAbnormal = 4
```
### BusVoltageLow
Indicates that the bus voltage is too low.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/ErrorConditions.cs#L35)
```csharp title="Declaration"
BusVoltageLow = 8
```
### BusVoltageHigh
Indicates that the bus voltage is too high.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/ErrorConditions.cs#L40)
```csharp title="Declaration"
BusVoltageHigh = 16
```
### CurrentPeak
Indicates that the current has exceeded the peak limit.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/ErrorConditions.cs#L45)
```csharp title="Declaration"
CurrentPeak = 32
```
