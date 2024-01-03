---
title: Class Adxl345
sidebar_label: Adxl345
description: "Driver for the ADXL345 triple axis accelerometer
+/- 16g"
---
# Class Adxl345
Driver for the ADXL345 triple axis accelerometer
+/- 16g

###### **Assembly**: Adxl3xx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl345_Extras/Adxl345.Registers.cs#L4)
```csharp title="Declaration"
public class Adxl345 : ByteCommsSensorBase<Acceleration3D>, IObservable<IChangeResult<Acceleration3D>>, IDisposable, IAccelerometer, ISamplingSensor<Acceleration3D>, ISensor<Acceleration3D>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`) -> [Meadow.Foundation.ByteCommsSensorBase&lt;UNIT&gt;](../Meadow.Foundation/ByteCommsSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Acceleration3D>>`, `System.IDisposable`, `Meadow.Peripherals.Sensors.Motion.IAccelerometer`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Acceleration3D>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Acceleration3D>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`

## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl345.cs#L19)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### Acceleration3D
Current acceleration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl345.cs#L32)
```csharp title="Declaration"
public Acceleration3D? Acceleration3D { get; }
```
### OffsetX
Values stored in this register are automatically added to the X reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl345.cs#L40)
```csharp title="Declaration"
public sbyte OffsetX { get; set; }
```
### OffsetY
Values stored in this register are automatically added to the Y reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl345.cs#L52)
```csharp title="Declaration"
public sbyte OffsetY { get; set; }
```
### OffsetZ
Values stored in this register are automatically added to the Z reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl345.cs#L64)
```csharp title="Declaration"
public sbyte OffsetZ { get; set; }
```
## Fields
### MinimumPollingPeriod
Minimum value that can be used for the update interval when the
sensor is being configured to generate interrupts
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl345.cs#L27)
```csharp title="Declaration"
public const ushort MinimumPollingPeriod = 100
```
## Methods
### ReadSensor()
Read sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl345.cs#L100)
```csharp title="Declaration"
protected override Task<Acceleration3D> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Acceleration3D>`: Current acceleration### SetPowerState(bool, bool, bool, bool, Frequencies)
Set the PowerControl register (see pages 25 and 26 of the data sheet)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl345.cs#L120)
```csharp title="Declaration"
public void SetPowerState(bool linkActivityAndInactivity, bool autoSleep, bool measuring, bool sleep, Adxl345.Frequencies frequency)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *linkActivityAndInactivity* | Link the activity and inactivity events |
| `System.Boolean` | *autoSleep* | Enable / disable auto sleep when the activity and inactivity are linked |
| `System.Boolean` | *measuring* | Enable or disable measurements (turn on or off) |
| `System.Boolean` | *sleep* | Put the part to sleep (true) or run in normal more (false) |
| [Meadow.Foundation.Sensors.Motion.Adxl345.Frequencies](../Meadow.Foundation.Sensors.Motion/Adxl345.Frequencies) | *frequency* | Frequency of measurements when the part is in sleep mode |

### SetDataFormat(bool, bool, bool, bool, GForceRanges)
Configure the data format (see pages 26 and 27 of the data sheet).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl345.cs#L162)
```csharp title="Declaration"
public void SetDataFormat(bool selfTest, bool spiMode, bool fullResolution, bool justification, Adxl345.GForceRanges range)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *selfTest* | Put the device into self test mode when true |
| `System.Boolean` | *spiMode* | Use 3-wire SPI (true) or 4-wire SPI (false) |
| `System.Boolean` | *fullResolution* | Set to full resolution (true) or 10-bit mode using the range determined by the range
parameter (false). |
| `System.Boolean` | *justification* | Left-justified when true, right justified with sign extension when false |
| [Meadow.Foundation.Sensors.Motion.Adxl345.GForceRanges](../Meadow.Foundation.Sensors.Motion/Adxl345.GForceRanges) | *range* | Set the range of the sensor to 2g, 4g, 8g or 16g |

### SetDataRate(byte, bool)
Set the data rate and low power mode for the sensor.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl345.cs#L194)
```csharp title="Declaration"
public void SetDataRate(byte dataRate, bool lowPower)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *dataRate* | Data rate for the sensor |
| `System.Boolean` | *lowPower* | Setting this to true will enter low power mode (note measurement will encounter more noise in
this mode). |

### DisplayRegisters()
Dump the registers to the debug output stream.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Adxl3xx/Driver/Drivers/Adxl345.cs#L224)
```csharp title="Declaration"
public void DisplayRegisters()
```

## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Acceleration3D>>`
* `System.IDisposable`
* `Meadow.Peripherals.Sensors.Motion.IAccelerometer`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Acceleration3D>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Acceleration3D>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
