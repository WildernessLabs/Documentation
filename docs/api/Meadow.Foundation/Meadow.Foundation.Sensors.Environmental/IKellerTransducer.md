---
title: Interface IKellerTransducer
sidebar_label: IKellerTransducer
description: Defines the interface for Keller pressure transducers and transmitters.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental/IKellerTransducer
---
# Interface IKellerTransducer
Defines the interface for Keller pressure transducers and transmitters.

###### **Assembly**: Keller.XLine.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Keller.XLine/Driver/IKellerTransducer.cs#L9)
```csharp title="Declaration"
public interface IKellerTransducer
```
## Methods
### ReadTemperature(TemperatureChannel)
Reads the temperature from the specified temperature channel.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Keller.XLine/Driver/IKellerTransducer.cs#L16)
```csharp title="Declaration"
Task<Temperature> ReadTemperature(TemperatureChannel channel)
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Temperature>`: A task that represents the asynchronous operation. The value is the temperature reading.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Environmental.TemperatureChannel](../Meadow.Foundation.Sensors.Environmental/TemperatureChannel) | *channel* | The temperature channel to read from. |

### ReadPressure(PressureChannel)
Reads the pressure from the specified pressure channel.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Keller.XLine/Driver/IKellerTransducer.cs#L23)
```csharp title="Declaration"
Task<Pressure> ReadPressure(PressureChannel channel)
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Pressure>`: A task that represents the asynchronous operation. The value is the pressure reading.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Environmental.PressureChannel](../Meadow.Foundation.Sensors.Environmental/PressureChannel) | *channel* | The pressure channel to read from. |

### ReadModbusAddress()
Reads the Modbus address of the device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Keller.XLine/Driver/IKellerTransducer.cs#L29)
```csharp title="Declaration"
Task<byte> ReadModbusAddress()
```

##### Returns

`System.Threading.Tasks.Task<System.Byte>`: A task that represents the asynchronous operation. The value is the Modbus address as a byte.### ReadSerialNumber()
Reads the serial number of the device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Keller.XLine/Driver/IKellerTransducer.cs#L35)
```csharp title="Declaration"
Task<int> ReadSerialNumber()
```

##### Returns

`System.Threading.Tasks.Task<System.Int32>`: A task that represents the asynchronous operation. The value is the device's serial number.
