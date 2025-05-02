---
title: Class DebugLogProvider
sidebar_label: DebugLogProvider
description: A Log Provider that outputs to the System Diagnostics Debug output
slug: /docs/api/Meadow/Meadow.Logging/DebugLogProvider
---
# Class DebugLogProvider
A Log Provider that outputs to the System Diagnostics Debug output

###### **Assembly**: Meadow.Logging.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Logging.git/blob/develop/Source/Meadow.Logging/lib/DebugLogProvider.cs#L6)
```csharp title="Declaration"
public class DebugLogProvider : ILogProvider
```
**Implements:**  
[Meadow.Logging.ILogProvider](../Meadow.Logging/ILogProvider)

## Methods
### Log(LogLevel, string, string?)
Called when the associated Logger has a message call
###### [View Source](https://github.com/WildernessLabs/Meadow.Logging.git/blob/develop/Source/Meadow.Logging/lib/DebugLogProvider.cs#L9)
```csharp title="Declaration"
public void Log(LogLevel level, string message, string? messageGroup)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Logging.LogLevel](../Meadow.Logging/LogLevel) | *level* | The LogLevel for the message |
| `System.String` | *message* | The message to log |
| `System.String` | *messageGroup* | The (optional) log message groupd |


## Implements

* [Meadow.Logging.ILogProvider](../Meadow.Logging/ILogProvider)
