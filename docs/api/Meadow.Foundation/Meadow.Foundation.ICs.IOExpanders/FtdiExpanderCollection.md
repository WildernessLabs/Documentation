---
title: Class FtdiExpanderCollection
sidebar_label: FtdiExpanderCollection
description: Represents a collection of FtdiExpander devices connected to the host machine.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/FtdiExpanderCollection
---
# Class FtdiExpanderCollection
Represents a collection of FtdiExpander devices connected to the host machine.

###### **Assembly**: Ft2xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpanderCollection.cs#L13)
```csharp title="Declaration"
public class FtdiExpanderCollection : IEnumerable<FtdiExpander>, IEnumerable
```
**Implements:**  
`System.Collections.Generic.IEnumerable<Meadow.Foundation.ICs.IOExpanders.FtdiExpander>`, `System.Collections.IEnumerable`

## Properties
### Count
Gets the number of FtdiExpander devices connected to the host machine.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpanderCollection.cs#L22)
```csharp title="Declaration"
public int Count { get; }
```
### this[int]
Gets the FtdiExpander device at the specified index in the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpanderCollection.cs#L28)
```csharp title="Declaration"
public FtdiExpander this[int index] { get; }
```
### Devices
Gets the singleton instance of Ft232Collection, initializing it if necessary.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpanderCollection.cs#L92)
```csharp title="Declaration"
public static FtdiExpanderCollection Devices { get; }
```
## Methods
### Refresh()
Refresh the collection of FtdiExpander devices connected to the host machine.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpanderCollection.cs#L37)
```csharp title="Declaration"
public void Refresh()
```
### GetEnumerator()
Returns an enumerator that iterates through the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpanderCollection.cs#L79)
```csharp title="Declaration"
public IEnumerator<FtdiExpander> GetEnumerator()
```

##### Returns

`System.Collections.Generic.IEnumerator<Meadow.Foundation.ICs.IOExpanders.FtdiExpander>`: An enumerator that can be used to iterate through the collection.
## Implements

* `System.Collections.Generic.IEnumerable<Meadow.Foundation.ICs.IOExpanders.FtdiExpander>`
* `System.Collections.IEnumerable`
