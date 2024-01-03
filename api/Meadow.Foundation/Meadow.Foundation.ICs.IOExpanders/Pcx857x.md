---
title: Class Pcx857x
sidebar_label: Pcx857x
description: "Represents a Pcx857x I2C IO Expander"
---
# Class Pcx857x
Represents a Pcx857x I2C IO Expander

###### **Assembly**: Pcx857x.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.Enums.cs#L3)
```csharp title="Declaration"
public abstract class Pcx857x : IDigitalOutputController, IDigitalInputController, IDigitalInterruptController, IPinController, II2cPeripheral, IDisposable
```
**Derived:**  
[Meadow.Foundation.ICs.IOExpanders.Pcx8574](../Meadow.Foundation.ICs.IOExpanders/Pcx8574), [Meadow.Foundation.ICs.IOExpanders.Pcx8575](../Meadow.Foundation.ICs.IOExpanders/Pcx8575)

**Implements:**  
`Meadow.Hardware.IDigitalOutputController`, `Meadow.Hardware.IDigitalInputController`, `Meadow.Hardware.IDigitalInterruptController`, `Meadow.Hardware.IPinController`, `Meadow.Hardware.II2cPeripheral`, `System.IDisposable`

## Properties
### NumberOfPins
The number of IO pins available on the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.cs#L16)
```csharp title="Declaration"
public abstract int NumberOfPins { get; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.cs#L19)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.cs#L29)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Fields
### createdPorts
Did we create the port(s) used by the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.cs#L34)
```csharp title="Declaration"
protected bool createdPorts
```
### i2cComms
The I2C Communications object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.cs#L40)
```csharp title="Declaration"
protected readonly II2cCommunications i2cComms
```
## Methods
### GetAddressFromPins(bool, bool, bool, bool)
Helper method to get address from address pin configuration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.AddressTable.cs#L13)
```csharp title="Declaration"
public static byte GetAddressFromPins(bool pinA0, bool pinA1, bool pinA2, bool isATypeDevice = false)
```

##### Returns

`System.Byte`: The device address
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *pinA0* | State of A0 address pin - true if high |
| `System.Boolean` | *pinA1* | State of A1 address pin - true if high |
| `System.Boolean` | *pinA2* | State of A2 address pin - true if high |
| `System.Boolean` | *isATypeDevice* | Is an A hardware variant, this shifts the address returned by 24 |

### CreateDigitalOutputPort(IPin, bool, OutputType)
Creates an IDigitalOutputPort on the specified pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.cs#L76)
```csharp title="Declaration"
public IDigitalOutputPort CreateDigitalOutputPort(IPin pin, bool initialState = false, OutputType initialOutputType = OutputType.PushPull)
```

##### Returns

`Meadow.Hardware.IDigitalOutputPort`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* | The pin on which to create the port. |
| `System.Boolean` | *initialState* | The default initial state of the port,
    either `LOW` (`false`), or `HIGH` (`true`). |
| `Meadow.Hardware.OutputType` | *initialOutputType* | Whether the port is initially configured
    as PushPull or OpenDrain. PushPull by default. |

### CreateDigitalInputPort(IPin, ResistorMode)
Creates an IDigitalInputPort on the specified pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.cs#L106)
```csharp title="Declaration"
public IDigitalInputPort CreateDigitalInputPort(IPin pin, ResistorMode resistorMode)
```

##### Returns

`Meadow.Hardware.IDigitalInputPort`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* | The pin on which to create the port. |
| `Meadow.Hardware.ResistorMode` | *resistorMode* | The `ResistorMode` specifying whether an
    external pull-up/pull-down resistor is used, or an internal pull-up/pull-down
    resistor should be configured for default state. |

### CreateDigitalInterruptPort(IPin, InterruptMode, ResistorMode)
Creates a new DigitalInputPort using the specified pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.cs#L150)
```csharp title="Declaration"
public IDigitalInterruptPort CreateDigitalInterruptPort(IPin pin, InterruptMode interruptMode = InterruptMode.None, ResistorMode resistorMode = ResistorMode.Disabled)
```

##### Returns

`Meadow.Hardware.IDigitalInterruptPort`: IDigitalInterruptPort
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* | The pin representing the port |
| `Meadow.Hardware.InterruptMode` | *interruptMode* | The port interrupt mode |
| `Meadow.Hardware.ResistorMode` | *resistorMode* | The port resistor mode |

### CreateDigitalInterruptPort(IPin, InterruptMode, ResistorMode, TimeSpan)
Creates a new DigitalInputPort using the specified pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.cs#L166)
```csharp title="Declaration"
public IDigitalInterruptPort CreateDigitalInterruptPort(IPin pin, InterruptMode interruptMode, ResistorMode resistorMode, TimeSpan debounceDuration)
```

##### Returns

`Meadow.Hardware.IDigitalInterruptPort`: IDigitalInterruptPort
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* | The pin representing the port |
| `Meadow.Hardware.InterruptMode` | *interruptMode* | The port interrupt mode |
| `Meadow.Hardware.ResistorMode` | *resistorMode* | The port resistor mode |
| `System.TimeSpan` | *debounceDuration* | The debounce duration |

### CreateDigitalInterruptPort(IPin, InterruptMode, ResistorMode, TimeSpan, TimeSpan)
Creates a new DigitalInputPort using the specified pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.cs#L184)
```csharp title="Declaration"
public IDigitalInterruptPort CreateDigitalInterruptPort(IPin pin, InterruptMode interruptMode, ResistorMode resistorMode, TimeSpan debounceDuration, TimeSpan glitchDuration)
```

##### Returns

`Meadow.Hardware.IDigitalInterruptPort`: IDigitalInterruptPort
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* | The pin representing the port |
| `Meadow.Hardware.InterruptMode` | *interruptMode* | The port interrupt mode |
| `Meadow.Hardware.ResistorMode` | *resistorMode* | The port resistor mode |
| `System.TimeSpan` | *debounceDuration* | The debounce duration |
| `System.TimeSpan` | *glitchDuration* | The glitch duration - not configurable on Mcpxxxx |

### GetPin(string)

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.cs#L231)
```csharp title="Declaration"
public abstract IPin GetPin(string pinName)
```

##### Returns

`Meadow.Hardware.IPin`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *pinName* |

### IsValidPin(IPin)
Checks if a pin exists on the Pcx857x
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.cs#L236)
```csharp title="Declaration"
protected abstract bool IsValidPin(IPin pin)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* |

### ReadState()
Reads the peripheral state register for 8 pin devices
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.cs#L241)
```csharp title="Declaration"
protected abstract ushort ReadState()
```

##### Returns

`System.UInt16`
### WriteState(ushort)
Writes to the peripheral state register
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.cs#L246)
```csharp title="Declaration"
protected abstract void WriteState(ushort state)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.UInt16` | *state* |

### SetState(ushort)
Writes to the peripheral state register and saves internal output state
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.cs#L251)
```csharp title="Declaration"
protected abstract void SetState(ushort state)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.UInt16` | *state* |

### SetPinDirection(bool, byte)
Set the pin direction
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.cs#L258)
```csharp title="Declaration"
protected abstract void SetPinDirection(bool input, byte pinKey)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *input* | true for input, false for output |
| `System.Byte` | *pinKey* | The pin key value |

### AllOff()
Convenience method to turn all outputs off
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.cs#L263)
```csharp title="Declaration"
public void AllOff()
```
### AllOn()
Convenience method to turn all outputs on
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.cs#L271)
```csharp title="Declaration"
public void AllOn()
```
### GetPinState(IPin)
Retrieves the state of a pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.cs#L280)
```csharp title="Declaration"
protected abstract bool GetPinState(IPin pin)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* | The pin to query |

### SetPinState(IPin, bool)
Sets the state of a pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.cs#L287)
```csharp title="Declaration"
protected abstract void SetPinState(IPin pin, bool state)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* | The pin to affect |
| `System.Boolean` | *state* | &lt;b&gt;True&lt;/b&gt; to set the pin state high, &lt;b&gt;False&lt;/b&gt; to set it low |

### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.cs#L320)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Driver/Pcx857x.cs#L338)
```csharp title="Declaration"
public void Dispose()
```

## Implements

* `Meadow.Hardware.IDigitalOutputController`
* `Meadow.Hardware.IDigitalInputController`
* `Meadow.Hardware.IDigitalInterruptController`
* `Meadow.Hardware.IPinController`
* `Meadow.Hardware.II2cPeripheral`
* `System.IDisposable`
