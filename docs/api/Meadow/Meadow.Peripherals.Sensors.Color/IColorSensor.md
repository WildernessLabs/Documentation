---
title: Interface IColorSensor
sidebar_label: IColorSensor
description: Color sensor interface requirements.
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Color/IColorSensor
---
# Interface IColorSensor
Color sensor interface requirements.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Color/IColorSensor.cs#L6)
```csharp title="Declaration"
public interface IColorSensor : ISamplingSensor<Color>, ISensor<Color>, ISensor, ISamplingSensor
```
## Properties
### Color
Last color read from the sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Color/IColorSensor.cs#L11)
```csharp title="Declaration"
Color? Color { get; }
```
