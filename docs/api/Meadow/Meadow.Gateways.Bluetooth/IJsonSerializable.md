---
title: Interface IJsonSerializable
sidebar_label: IJsonSerializable
description: Represents an interface for objects that can be serialized to JSON.
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth/IJsonSerializable
---
# Interface IJsonSerializable
Represents an interface for objects that can be serialized to JSON.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IJsonSerializable.cs#L6)
```csharp title="Declaration"
public interface IJsonSerializable
```
## Methods
### ToJson()
Converts the object to its JSON representation.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IJsonSerializable.cs#L12)
```csharp title="Declaration"
string ToJson()
```

##### Returns

`System.String`: A string containing the JSON representation of the object.
