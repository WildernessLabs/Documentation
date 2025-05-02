---
title: Interface ISensor<T>
sidebar_label: ISensor<T>
description: Abstraction for a simple sensor
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors/ISensor`T`
---
# Interface ISensor&lt;T&gt;
Abstraction for a simple sensor

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/ISensor.cs#L15)
```csharp title="Declaration"
public interface ISensor<T> : ISensor
```
## Methods
### Read()
Convenience method to get the current sensor reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/ISensor.cs#L20)
```csharp title="Declaration"
Task<T> Read()
```

##### Returns

`System.Threading.Tasks.Task<<T>>`
