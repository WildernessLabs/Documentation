---
title: Class ConsoleLogProvider
sidebar_label: ConsoleLogProvider
description: A Log Provider that outputs to the System Console
slug: /docs/api/Meadow/Meadow.Logging/ConsoleLogProvider
---
# Class ConsoleLogProvider
A Log Provider that outputs to the System Console

###### **Assembly**: Meadow.Logging.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Logging.git/blob/develop/Source/Meadow.Logging/lib/ConsoleLogProvider.cs#L8)
```csharp title="Declaration"
public class ConsoleLogProvider : ILogProvider
```
**Implements:**  
[Meadow.Logging.ILogProvider](../Meadow.Logging/ILogProvider)

## Properties
### ShowLogLevel
When true, the current log level will be prefixed to all logged messages
###### [View Source](https://github.com/WildernessLabs/Meadow.Logging.git/blob/develop/Source/Meadow.Logging/lib/ConsoleLogProvider.cs#L13)
```csharp title="Declaration"
public bool ShowLogLevel { get; set; }
```
### ShowMessageGroup
When true, the current message group will be prefixed to all logged messages
###### [View Source](https://github.com/WildernessLabs/Meadow.Logging.git/blob/develop/Source/Meadow.Logging/lib/ConsoleLogProvider.cs#L18)
```csharp title="Declaration"
public bool ShowMessageGroup { get; set; }
```
## Methods
### Log(LogLevel, string, string?)
Called when the associated Logger has a message call
###### [View Source](https://github.com/WildernessLabs/Meadow.Logging.git/blob/develop/Source/Meadow.Logging/lib/ConsoleLogProvider.cs#L21)
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
