---
title: Class Keyboard
sidebar_label: Keyboard
description: Encapsulates a standard 108-key keyboard as a Meadow IO Extender
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid/Keyboard
---
# Class Keyboard
Encapsulates a standard 108-key keyboard as a Meadow IO Extender

###### **Assembly**: Meadow.Keyboard.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.Windows.cs#L8)
```csharp title="Declaration"
public class Keyboard : IDigitalInterruptController, IDigitalOutputController, IPinController, IDisposable
```
**Implements:**  
`Meadow.Hardware.IDigitalInterruptController`, `Meadow.Hardware.IDigitalOutputController`, `Meadow.Hardware.IPinController`, `System.IDisposable`

## Properties
### Pins
d
    The pins
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.cs#L104)
```csharp title="Declaration"
public Keyboard.PinDefinitions Pins { get; }
```
## Methods
### CreateDigitalInterruptPort(IPin)
Creates an input for a keyboard key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.cs#L57)
```csharp title="Declaration"
public IDigitalInterruptPort CreateDigitalInterruptPort(IPin pin)
```

##### Returns

`Meadow.Hardware.IDigitalInterruptPort`

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* |

### CreateDigitalInterruptPort(IPin, InterruptMode)
Creates an input for a keyboard key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.cs#L67)
```csharp title="Declaration"
public IDigitalInterruptPort CreateDigitalInterruptPort(IPin pin, InterruptMode interruptMode)
```

##### Returns

`Meadow.Hardware.IDigitalInterruptPort`

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* |
| `Meadow.Hardware.InterruptMode` | *interruptMode* |

### CreateDigitalInterruptPort(IPin, InterruptMode, ResistorMode, TimeSpan, TimeSpan)
Creates an input for a keyboard key
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.cs#L80)
```csharp title="Declaration"
public IDigitalInterruptPort CreateDigitalInterruptPort(IPin pin, InterruptMode interruptMode, ResistorMode resistorMode, TimeSpan debounceDuration, TimeSpan glitchDuration)
```

##### Returns

`Meadow.Hardware.IDigitalInterruptPort`

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* |
| `Meadow.Hardware.InterruptMode` | *interruptMode* |
| `Meadow.Hardware.ResistorMode` | *resistorMode* |
| `System.TimeSpan` | *debounceDuration* |
| `System.TimeSpan` | *glitchDuration* |

### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.cs#L110)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |

### Dispose()
Releases resources created by the Keyboard instance
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.cs#L130)
```csharp title="Declaration"
public void Dispose()
```
### CreateDigitalOutputPort(IPin, bool, OutputType)
Creates an output for a Keyboard indicator
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.cs#L146)
```csharp title="Declaration"
public IDigitalOutputPort CreateDigitalOutputPort(IPin pin, bool initialState = false, OutputType initialOutputType = OutputType.PushPull)
```

##### Returns

`Meadow.Hardware.IDigitalOutputPort`

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* |
| `System.Boolean` | *initialState* |
| `Meadow.Hardware.OutputType` | *initialOutputType* |


##### Exceptions

`System.ArgumentException`  

`System.NotImplementedException`  

### CreateDigitalSignalAnalyzer(IPin, bool)
Creates an IDigitalSignalAnalyzer on the specified pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Keyboard/Driver/Keyboard.cs#L171)
```csharp title="Declaration"
public IDigitalSignalAnalyzer CreateDigitalSignalAnalyzer(IPin pin, bool captureDutyCycle)
```

##### Returns

`Meadow.Hardware.IDigitalSignalAnalyzer`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* | The pin on which to create the analyzer. |
| `System.Boolean` | *captureDutyCycle* | Whether or not to capture duty cycle. Not capturing it is more efficient and allows faster frequency capture |


## Implements

* `Meadow.Hardware.IDigitalInterruptController`
* `Meadow.Hardware.IDigitalOutputController`
* `Meadow.Hardware.IPinController`
* `System.IDisposable`
