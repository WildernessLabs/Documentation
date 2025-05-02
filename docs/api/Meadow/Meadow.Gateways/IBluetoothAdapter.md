---
title: Interface IBluetoothAdapter
sidebar_label: IBluetoothAdapter
description: Represents a Bluetooth adapter.
slug: /docs/api/Meadow/Meadow.Gateways/IBluetoothAdapter
---
# Interface IBluetoothAdapter
Represents a Bluetooth adapter.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/IBluetoothAdapter.cs#L8)
```csharp title="Declaration"
public interface IBluetoothAdapter
```
## Methods
### StartBluetoothServer(IDefinition)
Starts the Bluetooth server with the specified configuration.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/IBluetoothAdapter.cs#L15)
```csharp title="Declaration"
bool StartBluetoothServer(IDefinition configuration)
```

##### Returns

`System.Boolean`: `true` if the Bluetooth server is successfully started; otherwise, `false`.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Gateways.Bluetooth.IDefinition](../Meadow.Gateways.Bluetooth/IDefinition) | *configuration* | The Bluetooth definition configuration. |

### StopBluetoothServer()
Stop the Bluetooth server.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Gateways/Bluetooth/IBluetoothAdapter.cs#L21)
```csharp title="Declaration"
bool StopBluetoothServer()
```

##### Returns

`System.Boolean`: `true` if the Bluetooth server is successfully stopped; otherwise, `false`.
