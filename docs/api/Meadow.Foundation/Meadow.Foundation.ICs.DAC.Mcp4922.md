---
uid: Meadow.Foundation.ICs.DAC.Mcp4922
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.DAC.Mcp4922
---

| Mcp4922 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.DAC.Mcp492x) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.DAC.Mcp492x/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.DAC.MCP492x/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.DAC.MCP492x.svg?label=Meadow.Foundation.ICs.DAC.MCP492x" alt="NuGet Gallery for Meadow.Foundation.ICs.DAC.MCP492x" /></a> |


# Class Mcp4922
Represents the MCP4921 digital-to-analog converter (DAC) implementation,
inheriting from the base Mcp492x class.

###### **Assembly**: Mcp492x.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.DAC.Mcp492x/Driver/Drivers/Mcp4922.cs#L11)
```csharp title="Declaration"
public class Mcp4922 : Mcp492x, ISpiPeripheral, IAnalogOutputController, IPinController
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ICs.DAC.Mcp492x](../Mcp492x)

**Implements:**  
`Meadow.Hardware.ISpiPeripheral`, `Meadow.Hardware.IAnalogOutputController`, `Meadow.Hardware.IPinController`

## Properties
### Pins
The pins
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.DAC.Mcp492x/Driver/Drivers/Mcp4922.cs#L16)
```csharp title="Declaration"
public Mcp4922.PinDefinitions Pins { get; }
```

## Implements

* `Meadow.Hardware.ISpiPeripheral`
* `Meadow.Hardware.IAnalogOutputController`
* `Meadow.Hardware.IPinController`
