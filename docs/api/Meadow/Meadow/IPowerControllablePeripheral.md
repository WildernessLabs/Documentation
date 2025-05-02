---
title: Interface IPowerControllablePeripheral
sidebar_label: IPowerControllablePeripheral
description: Provides an abstraction for peripherals that can be turned on and off
slug: /docs/api/Meadow/Meadow/IPowerControllablePeripheral
---
# Interface IPowerControllablePeripheral
Provides an abstraction for peripherals that can be turned on and off

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/IPowerControllablePeripheral.cs#L8)
```csharp title="Declaration"
public interface IPowerControllablePeripheral
```
## Methods
### PowerOn()
Powers on the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/IPowerControllablePeripheral.cs#L14)
```csharp title="Declaration"
Task PowerOn()
```

##### Returns

`System.Threading.Tasks.Task`
### PowerOff()
Powers off the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/IPowerControllablePeripheral.cs#L20)
```csharp title="Declaration"
Task PowerOff()
```

##### Returns

`System.Threading.Tasks.Task`
