---
title: Enum TerminationType
sidebar_label: TerminationType
description: >-
  Whether the circuit is terminated into the common/ground or a high (3.3V)
  voltage source. Used to determine whether to pull the resistor wired to the
  switch sensor high or low to close the circuit when the switch is closed.

  To disable the resistor, set to Floating.
slug: /docs/api/Meadow/Meadow.Hardware/TerminationType
---
# Enum TerminationType
Whether the circuit is terminated into the common/ground or a high (3.3V) voltage
source. Used to determine whether to pull the resistor wired to the switch
sensor high or low to close the circuit when the switch is closed.

To disable the resistor, set to Floating.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/TerminationType.cs#L10)
```csharp title="Declaration"
public enum TerminationType
```
## Fields
### CommonGround
Circuit is terminated at ground.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/TerminationType.cs#L15)
```csharp title="Declaration"
CommonGround = 0
```
### High
The circuit is terminated at VCC.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/TerminationType.cs#L19)
```csharp title="Declaration"
High = 1
```
### Floating
The circuit is not terminated.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/TerminationType.cs#L23)
```csharp title="Declaration"
Floating = 2
```
