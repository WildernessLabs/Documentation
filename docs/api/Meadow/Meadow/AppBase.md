---
title: Class AppBase
sidebar_label: AppBase
description: >-
  Provides a base implementation for the Meadow App. Use this class for Meadow
  applications to get strongly-typed access to the current device information.
slug: /docs/api/Meadow/Meadow/AppBase
---
# Class AppBase
Provides a base implementation for the Meadow App. Use this
class for Meadow applications to get strongly-typed access to the current
device information.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Bases/App.cs#L13)
```csharp title="Declaration"
public abstract class AppBase : IApp
```
**Derived:**  
[Meadow.App&lt;D&gt;](../Meadow/App`D`), [Meadow.App&lt;D, P, H&gt;](../Meadow/App`D,%20P,%20H`)

**Implements:**  
[Meadow.IApp](../Meadow/IApp)

## Properties
### CancellationToken
A cancellation token that is canceled when the application is signaled to shut down
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Bases/App.cs#L18)
```csharp title="Declaration"
public CancellationToken CancellationToken { get; }
```
### Settings
Settings parsed from the app.config.yaml at startup
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Bases/App.cs#L21)
```csharp title="Declaration"
public Dictionary<string, string> Settings { get; }
```
### Abort
The app cancellation token
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Bases/App.cs#L89)
```csharp title="Declaration"
public static CancellationToken Abort { get; protected set; }
```
## Methods
### InvokeOnMainThread(Action&lt;object?&gt;, object?)
Invokes an action in the context of the applications main thread
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Bases/App.cs#L40)
```csharp title="Declaration"
public virtual void InvokeOnMainThread(Action<object?> action, object? state = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Action<System.Object>` | *action* | The action to call |
| `System.Object` | *state* | An optional state object to pass to the Action |

### Run()
Called by MeadowOS when everything is ready for the App to run
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Bases/App.cs#L48)
```csharp title="Declaration"
public virtual Task Run()
```

##### Returns

`System.Threading.Tasks.Task`
### Initialize()
Called by MeadowOS to initialize the App
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Bases/App.cs#L56)
```csharp title="Declaration"
public virtual Task Initialize()
```

##### Returns

`System.Threading.Tasks.Task`
### OnShutdown()
Called when a request to shut down the App occurs
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Bases/App.cs#L62)
```csharp title="Declaration"
public virtual Task OnShutdown()
```

##### Returns

`System.Threading.Tasks.Task`
### OnError(Exception)
Called when the MeadowOS encounters an error
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Bases/App.cs#L68)
```csharp title="Declaration"
public virtual Task OnError(Exception e)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Exception` | *e* | The exception from MeadowOS |

### OnUpdate(Version, out bool)
Called when the application is about to update itself.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Bases/App.cs#L73)
```csharp title="Declaration"
public void OnUpdate(Version newVersion, out bool approveUpdate)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Version` | *newVersion* |
| `System.Boolean` | *approveUpdate* |

### OnUpdateComplete(Version, out bool)
Called when the application has updated itself.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Bases/App.cs#L81)
```csharp title="Declaration"
public void OnUpdateComplete(Version oldVersion, out bool rollbackUpdate)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Version` | *oldVersion* |
| `System.Boolean` | *rollbackUpdate* |

### DisposeAsync()
Virtual method provided for App implementations to clean up resources on Disposal
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Bases/App.cs#L94)
```csharp title="Declaration"
public virtual ValueTask DisposeAsync()
```

##### Returns

`System.Threading.Tasks.ValueTask`

## Implements

* [Meadow.IApp](../Meadow/IApp)
