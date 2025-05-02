---
title: Interface IHealthReporter
sidebar_label: IHealthReporter
description: Logic responsible for reporting device health metrics to Meadow.Cloud.
slug: /docs/api/Meadow/Meadow.Cloud/IHealthReporter
---
# Interface IHealthReporter
Logic responsible for reporting device health metrics to Meadow.Cloud.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/IHealthReporter.cs#L9)
```csharp title="Declaration"
public interface IHealthReporter
```
## Methods
### Start(int)
Starts the health reporter based on the desired interval.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/IHealthReporter.cs#L15)
```csharp title="Declaration"
Task Start(int interval)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *interval* | In minutes |

### Send()
Can be called to manually send a health report event.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/IHealthReporter.cs#L21)
```csharp title="Declaration"
Task Send()
```

##### Returns

`System.Threading.Tasks.Task`
### AddMetric(string, Func&lt;object&gt;)
Add a custom health metric.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/IHealthReporter.cs#L29)
```csharp title="Declaration"
bool AddMetric(string name, Func<object> func)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *name* | Metric name. |
| `System.Func<System.Object>` | *func* | Function to calculate metric value. |

### AddMetric(string, Func&lt;Task&lt;object&gt;&gt;)
Add a custom health metric.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Cloud/IHealthReporter.cs#L37)
```csharp title="Declaration"
bool AddMetric(string name, Func<Task<object>> func)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *name* | Metric name. |
| `System.Func<System.Threading.Tasks.Task<System.Object>>` | *func* | Function to calculate the metric value. |

