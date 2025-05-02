---
title: Struct ChangeResult<UNIT>
sidebar_label: ChangeResult<UNIT>
description: >-
  Represents a change result from an event. Contains a `New` and an optional
  `Old` value which will likely be null on the first result within an event
  series.
slug: /docs/api/Meadow/Meadow/ChangeResult`UNIT`
---
# Struct ChangeResult&lt;UNIT&gt;
Represents a change result from an event. Contains a `New` and an optional
`Old` value which will likely be null on the first result within an event
series.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/ChangeResult.cs#L12)
```csharp title="Declaration"
public struct ChangeResult<UNIT> : IChangeResult<UNIT> where UNIT : struct
```
**Implements:**  
[Meadow.IChangeResult&lt;UNIT&gt;](../Meadow/IChangeResult`UNIT`)

## Properties
### New
The value at the time of this event or notification.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/ChangeResult.cs#L16)
```csharp title="Declaration"
public UNIT New { readonly get; set; }
```
### Old
The previous value before this event or notification, or null if there was no previous value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/ChangeResult.cs#L18)
```csharp title="Declaration"
public UNIT? Old { readonly get; set; }
```

## Implements

* [Meadow.IChangeResult&lt;UNIT&gt;](../Meadow/IChangeResult`UNIT`)
