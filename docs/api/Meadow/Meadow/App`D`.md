---
title: Class App<D>
sidebar_label: App<D>
description: >-
  Provides a base implementation for the Meadow App. Use this class for Meadow
  applications to get strongly-typed access to the current device information.
slug: /docs/api/Meadow/Meadow/App`D`
---
# Class App&lt;D&gt;
Provides a base implementation for the Meadow App. Use this
class for Meadow applications to get strongly-typed access to the current
device information.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Bases/App_D.cs#L11)
```csharp title="Declaration"
public abstract class App<D> : AppBase, IApp where D : class, IMeadowDevice
```
**Inheritance:** `System.Object` -> [Meadow.AppBase](../Meadow/AppBase)

**Implements:**  
[Meadow.IApp](../Meadow/IApp)

## Properties
### Device
The root Device interface
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Bases/App_D.cs#L17)
```csharp title="Declaration"
public static D Device { get; protected set; }
```
## Methods
### InvokeOnMainThread(Action&lt;object?&gt;, object?)
Invokes an action in the context of the applications main thread
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Bases/App_D.cs#L28)
```csharp title="Declaration"
public override void InvokeOnMainThread(Action<object?> action, object? state = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Action<System.Object>` | *action* | The action to call |
| `System.Object` | *state* | An optional state object to pass to the Action |


## Implements

* [Meadow.IApp](../Meadow/IApp)
