---
title: Class I2cConnector.I2cPinDefinitions
sidebar_label: I2cConnector.I2cPinDefinitions
description: Represents the pins definitions for the 2 wire I2C connector
slug: /docs/api/Meadow/Meadow.Hardware/I2cConnector.I2cPinDefinitions
---
# Class I2cConnector.I2cPinDefinitions
Represents the pins definitions for the 2 wire I2C connector

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/I2cConnector.cs#L31)
```csharp title="Declaration"
public class I2cConnector.I2cPinDefinitions : PinDefinitionBase, IPinDefinitions, IEnumerable<IPin>, IEnumerable
```
**Inheritance:** `System.Object` -> [Meadow.PinDefinitionBase](../Meadow/PinDefinitionBase)

**Implements:**  
[Meadow.Hardware.IPinDefinitions](../Meadow.Hardware/IPinDefinitions), `System.Collections.Generic.IEnumerable<Meadow.Hardware.IPin>`, `System.Collections.IEnumerable`

## Properties
### Scl
I2C Clock Pin (SCL)
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/I2cConnector.cs#L39)
```csharp title="Declaration"
public IPin Scl { get; }
```
### Sda
I2C Data Pin (SDA)
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/I2cConnector.cs#L43)
```csharp title="Declaration"
public IPin Sda { get; }
```

## Implements

* [Meadow.Hardware.IPinDefinitions](../Meadow.Hardware/IPinDefinitions)
* `System.Collections.Generic.IEnumerable<Meadow.Hardware.IPin>`
* `System.Collections.IEnumerable`
## Extension Methods
* System.Collections.Generic.IEnumerable&#123;Meadow.Hardware.IPin&#125;.Meadow.ExtensionMethods.Contains``1(Meadow.Hardware.IPin[])
* System.Collections.Generic.IEnumerable&#123;Meadow.Hardware.IPin&#125;.Meadow.ExtensionMethods.FirstIndexOf``1(Meadow.Hardware.IPin[])
