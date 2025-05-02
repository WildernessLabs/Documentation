---
title: Class MeadowOS
sidebar_label: MeadowOS
description: The entry point of the .NET part of Meadow OS.
slug: /docs/api/Meadow/Meadow/MeadowOS
---
# Class MeadowOS
The entry point of the .NET part of Meadow OS.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MeadowOS.SystemInformation.cs#L3)
```csharp title="Declaration"
public static class MeadowOS
```
## Properties
### StartupTick
The value of the processor clock register when `Main` was entered
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MeadowOS.cs#L42)
```csharp title="Declaration"
public static int StartupTick { get; set; }
```
## Fields
### AppAbort
The cancellation CancellationTokenSource used to signal the application to shut down
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MeadowOS.cs#L37)
```csharp title="Declaration"
public static CancellationTokenSource AppAbort
```
## Methods
### Main(string[])
The entry point for Meadow applications
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MeadowOS.cs#L49)
```csharp title="Declaration"
public static Task Main(string[] args)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String[]` | *args* | Command line arguments |

### Start&lt;TApp&gt;()
Initializes and starts up the Meadow Core software stack
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MeadowOS.cs#L60)
```csharp title="Declaration"
public static Task Start<TApp>() where TApp : IApp
```

##### Returns

`System.Threading.Tasks.Task`
##### Type Parameters
* `TApp`
### Start(string[]?)
Initializes and starts up the Meadow Core software stack
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MeadowOS.cs#L69)
```csharp title="Declaration"
public static Task Start(string[]? args)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String[]` | *args* |

### Start(IApp, string[]?)
Initializes and starts up the Meadow Core software stack
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MeadowOS.cs#L77)
```csharp title="Declaration"
public static Task Start(IApp app, string[]? args = null)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.IApp](../Meadow/IApp) | *app* |
| `System.String[]` | *args* |

### TerminateRun()
Cancel the meadow OS application Run call and allow the process to exit
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MeadowOS.cs#L842)
```csharp title="Declaration"
public static void TerminateRun()
```
