---
title: Class Counter
sidebar_label: Counter
description: Represents a class that counts edges on an interrupt-capable input port
slug: /docs/api/Meadow/Meadow.Hardware/Counter
---
# Class Counter
Represents a class that counts edges on an interrupt-capable input port

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Counter.cs#L9)
```csharp title="Declaration"
public class Counter : ICounter, IDisposable
```
**Implements:**  
[Meadow.Hardware.ICounter](../Meadow.Hardware/ICounter), `System.IDisposable`

## Properties
### Enabled
Enables or disables the counter
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Counter.cs#L19)
```csharp title="Declaration"
public bool Enabled { get; set; }
```
### Count
Returns the current Counter value
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Counter.cs#L24)
```csharp title="Declaration"
public ulong Count { get; }
```
### TransitionType
The transition type(s) to count
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Counter.cs#L78)
```csharp title="Declaration"
public InterruptMode TransitionType { get; }
```
## Methods
### Reset()
Resets the Count to zero
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Counter.cs#L86)
```csharp title="Declaration"
public void Reset()
```
### Dispose(bool)
Releases disposable resources
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Counter.cs#L95)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *disposing* |

### Dispose()
Disposes the current instance
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/Counter.cs#L111)
```csharp title="Declaration"
public void Dispose()
```

## Implements

* [Meadow.Hardware.ICounter](../Meadow.Hardware/ICounter)
* `System.IDisposable`
