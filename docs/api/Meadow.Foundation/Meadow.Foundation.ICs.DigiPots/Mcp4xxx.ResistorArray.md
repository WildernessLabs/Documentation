---
title: Class Mcp4xxx.ResistorArray
sidebar_label: Mcp4xxx.ResistorArray
description: Represents a resistor array in an MCP4xxx digital potentiometer or rheostat.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.DigiPots/Mcp4xxx.ResistorArray
---
# Class Mcp4xxx.ResistorArray
Represents a resistor array in an MCP4xxx digital potentiometer or rheostat.

###### **Assembly**: Mcp4xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Mcp4xxx/Driver/Mcp4xxx.ResistorArray.cs#L14)
```csharp title="Declaration"
public class Mcp4xxx.ResistorArray : IPotentiometer, IRheostat
```
**Implements:**  
`Meadow.Hardware.IPotentiometer`, `Meadow.Hardware.IRheostat`

## Properties
### MaxResistance
Gets the maximum resistance of the rheostat.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Mcp4xxx/Driver/Mcp4xxx.ResistorArray.cs#L30)
```csharp title="Declaration"
public Resistance MaxResistance { get; }
```
### Resistance
Gets or sets the current resistance of the rheostat.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Mcp4xxx/Driver/Mcp4xxx.ResistorArray.cs#L33)
```csharp title="Declaration"
public Resistance Resistance { get; set; }
```
## Events
### Changed
Raised when a change is detected
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Mcp4xxx/Driver/Mcp4xxx.ResistorArray.cs#L48)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Resistance>>? Changed
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Resistance>>`

## Implements

* `Meadow.Hardware.IPotentiometer`
* `Meadow.Hardware.IRheostat`
