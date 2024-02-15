---
uid: Meadow.Foundation.ICs.IOExpanders.Mcp3201
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp3201
---

| Mcp3201 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.ADCs.Mcp3xxx/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.ADCs.Mcp3xxx.svg?label=Meadow.Foundation.ICs.ADCs.Mcp3xxx" alt="NuGet Gallery for Meadow.Foundation.ICs.ADCs.Mcp3xxx" /></a> |

### Code Example

```csharp
Mcp3201 mcp;

IAnalogInputPort port;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize");

    IDigitalOutputPort chipSelectPort = Device.CreateDigitalOutputPort(Device.Pins.D14);

    mcp = new Mcp3201(Device.CreateSpiBus(), chipSelectPort);

    port = mcp.CreateAnalogInputPort();

    port.Updated += (s, result) =>
    {
        Resolver.Log.Info($"Analog event, new voltage: {result.New.Volts}V, old: {result.Old?.Volts}V");
    };

    var observer = IAnalogInputPort.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Analog observer triggered; new: {result.New.Volts}V, old: {result.Old?.Volts}V");
        },
        filter: result =>
        {
            if (result.Old is { } oldValue)
            {
                return (result.New - oldValue).Abs().Volts > 0.1;
            }
            else { return false; }
        }
    );
    port.Subscribe(observer);

    return base.Initialize();
}

public override Task Run()
{
    Resolver.Log.Info("Run");

    port.StartUpdating();

    Resolver.Log.Info("Run complete");

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Samples/Mcp3201_Sample)


# Class Mcp3201
MCP3002 Analog to Digital Converter (ADC)

###### **Assembly**: Mcp3xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Drivers/Mcp3201.cs#L11)
```csharp title="Declaration"
public class Mcp3201 : Mcp3xxx, IAnalogInputController, IPinController, ISpiPeripheral, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ICs.IOExpanders.Mcp3xxx](../Mcp3xxx)

**Implements:**  
`Meadow.Hardware.IAnalogInputController`, `Meadow.Hardware.IPinController`, `Meadow.Hardware.ISpiPeripheral`, `System.IDisposable`

## Properties
### Pins
The pins
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Drivers/Mcp3201.cs#L16)
```csharp title="Declaration"
public Mcp3201.PinDefinitions Pins { get; }
```
## Methods
### IsInputTypeSupported(InputType)
Is the input type supported on this MCP3xxx version
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Drivers/Mcp3201.cs#L41)
```csharp title="Declaration"
public override bool IsInputTypeSupported(Mcp3xxx.InputType inputType)
```

##### Returns

`System.Boolean`: True if supported, false if not supported
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.ICs.IOExpanders.Mcp3xxx.InputType](../Mcp3xxx.InputType) | *inputType* | The input type |

### CreateAnalogInputPort(int)
Create an analog input port for a pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Drivers/Mcp3201.cs#L52)
```csharp title="Declaration"
public IAnalogInputPort CreateAnalogInputPort(int sampleCount = 64)
```

##### Returns

`Meadow.Hardware.IAnalogInputPort`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *sampleCount* |

### CreateAnalogInputPort(int, TimeSpan, Voltage)
Create an analog input port for a pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Drivers/Mcp3201.cs#L60)
```csharp title="Declaration"
public IAnalogInputPort CreateAnalogInputPort(int sampleCount, TimeSpan sampleInterval, Voltage voltageReference)
```

##### Returns

`Meadow.Hardware.IAnalogInputPort`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *sampleCount* |
| `System.TimeSpan` | *sampleInterval* |
| `Meadow.Units.Voltage` | *voltageReference* |

### ReadInternal(int, InputType, int)
Reads a value from the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.ADCs.Mcp3xxx/Driver/Drivers/Mcp3201.cs#L74)
```csharp title="Declaration"
protected override int ReadInternal(int channel, Mcp3xxx.InputType inputType, int adcResolutionBits)
```

##### Returns

`System.Int32`: A value corresponding to relative voltage level on specified device channel
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *channel* | Channel to read - for differential inputs this represents a channel pair (valid values: 0 - channelcount - 1 or 0 - channelcount / 2 - 1  with differential inputs) |
| [Meadow.Foundation.ICs.IOExpanders.Mcp3xxx.InputType](../Mcp3xxx.InputType) | *inputType* | The type of input channel to read |
| `System.Int32` | *adcResolutionBits* | The number of bits in the returned value |


## Implements

* `Meadow.Hardware.IAnalogInputController`
* `Meadow.Hardware.IPinController`
* `Meadow.Hardware.ISpiPeripheral`
* `System.IDisposable`
