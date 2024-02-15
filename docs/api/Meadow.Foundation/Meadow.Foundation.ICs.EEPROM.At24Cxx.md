---
uid: Meadow.Foundation.ICs.EEPROM.At24Cxx
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.EEPROM.At24Cxx
---

| At24Cxx | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.EEPROM.At24Cxx) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.EEPROM.At24Cxx/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.EEPROM.At24Cxx/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.EEPROM.At24Cxx.svg?label=Meadow.Foundation.ICs.EEPROM.At24Cxx" alt="NuGet Gallery for Meadow.Foundation.ICs.EEPROM.At24Cxx" /></a> |

The **AT24Cxx** series of chips provide a mechanism for storing data that will survive a power outage or battery failure.  These EEPROMs are available in varying sizes and are accessible using the I2C interface.

### Code Example

```csharp
At24Cxx eeprom;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    //256kbit = 256*1024 bits = 262144 bits = 262144 / 8 bytes = 32768 bytes
    //if you're using the ZS-042 board, it has an AT24C32 and uses the default value of 8192
    eeprom = new At24Cxx(i2cBus: Device.CreateI2cBus(), memorySize: 32768);

    return base.Initialize();
}

public override Task Run()
{
    Resolver.Log.Info("Write to eeprom");
    eeprom.Write(0, new byte[] { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 });

    Resolver.Log.Info("Read from eeprom");
    var memory = eeprom.Read(0, 16);

    for (ushort index = 0; index < 16; index++)
    {
        Thread.Sleep(50);
        Resolver.Log.Info("Byte: " + index + ", Value: " + memory[index]);
    }

    eeprom.Write(3, new byte[] { 10 });
    eeprom.Write(7, new byte[] { 1, 2, 3, 4 });
    memory = eeprom.Read(0, 16);

    for (ushort index = 0; index < 16; index++)
    {
        Thread.Sleep(50);
        Resolver.Log.Info("Byte: " + index + ", Value: " + memory[index]);
    }

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.EEPROM.At24Cxx/Samples/At24Cxx_Sample)

### Wiring Example

To wire a At24Cxx to your Meadow board, connect the following:

| At24Cxx | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| SCL     | D08 (SCL)   |
| SDA     | D07 (SDA)   |
| VCC     | 3V3         |

It should look like the following diagram:

<img src="/API_Assets/Meadow.Foundation.ICs.EEPROM.AT24Cxx/AT24Cxx_Fritzing.png" />





# Class At24Cxx
Encapsulation for EEPROMs based upon the AT24Cxx family of chips

###### **Assembly**: At24Cxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.EEPROM.At24Cxx/Driver/At24Cxx.Enums.cs#L3)
```csharp title="Declaration"
public class At24Cxx : II2cPeripheral
```
**Implements:**  
`Meadow.Hardware.II2cPeripheral`

## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.EEPROM.At24Cxx/Driver/At24Cxx.cs#L15)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### PageSize
Number of bytes in a page
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.EEPROM.At24Cxx/Driver/At24Cxx.cs#L25)
```csharp title="Declaration"
public ushort PageSize { get; }
```
### MemorySize
Number of bytes in the EEPROM module
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.EEPROM.At24Cxx/Driver/At24Cxx.cs#L30)
```csharp title="Declaration"
public ushort MemorySize { get; }
```
## Fields
### i2cComms
I2C Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.EEPROM.At24Cxx/Driver/At24Cxx.cs#L20)
```csharp title="Declaration"
protected readonly II2cCommunications i2cComms
```
## Methods
### Read(ushort, ushort)
Force the sensor to make a reading and update the relevant properties.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.EEPROM.At24Cxx/Driver/At24Cxx.cs#L81)
```csharp title="Declaration"
public byte[] Read(ushort startAddress, ushort amount)
```

##### Returns

`System.Byte[]`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.UInt16` | *startAddress* | Start address for the read operation. |
| `System.UInt16` | *amount* | Amount of data to read from the EEPROM. |

### Write(ushort, params byte[])
Write a number of bytes to the EEPROM.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.EEPROM.At24Cxx/Driver/At24Cxx.cs#L101)
```csharp title="Declaration"
public void Write(ushort startAddress, params byte[] data)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.UInt16` | *startAddress* | Address of he first byte to be written. |
| `System.Byte[]` | *data* | Data to be written to the EEPROM. |


## Implements

* `Meadow.Hardware.II2cPeripheral`
