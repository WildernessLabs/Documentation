---
title: Interface IApp
sidebar_label: IApp
description: >-
  Contract for Meadow applications. Provides a way for the Meadow OS to
  communicate with Meadow applications when system events are happening.
slug: /docs/api/Meadow/Meadow/IApp
---
# Interface IApp
Contract for Meadow applications. Provides a way for the Meadow OS to
communicate with Meadow applications when system events are happening.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IApp.cs#L12)
```csharp title="Declaration"
public interface IApp
```
## Properties
### Version
The application's version number
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IApp.cs#L24)
```csharp title="Declaration"
public static Version Version { get; }
```
### Settings
Settings parsed from the app.config.yaml at startup
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IApp.cs#L29)
```csharp title="Declaration"
Dictionary<string, string> Settings { get; }
```
### CancellationToken
A cancellation token that is canceled when the application is signaled to shut down
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IApp.cs#L34)
```csharp title="Declaration"
CancellationToken CancellationToken { get; }
```
## Methods
### InvokeOnMainThread(Action&lt;object?&gt;, object?)
Use this method to invoke actions on the application's startup thread
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IApp.cs#L19)
```csharp title="Declaration"
void InvokeOnMainThread(Action<object?> action, object? state = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Action<System.Object>` | *action* | The action to invoke |
| `System.Object` | *state* | Optional state data to pass to the Action |

### Initialize()
Called when the application is being brought up.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IApp.cs#L39)
```csharp title="Declaration"
Task Initialize()
```

##### Returns

`System.Threading.Tasks.Task`
### Run()
The core of the app's work and logic
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IApp.cs#L44)
```csharp title="Declaration"
Task Run()
```

##### Returns

`System.Threading.Tasks.Task`
### OnShutdown()
Called if the app is being brought down.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IApp.cs#L49)
```csharp title="Declaration"
Task OnShutdown()
```

##### Returns

`System.Threading.Tasks.Task`
### OnError(Exception)
Called if a failure occurred while running the app
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IApp.cs#L54)
```csharp title="Declaration"
Task OnError(Exception e)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Exception` | *e* |

### OnUpdate(Version, out bool)
Called when the application is about to update itself.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IApp.cs#L59)
```csharp title="Declaration"
void OnUpdate(Version newVersion, out bool approveUpdate)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Version` | *newVersion* |
| `System.Boolean` | *approveUpdate* |

### OnUpdateComplete(Version, out bool)
Called when the application has updated itself.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IApp.cs#L64)
```csharp title="Declaration"
void OnUpdateComplete(Version oldVersion, out bool rollbackUpdate)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Version` | *oldVersion* |
| `System.Boolean` | *rollbackUpdate* |

