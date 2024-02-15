---
uid: Meadow.Foundation.Sensors.Atmospheric.Bh1900Nux
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Bh1900Nux
---

| Bh1900Nux | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Bh1900Nux/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Bh1900Nux.svg?label=Meadow.Foundation.Sensors.Atmospheric.Bh1900Nux" alt="NuGet Gallery for Meadow.Foundation.Sensors.Atmospheric.Bh1900Nux" /></a> |

### Code Example

```csharp
private Bh1900Nux _sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    _sensor = new Bh1900Nux(Device.CreateI2cBus(), Bh1900Nux.Addresses.Default);

    var consumer = Bh1900Nux.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Observer: Temp changed by threshold; new temp: {result.New.Celsius:N2}C, old: {result.Old?.Celsius:N2}C");
        },
        filter: result =>
        {
            if (result.Old is { } old)
            {
                return (result.New - old).Abs().Celsius > 0.5;
            }
            return false;
        }
    );
    _sensor.Subscribe(consumer);

    _sensor.Updated += (sender, result) =>
    {
        Resolver.Log.Info($"  Temperature: {result.New.Celsius:N2}C");
    };

    return Task.CompletedTask;
}

public async override Task Run()
{
    var conditions = await _sensor.Read();
    Resolver.Log.Info("Initial Readings:");
    Resolver.Log.Info($"  Temperature: {conditions.Celsius:N2}C");

    _sensor.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Samples/Bh1900Nux_Sample)

### Wiring Example

To wire a Adafruit Bh1900Nux Sensor to your Meadow board, connect the following:

| Bh1900Nux  | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| SCL    | D08        |
| SDA    | D07        |





# Class Bh1900Nux
Represents a Bh1900Nux temperature sensor

###### **Assembly**: Bh1900Nux.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Driver/Bh1900Nux.Register.cs#L3)
```csharp title="Declaration"
public class Bh1900Nux : ByteCommsSensorBase<Temperature>, IObservable<IChangeResult<Temperature>>, IDisposable, ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../ByteCommsSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Temperature>>`, `System.IDisposable`, `Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`

## Properties
### Temperature
The current temperature
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Driver/Bh1900Nux.cs#L16)
```csharp title="Declaration"
public Temperature? Temperature { get; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Driver/Bh1900Nux.cs#L21)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### MeasurementMode
The measurement mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Driver/Bh1900Nux.cs#L70)
```csharp title="Declaration"
public Bh1900Nux.MeasurementModes MeasurementMode { get; set; }
```
### FaultQueueDepth
The fault queue depth
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Driver/Bh1900Nux.cs#L111)
```csharp title="Declaration"
public Bh1900Nux.FaultQueue FaultQueueDepth { get; set; }
```
### AlertPolarity
The alert polarity
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Driver/Bh1900Nux.cs#L125)
```csharp title="Declaration"
public Bh1900Nux.Polarity AlertPolarity { get; set; }
```
### AlertIsActive
Is the alert active
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Driver/Bh1900Nux.cs#L146)
```csharp title="Declaration"
public bool AlertIsActive { get; }
```
### LowLimit
The temperature low limit
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Driver/Bh1900Nux.cs#L154)
```csharp title="Declaration"
public Temperature LowLimit { get; set; }
```
### HighLimit
The temperature high limit
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Driver/Bh1900Nux.cs#L171)
```csharp title="Declaration"
public Temperature HighLimit { get; set; }
```
## Methods
### Reset()
Reset the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Driver/Bh1900Nux.cs#L51)
```csharp title="Declaration"
public void Reset()
```
### Sleep()
Set the sensor to sleep state
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Driver/Bh1900Nux.cs#L91)
```csharp title="Declaration"
public void Sleep()
```
### Wake()
Wake the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Driver/Bh1900Nux.cs#L101)
```csharp title="Declaration"
public void Wake()
```
### ReadSensor()
Read the temperature
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Driver/Bh1900Nux.cs#L210)
```csharp title="Declaration"
protected override Task<Temperature> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Temperature>`: The current temperature value
## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Temperature>>`
* `System.IDisposable`
* `Meadow.Peripherals.Sensors.ITemperatureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
