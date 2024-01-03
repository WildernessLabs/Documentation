---
title: Enum CircuitTerminationType
sidebar_label: CircuitTerminationType
description: "Whether the circuit is terminated into the common/ground or a high (3.3V) voltage
source. Used to determine whether to pull the resistor wired to the switch
sensor high or low to close the circuit when the switch is closed.

To disable the resistor, set to Floating."
---
# Enum CircuitTerminationType
Whether the circuit is terminated into the common/ground or a high (3.3V) voltage
source. Used to determine whether to pull the resistor wired to the switch
sensor high or low to close the circuit when the switch is closed.

To disable the resistor, set to Floating.

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/CircuitTerminationType.cs#L10)
```csharp title="Declaration"
public enum CircuitTerminationType
```
## Fields
### CommonGround
Common ground termination
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/CircuitTerminationType.cs#L15)
```csharp title="Declaration"
CommonGround = 0
```
### High
High or VCC termination
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/CircuitTerminationType.cs#L19)
```csharp title="Declaration"
High = 1
```
### Floating
Floating / not terminated
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/CircuitTerminationType.cs#L23)
```csharp title="Declaration"
Floating = 2
```
