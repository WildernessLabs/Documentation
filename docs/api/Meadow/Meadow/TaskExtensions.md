---
title: Class TaskExtensions
sidebar_label: TaskExtensions
description: Extensions for Tasks
slug: /docs/api/Meadow/Meadow/TaskExtensions
---
# Class TaskExtensions
Extensions for Tasks

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/TaskExtensions.cs#L9)
```csharp title="Declaration"
public static class TaskExtensions
```
## Methods
### RethrowUnhandledExceptions(Task)
Force a faulted Task to re-throw its exception on the caller thread.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/TaskExtensions.cs#L16)
```csharp title="Declaration"
public static void RethrowUnhandledExceptions(this Task task)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Threading.Tasks.Task` | *task* | The target Task |

### RethrowUnhandledExceptions(Task, CancellationToken)
Force a faulted Task to re-throw its exception on the caller thread.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/TaskExtensions.cs#L44)
```csharp title="Declaration"
public static void RethrowUnhandledExceptions(this Task task, CancellationToken cancellationToken)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Threading.Tasks.Task` | *task* | The target Task |
| `System.Threading.CancellationToken` | *cancellationToken* | A cancellation token |

