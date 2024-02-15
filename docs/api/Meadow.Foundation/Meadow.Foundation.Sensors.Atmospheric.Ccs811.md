---
uid: Meadow.Foundation.Sensors.Atmospheric.Ccs811
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Ccs811
---

| Ccs811 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ccs811) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ccs811/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Ccs811/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Ccs811.svg?label=Meadow.Foundation.Sensors.Atmospheric.Ccs811" alt="NuGet Gallery for Meadow.Foundation.Sensors.Atmospheric.Ccs811" /></a> |

### Code Example

```csharp
Ccs811 sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    var i2cBus = Device.CreateI2cBus(Meadow.Hardware.I2cBusSpeed.Fast);
    sensor = new Ccs811(i2cBus);

    var consumer = Ccs811.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Observer triggered:");
            Resolver.Log.Info($"   new CO2: {result.New.Co2?.PartsPerMillion:N1}ppm, old: {result.Old?.Co2?.PartsPerMillion:N1}ppm.");
            Resolver.Log.Info($"   new VOC: {result.New.Voc?.PartsPerBillion:N1}ppb, old: {result.Old?.Voc?.PartsPerBillion:N1}ppb.");
        },
        filter: result =>
        {
            if (result.Old is { } old)
            {
                return (
                (result.New.Co2.Value - old.Co2.Value).Abs().PartsPerMillion > 1000 // 1000ppm
                  &&
                (result.New.Voc.Value - old.Voc.Value).Abs().PartsPerBillion > 100 // 100ppb
                );
            }
            return false;
        }
    );
    sensor.Subscribe(consumer);

    sensor.Updated += (sender, result) =>
    {
        Resolver.Log.Info($"CO2: {result.New.Co2.Value.PartsPerMillion:n1}ppm, VOC: {result.New.Voc.Value.PartsPerBillion:n1}ppb");
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    var result = await sensor.Read();
    Resolver.Log.Info("Initial Readings:");
    Resolver.Log.Info($"  CO2: {result.Co2.Value.PartsPerMillion:n1}ppm");
    Resolver.Log.Info($"  VOC: {result.Voc.Value.PartsPerBillion:n1}ppb");

    sensor.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ccs811/Samples/Ccs811_Sample)

### Wiring Example

To wire a Ccs811 to your Meadow board, connect the following:

| Ccs811     | Meadow Pin |
|-----------|------------|
| GND       | GND        |
| VCC       | 3V3        |
| SCL       | D08        |
| SDA       | D07        |

It should look like the following diagram:

<img src="/API_Assets/Meadow.Foundation.Sensors.Atmospheric.Ccs811/Ccs811_Fritzing.png" />


# Class Ccs811
Provide access to the CCS811 C02 and VOC Air Quality Sensor

###### **Assembly**: Ccs811.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ccs811/Driver/Ccs811.Enums.cs#L3)
```csharp title="Declaration"
public class Ccs811 : PollingSensorBase<(Concentration? Co2, Concentration? Voc)>, IObservable<IChangeResult<(Concentration? Co2, Concentration? Voc)>>, ISamplingSensor<(Concentration? Co2, Concentration? Voc)>, ISensor<(Concentration? Co2, Concentration? Voc)>, ICo2Sensor, IVocSensor, ISamplingSensor<Concentration>, ISensor<Concentration>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../PollingSensorBase`UNIT`)

**Implements:**  

<details><summary>Expand</summary>

`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Concentration>>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Concentration>>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Concentration>>>`, `Meadow.Peripherals.Sensors.Atmospheric.ICo2Sensor`, `Meadow.Peripherals.Sensors.Atmospheric.IVocSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Concentration>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Concentration>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`
</details>



## Properties
### Co2
The measured CO2 concentration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ccs811/Driver/Ccs811.cs#L38)
```csharp title="Declaration"
public Concentration? Co2 { get; }
```
### Voc
The measured VOC concentration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ccs811/Driver/Ccs811.cs#L43)
```csharp title="Declaration"
public Concentration? Voc { get; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ccs811/Driver/Ccs811.cs#L48)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Methods
### Initialize()
Initialize the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ccs811/Driver/Ccs811.cs#L85)
```csharp title="Declaration"
protected void Initialize()
```

##### Exceptions

`System.Exception`  
Raised if HW_ID register returns an invalid id
### GetBaseline()
Get baseline value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ccs811/Driver/Ccs811.cs#L123)
```csharp title="Declaration"
public ushort GetBaseline()
```

##### Returns

`System.UInt16`: The baseline value### SetBaseline(ushort)
Set the baseline value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ccs811/Driver/Ccs811.cs#L132)
```csharp title="Declaration"
public void SetBaseline(ushort value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.UInt16` | *value* | The new baseline |

### GetMeasurementMode()
Get the current measurement mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ccs811/Driver/Ccs811.cs#L141)
```csharp title="Declaration"
public Ccs811.MeasurementMode GetMeasurementMode()
```

##### Returns

[Meadow.Foundation.Sensors.Atmospheric.Ccs811.MeasurementMode](../Ccs811.MeasurementMode): The measurement mode### SetMeasurementMode(MeasurementMode)
Set the Measurement mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ccs811/Driver/Ccs811.cs#L150)
```csharp title="Declaration"
public void SetMeasurementMode(Ccs811.MeasurementMode mode)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Atmospheric.Ccs811.MeasurementMode](../Ccs811.MeasurementMode) | *mode* | The new mode |

### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ccs811/Driver/Ccs811.cs#L165)
```csharp title="Declaration"
protected override Task<(Concentration? Co2, Concentration? Voc)> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Concentration>>>`: The latest sensor reading### RaiseEventsAndNotify(IChangeResult&lt;(Concentration? Co2, Concentration? Voc)&gt;)
Raise events for subscribers and notify of value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ccs811/Driver/Ccs811.cs#L181)
```csharp title="Declaration"
protected override void RaiseEventsAndNotify(IChangeResult<(Concentration? Co2, Concentration? Voc)> changeResult)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Concentration>>>` | *changeResult* | The updated sensor data |

## Events
### VocUpdated
Event raised when the VOC concentration value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ccs811/Driver/Ccs811.cs#L33)
```csharp title="Declaration"
public event EventHandler<ChangeResult<Concentration>> VocUpdated
```
##### Event Type
`System.EventHandler<Meadow.ChangeResult<Meadow.Units.Concentration>>`

## Implements

* `System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Concentration>>>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Concentration>>>`
* `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Concentration>>>`
* `Meadow.Peripherals.Sensors.Atmospheric.ICo2Sensor`
* `Meadow.Peripherals.Sensors.Atmospheric.IVocSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Concentration>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Concentration>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
