---
title: Interface IUnitJsonConverter
sidebar_label: IUnitJsonConverter
description: >-
  Interface for Unit type JSON converters that handle serialization and
  deserialization
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Serialization/IUnitJsonConverter
---
# Interface IUnitJsonConverter
Interface for Unit type JSON converters that handle serialization and deserialization

###### **Assembly**: MicroJson.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Serialization.MicroJson/Driver/ISerializationStrategy.cs#L8)
```csharp title="Declaration"
public interface IUnitJsonConverter
```
## Methods
### Serialize(object, bool)
Serializes a Unit object to a JSON string
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Serialization.MicroJson/Driver/ISerializationStrategy.cs#L16)
```csharp title="Declaration"
string? Serialize(object obj, bool convertNamesToCamelCase = true)
```

##### Returns

`System.String`: A JSON string representing the Unit object, or null if the object is not a supported Unit type
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *obj* | The object to serialize |
| `System.Boolean` | *convertNamesToCamelCase* | Whether to convert property names to camel case |

### Deserialize&lt;T&gt;(string)
Deserializes a JSON string to an object of type T
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Serialization.MicroJson/Driver/ISerializationStrategy.cs#L24)
```csharp title="Declaration"
T? Deserialize<T>(string json)
```

##### Returns

`<T>`: A deserialized object of type T, or default value if deserialization fails
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *json* | The JSON string to deserialize |

##### Type Parameters
| Name | Description |
|:--- |:--- |
| `T` | The expected type (Unit type or array of Unit type) |
### Deserialize(string, Type)
Deserializes a JSON string to an object of the specified type
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Serialization.MicroJson/Driver/ISerializationStrategy.cs#L32)
```csharp title="Declaration"
object? Deserialize(string json, Type targetType)
```

##### Returns

`System.Object`: A deserialized object, or null if deserialization fails
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *json* | The JSON string to deserialize |
| `System.Type` | *targetType* | The expected object type |

