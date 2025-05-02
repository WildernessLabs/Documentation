---
title: Interface IChangeResult<UNIT>
sidebar_label: IChangeResult<UNIT>
description: Contract for change notifications.
slug: /docs/api/Meadow/Meadow/IChangeResult`UNIT`
---
# Interface IChangeResult&lt;UNIT&gt;
Contract for change notifications.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IChangeResult.cs#L10)
```csharp title="Declaration"
public interface IChangeResult<UNIT> where UNIT : struct
```
## Properties
### New
The value at the time of this event or notification.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IChangeResult.cs#L15)
```csharp title="Declaration"
UNIT New { get; set; }
```
### Old
The previous value before this event or notification, or null if there was no previous value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/IChangeResult.cs#L19)
```csharp title="Declaration"
UNIT? Old { get; set; }
```
