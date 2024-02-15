---
uid: Meadow.Foundation.ICs.DigiPots.Mcp4262
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.DigiPots.Mcp4262
---

| Mcp4262 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Mcp4xxx) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Mcp4xxx/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.DigiPots.Mcp4xxx/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.DigiPots.Mcp4xxx.svg?label=Meadow.Foundation.ICs.DigiPots.Mcp4xxx" alt="NuGet Gallery for Meadow.Foundation.ICs.DigiPots.Mcp4xxx" /></a> |


# Class Mcp4262
Represents an MCP4262 digital rheostat.

###### **Assembly**: Mcp4xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Mcp4xxx/Driver/Drivers/Mcp4262.cs#L9)
```csharp title="Declaration"
public class Mcp4262 : Mcp4xx2, ISpiPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ICs.DigiPots.Mcp4xxx](../Mcp4xx2)

**Implements:**  
`Meadow.Hardware.ISpiPeripheral`

## Properties
### MaxSteps
Gets the maximum number of steps or resolution.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.DigiPots.Mcp4xxx/Driver/Drivers/Mcp4262.cs#L12)
```csharp title="Declaration"
public override int MaxSteps { get; }
```

## Implements

* `Meadow.Hardware.ISpiPeripheral`
