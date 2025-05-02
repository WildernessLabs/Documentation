---
title: Interface IRheostat
sidebar_label: IRheostat
description: Represents an adjustable resistor (rheostat).
slug: /docs/api/Meadow/Meadow.Hardware/IRheostat
---
# Interface IRheostat
Represents an adjustable resistor (rheostat).

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/IRheostat.cs#L28)
```csharp title="Declaration"
public interface IRheostat
```
## Properties
### MaxResistance
Gets the maximum resistance of the rheostat.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/IRheostat.cs#L38)
```csharp title="Declaration"
Resistance MaxResistance { get; }
```
### Resistance
Gets or sets the current resistance of the rheostat.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/IRheostat.cs#L43)
```csharp title="Declaration"
Resistance Resistance { get; set; }
```
## Events
### Changed
Raised when a change is detected
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/IRheostat.cs#L33)
```csharp title="Declaration"
event EventHandler<IChangeResult<Resistance>>? Changed
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Resistance>>`
