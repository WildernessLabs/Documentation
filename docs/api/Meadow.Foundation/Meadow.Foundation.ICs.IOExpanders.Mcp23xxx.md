---
uid: Meadow.Foundation.ICs.IOExpanders.Mcp23xxx
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp23xxx
---

| Mcp23xxxx | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.Mcp23xxx/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.Mcp23xxx.svg?label=Meadow.Foundation.ICs.IOExpanders.Mcp23xxx" alt="NuGet Gallery for Mcp23xxx" /></a> |

The **MCP** chip family, referred to as **MCP23XXX** to represent the variations, is a digital I/O expander chip that uses I2C to communicate. It can be used to add additional digital input and output ports to Meadow and can be combined with up to eight MCP23xxx chips in total, providing 64 additional ports.

MCP23XXX chips are ubiquitous in the hardware world and is the typical interface chip for common I2C LCD backpacks, with the 74595 chip being the typical interface chip for SPI LCD backpacks.

### MCP Chip Family

The MCP23XXX family includes the 8-bit MCP23008 and also includes the MCP23017, which is a 16-bit version of the MCP23008, offering 16 digital ports in total, and the MCP23S08 and MCP23S017 which are SPI versions of the MCP23008 and MCP23017, respectively.

### Chip Addressing

The I2C address of the chip is configurable via the address pins and is in the binary form of `0100[A2][A1][A0]`, where `A2`, `A1`, and `A0` refer to the three address pins on the chip:

<img src="/API_Assets/Meadow.Foundation.ICs.IOExpanders.Mcp23x08/Mcp23x08_Pins.png"  />

For example, if all address pins were tied to ground, then the address of the chip would be `0100000` in binary, or `0x20` in hex, and `32` in decimal.

The I2C addresses can then be as follows, where `0` represents an address pin connected to ground, and `1` represents an address pin connected to `3.3V`:

| Address Header | A2  | A1  | A0  | Resulting Hex Address | Resulting Decimal Address |
|----------------|-----|-----|-----|-----------------------|---------------------------|
| `0100`         | `0` | `0` | `0` | `0x20`                | `32`                      | 
| `0100`         | `0` | `0` | `1` | `0x21`                | `33`                      | 
| `0100`         | `0` | `1` | `0` | `0x22`                | `34`                      | 
| `0100`         | `0` | `1` | `1` | `0x23`                | `35`                      | 
| `0100`         | `1` | `0` | `0` | `0x24`                | `36`                      | 
| `0100`         | `1` | `0` | `1` | `0x25`                | `37`                      | 
| `0100`         | `1` | `1` | `0` | `0x26`                | `38`                      | 
| `0100`         | `1` | `1` | `1` | `0x27`                | `39`                      | 

Because there are 8 address possibilities, it's possible to put 8 MCP23XXX chips on a single I2C bus.

To make this simpler, when instantiating one of the MCP23XXX family of chip objects, there is a constructor overload that takes the address pin configurations instead of an address, so that Meadow.Foundation uses the appropriate address based on the pins, instead of requiring a pre-computed address.

### Other Pins

In addition to the address pins, there are a number of other pins that must be connected up:

 * **Not Reset** - The `RESET` pin is actually a "Not Reset." The line above "Reset" means "not." So unless that pin is pulled high (`3.3V`), the chip will reset itself at random times and you'll get connection errors.
 * **SCL** and **SDA** - The `SCL` and `SDA` pins are the I2C clock and data pins and go to the `SC` and `SD` pins on the Meadow, respectively. Each of these should also generally be pulled high (`3.3V`) via a `4.7kΩ` resistor. See the [I2C guide](http://developer.wildernesslabs.co/Meadow/Input_Output/Digital/I2C/) for more information.
 * **INT** - The `INT` pin is for interrupt notifications, and is only necessary when using the GPIO pins in input mode and you want an event raised when the input value changes.
 * **VSS** and **VDD** - These go to ground and 3.3V power, respectively, and power the chip.

### Code Examples

You can find code examples and links to sample projects for each of the MCP23XXX families and specific chips.

* [MCP23x0x](Meadow.Foundation.ICs.IOExpanders.Mcp23x0x.html)
    * [MCP23008](Meadow.Foundation.ICs.IOExpanders.Mcp23008.html)
    * [MCP23009](Meadow.Foundation.ICs.IOExpanders.Mcp23009.html)
    * [MCP23S08](Meadow.Foundation.ICs.IOExpanders.Mcp23s08.html)
    * [MCP23S09](Meadow.Foundation.ICs.IOExpanders.Mcp23s09.html)
* [MCP23x1x](Meadow.Foundation.ICs.IOExpanders.Mcp23x1x.html)
    * [MCP23017](Meadow.Foundation.ICs.IOExpanders.Mcp23017.html)
    * [MCP23018](Meadow.Foundation.ICs.IOExpanders.Mcp23018.html)
    * [MCP23S17](Meadow.Foundation.ICs.IOExpanders.Mcp23s17.html)
    * [MCP23S18](Meadow.Foundation.ICs.IOExpanders.Mcp23s18.html)

# Class Mcp23xxx
Provide an interface to connect to a MCP23xxx port expander

###### **Assembly**: Mcp23xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.Registers.cs#L3)
```csharp title="Declaration"
public abstract class Mcp23xxx : IDigitalInputOutputController, IDigitalInputController, IDigitalOutputController, ISpiPeripheral, II2cPeripheral, IDigitalInterruptController, IPinController
```
**Derived:**  
[Meadow.Foundation.ICs.IOExpanders.Mcp23x0x](../Mcp23x1x)

**Implements:**  
`Meadow.Hardware.IDigitalInputOutputController`, `Meadow.Hardware.IDigitalInputController`, `Meadow.Hardware.IDigitalOutputController`, `Meadow.Hardware.ISpiPeripheral`, `Meadow.Hardware.II2cPeripheral`, `Meadow.Hardware.IDigitalInterruptController`, `Meadow.Hardware.IPinController`

## Properties
### NumberOfPins
The number of IO pins available on the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L25)
```csharp title="Declaration"
public abstract int NumberOfPins { get; }
```
### DefaultSpiBusSpeed
The default SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L30)
```csharp title="Declaration"
public Frequency DefaultSpiBusSpeed { get; }
```
### SpiBusSpeed
The SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L35)
```csharp title="Declaration"
public Frequency SpiBusSpeed { get; set; }
```
### DefaultSpiBusMode
The default SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L44)
```csharp title="Declaration"
public SpiClockConfiguration.Mode DefaultSpiBusMode { get; }
```
### SpiBusMode
The SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L49)
```csharp title="Declaration"
public SpiClockConfiguration.Mode SpiBusMode { get; set; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L58)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
## Fields
### _lock
object for using lock() to do thread sync
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L72)
```csharp title="Declaration"
protected object _lock
```
## Methods
### GetAddressFromPins(bool, bool, bool)
Help method to get address from address pin configuration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.AddressTable.cs#L12)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L174)
```csharp title="Declaration"
public void ResetMcp()
```
### IsValidPin(IPin)
Checks if a pin exists on the Mcp23xxx
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L226)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L235)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L261)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L279)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L295)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L313)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L367)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L449)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L467)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L490)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L520)
```csharp title="Declaration"
public byte ReadFromPorts(Mcp23xxx.PortBank bank = PortBank.A)
```

##### Returns

`System.Byte`: A little-endian byte mask of the pin values.
##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Foundation.ICs.IOExpanders.Mcp23xxx.PortBank](../Mcp23xxx.PortBank) | *bank* |

### ResetPin(IPin)
Sets the pin back to an input
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L544)
```csharp title="Declaration"
protected void ResetPin(IPin pin)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* |

### GetPin(string)
Get Pin by name
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L551)
```csharp title="Declaration"
public abstract IPin GetPin(string pinName)
```

##### Returns

`Meadow.Hardware.IPin`: IPin object if found
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *pinName* | The pin name |

## Events
### InputChanged
Raised when the value of any pin configured for input interrupts changes
This provides raw port state data from the MCP23xxx
It's highly recommended to prefer using the events exposed on the digital input ports instead.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Mcp23xxx.cs#L20)
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
