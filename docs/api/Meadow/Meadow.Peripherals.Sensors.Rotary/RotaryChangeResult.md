---
title: Struct RotaryChangeResult
sidebar_label: RotaryChangeResult
description: Defines the event args for the RotaryTurned event.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Rotary/RotaryChangeResult
---
# Struct RotaryChangeResult
Defines the event args for the RotaryTurned event.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Rotary/RotaryChangeResult.cs#L8)
```csharp title="Declaration"
public struct RotaryChangeResult : IChangeResult<RotationDirection>
```
**Implements:**  
[Meadow.IChangeResult&lt;UNIT&gt;](../Meadow/IChangeResult`UNIT`)

## Properties
### Direction
Gets or sets the rotary's direction. (Obsolete: Please use the `New` property.)
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Rotary/RotaryChangeResult.cs#L13)
```csharp title="Declaration"
[Obsolete("Please use the `New` property.")]
public RotationDirection Direction { get; }
```
### New
Gets or sets the new direction of rotation.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Rotary/RotaryChangeResult.cs#L19)
```csharp title="Declaration"
public RotationDirection New { readonly get; set; }
```
### Old
Gets or sets the previous direction of rotation.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Rotary/RotaryChangeResult.cs#L24)
```csharp title="Declaration"
public RotationDirection? Old { readonly get; set; }
```

## Implements

* [Meadow.IChangeResult&lt;UNIT&gt;](../Meadow/IChangeResult`UNIT`)
