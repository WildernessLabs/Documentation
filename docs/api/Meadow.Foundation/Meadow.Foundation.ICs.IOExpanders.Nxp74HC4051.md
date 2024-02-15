---
uid: Meadow.Foundation.ICs.IOExpanders.Nxp74HC4051
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Nxp74HC4051
---

| Nxp74HC4051 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.AnalogMux/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.AnalogMux.svg?label=Meadow.Foundation.ICs.IOExpanders.AnalogMux" alt="NuGet Gallery for Meadow.Foundation.ICs.IOExpanders.AnalogMux" /></a> |

### Code Example

```csharp
private Nxp74HC4051 mux;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    mux = new Nxp74HC4051(
        Device.CreateAnalogInputPort(Device.Pins.A00),      // input
        Device.CreateDigitalOutputPort(Device.Pins.D00),    // s0
        Device.CreateDigitalOutputPort(Device.Pins.D01),    // s1
        Device.CreateDigitalOutputPort(Device.Pins.D02),    // s2
        Device.CreateDigitalOutputPort(Device.Pins.D03)     // enable
        );

    return base.Initialize();
}

public override Task Run()
{
    Task.Run(ReadRoundRobin);

    return base.Run();
}

public async Task ReadRoundRobin()
{
    while (true)
    {
        for (var channel = 0; channel < 8; channel++)
        {
            mux.SetInputChannel(channel);
            var read = await mux.Signal.Read();
            Resolver.Log.Info($"ADC Channel {channel} = {read.Volts:0.0}V");
            await Task.Delay(1000);
        }
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux/Samples/Nxp74HC4051_Sample)

### Wiring Example

To wire a Nxp74HC4051 to your Meadow board, connect the following:

| Nxp74HC4051  | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |

# Class Nxp74HC4051
Represents an NXP 74HC4051 8-channel analog multiplexer

###### **Assembly**: AnalogMux.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux/Driver/Drivers/Nxp74HC4051.cs#L9)
```csharp title="Declaration"
public class Nxp74HC4051 : AnalogMuxBase, IAnalogInputMultiplexer
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ICs.IOExpanders.AnalogMuxBase](../AnalogMuxBase)

**Implements:**  
[Meadow.Foundation.ICs.IOExpanders.IAnalogInputMultiplexer](../IAnalogInputMultiplexer)

## Properties
### S0
The port connected to the mux's S0 selection pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux/Driver/Drivers/Nxp74HC4051.cs#L14)
```csharp title="Declaration"
public IDigitalOutputPort S0 { get; }
```
### S1
The port connected to the mux's S1 selection pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux/Driver/Drivers/Nxp74HC4051.cs#L18)
```csharp title="Declaration"
public IDigitalOutputPort? S1 { get; }
```
### S2
The port connected to the mux's S2 selection pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux/Driver/Drivers/Nxp74HC4051.cs#L22)
```csharp title="Declaration"
public IDigitalOutputPort? S2 { get; }
```
## Methods
### SetInputChannel(int)
Sets the channel input (Y pin) that will be routed to the mux output (Z pin)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.AnalogMux/Driver/Drivers/Nxp74HC4051.cs#L40)
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
