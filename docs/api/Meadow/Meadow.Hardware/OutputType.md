---
title: Enum OutputType
sidebar_label: OutputType
description: Describes the output configuration for a GPIO.
slug: /docs/api/Meadow/Meadow.Hardware/OutputType
---
# Enum OutputType
Describes the output configuration for a GPIO.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/OutputType.cs#L6)
```csharp title="Declaration"
public enum OutputType
```
## Fields
### PushPull
GPIO Output is configured as Push Pull. When in _Push-Pull_ mode the
MCU can actively drive the port either `HIGH` (`3.3V`) or `LOW`
(`0V`), by utilizing two switches internally, requiring no
external components.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/OutputType.cs#L14)
```csharp title="Declaration"
PushPull = 0
```
### OpenDrain
GPIO Output is configured as Open Drain. When in _Open-Drain_ mode,
the MCU port utilizes only one switch internally, and can only
actively drive the port `LOW`. So an external pull-up resistor
connected to the `3V3` rail is required to be able to set a logical
`HIGH` level. `OpenDrain` is provided largely as a legacy feature
and is hardly used anymore.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/OutputType.cs#L23)
```csharp title="Declaration"
OpenDrain = 1
```
