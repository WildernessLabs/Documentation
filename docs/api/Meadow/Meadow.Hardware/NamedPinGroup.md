---
title: Class NamedPinGroup
sidebar_label: NamedPinGroup
description: Represents a group of named pins.
slug: /docs/api/Meadow/Meadow.Hardware/NamedPinGroup
---
# Class NamedPinGroup
Represents a group of named pins.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/NamedPinGroup.cs#L6)
```csharp title="Declaration"
public class NamedPinGroup
```
## Properties
### Name
Gets the name of the pin group.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/NamedPinGroup.cs#L11)
```csharp title="Declaration"
public string Name { get; protected set; }
```
### Pins
Gets the array of pins in the group.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/NamedPinGroup.cs#L16)
```csharp title="Declaration"
public IPin[] Pins { get; protected set; }
```
## Methods
### ToString()
Returns the Name of the [Meadow.Hardware.NamedPinGroup](../Meadow.Hardware/NamedPinGroup) object.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/NamedPinGroup.cs#L33)
```csharp title="Declaration"
public override string ToString()
```

##### Returns

`System.String`: The Name of the [Meadow.Hardware.NamedPinGroup](../Meadow.Hardware/NamedPinGroup) object.
