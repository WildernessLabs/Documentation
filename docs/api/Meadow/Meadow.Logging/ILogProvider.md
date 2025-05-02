---
title: Interface ILogProvider
sidebar_label: ILogProvider
description: Interface for Log Providers
slug: /docs/api/Meadow/Meadow.Logging/ILogProvider
---
# Interface ILogProvider
Interface for Log Providers

###### **Assembly**: Meadow.Logging.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Logging.git/blob/develop/Source/Meadow.Logging/lib/ILogProvider.cs#L6)
```csharp title="Declaration"
public interface ILogProvider
```
## Methods
### Log(LogLevel, string, string?)
Called when the associated Logger has a message call
###### [View Source](https://github.com/WildernessLabs/Meadow.Logging.git/blob/develop/Source/Meadow.Logging/lib/ILogProvider.cs#L14)
```csharp title="Declaration"
void Log(LogLevel level, string message, string? messageGroup)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Logging.LogLevel](../Meadow.Logging/LogLevel) | *level* | The LogLevel for the message |
| `System.String` | *message* | The message to log |
| `System.String` | *messageGroup* | The (optional) log message groupd |

