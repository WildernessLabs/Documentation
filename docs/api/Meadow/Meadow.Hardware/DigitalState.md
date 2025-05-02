---
title: Struct DigitalState
sidebar_label: DigitalState
description: Represents a snapshot of the state of a digital port at a given time.
slug: /docs/api/Meadow/Meadow.Hardware/DigitalState
---
# Struct DigitalState
Represents a snapshot of the state of a digital port at a given time.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/DigitalState.cs#L7)
```csharp title="Declaration"
public struct DigitalState
```
## Properties
### State
The state of the port at the time of the event or notification.
`true` == `HIGH`. `false` == `LOW`
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/DigitalState.cs#L13)
```csharp title="Declaration"
public bool State { readonly get; set; }
```
### Time
The time at the event or notification.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/DigitalState.cs#L17)
```csharp title="Declaration"
public DateTime Time { readonly get; set; }
```
