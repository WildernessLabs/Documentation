---
title: Class ByteCommsSensorBase<UNIT>
sidebar_label: ByteCommsSensorBase<UNIT>
description: ByteCommsSensorBase abstract class
slug: /docs/api/Meadow.Foundation/Meadow.Foundation/ByteCommsSensorBase`UNIT`
---
# Class ByteCommsSensorBase&lt;UNIT&gt;
ByteCommsSensorBase abstract class

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/ByteCommsSensorBase.cs#L11)
```csharp title="Declaration"
public abstract class ByteCommsSensorBase<UNIT> : PollingSensorBase<UNIT>, IObservable<IChangeResult<UNIT>>, ISamplingSensor<UNIT>, ISensor<UNIT>, ISensor, ISamplingSensor, IDisposable where UNIT : struct
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`)

**Derived:**  

<details>
<summary>Expand</summary>

[Meadow.Foundation.Sensors.Atmospheric.AdafruitMPRLS](../Meadow.Foundation.Sensors.Atmospheric/AdafruitMPRLS), [Meadow.Foundation.Sensors.Atmospheric.Ahtx0](../Meadow.Foundation.Sensors.Atmospheric/Ahtx0), [Meadow.Foundation.Sensors.Atmospheric.Bh1900Nux](../Meadow.Foundation.Sensors.Atmospheric/Bh1900Nux), [Meadow.Foundation.Sensors.Atmospheric.Bmp085](../Meadow.Foundation.Sensors.Atmospheric/Bmp085), [Meadow.Foundation.Sensors.Atmospheric.Bmp180](../Meadow.Foundation.Sensors.Atmospheric/Bmp180), [Meadow.Foundation.Sensors.Atmospheric.DhtBase](../Meadow.Foundation.Sensors.Atmospheric/DhtBase), [Meadow.Foundation.Sensors.Atmospheric.Hih6130](../Meadow.Foundation.Sensors.Atmospheric/Hih6130), [Meadow.Foundation.Sensors.Atmospheric.Htux1dBase](../Meadow.Foundation.Sensors.Atmospheric/Htux1dBase), [Meadow.Foundation.Sensors.Atmospheric.Mpl3115a2](../Meadow.Foundation.Sensors.Atmospheric/Mpl3115a2), [Meadow.Foundation.Sensors.Atmospheric.Sgp40](../Meadow.Foundation.Sensors.Atmospheric/Sgp40), [Meadow.Foundation.Sensors.Atmospheric.Sht31d](../Meadow.Foundation.Sensors.Atmospheric/Sht31d), [Meadow.Foundation.Sensors.Atmospheric.Sht4x](../Meadow.Foundation.Sensors.Atmospheric/Sht4x), [Meadow.Foundation.Sensors.Atmospheric.Si70xx](../Meadow.Foundation.Sensors.Atmospheric/Si70xx), [Meadow.Foundation.Sensors.Atmospheric.Th02](../Meadow.Foundation.Sensors.Atmospheric/Th02), [Meadow.Foundation.Sensors.Color.Tcs3472x](../Meadow.Foundation.Sensors.Color/Tcs3472x), [Meadow.Foundation.Sensors.Distance.Vl53l0x](../Meadow.Foundation.Sensors.Distance/Vl53l0x), [Meadow.Foundation.Sensors.Environmental.Ags01Db](../Meadow.Foundation.Sensors.Environmental/Ags01Db), [Meadow.Foundation.Sensors.Environmental.Ens160](../Meadow.Foundation.Sensors.Environmental/Ens160), [Meadow.Foundation.Sensors.Environmental.Pmsa003i](../Meadow.Foundation.Sensors.Environmental/Pmsa003i), [Meadow.Foundation.Sensors.Environmental.Scd30Base](../Meadow.Foundation.Sensors.Environmental/Scd30Base), [Meadow.Foundation.Sensors.Light.Bh1745](../Meadow.Foundation.Sensors.Light/Bh1745), [Meadow.Foundation.Sensors.Light.Bh1750](../Meadow.Foundation.Sensors.Light/Bh1750), [Meadow.Foundation.Sensors.Light.Max44009](../Meadow.Foundation.Sensors.Light/Max44009), [Meadow.Foundation.Sensors.Light.Si1145](../Meadow.Foundation.Sensors.Light/Si1145), [Meadow.Foundation.Sensors.Light.Tsl2591](../Meadow.Foundation.Sensors.Light/Tsl2591), [Meadow.Foundation.Sensors.Light.Veml7700](../Meadow.Foundation.Sensors.Light/Veml7700), [Meadow.Foundation.Sensors.LoadCell.Nau7802](../Meadow.Foundation.Sensors.LoadCell/Nau7802), [Meadow.Foundation.Sensors.Motion.Adxl343](../Meadow.Foundation.Sensors.Motion/Adxl343), [Meadow.Foundation.Sensors.Motion.Adxl345](../Meadow.Foundation.Sensors.Motion/Adxl345), [Meadow.Foundation.Sensors.Motion.Adxl362](../Meadow.Foundation.Sensors.Motion/Adxl362), [Meadow.Foundation.Sensors.Motion.Apds9960](../Meadow.Foundation.Sensors.Motion/Apds9960), [Meadow.Foundation.Sensors.Motion.Bno055](../Meadow.Foundation.Sensors.Motion/Bno055), [Meadow.Foundation.Sensors.Motion.Hmc5883](../Meadow.Foundation.Sensors.Motion/Hmc5883), [Meadow.Foundation.Sensors.Motion.Mag3110](../Meadow.Foundation.Sensors.Motion/Mag3110), [Meadow.Foundation.Sensors.Motion.Mma7660fc](../Meadow.Foundation.Sensors.Motion/Mma7660fc), [Meadow.Foundation.Sensors.Motion.Mmc5603](../Meadow.Foundation.Sensors.Motion/Mmc5603), [Meadow.Foundation.Sensors.Motion.Mpu6050](../Meadow.Foundation.Sensors.Motion/Mpu6050), [Meadow.Foundation.Sensors.Power.Ina2xx](../Meadow.Foundation.Sensors.Power/Ina2xx), [Meadow.Foundation.Sensors.Temperature.Adt7410](../Meadow.Foundation.Sensors.Temperature/Adt7410), [Meadow.Foundation.Sensors.Temperature.Lm75](../Meadow.Foundation.Sensors.Temperature/Lm75), [Meadow.Foundation.Sensors.Temperature.Mcp960x](../Meadow.Foundation.Sensors.Temperature/Mcp960x), [Meadow.Foundation.Sensors.Temperature.Mcp9808](../Meadow.Foundation.Sensors.Temperature/Mcp9808), [Meadow.Foundation.Sensors.Temperature.Mlx90614](../Meadow.Foundation.Sensors.Temperature/Mlx90614), [Meadow.Foundation.Sensors.Temperature.Tmp102](../Meadow.Foundation.Sensors.Temperature/Tmp102)
</details>



**Implements:**  
`System.IObservable<Meadow.IChangeResult<<UNIT>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<<UNIT>>`, `Meadow.Peripherals.Sensors.ISensor<<UNIT>>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`

## Properties
### BusComms
Bus communications object, i.e. an I2cCommunications or SpiCommunications
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/ByteCommsSensorBase.cs#L17)
```csharp title="Declaration"
protected IByteCommunications BusComms { get; set; }
```
### ReadBuffer
The read buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/ByteCommsSensorBase.cs#L22)
```csharp title="Declaration"
protected Memory<byte> ReadBuffer { get; }
```
### WriteBuffer
The write buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/ByteCommsSensorBase.cs#L27)
```csharp title="Declaration"
protected Memory<byte> WriteBuffer { get; }
```
## Methods
### Init(int, int)
Simple constructor for peripherals that don't use a bus 
and don't need an IByteCommunications
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/ByteCommsSensorBase.cs#L73)
```csharp title="Declaration"
protected virtual void Init(int readBufferSize = 8, int writeBufferSize = 8)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *readBufferSize* |
| `System.Int32` | *writeBufferSize* |

### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/ByteCommsSensorBase.cs#L84)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Communications/ByteCommsSensorBase.cs#L93)
```csharp title="Declaration"
public virtual void Dispose()
```

## Implements

* `System.IObservable<Meadow.IChangeResult<<UNIT>>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<<UNIT>>`
* `Meadow.Peripherals.Sensors.ISensor<<UNIT>>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `System.IDisposable`
