---
title: Interface ISolarIntensityGauge
sidebar_label: ISolarIntensityGauge
description: Contract for analog solar intensity gauge
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Light/ISolarIntensityGauge
---
# Interface ISolarIntensityGauge
Contract for analog solar intensity gauge

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Light/ISolarIntensityGauge.cs#L8)
```csharp title="Declaration"
public interface ISolarIntensityGauge : ISensor<float>, ISensor
```
## Properties
### MaxVoltageReference
The maximum expected voltage when the solar panel is outputting 100% power
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Light/ISolarIntensityGauge.cs#L13)
```csharp title="Declaration"
Voltage MaxVoltageReference { get; }
```
### MinVoltageReference
The minimum expected voltage when the solar panel is outputting 0% power
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Light/ISolarIntensityGauge.cs#L17)
```csharp title="Declaration"
Voltage MinVoltageReference { get; }
```
### SolarIntensity
The last available solar intensity reading, expressed as a percentage
value between `0.0` and `1.0`, inclusively
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Light/ISolarIntensityGauge.cs#L23)
```csharp title="Declaration"
float? SolarIntensity { get; }
```
