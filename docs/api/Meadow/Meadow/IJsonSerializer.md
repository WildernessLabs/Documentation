---
title: Interface IJsonSerializer
sidebar_label: IJsonSerializer
description: >-
  Provides an abstraction for a serializer tha can convert between objects and
  JSON strings
slug: /docs/api/Meadow/Meadow/IJsonSerializer
---
# Interface IJsonSerializer
Provides an abstraction for a serializer tha can convert between objects and JSON strings

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/IJsonSerializer.cs#L9)
```csharp title="Declaration"
public interface IJsonSerializer
```
## Methods
### Deserialize&lt;T&gt;(string)
Deserializes a provided string into a typed object
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/IJsonSerializer.cs#L17)
```csharp title="Declaration"
T Deserialize<T>(string json)
```

##### Returns

`<T>`: An instance of T
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *json* | The source JSON |

##### Type Parameters
| Name | Description |
|:--- |:--- |
| `T` | The type to deserialize to |
### Deserialize(string, Type)
Deserializes a provided string into a typed object
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/IJsonSerializer.cs#L24)
```csharp title="Declaration"
object Deserialize(string json, Type type)
```

##### Returns

`System.Object`: An instance of 'type'
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *json* | The source JSON |
| `System.Type` | *type* | The type to deserialize to |

### Serialize(object)
Serializes an object to a JSON representation
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/IJsonSerializer.cs#L30)
```csharp title="Declaration"
string? Serialize(object source)
```

##### Returns

`System.String`: A JSON representationof the source object
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *source* | An object to serialize |

### Deserialize(byte[], Type)
Deserializes a provided string into a typed object
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/IJsonSerializer.cs#L38)
```csharp title="Declaration"
object Deserialize(byte[] encodedJson, Type type)
```

##### Returns

`System.Object`: An instance of 'type'
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *encodedJson* | UTF8-encoded JSON string |
| `System.Type` | *type* | The type to deserialize to |

### Deserialize&lt;T&gt;(byte[])
Deserializes a provided string into a typed object
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/IJsonSerializer.cs#L50)
```csharp title="Declaration"
T Deserialize<T>(byte[] encodedJson)
```

##### Returns

`<T>`: An instance of T
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *encodedJson* | UTF8-encoded JSON string |

##### Type Parameters
| Name | Description |
|:--- |:--- |
| `T` | The type to deserialize to |
