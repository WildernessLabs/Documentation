---
uid: Meadow.Foundation.Sensors.Temperature.Lm75
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Lm75
---

| Lm75 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Lm75) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Lm75/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Temperature.Lm75/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Temperature.Lm75.svg?label=Meadow.Foundation.Sensors.Temperature.Lm75" alt="NuGet Gallery for Meadow.Foundation.Sensors.Temperature.Lm75" /></a> |

### Code Example

```csharp
Lm75 lm75;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    lm75 = new Lm75(Device.CreateI2cBus());

    var consumer = Lm75.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Temperature New Value {result.New.Celsius}C");
            Resolver.Log.Info($"Temperature Old Value {result.Old?.Celsius}C");
        },
        filter: null
    );
    lm75.Subscribe(consumer);

    lm75.TemperatureUpdated += (object sender, IChangeResult<Meadow.Units.Temperature> e) =>
    {
        Resolver.Log.Info($"Temperature Updated: {e.New.Celsius:n2}C");
    };
    return Task.CompletedTask;
}

public override async Task Run()
{
    var temp = await lm75.Read();
    Resolver.Log.Info($"Temperature New Value {temp.Celsius}C");

    lm75.StartUpdating();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Lm75/Samples/Lm75_Sample)


# Class Lm75
TMP102 Temperature sensor object

###### **Assembly**: Lm75.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Lm75/Driver/Lm75.Registers.cs#L3)
```csharp title="Declaration"
public class Lm75 : ByteCommsSensorBase<Temperature>, IObservable<IChangeResult<Temperature>>, IDisposable, ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../ByteCommsSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Temperature>>`, `System.IDisposable`, `Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`

## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Lm75/Driver/Lm75.cs#L17)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### Temperature
The Temperature value from the last reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Lm75/Driver/Lm75.cs#L22)
```csharp title="Declaration"
public Temperature? Temperature { get; protected set; }
```
## Methods
### ReadSensor()
Update the Temperature property
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Lm75/Driver/Lm75.cs#L37)
```csharp title="Declaration"
protected override Task<Temperature> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Temperature>`

## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Temperature>>`
* `System.IDisposable`
* `Meadow.Peripherals.Sensors.ITemperatureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
