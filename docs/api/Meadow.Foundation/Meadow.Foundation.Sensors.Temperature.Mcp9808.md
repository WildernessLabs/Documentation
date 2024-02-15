---
uid: Meadow.Foundation.Sensors.Temperature.Mcp9808
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Mcp9808
---

| Mcp9808 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp9808) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp9808/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Temperature.Mcp9808/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Temperature.Mcp9808.svg?label=Meadow.Foundation.Sensors.Temperature.Mcp9808" alt="NuGet Gallery for Meadow.Foundation.Sensors.Temperature.Mcp9808" /></a> |

### Code Example

```csharp
Mcp9808 mcp9808;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    mcp9808 = new Mcp9808(Device.CreateI2cBus());

    var consumer = Mcp9808.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Temperature New Value {result.New.Celsius}C");
            Resolver.Log.Info($"Temperature Old Value {result.Old?.Celsius}C");
        },
        filter: null
    );
    mcp9808.Subscribe(consumer);

    mcp9808.TemperatureUpdated += (object sender, IChangeResult<Meadow.Units.Temperature> e) =>
    {
        Resolver.Log.Info($"Temperature Updated: {e.New.Celsius:N2}C");
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    var temp = await mcp9808.Read();

    Resolver.Log.Info($"Temperature New Value {temp.Celsius}C");

    mcp9808.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp9808/Samples/Mcp9808_Sample)


# Class Mcp9808
Represents a Mcp9808 temperature sensor

###### **Assembly**: Mcp9808.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp9808/Driver/Mcp9808.Registers.cs#L3)
```csharp title="Declaration"
public class Mcp9808 : ByteCommsSensorBase<Temperature>, IObservable<IChangeResult<Temperature>>, IDisposable, ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../ByteCommsSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Temperature>>`, `System.IDisposable`, `Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`

## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp9808/Driver/Mcp9808.cs#L16)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### Temperature
The temperature, in degrees celsius (°C), from the last reading.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp9808/Driver/Mcp9808.cs#L21)
```csharp title="Declaration"
public Temperature? Temperature { get; protected set; }
```
## Methods
### Wake()
Wake the device if it's in sleep state
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp9808/Driver/Mcp9808.cs#L37)
```csharp title="Declaration"
public void Wake()
```
### Sleep()
Set the device into a low power sleep state
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp9808/Driver/Mcp9808.cs#L49)
```csharp title="Declaration"
public void Sleep()
```
### GetDeviceId()
Read the device ID
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp9808/Driver/Mcp9808.cs#L59)
```csharp title="Declaration"
public ushort GetDeviceId()
```

##### Returns

`System.UInt16`
### GetManufactureId()
Read the manufacture ID
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp9808/Driver/Mcp9808.cs#L67)
```csharp title="Declaration"
public ushort GetManufactureId()
```

##### Returns

`System.UInt16`
### GetResolution()
Read resolution
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp9808/Driver/Mcp9808.cs#L75)
```csharp title="Declaration"
public byte GetResolution()
```

##### Returns

`System.Byte`
### SetResolution(byte)
Set resolution
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp9808/Driver/Mcp9808.cs#L83)
```csharp title="Declaration"
public void SetResolution(byte resolution)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *resolution* |

### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Mcp9808/Driver/Mcp9808.cs#L92)
```csharp title="Declaration"
protected override Task<Temperature> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Temperature>`: The latest sensor reading
## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Temperature>>`
* `System.IDisposable`
* `Meadow.Peripherals.Sensors.ITemperatureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
