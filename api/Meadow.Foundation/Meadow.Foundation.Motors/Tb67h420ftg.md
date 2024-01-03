---
title: Class Tb67h420ftg
sidebar_label: Tb67h420ftg
description: "The TB67H420FTG is a brushed DC motor driver that has a dual H-Bridge
motor driver built in, along with over current protection (and notification).

With the ability to drive up to `50V` at `9A`, it's a very powerful driver.
It can also be put into single H-Bridge mode in which two motors are driven
in sync, or one motor is driven with both outputs, allowing twice the power."
---
# Class Tb67h420ftg
The TB67H420FTG is a brushed DC motor driver that has a dual H-Bridge
motor driver built in, along with over current protection (and notification).

With the ability to drive up to `50V` at `9A`, it's a very powerful driver.
It can also be put into single H-Bridge mode in which two motors are driven
in sync, or one motor is driven with both outputs, allowing twice the power.

###### **Assembly**: Tb67h420ftg.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.Tb67h420ftg/Driver/Tb67h420ftg.MotorOvercurrentEventArgs.cs#L4)
```csharp title="Declaration"
public class Tb67h420ftg
```
## Properties
### Motor1
Motor 1
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.Tb67h420ftg/Driver/Tb67h420ftg.cs#L45)
```csharp title="Declaration"
public HBridgeMotor Motor1 { get; protected set; }
```
### Motor2
Motor 2
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.Tb67h420ftg/Driver/Tb67h420ftg.cs#L50)
```csharp title="Declaration"
public HBridgeMotor? Motor2 { get; protected set; }
```
## Fields
### hbridgeMode
H-bridge mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.Tb67h420ftg/Driver/Tb67h420ftg.cs#L40)
```csharp title="Declaration"
protected Tb67h420ftg.HBridgeMode hbridgeMode
```
