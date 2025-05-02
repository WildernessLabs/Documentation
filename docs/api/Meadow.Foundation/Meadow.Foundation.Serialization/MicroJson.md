---
title: Class MicroJson
sidebar_label: MicroJson
description: JSON Serialization and Deserialization library for .NET
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Serialization/MicroJson
---
# Class MicroJson
JSON Serialization and Deserialization library for .NET

###### **Assembly**: MicroJson.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Serialization.MicroJson/Driver/MicroJson.TypeSafe.cs#L10)
```csharp title="Declaration"
public static class MicroJson
```
## Methods
### Deserialize(string)
Desrializes a Json string into an object.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Serialization.MicroJson/Driver/MicroJson.cs#L24)
```csharp title="Declaration"
public static object? Deserialize(string json)
```

##### Returns

`System.Object`: An ArrayList, a Hashtable, a double, a long, a string, null, true, or false
##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *json* |

### DeserializeString(string)
Deserializes a Json string into an object.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Serialization.MicroJson/Driver/MicroJson.cs#L34)
```csharp title="Declaration"
public static object? DeserializeString(string json)
```

##### Returns

`System.Object`: An ArrayList, a Hashtable, a double, a long, a string, null, true, or false
##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *json* |

### EscapeString(string)
Escapes special characters in a string to ensure it is JSON-compliant.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Serialization.MicroJson/Driver/MicroJson.cs#L54)
```csharp title="Declaration"
public static string EscapeString(string value)
```

##### Returns

`System.String`: The escaped string with special characters properly encoded.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *value* | The string to escape. |

### Serialize(object, DateTimeFormat, bool, IUnitJsonConverter?)
Converts an object to a JSON string.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Serialization.MicroJson/Driver/MicroJson.cs#L74)
```csharp title="Declaration"
public static string? Serialize(object o, MicroJson.DateTimeFormat dateTimeFormat = DateTimeFormat.ISO8601, bool convertNamesToCamelCase = true, IUnitJsonConverter? unitJsonConverter = null)
```

##### Returns

`System.String`: The JSON object as a string or null when the value type is not supported.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *o* | The value to convert. |
| [Meadow.Foundation.Serialization.MicroJson.DateTimeFormat](../Meadow.Foundation.Serialization/MicroJson.DateTimeFormat) | *dateTimeFormat* | The format to use for DateTime values. Defaults to ISO 8601 format. |
| `System.Boolean` | *convertNamesToCamelCase* | True to convert all properties to camel case during serialization |
| [Meadow.Foundation.Serialization.IUnitJsonConverter](../Meadow.Foundation.Serialization/IUnitJsonConverter) | *unitJsonConverter* | An optional serialization converter used for Meadow.Units |

### SerializeString(string)
Safely serialize a String into a JSON string value, escaping all backslash and quote characters.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Serialization.MicroJson/Driver/MicroJson.cs#L259)
```csharp title="Declaration"
public static string SerializeString(string input)
```

##### Returns

`System.String`: The serialized JSON string.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *input* | The string to serialize. |

### DeserializeList&lt;T&gt;(ArrayList)
Deserializes a JSON array into a list of objects of type T.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Serialization.MicroJson/Driver/MicroJson.TypeSafe.cs#L18)
```csharp title="Declaration"
public static List<T> DeserializeList<T>(ArrayList array) where T : new()
```

##### Returns

`System.Collections.Generic.List<<T>>`: A list of objects of type T.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Collections.ArrayList` | *array* | The JSON array to deserialize. |

##### Type Parameters
| Name | Description |
|:--- |:--- |
| `T` | The type of objects in the list. |
### DeserializeArray&lt;T&gt;(ArrayList)
Deserializes a JSON array into an array of objects of type T.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Serialization.MicroJson/Driver/MicroJson.TypeSafe.cs#L63)
```csharp title="Declaration"
public static T[] DeserializeArray<T>(ArrayList array) where T : new()
```

##### Returns

`<T>[]`: An array of objects of type T.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Collections.ArrayList` | *array* | The JSON array to deserialize. |

##### Type Parameters
| Name | Description |
|:--- |:--- |
| `T` | The type of objects in the array. |
### Deserialize&lt;T&gt;(byte[])
Deserializes an object of type T from a JSON string.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Serialization.MicroJson/Driver/MicroJson.TypeSafe.cs#L83)
```csharp title="Declaration"
public static T Deserialize<T>(byte[] encodedData)
```

##### Returns

`<T>`: An object of type T.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *encodedData* | A UTF8-encoded JSON string to deserialize. |

##### Type Parameters
| Name | Description |
|:--- |:--- |
| `T` | The type of object to deserialize. |
### Deserialize&lt;T&gt;(string, IUnitJsonConverter?)
Deserializes an object of type T from a JSON string.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Serialization.MicroJson/Driver/MicroJson.TypeSafe.cs#L95)
```csharp title="Declaration"
public static T Deserialize<T>(string json, IUnitJsonConverter? unitJsonConverter = null)
```

##### Returns

`<T>`: An object of type T.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *json* | The JSON string to deserialize. |
| [Meadow.Foundation.Serialization.IUnitJsonConverter](../Meadow.Foundation.Serialization/IUnitJsonConverter) | *unitJsonConverter* | An optional Meadow.Units JSON converter |

##### Type Parameters
| Name | Description |
|:--- |:--- |
| `T` | The type of object to deserialize. |
### Deserialize(string, Type, IUnitJsonConverter?)
Deserializes an object of type T from a JSON string.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Serialization.MicroJson/Driver/MicroJson.TypeSafe.cs#L109)
```csharp title="Declaration"
public static object Deserialize(string json, Type type, IUnitJsonConverter? unitJsonConverter = null)
```

##### Returns

`System.Object`: An object of the specified type
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *json* | The JSON string to deserialize. |
| `System.Type` | *type* | The type of object to deserialize. |
| [Meadow.Foundation.Serialization.IUnitJsonConverter](../Meadow.Foundation.Serialization/IUnitJsonConverter) | *unitJsonConverter* | An optional Meadow.Units JSON converter |

