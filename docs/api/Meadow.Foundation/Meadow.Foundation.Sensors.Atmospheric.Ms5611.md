---
uid: Meadow.Foundation.Sensors.Atmospheric.Ms5611
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Ms5611
---

| Ms5611 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ms5611) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ms5611/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Ms5611/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Ms5611.svg?label=Meadow.Foundation.Sensors.Atmospheric.Ms5611" alt="NuGet Gallery for Meadow.Foundation.Sensors.Atmospheric.Ms5611" /></a> |

The MS5611 is a barometer and temperature sensor that communicates over I2C or SPI up to 20Mhz. Operating range: 10 to 1200 mbar, -40 to +85 °C.

### Code Example

```csharp
Ms5611 sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    sensor = new Ms5611(Device.CreateI2cBus());

    var consumer = Ms5611.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Observer: Temp changed by threshold; new temp: {result.New.Temperature?.Celsius:N2}C, old: {result.Old?.Temperature?.Celsius:N2}C");
        },
        filter: result =>
        {
            if (result.Old is { } old)
            {
                return (
                (result.New.Temperature.Value - old.Temperature.Value).Abs().Celsius > 0.5
                &&
                (result.New.Pressure.Value - old.Pressure.Value).Millibar > 0.5
                );
            }
            return false;
        }
    );
    sensor.Subscribe(consumer);

    sensor.Updated += (sender, result) =>
    {
        Resolver.Log.Info($"  Temperature: {result.New.Temperature?.Celsius:N2}C");
        Resolver.Log.Info($"  Pressure: {result.New.Pressure?.Millibar:N2}mbar ({result.New.Pressure?.Pascal:N2}Pa)");
    };

    return Task.CompletedTask;
}

public async override Task Run()
{
    var conditions = await sensor.Read();
    Resolver.Log.Info("Initial Readings:");
    Resolver.Log.Info($" Temperature: {conditions.Temperature?.Celsius:N2}C");
    Resolver.Log.Info($" Pressure: {conditions.Pressure?.Bar:N2}hPa");

    sensor.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ms5611/Samples/Ms5611_Sample)

### Wiring Example

To wire a Ms5611 to your Meadow board, connect the following:

| Ms5611 | Meadow Pin  |
|--------|-------------|
| GND    | GND         |
| SCL    | D08 (SCL)   |
| SDA    | D07 (SDA)   |
| VCC    | 3V3         |

It should look like the following diagram:

<img src="/API_Assets/Meadow.Foundation.Sensors.Atmospheric.Ms5611/Ms5611_Fritzing.png" />





# Class Ms5611
Represents an Ms5611 pressure and temperature sensor

###### **Assembly**: Ms5611.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ms5611/Driver/Ms5611.Enums.cs#L3)
```csharp title="Declaration"
public class Ms5611 : PollingSensorBase<(Temperature? Temperature, Pressure? Pressure)>, IObservable<IChangeResult<(Temperature? Temperature, Pressure? Pressure)>>, ISamplingSensor<(Temperature? Temperature, Pressure? Pressure)>, ISensor<(Temperature? Temperature, Pressure? Pressure)>, ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, IBarometricPressureSensor, ISamplingSensor<Pressure>, ISensor<Pressure>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../PollingSensorBase`UNIT`)

**Implements:**  

<details><summary>Expand</summary>

`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.Pressure>>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.Pressure>>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.Pressure>>>`, `Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.Atmospheric.IBarometricPressureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Pressure>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Pressure>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`
</details>



## Properties
### Temperature
The current temperature
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ms5611/Driver/Ms5611.cs#L36)
```csharp title="Declaration"
public Temperature? Temperature { get; }
```
### Pressure
The current pressure
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ms5611/Driver/Ms5611.cs#L41)
```csharp title="Declaration"
public Pressure? Pressure { get; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ms5611/Driver/Ms5611.cs#L46)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Fields
### i2cComms
I2C Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ms5611/Driver/Ms5611.cs#L51)
```csharp title="Declaration"
protected readonly II2cCommunications i2cComms
```
## Methods
### RaiseEventsAndNotify(IChangeResult&lt;(Temperature? Temperature, Pressure? Pressure)&gt;)
Raise events for subscribers and notify of value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ms5611/Driver/Ms5611.cs#L70)
```csharp title="Declaration"
protected override void RaiseEventsAndNotify(IChangeResult<(Temperature? Temperature, Pressure? Pressure)> changeResult)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.Pressure>>>` | *changeResult* | The updated sensor data |

### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ms5611/Driver/Ms5611.cs#L87)
```csharp title="Declaration"
protected override Task<(Temperature? Temperature, Pressure? Pressure)> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.Pressure>>>`: The latest sensor reading### Reset()
Reset the MS5611
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ms5611/Driver/Ms5611.cs#L100)
```csharp title="Declaration"
public void Reset()
```

## Implements

* `System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.Pressure>>>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.Pressure>>>`
* `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Temperature>,System.Nullable<Meadow.Units.Pressure>>>`
* `Meadow.Peripherals.Sensors.ITemperatureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.Atmospheric.IBarometricPressureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Pressure>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Pressure>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
