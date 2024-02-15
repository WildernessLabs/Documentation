---
uid: Meadow.Foundation.Sensors.Environmental.Y4000
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.Y4000
---

| Y4000 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Environmental.Y4000/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Environmental.Y4000.svg?label=Meadow.Foundation.Sensors.Environmental.Y4000" alt="NuGet Gallery for Meadow.Foundation.Sensors.Environmental.Y4000" /></a> |

### Code Example

```csharp
Y4000 sensor;

public async override Task Initialize()
{
    Resolver.Log.Info("Initialize...");
    await Task.Delay(2000);

    sensor = new Y4000(Device, Device.PlatformOS.GetSerialPortName("COM4"), 0x01, Device.Pins.D09);
    await sensor.Initialize();

    await Task.Delay(2000);
}

public override async Task Run()
{
    Resolver.Log.Info("Run...");

    var isdn = await sensor.GetISDN();
    Resolver.Log.Info($"Address: {isdn}");

    var supplyVoltage = await sensor.GetSupplyVoltage();
    Resolver.Log.Info($"Supply voltage: {supplyVoltage}");

    var measurements = await sensor.Read();

    Resolver.Log.Info($"Sensor data: {measurements}");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Samples/Y4000_Sample)


# Class Y4000
Represents a Yosemitech Y4000 Multiparameter Sonde water quality sensor 
for dissolved oxygen, conductivity, turbidity, pH, chlorophyll, 
blue green algae, chlorophyll, and temperature

###### **Assembly**: Y4000.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.Structs.cs#L7)
```csharp title="Declaration"
public class Y4000 : PollingSensorBase<(ConcentrationInWater? DissolvedOxygen, ConcentrationInWater? Chlorophyl, ConcentrationInWater? BlueGreenAlgae, Conductivity? ElectricalConductivity, PotentialHydrogen? PH, Turbidity? Turbidity, Temperature? Temperature, Voltage? OxidationReductionPotential)>, IObservable<IChangeResult<(ConcentrationInWater? DissolvedOxygen, ConcentrationInWater? Chlorophyl, ConcentrationInWater? BlueGreenAlgae, Conductivity? ElectricalConductivity, PotentialHydrogen? PH, Turbidity? Turbidity, Temperature? Temperature, Voltage? OxidationReductionPotential)>>, ISamplingSensor<(ConcentrationInWater? DissolvedOxygen, ConcentrationInWater? Chlorophyl, ConcentrationInWater? BlueGreenAlgae, Conductivity? ElectricalConductivity, PotentialHydrogen? PH, Turbidity? Turbidity, Temperature? Temperature, Voltage? OxidationReductionPotential)>, ISensor<(ConcentrationInWater? DissolvedOxygen, ConcentrationInWater? Chlorophyl, ConcentrationInWater? BlueGreenAlgae, Conductivity? ElectricalConductivity, PotentialHydrogen? PH, Turbidity? Turbidity, Temperature? Temperature, Voltage? OxidationReductionPotential)>, ISensor, ISamplingSensor, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../PollingSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.ConcentrationInWater>,System.Nullable<Meadow.Units.ConcentrationInWater>,System.Nullable<Meadow.Units.ConcentrationInWater>,System.Nullable<Meadow.Units.Conductivity>,System.Nullable<Meadow.Units.PotentialHydrogen>,System.Nullable<Meadow.Units.Turbidity>,System.Nullable<Meadow.Units.Temperature>,System.ValueTuple<System.Nullable<Meadow.Units.Voltage>>>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.ConcentrationInWater>,System.Nullable<Meadow.Units.ConcentrationInWater>,System.Nullable<Meadow.Units.ConcentrationInWater>,System.Nullable<Meadow.Units.Conductivity>,System.Nullable<Meadow.Units.PotentialHydrogen>,System.Nullable<Meadow.Units.Turbidity>,System.Nullable<Meadow.Units.Temperature>,System.ValueTuple<System.Nullable<Meadow.Units.Voltage>>>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.ConcentrationInWater>,System.Nullable<Meadow.Units.ConcentrationInWater>,System.Nullable<Meadow.Units.ConcentrationInWater>,System.Nullable<Meadow.Units.Conductivity>,System.Nullable<Meadow.Units.PotentialHydrogen>,System.Nullable<Meadow.Units.Turbidity>,System.Nullable<Meadow.Units.Temperature>,System.ValueTuple<System.Nullable<Meadow.Units.Voltage>>>>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`

## Properties
### DissolvedOxygen
The current Dissolved Oxygen concentration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L68)
```csharp title="Declaration"
public ConcentrationInWater? DissolvedOxygen { get; }
```
### Chlorophyl
The current Chlorophyll concentration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L73)
```csharp title="Declaration"
public ConcentrationInWater? Chlorophyl { get; }
```
### BlueGreenAlgae
The current Blue Green Algae concentration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L78)
```csharp title="Declaration"
public ConcentrationInWater? BlueGreenAlgae { get; }
```
### ElectricalConductivity
The current Electrical Conductivity
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L83)
```csharp title="Declaration"
public Conductivity? ElectricalConductivity { get; }
```
### PH
The current Potential Hydrogen (pH)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L88)
```csharp title="Declaration"
public PotentialHydrogen? PH { get; }
```
### Turbidity
The current Turbidity
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L93)
```csharp title="Declaration"
public Turbidity? Turbidity { get; }
```
### OxidationReductionPotential
The current Oxidation Reduction Potential (redux)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L98)
```csharp title="Declaration"
public Voltage? OxidationReductionPotential { get; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L103)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
### ModbusAddress
The current modbus address
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L120)
```csharp title="Declaration"
public byte ModbusAddress { get; }
```
## Methods
### Initialize()
Initialize sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L163)
```csharp title="Declaration"
public Task Initialize()
```

##### Returns

`System.Threading.Tasks.Task`
### GetISDN()
Get the device ISDN (address) of the sensor
Note this is a broadcast event so all Y4000 devices on the bus will respond
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L173)
```csharp title="Declaration"
public Task<byte> GetISDN()
```

##### Returns

`System.Threading.Tasks.Task<System.Byte>`: The address as a byte### SetISDN(byte)
Set the ISDN (address) of the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L185)
```csharp title="Declaration"
public Task SetISDN(byte modbusAddress)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *modbusAddress* | The address |

### GetSupplyVoltage()
Get the current supply voltage
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L200)
```csharp title="Declaration"
public Task<Voltage> GetSupplyVoltage()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Voltage>`
### GetSerialNumber()
Get the device serial number
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L210)
```csharp title="Declaration"
public Task<ushort[]> GetSerialNumber()
```

##### Returns

`System.Threading.Tasks.Task<System.UInt16[]>`: The serial number as a ushort array### GetVersion()
Get the device version
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L221)
```csharp title="Declaration"
public Task<ushort[]> GetVersion()
```

##### Returns

`System.Threading.Tasks.Task<System.UInt16[]>`
### GetBrushInterval()
Get the brush or wiper interval
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L231)
```csharp title="Declaration"
public Task<TimeSpan> GetBrushInterval()
```

##### Returns

`System.Threading.Tasks.Task<System.TimeSpan>`
### SetBrushInterval(TimeSpan)
Set the brush or wiper interval (normalized to minutes)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L240)
```csharp title="Declaration"
public Task SetBrushInterval(TimeSpan interval)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.TimeSpan` | *interval* |

### StartBrush()
Start the brush or wiper
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L250)
```csharp title="Declaration"
public Task StartBrush()
```

##### Returns

`System.Threading.Tasks.Task`
### GetErrorFlag()
Read the error flag from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L259)
```csharp title="Declaration"
public Task<ushort> GetErrorFlag()
```

##### Returns

`System.Threading.Tasks.Task<System.UInt16>`
### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L310)
```csharp title="Declaration"
protected override Task<(ConcentrationInWater? DissolvedOxygen, ConcentrationInWater? Chlorophyl, ConcentrationInWater? BlueGreenAlgae, Conductivity? ElectricalConductivity, PotentialHydrogen? PH, Turbidity? Turbidity, Temperature? Temperature, Voltage? OxidationReductionPotential)> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<System.Nullable<Meadow.Units.ConcentrationInWater>,System.Nullable<Meadow.Units.ConcentrationInWater>,System.Nullable<Meadow.Units.ConcentrationInWater>,System.Nullable<Meadow.Units.Conductivity>,System.Nullable<Meadow.Units.PotentialHydrogen>,System.Nullable<Meadow.Units.Turbidity>,System.Nullable<Meadow.Units.Temperature>,System.ValueTuple<System.Nullable<Meadow.Units.Voltage>>>>`: The latest sensor reading### RaiseEventsAndNotify(IChangeResult&lt;(ConcentrationInWater? DissolvedOxygen, ConcentrationInWater? Chlorophyl, ConcentrationInWater? BlueGreenAlgae, Conductivity? ElectricalConductivity, PotentialHydrogen? PH, Turbidity? Turbidity, Temperature? Temperature, Voltage? OxidationReductionPotential)&gt;)
Raise events for subscribers and notify of value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L348)
```csharp title="Declaration"
protected override void RaiseEventsAndNotify(IChangeResult<(ConcentrationInWater? DissolvedOxygen, ConcentrationInWater? Chlorophyl, ConcentrationInWater? BlueGreenAlgae, Conductivity? ElectricalConductivity, PotentialHydrogen? PH, Turbidity? Turbidity, Temperature? Temperature, Voltage? OxidationReductionPotential)> changeResult)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.ConcentrationInWater>,System.Nullable<Meadow.Units.ConcentrationInWater>,System.Nullable<Meadow.Units.ConcentrationInWater>,System.Nullable<Meadow.Units.Conductivity>,System.Nullable<Meadow.Units.PotentialHydrogen>,System.Nullable<Meadow.Units.Turbidity>,System.Nullable<Meadow.Units.Temperature>,System.ValueTuple<System.Nullable<Meadow.Units.Voltage>>>>` | *changeResult* | The updated sensor data |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L397)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L407)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |

## Events
### DissolvedOxygenUpdated
Raised when the DissolvedOxygen value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L28)
```csharp title="Declaration"
public event EventHandler<IChangeResult<ConcentrationInWater>> DissolvedOxygenUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.ConcentrationInWater>>`
### ChlorophylUpdated
Raised when the Chlorophyll value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L33)
```csharp title="Declaration"
public event EventHandler<IChangeResult<ConcentrationInWater>> ChlorophylUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.ConcentrationInWater>>`
### BlueGreenAlgaeUpdated
Raised when the BlueGreenAlgae value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L38)
```csharp title="Declaration"
public event EventHandler<IChangeResult<ConcentrationInWater>> BlueGreenAlgaeUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.ConcentrationInWater>>`
### ElectricalConductivityUpdated
Raised when the ElectricalConductivity value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L43)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Conductivity>> ElectricalConductivityUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Conductivity>>`
### PHUpdated
Raised when the PotentialHydrogen (pH) value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L48)
```csharp title="Declaration"
public event EventHandler<IChangeResult<PotentialHydrogen>> PHUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.PotentialHydrogen>>`
### TurbidityUpdated
Raised when the Turbidity value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L53)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Turbidity>> TurbidityUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Turbidity>>`
### TemperatureUpdated
Raised when the Temperature value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L58)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Temperature>> TemperatureUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Temperature>>`
### OxidationReductionPotentialUpdated
Raised when the OxidationReductionPotential (redux) value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Driver/Y4000.cs#L63)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Voltage>> OxidationReductionPotentialUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Voltage>>`

## Implements

* `System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.ConcentrationInWater>,System.Nullable<Meadow.Units.ConcentrationInWater>,System.Nullable<Meadow.Units.ConcentrationInWater>,System.Nullable<Meadow.Units.Conductivity>,System.Nullable<Meadow.Units.PotentialHydrogen>,System.Nullable<Meadow.Units.Turbidity>,System.Nullable<Meadow.Units.Temperature>,System.ValueTuple<System.Nullable<Meadow.Units.Voltage>>>>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.ConcentrationInWater>,System.Nullable<Meadow.Units.ConcentrationInWater>,System.Nullable<Meadow.Units.ConcentrationInWater>,System.Nullable<Meadow.Units.Conductivity>,System.Nullable<Meadow.Units.PotentialHydrogen>,System.Nullable<Meadow.Units.Turbidity>,System.Nullable<Meadow.Units.Temperature>,System.ValueTuple<System.Nullable<Meadow.Units.Voltage>>>>`
* `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.ConcentrationInWater>,System.Nullable<Meadow.Units.ConcentrationInWater>,System.Nullable<Meadow.Units.ConcentrationInWater>,System.Nullable<Meadow.Units.Conductivity>,System.Nullable<Meadow.Units.PotentialHydrogen>,System.Nullable<Meadow.Units.Turbidity>,System.Nullable<Meadow.Units.Temperature>,System.ValueTuple<System.Nullable<Meadow.Units.Voltage>>>>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `System.IDisposable`
