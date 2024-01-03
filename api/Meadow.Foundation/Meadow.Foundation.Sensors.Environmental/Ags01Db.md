---
title: Class Ags01Db
sidebar_label: Ags01Db
description: "Represents an AGS01DB MEMS VOC gas / air quality sensor
Pinout (left to right, label side down): VDD, SDA, GND, SCL
Note: requires pull-up resistors on SDA/SCL"
---
# Class Ags01Db
Represents an AGS01DB MEMS VOC gas / air quality sensor
Pinout (left to right, label side down): VDD, SDA, GND, SCL
Note: requires pull-up resistors on SDA/SCL

###### **Assembly**: Ags01Db.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ags01Db/Driver/Ags01Db.Enums.cs#L8)
```csharp title="Declaration"
public class Ags01Db : ByteCommsSensorBase<Concentration>, IObservable<IChangeResult<Concentration>>, ISamplingSensor<Concentration>, ISensor<Concentration>, ISensor, ISamplingSensor, IDisposable, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`) -> [Meadow.Foundation.ByteCommsSensorBase&lt;UNIT&gt;](../Meadow.Foundation/ByteCommsSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Concentration>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Concentration>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Concentration>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`, `Meadow.Hardware.II2cPeripheral`

## Properties
### Concentration
The current concentration value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ags01Db/Driver/Ags01Db.cs#L25)
```csharp title="Declaration"
public Concentration? Concentration { get; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ags01Db/Driver/Ags01Db.cs#L30)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Methods
### ReadSensor()
Get ASG01DB VOC Gas Concentration and update the Concentration property
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ags01Db/Driver/Ags01Db.cs#L45)
```csharp title="Declaration"
protected override Task<Concentration> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Concentration>`
### GetVersion()
Get ASG01DB Version
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ags01Db/Driver/Ags01Db.cs#L65)
```csharp title="Declaration"
public byte GetVersion()
```

##### Returns

`System.Byte`: Version
## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Concentration>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Concentration>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Concentration>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `System.IDisposable`
* `Meadow.Hardware.II2cPeripheral`
