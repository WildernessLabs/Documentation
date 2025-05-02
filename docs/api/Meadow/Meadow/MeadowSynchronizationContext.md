---
title: Class MeadowSynchronizationContext
sidebar_label: MeadowSynchronizationContext
description: A SynchronizationContext for Meadow devices
slug: /docs/api/Meadow/Meadow/MeadowSynchronizationContext
---
# Class MeadowSynchronizationContext
A SynchronizationContext for Meadow devices

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MeadowSynchronizationContext.cs#L9)
```csharp title="Declaration"
public class MeadowSynchronizationContext : SynchronizationContext
```
**Inheritance:** `System.Object` -> `System.Threading.SynchronizationContext`

## Methods
### Post(SendOrPostCallback, object)
When overridden in a derived class, dispatches an asynchronous message to a synchronization context.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MeadowSynchronizationContext.cs#L12)
```csharp title="Declaration"
public override void Post(SendOrPostCallback action, object state)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Threading.SendOrPostCallback` | *action* |  |
| `System.Object` | *state* | The object passed to the delegate. |

### CreateCopy()
When overridden in a derived class, creates a copy of the synchronization context.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MeadowSynchronizationContext.cs#L32)
```csharp title="Declaration"
public override SynchronizationContext CreateCopy()
```

##### Returns

`System.Threading.SynchronizationContext`: A new `System.Threading.SynchronizationContext` object.### Send(SendOrPostCallback, object)
When overridden in a derived class, dispatches a synchronous message to a synchronization context.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MeadowSynchronizationContext.cs#L38)
```csharp title="Declaration"
public override void Send(SendOrPostCallback d, object state)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Threading.SendOrPostCallback` | *d* | The `System.Threading.SendOrPostCallback` delegate to call. |
| `System.Object` | *state* | The object passed to the delegate. |


##### Exceptions

`System.NotSupportedException`  
The method was called in a Windows Store app. The implementation of `System.Threading.SynchronizationContext` for Windows Store apps does not support the `System.Threading.SynchronizationContext.Send(System.Threading.SendOrPostCallback%2cSystem.Object)` method.
### OperationStarted()
When overridden in a derived class, responds to the notification that an operation has started.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MeadowSynchronizationContext.cs#L44)
```csharp title="Declaration"
public override void OperationStarted()
```
### OperationCompleted()
When overridden in a derived class, responds to the notification that an operation has completed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MeadowSynchronizationContext.cs#L50)
```csharp title="Declaration"
public override void OperationCompleted()
```
