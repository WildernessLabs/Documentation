---
uid: Meadow.Foundation.Sensors.Power.Ina260
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Power.Ina260
---

| Ina260 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina260) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina260/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Power.Ina260/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Power.Ina260.svg?label=Meadow.Foundation.Sensors.Power.Ina260" alt="NuGet Gallery for Meadow.Foundation.Sensors.Power.Ina260" /></a> |

### Code Example

```csharp
Ina260 ina260;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    var bus = Device.CreateI2cBus();
    ina260 = new Ina260(bus);

    Resolver.Log.Info($"-- INA260 Sample App ---");
    Resolver.Log.Info($"Manufacturer: {ina260.ManufacturerID}");
    Resolver.Log.Info($"Die: {ina260.DieID}");
    ina260.Updated += (s, v) =>
    {
        Resolver.Log.Info($"{v.New.Item2}V @ {v.New.Item3}A");
    };

    return Task.CompletedTask;
}

public override Task Run()
{
    ina260.StartUpdating(TimeSpan.FromSeconds(2));
    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina260/Samples/Ina260_Sample)


# Class Ina260
Represents a INA260 Precision Digital Current and Power Monitor

###### **Assembly**: Ina260.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina260/Driver/Ina260.Enums.cs#L3)
```csharp title="Declaration"
public class Ina260 : ByteCommsSensorBase<(Power? Power, Voltage? Voltage, Current? Current)>, IObservable<IChangeResult<(Power? Power, Voltage? Voltage, Current? Current)>>, ISamplingSensor<(Power? Power, Voltage? Voltage, Current? Current)>, ISensor<(Power? Power, Voltage? Voltage, Current? Current)>, ISensor, ISamplingSensor, IDisposable, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../ByteCommsSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Power>,System.Nullable<Meadow.Units.Voltage>,System.Nullable<Meadow.Units.Current>>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Power>,System.Nullable<Meadow.Units.Voltage>,System.Nullable<Meadow.Units.Current>>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Power>,System.Nullable<Meadow.Units.Voltage>,System.Nullable<Meadow.Units.Current>>>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`, `Meadow.Hardware.II2cPeripheral`

## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina260/Driver/Ina260.cs#L18)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### Current
The value of the current (in Amps) flowing through the shunt resistor from the last reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina260/Driver/Ina260.cs#L40)
```csharp title="Declaration"
public Current? Current { get; }
```
### Voltage
The voltage from the last reading..
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina260/Driver/Ina260.cs#L45)
```csharp title="Declaration"
public Voltage? Voltage { get; }
```
### Power
The power from the last reading..
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina260/Driver/Ina260.cs#L50)
```csharp title="Declaration"
public Power? Power { get; }
```
### ManufacturerID
Reads the unique manufacturer identification number
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina260/Driver/Ina260.cs#L111)
```csharp title="Declaration"
public int ManufacturerID { get; }
```
### DieID
Reads the unique die identification number
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina260/Driver/Ina260.cs#L116)
```csharp title="Declaration"
public int DieID { get; }
```
## Methods
### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina260/Driver/Ina260.cs#L75)
```csharp title="Declaration"
protected override Task<(Power? Power, Voltage? Voltage, Current? Current)> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<System.Nullable<Meadow.Units.Power>,System.Nullable<Meadow.Units.Voltage>,System.Nullable<Meadow.Units.Current>>>`: The latest sensor reading### RaiseEventsAndNotify(IChangeResult&lt;(Power? Power, Voltage? Voltage, Current? Current)&gt;)
Raise events for subscribers and notify of value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina260/Driver/Ina260.cs#L90)
```csharp title="Declaration"
protected override void RaiseEventsAndNotify(IChangeResult<(Power? Power, Voltage? Voltage, Current? Current)> changeResult)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Power>,System.Nullable<Meadow.Units.Voltage>,System.Nullable<Meadow.Units.Current>>>` | *changeResult* | The updated sensor data |

## Events
### PowerUpdated
Raised when the power value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina260/Driver/Ina260.cs#L23)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Power>> PowerUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Power>>`
### VoltageUpdated
Raised when the voltage value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina260/Driver/Ina260.cs#L28)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Voltage>> VoltageUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Voltage>>`
### CurrentUpdated
Raised when the current value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Power.Ina260/Driver/Ina260.cs#L33)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Current>> CurrentUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Current>>`

## Implements

* `System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Power>,System.Nullable<Meadow.Units.Voltage>,System.Nullable<Meadow.Units.Current>>>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Power>,System.Nullable<Meadow.Units.Voltage>,System.Nullable<Meadow.Units.Current>>>`
* `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Power>,System.Nullable<Meadow.Units.Voltage>,System.Nullable<Meadow.Units.Current>>>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `System.IDisposable`
* `Meadow.Hardware.II2cPeripheral`
