---
title: Class FilterableChangeObserver<UNIT>
sidebar_label: FilterableChangeObserver<UNIT>
description: >-
  An `IObserver` that handles change notifications and has an optional predicate
  that automatically filters results so only results that match the predicate
  will reach the subscriber.
slug: /docs/api/Meadow/Meadow/FilterableChangeObserver`UNIT`
---
# Class FilterableChangeObserver&lt;UNIT&gt;
An `IObserver` that handles change notifications and has an optional
predicate that automatically filters results so only results that match
the predicate will reach the subscriber.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/FilterableChangeObserver.cs#L12)
```csharp title="Declaration"
public class FilterableChangeObserver<UNIT> : IObserver<IChangeResult<UNIT>> where UNIT : struct
```
**Implements:**  
`System.IObserver<Meadow.IChangeResult<<UNIT>>>`

## Properties
### Handler
Than handler that is called in `OnNext` if the filter is satisfied.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/FilterableChangeObserver.cs#L18)
```csharp title="Declaration"
protected Action<IChangeResult<UNIT>> Handler { get; }
```
### Filter
A filter that specifies whether or not the observer should get notified.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/FilterableChangeObserver.cs#L22)
```csharp title="Declaration"
protected Predicate<IChangeResult<UNIT>>? Filter { get; }
```
## Fields
### lastNotifiedValue
The last notified value. Note that this may differ from the `Old`
property on the result, because this only gets updated if the filter
is satisfied and the result is sent to the observer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/FilterableChangeObserver.cs#L29)
```csharp title="Declaration"
protected UNIT? lastNotifiedValue
```
## Methods
### OnNext(IChangeResult&lt;UNIT&gt;)
Called by an Observable when a change occurs.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/FilterableChangeObserver.cs#L52)
```csharp title="Declaration"
public void OnNext(IChangeResult<UNIT> result)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.IChangeResult&lt;UNIT&gt;](../Meadow/IChangeResult`UNIT`) | *result* |

### OnCompleted()
Notifies the observer that the provider has finished sending push-based notifications.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/FilterableChangeObserver.cs#L76)
```csharp title="Declaration"
public void OnCompleted()
```
### OnError(Exception)
Notifies the observer that the provider has experienced an error condition.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/FilterableChangeObserver.cs#L81)
```csharp title="Declaration"
public void OnError(Exception error)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Exception` | *error* | An object that provides additional information about the error. |


## Implements

* `System.IObserver<Meadow.IChangeResult<<UNIT>>>`
