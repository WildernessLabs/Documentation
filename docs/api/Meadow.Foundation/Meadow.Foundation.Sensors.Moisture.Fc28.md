---
uid: Meadow.Foundation.Sensors.Moisture.Fc28
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Moisture.Fc28
---

| Fc28 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Fc28) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Fc28/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Moisture.Fc28/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Moisture.Fc28.svg?label=Meadow.Foundation.Sensors.Moisture.Fc28" alt="NuGet Gallery for Meadow.Foundation.Sensors.Moisture.Fc28" /></a> |

**FC-28** Soil Moisture Sensor is a simple breakout for measuring the moisture in soil and similar materials. The sensor has two probes and measures the resistance between them, which means this sensor is of type Resistive. Since water is conductive, as moisture in the soil increases, the resistance decreases allowing the sensor to determine soil humidity. 

<img src="/API_Assets/Meadow.Foundation.Sensors.Moisture.FC28/img_FC28.jpg"  />

The biggest issue of this sensor is the corrosion of the probes, not just because it is in contact with the soil but also because there is a DC current flowing which causes electrolysis of the sensors. A work-around to prolong the life of the probes is to not constantly have the sensor powered on, but activate it every time the sensor will perform a read using a digital output port connected to the VCC pin. The code and circuit example shows you how to use it.

The following example shows how read the soil moisture every second:

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Fc28 fc28;

    public MeadowApp()
    {
        Console.WriteLine("Initializing...");

        fc28 = new Fc28(
            Device.CreateAnalogInputPort(Device.Pins.A01),
            Device.CreateDigitalOutputPort(Device.Pins.D15),
            minimumVoltageCalibration: 3.24f,
            maximumVoltageCalibration: 2.25f
        );

        TestFC28Updating();
    }

    void TestFC28Updating() 
    {
        Console.WriteLine("TestFC28Updating...");

        fc28.Subscribe(new FilterableObserver<FloatChangeResult, float>(
            h => { Console.WriteLine($"Moisture values: {Math.Truncate(h.New)}, old: {Math.Truncate(h.Old)}, delta: {h.DeltaPercent}"); },
            e => { return true; }
        ));

        fc28.Updated += (object sender, FloatChangeResult e) =>
        {
            Console.WriteLine($"Moisture Updated: {e.New}");
        };

        fc28.StartUpdating();
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.FC28/Samples/) 

### Code Example

```csharp
Fc28 fc28;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    fc28 = new Fc28(
        Device.CreateAnalogInputPort(Device.Pins.A01, 5, TimeSpan.FromMilliseconds(40), new Voltage(3.3, Voltage.UnitType.Volts)),
        Device.CreateDigitalOutputPort(Device.Pins.D15),
        minimumVoltageCalibration: new Voltage(3.24f, VU.Volts),
        maximumVoltageCalibration: new Voltage(2.25f, VU.Volts)
    );

    var consumer = Fc28.CreateObserver(
        handler: result =>
        {
            // the first time through, old will be null.
            string oldValue = (result.Old is { } old) ? $"{old:n2}" : "n/a";
            Resolver.Log.Info($"Subscribed - " +
                $"new: {result.New}, " +
                $"old: {oldValue}");
        },
        filter: null
    );
    fc28.Subscribe(consumer);

    fc28.MoistureUpdated += (object sender, IChangeResult<double> e) =>
    {
        Resolver.Log.Info($"Moisture Updated: {e.New}");
    };

    return Task.CompletedTask;
}

public async override Task Run()
{
    var moisture = await fc28.Read();
    Resolver.Log.Info($"Moisture Value {moisture}");

    fc28.StartUpdating(TimeSpan.FromMilliseconds(5000));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Fc28/Samples/Fc28_Sample)

### Wiring Example

<img src="/API_Assets/Meadow.Foundation.Sensors.Moisture.FC28/FC28_Fritzing.svg" />





# Class Fc28
FC-28-D Soil Hygrometer Detection Module + Soil Moisture Sensor

###### **Assembly**: Fc28.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Fc28/Driver/Fc28.cs#L12)
```csharp title="Declaration"
public class Fc28 : PollingSensorBase<double>, IObservable<IChangeResult<double>>, IMoistureSensor, ISamplingSensor<double>, ISensor<double>, ISensor, ISamplingSensor, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../PollingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<System.Double>>`, `Meadow.Peripherals.Sensors.Moisture.IMoistureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.Double>`, `Meadow.Peripherals.Sensors.ISensor<System.Double>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`

## Properties
### AnalogInputPort
Returns the analog input port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Fc28/Driver/Fc28.cs#L17)
```csharp title="Declaration"
protected IAnalogInputPort AnalogInputPort { get; }
```
### DigitalOutputPort
Returns the digital output port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Fc28/Driver/Fc28.cs#L22)
```csharp title="Declaration"
protected IDigitalOutputPort DigitalOutputPort { get; }
```
### Moisture
Last value read from the moisture sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Fc28/Driver/Fc28.cs#L27)
```csharp title="Declaration"
public double? Moisture { get; protected set; }
```
### MinimumVoltageCalibration
Voltage value of most dry soil - default is 0 volts
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Fc28/Driver/Fc28.cs#L32)
```csharp title="Declaration"
public Voltage MinimumVoltageCalibration { get; set; }
```
### MaximumVoltageCalibration
Voltage value of most moist soil - default of 3.3V
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Fc28/Driver/Fc28.cs#L37)
```csharp title="Declaration"
public Voltage MaximumVoltageCalibration { get; set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Fc28/Driver/Fc28.cs#L42)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Fc28/Driver/Fc28.cs#L102)
```csharp title="Declaration"
protected override Task<double> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.Double>`: The latest sensor reading### VoltageToMoisture(Voltage)
Converts voltage to moisture value, ranging from 0 (most dry) to 1 (most wet)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Fc28/Driver/Fc28.cs#L114)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Fc28/Driver/Fc28.cs#L125)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.Fc28/Driver/Fc28.cs#L135)
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
