---
title: Class Mcp23xxx
sidebar_label: Mcp23xxx
description: Provide an interface to connect to a MCP23xxx port expander
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/Mcp23xxx
---
# Class Mcp23xxx
Provide an interface to connect to a MCP23xxx port expander

###### **Assembly**: Mcp23xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.Registers.cs#L3)
```csharp title="Declaration"
public abstract class Mcp23xxx : IDigitalInputOutputController, IDigitalInputController, IDigitalOutputController, ISpiPeripheral, II2cPeripheral, IDigitalInterruptController, IPinController
```
**Derived:**  
[Meadow.Foundation.ICs.IOExpanders.Mcp23x0x](../Meadow.Foundation.ICs.IOExpanders/Mcp23x0x), [Meadow.Foundation.ICs.IOExpanders.Mcp23x1x](../Meadow.Foundation.ICs.IOExpanders/Mcp23x1x)

**Implements:**  
`Meadow.Hardware.IDigitalInputOutputController`, `Meadow.Hardware.IDigitalInputController`, `Meadow.Hardware.IDigitalOutputController`, `Meadow.Hardware.ISpiPeripheral`, `Meadow.Hardware.II2cPeripheral`, `Meadow.Hardware.IDigitalInterruptController`, `Meadow.Hardware.IPinController`

## Properties
### NumberOfPins
The number of IO pins available on the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L25)
```csharp title="Declaration"
public abstract int NumberOfPins { get; }
```
### DefaultSpiBusSpeed
The default SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L30)
```csharp title="Declaration"
public Frequency DefaultSpiBusSpeed { get; }
```
### SpiBusSpeed
The SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L35)
```csharp title="Declaration"
public Frequency SpiBusSpeed { get; set; }
```
### DefaultSpiBusMode
The default SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L44)
```csharp title="Declaration"
public SpiClockConfiguration.Mode DefaultSpiBusMode { get; }
```
### SpiBusMode
The SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L49)
```csharp title="Declaration"
public SpiClockConfiguration.Mode SpiBusMode { get; set; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L58)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Fields
### _lock
object for using lock() to do thread sync
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L72)
```csharp title="Declaration"
protected object _lock
```
## Methods
### GetAddressFromPins(bool, bool, bool)
Help method to get address from address pin configuration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.AddressTable.cs#L12)
```csharp title="Declaration"
public static byte GetAddressFromPins(bool pinA0, bool pinA1, bool pinA2)
```

##### Returns

`System.Byte`: The device address
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *pinA0* | State of A0 address pin - true if high |
| `System.Boolean` | *pinA1* | State of A1 address pin - true if high |
| `System.Boolean` | *pinA2* | State of A2 address pin - true if high |

### ResetMcp()
Reset the MCPxxxx expander
Requires using a reset port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L178)
```csharp title="Declaration"
public void ResetMcp()
```
### IsValidPin(IPin)
Checks if a pin exists on the Mcp23xxx
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L230)
```csharp title="Declaration"
protected abstract bool IsValidPin(IPin pin)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* |

### CreateDigitalOutputPort(IPin, bool, OutputType)
Creates a new DigitalOutputPort using the specified pin and initial state
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L239)
```csharp title="Declaration"
public virtual IDigitalOutputPort CreateDigitalOutputPort(IPin pin, bool initialState = false, OutputType outputType = OutputType.OpenDrain)
```

##### Returns

`Meadow.Hardware.IDigitalOutputPort`: IDigitalOutputPort
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* | The pin representing the port |
| `System.Boolean` | *initialState* | Whether the pin is initially high or low |
| `Meadow.Hardware.OutputType` | *outputType* | The output type |

### CreateDigitalInputPort(IPin, ResistorMode)
Creates a new DigitalInputPort using the specified pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L267)
```csharp title="Declaration"
public IDigitalInputPort CreateDigitalInputPort(IPin pin, ResistorMode resistorMode = ResistorMode.Disabled)
```

##### Returns

`Meadow.Hardware.IDigitalInputPort`: IDigitalInputPort
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* | The pin representing the port |
| `Meadow.Hardware.ResistorMode` | *resistorMode* | The port resistor mode |

### CreateDigitalInterruptPort(IPin, InterruptMode, ResistorMode)
Creates a new DigitalInputPort using the specified pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L285)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L301)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L319)
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
| `System.TimeSpan` | *glitchDuration* | The glitch duration - not configurable on Mcp23xxx |

### SetPortDirection(IPin, PortDirectionType)
Sets the direction of a port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L373)
```csharp title="Declaration"
public void SetPortDirection(IPin pin, PortDirectionType direction)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* | The pin representing the port |
| `Meadow.Hardware.PortDirectionType` | *direction* | The port direction (input or output) |

### WriteToPort(IPin, bool)
Sets a particular pin's value. If that pin is not 
in output mode, this method will first set its 
mode to output.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L465)
```csharp title="Declaration"
public void WriteToPort(IPin pin, bool value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* | The pin to write to. |
| `System.Boolean` | *value* | The value to write. True for high, false for low. |

### ReadPort(IPin)
Gets the value of a particular port. If the port is currently configured
as an output, this will change the configuration.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L483)
```csharp title="Declaration"
public bool ReadPort(IPin pin)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* |

### WriteToPorts(byte)
Outputs a byte value across all of the pins by writing directly 
to the output latch (OLAT) register
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L506)
```csharp title="Declaration"
public void WriteToPorts(byte mask)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *mask* |

### ReadFromPorts(PortBank)
Reads a byte value from all of the pins. little-endian; the least
significant bit is the value of GP0. So a byte value of 0x60, or
0110 0000, means that pins GP5 and GP6 are high.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L536)
```csharp title="Declaration"
public byte ReadFromPorts(Mcp23xxx.PortBank bank = PortBank.A)
```

##### Returns

`System.Byte`: A little-endian byte mask of the pin values.
##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Foundation.ICs.IOExpanders.Mcp23xxx.PortBank](../Meadow.Foundation.ICs.IOExpanders/Mcp23xxx.PortBank) | *bank* |

### ResetPin(IPin)
Sets the pin back to an input
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L560)
```csharp title="Declaration"
protected void ResetPin(IPin pin)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* |

### GetPin(string)
Get Pin by name
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L567)
```csharp title="Declaration"
public abstract IPin GetPin(string pinName)
```

##### Returns

`Meadow.Hardware.IPin`: IPin object if found
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *pinName* | The pin name |

### CreateDigitalSignalAnalyzer(IPin, bool)
Creates an IDigitalSignalAnalyzer on the specified pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L648)
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

## Events
### InputChanged
Raised when the value of any pin configured for input interrupts changes
This provides raw port state data from the MCP23xxx
It's highly recommended to prefer using the events exposed on the digital input ports instead.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L20)
```csharp title="Declaration"
public event EventHandler<IOExpanderInputChangedEventArgs> InputChanged
```
##### Event Type
`System.EventHandler<Meadow.Foundation.ICs.IOExpanders.IOExpanderInputChangedEventArgs>`

## Implements

* `Meadow.Hardware.IDigitalInputOutputController`
* `Meadow.Hardware.IDigitalInputController`
* `Meadow.Hardware.IDigitalOutputController`
* `Meadow.Hardware.ISpiPeripheral`
* `Meadow.Hardware.II2cPeripheral`
* `Meadow.Hardware.IDigitalInterruptController`
* `Meadow.Hardware.IPinController`
