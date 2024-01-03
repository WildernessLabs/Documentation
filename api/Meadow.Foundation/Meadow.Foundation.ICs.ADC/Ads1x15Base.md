---
title: Class Ads1x15Base
sidebar_label: Ads1x15Base
description: "Base class for the Ads1x15 family of analog-to-digital (ADC) converters"
---
# Class Ads1x15Base
Base class for the Ads1x15 family of analog-to-digital (ADC) converters

###### **Assembly**: Ads1x15.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADC.Ads1x15/Driver/Ads1x15Base.Enums.cs#L3)
```csharp title="Declaration"
public abstract class Ads1x15Base : PollingSensorBase<Voltage>, IObservable<IChangeResult<Voltage>>, ISamplingSensor<Voltage>, ISensor<Voltage>, ISensor, ISamplingSensor, II2cPeripheral
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ObservableBase&lt;UNIT&gt;](../Meadow.Foundation/ObservableBase`UNIT`) -> [Meadow.Foundation.SamplingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/SamplingSensorBase`UNIT`) -> [Meadow.Foundation.PollingSensorBase&lt;UNIT&gt;](../Meadow.Foundation/PollingSensorBase`UNIT`)

**Derived:**  
[Meadow.Foundation.ICs.ADC.Ads1015](../Meadow.Foundation.ICs.ADC/Ads1015), [Meadow.Foundation.ICs.ADC.Ads1115](../Meadow.Foundation.ICs.ADC/Ads1115)

**Implements:**  
`System.IObservable<Meadow.IChangeResult<Meadow.Units.Voltage>>`, `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Voltage>`, `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Voltage>`, `Meadow.Peripherals.Sensors.ISensor`, `Meadow.Peripherals.Sensors.ISamplingSensor`, `Meadow.Hardware.II2cPeripheral`

## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADC.Ads1x15/Driver/Ads1x15Base.cs#L15)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### BitResolution
Resolution of the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADC.Ads1x15/Driver/Ads1x15Base.cs#L33)
```csharp title="Declaration"
protected abstract int BitResolution { get; }
```
### ReadShiftBits
Shift required for the conversion register (see Data Sheet for details)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADC.Ads1x15/Driver/Ads1x15Base.cs#L37)
```csharp title="Declaration"
protected virtual int ReadShiftBits { get; }
```
### InternalSampleRate
Get or set the internal sample rate
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADC.Ads1x15/Driver/Ads1x15Base.cs#L89)
```csharp title="Declaration"
protected int InternalSampleRate { get; set; }
```
### Channel
Gets or sets the ADC Channel settings (e.g. Single-Ended or Differential)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADC.Ads1x15/Driver/Ads1x15Base.cs#L107)
```csharp title="Declaration"
public Ads1x15Base.ChannelSetting Channel { get; set; }
```
### Gain
Gets or sets the ADC Amplifier Gain
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADC.Ads1x15/Driver/Ads1x15Base.cs#L124)
```csharp title="Declaration"
public Ads1x15Base.FsrGain Gain { get; set; }
```
### Mode
Sets or gets the Measurement Mode
One-shot uses less power but is slower
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADC.Ads1x15/Driver/Ads1x15Base.cs#L142)
```csharp title="Declaration"
public Ads1x15Base.MeasureMode Mode { get; set; }
```
## Fields
### i2cComms
I2C Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADC.Ads1x15/Driver/Ads1x15Base.cs#L20)
```csharp title="Declaration"
protected readonly II2cCommunications i2cComms
```
## Methods
### ReadSensor()
Reads the last ADC Conversion as a Voltage based on current Gain settings
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADC.Ads1x15/Driver/Ads1x15Base.cs#L167)
```csharp title="Declaration"
protected override Task<Voltage> ReadSensor()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Voltage>`: The voltage### ReadRaw()
Returns the last raw ADC conversion value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.ADC.Ads1x15/Driver/Ads1x15Base.cs#L200)
```csharp title="Declaration"
public Task<int> ReadRaw()
```

##### Returns

`System.Threading.Tasks.Task<System.Int32>`

## Implements

* `System.IObservable<Meadow.IChangeResult<Meadow.Units.Voltage>>`
* `Meadow.Peripherals.Sensors.ISamplingSensor<Meadow.Units.Voltage>`
* `Meadow.Peripherals.Sensors.ISensor<Meadow.Units.Voltage>`
* `Meadow.Peripherals.Sensors.ISensor`
* `Meadow.Peripherals.Sensors.ISamplingSensor`
* `Meadow.Hardware.II2cPeripheral`
