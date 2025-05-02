---
title: Interface IAttribute
sidebar_label: IAttribute
description: Represents a Bluetooth attribute.
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth/IAttribute
---
# Interface IAttribute
Represents a Bluetooth attribute.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/IAttribute.cs#L6)
```csharp title="Declaration"
public interface IAttribute
```
## Properties
### DefinitionHandle
Gets or sets the handle of the attribute's definition.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/IAttribute.cs#L17)
```csharp title="Declaration"
ushort DefinitionHandle { get; set; }
```
### ValueHandle
Gets or sets the handle of the attribute's value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/IAttribute.cs#L22)
```csharp title="Declaration"
ushort ValueHandle { get; set; }
```
## Methods
### HandleDataWrite(byte[])
Handles the write operation for the attribute with the specified data.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/IAttribute.cs#L12)
```csharp title="Declaration"
void HandleDataWrite(byte[] data)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *data* | The data to be written. |

