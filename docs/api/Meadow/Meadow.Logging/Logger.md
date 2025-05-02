---
title: Class Logger
sidebar_label: Logger
description: Class encapsulating logging providers and functions
slug: /docs/api/Meadow/Meadow.Logging/Logger
---
# Class Logger
Class encapsulating logging providers and functions

###### **Assembly**: Meadow.Logging.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Logging.git/blob/develop/Source/Meadow.Logging/lib/Logger.cs#L9)
```csharp title="Declaration"
public class Logger
```
## Properties
### GroupsToShow
Gets the list of groups used for displaying log messages.
###### [View Source](https://github.com/WildernessLabs/Meadow.Logging.git/blob/develop/Source/Meadow.Logging/lib/Logger.cs#L52)
```csharp title="Declaration"
public List<string> GroupsToShow { get; }
```
### ShowGroup
Gets or sets a value indicating whether to show message groups in log messages
###### [View Source](https://github.com/WildernessLabs/Meadow.Logging.git/blob/develop/Source/Meadow.Logging/lib/Logger.cs#L57)
```csharp title="Declaration"
public bool ShowGroup { get; set; }
```
### ShowTicks
Gets or sets a value indicating whether to show ticks in log messages
###### [View Source](https://github.com/WildernessLabs/Meadow.Logging.git/blob/develop/Source/Meadow.Logging/lib/Logger.cs#L62)
```csharp title="Declaration"
public bool ShowTicks { get; set; }
```
### LogLevel
Gets or sets the current log level
###### [View Source](https://github.com/WildernessLabs/Meadow.Logging.git/blob/develop/Source/Meadow.Logging/lib/Logger.cs#L67)
```csharp title="Declaration"
public LogLevel LogLevel { get; set; }
```
## Methods
### AddProvider(ILogProvider)
Adds an ILogProvider to the providers collection
###### [View Source](https://github.com/WildernessLabs/Meadow.Logging.git/blob/develop/Source/Meadow.Logging/lib/Logger.cs#L104)
```csharp title="Declaration"
public void AddProvider(ILogProvider provider)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Logging.ILogProvider](../Meadow.Logging/ILogProvider) | *provider* |

### RemoveProvider(ILogProvider)
Adds an ILogProvider to the providers collection
###### [View Source](https://github.com/WildernessLabs/Meadow.Logging.git/blob/develop/Source/Meadow.Logging/lib/Logger.cs#L116)
```csharp title="Declaration"
public bool RemoveProvider(ILogProvider provider)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Logging.ILogProvider](../Meadow.Logging/ILogProvider) | *provider* |

### Trace(string, string?)
Sends a Trace-level message to all ILogProviders
###### [View Source](https://github.com/WildernessLabs/Meadow.Logging.git/blob/develop/Source/Meadow.Logging/lib/Logger.cs#L129)
```csharp title="Declaration"
public void Trace(string message, string? messageGroup = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *message* | The message to send to Providers |
| `System.String` | *messageGroup* | The (optional) message group |

### TraceIf(bool, string, string?)
Conditionally sends a Trace-level message to all ILogProviders
###### [View Source](https://github.com/WildernessLabs/Meadow.Logging.git/blob/develop/Source/Meadow.Logging/lib/Logger.cs#L140)
```csharp title="Declaration"
public void TraceIf(bool condition, string message, string? messageGroup = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *condition* | The message will be sent to Providers only when this is true |
| `System.String` | *message* | The message to send to Providers |
| `System.String` | *messageGroup* | The (optional) message group |

### Debug(string, string?)
Sends a Debug-level message to all ILogProviders
###### [View Source](https://github.com/WildernessLabs/Meadow.Logging.git/blob/develop/Source/Meadow.Logging/lib/Logger.cs#L150)
```csharp title="Declaration"
public void Debug(string message, string? messageGroup = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *message* | The message to send to Providers |
| `System.String` | *messageGroup* | The (optional) message group |

### DebugIf(bool, string, string?)
Conditionally sends a Debug-level message to all ILogProviders
###### [View Source](https://github.com/WildernessLabs/Meadow.Logging.git/blob/develop/Source/Meadow.Logging/lib/Logger.cs#L161)
```csharp title="Declaration"
public void DebugIf(bool condition, string message, string? messageGroup = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *condition* | The message will be sent to Providers only when this is true |
| `System.String` | *message* | The message to send to Providers |
| `System.String` | *messageGroup* | The (optional) message group |

### Info(string, string?)
Sends an Info-level message to all ILogProviders
###### [View Source](https://github.com/WildernessLabs/Meadow.Logging.git/blob/develop/Source/Meadow.Logging/lib/Logger.cs#L171)
```csharp title="Declaration"
public void Info(string message, string? messageGroup = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *message* | The message to send to Providers |
| `System.String` | *messageGroup* | The (optional) message group |

### InfoIf(bool, string, string?)
Conditionally sends a Info-level message to all ILogProviders
###### [View Source](https://github.com/WildernessLabs/Meadow.Logging.git/blob/develop/Source/Meadow.Logging/lib/Logger.cs#L182)
```csharp title="Declaration"
public void InfoIf(bool condition, string message, string? messageGroup = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *condition* | The message will be sent to Providers only when this is true |
| `System.String` | *message* | The message to send to Providers |
| `System.String` | *messageGroup* | The (optional) message group |

### Warn(string, string?)
Sends a Warn-level message to all ILogProviders
###### [View Source](https://github.com/WildernessLabs/Meadow.Logging.git/blob/develop/Source/Meadow.Logging/lib/Logger.cs#L192)
```csharp title="Declaration"
public void Warn(string message, string? messageGroup = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *message* | The message to send to Providers |
| `System.String` | *messageGroup* | The (optional) message group |

### WarnIf(bool, string, string?)
Conditionally sends a Warn-level message to all ILogProviders
###### [View Source](https://github.com/WildernessLabs/Meadow.Logging.git/blob/develop/Source/Meadow.Logging/lib/Logger.cs#L203)
```csharp title="Declaration"
public void WarnIf(bool condition, string message, string? messageGroup = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *condition* | The message will be sent to Providers only when this is true |
| `System.String` | *message* | The message to send to Providers |
| `System.String` | *messageGroup* | The (optional) message group |

### Error(Exception, string?)
Sends a Error-level message to all ILogProviders
###### [View Source](https://github.com/WildernessLabs/Meadow.Logging.git/blob/develop/Source/Meadow.Logging/lib/Logger.cs#L213)
```csharp title="Declaration"
public void Error(Exception exception, string? messageGroup = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Exception` | *exception* | The exception to translate and send to Providers |
| `System.String` | *messageGroup* | The (optional) message group |

### Error(string, string?)
Sends a Error-level message to all ILogProviders
###### [View Source](https://github.com/WildernessLabs/Meadow.Logging.git/blob/develop/Source/Meadow.Logging/lib/Logger.cs#L223)
```csharp title="Declaration"
public void Error(string message, string? messageGroup = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *message* | The message to send to Providers |
| `System.String` | *messageGroup* | The (optional) message group |

### ErrorIf(bool, string, string?)
Conditionally sends a Error-level message to all ILogProviders
###### [View Source](https://github.com/WildernessLabs/Meadow.Logging.git/blob/develop/Source/Meadow.Logging/lib/Logger.cs#L234)
```csharp title="Declaration"
public void ErrorIf(bool condition, string message, string? messageGroup = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *condition* | The message will be sent to Providers only when this is true |
| `System.String` | *message* | The message to send to Providers |
| `System.String` | *messageGroup* | The (optional) message group |

