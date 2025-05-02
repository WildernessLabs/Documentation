---
title: Class I2cConnector
sidebar_label: I2cConnector
description: Represents a connector for 2 wire I2C devices
slug: /docs/api/Meadow/Meadow.Hardware/I2cConnector
---
# Class I2cConnector
Represents a connector for 2 wire I2C devices

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/I2cConnector.cs#L8)
```csharp title="Declaration"
public class I2cConnector : Connector<I2cConnector.I2cPinDefinitions>, IConnector, IIOController<I2cConnector.I2cPinDefinitions>
```
**Inheritance:** `System.Object` -> [Meadow.Hardware.Connector&lt;TPinDefinition&gt;](../Meadow.Hardware/Connector`TPinDefinition`)

**Implements:**  
[Meadow.IConnector](../Meadow/IConnector), [Meadow.Hardware.IIOController&lt;T&gt;](../Meadow.Hardware/IIOController`T`)

## Properties
### I2cBus
Gets the connector's I2C bus
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/I2cConnector.cs#L79)
```csharp title="Declaration"
public II2cBus I2cBus { get; }
```

## Implements

* [Meadow.IConnector](../Meadow/IConnector)
* [Meadow.Hardware.IIOController&lt;T&gt;](../Meadow.Hardware/IIOController`T`)
