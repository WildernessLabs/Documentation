---
title: Interface ICounter
sidebar_label: ICounter
description: Abstraction for Counter devices
slug: /docs/api/Meadow/Meadow.Hardware/ICounter
---
# Interface ICounter
Abstraction for Counter devices

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/ICounter.cs#L6)
```csharp title="Declaration"
public interface ICounter
```
## Properties
### Enabled
Gets or sets the Enabled property
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/ICounter.cs#L11)
```csharp title="Declaration"
bool Enabled { get; set; }
```
### Count
Gets the current Count
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/ICounter.cs#L15)
```csharp title="Declaration"
ulong Count { get; }
```
## Methods
### Reset()
Resets the Count to zero
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/ICounter.cs#L19)
```csharp title="Declaration"
void Reset()
```
