---
title: Class Sc16is7x2
sidebar_label: Sc16is7x2
description: Represents an Sc16is7x2 SPI/I2C dual UART (with 8 GPIO's)
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/Sc16is7x2
---
# Class Sc16is7x2
Represents an Sc16is7x2 SPI/I2C dual UART (with 8 GPIO's)

###### **Assembly**: Sc16is7x2.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Spi.cs#L6)
```csharp title="Declaration"
public abstract class Sc16is7x2 : ISerialController, IDigitalInputOutputController, IDigitalInputController, IDigitalOutputController, IPinController, II2cPeripheral, ISpiPeripheral
```
**Derived:**  
[Meadow.Foundation.ICs.IOExpanders.Sc16is752](../Meadow.Foundation.ICs.IOExpanders/Sc16is752), [Meadow.Foundation.ICs.IOExpanders.Sc16is762](../Meadow.Foundation.ICs.IOExpanders/Sc16is762)

**Implements:**  
`Meadow.Hardware.ISerialController`, `Meadow.Hardware.IDigitalInputOutputController`, `Meadow.Hardware.IDigitalInputController`, `Meadow.Hardware.IDigitalOutputController`, `Meadow.Hardware.IPinController`, `Meadow.Hardware.II2cPeripheral`, `Meadow.Hardware.ISpiPeripheral`

## Properties
### PortA
The port name for Port A
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.cs#L16)
```csharp title="Declaration"
public Sc16is7x2.Sc16SerialPortName PortA { get; }
```
### PortB
The port name for Port B
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.cs#L21)
```csharp title="Declaration"
public Sc16is7x2.Sc16SerialPortName PortB { get; }
```
### Pins
03.12.2023: Sc16is7x2 pin definitions for GPIO pins.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.cs#L32)
```csharp title="Declaration"
public Sc16is7x2.PinDefinitions Pins { get; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.I2c.cs#L11)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### MaxI2cBusSpeed
The maximum I2C bus speed for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.I2c.cs#L16)
```csharp title="Declaration"
public I2cBusSpeed MaxI2cBusSpeed { get; }
```
### DefaultSpiBusMode
The default SPI bus mode for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Spi.cs#L11)
```csharp title="Declaration"
public SpiClockConfiguration.Mode DefaultSpiBusMode { get; }
```
### DefaultSpiBusSpeed
The default SPI bus frequency for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Spi.cs#L16)
```csharp title="Declaration"
public Frequency DefaultSpiBusSpeed { get; }
```
### SpiBusMode
The current SPI bus mode for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Spi.cs#L21)
```csharp title="Declaration"
public SpiClockConfiguration.Mode SpiBusMode { get; set; }
```
### SpiBusSpeed
The current SPI bus frequency for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Spi.cs#L26)
```csharp title="Declaration"
public Frequency SpiBusSpeed { get; set; }
```
## Methods
### CreateSerialPort(SerialPortName, int, int, Parity, StopBits, int)
Creates an RS232 Serial Port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.cs#L67)
```csharp title="Declaration"
public ISerialPort CreateSerialPort(SerialPortName portName, int baudRate = 9600, int dataBits = 8, Parity parity = Parity.None, StopBits stopBits = StopBits.One, int readBufferSize = 1024)
```

##### Returns

`Meadow.Hardware.ISerialPort`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.SerialPortName` | *portName* | The Sc16SerialPortName name of the channel to create |
| `System.Int32` | *baudRate* | The baud rate used in communication |
| `System.Int32` | *dataBits* | The data bits used in communication |
| `Meadow.Hardware.Parity` | *parity* | The parity used in communication |
| `Meadow.Hardware.StopBits` | *stopBits* | The stop bits used in communication |
| `System.Int32` | *readBufferSize* | The software FIFO read buffer size. (Not the 64 bytes on chip FIFO) |

### CreateRs485SerialPort(Sc16SerialPortName, int, int, Parity, StopBits, bool)
Creates an RS485 Serial Port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.cs#L104)
```csharp title="Declaration"
public ISerialPort CreateRs485SerialPort(Sc16is7x2.Sc16SerialPortName portName, int baudRate = 9600, int dataBits = 8, Parity parity = Parity.None, StopBits stopBits = StopBits.One, bool invertDE = false)
```

##### Returns

`Meadow.Hardware.ISerialPort`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.ICs.IOExpanders.Sc16is7x2.Sc16SerialPortName](../Meadow.Foundation.ICs.IOExpanders/Sc16is7x2.Sc16SerialPortName) | *portName* | The Sc16SerialPortName name of the channel to create |
| `System.Int32` | *baudRate* | The baud rate used in communication |
| `System.Int32` | *dataBits* | The data bits used in communication |
| `Meadow.Hardware.Parity` | *parity* | The parity used in communication |
| `Meadow.Hardware.StopBits` | *stopBits* | The stop bits used in communication |
| `System.Boolean` | *invertDE* | Set to true to invert the logic (active high) driver enable output signal |

### CreateDigitalInputPort(IPin, ResistorMode)
Create a digital input port on a SC16IS7x2 IO expander.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.cs#L449)
```csharp title="Declaration"
public IDigitalInputPort CreateDigitalInputPort(IPin pin, ResistorMode resistorMode = ResistorMode.Disabled)
```

##### Returns

`Meadow.Hardware.IDigitalInputPort`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* | The GPIO pin to use. |
| `Meadow.Hardware.ResistorMode` | *resistorMode* | SC16IS7x2 GPIO's does not support pullup or pulldown on inputs. |


##### Exceptions

`System.Exception`  

### SetPortDirection(IPin, PortDirectionType)
Sets the direction of a port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.cs#L536)
```csharp title="Declaration"
public void SetPortDirection(IPin pin, PortDirectionType direction)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* | The pin representing the port |
| `Meadow.Hardware.PortDirectionType` | *direction* | The port direction (input or output) |

### ReadPort(IPin)
Gets the value of a particular port.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.cs#L553)
```csharp title="Declaration"
public bool ReadPort(IPin pin)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* |

### CreateDigitalOutputPort(IPin, bool, OutputType)
Create a digital output port on a SC16IS7x2 IO expander.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.cs#L580)
```csharp title="Declaration"
public IDigitalOutputPort CreateDigitalOutputPort(IPin pin, bool initialState = false, OutputType outputType = OutputType.PushPull)
```

##### Returns

`Meadow.Hardware.IDigitalOutputPort`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* | The GPIO pin to use. |
| `System.Boolean` | *initialState* | Initial state. Either true or false. |
| `Meadow.Hardware.OutputType` | *outputType* | Always push/pull on SC16IS7x2. |


##### Exceptions

`System.NotImplementedException`  

### GetInterruptSource()
Get the Interrupt Identification Register (IIR) value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.cs#L641)
```csharp title="Declaration"
public byte GetInterruptSource()
```

##### Returns

`System.Byte`
### GetInterruptSourceType(byte)
Get the interrupt source type from the IIR register value. (Interrupt Identification Register)
Ref. page 14 and 24 in datasheet. Mostly for debugging.
Not sure if multiple sources can be active at the same time. If so, this will need to be modified.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.cs#L660)
```csharp title="Declaration"
public Sc16is7x2.InterruptSourceType GetInterruptSourceType(byte iir)
```

##### Returns

[Meadow.Foundation.ICs.IOExpanders.Sc16is7x2.InterruptSourceType](../Meadow.Foundation.ICs.IOExpanders/Sc16is7x2.InterruptSourceType)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *iir* | The IIR register value. (Interrupt Identification Register) |

### IsValidPin(IPin)
Is the pin valid for this device instance
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.cs#L686)
```csharp title="Declaration"
protected bool IsValidPin(IPin pin)
```

##### Returns

`System.Boolean`: True if pin is valid
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* | The IPin to validate |

### PrintAddressContent()
Print the content of the address space for debugging purposes.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.cs#L740)
```csharp title="Declaration"
public void PrintAddressContent()
```
### CalculateAddress(AddressConnection, AddressConnection)
Calculates a bus address based on the connection of the address pins
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Enums.cs#L35)
```csharp title="Declaration"
public static Sc16is7x2.Addresses CalculateAddress(Sc16is7x2.AddressConnection a0, Sc16is7x2.AddressConnection a1)
```

##### Returns

[Meadow.Foundation.ICs.IOExpanders.Sc16is7x2.Addresses](../Meadow.Foundation.ICs.IOExpanders/Sc16is7x2.Addresses)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.ICs.IOExpanders.Sc16is7x2.AddressConnection](../Meadow.Foundation.ICs.IOExpanders/Sc16is7x2.AddressConnection) | *a0* | A0's pin connection |
| [Meadow.Foundation.ICs.IOExpanders.Sc16is7x2.AddressConnection](../Meadow.Foundation.ICs.IOExpanders/Sc16is7x2.AddressConnection) | *a1* | A1's pin connection |


## Implements

* `Meadow.Hardware.ISerialController`
* `Meadow.Hardware.IDigitalInputOutputController`
* `Meadow.Hardware.IDigitalInputController`
* `Meadow.Hardware.IDigitalOutputController`
* `Meadow.Hardware.IPinController`
* `Meadow.Hardware.II2cPeripheral`
* `Meadow.Hardware.ISpiPeripheral`
