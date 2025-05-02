---
title: Class KellerTransducer
sidebar_label: KellerTransducer
description: >-
  Represents a Keller pressure transducer or transmitter that communicates via
  Modbus RTU.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental/KellerTransducer
---
# Class KellerTransducer
Represents a Keller pressure transducer or transmitter that communicates via Modbus RTU.

###### **Assembly**: Keller.XLine.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Keller.XLine/Driver/Drivers/KellerTransducer.cs#L16)
```csharp title="Declaration"
public class KellerTransducer : IKellerTransducer
```
**Implements:**  
[Meadow.Foundation.Sensors.Environmental.IKellerTransducer](../Meadow.Foundation.Sensors.Environmental/IKellerTransducer)

## Fields
### DefaultModbusAddress
The default Modbus address for the device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Keller.XLine/Driver/Drivers/KellerTransducer.cs#L26)
```csharp title="Declaration"
public const int DefaultModbusAddress = 1
```
### DefaultBaudRate
The default baud rate for communication with the device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Keller.XLine/Driver/Drivers/KellerTransducer.cs#L31)
```csharp title="Declaration"
public const int DefaultBaudRate = 9600
```
## Methods
### ReadModbusAddress()
Reads the device's Modbus Address.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Keller.XLine/Driver/Drivers/KellerTransducer.cs#L73)
```csharp title="Declaration"
public Task<byte> ReadModbusAddress()
```

##### Returns

`System.Threading.Tasks.Task<System.Byte>`
### ReadSerialNumber()
Reads the serial number of the device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Keller.XLine/Driver/Drivers/KellerTransducer.cs#L80)
```csharp title="Declaration"
public Task<int> ReadSerialNumber()
```

##### Returns

`System.Threading.Tasks.Task<System.Int32>`: A task that represents the asynchronous operation. The value is the device's serial number.### ReadTemperature(TemperatureChannel)
Reads the temperature from the specified temperature channel.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Keller.XLine/Driver/Drivers/KellerTransducer.cs#L92)
```csharp title="Declaration"
public Task<Temperature> ReadTemperature(TemperatureChannel channel)
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Temperature>`: A task that represents the asynchronous operation. The value is the temperature reading.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Environmental.TemperatureChannel](../Meadow.Foundation.Sensors.Environmental/TemperatureChannel) | *channel* | The temperature channel to read from. |

### ReadPressure(PressureChannel)
Reads the pressure from the specified pressure channel.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Keller.XLine/Driver/Drivers/KellerTransducer.cs#L118)
```csharp title="Declaration"
public Task<Pressure> ReadPressure(PressureChannel channel)
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Pressure>`: A task that represents the asynchronous operation. The value is the pressure reading.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Environmental.PressureChannel](../Meadow.Foundation.Sensors.Environmental/PressureChannel) | *channel* | The pressure channel to read from. |


## Implements

* [Meadow.Foundation.Sensors.Environmental.IKellerTransducer](../Meadow.Foundation.Sensors.Environmental/IKellerTransducer)
