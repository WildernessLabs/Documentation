---
title: Class GroveDigitalConnector.GroveDigitalPinDefinitions
sidebar_label: GroveDigitalConnector.GroveDigitalPinDefinitions
description: Represents the pins definitions for the Grove Digital connector
slug: >-
  /docs/api/Meadow/Meadow.Hardware/GroveDigitalConnector.GroveDigitalPinDefinitions
---
# Class GroveDigitalConnector.GroveDigitalPinDefinitions
Represents the pins definitions for the Grove Digital connector

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/GroveDigitalConnector.cs#L29)
```csharp title="Declaration"
public class GroveDigitalConnector.GroveDigitalPinDefinitions : PinDefinitionBase, IPinDefinitions, IEnumerable<IPin>, IEnumerable
```
**Inheritance:** `System.Object` -> [Meadow.PinDefinitionBase](../Meadow/PinDefinitionBase)

**Implements:**  
[Meadow.Hardware.IPinDefinitions](../Meadow.Hardware/IPinDefinitions), `System.Collections.Generic.IEnumerable<Meadow.Hardware.IPin>`, `System.Collections.IEnumerable`

## Properties
### D0
Primary Digital Input/Output
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/GroveDigitalConnector.cs#L37)
```csharp title="Declaration"
public IPin D0 { get; }
```
### D1
Secondary Digital Input/Output
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/GroveDigitalConnector.cs#L41)
```csharp title="Declaration"
public IPin D1 { get; }
```

## Implements

* [Meadow.Hardware.IPinDefinitions](../Meadow.Hardware/IPinDefinitions)
* `System.Collections.Generic.IEnumerable<Meadow.Hardware.IPin>`
* `System.Collections.IEnumerable`
## Extension Methods
* System.Collections.Generic.IEnumerable&#123;Meadow.Hardware.IPin&#125;.Meadow.ExtensionMethods.Contains``1(Meadow.Hardware.IPin[])
* System.Collections.Generic.IEnumerable&#123;Meadow.Hardware.IPin&#125;.Meadow.ExtensionMethods.FirstIndexOf``1(Meadow.Hardware.IPin[])
