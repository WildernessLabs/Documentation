---
layout: Meadow
title: Analog I/O
subtitle: Reading and writing non-binary voltages via the Analog-to-Digital Converter (ADC), and Digital-to-Analog Converter (DAC).
---

# Intro

In modern digital electronics, we often deal with finite states of `HIGH` or `LOW`, which represent digital `1`/`0`, or `On`/`Off`, respectively. However, there are many sensors or other integrations that communicate not in binary, but in a range of voltages. For instance, a [TMP35 analog temp sensor](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.AnalogTemperature.html) might output `0V` when it's reading an ambient temperature of `0ºC`, `1.6V` @ `50ºC`, and `3.3V` @ `100ºC`.

Analog ports are specifically design for this scenario, and are able to operate throughout a specified range of voltages, in both an input (reading) and output (writing) capacity. 

On the Meadow F7 Micro, Analog signals are written or read with a 12-bit resolution, which means that they can have 4,096 steps of resolution.

Meadow has the capabilities to both read and write analog signals, but presently only the input/read functionality is exposed via API.

## Analog Input

Analog input is converted to a digital value via the onboard _Analog to Digital Converter_ (ADC), which is accessed via an [`AnalogInputPort`](/docs/api/Meadow/Meadow.Hardware.AnalogInputPort.html), and created from an `IIODevice`:

```csharp
IAnalogInputPort analogIn = Device.CreateAnalogInputPort(Device.Pins.A02);
```

From there, the voltage can be read via the [`Read()` method](/docs/api/Meadow/Meadow.Hardware.AnalogInputPort.html#Meadow_Hardware_AnalogInputPort_Read_System_Int32_System_Int32_):

```csharp
float voltage = analogIn.Read();
```

**NOTE:** Only analog pins `A0` through `A3` are currently configured. `A4` and `A5` will not currently work.

### Events and IObservable API

As with other input APIs, the Analog input APIs support both events and the `IObservable` pattern, for advanced notification filtering. For more information, see the [Events and IObservable guide](/Meadow/Meadow_Basics/Events_and_IObservable/).

### Input Voltage Tolerance

It's important to note that unlike the digital inputs (which are `5V` tolerant), the analog inputs on the F7 Micro are only `3.3V` tolerant, meaning any input signals above `3.3V` may damage the chip. If you expect input signals to exceed `3.3V`, there are two ways to protect the input.

If your sensor regularly operates at a higher voltage range, for instance, if it's a `5V` sensor, a two resistor [_voltage divider_](/Hardware/Tutorials/Electronics/Part5/Level_Shifting_Lab/) should be used to "divide" the voltage down from `5V` to `3.3V`.

For occasional voltage spikes that can be ignored, the input should be protected with a [Zener diode](/Hardware/Tutorials/Electronics/Part6/General_Diodes) and a [resistor](/Hardware/Tutorials/Electronics/Part4/Resistance/) as illustrated in this [tutorial](https://www.electroniclinic.com/input-overvoltage-protection-for-arduino-inputs-using-a-zener-diode/).

## Analog Output

Analog output can be generated via the _Digital to Analog Converter_ (DAC) on the Meadow device. This feature is not currently exposed, and these docs will be updated when we ship it.