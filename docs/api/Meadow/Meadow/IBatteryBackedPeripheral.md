---
title: Interface IBatteryBackedPeripheral
sidebar_label: IBatteryBackedPeripheral
description: >-
  Provides an abstraction for peripherals that have a battery and that can read
  information about that battery
slug: /docs/api/Meadow/Meadow/IBatteryBackedPeripheral
---
# Interface IBatteryBackedPeripheral
Provides an abstraction for peripherals that have a battery and that can read information about that battery

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/IBatteryBackedPeripheral.cs#L6)
```csharp title="Declaration"
public interface IBatteryBackedPeripheral
```
## Methods
### IsBatteryLow()
Reads the state of the battery
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/IBatteryBackedPeripheral.cs#L12)
```csharp title="Declaration"
bool IsBatteryLow()
```

##### Returns

`System.Boolean`: &lt;b&gt;True&lt;/b&gt; if the battery voltage is low, otherwise &lt;b&gt;False&lt;/b&gt;
