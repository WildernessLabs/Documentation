---
title: Class SoftPwmPort
sidebar_label: SoftPwmPort
description: >-
  A Pulse Width Modulation Generator that can generates waveforms in software.
  The maximum Frequency is about 100 Hz.
slug: /docs/api/Meadow/Meadow.Hardware/SoftPwmPort
---
# Class SoftPwmPort
A Pulse Width Modulation Generator that can
generates waveforms in software. The maximum
Frequency is about 100 Hz.

###### **Assembly**: Meadow.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/SoftPwmPort.cs#L11)
```csharp title="Declaration"
public class SoftPwmPort : IPwmPort, IDigitalPort, IPort<IDigitalChannelInfo>, IDisposable
```
**Implements:**  
[Meadow.Hardware.IPwmPort](../Meadow.Hardware/IPwmPort), [Meadow.Hardware.IDigitalPort](../Meadow.Hardware/IDigitalPort), [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`), `System.IDisposable`

## Properties
### Port
Digital output port used for PWM
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/SoftPwmPort.cs#L16)
```csharp title="Declaration"
protected IDigitalOutputPort Port { get; set; }
```
### Duration
PWM duration in ms
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/SoftPwmPort.cs#L21)
```csharp title="Declaration"
public TimePeriod Duration { get; set; }
```
### Period
Period of PWM
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/SoftPwmPort.cs#L30)
```csharp title="Declaration"
public TimePeriod Period { get; set; }
```
### Inverted
Is the PWM signal inverted
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/SoftPwmPort.cs#L39)
```csharp title="Declaration"
public bool Inverted { get; set; }
```
### DutyCycle
Duty cycle of PWM
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/SoftPwmPort.cs#L45)
```csharp title="Declaration"
public double DutyCycle { get; set; }
```
### Frequency
Frequency of soft PWM
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/SoftPwmPort.cs#L61)
```csharp title="Declaration"
public Frequency Frequency { get; set; }
```
### Channel
Channel info for PWM port
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/SoftPwmPort.cs#L77)
```csharp title="Declaration"
public IPwmChannelInfo Channel { get; protected set; }
```
### State
State of PWM port (running / not running)
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/SoftPwmPort.cs#L82)
```csharp title="Declaration"
public bool State { get; }
```
### Pin
Pin used for soft PWM
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/SoftPwmPort.cs#L87)
```csharp title="Declaration"
public IPin Pin { get; }
```
## Methods
### Start()
Start the pulse width modulation
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/SoftPwmPort.cs#L125)
```csharp title="Declaration"
public void Start()
```
### Stop()
Stop the pulse width modulation
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/SoftPwmPort.cs#L146)
```csharp title="Declaration"
public void Stop()
```
### CalculateOnTimeMillis()
Calculates the pulse on time in milliseconds
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/SoftPwmPort.cs#L159)
```csharp title="Declaration"
protected int CalculateOnTimeMillis()
```

##### Returns

`System.Int32`
### CalculateOffTimeMillis()
Calculates the off time of pulse in milliseconds
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/SoftPwmPort.cs#L173)
```csharp title="Declaration"
protected int CalculateOffTimeMillis()
```

##### Returns

`System.Int32`
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/SoftPwmPort.cs#L189)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Core.git/blob/develop/source/Meadow.Core/Hardware/SoftPwmPort.cs#L202)
```csharp title="Declaration"
public void Dispose()
```

## Implements

* [Meadow.Hardware.IPwmPort](../Meadow.Hardware/IPwmPort)
* [Meadow.Hardware.IDigitalPort](../Meadow.Hardware/IDigitalPort)
* [Meadow.Hardware.IPort&lt;C&gt;](../Meadow.Hardware/IPort`C`)
* `System.IDisposable`
