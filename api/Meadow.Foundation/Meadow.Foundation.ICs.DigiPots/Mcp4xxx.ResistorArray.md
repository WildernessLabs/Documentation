---
title: Class Mcp4xxx.ResistorArray
sidebar_label: Mcp4xxx.ResistorArray
description: "Represents a resistor array in an MCP4xxx digital potentiometer or rheostat."
---
# Class Mcp4xxx.ResistorArray
Represents a resistor array in an MCP4xxx digital potentiometer or rheostat.

###### **Assembly**: Mcp4xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Mcp4xxx/Driver/Mcp4xxx.ResistorArray.cs#L12)
```csharp title="Declaration"
public class Mcp4xxx.ResistorArray : IPotentiometer, IRheostat
```
**Implements:**  
`Meadow.Hardware.IPotentiometer`, `Meadow.Hardware.IRheostat`

## Properties
### MaxResistance
Gets the maximum resistance of the rheostat.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Mcp4xxx/Driver/Mcp4xxx.ResistorArray.cs#L25)
```csharp title="Declaration"
public Resistance MaxResistance { get; }
```
### Resistance
Gets or sets the current resistance of the rheostat.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Mcp4xxx/Driver/Mcp4xxx.ResistorArray.cs#L28)
```csharp title="Declaration"
public Resistance Resistance { get; set; }
```

## Implements

* `Meadow.Hardware.IPotentiometer`
* `Meadow.Hardware.IRheostat`
