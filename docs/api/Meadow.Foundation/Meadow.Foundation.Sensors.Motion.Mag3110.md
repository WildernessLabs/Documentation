---
uid: Meadow.Foundation.Sensors.Motion.Mag3110
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Mag3110
---

| Mag3110 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mag3110) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mag3110/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Motion.Mag3110/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Motion.Mag3110.svg?label=Meadow.Foundation.Sensors.Motion.Mag3110" alt="NuGet Gallery for Meadow.Foundation.Sensors.Motion.Mag3110" /></a> |

The **MAG3110** is a three axis magnetometer with an I2C interface. The magnetometer is capable of single and continuous readings.

### Code Example

```csharp
Mag3110 sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    sensor = new Mag3110(Device.CreateI2cBus());

    // classical .NET events can  be used
    sensor.Updated += (sender, result) =>
    {
        Resolver.Log.Info($"Magnetic Field: [X:{result.New.MagneticField3D?.X.MicroTesla:N2}," +
            $"Y:{result.New.MagneticField3D?.Y.MicroTesla:N2}," +
            $"Z:{result.New.MagneticField3D?.Z.MicroTesla:N2} (microTeslas)]");

        Resolver.Log.Info($"Temp: {result.New.Temperature?.Celsius:N2}C");
    };

    // Example that uses an IObservable subscription to only be notified when the filter is satisfied
    var consumer = Mag3110.CreateObserver(
        handler: result => Resolver.Log.Info($"Observer: [x] changed by threshold; new [x]: X:{result.New.MagneticField3D?.X.MicroTesla:N2}, old: X:{result.Old?.MagneticField3D?.X.MicroTesla:N2}"),
        // only notify if there's a greater than 1 micro tesla on the Y axis
        filter: result =>
        {
            if (result.Old is { } old)
            {
                return ((result.New.MagneticField3D - old.MagneticField3D)?.Y > new MagneticField(1, MU.MicroTesla));
            }
            return false;
        });
    sensor.Subscribe(consumer);

    return Task.CompletedTask;
}

public async override Task Run()
{
    var result = await sensor.Read();
    Resolver.Log.Info("Initial Readings:");
    Resolver.Log.Info($"Magnetic field: [X:{result.MagneticField3D?.X.MicroTesla:N2}," +
        $"Y:{result.MagneticField3D?.Y.MicroTesla:N2}," +
        $"Z:{result.MagneticField3D?.Z.MicroTesla:N2} (microTeslas)]");

    Resolver.Log.Info($"Temp: {result.Temperature?.Celsius:N2}C");

    sensor.StartUpdating(TimeSpan.FromMilliseconds(500));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mag3110/Samples/Mag3110_Sample)

### Polling Mode

The following application reads the values from the magnetometer and displays the readings on the debug output:

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    public MeadowApp()
    {
        Console.WriteLine("MAG3110 Test Application");
        Mag3110 mag3110 = new Mag3110();
        mag3110.Standby = false;
        int readingCount = 0;

        while (true)
        {
            mag3110.Read();
            readingCount++;
            Console.WriteLine(
                "Reading " + readingCount.ToString() + 
                ": x = " + mag3110.X.ToString() + 
                ", y = " + mag3110.Y.ToString() + 
                ", z = " + mag3110.Z.ToString());
            Thread.Sleep(1000);
        }
    }
}
```

### Wiring Example

In it's basic configuration the magnetometer requires four connections:

| Meadow Pin   | Sensor Pin     | Wire Color |
|--------------|----------------|------------|
| 3.3V         | V<sub>cc</sub> | Red        |
| GND          | GND            | Black      |
| SC           | SCK            | Green      |
| SD           | SDA            | Blue       |
| D8           | INT1           | Orange     |

<img src="/API_Assets/Meadow.Foundation.Sensors.Motion.MAG3110/MAG3110_Fritzing.svg" />





# Class Mag3110
Represents the Xtrinsic MAG3110 Three-Axis, Digital Magnetometer

###### **Assembly**: MAG3110.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mag3110/Driver/Mag3110.Registers.cs#L3)
```csharp title="Declaration"
public class Mag3110 : ByteCommsSensorBase<(MagneticField3D? MagneticField3D, Temperature? Temperature)>, IObservable<IChangeResult<(MagneticField3D? MagneticField3D, Temperature? Temperature)>>, ISamplingSensor<(MagneticField3D? MagneticField3D, Temperature? Temperature)>, ISensor<(MagneticField3D? MagneticField3D, Temperature? Temperature)>, IDisposable, ITemperatureSensor, ISamplingSensor<Temperature>, ISensor<Temperature>, IMagnetometer, ISamplingSensor<MagneticField3D>, ISensor<MagneticField3D>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../ByteCommsSensorBase`UNIT`)

**Implements:**  

<details><summary>Expand</summary>

`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.MagneticField3D>,System.Nullable<Meadow.Units.Temperature>>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.MagneticField3D>,System.Nullable<Meadow.Units.Temperature>>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.MagneticField3D>,System.Nullable<Meadow.Units.Temperature>>>`, `System.IDisposable`, `Meadow.Peripherals.Sensors.ITemperatureSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`, `Meadow.Peripherals.Sensors.Motion.IMagnetometer`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.MagneticField3D>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.MagneticField3D>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`
</details>



## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mag3110/Driver/Mag3110.cs#L20)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### MagneticField3D
The current magnetic field value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mag3110/Driver/Mag3110.cs#L45)
```csharp title="Declaration"
public MagneticField3D? MagneticField3D { get; }
```
### Temperature
Current temperature of the die
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mag3110/Driver/Mag3110.cs#L50)
```csharp title="Declaration"
public Temperature? Temperature { get; }
```
### Standby
Change or get the standby status of the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mag3110/Driver/Mag3110.cs#L55)
```csharp title="Declaration"
public bool Standby { get; set; }
```
### IsDataReady
Indicate if there is any data ready for reading (x, y or z).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mag3110/Driver/Mag3110.cs#L83)
```csharp title="Declaration"
public bool IsDataReady { get; }
```
### DigitalInputsEnabled
Enable or disable interrupts.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mag3110/Driver/Mag3110.cs#L94)
```csharp title="Declaration"
public bool DigitalInputsEnabled { get; set; }
```
## Fields
### interruptPort
Interrupt port used to detect then end of a conversion
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mag3110/Driver/Mag3110.cs#L40)
```csharp title="Declaration"
protected readonly IDigitalInterruptPort? interruptPort
```
## Methods
### Reset()
Reset the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mag3110/Driver/Mag3110.cs#L142)
```csharp title="Declaration"
public void Reset()
```
### RaiseEventsAndNotify(IChangeResult&lt;(MagneticField3D? MagneticField3D, Temperature? Temperature)&gt;)
Raise events for subscribers and notify of value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mag3110/Driver/Mag3110.cs#L158)
```csharp title="Declaration"
protected override void RaiseEventsAndNotify(IChangeResult<(MagneticField3D? MagneticField3D, Temperature? Temperature)> changeResult)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.MagneticField3D>,System.Nullable<Meadow.Units.Temperature>>>` | *changeResult* | The updated sensor data |

### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mag3110/Driver/Mag3110.cs#L175)
```csharp title="Declaration"
protected override Task<(MagneticField3D? MagneticField3D, Temperature? Temperature)> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<System.Nullable<Meadow.Units.MagneticField3D>,System.Nullable<Meadow.Units.Temperature>>>`: The latest sensor reading
## Implements

* `System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.MagneticField3D>,System.Nullable<Meadow.Units.Temperature>>>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.MagneticField3D>,System.Nullable<Meadow.Units.Temperature>>>`
* `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.MagneticField3D>,System.Nullable<Meadow.Units.Temperature>>>`
* `System.IDisposable`
* `Meadow.Peripherals.Sensors.ITemperatureSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Temperature>`
* `Meadow.Peripherals.Sensors.Motion.IMagnetometer`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.MagneticField3D>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.MagneticField3D>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
