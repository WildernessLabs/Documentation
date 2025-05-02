---
title: Class Exo
sidebar_label: Exo
description: >-
  Represents a YSI EXO multiparameter water quality sonde with Modbus RTU
  communication.
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.Ysi/Exo
---
# Class Exo
Represents a YSI EXO multiparameter water quality sonde with Modbus RTU communication.

###### **Assembly**: Ysi.Exo.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/Exo.ParameterStatus.cs#L3)
```csharp title="Declaration"
public class Exo
```
## Properties
### Address
Gets the Modbus address of the EXO device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/Exo.cs#L28)
```csharp title="Declaration"
public byte Address { get; }
```
## Fields
### DefaultModbusAddress
The default Modbus address for EXO devices.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/Exo.cs#L16)
```csharp title="Declaration"
public const byte DefaultModbusAddress = 1
```
### DefaultBaudRate
The default baud rate for communication with EXO devices.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/Exo.cs#L21)
```csharp title="Declaration"
public const int DefaultBaudRate = 9600
```
## Methods
### SetSamplePeriod(TimeSpan)
Sets the sample period for the EXO device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/Exo.cs#L48)
```csharp title="Declaration"
public Task SetSamplePeriod(TimeSpan period)
```

##### Returns

`System.Threading.Tasks.Task`: A task representing the asynchronous operation.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.TimeSpan` | *period* | The time period between automatic samples. |

### ForceSample()
Forces the EXO device to immediately take a sample.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/Exo.cs#L60)
```csharp title="Declaration"
public Task ForceSample()
```

##### Returns

`System.Threading.Tasks.Task`: A task representing the asynchronous operation.### ForceWipe()
Forces the EXO device to perform a wipe operation on its sensors.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/Exo.cs#L72)
```csharp title="Declaration"
public Task ForceWipe()
```

##### Returns

`System.Threading.Tasks.Task`: A task representing the asynchronous operation.### GetSamplePeriod()
Gets the current sample period from the EXO device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/Exo.cs#L84)
```csharp title="Declaration"
public Task<TimeSpan> GetSamplePeriod()
```

##### Returns

`System.Threading.Tasks.Task<System.TimeSpan>`: A task representing the asynchronous operation that returns the sample period as a TimeSpan.### GetParametersToRead()
Gets the parameter codes that are currently configured to be read from the EXO device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/Exo.cs#L98)
```csharp title="Declaration"
public Task<ParameterCode[]> GetParametersToRead()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Foundation.Sensors.Environmental.Ysi.ParameterCode[]>`: A task representing the asynchronous operation that returns an array of parameter codes.### GetCurrentData()
Gets the current sensor data from the EXO device for all configured parameters.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/Exo.cs#L119)
```csharp title="Declaration"
public Task<(ParameterCode ParameterCode, object Value)[]> GetCurrentData()
```

##### Returns

`System.Threading.Tasks.Task<System.ValueTuple<Meadow.Foundation.Sensors.Environmental.Ysi.ParameterCode,System.Object>[]>`: A task representing the asynchronous operation that returns an array of tuples containing parameter codes and their corresponding values.### SetParametersToRead(ParameterCode[])
Sets the parameters to read from the EXO device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/Exo.cs#L149)
```csharp title="Declaration"
public Task SetParametersToRead(ParameterCode[] parameters)
```

##### Returns

`System.Threading.Tasks.Task`: A task representing the asynchronous operation.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Foundation.Sensors.Environmental.Ysi.ParameterCode[]` | *parameters* | An array of parameter codes to read. Maximum of 32 parameters. |


##### Exceptions

`System.ArgumentOutOfRangeException`  
Thrown when more than 32 parameters are specified.
### GetParameterStatus()
Gets the status of all parameters from the EXO device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/Exo.cs#L173)
```csharp title="Declaration"
public Task<Exo.ParameterStatus[]> GetParameterStatus()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Foundation.Sensors.Environmental.Ysi.Exo.ParameterStatus[]>`: A task representing the asynchronous operation that returns an array of parameter status values.
