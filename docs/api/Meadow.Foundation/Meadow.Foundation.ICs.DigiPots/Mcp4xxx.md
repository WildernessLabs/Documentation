---
title: Class Mcp4xxx
sidebar_label: Mcp4xxx
description: Represents a Mcp4xxx digital potentimeter or rheostat
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.DigiPots/Mcp4xxx
---
# Class Mcp4xxx
Represents a Mcp4xxx digital potentimeter or rheostat

###### **Assembly**: Mcp4xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Mcp4xxx/Driver/Mcp4xxx.ResistorArray.cs#L9)
```csharp title="Declaration"
public abstract class Mcp4xxx : ISpiPeripheral
```
**Derived:**  
[Meadow.Foundation.ICs.DigiPots.Mcp4xx1](../Meadow.Foundation.ICs.DigiPots/Mcp4xx1), [Meadow.Foundation.ICs.DigiPots.Mcp4xx2](../Meadow.Foundation.ICs.DigiPots/Mcp4xx2)

**Implements:**  
`Meadow.Hardware.ISpiPeripheral`

## Properties
### SpiComms
Gets the ISpiCommunications used to ineract with the SPI bus
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Mcp4xxx/Driver/Mcp4xxx.cs#L15)
```csharp title="Declaration"
protected ISpiCommunications SpiComms { get; }
```
### DefaultSpiBusMode
Default SPI bus mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Mcp4xxx/Driver/Mcp4xxx.cs#L18)
```csharp title="Declaration"
public SpiClockConfiguration.Mode DefaultSpiBusMode { get; }
```
### DefaultSpiBusSpeed
Default SPI bus speed for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Mcp4xxx/Driver/Mcp4xxx.cs#L20)
```csharp title="Declaration"
public Frequency DefaultSpiBusSpeed { get; }
```
### MaxResistance
Gets the maximum resistance of the digital potentiometer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Mcp4xxx/Driver/Mcp4xxx.cs#L25)
```csharp title="Declaration"
public Resistance MaxResistance { get; }
```
### MaxSteps
Gets the maximum number of steps or resolution.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Mcp4xxx/Driver/Mcp4xxx.cs#L29)
```csharp title="Declaration"
public abstract int MaxSteps { get; }
```
### SpiBusMode
Current SPI bus mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Mcp4xxx/Driver/Mcp4xxx.cs#L32)
```csharp title="Declaration"
public SpiClockConfiguration.Mode SpiBusMode { get; set; }
```
### SpiBusSpeed
Current SPI bus speed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Mcp4xxx/Driver/Mcp4xxx.cs#L39)
```csharp title="Declaration"
public Frequency SpiBusSpeed { get; set; }
```

## Implements

* `Meadow.Hardware.ISpiPeripheral`
