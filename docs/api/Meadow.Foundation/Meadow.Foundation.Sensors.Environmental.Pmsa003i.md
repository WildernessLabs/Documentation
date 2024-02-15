---
uid: Meadow.Foundation.Sensors.Environmental.Pmsa003i
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.Pmsa003i
---

| Pmsa003i | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Environmental.Pmsa300i/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Environmental.Pmsa300i.svg?label=Meadow.Foundation.Sensors.Environmental.Pmsa300i" alt="NuGet Gallery for Meadow.Foundation.Sensors.Environmental.Pmsa300i" /></a> |

### Code Example

```csharp
Pmsa003i pmsa003i;

public override Task Initialize()
{
    var bus = Device.CreateI2cBus(I2cBusSpeed.Standard);
    pmsa003i = new Pmsa003i(bus);

    pmsa003i.Updated += Pmsa003i_Updated;

    return base.Initialize();
}

public override Task Run()
{
    Resolver.Log.Info("Run...");

    pmsa003i.StartUpdating(TimeSpan.FromSeconds(2));

    return base.Run();
}

private void Pmsa003i_Updated(object sender, IChangeResult<(
    Density? StandardParticulateMatter_1micron,
    Density? StandardParticulateMatter_2_5micron,
    Density? StandardParticulateMatter_10micron,
    Density? EnvironmentalParticulateMatter_1micron,
    Density? EnvironmentalParticulateMatter_2_5micron,
    Density? EnvironmentalParticulateMatter_10micron,
    ParticleDensity? ParticleDensity_0_3microns,
    ParticleDensity? ParticleDensity_0_5microns,
    ParticleDensity? ParticleDensity_10microns,
    ParticleDensity? ParticleDensity_25microns,
    ParticleDensity? ParticleDensity_50microns,
    ParticleDensity? ParticleDensity_100microns)> e)
{
    Resolver.Log.Info($"Standard Particulate Matter 1 micron: {e.New.StandardParticulateMatter_1micron.Value.MicroGramsPerMetersCubed} micrograms per m^3");
    Resolver.Log.Info($"Standard Particulate Matter 2_5micron: {e.New.StandardParticulateMatter_2_5micron.Value.MicroGramsPerMetersCubed} micrograms per m^3");
    Resolver.Log.Info($"Standard Particulate Matter 10 micron: {e.New.StandardParticulateMatter_10micron.Value.MicroGramsPerMetersCubed} micrograms per m^3");
    Resolver.Log.Info($"Environmental Particulate Matter 1 micron: {e.New.EnvironmentalParticulateMatter_1micron.Value.MicroGramsPerMetersCubed} micrograms per m^3");
    Resolver.Log.Info($"Environmental Particulate Matter 2.5 micron: {e.New.EnvironmentalParticulateMatter_2_5micron.Value.MicroGramsPerMetersCubed} micrograms per m^3");
    Resolver.Log.Info($"Environmental Particulate Matter 10 micron: {e.New.EnvironmentalParticulateMatter_10micron.Value.MicroGramsPerMetersCubed} micrograms per m^3"); ;

    Resolver.Log.Info($"Count of particles - 0.3 microns: {e.New.ParticleDensity_0_3microns.Value.ParticlesPerCentiliter} in 0.1 liters of air");
    Resolver.Log.Info($"Count of particles - 0.5 microns: {e.New.ParticleDensity_0_5microns.Value.ParticlesPerCentiliter} in 0.1 liters of air");
    Resolver.Log.Info($"Count of particles - 10 microns: {e.New.ParticleDensity_10microns.Value.ParticlesPerCentiliter} in 0.1 liters of air");
    Resolver.Log.Info($"Count of particles - 25 microns: {e.New.ParticleDensity_25microns.Value.ParticlesPerCentiliter} in 0.1 liters of air");
    Resolver.Log.Info($"Count of particles - 50 microns: {e.New.ParticleDensity_50microns.Value.ParticlesPerCentiliter} in 0.1 liters of air");
    Resolver.Log.Info($"Count of particles - 100 microns: {e.New.ParticleDensity_100microns.Value.ParticlesPerCentiliter} in 0.1 liters of air");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Samples/Pmsa003I_Sample)


# Class Pmsa003i
Represents a Pmsa003i AQI particulate matter sensor

###### **Assembly**: Pmsa300i.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Driver/Pmsa003i.Enums.cs#L3)
```csharp title="Declaration"
public class Pmsa003i : ByteCommsSensorBase<(Density? StandardParticulateMatter_1micron, Density? StandardParticulateMatter_2_5micron, Density? StandardParticulateMatter_10micron, Density? EnvironmentalParticulateMatter_1micron, Density? EnvironmentalParticulateMatter_2_5micron, Density? EnvironmentalParticulateMatter_10micron, ParticleDensity? ParticleDensity_0_3microns, ParticleDensity? ParticleDensity_0_5microns, ParticleDensity? ParticleDensity_10microns, ParticleDensity? ParticleDensity_25microns, ParticleDensity? ParticleDensity_50microns, ParticleDensity? ParticleDensity_100microns)>, IObservable<IChangeResult<(Density? StandardParticulateMatter_1micron, Density? StandardParticulateMatter_2_5micron, Density? StandardParticulateMatter_10micron, Density? EnvironmentalParticulateMatter_1micron, Density? EnvironmentalParticulateMatter_2_5micron, Density? EnvironmentalParticulateMatter_10micron, ParticleDensity? ParticleDensity_0_3microns, ParticleDensity? ParticleDensity_0_5microns, ParticleDensity? ParticleDensity_10microns, ParticleDensity? ParticleDensity_25microns, ParticleDensity? ParticleDensity_50microns, ParticleDensity? ParticleDensity_100microns)>>, ISamplingSensor<(Density? StandardParticulateMatter_1micron, Density? StandardParticulateMatter_2_5micron, Density? StandardParticulateMatter_10micron, Density? EnvironmentalParticulateMatter_1micron, Density? EnvironmentalParticulateMatter_2_5micron, Density? EnvironmentalParticulateMatter_10micron, ParticleDensity? ParticleDensity_0_3microns, ParticleDensity? ParticleDensity_0_5microns, ParticleDensity? ParticleDensity_10microns, ParticleDensity? ParticleDensity_25microns, ParticleDensity? ParticleDensity_50microns, ParticleDensity? ParticleDensity_100microns)>, ISensor<(Density? StandardParticulateMatter_1micron, Density? StandardParticulateMatter_2_5micron, Density? StandardParticulateMatter_10micron, Density? EnvironmentalParticulateMatter_1micron, Density? EnvironmentalParticulateMatter_2_5micron, Density? EnvironmentalParticulateMatter_10micron, ParticleDensity? ParticleDensity_0_3microns, ParticleDensity? ParticleDensity_0_5microns, ParticleDensity? ParticleDensity_10microns, ParticleDensity? ParticleDensity_25microns, ParticleDensity? ParticleDensity_50microns, ParticleDensity? ParticleDensity_100microns)>, ISensor, ISamplingSensor, IDisposable, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../ByteCommsSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.ParticleDensity>,System.ValueTuple<System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>>>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.ParticleDensity>,System.ValueTuple<System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>>>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.ParticleDensity>,System.ValueTuple<System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>>>>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`, `Meadow.Hardware.II2cPeripheral`

## Properties
### PM1_0Std
Standard particulate matter PM1.0 density
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Driver/Pmsa003i.cs#L91)
```csharp title="Declaration"
public Density? PM1_0Std { get; }
```
### PM2_5Std
Standard particulate matter PM2.5 density
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Driver/Pmsa003i.cs#L96)
```csharp title="Declaration"
public Density? PM2_5Std { get; }
```
### PM10_0Std
Standard particulate matter PM10 density
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Driver/Pmsa003i.cs#L101)
```csharp title="Declaration"
public Density? PM10_0Std { get; }
```
### PM1_0Env
Standard particulate matter PM1.0 density
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Driver/Pmsa003i.cs#L106)
```csharp title="Declaration"
public Density? PM1_0Env { get; }
```
### PM2_5Env
Standard particulate matter PM2.5 density
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Driver/Pmsa003i.cs#L111)
```csharp title="Declaration"
public Density? PM2_5Env { get; }
```
### PM10_0Env
Standard particulate matter PM10 density
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Driver/Pmsa003i.cs#L116)
```csharp title="Declaration"
public Density? PM10_0Env { get; }
```
### CountOf0_3micronParticles
Particle density of 0 - 0.3 micron particles in air
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Driver/Pmsa003i.cs#L121)
```csharp title="Declaration"
public ParticleDensity? CountOf0_3micronParticles { get; }
```
### CountOf0_5micronParticles
Particle density of 0.3 - 0.5 micron particles in air
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Driver/Pmsa003i.cs#L125)
```csharp title="Declaration"
public ParticleDensity? CountOf0_5micronParticles { get; }
```
### CountOf10micronParticles
Particle density of 0.5 - 10 micron particles in air
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Driver/Pmsa003i.cs#L129)
```csharp title="Declaration"
public ParticleDensity? CountOf10micronParticles { get; }
```
### CountOf25micronParticles
Particle density of 0.5 - 10 micron particles in air
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Driver/Pmsa003i.cs#L133)
```csharp title="Declaration"
public ParticleDensity? CountOf25micronParticles { get; }
```
### CountOf50micronParticles
Particle density of 10 - 50 micron particles in air
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Driver/Pmsa003i.cs#L137)
```csharp title="Declaration"
public ParticleDensity? CountOf50micronParticles { get; }
```
### CountOf100micronParticles
Particle density of 50 - 100 micron particles in  air
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Driver/Pmsa003i.cs#L141)
```csharp title="Declaration"
public ParticleDensity? CountOf100micronParticles { get; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Driver/Pmsa003i.cs#L146)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Methods
### StartUpdating(TimeSpan?)
Starts updating the sensor on the updateInterval frequency specified
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Driver/Pmsa003i.cs#L160)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Driver/Pmsa003i.cs#L170)
```csharp title="Declaration"
public override void StopUpdating()
```
### ReadSensor()
Read data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Driver/Pmsa003i.cs#L180)
```csharp title="Declaration"
protected override Task<(Density? StandardParticulateMatter_1micron, Density? StandardParticulateMatter_2_5micron, Density? StandardParticulateMatter_10micron, Density? EnvironmentalParticulateMatter_1micron, Density? EnvironmentalParticulateMatter_2_5micron, Density? EnvironmentalParticulateMatter_10micron, ParticleDensity? ParticleDensity_0_3microns, ParticleDensity? ParticleDensity_0_5microns, ParticleDensity? ParticleDensity_10microns, ParticleDensity? ParticleDensity_25microns, ParticleDensity? ParticleDensity_50microns, ParticleDensity? ParticleDensity_100microns)> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.ParticleDensity>,System.ValueTuple<System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>>>>`

##### Exceptions

`System.Exception`  

### RaiseEventsAndNotify(IChangeResult&lt;(Density? StandardParticulateMatter_1micron, Density? StandardParticulateMatter_2_5micron, Density? StandardParticulateMatter_10micron, Density? EnvironmentalParticulateMatter_1micron, Density? EnvironmentalParticulateMatter_2_5micron, Density? EnvironmentalParticulateMatter_10micron, ParticleDensity? ParticleDensity_0_3microns, ParticleDensity? ParticleDensity_0_5microns, ParticleDensity? ParticleDensity_10microns, ParticleDensity? ParticleDensity_25microns, ParticleDensity? ParticleDensity_50microns, ParticleDensity? ParticleDensity_100microns)&gt;)
Raise change events for subscribers
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Driver/Pmsa003i.cs#L232)
```csharp title="Declaration"
protected override void RaiseEventsAndNotify(IChangeResult<(Density? StandardParticulateMatter_1micron, Density? StandardParticulateMatter_2_5micron, Density? StandardParticulateMatter_10micron, Density? EnvironmentalParticulateMatter_1micron, Density? EnvironmentalParticulateMatter_2_5micron, Density? EnvironmentalParticulateMatter_10micron, ParticleDensity? ParticleDensity_0_3microns, ParticleDensity? ParticleDensity_0_5microns, ParticleDensity? ParticleDensity_10microns, ParticleDensity? ParticleDensity_25microns, ParticleDensity? ParticleDensity_50microns, ParticleDensity? ParticleDensity_100microns)> changeResult)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.ParticleDensity>,System.ValueTuple<System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>>>>` | *changeResult* | The change result with the current sensor data |

## Events
### StandardPM_1micronUpdated
Raised when the Standard particulate matter PM1.0 density changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Driver/Pmsa003i.cs#L31)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Density>> StandardPM_1micronUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Density>>`
### StandardPM_2_5micronUpdated
Raised when the Standard particulate matter PM2.5 density changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Driver/Pmsa003i.cs#L36)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Density>> StandardPM_2_5micronUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Density>>`
### StandardPM_10micronUpdated
Raised when the Standard particulate matter PM10.0 density changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Driver/Pmsa003i.cs#L41)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Density>> StandardPM_10micronUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Density>>`
### EnvironmentalPM_1micronUpdated
Raised when the Environment particulate matter PM1.0 density changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Driver/Pmsa003i.cs#L46)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Density>> EnvironmentalPM_1micronUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Density>>`
### EnvironmentalPM_2_5micronUpdated
Raised when the Environment particulate matter PM2.5 density changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Driver/Pmsa003i.cs#L51)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Density>> EnvironmentalPM_2_5micronUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Density>>`
### EnvironmentalPM_10micronUpdated
Raised when the Environment particulate matter PM10.0 density changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Driver/Pmsa003i.cs#L56)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Density>> EnvironmentalPM_10micronUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Density>>`
### CountOf0_3micronParticlesUpdated
Raised when the number of 0-0.3 micron particles (in 0.1 liters of air) changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Driver/Pmsa003i.cs#L61)
```csharp title="Declaration"
public event EventHandler<IChangeResult<ParticleDensity>> CountOf0_3micronParticlesUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.ParticleDensity>>`
### CountOf0_5micronParticlesUpdated
Raised when the number of 0.3-0.5 micron particles (in 0.1 liters of air) changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Driver/Pmsa003i.cs#L66)
```csharp title="Declaration"
public event EventHandler<IChangeResult<ParticleDensity>> CountOf0_5micronParticlesUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.ParticleDensity>>`
### CountOf10micronParticlesUpdated
Raised when the number of 0.5-10 micron particles changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Driver/Pmsa003i.cs#L71)
```csharp title="Declaration"
public event EventHandler<IChangeResult<ParticleDensity>> CountOf10micronParticlesUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.ParticleDensity>>`
### CountOf25micronParticlesUpdated
Raised when the number of 10-25 micron particles (in 0.1 liters of air) changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Driver/Pmsa003i.cs#L76)
```csharp title="Declaration"
public event EventHandler<IChangeResult<ParticleDensity>> CountOf25micronParticlesUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.ParticleDensity>>`
### CountOf50micronParticlesUpdated
Raised when the number of 25-50 micron particles (in 0.1 liters of air) changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Driver/Pmsa003i.cs#L81)
```csharp title="Declaration"
public event EventHandler<IChangeResult<ParticleDensity>> CountOf50micronParticlesUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.ParticleDensity>>`
### CountOf100micronParticlesUpdated
Raised when the number of 50-100 micron particles (in 0.1 liters of air) changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Pmsa003I/Driver/Pmsa003i.cs#L86)
```csharp title="Declaration"
public event EventHandler<IChangeResult<ParticleDensity>> CountOf100micronParticlesUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.ParticleDensity>>`

## Implements

* `System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.ParticleDensity>,System.ValueTuple<System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>>>>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.ParticleDensity>,System.ValueTuple<System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>>>>`
* `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.Density>,System.Nullable<Meadow.Units.ParticleDensity>,System.ValueTuple<System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>,System.Nullable<Meadow.Units.ParticleDensity>>>>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `System.IDisposable`
* `Meadow.Hardware.II2cPeripheral`
