---
title: Enum WakeSource
sidebar_label: WakeSource
description: The source/reason for a device wake event
slug: /docs/api/Meadow/Meadow.Hardware/WakeSource
---
# Enum WakeSource
The source/reason for a device wake event

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/WakeSource.cs#L6)
```csharp title="Declaration"
public enum WakeSource
```
## Fields
### Unknown
The reason for wake in undetermined.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/WakeSource.cs#L14)
```csharp title="Declaration"
Unknown = 0
```
### Timer
The device has resumed due to an elapsed timer
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/WakeSource.cs#L18)
```csharp title="Declaration"
Timer = 1
```
### Interrupt
The device has resumed due to an interrupt
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/WakeSource.cs#L22)
```csharp title="Declaration"
Interrupt = 2
```
