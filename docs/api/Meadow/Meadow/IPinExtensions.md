---
title: Class IPinExtensions
sidebar_label: IPinExtensions
description: Extension methods for the IPin interface
slug: /docs/api/Meadow/Meadow/IPinExtensions
---
# Class IPinExtensions
Extension methods for the IPin interface

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IPinExtensions.cs#L11)
```csharp title="Declaration"
public static class IPinExtensions
```
## Methods
### Supports&lt;TChannel&gt;(IPin)
Checks if the pin supports the specified channel type.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IPinExtensions.cs#L20)
```csharp title="Declaration"
public static bool Supports<TChannel>(this IPin pin) where TChannel : IChannelInfo
```

##### Returns

`System.Boolean`: True if the pin supports the specified channel type; otherwise, false.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin to check. |

##### Type Parameters
| Name | Description |
|:--- |:--- |
| `TChannel` | The type of channel to check for. |
### Supports&lt;TChannel&gt;(IPin, Func&lt;TChannel, bool&gt;)
Checks if the pin supports the specified channel type based on a condition.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IPinExtensions.cs#L35)
```csharp title="Declaration"
public static bool Supports<TChannel>(this IPin pin, Func<TChannel, bool> where) where TChannel : IChannelInfo
```

##### Returns

`System.Boolean`: True if the pin supports the specified channel type based on the condition; otherwise, false.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin to check. |
| `System.Func<<TChannel>,System.Boolean>` | *where* | The condition to apply. |

##### Type Parameters
| Name | Description |
|:--- |:--- |
| `TChannel` | The type of channel to check for. |
### CreateDigitalOutputPort(IPin, bool)
Creates a digital output port for the specified pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IPinExtensions.cs#L48)
```csharp title="Declaration"
public static IDigitalOutputPort CreateDigitalOutputPort(this IPin pin, bool initialState = false)
```

##### Returns

[Meadow.Hardware.IDigitalOutputPort](../Meadow.Hardware/IDigitalOutputPort): The created digital output port.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin to create a digital output port for. |
| `System.Boolean` | *initialState* | The initial state of the digital output port (default is false). |

### CreateDigitalSignalAnalyzer(IPin, bool)
Creates a digital signal analyzer for the specified pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IPinExtensions.cs#L64)
```csharp title="Declaration"
public static IDigitalSignalAnalyzer CreateDigitalSignalAnalyzer(this IPin pin, bool captureDutyCycle)
```

##### Returns

[Meadow.Hardware.IDigitalSignalAnalyzer](../Meadow.Hardware/IDigitalSignalAnalyzer): The created digital signal analyzer.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin to create a digital signal analyzer for. |
| `System.Boolean` | *captureDutyCycle* | Whether or not to capture duty cycle. Not capturing it is more efficient and allows faster frequency capture |

### CreateDigitalInterruptPort(IPin, InterruptMode, ResistorMode, TimeSpan, TimeSpan)
Creates a digital interrupt port for the specified pin with specified configurations.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IPinExtensions.cs#L83)
```csharp title="Declaration"
public static IDigitalInterruptPort CreateDigitalInterruptPort(this IPin pin, InterruptMode interruptMode, ResistorMode resistorMode, TimeSpan debounceDuration, TimeSpan glitchDuration)
```

##### Returns

[Meadow.Hardware.IDigitalInterruptPort](../Meadow.Hardware/IDigitalInterruptPort): The created digital interrupt port.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin to create a digital interrupt port for. |
| [Meadow.Hardware.InterruptMode](../Meadow.Hardware/InterruptMode) | *interruptMode* | The interrupt mode for the digital interrupt port. |
| [Meadow.Hardware.ResistorMode](../Meadow.Hardware/ResistorMode) | *resistorMode* | The resistor mode for the digital interrupt port. |
| `System.TimeSpan` | *debounceDuration* | The debounce duration for the digital interrupt port. |
| `System.TimeSpan` | *glitchDuration* | The glitch duration for the digital interrupt port. |

### CreateDigitalInterruptPort(IPin, InterruptMode, ResistorMode, TimeSpan)
Creates a digital interrupt port for the specified pin with specified configurations.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IPinExtensions.cs#L101)
```csharp title="Declaration"
public static IDigitalInterruptPort CreateDigitalInterruptPort(this IPin pin, InterruptMode interruptMode, ResistorMode resistorMode, TimeSpan debounceDuration)
```

##### Returns

[Meadow.Hardware.IDigitalInterruptPort](../Meadow.Hardware/IDigitalInterruptPort): The created digital interrupt port.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin to create a digital interrupt port for. |
| [Meadow.Hardware.InterruptMode](../Meadow.Hardware/InterruptMode) | *interruptMode* | The interrupt mode for the digital interrupt port. |
| [Meadow.Hardware.ResistorMode](../Meadow.Hardware/ResistorMode) | *resistorMode* | The resistor mode for the digital interrupt port. |
| `System.TimeSpan` | *debounceDuration* | The debounce duration for the digital interrupt port. |

### CreateDigitalInputPort(IPin, ResistorMode)
Creates a digital input port for the specified pin with the specified resistor mode.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IPinExtensions.cs#L112)
```csharp title="Declaration"
public static IDigitalInputPort CreateDigitalInputPort(this IPin pin, ResistorMode resistorMode = ResistorMode.Disabled)
```

##### Returns

[Meadow.Hardware.IDigitalInputPort](../Meadow.Hardware/IDigitalInputPort): The created digital input port.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin to create a digital input port for. |
| [Meadow.Hardware.ResistorMode](../Meadow.Hardware/ResistorMode) | *resistorMode* | The resistor mode for the digital input port (default is ResistorMode.Disabled). |

### CreateDigitalInterruptPort(IPin, InterruptMode, ResistorMode)
Creates a digital interrupt port for the specified pin with the specified configurations.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IPinExtensions.cs#L129)
```csharp title="Declaration"
public static IDigitalInterruptPort CreateDigitalInterruptPort(this IPin pin, InterruptMode interruptMode, ResistorMode resistorMode = ResistorMode.Disabled)
```

##### Returns

[Meadow.Hardware.IDigitalInterruptPort](../Meadow.Hardware/IDigitalInterruptPort): The created digital interrupt port.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin to create a digital interrupt port for. |
| [Meadow.Hardware.InterruptMode](../Meadow.Hardware/InterruptMode) | *interruptMode* | The interrupt mode for the digital interrupt port. |
| [Meadow.Hardware.ResistorMode](../Meadow.Hardware/ResistorMode) | *resistorMode* | The resistor mode for the digital interrupt port (default is ResistorMode.Disabled). |

### CreateAnalogInputPort(IPin, int, TimeSpan, Voltage)
Creates an analog input port for the specified pin with the given sample count, sample interval, and reference voltage.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IPinExtensions.cs#L147)
```csharp title="Declaration"
public static IObservableAnalogInputPort CreateAnalogInputPort(this IPin pin, int sampleCount, TimeSpan sampleInterval, Voltage referenceVoltage)
```

##### Returns

[Meadow.Hardware.IObservableAnalogInputPort](../Meadow.Hardware/IObservableAnalogInputPort): The created analog input port.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin to create an analog input port for. |
| `System.Int32` | *sampleCount* | The number of samples to take during each reading. |
| `System.TimeSpan` | *sampleInterval* | The interval between each sample. |
| [Meadow.Units.Voltage](../Meadow.Units/Voltage) | *referenceVoltage* | The reference voltage for the analog input port. |

### CreateAnalogInputPort(IPin, int)
Creates an analog input port for the specified pin with the default sample count and default settings.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IPinExtensions.cs#L163)
```csharp title="Declaration"
public static IObservableAnalogInputPort CreateAnalogInputPort(this IPin pin, int sampleCount = 5)
```

##### Returns

[Meadow.Hardware.IObservableAnalogInputPort](../Meadow.Hardware/IObservableAnalogInputPort): The created analog input port.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin to create an analog input port for. |
| `System.Int32` | *sampleCount* | The number of samples to take during each reading (default is 5). |

### CreateAnalogOutputPort(IPin)
Creates an analog output port for the specified pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IPinExtensions.cs#L178)
```csharp title="Declaration"
public static IAnalogOutputPort CreateAnalogOutputPort(this IPin pin)
```

##### Returns

[Meadow.Hardware.IAnalogOutputPort](../Meadow.Hardware/IAnalogOutputPort): The created analog output port.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin to create an analog output port for. |

### CreatePwmPort(IPin, Frequency, float, bool)
Creates a PWM (Pulse Width Modulation) port for the specified pin with the given frequency, duty cycle, and inversion setting.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IPinExtensions.cs#L196)
```csharp title="Declaration"
public static IPwmPort CreatePwmPort(this IPin pin, Frequency frequency, float dutyCycle = 0.5, bool invert = false)
```

##### Returns

[Meadow.Hardware.IPwmPort](../Meadow.Hardware/IPwmPort): The created PWM port.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin to create a PWM port for. |
| [Meadow.Units.Frequency](../Meadow.Units/Frequency) | *frequency* | The frequency of the PWM signal. |
| `System.Single` | *dutyCycle* | The duty cycle of the PWM signal (default is 0.5). |
| `System.Boolean` | *invert* | Whether to invert the PWM signal (default is false). |

### CreateBiDirectionalPort(IPin, bool, InterruptMode, ResistorMode, PortDirectionType, TimeSpan, TimeSpan)
Creates a bidirectional interrupt port for the specified pin with the specified initial state, interrupt mode, resistor mode, initial direction, debounce duration, and glitch duration.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IPinExtensions.cs#L217)
```csharp title="Declaration"
public static IBiDirectionalInterruptPort CreateBiDirectionalPort(this IPin pin, bool initialState, InterruptMode interruptMode, ResistorMode resistorMode, PortDirectionType initialDirection, TimeSpan debounceDuration, TimeSpan glitchDuration)
```

##### Returns

[Meadow.Hardware.IBiDirectionalInterruptPort](../Meadow.Hardware/IBiDirectionalInterruptPort): The created bidirectional interrupt port.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin to create a bidirectional interrupt port for. |
| `System.Boolean` | *initialState* | The initial state of the port. |
| [Meadow.Hardware.InterruptMode](../Meadow.Hardware/InterruptMode) | *interruptMode* | The interrupt mode for the port. |
| [Meadow.Hardware.ResistorMode](../Meadow.Hardware/ResistorMode) | *resistorMode* | The resistor mode for the port. |
| [Meadow.Hardware.PortDirectionType](../Meadow.Hardware/PortDirectionType) | *initialDirection* | The initial direction of the port. |
| `System.TimeSpan` | *debounceDuration* | The debounce duration for the port. |
| `System.TimeSpan` | *glitchDuration* | The glitch duration for the port. |

### CreateBiDirectionalPort(IPin, bool, InterruptMode, ResistorMode, PortDirectionType)
Creates a bidirectional interrupt port for the specified pin with default settings.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IPinExtensions.cs#L236)
```csharp title="Declaration"
public static IBiDirectionalInterruptPort CreateBiDirectionalPort(this IPin pin, bool initialState = false, InterruptMode interruptMode = InterruptMode.None, ResistorMode resistorMode = ResistorMode.Disabled, PortDirectionType initialDirection = PortDirectionType.Input)
```

##### Returns

[Meadow.Hardware.IBiDirectionalInterruptPort](../Meadow.Hardware/IBiDirectionalInterruptPort): The created bidirectional interrupt port.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The pin to create a bidirectional interrupt port for. |
| `System.Boolean` | *initialState* | The initial state of the port (default is false). |
| [Meadow.Hardware.InterruptMode](../Meadow.Hardware/InterruptMode) | *interruptMode* | The interrupt mode for the port (default is InterruptMode.None). |
| [Meadow.Hardware.ResistorMode](../Meadow.Hardware/ResistorMode) | *resistorMode* | The resistor mode for the port (default is ResistorMode.Disabled). |
| [Meadow.Hardware.PortDirectionType](../Meadow.Hardware/PortDirectionType) | *initialDirection* | The initial direction of the port (default is PortDirectionType.Input). |

