---
title: Class BLD510B
sidebar_label: BLD510B
description: 'Represents the BLD510B motor controller, a Modbus-controlled device.'
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.MotorControllers.StepperOnline/BLD510B
---
# Class BLD510B
Represents the BLD510B motor controller, a Modbus-controlled device.

###### **Assembly**: Motors.StepperOnline.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L11)
```csharp title="Declaration"
public class BLD510B : ModbusPolledDevice
```
**Inheritance:** `System.Object` -> `Meadow.Modbus.ModbusPolledDevice`

## Properties
### ErrorConditions
Gets the current error conditions for this controller.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L463)
```csharp title="Declaration"
public ErrorConditions ErrorConditions { get; }
```
## Fields
### DefaultModbusAddress
The default Modbus address for the V10x device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L24)
```csharp title="Declaration"
public const int DefaultModbusAddress = 1
```
### DefaultBaudRate
The default baud rate for communication with the V10x device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L29)
```csharp title="Declaration"
public const int DefaultBaudRate = 9600
```
## Methods
### GetStartStopTerminal()
Gets the status of the start/stop terminal.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L55)
```csharp title="Declaration"
public Task<bool> GetStartStopTerminal()
```

##### Returns

`System.Threading.Tasks.Task<System.Boolean>`: A `System.Threading.Tasks.Task%601` that represents the asynchronous operation.
The result contains a boolean indicating the terminal status.### SetStartStopTerminal(bool)
Sets the status of the start/stop terminal.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L66)
```csharp title="Declaration"
public Task SetStartStopTerminal(bool startEnabled)
```

##### Returns

`System.Threading.Tasks.Task`: A `System.Threading.Tasks.Task` that represents the asynchronous operation.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *startEnabled* | True to enable start; otherwise, false. |

### GetDirectionTerminal()
Gets the rotation direction from the direction terminal.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L89)
```csharp title="Declaration"
public Task<RotationDirection> GetDirectionTerminal()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Peripherals.RotationDirection>`: A `System.Threading.Tasks.Task%601` that represents the asynchronous operation.
The result contains the `Meadow.Peripherals.RotationDirection`.### SetDirectionTerminal(RotationDirection)
Sets the rotation direction for the direction terminal.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L100)
```csharp title="Declaration"
public Task SetDirectionTerminal(RotationDirection direction)
```

##### Returns

`System.Threading.Tasks.Task`: A `System.Threading.Tasks.Task` that represents the asynchronous operation.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Peripherals.RotationDirection` | *direction* | The desired `Meadow.Peripherals.RotationDirection`. |

### GetBrakeTerminal()
Gets the state of the brake terminal.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L123)
```csharp title="Declaration"
public Task<bool> GetBrakeTerminal()
```

##### Returns

`System.Threading.Tasks.Task<System.Boolean>`: A `System.Threading.Tasks.Task%601` that represents the asynchronous operation.
The result contains a boolean indicating the brake status.### SetBrakeTerminal(bool)
Sets the brake terminal state.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L134)
```csharp title="Declaration"
public Task SetBrakeTerminal(bool brakeEnabled)
```

##### Returns

`System.Threading.Tasks.Task`: A `System.Threading.Tasks.Task` that represents the asynchronous operation.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *brakeEnabled* | True to enable brake; otherwise, false. |

### GetSpeedControl()
Gets the current speed control mode (RS485 or Analog Pot).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L157)
```csharp title="Declaration"
public Task<SpeedControl> GetSpeedControl()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Foundation.MotorControllers.StepperOnline.SpeedControl>`: A `System.Threading.Tasks.Task%601` that represents the asynchronous operation.
The result is a [Meadow.Foundation.MotorControllers.StepperOnline.SpeedControl](../Meadow.Foundation.MotorControllers.StepperOnline/SpeedControl) enum value.### SetSpeedControl(SpeedControl)
Sets the speed control mode (RS485 or Analog Pot).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L168)
```csharp title="Declaration"
public Task SetSpeedControl(SpeedControl speedControl)
```

##### Returns

`System.Threading.Tasks.Task`: A `System.Threading.Tasks.Task` that represents the asynchronous operation.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.MotorControllers.StepperOnline.SpeedControl](../Meadow.Foundation.MotorControllers.StepperOnline/SpeedControl) | *speedControl* | The desired [Meadow.Foundation.MotorControllers.StepperOnline.SpeedControl](../Meadow.Foundation.MotorControllers.StepperOnline/SpeedControl) mode. |

### GetNumberOfMotorPolePairs()
Gets the configured number of motor pole pairs.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L191)
```csharp title="Declaration"
public Task<byte> GetNumberOfMotorPolePairs()
```

##### Returns

`System.Threading.Tasks.Task<System.Byte>`: A `System.Threading.Tasks.Task%601` that represents the asynchronous operation.
The result is the number of motor pole pairs.### SetNumberOfMotorPolePairs(byte)
Sets the number of motor pole pairs.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L202)
```csharp title="Declaration"
public Task SetNumberOfMotorPolePairs(byte numberOfMotorPolePairs)
```

##### Returns

`System.Threading.Tasks.Task`: A `System.Threading.Tasks.Task` representing the asynchronous operation.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *numberOfMotorPolePairs* | The number of pole pairs to configure. |

### GetStartupTorque()
Gets the configured startup torque.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L219)
```csharp title="Declaration"
public Task<byte> GetStartupTorque()
```

##### Returns

`System.Threading.Tasks.Task<System.Byte>`: A `System.Threading.Tasks.Task%601` that represents the asynchronous operation.
The result is the startup torque value (0-255).### SetStartupTorque(byte)
Sets the configured startup torque.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L230)
```csharp title="Declaration"
public Task SetStartupTorque(byte value)
```

##### Returns

`System.Threading.Tasks.Task`: A `System.Threading.Tasks.Task` representing the asynchronous operation.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *value* | The startup torque (0-255). |

### GetStartupSpeed()
Gets the configured startup speed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L245)
```csharp title="Declaration"
public Task<byte> GetStartupSpeed()
```

##### Returns

`System.Threading.Tasks.Task<System.Byte>`: A `System.Threading.Tasks.Task%601` that represents the asynchronous operation.
The result is the startup speed value (0-255).### SetStartupSpeed(byte)
Sets the configured startup speed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L256)
```csharp title="Declaration"
public Task SetStartupSpeed(byte value)
```

##### Returns

`System.Threading.Tasks.Task`: A `System.Threading.Tasks.Task` representing the asynchronous operation.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *value* | The startup speed (0-255). |

### GetAccelerationTime()
Gets the configured acceleration time.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L271)
```csharp title="Declaration"
public Task<TimeSpan> GetAccelerationTime()
```

##### Returns

`System.Threading.Tasks.Task<System.TimeSpan>`: A `System.Threading.Tasks.Task%601` whose result is a `System.TimeSpan`
representing the time it takes to accelerate.### SetAccelerationTime(TimeSpan)
Sets the acceleration time.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L287)
```csharp title="Declaration"
public Task SetAccelerationTime(TimeSpan value)
```

##### Returns

`System.Threading.Tasks.Task`: A `System.Threading.Tasks.Task` representing the asynchronous operation.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.TimeSpan` | *value* | A `System.TimeSpan` (0-25.5 seconds) representing how long it takes to accelerate. |


##### Exceptions

`System.ArgumentOutOfRangeException`  
Thrown if the specified &lt;code class="paramref"&gt;value&lt;/code&gt; is out of the 0-25.5 second range.
### GetDecelerationTime()
Gets the configured deceleration time.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L306)
```csharp title="Declaration"
public Task<TimeSpan> GetDecelerationTime()
```

##### Returns

`System.Threading.Tasks.Task<System.TimeSpan>`: A `System.Threading.Tasks.Task%601` whose result is a `System.TimeSpan`
representing the time it takes to decelerate.### SetDecelerationTime(TimeSpan)
Sets the deceleration time.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L322)
```csharp title="Declaration"
public Task SetDecelerationTime(TimeSpan value)
```

##### Returns

`System.Threading.Tasks.Task`: A `System.Threading.Tasks.Task` representing the asynchronous operation.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.TimeSpan` | *value* | A `System.TimeSpan` (0-25.5 seconds) representing how long it takes to decelerate. |


##### Exceptions

`System.ArgumentOutOfRangeException`  
Thrown if the specified &lt;code class="paramref"&gt;value&lt;/code&gt; is out of the 0-25.5 second range.
### GetMaxCurrent()
Gets the configured maximum current limit.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L340)
```csharp title="Declaration"
public Task<byte> GetMaxCurrent()
```

##### Returns

`System.Threading.Tasks.Task<System.Byte>`: A `System.Threading.Tasks.Task%601` whose result is a byte representing the maximum current setting (0-255).### SetMaxCurrent(byte)
Sets the maximum current limit.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L351)
```csharp title="Declaration"
public Task SetMaxCurrent(byte value)
```

##### Returns

`System.Threading.Tasks.Task`: A `System.Threading.Tasks.Task` representing the asynchronous operation.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *value* | A byte (0-255) representing the maximum current setting. |

### GetMotorType()
Gets the configured motor type.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L366)
```csharp title="Declaration"
public Task<MotorType> GetMotorType()
```

##### Returns

`System.Threading.Tasks.Task<Meadow.Foundation.MotorControllers.StepperOnline.MotorType>`: A `System.Threading.Tasks.Task%601` whose result is the [Meadow.Foundation.MotorControllers.StepperOnline.MotorType](../Meadow.Foundation.MotorControllers.StepperOnline/MotorType) 
for the current motor configuration.### SetMotorType(MotorType)
Sets the motor type.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L377)
```csharp title="Declaration"
public Task SetMotorType(MotorType value)
```

##### Returns

`System.Threading.Tasks.Task`: A `System.Threading.Tasks.Task` representing the asynchronous operation.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.MotorControllers.StepperOnline.MotorType](../Meadow.Foundation.MotorControllers.StepperOnline/MotorType) | *value* | The [Meadow.Foundation.MotorControllers.StepperOnline.MotorType](../Meadow.Foundation.MotorControllers.StepperOnline/MotorType) to set. |

### GetDesiredSpeed()
Gets the desired speed when using RS485 control mode. 
Ignored when using analog control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L393)
```csharp title="Declaration"
public Task<ushort> GetDesiredSpeed()
```

##### Returns

`System.Threading.Tasks.Task<System.UInt16>`: A `System.Threading.Tasks.Task%601` whose result is a `System.UInt16` 
representing the desired speed setting.### SetDesiredSpeed(ushort)
Sets the desired speed when using RS485 control mode.
Ignored when using analog control mode.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L407)
```csharp title="Declaration"
public Task SetDesiredSpeed(ushort speed)
```

##### Returns

`System.Threading.Tasks.Task`: A `System.Threading.Tasks.Task` representing the asynchronous operation.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.UInt16` | *speed* | A `System.UInt16` representing the desired speed value. |

### GetModbusAddress()
Gets the Modbus address configured on the controller.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L420)
```csharp title="Declaration"
public Task<byte> GetModbusAddress()
```

##### Returns

`System.Threading.Tasks.Task<System.Byte>`: A `System.Threading.Tasks.Task%601` whose result is a `System.Byte` representing the current Modbus address.### SetModbusAddress(byte)
Sets the Modbus address for the controller.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L434)
```csharp title="Declaration"
public Task SetModbusAddress(byte value)
```

##### Returns

`System.Threading.Tasks.Task`: A `System.Threading.Tasks.Task` representing the asynchronous operation.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *value* | A `System.Byte` representing the new Modbus address (1-250). |


##### Exceptions

`System.ArgumentOutOfRangeException`  
Thrown if &lt;code class="paramref"&gt;value&lt;/code&gt; is out of the valid range (1-250).
### GetActualSpeed()
Gets the actual speed of the motor, as reported by the controller.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L447)
```csharp title="Declaration"
public Task<ushort> GetActualSpeed()
```

##### Returns

`System.Threading.Tasks.Task<System.UInt16>`: A `System.Threading.Tasks.Task%601` whose result is a `System.UInt16` 
representing the current actual speed.## Events
### ErrorConditionsChanged
Event triggered when the error conditions change.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Motors.StepperOnline/Driver/Controllers/BLD510B.cs#L16)
```csharp title="Declaration"
public event EventHandler<ErrorConditions>? ErrorConditionsChanged
```
##### Event Type
`System.EventHandler<Meadow.Foundation.MotorControllers.StepperOnline.ErrorConditions>`
