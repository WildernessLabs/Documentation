---
title: Class Lis2Mdl
sidebar_label: Lis2Mdl
description: "Represents a LIS2MDL is a low-power, high-performance 3-axis magnetometer from STMicroelectronics
with a fixed full range of ±50 gauss and a 16-bit resolution"
---
# Class Lis2Mdl
Represents a LIS2MDL is a low-power, high-performance 3-axis magnetometer from STMicroelectronics
with a fixed full range of ±50 gauss and a 16-bit resolution

###### **Assembly**: Lis2Mdl.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.Registers.cs#L3)
```csharp title="Declaration"
public class Lis2Mdl : PollingSensorBase<MagneticField3D>, IObservable<IChangeResult<MagneticField3D>>, IMagnetometer, ISamplingSensor<MagneticField3D>, ISensor<MagneticField3D>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.MagneticField3D>>`, `Meadow.Peripherals.Sensors.Motion.IMagnetometer`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.MagneticField3D>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.MagneticField3D>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`

## Properties
### MagneticField3D
Current Magnetic Field 3D
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.cs#L18)
```csharp title="Declaration"
public MagneticField3D? MagneticField3D { get; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.cs#L21)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Fields
### i2cComms
I2C Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.cs#L26)
```csharp title="Declaration"
protected readonly II2cCommunications i2cComms
```
## Methods
### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.cs#L55)
```csharp title="Declaration"
protected override Task<MagneticField3D> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.MagneticField3D>`: The latest sensor reading### GetOutputDataRate()
Gets the output data rate (ODR) of the magnetometer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.cs#L85)
```csharp title="Declaration"
public Lis2Mdl.OutputDataRate GetOutputDataRate()
```

##### Returns

[Meadow.Foundation.Sensors.Motion.Lis2Mdl.OutputDataRate](../Meadow.Foundation.Sensors.Motion/Lis2Mdl.OutputDataRate): The output data rate as a [Meadow.Foundation.Sensors.Motion.Lis2Mdl.OutputDataRate](../Meadow.Foundation.Sensors.Motion/Lis2Mdl.OutputDataRate) enum.### SetOutputDataRate(OutputDataRate)
Sets the output data rate (ODR) of the magnetometer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.cs#L95)
```csharp title="Declaration"
public void SetOutputDataRate(Lis2Mdl.OutputDataRate odr)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Motion.Lis2Mdl.OutputDataRate](../Meadow.Foundation.Sensors.Motion/Lis2Mdl.OutputDataRate) | *odr* | The desired output data rate as a [Meadow.Foundation.Sensors.Motion.Lis2Mdl.OutputDataRate](../Meadow.Foundation.Sensors.Motion/Lis2Mdl.OutputDataRate) enum. |

### GetOperatingMode()
Gets the operating mode of the magnetometer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.cs#L107)
```csharp title="Declaration"
public Lis2Mdl.OperatingMode GetOperatingMode()
```

##### Returns

[Meadow.Foundation.Sensors.Motion.Lis2Mdl.OperatingMode](../Meadow.Foundation.Sensors.Motion/Lis2Mdl.OperatingMode): The operating mode as a [Meadow.Foundation.Sensors.Motion.Lis2Mdl.OperatingMode](../Meadow.Foundation.Sensors.Motion/Lis2Mdl.OperatingMode) enum.### SetOperatingMode(OperatingMode)
Sets the operating mode of the magnetometer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.cs#L117)
```csharp title="Declaration"
public void SetOperatingMode(Lis2Mdl.OperatingMode mode)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Motion.Lis2Mdl.OperatingMode](../Meadow.Foundation.Sensors.Motion/Lis2Mdl.OperatingMode) | *mode* | The desired operating mode as a [Meadow.Foundation.Sensors.Motion.Lis2Mdl.OperatingMode](../Meadow.Foundation.Sensors.Motion/Lis2Mdl.OperatingMode) enum. |

### GetTemperatureCompensation()
Gets the status of the temperature compensation feature.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.cs#L129)
```csharp title="Declaration"
public bool GetTemperatureCompensation()
```

##### Returns

`System.Boolean`: true if temperature compensation is enabled, false otherwise.### SetTemperatureCompensation(bool)
Sets the status of the temperature compensation feature.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.cs#L139)
```csharp title="Declaration"
public void SetTemperatureCompensation(bool enable)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *enable* | true to enable temperature compensation, false to disable it. |

### GetFastRead()
Gets the status of the Fast Read feature.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.cs#L157)
```csharp title="Declaration"
public bool GetFastRead()
```

##### Returns

`System.Boolean`: true if Fast Read is enabled, false otherwise.### SetFastRead(bool)
Sets the status of the Fast Read feature.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.cs#L167)
```csharp title="Declaration"
public void SetFastRead(bool enable)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *enable* | true to enable Fast Read, false to disable it. |

### GetBlockDataUpdate()
Gets the status of the Block Data Update (BDU) feature.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.cs#L185)
```csharp title="Declaration"
public bool GetBlockDataUpdate()
```

##### Returns

`System.Boolean`: true if BDU is enabled, false otherwise.### SetBlockDataUpdate(bool)
Sets the status of the Block Data Update (BDU) feature.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Lis2Mdl/Driver/Lis2Mdl.cs#L195)
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
