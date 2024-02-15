---
uid: Meadow.Foundation.Sensors.Light.Tsl2591
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Tsl2591
---

| Tsl2591 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Tsl2591) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Tsl2591/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Light.Tsl2591/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Light.Tsl2591.svg?label=Meadow.Foundation.Sensors.Light.Tsl2591" alt="NuGet Gallery for Meadow.Foundation.Sensors.Light.Tsl2591" /></a> |

### Code Example

```csharp
private Tsl2591 sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    // configure our sensor on the I2C Bus
    var i2c = Device.CreateI2cBus();
    sensor = new Tsl2591(i2c);

    // Example that uses an IObservable subscription to only be notified when the filter is satisfied
    var consumer = Tsl2591.CreateObserver(
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
        Resolver.Log.Info($"  Integrated Light: {result.New.Lux:N2}Lux");
    };

    sensor.InfraredUpdated += (sender, result) =>
    {
        Resolver.Log.Info($"  Infrared Light: {result.New.Lux:N2}Lux");
    };

    sensor.VisibleLightUpdated += (sender, result) =>
    {
        Resolver.Log.Info($"  Visible Light: {result.New.Lux:N2}Lux");
    };

    sensor.FullSpectrumUpdated += (sender, result) =>
    {
        Resolver.Log.Info($"  Full Spectrum Light: {result.New.Lux:N2}Lux");
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    var result = await sensor.Read();
    Resolver.Log.Info("Initial Readings:");
    Resolver.Log.Info($"  Full Spectrum Light: {result.FullSpectrum?.Lux:N2}Lux");
    Resolver.Log.Info($"  Infrared Light: {result.Infrared?.Lux:N2}Lux");
    Resolver.Log.Info($"  Visible Light: {result.VisibleLight?.Lux:N2}Lux");
    Resolver.Log.Info($"  Integrated Light: {result.Integrated?.Lux:N2}Lux");

    sensor.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Tsl2591/Samples/Tsl2591_Sample)


# Class Tsl2591
Driver for the TSL2591 light-to-digital converter

###### **Assembly**: Tsl2591.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Tsl2591/Driver/Tsl2591.Enums.cs#L8)
```csharp title="Declaration"
public class Tsl2591 : ByteCommsSensorBase<(Illuminance? FullSpectrum, Illuminance? Infrared, Illuminance? VisibleLight, Illuminance? Integrated)>, IObservable<IChangeResult<(Illuminance? FullSpectrum, Illuminance? Infrared, Illuminance? VisibleLight, Illuminance? Integrated)>>, ISamplingSensor<(Illuminance? FullSpectrum, Illuminance? Infrared, Illuminance? VisibleLight, Illuminance? Integrated)>, ISensor<(Illuminance? FullSpectrum, Illuminance? Infrared, Illuminance? VisibleLight, Illuminance? Integrated)>, ILightSensor, ISamplingSensor<Illuminance>, ISensor<Illuminance>, ISensor, ISamplingSensor, IDisposable, IPowerControllablePeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../ByteCommsSensorBase`UNIT`)

**Implements:**  

<details><summary>Expand</summary>

`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Units.Illuminance>>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Units.Illuminance>>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Units.Illuminance>>>`, `Meadow.Peripherals.Sensors.Light.ILightSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Illuminance>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Illuminance>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `System.IDisposable`, `Meadow.IPowerControllablePeripheral`
</details>



## Properties
### PackageID
Sensor package ID
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Tsl2591/Driver/Tsl2591.cs#L43)
```csharp title="Declaration"
public int PackageID { get; }
```
### DeviceID
Sensor device ID
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Tsl2591/Driver/Tsl2591.cs#L48)
```csharp title="Declaration"
public int DeviceID { get; }
```
### Gain
Gain of the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Tsl2591/Driver/Tsl2591.cs#L53)
```csharp title="Declaration"
public Tsl2591.GainFactor Gain { get; set; }
```
### IntegrationTime
Integration time for the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Tsl2591/Driver/Tsl2591.cs#L68)
```csharp title="Declaration"
public Tsl2591.IntegrationTimes IntegrationTime { get; set; }
```
### FullSpectrumLuminosity
Full spectrum luminosity (visible and infrared light combined)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Tsl2591/Driver/Tsl2591.cs#L86)
```csharp title="Declaration"
public Illuminance? FullSpectrumLuminosity { get; }
```
### InfraredLuminosity
Infrared light luminosity
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Tsl2591/Driver/Tsl2591.cs#L91)
```csharp title="Declaration"
public Illuminance? InfraredLuminosity { get; }
```
### VisibleLightLuminosity
Visible light luminosity
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Tsl2591/Driver/Tsl2591.cs#L96)
```csharp title="Declaration"
public Illuminance? VisibleLightLuminosity { get; }
```
### Illuminance
Visible lux
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Tsl2591/Driver/Tsl2591.cs#L101)
```csharp title="Declaration"
public Illuminance? Illuminance { get; }
```
## Methods
### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Tsl2591/Driver/Tsl2591.cs#L121)
```csharp title="Declaration"
protected override Task<(Illuminance? FullSpectrum, Illuminance? Infrared, Illuminance? VisibleLight, Illuminance? Integrated)> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Units.Illuminance>>>`: The latest sensor reading### RaiseEventsAndNotify(IChangeResult&lt;(Illuminance? FullSpectrum, Illuminance? Infrared, Illuminance? VisibleLight, Illuminance? Integrated)&gt;)
Raise events for subscribers and notify of value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Tsl2591/Driver/Tsl2591.cs#L152)
```csharp title="Declaration"
protected override void RaiseEventsAndNotify(IChangeResult<(Illuminance? FullSpectrum, Illuminance? Infrared, Illuminance? VisibleLight, Illuminance? Integrated)> changeResult)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Units.Illuminance>>>` | *changeResult* | The updated sensor data |

### PowerOn()
Power the sensor on
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Tsl2591/Driver/Tsl2591.cs#L177)
```csharp title="Declaration"
public Task PowerOn()
```

##### Returns

`System.Threading.Tasks.Task`
### PowerOff()
Power the sensor off
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Tsl2591/Driver/Tsl2591.cs#L186)
```csharp title="Declaration"
public Task PowerOff()
```

##### Returns

`System.Threading.Tasks.Task`
## Events
### FullSpectrumUpdated
Raised when Full Spectrum Illuminance value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Tsl2591/Driver/Tsl2591.cs#L23)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Illuminance>> FullSpectrumUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Illuminance>>`
### InfraredUpdated
Raised when Infrared Illuminance value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Tsl2591/Driver/Tsl2591.cs#L28)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Illuminance>> InfraredUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Illuminance>>`
### VisibleLightUpdated
Raised when Visible Light value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Tsl2591/Driver/Tsl2591.cs#L33)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Illuminance>> VisibleLightUpdated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Illuminance>>`
### Updated
Raised when Luminosity value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Tsl2591/Driver/Tsl2591.cs#L38)
```csharp title="Declaration"
public event EventHandler<IChangeResult<Illuminance>> Updated
```
##### Event Type
`System.EventHandler<Meadow.IChangeResult<Meadow.Units.Illuminance>>`

## Implements

* `System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Units.Illuminance>>>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Units.Illuminance>>>`
* `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Units.Illuminance>>>`
* `Meadow.Peripherals.Sensors.Light.ILightSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Illuminance>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Illuminance>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `System.IDisposable`
* `Meadow.IPowerControllablePeripheral`
