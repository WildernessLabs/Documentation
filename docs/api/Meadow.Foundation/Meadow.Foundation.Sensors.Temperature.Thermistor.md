---
uid: Meadow.Foundation.Sensors.Temperature.Thermistor
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Thermistor
---

| Thermistor | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Temperature.Thermistor/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Temperature.Thermistor.svg?label=Meadow.Foundation.Sensors.Temperature.Thermistor" alt="NuGet Gallery for Meadow.Foundation.Sensors.Temperature.Thermistor" /></a> |

### Code Example

```csharp
private SteinhartHartCalculatedThermistor thermistor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    thermistor = new SteinhartHartCalculatedThermistor(Device.CreateAnalogInputPort(Device.Pins.A00), new Resistance(10, Meadow.Units.Resistance.UnitType.Kiloohms));

    var consumer = SteinhartHartCalculatedThermistor.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Temperature New Value {result.New.Fahrenheit:N1}F/{result.New.Celsius:N1}C");
            Resolver.Log.Info($"Temperature Old Value {result.Old?.Fahrenheit:N1}F/{result.Old?.Celsius:N1}C");
        },
        filter: null
    );
    thermistor.Subscribe(consumer);

    thermistor.TemperatureUpdated += (object sender, IChangeResult<Meadow.Units.Temperature> e) =>
    {
        Resolver.Log.Info($"Temperature Updated: {e.New.Fahrenheit:N1}F/{e.New.Celsius:N1}C");
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    var temp = await thermistor.Read();
    Resolver.Log.Info($"Current temperature: {temp.Fahrenheit:N1}F/{temp.Celsius:N1}C");

    thermistor.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Samples/Thermistor_Sample)


# Class Thermistor
Thermistor temperature sensor object

###### **Assembly**: Thermistor.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/Thermistor.cs#L18)
```csharp title="Declaration"
public abstract class Thermistor : SamplingSensorBase<Temperature>, IObservable<IChangeResult<Temperature>>, ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, ISensor, ISamplingSensor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../SamplingSensorBase`UNIT`)

**Derived:**  
[Meadow.Foundation.Sensors.Temperature.SteinhartHartCalculatedThermistor](../SteinhartHartCalculatedThermistor)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Temperature>>`, `Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`

## Properties
### AnalogInputPort
The analog input port used to determine output voltage of the voltage divider circuit
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/Thermistor.cs#L23)
```csharp title="Declaration"
protected IAnalogInputPort AnalogInputPort { get; }
```
### NominalResistance
The nominal resistance of the thermistor (e.g. 10kOhm for a 10k thermistor)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/Thermistor.cs#L27)
```csharp title="Declaration"
public abstract Resistance NominalResistance { get; }
```
### NominalTemperature
The nominal temperature for the nominal resistance, typically 25C
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/Thermistor.cs#L31)
```csharp title="Declaration"
public virtual Temperature NominalTemperature { get; }
```
### Temperature
The temperature from the last reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/Thermistor.cs#L70)
```csharp title="Declaration"
public Temperature? Temperature { get; protected set; }
```
## Methods
### StartUpdating(TimeSpan?)
Starts updating the sensor on the updateInterval frequency specified
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/Thermistor.cs#L46)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval = null)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* | A TimeSpan that specifies how long to
            wait between readings |

### StopUpdating()
Stops sampling the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/Thermistor.cs#L57)
```csharp title="Declaration"
public override void StopUpdating()
```
## Events
### TemperatureUpdated
Raised when the temperature is updated
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Driver/Thermistor.cs#L75)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Temperature>> TemperatureUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Temperature>>`

## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Temperature>>`
* `Meadow.Peripherals.Sensors.ITemperatureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
