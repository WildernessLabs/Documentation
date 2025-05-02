---
title: Class UartConnector.UartPinDefinitions
sidebar_label: UartConnector.UartPinDefinitions
description: Represents the pins definitions for the Uart (serial) connector
slug: /docs/api/Meadow/Meadow.Hardware/UartConnector.UartPinDefinitions
---
# Class UartConnector.UartPinDefinitions
Represents the pins definitions for the Uart (serial) connector

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/UartConnector.cs#L35)
```csharp title="Declaration"
public class UartConnector.UartPinDefinitions : PinDefinitionBase, IPinDefinitions, IEnumerable<IPin>, IEnumerable
```
**Inheritance:** `System.Object` -> [Meadow.PinDefinitionBase](../Meadow/PinDefinitionBase)

**Implements:**  
[Meadow.Hardware.IPinDefinitions](../Meadow.Hardware/IPinDefinitions), `System.Collections.Generic.IEnumerable<Meadow.Hardware.IPin>`, `System.Collections.IEnumerable`

## Properties
### Rx
Pin RX
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/UartConnector.cs#L43)
```csharp title="Declaration"
public IPin Rx { get; }
```
### Tx
Pin TX
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/UartConnector.cs#L47)
```csharp title="Declaration"
public IPin Tx { get; }
```

## Implements

* [Meadow.Hardware.IPinDefinitions](../Meadow.Hardware/IPinDefinitions)
* `System.Collections.Generic.IEnumerable<Meadow.Hardware.IPin>`
* `System.Collections.IEnumerable`
## Extension Methods
* System.Collections.Generic.IEnumerable&#123;Meadow.Hardware.IPin&#125;.Meadow.ExtensionMethods.Contains``1(Meadow.Hardware.IPin[])
* System.Collections.Generic.IEnumerable&#123;Meadow.Hardware.IPin&#125;.Meadow.ExtensionMethods.FirstIndexOf``1(Meadow.Hardware.IPin[])
