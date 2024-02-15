---
uid: Meadow.Foundation.Sensors.Environmental.Ags01Db
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.Ags01Db
---

| Ags01Db | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ags01Db) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ags01Db/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Environmental.Ags01Db/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Environmental.Ags01Db.svg?label=Meadow.Foundation.Sensors.Environmental.Ags01Db" alt="NuGet Gallery for Meadow.Foundation.Sensors.Environmental.Ags01Db" /></a> |

The AGS01DB is a MEMS VOC gas sensor that commuincates over I2C. 

Supply voltage(V)	    3.3~5.5
Supply current(mA)	    ＜30
Measuring range(ppm)	0~100
Operating range (°C)	0~50
Operating range (% RH)	0~95
Interface 	            I²C
Size:L*W*H (mm)	        23.3*12.5*5.8

### Code Example

```csharp
Ags01Db ags10Db;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize ...");
    ags10Db = new Ags01Db(Device.CreateI2cBus());

    Resolver.Log.Info($"Version: v{ags10Db.GetVersion()}");

    var consumer = Ags01Db.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Concentration New Value {result.New.PartsPerMillion}ppm");
            Resolver.Log.Info($"Concentration Old Value {result.Old?.PartsPerMillion}ppm");
        },
        filter: null
    );
    ags10Db.Subscribe(consumer);

    ags10Db.ConcentrationUpdated += (object sender, IChangeResult<Meadow.Units.Concentration> e) =>
    {
        Resolver.Log.Info($"Concentration Updated: {e.New.PartsPerMillion:N2}ppm");
    };

    return Task.CompletedTask;
}

public override Task Run()
{
    ags10Db.StartUpdating(TimeSpan.FromSeconds(1));

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ags01Db/Samples/Ags01Db_Sample)

### Wiring Example

To wire a Ags01Db to your Meadow board, connect the following:

| Ags01Db | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| SCL     | D08 (SCL)   |
| SDA     | D07 (SDA)   |
| VCC     | 3V3         |

It should look like the following diagram:

<img src="/API_Assets/Meadow.Foundation.Sensors.Environmental.Ags01Db/Ags01Db_Fritzing.png" />





# Class Ags01Db
Represents an AGS01DB MEMS VOC gas / air quality sensor
Pinout (left to right, label side down): VDD, SDA, GND, SCL
Note: requires pull-up resistors on SDA/SCL

###### **Assembly**: Ags01Db.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ags01Db/Driver/Ags01Db.Enums.cs#L8)
```csharp title="Declaration"
public class Ags01Db : ByteCommsSensorBase<Concentration>, IObservable<IChangeResult<Concentration>>, ISamplingSensor<Concentration>, ISensor<Concentration>, ISensor, ISamplingSensor, IDisposable, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../ByteCommsSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Concentration>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Concentration>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Concentration>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`, `Meadow.Hardware.II2cPeripheral`

## Properties
### Concentration
The current concentration value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ags01Db/Driver/Ags01Db.cs#L25)
```csharp title="Declaration"
public Concentration? Concentration { get; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ags01Db/Driver/Ags01Db.cs#L30)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Methods
### ReadSensor()
Get ASG01DB VOC Gas Concentration and update the Concentration property
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ags01Db/Driver/Ags01Db.cs#L45)
```csharp title="Declaration"
protected override Task<Concentration> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Concentration>`
### GetVersion()
Get ASG01DB Version
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ags01Db/Driver/Ags01Db.cs#L65)
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
