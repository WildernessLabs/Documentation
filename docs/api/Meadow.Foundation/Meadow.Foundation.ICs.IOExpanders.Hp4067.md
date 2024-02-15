---
uid: Meadow.Foundation.ICs.IOExpanders.Hp4067
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Hp4067
---

| Hp4067 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" />
 |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.AnalogMux/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.AnalogMux.svg?label=Meadow.Foundation.ICs.IOExpanders.AnalogMux" alt="NuGet Gallery for Meadow.Foundation.ICs.IOExpanders.AnalogMux" /></a> |

### Wiring Example

To wire a Hp4067 to your Meadow board, connect the following:

| Hp4067  | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |

# Class Hp4067
Represents an Ti HP4067 16-channel analog multiplexer.

###### **Assembly**: AnalogMux.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux/Driver/Drivers/Hp4067.cs#L9)
```csharp title="Declaration"
public class Hp4067 : Nxp74HC4067, IAnalogInputMultiplexer
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ICs.IOExpanders.AnalogMuxBase](../Nxp74HC4067)

**Implements:**  
[Meadow.Foundation.ICs.IOExpanders.IAnalogInputMultiplexer](../IAnalogInputMultiplexer)


## Implements

* [Meadow.Foundation.ICs.IOExpanders.IAnalogInputMultiplexer](../IAnalogInputMultiplexer)
