---
title: Class LogProviderCollection
sidebar_label: LogProviderCollection
description: A collection of ILogProviders
slug: /docs/api/Meadow/Meadow.Logging/LogProviderCollection
---
# Class LogProviderCollection
A collection of ILogProviders

###### **Assembly**: Meadow.Logging.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Logging.git/blob/develop/Source/Meadow.Logging/lib/LogProviderCollection.cs#L9)
```csharp title="Declaration"
public class LogProviderCollection : IEnumerable<ILogProvider>, IEnumerable
```
**Implements:**  
`System.Collections.Generic.IEnumerable<Meadow.Logging.ILogProvider>`, `System.Collections.IEnumerable`

## Methods
### Add(ILogProvider)
Adds a Provider to the collection
###### [View Source](https://github.com/WildernessLabs/Meadow.Logging.git/blob/develop/Source/Meadow.Logging/lib/LogProviderCollection.cs#L21)
```csharp title="Declaration"
public void Add(ILogProvider provider)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Logging.ILogProvider](../Meadow.Logging/ILogProvider) | *provider* |

### Remove(ILogProvider)
Adds a Provider to the collection
###### [View Source](https://github.com/WildernessLabs/Meadow.Logging.git/blob/develop/Source/Meadow.Logging/lib/LogProviderCollection.cs#L33)
```csharp title="Declaration"
public bool Remove(ILogProvider provider)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Logging.ILogProvider](../Meadow.Logging/ILogProvider) | *provider* |

### GetEnumerator()
Gets an Enumerator for the collection
###### [View Source](https://github.com/WildernessLabs/Meadow.Logging.git/blob/develop/Source/Meadow.Logging/lib/LogProviderCollection.cs#L45)
```csharp title="Declaration"
public IEnumerator<ILogProvider> GetEnumerator()
```

##### Returns

`System.Collections.Generic.IEnumerator<Meadow.Logging.ILogProvider>`

## Implements

* `System.Collections.Generic.IEnumerable<Meadow.Logging.ILogProvider>`
* `System.Collections.IEnumerable`
## Extension Methods
* System.Collections.Generic.IEnumerable&#123;Meadow.Logging.ILogProvider&#125;.Meadow.ExtensionMethods.Contains``1(Meadow.Logging.ILogProvider[])
* System.Collections.Generic.IEnumerable&#123;Meadow.Logging.ILogProvider&#125;.Meadow.ExtensionMethods.FirstIndexOf``1(Meadow.Logging.ILogProvider[])
