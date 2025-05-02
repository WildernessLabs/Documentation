---
title: Class GroveDigitalConnector
sidebar_label: GroveDigitalConnector
description: >-
  Represents a connector for Seeed Studio Grove for digital devices. See
  [https://wiki.seeedstudio.com/Grove_System/#digital](https://wiki.seeedstudio.com/Grove_System/#digital)
slug: /docs/api/Meadow/Meadow.Hardware/GroveDigitalConnector
---
# Class GroveDigitalConnector
Represents a connector for Seeed Studio Grove for digital devices. See [https://wiki.seeedstudio.com/Grove_System/#digital](https://wiki.seeedstudio.com/Grove_System/#digital)

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/GroveDigitalConnector.cs#L9)
```csharp title="Declaration"
public class GroveDigitalConnector : Connector<GroveDigitalConnector.GroveDigitalPinDefinitions>, IConnector, IIOController<GroveDigitalConnector.GroveDigitalPinDefinitions>
```
**Inheritance:** `System.Object` -> [Meadow.Hardware.Connector&lt;TPinDefinition&gt;](../Meadow.Hardware/Connector`TPinDefinition`)

**Implements:**  
[Meadow.IConnector](../Meadow/IConnector), [Meadow.Hardware.IIOController&lt;T&gt;](../Meadow.Hardware/IIOController`T`)


## Implements

* [Meadow.IConnector](../Meadow/IConnector)
* [Meadow.Hardware.IIOController&lt;T&gt;](../Meadow.Hardware/IIOController`T`)
