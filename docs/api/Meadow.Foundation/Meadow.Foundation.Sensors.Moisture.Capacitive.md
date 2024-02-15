---
uid: Meadow.Foundation.Sensors.Moisture.Capacitive
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Moisture.Capacitive
---

| Capacitive | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Capacitive) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Moisture.Capacitive/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Moisture.Capacitive.svg?label=Meadow.Foundation.Sensors.Moisture.Capacitive" alt="NuGet Gallery for Meadow.Foundation.Sensors.Moisture.Capacitive" /></a> |

Capacitive Soil Moisture sensor is a simple breakout for measuring the moisture in soil and similar materials. This sensor measures moisture levels by capacitive sensing, rather then resistive sensing like other types of moisture sensor such as the FC-28.

<img src="/API_Assets/Meadow.Foundation.Sensors.Moisture.Capacitive/img_Capacitive.jpg"  />

Capacitive sensing means measuring the dielectrum that is formed by the soil and the water is the most important factor that forms the dielectrum. Even though this kind of sensor might be a little pricier, it is made of corrosion resistant material giving it a longer service of life than a resistive sensor.

The following example shows how read the soil moisture every second:

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Capacitive _Capacitive;

    public MeadowApp()
    {
        // create a new Capacitive sensor object connected to analog pin A01
        _Capacitive = new Capacitive(Device.Pins.A01);

        Run();
    }

    async Task Run()
    {
        while (true)
        {
            float moisture = await _Capacitive.Read();
            Console.WriteLine($"Moisture: {0}", moisture);
            Thread.Sleep(1000);
        }
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Capacitive/Samples/) 

### Code Example

```csharp
Capacitive capacitive;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    capacitive = new Capacitive(
        Device.Pins.A00,
        minimumVoltageCalibration: new Voltage(2.84f),
        maximumVoltageCalibration: new Voltage(1.63f)
    );

    // Example that uses an IObservable subscription to only be notified when the moisture changes by filter defined.
    var consumer = Capacitive.CreateObserver(
        handler: result =>
        {
            string oldValue = (result.Old is { } old) ? $"{old:n2}" : "n/a";
            Resolver.Log.Info($"Subscribed - " +
                $"new: {result.New}, " +
                $"old: {oldValue}");
        },
        filter: null
    );
    capacitive.Subscribe(consumer);

    // classical .NET events can also be used:
    capacitive.MoistureUpdated += (sender, result) =>
    {
        string oldValue = (result.Old is { } old) ? $"{old:n2}" : "n/a";
        Resolver.Log.Info($"Updated - New: {result.New}, Old: {oldValue}");
    };

    //==== One-off reading use case/pattern
    ReadSensor().Wait();

    capacitive.StartUpdating(TimeSpan.FromMilliseconds(1000));

    return Task.CompletedTask;
}

protected async Task ReadSensor()
{
    var moisture = await capacitive.Read();
    Resolver.Log.Info($"Initial moisture: {moisture:n2}");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Capacitive/Samples/Capacitive_Sample)

### Wiring Example

<img src="/API_Assets/Meadow.Foundation.Sensors.Moisture.Capacitive/Capacitive_Fritzing.svg" />





# Class Capacitive
Capacitive Soil Moisture Sensor

###### **Assembly**: Capacitive.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Capacitive/Driver/Capacitive.cs#L12)
```csharp title="Declaration"
public class Capacitive : SamplingSensorBase<double>, IObservable<IChangeResult<double>>, IMoistureSensor, ISamplingSensor<double>, ISensor<double>, ISensor, ISamplingSensor, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../SamplingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<System.Double>>`, `Meadow.Peripherals.Sensors.Moisture.IMoistureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.Double>`, `Meadow.Peripherals.Sensors.ISensor<System.Double>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`

## Properties
### AnalogInputPort
Returns the analog input port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Capacitive/Driver/Capacitive.cs#L17)
```csharp title="Declaration"
protected IAnalogInputPort AnalogInputPort { get; }
```
### Moisture
Last value read from the moisture sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Capacitive/Driver/Capacitive.cs#L22)
```csharp title="Declaration"
public double? Moisture { get; protected set; }
```
### MinimumVoltageCalibration
Voltage value of most dry soil - default is 0 volts
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Capacitive/Driver/Capacitive.cs#L27)
```csharp title="Declaration"
public Voltage MinimumVoltageCalibration { get; set; }
```
### MaximumVoltageCalibration
Voltage value of most moist soil - default of 3.3V
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Capacitive/Driver/Capacitive.cs#L32)
```csharp title="Declaration"
public Voltage MaximumVoltageCalibration { get; set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Capacitive/Driver/Capacitive.cs#L37)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Capacitive/Driver/Capacitive.cs#L103)
```csharp title="Declaration"
protected override Task<double> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.Double>`: The latest sensor reading### StartUpdating(TimeSpan?)
Starts continuously sampling the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Capacitive/Driver/Capacitive.cs#L114)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* |

### StopUpdating()
Stops sampling the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Capacitive/Driver/Capacitive.cs#L127)
```csharp title="Declaration"
public override void StopUpdating()
```
### VoltageToMoisture(Voltage)
Converts voltage to moisture value, ranging from 0 (most dry) to 1 (most wet)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Capacitive/Driver/Capacitive.cs#L141)
```csharp title="Declaration"
protected double VoltageToMoisture(Voltage voltage)
```

##### Returns

`System.Double`

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Units.Voltage` | *voltage* |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Capacitive/Driver/Capacitive.cs#L151)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Capacitive/Driver/Capacitive.cs#L161)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `System.IObservable<Meadow.IChangeResult<System.Double>>`
* `Meadow.Peripherals.Sensors.Moisture.IMoistureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.Double>`
* `Meadow.Peripherals.Sensors.ISensor<System.Double>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `System.IDisposable`
