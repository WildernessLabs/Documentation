---
title: Class CanAcceptanceFilterCollection
sidebar_label: CanAcceptanceFilterCollection
description: Represents a collection of CAN acceptance filters.
slug: /docs/api/Meadow/Meadow.Hardware/CanAcceptanceFilterCollection
---
# Class CanAcceptanceFilterCollection
Represents a collection of CAN acceptance filters.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/CanAcceptanceFilterCollection.cs#L11)
```csharp title="Declaration"
public sealed class CanAcceptanceFilterCollection
```
## Properties
### MaxFilterCount
Gets the maximum number of filters that can be contained in the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/CanAcceptanceFilterCollection.cs#L23)
```csharp title="Declaration"
public int MaxFilterCount { get; }
```
### this[int]
Gets the filter at the specified index.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/CanAcceptanceFilterCollection.cs#L39)
```csharp title="Declaration"
public CanAcceptanceFilter this[int index] { get; }
```
### Count
Gets the count of filters in the collection
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/CanAcceptanceFilterCollection.cs#L53)
```csharp title="Declaration"
public int Count { get; }
```
## Methods
### Clear()
Removes all filters from the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/CanAcceptanceFilterCollection.cs#L67)
```csharp title="Declaration"
public void Clear()
```
### Add(CanAcceptanceFilter)
Adds a filter to the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/CanAcceptanceFilterCollection.cs#L82)
```csharp title="Declaration"
public void Add(CanAcceptanceFilter filter)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.CanAcceptanceFilter](../Meadow.Hardware/CanAcceptanceFilter) | *filter* | The filter to add. |

### Remove(CanAcceptanceFilter)
Removes a filter from the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/CanAcceptanceFilterCollection.cs#L101)
```csharp title="Declaration"
public void Remove(CanAcceptanceFilter filter)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.CanAcceptanceFilter](../Meadow.Hardware/CanAcceptanceFilter) | *filter* | The filter to remove. |

## Events
### CollectionChanged
Occurs when the collection is changed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/PortsAndBuses/CAN/CanAcceptanceFilterCollection.cs#L16)
```csharp title="Declaration"
public event EventHandler<(CollectionChangeAction Action, CanAcceptanceFilter Filter)>? CollectionChanged
```
##### Event Type
`System.EventHandler<System.ValueTuple<System.ComponentModel.CollectionChangeAction,Meadow.Hardware.CanAcceptanceFilter>>`
