---
uid: Meadow.Foundation.Sensors.Motion.Lis2Mdl
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Lis2Mdl
---

| Lis2Mdl | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Motion.Lis2Mdl/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Motion.Lis2Mdl.svg?label=Meadow.Foundation.Sensors.Motion.Lis2Mdl" alt="NuGet Gallery for Meadow.Foundation.Sensors.Motion.Lis2Mdl" /></a> |

### Code Example

```csharp
Lis2Mdl sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize hardware...");
    sensor = new Lis2Mdl(Device.CreateI2cBus());

    // classical .NET events can also be used:
    sensor.Updated += HandleResult;

    // Example that uses an IObservable subscription to only be notified when the filter is satisfied
    var consumer = Lis2Mdl.CreateObserver(handler: result => HandleResult(this, result),
                                         filter: result => FilterResult(result));

    sensor.Subscribe(consumer);

    sensor.StartUpdating(TimeSpan.FromMilliseconds(2000));

    return base.Initialize();
}

bool FilterResult(IChangeResult<MagneticField3D> result)
{
    return result.New.Z > new MagneticField(0.1, MagneticField.UnitType.Gauss);
}

void HandleResult(object sender,
    IChangeResult<MagneticField3D> result)
{
    var mag = result.New;

    Resolver.Log.Info($"MagX={mag.X.Gauss:0.##}gauss, MagY={mag.Y.Gauss:0.##}gauss, GyroZ={mag.Z.Gauss:0.##}gauss");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Samples/Lis2Mdl_Sample)


# Class Lis2Mdl
Represents a LIS2MDL is a low-power, high-performance 3-axis magnetometer from STMicroelectronics
with a fixed full range of ±50 gauss and a 16-bit resolution

###### **Assembly**: Lis2Mdl.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.Registers.cs#L3)
```csharp title="Declaration"
public class Lis2Mdl : PollingSensorBase<MagneticField3D>, IObservable<IChangeResult<MagneticField3D>>, IMagnetometer, ISamplingSensor<MagneticField3D>, ISensor<MagneticField3D>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../PollingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.MagneticField3D>>`, `Meadow.Peripherals.Sensors.Motion.IMagnetometer`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.MagneticField3D>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.MagneticField3D>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`

## Properties
### MagneticField3D
Current Magnetic Field 3D
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.cs#L18)
```csharp title="Declaration"
public MagneticField3D? MagneticField3D { get; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.cs#L21)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Fields
### i2cComms
I2C Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.cs#L26)
```csharp title="Declaration"
protected readonly II2cCommunications i2cComms
```
## Methods
### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.cs#L55)
```csharp title="Declaration"
protected override Task<MagneticField3D> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.MagneticField3D>`: The latest sensor reading### GetOutputDataRate()
Gets the output data rate (ODR) of the magnetometer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.cs#L85)
```csharp title="Declaration"
public Lis2Mdl.OutputDataRate GetOutputDataRate()
```

##### Returns

[Meadow.Foundation.Sensors.Motion.Lis2Mdl.OutputDataRate](../Lis2Mdl.OutputDataRate) enum.### SetOutputDataRate(OutputDataRate)
Sets the output data rate (ODR) of the magnetometer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.cs#L95)
```csharp title="Declaration"
public void SetOutputDataRate(Lis2Mdl.OutputDataRate odr)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Motion.Lis2Mdl.OutputDataRate](../Lis2Mdl.OutputDataRate) enum. |

### GetOperatingMode()
Gets the operating mode of the magnetometer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.cs#L107)
```csharp title="Declaration"
public Lis2Mdl.OperatingMode GetOperatingMode()
```

##### Returns

[Meadow.Foundation.Sensors.Motion.Lis2Mdl.OperatingMode](../Lis2Mdl.OperatingMode) enum.### SetOperatingMode(OperatingMode)
Sets the operating mode of the magnetometer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.cs#L117)
```csharp title="Declaration"
public void SetOperatingMode(Lis2Mdl.OperatingMode mode)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Motion.Lis2Mdl.OperatingMode](../Lis2Mdl.OperatingMode) enum. |

### GetTemperatureCompensation()
Gets the status of the temperature compensation feature.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.cs#L129)
```csharp title="Declaration"
public bool GetTemperatureCompensation()
```

##### Returns

`System.Boolean`: true if temperature compensation is enabled, false otherwise.### SetTemperatureCompensation(bool)
Sets the status of the temperature compensation feature.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.cs#L139)
```csharp title="Declaration"
public void SetTemperatureCompensation(bool enable)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *enable* | true to enable temperature compensation, false to disable it. |

### GetFastRead()
Gets the status of the Fast Read feature.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.cs#L157)
```csharp title="Declaration"
public bool GetFastRead()
```

##### Returns

`System.Boolean`: true if Fast Read is enabled, false otherwise.### SetFastRead(bool)
Sets the status of the Fast Read feature.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.cs#L167)
```csharp title="Declaration"
public void SetFastRead(bool enable)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *enable* | true to enable Fast Read, false to disable it. |

### GetBlockDataUpdate()
Gets the status of the Block Data Update (BDU) feature.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.cs#L185)
```csharp title="Declaration"
public bool GetBlockDataUpdate()
```

##### Returns

`System.Boolean`: true if BDU is enabled, false otherwise.### SetBlockDataUpdate(bool)
Sets the status of the Block Data Update (BDU) feature.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.cs#L195)
```csharp title="Declaration"
public void SetBlockDataUpdate(bool enable)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *enable* | true to enable BDU, false to disable it. |


## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.MagneticField3D>>`
* `Meadow.Peripherals.Sensors.Motion.IMagnetometer`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.MagneticField3D>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.MagneticField3D>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
