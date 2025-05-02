---
title: Interface IRainGauge
sidebar_label: IRainGauge
description: Represents a rain gauge to measure accumulated rainfall depth.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Weather/IRainGauge
---
# Interface IRainGauge
Represents a rain gauge to measure accumulated rainfall depth.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Weather/IRainGauge.cs#L8)
```csharp title="Declaration"
public interface IRainGauge : ISamplingSensor<Length>, ISensor<Length>, ISensor, ISamplingSensor
```
## Properties
### RainDepth
Gets the total accumulated rainfall depth.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Weather/IRainGauge.cs#L13)
```csharp title="Declaration"
Length RainDepth { get; }
```
