---
title: Interface IMeadowCloudService
sidebar_label: IMeadowCloudService
description: An abstraction for the Meadow.Cloud service
slug: /docs/api/Meadow/Meadow.Cloud/IMeadowCloudService
---
# Interface IMeadowCloudService
An abstraction for the Meadow.Cloud service

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/IMeadowCloudService.cs#L11)
```csharp title="Declaration"
public interface IMeadowCloudService
```
## Properties
### IsEnabled
Gets the Enabled state for the service
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/IMeadowCloudService.cs#L26)
```csharp title="Declaration"
bool IsEnabled { get; }
```
### ConnectionState
Gets the current connection state for the service
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/IMeadowCloudService.cs#L31)
```csharp title="Declaration"
CloudConnectionState ConnectionState { get; }
```
### QueueCount
Gets the current number of items to be sent.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/IMeadowCloudService.cs#L36)
```csharp title="Declaration"
int QueueCount { get; }
```
## Methods
### SendLog(CloudLog)
Sends a log message to the Meadow.Cloud service
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/IMeadowCloudService.cs#L42)
```csharp title="Declaration"
Task SendLog(CloudLog cloudLog)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Cloud.CloudLog](../Meadow.Cloud/CloudLog) | *cloudLog* | The log entry to send |

### SendEvent(CloudEvent)
Sends a CloudEvent to the Meadow.Cloud service
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/IMeadowCloudService.cs#L48)
```csharp title="Declaration"
Task SendEvent(CloudEvent cloudEvent)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Cloud.CloudEvent](../Meadow.Cloud/CloudEvent) | *cloudEvent* |

### SendEvent(int, string, Dictionary&lt;string, object&gt;)
Sends a CloudEvent to the Meadow.Cloud service
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/IMeadowCloudService.cs#L56)
```csharp title="Declaration"
Task SendEvent(int eventId, string description, Dictionary<string, object> measurements)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *eventId* | id used for a set of events. |
| `System.String` | *description* | Description of the event. |
| `System.Collections.Generic.Dictionary<System.String,System.Object>` | *measurements* | Dynamic payload of measurements to be recorded. |

### SendLog(LogLevel, string)
Sends a log message to the Meadow.Cloud service
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/IMeadowCloudService.cs#L72)
```csharp title="Declaration"
Task SendLog(LogLevel level, string message)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Logging.LogLevel](../Meadow.Logging/LogLevel) | *level* | The log level for the log event |
| `System.String` | *message* | The message property for the log event |

### SendLog(string, string, string?)
Sends a log message to the Meadow.Cloud service
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/IMeadowCloudService.cs#L83)
```csharp title="Declaration"
Task SendLog(string logLevel, string message, string? exceptionMessage = null)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *logLevel* | The log level for the log event |
| `System.String` | *message* | The message property for the log event |
| `System.String` | *exceptionMessage* | Optional exception message data |

### Stop()
Stops the service
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/IMeadowCloudService.cs#L97)
```csharp title="Declaration"
void Stop()
```
## Events
### ErrorOccurred
Event raised when an error in communicating with Meadow Cloud occurrs
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/IMeadowCloudService.cs#L16)
```csharp title="Declaration"
event EventHandler<Exception>? ErrorOccurred
```
##### Event Type
`System.EventHandler<System.Exception>`
### ConnectionStateChanged
Event raised when the cloud connection state changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/IMeadowCloudService.cs#L21)
```csharp title="Declaration"
event EventHandler<CloudConnectionState>? ConnectionStateChanged
```
##### Event Type
`System.EventHandler<Meadow.CloudConnectionState>`
