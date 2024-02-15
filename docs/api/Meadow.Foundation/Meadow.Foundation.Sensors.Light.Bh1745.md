---
uid: Meadow.Foundation.Sensors.Light.Bh1745
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Bh1745
---

| Bh1745 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Light.Bh1745/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Light.Bh1745.svg?label=Meadow.Foundation.Sensors.Light.Bh1745" alt="NuGet Gallery for Meadow.Foundation.Sensors.Light.Bh1745" /></a> |

The BH1745 is a RGB color and luminance sensor that communicates over I2C.

### Code Example

```csharp
Bh1745 sensor;
RgbPwmLed rgbLed;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    sensor = new Bh1745(Device.CreateI2cBus());

    // instantiate our onboard LED that we'll show the color with
    rgbLed = new RgbPwmLed(
        Device.Pins.OnboardLedRed,
        Device.Pins.OnboardLedGreen,
        Device.Pins.OnboardLedBlue,
        commonType: CommonType.CommonAnode);

    // Example that uses an IObservable subscription to only be notified
    var consumer = Bh1745.CreateObserver(
        handler: result => Resolver.Log.Info($"Observer: filter satisfied: {result.New.AmbientLight?.Lux:N2}Lux, old: {result.Old?.AmbientLight?.Lux:N2}Lux"),

        // only notify if the visible light changes by 100 lux (put your hand over the sensor to trigger)
        filter: result =>
        {
            if (result.Old is { } old)
            {
                // returns true if > 100lux change
                return ((result.New.AmbientLight.Value - old.AmbientLight.Value).Abs().Lux > 100);
            }
            return false;
        });

    sensor.Subscribe(consumer);

    //classical .NET events can also be used:
    sensor.Updated += (sender, result) =>
    {
        Resolver.Log.Info($"  Ambient Light: {result.New.AmbientLight?.Lux:N2}Lux");
        Resolver.Log.Info($"  Color: {result.New.Color}");

        if (result.New.Color is { } color)
        {
            rgbLed.SetColor(color);
        }
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    var result = await sensor.Read();

    Resolver.Log.Info("Initial Readings:");
    Resolver.Log.Info($" Visible Light: {result.AmbientLight?.Lux:N2}Lux");
    Resolver.Log.Info($" Color: {result.Color}");

    if (result.Color is { } color)
    {
        rgbLed.SetColor(color);
    }

    sensor.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745/Samples/Bh1745_Sample)

### Wiring Example

To wire a Bh1745 to your Meadow board, connect the following:

| Bh1745  | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| SCL     | D08 (SCL)   |
| SDA     | D07 (SDA)   |
| VCC     | 3V3         |

It should look like the following diagram:

<img src="/API_Assets/Meadow.Foundation.Sensors.Light.Bh1745/Bh1745_Frizzing.png"  />





# Class Bh1745
Represents a BH1745 Luminance and Color Sensor

###### **Assembly**: Bh1745.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745/Driver/Bh1745.Registers.cs#L3)
```csharp title="Declaration"
public class Bh1745 : ByteCommsSensorBase<(Illuminance? AmbientLight, Color? Color, bool Valid)>, IObservable<IChangeResult<(Illuminance? AmbientLight, Color? Color, bool Valid)>>, ISamplingSensor<(Illuminance? AmbientLight, Color? Color, bool Valid)>, ISensor<(Illuminance? AmbientLight, Color? Color, bool Valid)>, IDisposable, ILightSensor, ISamplingSensor<Illuminance>, ISensor<Illuminance>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../ByteCommsSensorBase`UNIT`)

**Implements:**  

<details><summary>Expand</summary>

`System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Color>,System.Boolean>>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Color>,System.Boolean>>`, `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Color>,System.Boolean>>`, `System.IDisposable`, `Meadow.Peripherals.Sensors.Light.ILightSensor`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Illuminance>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Illuminance>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`
</details>



## Properties
### Illuminance
The current Illuminance value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745/Driver/Bh1745.cs#L28)
```csharp title="Declaration"
public Illuminance? Illuminance { get; }
```
### InterruptReset
Interrupt reset status
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745/Driver/Bh1745.cs#L33)
```csharp title="Declaration"
public Bh1745.InterruptStatus InterruptReset { get; set; }
```
### MeasurementTime
Gets or sets the currently set measurement time
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745/Driver/Bh1745.cs#L56)
```csharp title="Declaration"
public Bh1745.MeasurementTimeType MeasurementTime { get; set; }
```
### IsMeasurementActive
Is the sensor actively measuring
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745/Driver/Bh1745.cs#L77)
```csharp title="Declaration"
public bool IsMeasurementActive { get; set; }
```
### AdcGain
Gets or sets the ADC gain of the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745/Driver/Bh1745.cs#L94)
```csharp title="Declaration"
public Bh1745.AdcGainTypes AdcGain { get; set; }
```
### InterruptSignalIsActive
Is the interrupt active
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745/Driver/Bh1745.cs#L115)
```csharp title="Declaration"
public bool InterruptSignalIsActive { get; }
```
### LatchBehavior
Gets or sets how the interrupt pin latches
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745/Driver/Bh1745.cs#L128)
```csharp title="Declaration"
public Bh1745.LatchBehaviorTypes LatchBehavior { get; set; }
```
### InterruptSource
Gets or sets the source channel that triggers the interrupt
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745/Driver/Bh1745.cs#L149)
```csharp title="Declaration"
public Bh1745.InterruptChannels InterruptSource { get; set; }
```
### InterruptIsEnabled
Gets or sets whether the interrupt pin is enabled
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745/Driver/Bh1745.cs#L167)
```csharp title="Declaration"
public bool InterruptIsEnabled { get; set; }
```
### InterruptPersistence
Gets or sets the persistence function of the interrupt
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745/Driver/Bh1745.cs#L184)
```csharp title="Declaration"
public Bh1745.InterruptTypes InterruptPersistence { get; set; }
```
### LowerInterruptThreshold
Gets or sets the lower interrupt threshold
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745/Driver/Bh1745.cs#L205)
```csharp title="Declaration"
public ushort LowerInterruptThreshold { get; set; }
```
### UpperInterruptThreshold
Gets or sets the upper interrupt threshold
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745/Driver/Bh1745.cs#L220)
```csharp title="Declaration"
public ushort UpperInterruptThreshold { get; set; }
```
### CompensationMultipliers
Gets or sets the channel compensation multipliers which are used to scale the channel measurements
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745/Driver/Bh1745.cs#L235)
```csharp title="Declaration"
public Bh1745.ChannelMultipliers CompensationMultipliers { get; set; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745/Driver/Bh1745.cs#L240)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Methods
### ReadSensor()
Reads data from the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745/Driver/Bh1745.cs#L263)
```csharp title="Declaration"
protected override Task<(Illuminance? AmbientLight, Color? Color, bool Valid)> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Color>,System.Boolean>>`: The latest sensor reading### RaiseEventsAndNotify(IChangeResult&lt;(Illuminance? AmbientLight, Color? Color, bool Valid)&gt;)
Raise events for subscribers and notify of value changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745/Driver/Bh1745.cs#L296)
```csharp title="Declaration"
protected override void RaiseEventsAndNotify(IChangeResult<(Illuminance? AmbientLight, Color? Color, bool Valid)> changeResult)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Color>,System.Boolean>>` | *changeResult* | The updated sensor data |

### Reset()
Resets the device to the default configuration
On reset the sensor goes to power down mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745/Driver/Bh1745.cs#L309)
```csharp title="Declaration"
protected void Reset()
```
### ReadMeasurementIsValid()
Reads whether the last measurement is valid
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745/Driver/Bh1745.cs#L339)
```csharp title="Declaration"
protected bool ReadMeasurementIsValid()
```

##### Returns

`System.Boolean`
### ReadRedDataRegister()
Reads the red data register of the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745/Driver/Bh1745.cs#L350)
```csharp title="Declaration"
protected ushort ReadRedDataRegister()
```

##### Returns

`System.UInt16`
### ReadGreenDataRegister()
Reads the green data register of the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745/Driver/Bh1745.cs#L356)
```csharp title="Declaration"
protected ushort ReadGreenDataRegister()
```

##### Returns

`System.UInt16`
### ReadBlueDataRegister()
Reads the blue data register of the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745/Driver/Bh1745.cs#L362)
```csharp title="Declaration"
protected ushort ReadBlueDataRegister()
```

##### Returns

`System.UInt16`
### ReadClearDataRegister()
Reads the clear data register of the sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Bh1745/Driver/Bh1745.cs#L368)
```csharp title="Declaration"
protected ushort ReadClearDataRegister()
```

##### Returns

`System.UInt16`

## Implements

* `System.IObservable<Meadow.IChangeResult<System.ValueTuple<System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Color>,System.Boolean>>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<System.ValueTuple<System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Color>,System.Boolean>>`
* `Meadow.Peripherals.Sensors.ISensor<System.ValueTuple<System.Nullable<Meadow.Units.Illuminance>,System.Nullable<Meadow.Color>,System.Boolean>>`
* `System.IDisposable`
* `Meadow.Peripherals.Sensors.Light.ILightSensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Illuminance>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Illuminance>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
