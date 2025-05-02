---
title: Class MikroBusConnector.MikroBusPinDefinitions
sidebar_label: MikroBusConnector.MikroBusPinDefinitions
description: Represents the pins definitions for the MikroBus connector
slug: /docs/api/Meadow/Meadow.Hardware/MikroBusConnector.MikroBusPinDefinitions
---
# Class MikroBusConnector.MikroBusPinDefinitions
Represents the pins definitions for the MikroBus connector

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/MikroBusConnector.MikroBusPinDefinitions.cs#L9)
```csharp title="Declaration"
public class MikroBusConnector.MikroBusPinDefinitions : PinDefinitionBase, IPinDefinitions, IEnumerable<IPin>, IEnumerable
```
**Inheritance:** `System.Object` -> [Meadow.PinDefinitionBase](../Meadow/PinDefinitionBase)

**Implements:**  
[Meadow.Hardware.IPinDefinitions](../Meadow.Hardware/IPinDefinitions), `System.Collections.Generic.IEnumerable<Meadow.Hardware.IPin>`, `System.Collections.IEnumerable`

## Properties
### AN
Pin AN
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/MikroBusConnector.MikroBusPinDefinitions.cs#L27)
```csharp title="Declaration"
public IPin AN { get; }
```
### RST
Pin RST
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/MikroBusConnector.MikroBusPinDefinitions.cs#L31)
```csharp title="Declaration"
public IPin RST { get; }
```
### CS
Pin CS
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/MikroBusConnector.MikroBusPinDefinitions.cs#L35)
```csharp title="Declaration"
public IPin CS { get; }
```
### SCK
Pin SCK
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/MikroBusConnector.MikroBusPinDefinitions.cs#L39)
```csharp title="Declaration"
public IPin SCK { get; }
```
### CIPO
Pin CIPO
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/MikroBusConnector.MikroBusPinDefinitions.cs#L43)
```csharp title="Declaration"
public IPin CIPO { get; }
```
### COPI
Pin COPI
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/MikroBusConnector.MikroBusPinDefinitions.cs#L47)
```csharp title="Declaration"
public IPin COPI { get; }
```
### PWM
Pin PWM
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/MikroBusConnector.MikroBusPinDefinitions.cs#L51)
```csharp title="Declaration"
public IPin PWM { get; }
```
### INT
Pin INT
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/MikroBusConnector.MikroBusPinDefinitions.cs#L55)
```csharp title="Declaration"
public IPin INT { get; }
```
### RX
Pin RX
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/MikroBusConnector.MikroBusPinDefinitions.cs#L59)
```csharp title="Declaration"
public IPin RX { get; }
```
### TX
Pin TX
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/MikroBusConnector.MikroBusPinDefinitions.cs#L63)
```csharp title="Declaration"
public IPin TX { get; }
```
### SCL
Pin SCL
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/MikroBusConnector.MikroBusPinDefinitions.cs#L67)
```csharp title="Declaration"
public IPin SCL { get; }
```
### SDA
Pin SDA
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/MikroBusConnector.MikroBusPinDefinitions.cs#L71)
```csharp title="Declaration"
public IPin SDA { get; }
```

## Implements

* [Meadow.Hardware.IPinDefinitions](../Meadow.Hardware/IPinDefinitions)
* `System.Collections.Generic.IEnumerable<Meadow.Hardware.IPin>`
* `System.Collections.IEnumerable`
## Extension Methods
* System.Collections.Generic.IEnumerable&#123;Meadow.Hardware.IPin&#125;.Meadow.ExtensionMethods.Contains``1(Meadow.Hardware.IPin[])
* System.Collections.Generic.IEnumerable&#123;Meadow.Hardware.IPin&#125;.Meadow.ExtensionMethods.FirstIndexOf``1(Meadow.Hardware.IPin[])
