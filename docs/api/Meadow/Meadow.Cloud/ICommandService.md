---
title: Interface ICommandService
sidebar_label: ICommandService
description: Service responsible for subscribing and unsubscribing to Meadow commands.
slug: /docs/api/Meadow/Meadow.Cloud/ICommandService
---
# Interface ICommandService
Service responsible for subscribing and unsubscribing to Meadow commands.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/ICommandService.cs#L8)
```csharp title="Declaration"
public interface ICommandService
```
## Methods
### Subscribe(Action&lt;MeadowCommand&gt;)
Subscribes an action to handle a generic Meadow command.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/ICommandService.cs#L16)
```csharp title="Declaration"
void Subscribe(Action<MeadowCommand> action)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Action<Meadow.Cloud.MeadowCommand>` | *action* | The action to perform when any Meadow command is received. |

### Subscribe&lt;T&gt;(Action&lt;T&gt;)
Subscribes an action to handle a Meadow command of type T.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/ICommandService.cs#L32)
```csharp title="Declaration"
void Subscribe<T>(Action<T> action) where T : IMeadowCommand, new()
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Action<<T>>` | *action* | The action to perform when a Meadow command with a command name that matches
the name of type T is received. |

##### Type Parameters
| Name | Description |
|:--- |:--- |
| `T` | Type of the meadow command. |
### Unsubscribe&lt;T&gt;()
Unsubscribes an action that handles a Meadow command of type T.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/ICommandService.cs#L38)
```csharp title="Declaration"
void Unsubscribe<T>() where T : IMeadowCommand, new()
```
##### Type Parameters
| Name | Description |
|:--- |:--- |
| `T` | Type of the meadow command. |
### Unsubscribe()
Unsubscribes an action to handle a generic Meadow command.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/ICommandService.cs#L43)
```csharp title="Declaration"
void Unsubscribe()
```
