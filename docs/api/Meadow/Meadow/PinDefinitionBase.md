---
title: Class PinDefinitionBase
sidebar_label: PinDefinitionBase
description: Provides a base implementation for device pin lists.
slug: /docs/api/Meadow/Meadow/PinDefinitionBase
---
# Class PinDefinitionBase
Provides a base implementation for device pin lists.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/PinDefinitionBase.cs#L11)
```csharp title="Declaration"
public abstract class PinDefinitionBase : IPinDefinitions, IEnumerable<IPin>, IEnumerable
```
**Derived:**  
[Meadow.Hardware.GroveDigitalConnector.GroveDigitalPinDefinitions](../Meadow.Hardware/GroveDigitalConnector.GroveDigitalPinDefinitions), [Meadow.Hardware.I2cConnector.I2cPinDefinitions](../Meadow.Hardware/I2cConnector.I2cPinDefinitions), [Meadow.Hardware.MikroBusConnector.MikroBusPinDefinitions](../Meadow.Hardware/MikroBusConnector.MikroBusPinDefinitions), [Meadow.Hardware.UartConnector.UartPinDefinitions](../Meadow.Hardware/UartConnector.UartPinDefinitions)

**Implements:**  
[Meadow.Hardware.IPinDefinitions](../Meadow.Hardware/IPinDefinitions), `System.Collections.Generic.IEnumerable<Meadow.Hardware.IPin>`, `System.Collections.IEnumerable`

## Properties
### AllPins
Convenience property which contains all the pins available on the 
device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/PinDefinitionBase.cs#L16)
```csharp title="Declaration"
public virtual IList<IPin> AllPins { get; }
```
### Controller
Gets or sets the IPinController associated with the IPins
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/PinDefinitionBase.cs#L23)
```csharp title="Declaration"
public IPinController? Controller { get; set; }
```
### this[string]
Retrieves a pin from [Meadow.PinDefinitionBase.AllPins](../Meadow/PinDefinitionBase#allpins) by Name or Key
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/PinDefinitionBase.cs#L28)
```csharp title="Declaration"
public IPin this[string name] { get; }
```
## Methods
### GetEnumerator()
Returns an enumerator that iterates through the collection.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/PinDefinitionBase.cs#L71)
```csharp title="Declaration"
public IEnumerator<IPin> GetEnumerator()
```

##### Returns

`System.Collections.Generic.IEnumerator<Meadow.Hardware.IPin>`: An enumerator that can be used to iterate through the collection.
## Implements

* [Meadow.Hardware.IPinDefinitions](../Meadow.Hardware/IPinDefinitions)
* `System.Collections.Generic.IEnumerable<Meadow.Hardware.IPin>`
* `System.Collections.IEnumerable`
## Extension Methods
* System.Collections.Generic.IEnumerable&#123;Meadow.Hardware.IPin&#125;.Meadow.ExtensionMethods.Contains``1(Meadow.Hardware.IPin[])
* System.Collections.Generic.IEnumerable&#123;Meadow.Hardware.IPin&#125;.Meadow.ExtensionMethods.FirstIndexOf``1(Meadow.Hardware.IPin[])
