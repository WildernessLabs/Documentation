---
title: Class AnalogCapabilities
sidebar_label: AnalogCapabilities
description: Provides a description of the Analog I/O capabilities of a platform
slug: /docs/api/Meadow/Meadow/AnalogCapabilities
---
# Class AnalogCapabilities
Provides a description of the Analog I/O capabilities of a platform

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/AnalogCapabilities.cs#L8)
```csharp title="Declaration"
public class AnalogCapabilities
```
## Properties
### HasAdc
Returns true if the platform has an analog-to-digital converter
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/AnalogCapabilities.cs#L29)
```csharp title="Declaration"
public bool HasAdc { get; protected set; }
```
### AdcResolution
Returns the bit-resolution of the ADC
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/AnalogCapabilities.cs#L33)
```csharp title="Declaration"
public int? AdcResolution { get; protected set; }
```
### MaxRawAdcVoltageValue
Returns the maximum voltage the ADC supports
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/AnalogCapabilities.cs#L37)
```csharp title="Declaration"
public int? MaxRawAdcVoltageValue { get; }
```
