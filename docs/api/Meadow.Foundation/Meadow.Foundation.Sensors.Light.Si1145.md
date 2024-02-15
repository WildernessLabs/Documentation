---
uid: Meadow.Foundation.Sensors.Light.Si1145
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Si1145
---

| Si1145 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Si1145) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Si1145/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Light.Si1145/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Light.Si1145.svg?label=Meadow.Foundation.Sensors.Light.Si1145" alt="NuGet Gallery for Meadow.Foundation.Sensors.Light.Si1145" /></a> |

The **SI1145** is a low power infrared, ultraviolet and ambient light sensor with an I2C interface.

* Ultraviolet / Infrared / ambient light sensor
* Proximity sensor
* Independent LED drivers
* I2C interface up to 3.4 MBps

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Si1145/Samples/) 

## Purchasing

* [SI1145 from Adafruit](https://www.adafruit.com/product/1777)

The following application reads the sensor output Infrared, Ultraviolet and Visibility once per second and outputs the result on the output console:

### Code Example

```csharp
Si1145 sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    sensor = new Si1145(Device.CreateI2cBus());

    // Example that uses an IObservable subscription to only be notified when the filter is satisfied
    var consumer = Si1145.CreateObserver(
        handler: result => Resolver.Log.Info($"Observer: filter satisfied: {result.New.VisibleLight?.Lux:N2}Lux, old: {result.Old?.VisibleLight?.Lux:N2}Lux"),

        // only notify if the visible light changes by 100 lux (put your hand over the sensor to trigger)
        filter: result =>
        {
            if (result.Old is { } old)
            {
                // returns true if > 100lux change
                return ((result.New.VisibleLight.Value - old.VisibleLight.Value).Abs().Lux > 100);
            }
            return false;
        });

    sensor.Subscribe(consumer);

    // classical .NET events can also be used:
    sensor.Updated += (sender, result) =>
    {
        Resolver.Log.Info($" Visible Light: {result.New.VisibleLight?.Lux:N2}Lux");
        Resolver.Log.Info($" Infrared Light: {result.New.Infrared?.Lux:N2}Lux");
        Resolver.Log.Info($" UV Index: {result.New.UltravioletIndex:N2}Lux");
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    var (VisibleLight, UltravioletIndex, Infrared) = await sensor.Read();

    Resolver.Log.Info("Initial Readings:");
    Resolver.Log.Info($" Visible Light: {VisibleLight?.Lux:N2}Lux");
    Resolver.Log.Info($" Infrared Light: {Infrared?.Lux:N2}Lux");
    Resolver.Log.Info($" UV Index: {UltravioletIndex:N2}Lux");

    sensor.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Si1145/Samples/Si1145_Sample)

### Wiring Example

<img src="/API_Assets/Meadow.Foundation.Sensors.Light.SI1145/SI1145_Fritzing.svg" />





# Class Si1145
Represents a SiLabs Proximity, UV, and ambient light sensor

###### **Assembly**: Si1145.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Si1145/Driver/Si1145.Registers.cs#L3)
```csharp title="Declaration"
public class Si1145 : ByteCommsSensorBase<(Illuminance? VisibleLight, double? UltravioletIndex, Illuminance? Infrared)>, IObservable<IChangeResult<(Illuminance? VisibleLight, double? UltravioletIndex, Illuminance? Infrared)>>, ISamplingSensor<(Illuminance? VisibleLight, double? UltravioletIndex, Illuminance? Infrared)>, ISensor<(Illuminance? VisibleLight, double? UltravioletIndex, Illuminance? Infrared)>, ISensor, ISamplingSensor, IDisposable, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../ByteCommsSensorBase`UNIT`)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Illuminance>,System.Nullable<System.Double>,System.Nullable<Meadow.Units.Illuminance>>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Illuminance>,System.Nullable<System.Double>,System.Nullable<Meadow.Units.Illuminance>>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Illuminance>,System.Nullable<System.Double>,System.Nullable<Meadow.Units.Illuminance>>>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`, `Meadow.Hardware.II2cPeripheral`

## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Si1145/Driver/Si1145.cs#L19)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Methods
### ReadSensor()
Read data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Si1145/Driver/Si1145.cs#L38)
```csharp title="Declaration"
protected override Task<(Illuminance? VisibleLight, double? UltravioletIndex, Illuminance? Infrared)> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<System.Nullable<Meadow.Units.Illuminance>,System.Nullable<System.Double>,System.Nullable<Meadow.Units.Illuminance>>>`: Returns visible, ultraviolet index and infrared data
## Implements

* `System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Illuminance>,System.Nullable<System.Double>,System.Nullable<Meadow.Units.Illuminance>>>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Illuminance>,System.Nullable<System.Double>,System.Nullable<Meadow.Units.Illuminance>>>`
* `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Illuminance>,System.Nullable<System.Double>,System.Nullable<Meadow.Units.Illuminance>>>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `System.IDisposable`
* `Meadow.Hardware.II2cPeripheral`
