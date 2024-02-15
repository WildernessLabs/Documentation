---
uid: Meadow.Foundation.ICs.ADC.Ads1115
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.ADC.Ads1115
---

| Ads1115 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.ADC.Ads1x15) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.ADC.Ads1x15/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.ADC.Ads1x15/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.ADC.Ads1x15.svg?label=Meadow.Foundation.ICs.ADC.Ads1x15" alt="NuGet Gallery for Meadow.Foundation.ICs.ADC.Ads1x15" /></a> |

### Code Example

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ht16k33/Samples/Ads1115_Sample)

### Wiring Example

To wire a Ads1115 to your Meadow board, connect the following:

| Ads1115  | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |

# Class Ads1115
Represents an ADS1115 16-bit, 860-SPS, 4-channel, delta-sigma analog-to-digital converter with PGA, oscillator, VREF, comparator

###### **Assembly**: Ads1x15.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.ADC.Ads1x15/Driver/Drivers/Ads1115.cs#L8)
```csharp title="Declaration"
public class Ads1115 : Ads1x15Base, IObservable<IChangeResult<Voltage>>, ISamplingSensor<Voltage>, ISensor<Voltage>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Ads1x15Base)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Voltage>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Voltage>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Voltage>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`

## Properties
### BitResolution
Sample resolution
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.ADC.Ads1x15/Driver/Drivers/Ads1115.cs#L52)
```csharp title="Declaration"
protected override int BitResolution { get; }
```
### SampleRate
Sample rate setting
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.ADC.Ads1x15/Driver/Drivers/Ads1115.cs#L57)
```csharp title="Declaration"
public Ads1115.SampleRateSetting SampleRate { get; set; }
```

## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Voltage>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Voltage>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Voltage>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
