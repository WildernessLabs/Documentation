---
title: Class Ina2xx
sidebar_label: Ina2xx
description: Represents a INA2xx Series Precision Digital Current and Power Monitor
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Power/Ina2xx
---
# Class Ina2xx
Represents a INA2xx Series Precision Digital Current and Power Monitor

###### **Assembly**: Ina2xx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina2xx/Driver/Ina2xx.Enums.cs#L3)
```csharp title="Declaration"
public abstract class Ina2xx : ByteCommsSensorBase<(Current? Current, Voltage? Voltage, Power? Power)>, IObservable<IChangeResult<(Current? Current, Voltage? Voltage, Power? Power)>>, ISamplingSensor<(Current? Current, Voltage? Voltage, Power? Power)>, ISensor<(Current? Current, Voltage? Voltage, Power? Power)>, IDisposable, ICurrentSensor, ISamplingSensor<Current>, ISensor<Current>, IVoltageSensor, IPowerSensor, ISamplingSensor<Power>, ISensor<Power>, II2cPeripheral, ISamplingSensor<Voltage>, ISensor<Voltage>, ISensor, ISamplingSensor
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`) -> [Meadow.Foundation.ByteCommsSensorBase&lt;UNIT&gt;](../Meadow.Foundation/ByteCommsSensorBase`UNIT`)

**Derived:**  
[Meadow.Foundation.Sensors.Power.Ina219](../Meadow.Foundation.Sensors.Power/Ina219), [Meadow.Foundation.Sensors.Power.Ina228](../Meadow.Foundation.Sensors.Power/Ina228), [Meadow.Foundation.Sensors.Power.Ina260](../Meadow.Foundation.Sensors.Power/Ina260)

**Implements:**  

<details>
<summary>Expand</summary>

`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Current>,System.Nullable<Meadow.Units.Voltage>,System.Nullable<Meadow.Units.Power>>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Current>,System.Nullable<Meadow.Units.Voltage>,System.Nullable<Meadow.Units.Power>>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Current>,System.Nullable<Meadow.Units.Voltage>,System.Nullable<Meadow.Units.Power>>>`, `System.IDisposable`, `Meadow.Peripherals.Sensors.ICurrentSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Current>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Current>`, `Meadow.Peripherals.Sensors.IVoltageSensor`, `Meadow.Peripherals.Sensors.IPowerSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Power>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Power>`, `Meadow.Hardware.II2cPeripheral`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Voltage>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Voltage>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`
</details>



## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina2xx/Driver/Ina2xx.cs#L19)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### DefaultBusSpeed
Default I2C Bus Speed to use for communication.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina2xx/Driver/Ina2xx.cs#L24)
```csharp title="Declaration"
public static I2cBusSpeed DefaultBusSpeed { get; }
```
### IsConfigured
Returns &lt;b&gt;true&lt;/b&gt; if the sensor has been configured, otherwise &lt;b&gt;false&lt;/b&gt;
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina2xx/Driver/Ina2xx.cs#L92)
```csharp title="Declaration"
public bool IsConfigured { get; protected set; }
```
### Current
The value of the current (in Amps) flowing through the shunt resistor from the last reading.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina2xx/Driver/Ina2xx.cs#L105)
```csharp title="Declaration"
public Current? Current { get; }
```
### Voltage
The voltage from the last reading.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina2xx/Driver/Ina2xx.cs#L110)
```csharp title="Declaration"
public Voltage? Voltage { get; }
```
### Power
The power from the last reading.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina2xx/Driver/Ina2xx.cs#L115)
```csharp title="Declaration"
public Power? Power { get; }
```
### ManufacturerID
The manufacturer identification, if supported. Otherwise returns an empty string.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina2xx/Driver/Ina2xx.cs#L172)
```csharp title="Declaration"
public string ManufacturerID { get; }
```
### DeviceID
The device identification number, if supported. Otherwise returns 0.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina2xx/Driver/Ina2xx.cs#L175)
```csharp title="Declaration"
public ushort DeviceID { get; }
```
### DeviceRevision
The Device Revision code, if supported. Otherwise returns 0.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina2xx/Driver/Ina2xx.cs#L178)
```csharp title="Declaration"
public byte DeviceRevision { get; }
```
## Fields
### ConfigRegister
Common Configuration Register (16 bits)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina2xx/Driver/Ina2xx.Enums.cs#L64)
```csharp title="Declaration"
protected const byte ConfigRegister = 0
```
## Methods
### GetAddress(AddressConnection, AddressConnection)
Lookup the correct address to use for the INA2xx based on the address pin connections.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina2xx/Driver/Ina2xx.cs#L82)
```csharp title="Declaration"
public static byte GetAddress(Ina2xx.AddressConnection a0, Ina2xx.AddressConnection a1)
```

##### Returns

`System.Byte`: correct [Meadow.Foundation.Sensors.Power.Ina2xx.Addresses](../Meadow.Foundation.Sensors.Power/Ina2xx.Addresses) value to use, as a `byte`
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Power.Ina2xx.AddressConnection](../Meadow.Foundation.Sensors.Power/Ina2xx.AddressConnection) | *a0* | [Meadow.Foundation.Sensors.Power.Ina2xx.AddressConnection](../Meadow.Foundation.Sensors.Power/Ina2xx.AddressConnection) specifying what A0 is connected to. |
| [Meadow.Foundation.Sensors.Power.Ina2xx.AddressConnection](../Meadow.Foundation.Sensors.Power/Ina2xx.AddressConnection) | *a1* | [Meadow.Foundation.Sensors.Power.Ina2xx.AddressConnection](../Meadow.Foundation.Sensors.Power/Ina2xx.AddressConnection) specifying what A1 is connected to. |

### Configure()
Sets the sensor Configuration to default values. Each implementation should provide overloads for specific available options.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina2xx/Driver/Ina2xx.cs#L87)
```csharp title="Declaration"
public abstract void Configure()
```
### Reset()
Resets Ina2xx to default settings.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina2xx/Driver/Ina2xx.cs#L97)
```csharp title="Declaration"
public void Reset()
```
### RaiseEventsAndNotify(IChangeResult&lt;(Current? Current, Voltage? Voltage, Power? Power)&gt;)
Raise events for subscribers and notify of value changes.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina2xx/Driver/Ina2xx.cs#L121)
```csharp title="Declaration"
protected override void RaiseEventsAndNotify(IChangeResult<(Current? Current, Voltage? Voltage, Power? Power)> changeResult)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Current>,System.Nullable<Meadow.Units.Voltage>,System.Nullable<Meadow.Units.Power>>>` | *changeResult* | The updated sensor data |

### ReadSensor()
Read value from sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina2xx/Driver/Ina2xx.cs#L139)
```csharp title="Declaration"
protected override Task<(Current? Current, Voltage? Voltage, Power? Power)> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<System.Nullable<Meadow.Units.Current>,System.Nullable<Meadow.Units.Voltage>,System.Nullable<Meadow.Units.Power>>>`: unitized value### ReadCurrent()
Read the Current measurement from the power monitor IC.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina2xx/Driver/Ina2xx.cs#L157)
```csharp title="Declaration"
public abstract Current ReadCurrent()
```

##### Returns

`Meadow.Units.Current`
### ReadVoltage()
Reads the current voltage of the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina2xx/Driver/Ina2xx.cs#L160)
```csharp title="Declaration"
public ValueTask<Voltage> ReadVoltage()
```

##### Returns

`System.Threading.Tasks.ValueTask<Meadow.Units.Voltage>`
### ReadBusVoltage()
Read the Voltage measurement from the power monitor IC.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina2xx/Driver/Ina2xx.cs#L163)
```csharp title="Declaration"
public abstract Voltage ReadBusVoltage()
```

##### Returns

`Meadow.Units.Voltage`
### ReadShuntVoltage()
Read the Voltage across the Shunt (sense) resistor from the power monitor IC.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina2xx/Driver/Ina2xx.cs#L166)
```csharp title="Declaration"
public abstract Voltage ReadShuntVoltage()
```

##### Returns

`Meadow.Units.Voltage`
### ReadPower()
Read the Power measurement from the power monitor IC.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina2xx/Driver/Ina2xx.cs#L169)
```csharp title="Declaration"
public abstract Power ReadPower()
```

##### Returns

`Meadow.Units.Power`

## Implements

* `System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Current>,System.Nullable<Meadow.Units.Voltage>,System.Nullable<Meadow.Units.Power>>>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Current>,System.Nullable<Meadow.Units.Voltage>,System.Nullable<Meadow.Units.Power>>>`
* `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Current>,System.Nullable<Meadow.Units.Voltage>,System.Nullable<Meadow.Units.Power>>>`
* `System.IDisposable`
* `Meadow.Peripherals.Sensors.ICurrentSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Current>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Current>`
* `Meadow.Peripherals.Sensors.IVoltageSensor`
* `Meadow.Peripherals.Sensors.IPowerSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Power>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Power>`
* `Meadow.Hardware.II2cPeripheral`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Voltage>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Voltage>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
