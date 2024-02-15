---
uid: Meadow.Foundation.ICs.IOExpanders.Tca9548a
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Tca9548a
---

| Tca9548a | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.Tca9548a/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.Tca9548a.svg?label=Meadow.Foundation.ICs.IOExpanders.Tca9548a" alt="NuGet Gallery for Meadow.Foundation.ICs.IOExpanders.Tca9548a" /></a> |

[Explanation of the peripheral]

### Code Example

```csharp
IDigitalOutputPort bus0Port0;
IDigitalOutputPort bus1Port0;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    var i2cBus = Device.CreateI2cBus(I2cBusSpeed.Standard);
    var tca9548a = new Tca9548a(i2cBus, 0x70);
    var mcp0 = new Mcp23008(tca9548a.Bus0);
    var mcp1 = new Mcp23008(tca9548a.Bus1);

    bus0Port0 = mcp0.CreateDigitalOutputPort(mcp0.Pins.GP0);
    bus1Port0 = mcp1.CreateDigitalOutputPort(mcp1.Pins.GP0);

    return base.Initialize();
}

public override async Task Run()
{
    while (true)
    {
        bus0Port0.State = true;
        bus1Port0.State = false;

        await Task.Delay(1000);

        bus0Port0.State = false;
        bus1Port0.State = true;

        await Task.Delay(1000);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Samples/Tca9548a_Sample)

### Wiring Example

To wire a Tca9548a to your Meadow board, connect the following:

| Tca9548a | Meadow Pin  |
|----------|-------------|
| GND      | GND         |
| SCL      | D08 (SCL)   |
| SDA      | D07 (SDA)   |
| VCC      | 3V3         |

It should look like the following diagram:

ToDo: Fritzing diagram here






# Class Tca9548a
A TCA9548A i2c multiplexer

###### **Assembly**: Tca9548a.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548A.cs#L13)
```csharp title="Declaration"
public class Tca9548a : II2cCommunications, IByteCommunications
```
**Implements:**  
`Meadow.Hardware.II2cCommunications`, `Meadow.Hardware.IByteCommunications`

## Properties
### Address
The address of this device on the [Meadow.Foundation.ICs.IOExpanders.Tca9548a.Bus](../Tca9548a#bus)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548A.cs#L23)
```csharp title="Declaration"
public byte Address { get; }
```
### Bus
The `Meadow.Hardware.II2cBus` this device is connected to.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548A.cs#L64)
```csharp title="Declaration"
public II2cBus Bus { get; }
```
### Bus0
The `Meadow.Hardware.II2cBus` connected to SD0/SC0
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548A.cs#L69)
```csharp title="Declaration"
public II2cBus Bus0 { get; }
```
### Bus1
The `Meadow.Hardware.II2cBus` connected to SD1/SC1
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548A.cs#L74)
```csharp title="Declaration"
public II2cBus Bus1 { get; }
```
### Bus2
The `Meadow.Hardware.II2cBus` connected to SD2/SC2
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548A.cs#L79)
```csharp title="Declaration"
public II2cBus Bus2 { get; }
```
### Bus3
The `Meadow.Hardware.II2cBus` connected to SD3/SC3
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548A.cs#L84)
```csharp title="Declaration"
public II2cBus Bus3 { get; }
```
### Bus4
The `Meadow.Hardware.II2cBus` connected to SD4/SC4
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548A.cs#L89)
```csharp title="Declaration"
public II2cBus Bus4 { get; }
```
### Bus5
The `Meadow.Hardware.II2cBus` connected to SD5/SC5
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548A.cs#L94)
```csharp title="Declaration"
public II2cBus Bus5 { get; }
```
### Bus6
The `Meadow.Hardware.II2cBus` connected to SD6/SC6
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548A.cs#L99)
```csharp title="Declaration"
public II2cBus Bus6 { get; }
```
### Bus7
The `Meadow.Hardware.II2cBus` connected to SD7/SC7
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548A.cs#L104)
```csharp title="Declaration"
public II2cBus Bus7 { get; }
```
## Methods
### Write(Span&lt;byte&gt;)
Write an array of bytes to the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548A.cs#L131)
```csharp title="Declaration"
public void Write(Span<byte> data)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Span<System.Byte>` | *data* | Values to be written |

### WriteRegister(byte, uint, ByteOrder)
Write an unsigned integer to the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548A.cs#L142)
```csharp title="Declaration"
public void WriteRegister(byte address, uint value, ByteOrder order = ByteOrder.LittleEndian)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *address* | Address to write the first byte to |
| `System.UInt32` | *value* | Value to be written |
| `Meadow.ByteOrder` | *order* | Indicate if the data should be written as big or little endian |

### WriteRegister(byte, ulong, ByteOrder)
Write an unsigned long to the peripheral.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548A.cs#L153)
```csharp title="Declaration"
public void WriteRegister(byte address, ulong value, ByteOrder order = ByteOrder.LittleEndian)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *address* | Address to write the first byte to |
| `System.UInt64` | *value* | Value to be written |
| `Meadow.ByteOrder` | *order* | Indicate if the data should be written as big or little endian |

### Write(byte)
Write a single byte to the peripheral.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548A.cs#L162)
```csharp title="Declaration"
public void Write(byte value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *value* | Value to be written (8-bits) |

### WriteRegister(byte, ushort, ByteOrder)
Write an unsigned short to the peripheral.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548A.cs#L173)
```csharp title="Declaration"
public void WriteRegister(byte address, ushort value, ByteOrder order = ByteOrder.LittleEndian)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *address* | Address to write the first byte to |
| `System.UInt16` | *value* | Value to be written (16-bits) |
| `Meadow.ByteOrder` | *order* | Indicate if the data should be written as big or little endian |

### WriteRegister(byte, byte)
Write data to a register in the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548A.cs#L185)
```csharp title="Declaration"
public void WriteRegister(byte address, byte value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *address* | Address of the register to write to |
| `System.Byte` | *value* | Data to write into the register |

### ReadBytes(ushort)
Read bytes from the I2cBus
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548A.cs#L194)
```csharp title="Declaration"
public byte[] ReadBytes(ushort numberOfBytes)
```

##### Returns

`System.Byte[]`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.UInt16` | *numberOfBytes* |

### ReadRegister(byte)
Read a register from the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548A.cs#L205)
```csharp title="Declaration"
public byte ReadRegister(byte address)
```

##### Returns

`System.Byte`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *address* | Address of the register to read. |

### ReadRegisterAsUShort(byte, ByteOrder)
Read an unsigned short from a register
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548A.cs#L215)
```csharp title="Declaration"
public ushort ReadRegisterAsUShort(byte address, ByteOrder order)
```

##### Returns

`System.UInt16`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *address* | Register address of the low byte (the high byte will follow). |
| `Meadow.ByteOrder` | *order* | Order of the bytes in the register (little endian is the default). |

### Read(Span&lt;byte&gt;)
Reads data from the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548A.cs#L225)
```csharp title="Declaration"
public void Read(Span<byte> readBuffer)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Span<System.Byte>` | *readBuffer* |


##### Exceptions

`System.NotImplementedException`  

### ReadRegister(byte, Span&lt;byte&gt;)
Reads data from the peripheral starting at the specified address
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548A.cs#L235)
```csharp title="Declaration"
public void ReadRegister(byte address, Span<byte> readBuffer)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *address* |
| `System.Span<System.Byte>` | *readBuffer* |

### WriteRegister(byte, Span&lt;byte&gt;, ByteOrder)
Write data to a register in the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548A.cs#L246)
```csharp title="Declaration"
public void WriteRegister(byte address, Span<byte> writeBuffer, ByteOrder order = ByteOrder.LittleEndian)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *address* | Address of the register to write to |
| `System.Span<System.Byte>` | *writeBuffer* | A buffer of byte values to be written |
| `Meadow.ByteOrder` | *order* | Indicate if the data should be written as big or little endian |

### Exchange(Span&lt;byte&gt;, Span&lt;byte&gt;, DuplexType)
Write data to followed by read data from the peripheral.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.TCA9548A/Driver/Tca9548A.cs#L257)
```csharp title="Declaration"
public void Exchange(Span<byte> writeBuffer, Span<byte> readBuffer, DuplexType duplex)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Span<System.Byte>` | *writeBuffer* | Data to write |
| `System.Span<System.Byte>` | *readBuffer* | Buffer where read data will be written. Number of bytes read is determined by buffer size. |
| `Meadow.Hardware.DuplexType` | *duplex* | Whether the communication will happen in a half-duplex or full-duplex fashion. |


## Implements

* `Meadow.Hardware.II2cCommunications`
* `Meadow.Hardware.IByteCommunications`
