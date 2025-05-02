---
title: Struct DigitalPortResult
sidebar_label: DigitalPortResult
description: >-
  Represents a change result from a digital port event. Contains a `New` and an
  optional `Old` value which will be `null` on the first result within an event
  series.
slug: /docs/api/Meadow/Meadow.Hardware/DigitalPortResult
---
# Struct DigitalPortResult
Represents a change result from a digital port event. Contains a `New`
and an optional `Old` value which will be `null` on the first result
within an event series.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/DigitalPortResult.cs#L9)
```csharp title="Declaration"
public struct DigitalPortResult : IChangeResult<DigitalState>
```
**Implements:**  
[Meadow.IChangeResult&lt;UNIT&gt;](../Meadow/IChangeResult`UNIT`)

## Properties
### New
The value at the time of this event or notification.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/DigitalPortResult.cs#L12)
```csharp title="Declaration"
public DigitalState New { readonly get; set; }
```
### Old
The previous value before this event or notification, or null if there was no previous value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/DigitalPortResult.cs#L14)
```csharp title="Declaration"
public DigitalState? Old { readonly get; set; }
```
### Delta
The duration of time between the time of this event or notification
and the time of the previous occurrence.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/DigitalPortResult.cs#L30)
```csharp title="Declaration"
public TimeSpan? Delta { get; }
```

## Implements

* [Meadow.IChangeResult&lt;UNIT&gt;](../Meadow/IChangeResult`UNIT`)
