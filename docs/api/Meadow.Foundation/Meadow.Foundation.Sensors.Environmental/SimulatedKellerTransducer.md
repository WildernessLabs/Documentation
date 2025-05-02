---
title: Class SimulatedKellerTransducer
sidebar_label: SimulatedKellerTransducer
description: >-
  Simulated implementation of the IKellerTransducer interface. This class
  provides mock functionality for testing or development purposes without
  hardware.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental/SimulatedKellerTransducer
---
# Class SimulatedKellerTransducer
Simulated implementation of the IKellerTransducer interface.
This class provides mock functionality for testing or development purposes without hardware.

###### **Assembly**: Keller.XLine.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Keller.XLine/Driver/Drivers/SimulatedKellerTransducer.cs#L10)
```csharp title="Declaration"
public class SimulatedKellerTransducer : IKellerTransducer
```
**Implements:**  
[Meadow.Foundation.Sensors.Environmental.IKellerTransducer](../Meadow.Foundation.Sensors.Environmental/IKellerTransducer)

## Methods
### ReadModbusAddress()
Reads the Modbus address of the transducer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Keller.XLine/Driver/Drivers/SimulatedKellerTransducer.cs#L17)
```csharp title="Declaration"
public Task<byte> ReadModbusAddress()
```

##### Returns

`System.Threading.Tasks.Task<System.Byte>`: A task that represents the asynchronous operation. 
    The task result contains the Modbus address as a byte.### ReadPressure(PressureChannel)
Reads the pressure from the specified channel.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Keller.XLine/Driver/Drivers/SimulatedKellerTransducer.cs#L28)
```csharp title="Declaration"
public Task<Pressure> ReadPressure(PressureChannel channel)
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Pressure>`: A task that represents the asynchronous operation. 
    The task result contains the pressure as a `Meadow.Units.Pressure` object.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Environmental.PressureChannel](../Meadow.Foundation.Sensors.Environmental/PressureChannel) | *channel* | The pressure channel to read from. |

### ReadSerialNumber()
Reads the serial number of the transducer.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Keller.XLine/Driver/Drivers/SimulatedKellerTransducer.cs#L38)
```csharp title="Declaration"
public Task<int> ReadSerialNumber()
```

##### Returns

`System.Threading.Tasks.Task<System.Int32>`: A task that represents the asynchronous operation. 
    The task result contains the serial number as an integer.### ReadTemperature(TemperatureChannel)
Reads the temperature from the specified channel.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Keller.XLine/Driver/Drivers/SimulatedKellerTransducer.cs#L49)
```csharp title="Declaration"
public Task<Temperature> ReadTemperature(TemperatureChannel channel)
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Units.Temperature>`: A task that represents the asynchronous operation. 
    The task result contains the temperature as a `Meadow.Units.Temperature` object.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.Sensors.Environmental.TemperatureChannel](../Meadow.Foundation.Sensors.Environmental/TemperatureChannel) | *channel* | The temperature channel to read from. |


## Implements

* [Meadow.Foundation.Sensors.Environmental.IKellerTransducer](../Meadow.Foundation.Sensors.Environmental/IKellerTransducer)
