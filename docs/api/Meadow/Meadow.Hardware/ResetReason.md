---
title: Enum ResetReason
sidebar_label: ResetReason
description: Reasons a platform might have been reset
slug: /docs/api/Meadow/Meadow.Hardware/ResetReason
---
# Enum ResetReason
Reasons a platform might have been reset

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ResetReason.cs#L8)
```csharp title="Declaration"
[Flags]
public enum ResetReason
```
## Fields
### Unknown
The reset reason is not determined
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ResetReason.cs#L14)
```csharp title="Declaration"
Unknown = 0
```
### InsufficientPower
Power was too low to maintain operation (brown out)
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ResetReason.cs#L18)
```csharp title="Declaration"
InsufficientPower = 2
```
### HardwareReset
Reset pin/interrupt detected
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ResetReason.cs#L22)
```csharp title="Declaration"
HardwareReset = 4
```
### PowerOnReset
Normal power-on reset
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ResetReason.cs#L26)
```csharp title="Declaration"
PowerOnReset = 8
```
### SoftwareReset
Software-triggered reset
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ResetReason.cs#L30)
```csharp title="Declaration"
SoftwareReset = 16
```
### IndependentWatchdog
An independent watchdog timer expired
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ResetReason.cs#L34)
```csharp title="Declaration"
IndependentWatchdog = 32
```
### WindowWatchdog
An window watchdog timer expired
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ResetReason.cs#L38)
```csharp title="Declaration"
WindowWatchdog = 64
```
### LowPower
A reset due to low power
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Enums/ResetReason.cs#L42)
```csharp title="Declaration"
LowPower = 128
```
