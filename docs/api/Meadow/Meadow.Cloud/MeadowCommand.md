---
title: Class MeadowCommand
sidebar_label: MeadowCommand
description: >-
  Represents a generic command that can be sent to a Meadow device through
  Meadow.Cloud.
slug: /docs/api/Meadow/Meadow.Cloud/MeadowCommand
---
# Class MeadowCommand
Represents a generic command that can be sent to a Meadow device through Meadow.Cloud.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/MeadowCommand.cs#L9)
```csharp title="Declaration"
public class MeadowCommand
```
## Properties
### CommandName
Gets the name of the command.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/MeadowCommand.cs#L41)
```csharp title="Declaration"
public string CommandName { get; }
```
### Arguments
Gets the arguments of the command.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/MeadowCommand.cs#L46)
```csharp title="Declaration"
public IReadOnlyDictionary<string, object> Arguments { get; }
```
