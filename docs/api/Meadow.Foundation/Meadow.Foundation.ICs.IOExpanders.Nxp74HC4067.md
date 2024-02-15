---
uid: Meadow.Foundation.ICs.IOExpanders.Nxp74HC4067
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Nxp74HC4067
---

| Nxp74HC4067 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.AnalogMux/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.AnalogMux.svg?label=Meadow.Foundation.ICs.IOExpanders.AnalogMux" alt="NuGet Gallery for Meadow.Foundation.ICs.IOExpanders.AnalogMux" /></a> |

### Code Example

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux/Samples/Nxp74HC4067_Sample)

### Wiring Example

To wire a Mcp23s08 to your Meadow board, connect the following:

| Nxp74HC4067  | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |

# Class Nxp74HC4067
Represents an NXP 74HC4067 16-channel analog multiplexer

###### **Assembly**: AnalogMux.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux/Driver/Drivers/Nxp74HC4067.cs#L9)
```csharp title="Declaration"
public class Nxp74HC4067 : AnalogMuxBase, IAnalogInputMultiplexer
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ICs.IOExpanders.AnalogMuxBase](../AnalogMuxBase)

**Derived:**  
[Meadow.Foundation.ICs.IOExpanders.Hp4067](../Hp4067)

**Implements:**  
[Meadow.Foundation.ICs.IOExpanders.IAnalogInputMultiplexer](../IAnalogInputMultiplexer)

## Properties
### S0
The port connected to the mux's S0 selection pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux/Driver/Drivers/Nxp74HC4067.cs#L14)
```csharp title="Declaration"
public IDigitalOutputPort S0 { get; }
```
### S1
The port connected to the mux's S1 selection pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux/Driver/Drivers/Nxp74HC4067.cs#L18)
```csharp title="Declaration"
public IDigitalOutputPort? S1 { get; }
```
### S2
The port connected to the mux's S2 selection pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux/Driver/Drivers/Nxp74HC4067.cs#L22)
```csharp title="Declaration"
public IDigitalOutputPort? S2 { get; }
```
### S3
The port connected to the mux's S3 selection pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux/Driver/Drivers/Nxp74HC4067.cs#L26)
```csharp title="Declaration"
public IDigitalOutputPort? S3 { get; }
```
## Methods
### SetInputChannel(int)
Sets the channel input (Y pin) that will be routed to the mux output (Z pin)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux/Driver/Drivers/Nxp74HC4067.cs#L45)
```csharp title="Declaration"
public override void SetInputChannel(int channel)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *channel* |


##### Exceptions

`System.ArgumentOutOfRangeException`  


## Implements

* [Meadow.Foundation.ICs.IOExpanders.IAnalogInputMultiplexer](../IAnalogInputMultiplexer)
