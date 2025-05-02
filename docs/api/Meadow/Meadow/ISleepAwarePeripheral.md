---
title: Interface ISleepAwarePeripheral
sidebar_label: ISleepAwarePeripheral
description: >-
  Provides an abstraction for peripherals that can be notified of sleep state
  changes
slug: /docs/api/Meadow/Meadow/ISleepAwarePeripheral
---
# Interface ISleepAwarePeripheral
Provides an abstraction for peripherals that can be notified of sleep state changes

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/ISleepAwarePeripheral.cs#L9)
```csharp title="Declaration"
public interface ISleepAwarePeripheral
```
## Methods
### BeforeSleep(CancellationToken)
Called before the platform goes into Sleep state
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/ISleepAwarePeripheral.cs#L15)
```csharp title="Declaration"
Task BeforeSleep(CancellationToken cancellationToken)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Threading.CancellationToken` | *cancellationToken* |

### AfterWake(CancellationToken)
Called after the platform returns to Wake state
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/ISleepAwarePeripheral.cs#L21)
```csharp title="Declaration"
Task AfterWake(CancellationToken cancellationToken)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Threading.CancellationToken` | *cancellationToken* |

