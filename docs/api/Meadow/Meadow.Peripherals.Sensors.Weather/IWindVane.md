---
title: Interface IWindVane
sidebar_label: IWindVane
description: Represents a wind vane sensor that measures the azimuth of the wind.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Weather/IWindVane
---
# Interface IWindVane
Represents a wind vane sensor that measures the azimuth of the wind.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Weather/IWindVane.cs#L8)
```csharp title="Declaration"
public interface IWindVane : ISamplingSensor<Azimuth>, ISensor<Azimuth>, ISensor, ISamplingSensor
```
## Properties
### WindAzimuth
Gets the last recorded azimuth of the wind.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Weather/IWindVane.cs#L13)
```csharp title="Declaration"
Azimuth? WindAzimuth { get; }
```
