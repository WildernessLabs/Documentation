---
title: Class At24Cxx
sidebar_label: At24Cxx
description: "Encapsulation for EEPROMs based upon the AT24Cxx family of chips"
---
# Class At24Cxx
Encapsulation for EEPROMs based upon the AT24Cxx family of chips

###### **Assembly**: At24Cxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.EEPROM.At24Cxx/Driver/At24Cxx.Enums.cs#L3)
```csharp title="Declaration"
public class At24Cxx : II2cPeripheral
```
**Implements:**  
`Meadow.Hardware.II2cPeripheral`

## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.EEPROM.At24Cxx/Driver/At24Cxx.cs#L15)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### PageSize
Number of bytes in a page
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.EEPROM.At24Cxx/Driver/At24Cxx.cs#L25)
```csharp title="Declaration"
public ushort PageSize { get; }
```
### MemorySize
Number of bytes in the EEPROM module
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.EEPROM.At24Cxx/Driver/At24Cxx.cs#L30)
```csharp title="Declaration"
public ushort MemorySize { get; }
```
## Fields
### i2cComms
I2C Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.EEPROM.At24Cxx/Driver/At24Cxx.cs#L20)
```csharp title="Declaration"
protected readonly II2cCommunications i2cComms
```
## Methods
### Read(ushort, ushort)
Force the sensor to make a reading and update the relevant properties.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.EEPROM.At24Cxx/Driver/At24Cxx.cs#L81)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.EEPROM.At24Cxx/Driver/At24Cxx.cs#L101)
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
