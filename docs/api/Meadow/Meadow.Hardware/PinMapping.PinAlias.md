---
title: Class PinMapping.PinAlias
sidebar_label: PinMapping.PinAlias
description: Represent an alias for a single connector pin
slug: /docs/api/Meadow/Meadow.Hardware/PinMapping.PinAlias
---
# Class PinMapping.PinAlias
Represent an alias for a single connector pin

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/PinMapping.cs#L12)
```csharp title="Declaration"
public class PinMapping.PinAlias
```
## Properties
### PinName
The Connector pin name
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/PinMapping.cs#L28)
```csharp title="Declaration"
public string PinName { get; }
```
### ConnectsTo
Gets the host IPin that this Connector pin connects to
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/PinMapping.cs#L32)
```csharp title="Declaration"
public IPin ConnectsTo { get; }
```
