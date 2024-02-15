---
uid: Meadow.Foundation.Sensors.Light.Bh1750
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Bh1750
---

| Bh1750 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1750) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1750/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Light.Bh1750/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Light.Bh1750.svg?label=Meadow.Foundation.Sensors.Light.Bh1750" alt="NuGet Gallery for Meadow.Foundation.Sensors.Light.Bh1750" /></a> |

The BH1750 is a light intensity sensor that communicates over I2C. 

### Code Example

```csharp
Bh1750 sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    var i2c = Device.CreateI2cBus();
    sensor = new Bh1750(
        i2c,
        measuringMode: Mode.ContinuouslyHighResolutionMode, // the various modes take differing amounts of time.
        lightTransmittance: 1 // lower this to increase sensitivity, for instance, if it's behind a semi opaque window
        );

    // Example that uses an IObservable subscription to only be notified when the filter is satisfied
    var consumer = Bh1750.CreateObserver(
        handler: result => Resolver.Log.Info($"Observer: filter satisfied: {result.New.Lux:N2}Lux, old: {result.Old?.Lux:N2}Lux"),

        // only notify if the visible light changes by 100 lux (put your hand over the sensor to trigger)
        filter: result =>
        {
            if (result.Old is { } old)
            {
                // returns true if > 100lux change
                return ((result.New - old).Abs().Lux > 100);
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

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1750/Samples/Bh1750_Sample)

### Wiring Example

To wire a Bh1750 to your Meadow board, connect the following:

| Bh1750  | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| SCL     | D08 (SCL)   |
| SDA     | D07 (SDA)   |
| VCC     | 3V3         |

It should look like the following diagram:

<img src="/API_Assets/Meadow.Foundation.Sensors.Light.Bh1750/Bh1750_Fritzing.png" />





# Class Bh1750
Represents a BH1750 ambient light sensor

###### **Assembly**: Bh1750.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1750/Driver/Bh1750.MeasuringModes.cs#L3)
```csharp title="Declaration"
public class Bh1750 : ByteCommsSensorBase<Illuminance>, IObservable<IChangeResult<Illuminance>>, IDisposable, ILightSensor, ISamplingSensor<Illuminance>, ISensor<Illuminance>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../ByteCommsSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Illuminance>>`, `System.IDisposable`, `Meadow.Peripherals.Sensors.Light.ILightSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Illuminance>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Illuminance>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`

## Properties
### LightTransmittance
BH1750 Light Transmittance (27.20-222.50%)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1750/Driver/Bh1750.cs#L19)
```csharp title="Declaration"
public double LightTransmittance { get; set; }
```
### MeasuringMode
BH1750 Measuring Mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1750/Driver/Bh1750.cs#L29)
```csharp title="Declaration"
public Bh1750.MeasuringModes MeasuringMode { get; set; }
```
### Illuminance
The current illuminance read by the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1750/Driver/Bh1750.cs#L34)
```csharp title="Declaration"
public Illuminance? Illuminance { get; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1750/Driver/Bh1750.cs#L43)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Methods
### ReadSensor()
Read the current luminosity
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1750/Driver/Bh1750.cs#L70)
```csharp title="Declaration"
protected override Task<Illuminance> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Illuminance>`: The current Illuminance value
## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Illuminance>>`
* `System.IDisposable`
* `Meadow.Peripherals.Sensors.Light.ILightSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Illuminance>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Illuminance>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
