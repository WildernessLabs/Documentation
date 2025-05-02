---
title: Interface IDCMotor
sidebar_label: IDCMotor
description: Interface describing DC motors.
slug: /docs/api/Meadow/Meadow.Peripherals.Motors/IDCMotor
---
# Interface IDCMotor
Interface describing DC motors.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Motors/IDCMotor.cs#L8)
```csharp title="Declaration"
public interface IDCMotor
```
## Properties
### Speed
The speed of the motor from -1 to 1.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Motors/IDCMotor.cs#L14)
```csharp title="Declaration"
[Obsolete("Deprecated, please use `Power`.")]
float Speed { get; set; }
```
### Power
The power applied to the motor, as a percentage between
`-1.0` and `1.0`.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Motors/IDCMotor.cs#L21)
```csharp title="Declaration"
float Power { get; set; }
```
### IsNeutral
When true, the wheels spin "freely"
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Motors/IDCMotor.cs#L26)
```csharp title="Declaration"
bool IsNeutral { get; set; }
```
