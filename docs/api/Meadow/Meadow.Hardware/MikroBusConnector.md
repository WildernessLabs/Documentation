---
title: Class MikroBusConnector
sidebar_label: MikroBusConnector
description: Represents a connector for MikroBus devices
slug: /docs/api/Meadow/Meadow.Hardware/MikroBusConnector
---
# Class MikroBusConnector
Represents a connector for MikroBus devices

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/MikroBusConnector.MikroBusPinDefinitions.cs#L4)
```csharp title="Declaration"
public class MikroBusConnector : Connector<MikroBusConnector.MikroBusPinDefinitions>, IConnector, IIOController<MikroBusConnector.MikroBusPinDefinitions>
```
**Inheritance:** `System.Object` -> [Meadow.Hardware.Connector&lt;TPinDefinition&gt;](../Meadow.Hardware/Connector`TPinDefinition`)

**Implements:**  
[Meadow.IConnector](../Meadow/IConnector), [Meadow.Hardware.IIOController&lt;T&gt;](../Meadow.Hardware/IIOController`T`)

## Properties
### SerialPortName
The serial port name
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/MikroBusConnector.cs#L19)
```csharp title="Declaration"
public SerialPortName SerialPortName { get; }
```
### I2cBus
Gets the connector's I2C bus
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/MikroBusConnector.cs#L158)
```csharp title="Declaration"
public II2cBus I2cBus { get; }
```
### SpiBus
Gets the connector's SPI bus
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/MikroBusConnector.cs#L164)
```csharp title="Declaration"
public ISpiBus SpiBus { get; }
```
## Methods
### CreateSerialPort(int, int, Parity, StopBits, int)
Creates a serial port on the connector
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/MikroBusConnector.cs#L104)
```csharp title="Declaration"
public ISerialPort CreateSerialPort(int baudRate = 9600, int dataBits = 8, Parity parity = Parity.None, StopBits stopBits = StopBits.One, int readBufferSize = 1024)
```

##### Returns

[Meadow.Hardware.ISerialPort](../Meadow.Hardware/ISerialPort)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *baudRate* | The speed, in bits per second, of the serial port. |
| `System.Int32` | *dataBits* | The number of data bits expected in the serial message frame. Default is 8. |
| [Meadow.Hardware.Parity](../Meadow.Hardware/Parity) | *parity* | The `Parity` enum describing what type of cyclic-redundancy-check (CRC) bit, if any, should be expected in the serial message frame. Default is `Parity.None`. |
| [Meadow.Hardware.StopBits](../Meadow.Hardware/StopBits) | *stopBits* | The `StopBits` describing how many bits should be expected at the end of every character in the serial message frame. Default is `StopBits.One`. |
| `System.Int32` | *readBufferSize* | The size, in bytes, of the read buffer. Default is 1024. |

### CreateSerialMessagePort(byte[], bool, int, int, Parity, StopBits, int)
Creates an [Meadow.Hardware.ISerialMessagePort](../Meadow.Hardware/ISerialMessagePort) directly from a [Meadow.Hardware.MikroBusConnector.SerialPortName](../Meadow.Hardware/MikroBusConnector#serialportname) using the current [Meadow.IMeadowDevice](../Meadow/IMeadowDevice)
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/MikroBusConnector.cs#L119)
```csharp title="Declaration"
public ISerialMessagePort CreateSerialMessagePort(byte[] suffixDelimiter, bool preserveDelimiter, int baudRate = 9600, int dataBits = 8, Parity parity = Parity.None, StopBits stopBits = StopBits.One, int readBufferSize = 512)
```

##### Returns

[Meadow.Hardware.ISerialMessagePort](../Meadow.Hardware/ISerialMessagePort)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *suffixDelimiter* |  |
| `System.Boolean` | *preserveDelimiter* |  |
| `System.Int32` | *baudRate* | The speed, in bits per second, of the serial port. |
| `System.Int32` | *dataBits* | The number of data bits expected in the serial message frame. Default is 8. |
| [Meadow.Hardware.Parity](../Meadow.Hardware/Parity) | *parity* | The `Parity` enum describing what type of cyclic-redundancy-check (CRC) bit, if any, should be expected in the serial message frame. Default is `Parity.None`. |
| [Meadow.Hardware.StopBits](../Meadow.Hardware/StopBits) | *stopBits* | The `StopBits` describing how many bits should be expected at the end of every character in the serial message frame. Default is `StopBits.One`. |
| `System.Int32` | *readBufferSize* | The size, in bytes, of the read buffer. Default is 1024. |

### CreateSerialMessagePort(byte[], bool, int, int, int, Parity, StopBits, int)
Creates an [Meadow.Hardware.ISerialMessagePort](../Meadow.Hardware/ISerialMessagePort) directly from a [Meadow.Hardware.MikroBusConnector.SerialPortName](../Meadow.Hardware/MikroBusConnector#serialportname) using the current [Meadow.IMeadowDevice](../Meadow/IMeadowDevice)
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/Connectors/MikroBusConnector.cs#L142)
```csharp title="Declaration"
public ISerialMessagePort CreateSerialMessagePort(byte[] prefixDelimiter, bool preserveDelimiter, int messageLength, int baudRate = 9600, int dataBits = 8, Parity parity = Parity.None, StopBits stopBits = StopBits.One, int readBufferSize = 512)
```

##### Returns

[Meadow.Hardware.ISerialMessagePort](../Meadow.Hardware/ISerialMessagePort)

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *prefixDelimiter* |  |
| `System.Boolean` | *preserveDelimiter* |  |
| `System.Int32` | *messageLength* |  |
| `System.Int32` | *baudRate* | The speed, in bits per second, of the serial port. |
| `System.Int32` | *dataBits* | The number of data bits expected in the serial message frame. Default is 8. |
| [Meadow.Hardware.Parity](../Meadow.Hardware/Parity) | *parity* | The `Parity` enum describing what type of cyclic-redundancy-check (CRC) bit, if any, should be expected in the serial message frame. Default is `Parity.None`. |
| [Meadow.Hardware.StopBits](../Meadow.Hardware/StopBits) | *stopBits* | The `StopBits` describing how many bits should be expected at the end of every character in the serial message frame. Default is `StopBits.One`. |
| `System.Int32` | *readBufferSize* | The size, in bytes, of the read buffer. Default is 1024. |


## Implements

* [Meadow.IConnector](../Meadow/IConnector)
* [Meadow.Hardware.IIOController&lt;T&gt;](../Meadow.Hardware/IIOController`T`)
