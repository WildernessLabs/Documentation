---
uid: Meadow.Foundation.Sensors.Environmental.Ens160
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.Ens160
---

| Ens160 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ens160) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ens160/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Environmental.Ens160/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Environmental.Ens160.svg?label=Meadow.Foundation.Sensors.Environmental.Ens160" alt="NuGet Gallery for Meadow.Foundation.Sensors.Environmental.Ens160" /></a> |

### Code Example

```csharp
Ens160 sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    var i2cBus = Device.CreateI2cBus(Meadow.Hardware.I2cBusSpeed.Standard);

    sensor = new Ens160(i2cBus, (byte)Ens160.Addresses.Address_0x53);


    var consumer = Ens160.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Observer: C02 concentration changed by threshold; new: {result.New.CO2Concentration?.PartsPerMillion:N0}ppm");
        },
        filter: result =>
        {
            if (result.Old?.CO2Concentration is { } oldCon &&
                result.New.CO2Concentration is { } newCon)
            {
                return Math.Abs((newCon - oldCon).PartsPerMillion) > 10;
            }
            return false;
        }
    );

    sensor?.Subscribe(consumer);

    if (sensor != null)
    {
        sensor.Updated += (sender, result) =>
        {
            Resolver.Log.Info($"  CO2 Concentration: {result.New.CO2Concentration?.PartsPerMillion:N0}ppm");
            Resolver.Log.Info($"  Ethanol Concentration: {result.New.EthanolConcentration?.PartsPerBillion:N0}ppb");
            Resolver.Log.Info($"  TVOC Concentration: {result.New.TVOCConcentration?.PartsPerBillion:N0}ppb");
            Resolver.Log.Info($"  AQI: {sensor.GetAirQualityIndex()}");
        };
    }

    sensor?.StartUpdating(TimeSpan.FromSeconds(2));

    return base.Initialize();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ens160/Samples/Ens160_Sample)


# Class Ens160
Represents an ENS160 Digital Metal-Oxide Multi-Gas Sensor

###### **Assembly**: Ens160.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ens160/Driver/Ens160.Enums.cs#L3)
```csharp title="Declaration"
public class Ens160 : ByteCommsSensorBase<(Concentration? CO2Concentration, Concentration? EthanolConcentration, Concentration? TVOCConcentration)>, IObservable<IChangeResult<(Concentration? CO2Concentration, Concentration? EthanolConcentration, Concentration? TVOCConcentration)>>, ISamplingSensor<(Concentration? CO2Concentration, Concentration? EthanolConcentration, Concentration? TVOCConcentration)>, ISensor<(Concentration? CO2Concentration, Concentration? EthanolConcentration, Concentration? TVOCConcentration)>, IDisposable, ICO2ConcentrationSensor, ISamplingSensor<Concentration>, ISensor<Concentration>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../ByteCommsSensorBase`UNIT`)

**Implements:**  

<details><summary>Expand</summary>

`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Concentration>>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Concentration>>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Concentration>>>`, `System.IDisposable`, `Meadow.Peripherals.Sensors.Environmental.ICO2ConcentrationSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Concentration>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Concentration>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`
</details>



## Properties
### Concentration
The current C02 concentration value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ens160/Driver/Ens160.cs#L46)
```csharp title="Declaration"
public Concentration? Concentration { get; }
```
### CO2Concentration
The current C02 concentration value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ens160/Driver/Ens160.cs#L51)
```csharp title="Declaration"
public Concentration? CO2Concentration { get; }
```
### EthanolConcentration
The current ethanol concentration value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ens160/Driver/Ens160.cs#L56)
```csharp title="Declaration"
public Concentration? EthanolConcentration { get; }
```
### TVOCConcentration
The current Total Volatile Organic Compounds (TVOC) concentration value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ens160/Driver/Ens160.cs#L61)
```csharp title="Declaration"
public Concentration? TVOCConcentration { get; }
```
### CurrentOperatingMode
The current device operating mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ens160/Driver/Ens160.cs#L66)
```csharp title="Declaration"
public Ens160.OperatingMode CurrentOperatingMode { get; set; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ens160/Driver/Ens160.cs#L75)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Methods
### Initialize()
Initialize the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ens160/Driver/Ens160.cs#L97)
```csharp title="Declaration"
protected Task Initialize()
```

##### Returns

`System.Threading.Tasks.Task`
### Reset()
Reset the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ens160/Driver/Ens160.cs#L110)
```csharp title="Declaration"
public Task Reset()
```

##### Returns

`System.Threading.Tasks.Task`
### GetDeviceID()
Get the sensor ID from PART_ID register
Default value is 0x0160 (352)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ens160/Driver/Ens160.cs#L121)
```csharp title="Declaration"
public ushort GetDeviceID()
```

##### Returns

`System.UInt16`: ID as a ushort (2 bytes)### GetFirmwareVersion()
Get the sensor app / firmware version
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ens160/Driver/Ens160.cs#L130)
```csharp title="Declaration"
public (byte Major, byte Minor, byte Release) GetFirmwareVersion()
```

##### Returns

`System.ValueTuple<System.Byte,System.Byte,System.Byte>`: The major, minor, release values as a tuple of bytes### SetTemperature(Temperature)
Set ambient temperature
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ens160/Driver/Ens160.cs#L153)
```csharp title="Declaration"
public void SetTemperature(Temperature ambientTemperature)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Units.Temperature` | *ambientTemperature* |

### SetHumidity(RelativeHumidity)
Set relative humidity
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ens160/Driver/Ens160.cs#L164)
```csharp title="Declaration"
public void SetHumidity(RelativeHumidity humidity)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Units.RelativeHumidity` | *humidity* |

### GetAirQualityIndex()
Get the air quality index (AQI)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ens160/Driver/Ens160.cs#L174)
```csharp title="Declaration"
public Ens160.UBAAirQualityIndex GetAirQualityIndex()
```

##### Returns

[Meadow.Foundation.Sensors.Environmental.Ens160.UBAAirQualityIndex](../Ens160.UBAAirQualityIndex)
### GetTemperature()
Get the temperature used for calculations - taken from TEMP_IN if supplied
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ens160/Driver/Ens160.cs#L219)
```csharp title="Declaration"
public Temperature GetTemperature()
```

##### Returns

`Meadow.Units.Temperature`: Temperature### GetHumidity()
Get the relative humidity used in its calculations -b taken from RH_IN if supplied
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ens160/Driver/Ens160.cs#L229)
```csharp title="Declaration"
public RelativeHumidity GetHumidity()
```

##### Returns

`Meadow.Units.RelativeHumidity`
### StartUpdating(TimeSpan?)
Starts updating the sensor on the updateInterval frequency specified
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ens160/Driver/Ens160.cs#L238)
```csharp title="Declaration"
public override void StartUpdating(TimeSpan? updateInterval = null)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Nullable<System.TimeSpan>` | *updateInterval* |

### StopUpdating()
Stop updating the sensor
The sensor will not respond to commands for 500ms 
The call will delay the calling thread for 500ms
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ens160/Driver/Ens160.cs#L248)
```csharp title="Declaration"
public override void StopUpdating()
```
### ReadSensor()
Get Scdx40 C02 Gas Concentration and
Update the Concentration property
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ens160/Driver/Ens160.cs#L257)
```csharp title="Declaration"
protected override Task<(Concentration? CO2Concentration, Concentration? EthanolConcentration, Concentration? TVOCConcentration)> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Concentration>>>`
### RaiseEventsAndNotify(IChangeResult&lt;(Concentration? CO2Concentration, Concentration? EthanolConcentration, Concentration? TVOCConcentration)&gt;)
Raise change events for subscribers
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ens160/Driver/Ens160.cs#L274)
```csharp title="Declaration"
protected override void RaiseEventsAndNotify(IChangeResult<(Concentration? CO2Concentration, Concentration? EthanolConcentration, Concentration? TVOCConcentration)> changeResult)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Concentration>>>` | *changeResult* | The change result with the current sensor data |

## Events
### CO2ConcentrationUpdated
Raised when the CO2 concentration changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ens160/Driver/Ens160.cs#L31)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Concentration>> CO2ConcentrationUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Concentration>>`
### EthanolConcentrationUpdated
Raised when the ethanol concentration changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ens160/Driver/Ens160.cs#L36)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Concentration>> EthanolConcentrationUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Concentration>>`
### TVOCConcentrationUpdated
Raised when the Total Volatile Organic Compounds (TVOC) concentration changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ens160/Driver/Ens160.cs#L41)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Concentration>> TVOCConcentrationUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Concentration>>`

## Implements

* `System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Concentration>>>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Concentration>>>`
* `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Concentration>,System.Nullable<Meadow.Units.Concentration>>>`
* `System.IDisposable`
* `Meadow.Peripherals.Sensors.Environmental.ICO2ConcentrationSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Concentration>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Concentration>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
