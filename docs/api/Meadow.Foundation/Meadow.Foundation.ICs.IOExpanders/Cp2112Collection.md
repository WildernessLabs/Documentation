---
title: Class Cp2112Collection
sidebar_label: Cp2112Collection
description: >-
  Represents a collection of Cp2112 devices and provides functionality for
  device enumeration.
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/Cp2112Collection
---
# Class Cp2112Collection
Represents a collection of Cp2112 devices and provides functionality for device enumeration.

###### **Assembly**: Cp2112.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Cp2112/Driver/Cp2112Collection.cs#L11)
```csharp title="Declaration"
public class Cp2112Collection : IEnumerable<Cp2112>, IEnumerable
```
**Implements:**  
`System.Collections.Generic.IEnumerable<Meadow.Foundation.ICs.IOExpanders.Cp2112>`, `System.Collections.IEnumerable`

## Properties
### Count
Gets the number of Cp2112 devices connected to the host machine.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Cp2112/Driver/Cp2112Collection.cs#L20)
```csharp title="Declaration"
public int Count { get; }
```
### this[int]
Gets the Cp2112 device at the specified index in the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Cp2112/Driver/Cp2112Collection.cs#L26)
```csharp title="Declaration"
public Cp2112 this[int index] { get; }
```
### Devices
Gets the singleton instance of Cp2112Collection, initializing it if necessary.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Cp2112/Driver/Cp2112Collection.cs#L67)
```csharp title="Declaration"
public static Cp2112Collection Devices { get; }
```
## Methods
### Refresh()
Refreshes the collection by detecting and updating Cp2112 devices.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Cp2112/Driver/Cp2112Collection.cs#L35)
```csharp title="Declaration"
public void Refresh()
```
### GetEnumerator()
Returns an enumerator that iterates through the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Cp2112/Driver/Cp2112Collection.cs#L54)
```csharp title="Declaration"
public IEnumerator<Cp2112> GetEnumerator()
```

##### Returns

`System.Collections.Generic.IEnumerator<Meadow.Foundation.ICs.IOExpanders.Cp2112>`: An enumerator that can be used to iterate through the collection.
## Implements

* `System.Collections.Generic.IEnumerable<Meadow.Foundation.ICs.IOExpanders.Cp2112>`
* `System.Collections.IEnumerable`
