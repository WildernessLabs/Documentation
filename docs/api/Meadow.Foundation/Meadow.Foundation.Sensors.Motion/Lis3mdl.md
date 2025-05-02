---
title: Class Lis3mdl
sidebar_label: Lis3mdl
description: >-
  Represents a Lis3mdl, a low-power, high-performance 3-axis magnetometer from
  STMicroelectronics with a selectable full range of ±4 to ±16 gauss and a
  16-bit resolution
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion/Lis3mdl
---
# Class Lis3mdl
Represents a Lis3mdl, a low-power, high-performance 3-axis magnetometer from STMicroelectronics
with a selectable full range of ±4 to ±16 gauss and a 16-bit resolution

###### **Assembly**: Lis3mdl.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis3mdl/Driver/Lis3mdl.Registers.cs#L3)
```csharp title="Declaration"
public class Lis3mdl : PollingSensorBase<MagneticField3D>, IObservable<IChangeResult<MagneticField3D>>, IMagnetometer, ISamplingSensor<MagneticField3D>, ISensor<MagneticField3D>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.MagneticField3D>>`, `Meadow.Peripherals.Sensors.Motion.IMagnetometer`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.MagneticField3D>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.MagneticField3D>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`

## Properties
### MagneticField3D
Current Magnetic Field 3D
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis3mdl/Driver/Lis3mdl.cs#L20)
```csharp title="Declaration"
public MagneticField3D? MagneticField3D { get; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis3mdl/Driver/Lis3mdl.cs#L25)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Fields
### i2cComms
I2C Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis3mdl/Driver/Lis3mdl.cs#L30)
```csharp title="Declaration"
protected readonly II2cCommunications i2cComms
```
## Methods
### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis3mdl/Driver/Lis3mdl.cs#L66)
```csharp title="Declaration"
protected override Task<MagneticField3D> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.MagneticField3D>`: The latest sensor reading### GetFullScale()
Gets the full scale range of the magnetometer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis3mdl/Driver/Lis3mdl.cs#L115)
```csharp title="Declaration"
public Lis3mdl.FullScale GetFullScale()
```

##### Returns

[Meadow.Foundation.Sensors.Motion.Lis3mdl.FullScale](../Meadow.Foundation.Sensors.Motion/Lis3mdl.FullScale): The full scale range as a [Meadow.Foundation.Sensors.Motion.Lis3mdl.FullScale](../Meadow.Foundation.Sensors.Motion/Lis3mdl.FullScale) enum.### SetFullScale(FullScale)
Sets the full scale range of the magnetometer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis3mdl/Driver/Lis3mdl.cs#L126)
```csharp title="Declaration"
public void SetFullScale(Lis3mdl.FullScale scale)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Motion.Lis3mdl.FullScale](../Meadow.Foundation.Sensors.Motion/Lis3mdl.FullScale) | *scale* | The desired full scale range as a [Meadow.Foundation.Sensors.Motion.Lis3mdl.FullScale](../Meadow.Foundation.Sensors.Motion/Lis3mdl.FullScale) enum. |

### GetOutputDataRate()
Gets the output data rate (ODR) of the magnetometer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis3mdl/Driver/Lis3mdl.cs#L138)
```csharp title="Declaration"
public Lis3mdl.OutputDataRate GetOutputDataRate()
```

##### Returns

[Meadow.Foundation.Sensors.Motion.Lis3mdl.OutputDataRate](../Meadow.Foundation.Sensors.Motion/Lis3mdl.OutputDataRate): The output data rate as a [Meadow.Foundation.Sensors.Motion.Lis3mdl.OutputDataRate](../Meadow.Foundation.Sensors.Motion/Lis3mdl.OutputDataRate) enum.### SetOutputDataRate(OutputDataRate)
Sets the output data rate (ODR) of the magnetometer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis3mdl/Driver/Lis3mdl.cs#L148)
```csharp title="Declaration"
public void SetOutputDataRate(Lis3mdl.OutputDataRate odr)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Motion.Lis3mdl.OutputDataRate](../Meadow.Foundation.Sensors.Motion/Lis3mdl.OutputDataRate) | *odr* | The desired output data rate as a [Meadow.Foundation.Sensors.Motion.Lis3mdl.OutputDataRate](../Meadow.Foundation.Sensors.Motion/Lis3mdl.OutputDataRate) enum. |

### GetOperatingMode()
Gets the operating mode of the magnetometer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis3mdl/Driver/Lis3mdl.cs#L160)
```csharp title="Declaration"
public Lis3mdl.OperatingMode GetOperatingMode()
```

##### Returns

[Meadow.Foundation.Sensors.Motion.Lis3mdl.OperatingMode](../Meadow.Foundation.Sensors.Motion/Lis3mdl.OperatingMode): The operating mode as a [Meadow.Foundation.Sensors.Motion.Lis3mdl.OperatingMode](../Meadow.Foundation.Sensors.Motion/Lis3mdl.OperatingMode) enum.### SetOperatingMode(OperatingMode)
Sets the operating mode of the magnetometer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis3mdl/Driver/Lis3mdl.cs#L170)
```csharp title="Declaration"
public void SetOperatingMode(Lis3mdl.OperatingMode mode)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Motion.Lis3mdl.OperatingMode](../Meadow.Foundation.Sensors.Motion/Lis3mdl.OperatingMode) | *mode* | The desired operating mode as a [Meadow.Foundation.Sensors.Motion.Lis3mdl.OperatingMode](../Meadow.Foundation.Sensors.Motion/Lis3mdl.OperatingMode) enum. |

### GetFastRead()
Gets the status of the Fast Read feature.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis3mdl/Driver/Lis3mdl.cs#L181)
```csharp title="Declaration"
public bool GetFastRead()
```

##### Returns

`System.Boolean`: true if Fast Read is enabled, false otherwise.### SetFastRead(bool)
Sets the status of the Fast Read feature.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis3mdl/Driver/Lis3mdl.cs#L191)
```csharp title="Declaration"
public void SetFastRead(bool enable)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *enable* | true to enable Fast Read, false to disable it. |

### GetBlockDataUpdate()
Gets the status of the Block Data Update (BDU) feature.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis3mdl/Driver/Lis3mdl.cs#L209)
```csharp title="Declaration"
public bool GetBlockDataUpdate()
```

##### Returns

`System.Boolean`: true if BDU is enabled, false otherwise.### SetBlockDataUpdate(bool)
Sets the status of the Block Data Update (BDU) feature.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis3mdl/Driver/Lis3mdl.cs#L219)
```csharp title="Declaration"
public void SetBlockDataUpdate(bool enable)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *enable* | true to enable BDU, false to disable it. |

### GetTemperatureSensorEnable()
Gets the status of the temperature sensor feature.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis3mdl/Driver/Lis3mdl.cs#L237)
```csharp title="Declaration"
public bool GetTemperatureSensorEnable()
```

##### Returns

`System.Boolean`: true if temperature sensor is enabled, false otherwise.### SetTemperatureSensorEnable(bool)
Sets the status of the temperature sensor feature.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis3mdl/Driver/Lis3mdl.cs#L247)
```csharp title="Declaration"
public void SetTemperatureSensorEnable(bool enable)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *enable* | true to enable the temperature sensor, false to disable it. |


## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.MagneticField3D>>`
* `Meadow.Peripherals.Sensors.Motion.IMagnetometer`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.MagneticField3D>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.MagneticField3D>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
