---
title: Class ObservableBase<UNIT>
sidebar_label: ObservableBase<UNIT>
description: >-
  Provides observable functionality.

  Keeps an internal collection of `observers`, and provides methods such as
  `NotifyObservers` and `Subscribe`.
slug: /docs/api/Meadow.Foundation/Meadow.Foundation/ObservableBase`UNIT`
---
# Class ObservableBase&lt;UNIT&gt;
Provides observable functionality.

Keeps an internal collection of `observers`, and provides methods such
as `NotifyObservers` and `Subscribe`.

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/ObservableBase.cs#L13)
```csharp title="Declaration"
public abstract class ObservableBase<UNIT> : IObservable<IChangeResult<UNIT>> where UNIT : struct
```
**Derived:**  
[Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<<UNIT>>>`

## Properties
### observers
Subscribed observers
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/ObservableBase.cs#L19)
```csharp title="Declaration"
protected List<IObserver<IChangeResult<UNIT>>> observers { get; set; }
```
## Methods
### NotifyObservers(IChangeResult&lt;UNIT&gt;)
Notify observers of a change
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/ObservableBase.cs#L25)
```csharp title="Declaration"
protected void NotifyObservers(IChangeResult<UNIT> changeResult)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.IChangeResult<<UNIT>>` | *changeResult* |

### Subscribe(IObserver&lt;IChangeResult&lt;UNIT&gt;&gt;)
Subscribes an `IObserver` to get notified when a change occurs.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/ObservableBase.cs#L36)
```csharp title="Declaration"
public IDisposable Subscribe(IObserver<IChangeResult<UNIT>> observer)
```

##### Returns

`System.IDisposable`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.IObserver<Meadow.IChangeResult<<UNIT>>>` | *observer* | The `IObserver` that will receive the
    change notifications. |

### CreateObserver(Action&lt;IChangeResult&lt;UNIT&gt;&gt;, Predicate&lt;IChangeResult&lt;UNIT&gt;&gt;?)
Convenience method to generate a an `FilterableChangeObserver` with
the correct signature.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/ObservableBase.cs#L77)
```csharp title="Declaration"
public static FilterableChangeObserver<UNIT> CreateObserver(Action<IChangeResult<UNIT>> handler, Predicate<IChangeResult<UNIT>>? filter = null)
```

##### Returns

`Meadow.FilterableChangeObserver<<UNIT>>`: A FilterableChangeObserver
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Action<Meadow.IChangeResult<<UNIT>>>` | *handler* | The action that is invoked when the filter is satisfied. |
| `System.Predicate<Meadow.IChangeResult<<UNIT>>>` | *filter* | An optional filter that determines whether or not the
    consumer should be notified. |


## Implements

* `System.IObservable<Meadow.IChangeResult<<UNIT>>>`
