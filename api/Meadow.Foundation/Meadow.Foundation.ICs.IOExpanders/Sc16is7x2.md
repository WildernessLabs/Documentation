---
title: Class Sc16is7x2
sidebar_label: Sc16is7x2
description: "Represents an Sc16is7x2 SPI/I2C UART"
---
# Class Sc16is7x2
Represents an Sc16is7x2 SPI/I2C UART

###### **Assembly**: Sc16is7x2.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.Spi.cs#L6)
```csharp title="Declaration"
public abstract class Sc16is7x2 : ISerialController, II2cPeripheral, ISpiPeripheral
```
**Derived:**  
[Meadow.Foundation.ICs.IOExpanders.Sc16is752](../Meadow.Foundation.ICs.IOExpanders/Sc16is752), [Meadow.Foundation.ICs.IOExpanders.Sc16is762](../Meadow.Foundation.ICs.IOExpanders/Sc16is762)

**Implements:**  
`Meadow.Hardware.ISerialController`, `Meadow.Hardware.II2cPeripheral`, `Meadow.Hardware.ISpiPeripheral`

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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.cs#L53)
```csharp title="Declaration"
public ISerialPort CreateSerialPort(SerialPortName portName, int baudRate = 9600, int dataBits = 8, Parity parity = Parity.None, StopBits stopBits = StopBits.One, int readBufferSize = 64)
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
| `System.Int32` | *readBufferSize* | The buffer read buffer size |

### CreateRs485SerialPort(Sc16SerialPortName, int, int, Parity, StopBits, bool)
Creates an RS485 Serial Port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Driver/Sc16is7x2.cs#L90)
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


## Implements

* `Meadow.Hardware.ISerialController`
* `Meadow.Hardware.II2cPeripheral`
* `Meadow.Hardware.ISpiPeripheral`
