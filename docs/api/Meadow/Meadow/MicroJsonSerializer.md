---
title: Class MicroJsonSerializer
sidebar_label: MicroJsonSerializer
description: An implementation of IJsonSerializer that uses MicroJson
slug: /docs/api/Meadow/Meadow/MicroJsonSerializer
---
# Class MicroJsonSerializer
An implementation of IJsonSerializer that uses MicroJson

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MicroJsonSerializer.cs#L9)
```csharp title="Declaration"
public class MicroJsonSerializer : IJsonSerializer
```
**Implements:**  
[Meadow.IJsonSerializer](../Meadow/IJsonSerializer)

## Methods
### Deserialize&lt;T&gt;(string)
Deserializes a provided string into a typed object
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MicroJsonSerializer.cs#L12)
```csharp title="Declaration"
public T Deserialize<T>(string json)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MicroJsonSerializer.cs#L18)
```csharp title="Declaration"
public object Deserialize(string json, Type type)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/MicroJsonSerializer.cs#L24)
```csharp title="Declaration"
public string? Serialize(object source)
```

##### Returns

`System.String`: A JSON representationof the source object
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *source* | An object to serialize |


## Implements

* [Meadow.IJsonSerializer](../Meadow/IJsonSerializer)
