---
uid: Meadow.Foundation.Sensors.Light.Max44009
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Max44009
---

| Max44009 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Max44009) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Max44009/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Light.Max44009/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Light.Max44009.svg?label=Meadow.Foundation.Sensors.Light.Max44009" alt="NuGet Gallery for Meadow.Foundation.Sensors.Light.Max44009" /></a> |

The Max44009 is an analog ambient light sensor.

### Code Example

```csharp
Max44009 sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    sensor = new Max44009(Device.CreateI2cBus());

    // Example that uses an IObservable subscription to only be notified when the filter is satisfied
    var consumer = Max44009.CreateObserver(
        handler: result => Resolver.Log.Info($"Observer: filter satisfied: {result.New.Lux:N2}Lux, old: {result.Old?.Lux:N2}Lux"),

        // only notify if the visible light changes by 100 lux (put your hand over the sensor to trigger)
        filter: result =>
        {
            if (result.Old is { } old)
            {
                // returns true if > 100lux change
                return (result.New - old).Abs().Lux > 100;
            }
            return false;
        });

    sensor.Subscribe(consumer);

    // classical .NET events can also be used:
    sensor.Updated += (sender, result) => Resolver.Log.Info($"Light: {result.New.Lux:N2}Lux");

    return Task.CompletedTask;
}

public override async Task Run()
{
    var result = await sensor.Read();
    Resolver.Log.Info("Initial Readings:");
    Resolver.Log.Info($" Light: {result.Lux:N2}Lux");

    sensor.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Max44009/Samples/Max44009_Sample)

### Wiring Example

To wire a Max44009 to your Meadow board, connect the following:

| Max44009 | Meadow Pin  |
|----------|-------------|
| SCL      | D08         |
| SDA      | D07         |
| GND      | GND         |
| VCC      | 3V3         |

It should look like the following diagram:

<img src="/API_Assets/Meadow.Foundation.Sensors.Light.Max44009/Max44009_Fritzing.png" />





# Class Max44009
Driver for the Max44009 light-to-digital converter

###### **Assembly**: Max44009.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Max44009/Driver/Max44009.Enums.cs#L3)
```csharp title="Declaration"
public class Max44009 : ByteCommsSensorBase<Illuminance>, IObservable<IChangeResult<Illuminance>>, ISamplingSensor<Illuminance>, ISensor<Illuminance>, ISensor, ISamplingSensor, IDisposable, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../ByteCommsSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Illuminance>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Illuminance>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Illuminance>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`, `Meadow.Hardware.II2cPeripheral`

## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Max44009/Driver/Max44009.cs#L16)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Methods
### Initialize()
Initialize the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Max44009/Driver/Max44009.cs#L32)
```csharp title="Declaration"
protected void Initialize()
```
### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Max44009/Driver/Max44009.cs#L41)
```csharp title="Declaration"
protected override Task<Illuminance> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Illuminance>`: The latest sensor reading
## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Illuminance>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Illuminance>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Illuminance>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `System.IDisposable`
* `Meadow.Hardware.II2cPeripheral`
