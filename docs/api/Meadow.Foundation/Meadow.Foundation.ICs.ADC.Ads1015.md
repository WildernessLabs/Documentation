---
uid: Meadow.Foundation.ICs.ADC.Ads1015
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.ADC.Ads1015
---

| Ads1015 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.ADC.Ads1x15) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.ADC.Ads1x15/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.ADC.Ads1x15/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.ADC.Ads1x15.svg?label=Meadow.Foundation.ICs.ADC.Ads1x15" alt="NuGet Gallery for Meadow.Foundation.ICs.ADC.Ads1x15" /></a> |

### Code Example

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.ADC.Ads1x15/Samples/Ads1015_Sample)

### Wiring Example

To wire a Ads1015 to your Meadow board, connect the following:

| Ads1015  | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |

# Class Ads1015
Represents a ADS1015 12-bit, 3.3-kSPS, 4-channel, delta-sigma analog-to-digital converter with PGA, oscillator, VREF, comparator

###### **Assembly**: Ads1x15.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.ADC.Ads1x15/Driver/Drivers/Ads1015.cs#L8)
```csharp title="Declaration"
public class Ads1015 : Ads1x15Base, IObservable<IChangeResult<Voltage>>, ISamplingSensor<Voltage>, ISensor<Voltage>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Ads1x15Base)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Voltage>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Voltage>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Voltage>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`

## Properties
### BitResolution
Sample rate resolution
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.ADC.Ads1x15/Driver/Drivers/Ads1015.cs#L48)
```csharp title="Declaration"
protected override int BitResolution { get; }
```
### ReadShiftBits
Bits to shift for reads
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.ADC.Ads1x15/Driver/Drivers/Ads1015.cs#L53)
```csharp title="Declaration"
protected override int ReadShiftBits { get; }
```
### SampleRate
Sample rate setting
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.ADC.Ads1x15/Driver/Drivers/Ads1015.cs#L58)
```csharp title="Declaration"
public Ads1015.SampleRateSetting SampleRate { get; set; }
```

## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Voltage>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Voltage>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Voltage>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
