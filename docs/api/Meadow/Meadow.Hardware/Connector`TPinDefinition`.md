---
title: Class Connector<TPinDefinition>
sidebar_label: Connector<TPinDefinition>
description: Represents a Collection of IPins
slug: /docs/api/Meadow/Meadow.Hardware/Connector`TPinDefinition`
---
# Class Connector&lt;TPinDefinition&gt;
Represents a Collection of IPins

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/Connector.cs#L9)
```csharp title="Declaration"
public abstract class Connector<TPinDefinition> : IConnector, IIOController<TPinDefinition> where TPinDefinition : IPinDefinitions
```
**Derived:**  
[Meadow.Hardware.GroveDigitalConnector](../Meadow.Hardware/GroveDigitalConnector), [Meadow.Hardware.I2cConnector](../Meadow.Hardware/I2cConnector), [Meadow.Hardware.MikroBusConnector](../Meadow.Hardware/MikroBusConnector), [Meadow.Hardware.UartConnector](../Meadow.Hardware/UartConnector)

**Implements:**  
[Meadow.IConnector](../Meadow/IConnector), [Meadow.Hardware.IIOController&lt;T&gt;](../Meadow.Hardware/IIOController`T`)

## Properties
### Name
The Connector's name
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/Connector.cs#L13)
```csharp title="Declaration"
public string Name { get; }
```
### Pins
Gets the Controller's IPinDefinitions
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/Connector.cs#L15)
```csharp title="Declaration"
public TPinDefinition Pins { get; }
```
## Methods
### GetPin(string)
Retrieves a pin by Name or Key
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/Connector.cs#L34)
```csharp title="Declaration"
public IPin? GetPin(string pinName)
```

##### Returns

[Meadow.Hardware.IPin](../Meadow.Hardware/IPin)

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *pinName* |


## Implements

* [Meadow.IConnector](../Meadow/IConnector)
* [Meadow.Hardware.IIOController&lt;T&gt;](../Meadow.Hardware/IIOController`T`)
