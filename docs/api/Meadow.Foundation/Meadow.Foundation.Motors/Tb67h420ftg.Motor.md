---
title: Class Tb67h420ftg.Motor
sidebar_label: Tb67h420ftg.Motor
description: Represents a Tb67h420ftg controlled motor
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Motors/Tb67h420ftg.Motor
---
# Class Tb67h420ftg.Motor
Represents a Tb67h420ftg controlled motor

###### **Assembly**: Tb67h420ftg.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.Tb67h420ftg/Driver/Tb67h420ftg.Motor.cs#L13)
```csharp title="Declaration"
public class Tb67h420ftg.Motor : HBridgeMotor, IDCMotor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Motors.HBridgeMotor](../Meadow.Foundation.Motors/HBridgeMotor)

**Implements:**  
`Meadow.Peripherals.Motors.IDCMotor`

## Methods
### RaiseMotorOvercurrentFault()
Raises the MotorOvercurrentFault event
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.Tb67h420ftg/Driver/Tb67h420ftg.Motor.cs#L46)
```csharp title="Declaration"
protected void RaiseMotorOvercurrentFault()
```
## Events
### MotorOvercurrentFault
Raised when the motors is over current
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.Tb67h420ftg/Driver/Tb67h420ftg.Motor.cs#L18)
```csharp title="Declaration"
public event EventHandler<Tb67h420ftg.MotorOvercurrentEventArgs> MotorOvercurrentFault
```
##### Event Type
`System.EventHandler<Meadow.Foundation.Motors.Tb67h420ftg.MotorOvercurrentEventArgs>`

## Implements

* `Meadow.Peripherals.Motors.IDCMotor`
