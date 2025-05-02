---
title: Interface IAnemometer
sidebar_label: IAnemometer
description: Represents an anemometer sensor that measures the speed of the wind.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Weather/IAnemometer
---
# Interface IAnemometer
Represents an anemometer sensor that measures the speed of the wind.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Weather/IAnemometer.cs#L8)
```csharp title="Declaration"
public interface IAnemometer : ISamplingSensor<Speed>, ISensor<Speed>, ISensor, ISamplingSensor
```
## Properties
### WindSpeed
Gets the last recorded wind speed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Weather/IAnemometer.cs#L13)
```csharp title="Declaration"
Speed? WindSpeed { get; }
```
