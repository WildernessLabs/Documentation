---
title: Interface IPinDefinitions
sidebar_label: IPinDefinitions
description: Contract for device pin lists.
slug: /docs/api/Meadow/Meadow.Hardware/IPinDefinitions
---
# Interface IPinDefinitions
Contract for device pin lists.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IPinDefinitions.cs#L9)
```csharp title="Declaration"
public interface IPinDefinitions : IEnumerable<IPin>, IEnumerable
```
## Properties
### AllPins
Convenience property which contains all the pins available on the 
device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IPinDefinitions.cs#L16)
```csharp title="Declaration"
IList<IPin> AllPins { get; }
```
### this[string]
Retrieves a pin from [Meadow.Hardware.IPinDefinitions.AllPins](../Meadow.Hardware/IPinDefinitions#allpins) by Name or Key
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IPinDefinitions.cs#L21)
```csharp title="Declaration"
IPin this[string name] { get; }
```
### Controller
Gets or sets the IPinController associated with the IPins
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IPinDefinitions.cs#L31)
```csharp title="Declaration"
IPinController? Controller { get; set; }
```
## Extension Methods
* System.Collections.Generic.IEnumerable&#123;Meadow.Hardware.IPin&#125;.Meadow.ExtensionMethods.Contains``1(Meadow.Hardware.IPin[])
* System.Collections.Generic.IEnumerable&#123;Meadow.Hardware.IPin&#125;.Meadow.ExtensionMethods.FirstIndexOf``1(Meadow.Hardware.IPin[])
