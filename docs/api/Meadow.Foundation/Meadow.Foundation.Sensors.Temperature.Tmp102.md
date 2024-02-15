---
uid: Meadow.Foundation.Sensors.Temperature.Tmp102
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Tmp102
---

| Tmp102 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Tmp102) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Tmp102/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Temperature.Tmp102/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Temperature.Tmp102.svg?label=Meadow.Foundation.Sensors.Temperature.Tmp102" alt="NuGet Gallery for Meadow.Foundation.Sensors.Temperature.Tmp102" /></a> |

The **TMP102** is a temperature sensor capable of reading the current temperature with an accuracy of 0.5C over the range of -25C to 85C with a total range of -40C to 125C.

### Code Example

```csharp
Tmp102 tmp102;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    tmp102 = new Tmp102(Device.CreateI2cBus());

    var consumer = Tmp102.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Temperature New Value {result.New.Celsius}C");
            Resolver.Log.Info($"Temperature Old Value {result.Old?.Celsius}C");
        },
        filter: null
    );
    tmp102.Subscribe(consumer);

    tmp102.TemperatureUpdated += (object sender, IChangeResult<Meadow.Units.Temperature> e) =>
    {
        Resolver.Log.Info($"Temperature Updated: {e.New.Celsius:N2}C");
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    var temp = await tmp102.Read();
    Resolver.Log.Info($"Current temperature: {temp.Celsius} C");

    tmp102.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Tmp102/Samples/Tmp102_Sample)

### Wiring Example

TMP102 sensors can be connected to Meadow using only four connections:

<img src="/API_Assets/Meadow.Foundation.Sensors.Temperature.TMP102/TMP102_Fritzing.svg" />

# Class Tmp102
TMP102 Temperature sensor object

###### **Assembly**: Tmp102.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Tmp102/Driver/Tmp102.Resolution.cs#L3)
```csharp title="Declaration"
public class Tmp102 : ByteCommsSensorBase<Temperature>, IObservable<IChangeResult<Temperature>>, IDisposable, ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../ByteCommsSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Temperature>>`, `System.IDisposable`, `Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`

## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Tmp102/Driver/Tmp102.cs#L16)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### SensorResolution
Get / set the resolution of the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Tmp102/Driver/Tmp102.cs#L26)
```csharp title="Declaration"
public Tmp102.Resolution SensorResolution { get; set; }
```
### Temperature
The temperature from the last reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Tmp102/Driver/Tmp102.cs#L50)
```csharp title="Declaration"
public Temperature? Temperature { get; protected set; }
```
## Methods
### ReadSensor()
Update the Temperature property
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Tmp102/Driver/Tmp102.cs#L68)
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
