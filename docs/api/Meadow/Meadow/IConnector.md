---
title: Interface IConnector
sidebar_label: IConnector
description: An interface for a named collection of pins
slug: /docs/api/Meadow/Meadow/IConnector
---
# Interface IConnector
An interface for a named collection of pins

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/IConnector.cs#L7)
```csharp title="Declaration"
public interface IConnector
```
## Properties
### Name
The Connector's name
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/IConnector.cs#L12)
```csharp title="Declaration"
string Name { get; }
```
### Pins
The pins in the Connector
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/IConnector.cs#L16)
```csharp title="Declaration"
IPinDefinitions Pins { get; }
```
