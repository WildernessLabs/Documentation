---
title: Enum ICoprocessor.CoprocessorResetReason
sidebar_label: ICoprocessor.CoprocessorResetReason
description: Indicate the reason the coprocessor was last restarted.
slug: /docs/api/Meadow/Meadow.Gateways/ICoprocessor.CoprocessorResetReason
---
# Enum ICoprocessor.CoprocessorResetReason
Indicate the reason the coprocessor was last restarted.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/ICoprocessor.cs#L33)
```csharp title="Declaration"
public enum ICoprocessor.CoprocessorResetReason
```
## Fields
### Unknown
Reason not specified or unknown.  Could also indicate that the coprocessor has not started.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/ICoprocessor.cs#L38)
```csharp title="Declaration"
Unknown = 0
```
### PowerOn
Normal power on.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/ICoprocessor.cs#L43)
```csharp title="Declaration"
PowerOn = 1
```
### ExternalGpio
External GPIO has woken the coprocessor from sleep.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/ICoprocessor.cs#L48)
```csharp title="Declaration"
ExternalGpio = 2
```
### Software
Coprocessor firmware requested a reset.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/ICoprocessor.cs#L53)
```csharp title="Declaration"
Software = 3
```
### Panic
Abnormal reset through software error.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/ICoprocessor.cs#L58)
```csharp title="Declaration"
Panic = 4
```
### InterruptWatchdog
Interrupt watchdog has been triggered.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/ICoprocessor.cs#L63)
```csharp title="Declaration"
InterruptWatchdog = 5
```
### TaskWatchdog
Task watchdog has been triggered.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/ICoprocessor.cs#L68)
```csharp title="Declaration"
TaskWatchdog = 6
```
### OtherWatchdog
Some other watchdog was triggered.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/ICoprocessor.cs#L73)
```csharp title="Declaration"
OtherWatchdog = 7
```
### DeepSleep
Exiting from deep sleep.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/ICoprocessor.cs#L78)
```csharp title="Declaration"
DeepSleep = 8
```
### Brownout
Brownout (low power condition).
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/ICoprocessor.cs#L83)
```csharp title="Declaration"
Brownout = 9
```
### SDIO
SDIO requested a reset.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/ICoprocessor.cs#L88)
```csharp title="Declaration"
SDIO = 10
```
