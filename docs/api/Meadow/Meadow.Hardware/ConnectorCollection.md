---
title: Class ConnectorCollection
sidebar_label: ConnectorCollection
description: Represents a Collection of IConnectors
slug: /docs/api/Meadow/Meadow.Hardware/ConnectorCollection
---
# Class ConnectorCollection
Represents a Collection of IConnectors

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/ConnectorCollection.cs#L9)
```csharp title="Declaration"
public class ConnectorCollection : IEnumerable<IConnector>, IEnumerable
```
**Implements:**  
`System.Collections.Generic.IEnumerable<Meadow.IConnector>`, `System.Collections.IEnumerable`

## Properties
### Empty
Retrieves an empty ConnectorCollection
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/ConnectorCollection.cs#L41)
```csharp title="Declaration"
public static ConnectorCollection Empty { get; }
```
## Methods
### GetEnumerator()
Returns an enumerator that iterates through the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/ConnectorCollection.cs#L19)
```csharp title="Declaration"
public IEnumerator<IConnector> GetEnumerator()
```

##### Returns

`System.Collections.Generic.IEnumerator<Meadow.IConnector>`: An enumerator that can be used to iterate through the collection.### Add(IConnector)
Adds a connector to the collection
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/ConnectorCollection.cs#L33)
```csharp title="Declaration"
protected void Add(IConnector connector)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.IConnector](../Meadow/IConnector) | *connector* | The Connector instance to add |


## Implements

* `System.Collections.Generic.IEnumerable<Meadow.IConnector>`
* `System.Collections.IEnumerable`
## Extension Methods
* System.Collections.Generic.IEnumerable&#123;Meadow.IConnector&#125;.Meadow.ExtensionMethods.Contains``1(Meadow.IConnector[])
* System.Collections.Generic.IEnumerable&#123;Meadow.IConnector&#125;.Meadow.ExtensionMethods.FirstIndexOf``1(Meadow.IConnector[])
