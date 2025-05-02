---
title: Class HealthReporter
sidebar_label: HealthReporter
description: Logic responsible for reporting device health metrics to Meadow.Cloud.
slug: /docs/api/Meadow/Meadow/HealthReporter
---
# Class HealthReporter
Logic responsible for reporting device health metrics to Meadow.Cloud.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Cloud/HealthReporter.cs#L14)
```csharp title="Declaration"
public class HealthReporter : IHealthReporter
```
**Implements:**  
[Meadow.Cloud.IHealthReporter](../Meadow.Cloud/IHealthReporter)

## Methods
### Start(int)
Starts the health reporter based on the desired interval.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Cloud/HealthReporter.cs#L20)
```csharp title="Declaration"
public Task Start(int interval)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *interval* | In minutes |

### AddMetric(string, Func&lt;object&gt;)
Add a custom health metric.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Cloud/HealthReporter.cs#L66)
```csharp title="Declaration"
public bool AddMetric(string name, Func<object> func)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Cloud/HealthReporter.cs#L72)
```csharp title="Declaration"
public bool AddMetric(string name, Func<Task<object>> func)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *name* | Metric name. |
| `System.Func<System.Threading.Tasks.Task<System.Object>>` | *func* | Function to calculate the metric value. |

### Send()
Can be called to manually send a health report event.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Cloud/HealthReporter.cs#L87)
```csharp title="Declaration"
public Task Send()
```

##### Returns

`System.Threading.Tasks.Task`

## Implements

* [Meadow.Cloud.IHealthReporter](../Meadow.Cloud/IHealthReporter)
