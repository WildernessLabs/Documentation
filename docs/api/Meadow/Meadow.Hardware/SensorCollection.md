---
title: Class SensorCollection
sidebar_label: SensorCollection
description: Represents a Collection of ISensors
slug: /docs/api/Meadow/Meadow.Hardware/SensorCollection
---
# Class SensorCollection
Represents a Collection of ISensors

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/SensorCollection.cs#L10)
```csharp title="Declaration"
public class SensorCollection : IEnumerable<ISensor>, IEnumerable
```
**Implements:**  
`System.Collections.Generic.IEnumerable<Meadow.Peripherals.Sensors.ISensor>`, `System.Collections.IEnumerable`

## Methods
### GetEnumerator()
Returns an enumerator that iterates through the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/SensorCollection.cs#L13)
```csharp title="Declaration"
public IEnumerator<ISensor> GetEnumerator()
```

##### Returns

`System.Collections.Generic.IEnumerator<Meadow.Peripherals.Sensors.ISensor>`: An enumerator that can be used to iterate through the collection.
## Implements

* `System.Collections.Generic.IEnumerable<Meadow.Peripherals.Sensors.ISensor>`
* `System.Collections.IEnumerable`
## Extension Methods
* System.Collections.Generic.IEnumerable&#123;Meadow.Peripherals.Sensors.ISensor&#125;.Meadow.ExtensionMethods.Contains``1(Meadow.Peripherals.Sensors.ISensor[])
* System.Collections.Generic.IEnumerable&#123;Meadow.Peripherals.Sensors.ISensor&#125;.Meadow.ExtensionMethods.FirstIndexOf``1(Meadow.Peripherals.Sensors.ISensor[])
