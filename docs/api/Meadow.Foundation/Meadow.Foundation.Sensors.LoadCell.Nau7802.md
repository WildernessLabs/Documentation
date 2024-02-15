---
uid: Meadow.Foundation.Sensors.LoadCell.Nau7802
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.LoadCell.Nau7802
---

| Nau7802 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.LoadCell.Nau7802) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.LoadCell.Nau7802/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.LoadCell.Nau7802/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.LoadCell.Nau7802.svg?label=Meadow.Foundation.Sensors.LoadCell.Nau7802" alt="NuGet Gallery for Meadow.Foundation.Sensors.LoadCell.Nau7802" /></a> |

### Code Example

```csharp
private Nau7802 loadSensor;

public int CalibrationFactor { get; set; } = 16526649; // TODO: change this based on your scale (using the method provided below)
public Mass CalibrationWeight { get; set; } = new Mass(1600, Mass.UnitType.Grams); // TODO: enter the known-weight you used in calibration

public override async Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    loadSensor = new Nau7802(Device.CreateI2cBus());

    if (CalibrationFactor == 0)
    {
        await GetAndDisplayCalibrationUnits(loadSensor);
    }
    else
    {   // wait for the ADC to settle
        await Task.Delay(500);

        // Set the current load to be zero
        loadSensor.SetCalibrationFactor(CalibrationFactor, CalibrationWeight);
        loadSensor.Tare();
    }

    loadSensor.MassUpdated += (sender, values) => Resolver.Log.Info($"Mass is now returned {values.New.Grams:N2}g");
}

public override Task Run()
{
    loadSensor.StartUpdating(TimeSpan.FromSeconds(2));

    return Task.CompletedTask;
}

public async Task GetAndDisplayCalibrationUnits(Nau7802 sensor)
{
    // first notify the user we're starting
    Resolver.Log.Info($"Beginning Calibration. First we'll tare (set a zero).");
    Resolver.Log.Info($"Make sure scale bed is clear. Next step in 5 seconds...");

    await Task.Delay(5000);
    sensor.Tare();
    Resolver.Log.Info($"Place a known weight on the scale. Next step in 5 seconds...");

    await Task.Delay(500);
    var factor = sensor.CalculateCalibrationFactor();

    Resolver.Log.Info($"Your scale's Calibration Factor is: {factor}. Enter this into the code for future use.");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.LoadCell.Nau7802/Samples/Nau7802_Sample)


# Class Nau7802
24-Bit Dual-Channel ADC For Bridge Sensors

###### **Assembly**: Nau7802.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.LoadCell.Nau7802/Driver/Nau7802.Enums.cs#L4)
```csharp title="Declaration"
public class Nau7802 : ByteCommsSensorBase<Mass>, IObservable<IChangeResult<Mass>>, IDisposable, IMassSensor, ISamplingSensor<Mass>, ISensor<Mass>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../ByteCommsSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Mass>>`, `System.IDisposable`, `Meadow.Peripherals.Sensors.Mass.IMassSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Mass>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Mass>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`

## Properties
### DefaultSamplePeriod
Default sample period
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.LoadCell.Nau7802/Driver/Nau7802.cs#L23)
```csharp title="Declaration"
public TimeSpan DefaultSamplePeriod { get; }
```
### Mass
The last read Mass
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.LoadCell.Nau7802/Driver/Nau7802.cs#L28)
```csharp title="Declaration"
public Mass? Mass { get; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.LoadCell.Nau7802/Driver/Nau7802.cs#L33)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Methods
### Tare()
Tares the sensor, effectively setting the current weight reading to relative zero.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.LoadCell.Nau7802/Driver/Nau7802.cs#L76)
```csharp title="Declaration"
public void Tare()
```
### CalculateCalibrationFactor()
Calculates the calibration factor of the load cell
Call this method with a known weight on the sensor, and then use the returned value in a call before using the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.LoadCell.Nau7802/Driver/Nau7802.cs#L222)
```csharp title="Declaration"
public int CalculateCalibrationFactor()
```

##### Returns

`System.Int32`: The calibration factor as an int### SetCalibrationFactor(int, Mass)
Sets the sensor's calibration factor based on a factor calculated with a know weight by calling [Meadow.Foundation.Sensors.LoadCell.Nau7802.CalculateCalibrationFactor()](../Nau7802#calculatecalibrationfactor).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.LoadCell.Nau7802/Driver/Nau7802.cs#L239)
```csharp title="Declaration"
public void SetCalibrationFactor(int factor, Mass knownValue)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *factor* |
| `Meadow.Units.Mass` | *knownValue* |

### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.LoadCell.Nau7802/Driver/Nau7802.cs#L266)
```csharp title="Declaration"
protected override Task<Mass> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Mass>`: The latest sensor reading
## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Mass>>`
* `System.IDisposable`
* `Meadow.Peripherals.Sensors.Mass.IMassSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Mass>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Mass>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
