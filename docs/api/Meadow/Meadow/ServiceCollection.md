---
title: Class ServiceCollection
sidebar_label: ServiceCollection
description: >-
  Represents a collection of services and provides methods to manage and
  retrieve services from the collection.
slug: /docs/api/Meadow/Meadow/ServiceCollection
---
# Class ServiceCollection
Represents a collection of services and provides methods to manage and retrieve services from the collection.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/ServiceCollection.cs#L12)
```csharp title="Declaration"
public class ServiceCollection : IEnumerable<object>, IEnumerable
```
**Implements:**  
`System.Collections.Generic.IEnumerable<System.Object>`, `System.Collections.IEnumerable`

## Methods
### GetEnumerator()
Returns an enumerator that iterates through the collection of services.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/ServiceCollection.cs#L20)
```csharp title="Declaration"
public IEnumerator<object> GetEnumerator()
```

##### Returns

`System.Collections.Generic.IEnumerator<System.Object>`: An enumerator that can be used to iterate through the collection.### Add(object)
Adds a service to the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/ServiceCollection.cs#L34)
```csharp title="Declaration"
public void Add(object o)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *o* | The service object to add. |

### Add(object, Type)
Adds a service to the collection and registers it with the specified type.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/ServiceCollection.cs#L58)
```csharp title="Declaration"
public void Add(object o, Type registerAs)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Object` | *o* | The service object to add. |
| `System.Type` | *registerAs* | The type to register the service as. |

### ContainsRegisteredType&lt;TRegisteredType&gt;()
Determines whether the collection contains a service of the specified registered type.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/ServiceCollection.cs#L80)
```csharp title="Declaration"
public bool ContainsRegisteredType<TRegisteredType>()
```

##### Returns

`System.Boolean`: `true` if the collection contains the service; otherwise, `false`.##### Type Parameters
| Name | Description |
|:--- |:--- |
| `TRegisteredType` | The registered type of the service. |
### Add&lt;TRegisterAs&gt;(TRegisterAs)
Adds a service to the collection and registers it with the specified type.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/ServiceCollection.cs#L90)
```csharp title="Declaration"
public void Add<TRegisterAs>(TRegisterAs o)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `<TRegisterAs>` | *o* | The service object to add. |

##### Type Parameters
| Name | Description |
|:--- |:--- |
| `TRegisterAs` | The type to register the service as. |
### Get(Type)
Gets a service of the specified registered type from the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/ServiceCollection.cs#L114)
```csharp title="Declaration"
public object? Get(Type registeredType)
```

##### Returns

`System.Object`: The service object if found; otherwise, `null`.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Type` | *registeredType* | The registered type of the service to retrieve. |

### Get&lt;TRegisteredType&gt;()
Gets a service of the specified registered type from the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/ServiceCollection.cs#L132)
```csharp title="Declaration"
public TRegisteredType? Get<TRegisteredType>()
```

##### Returns

`<TRegisteredType>`: The service object if found; otherwise, `null`.##### Type Parameters
| Name | Description |
|:--- |:--- |
| `TRegisteredType` | The registered type of the service to retrieve. |
### GetOrCreate&lt;TCreateType&gt;()
Gets or creates a service of the specified type from the collection.
If the service does not exist, a new instance of the specified type is created and added to the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/ServiceCollection.cs#L144)
```csharp title="Declaration"
public TCreateType GetOrCreate<TCreateType>()
```

##### Returns

`<TCreateType>`: The service object of the specified type.##### Type Parameters
| Name | Description |
|:--- |:--- |
| `TCreateType` | The type of the service to create or retrieve. |
### GetOrCreate&lt;TCreateType, TRegisteredType&gt;()
Gets or creates a service of the specified creation type and registered type from the collection.
If the service does not exist, a new instance of the creation type is created and added to the collection
and registered with the specified registered type.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/ServiceCollection.cs#L162)
```csharp title="Declaration"
public TRegisteredType GetOrCreate<TCreateType, TRegisteredType>() where TCreateType : TRegisteredType
```

##### Returns

`<TRegisteredType>`: The service object of the specified creation type and registered type.##### Type Parameters
| Name | Description |
|:--- |:--- |
| `TCreateType` | The type of the service to create. |
| `TRegisteredType` | The type to register the service as. |
### Create&lt;TCreateType&gt;()
Creates and adds a service of the specified type to the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/ServiceCollection.cs#L178)
```csharp title="Declaration"
public TCreateType Create<TCreateType>()
```

##### Returns

`<TCreateType>`: The created service object.##### Type Parameters
| Name | Description |
|:--- |:--- |
| `TCreateType` | The type of the service to create. |
### Create&lt;TCreateType, TRegisterAs&gt;()
Creates and adds a service of the specified creation type and registered type to the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/ServiceCollection.cs#L190)
```csharp title="Declaration"
public TCreateType Create<TCreateType, TRegisterAs>() where TCreateType : TRegisterAs
```

##### Returns

`<TCreateType>`: The created service object.##### Type Parameters
| Name | Description |
|:--- |:--- |
| `TCreateType` | The type of the service to create. |
| `TRegisterAs` | The type to register the service as. |
### Create(Type)
Creates and adds a service of the specified type to the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/ServiceCollection.cs#L203)
```csharp title="Declaration"
public object Create(Type createType)
```

##### Returns

`System.Object`: The created service object.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Type` | *createType* | The type of the service to create. |

### Create(Type, Type?)
Creates and adds a service of the specified type to the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/ServiceCollection.cs#L219)
```csharp title="Declaration"
public object Create(Type createType, Type? registerType)
```

##### Returns

`System.Object`: The created service object.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Type` | *createType* | The type of the service to create. |
| `System.Type` | *registerType* | The type to register the service as. |

### GenerateInstance(Type)
Creates an instance of the requested type, including any constructor or property injections
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/ServiceCollection.cs#L250)
```csharp title="Declaration"
public object GenerateInstance(Type createType)
```

##### Returns

`System.Object`: An instance of the requested type
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Type` | *createType* | The type of the object to create |


## Implements

* `System.Collections.Generic.IEnumerable<System.Object>`
* `System.Collections.IEnumerable`
## Extension Methods
* System.Collections.Generic.IEnumerable&#123;System.Object&#125;.Meadow.ExtensionMethods.Contains``1(System.Object[])
* System.Collections.Generic.IEnumerable&#123;System.Object&#125;.Meadow.ExtensionMethods.FirstIndexOf``1(System.Object[])
