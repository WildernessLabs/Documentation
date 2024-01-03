---
title: Class SerialWombatBase
sidebar_label: SerialWombatBase
description: "SerialWombat base class"
---
# Class SerialWombatBase
SerialWombat base class

###### **Assembly**: SerialWombat.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.SwPin.cs#L3)
```csharp title="Declaration"
public abstract class SerialWombatBase : IDigitalInputOutputController, IDigitalInputController, IDigitalOutputController, IPwmOutputController, IAnalogInputController, IPinController, II2cPeripheral
```
**Derived:**  
[Meadow.Foundation.ICs.IOExpanders.Sw18AB](../Meadow.Foundation.ICs.IOExpanders/Sw18AB)

**Implements:**  
`Meadow.Hardware.IDigitalInputOutputController`, `Meadow.Hardware.IDigitalInputController`, `Meadow.Hardware.IDigitalOutputController`, `Meadow.Hardware.IPwmOutputController`, `Meadow.Hardware.IAnalogInputController`, `Meadow.Hardware.IPinController`, `Meadow.Hardware.II2cPeripheral`

## Properties
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L23)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### I2cAddress
The current I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L28)
```csharp title="Declaration"
public SerialWombatBase.Addresses I2cAddress { get; }
```
### SyncRoot
The sync root object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L33)
```csharp title="Declaration"
protected object SyncRoot { get; }
```
### Logger
Logger object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L38)
```csharp title="Declaration"
protected Logger? Logger { get; }
```
### Pins
The pins
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L53)
```csharp title="Declaration"
public SerialWombatBase.PinDefinitions Pins { get; }
```
### Version
The version
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L66)
```csharp title="Declaration"
public WombatVersion Version { get; }
```
### Info
Serial Wombat info
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L90)
```csharp title="Declaration"
public WombatInfo Info { get; }
```
### Uuid
Serial Wombat GUID
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L115)
```csharp title="Declaration"
public Guid Uuid { get; }
```
## Methods
### SendPacket(Span&lt;byte&gt;, Span&lt;byte&gt;)
Send a packet of data
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L58)
```csharp title="Declaration"
protected void SendPacket(Span<byte> tx, Span<byte> rx)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Span<System.Byte>` | *tx* |
| `System.Span<System.Byte>` | *rx* |

### SendCommand(in Span&lt;byte&gt;)
Send a command
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L144)
```csharp title="Declaration"
protected byte[] SendCommand(in Span<byte> command)
```

##### Returns

`System.Byte[]`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Span<System.Byte>` | *command* |

### ReadPublicData(SwPin)
Read public data from a pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L165)
```csharp title="Declaration"
protected ushort ReadPublicData(SerialWombatBase.SwPin pin)
```

##### Returns

`System.UInt16`: The data as a ushort
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Foundation.ICs.IOExpanders.SerialWombatBase.SwPin](../Meadow.Foundation.ICs.IOExpanders/SerialWombatBase.SwPin) | *pin* | The serial wombat pin to read |

### ReadPublicData(IPin)
Read public data from a pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L175)
```csharp title="Declaration"
protected ushort ReadPublicData(IPin pin)
```

##### Returns

`System.UInt16`: The data as a ushort
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* | The pin to read |

### ReadPublicData(byte)
Read public data from a pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L185)
```csharp title="Declaration"
protected ushort ReadPublicData(byte pin)
```

##### Returns

`System.UInt16`: The data as a ushort
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *pin* | The pin to read as a byte ID |

### WritePublicData(SwPin, ushort)
Write public data to a pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L196)
```csharp title="Declaration"
protected ushort WritePublicData(SerialWombatBase.SwPin pin, ushort data)
```

##### Returns

`System.UInt16`

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Foundation.ICs.IOExpanders.SerialWombatBase.SwPin](../Meadow.Foundation.ICs.IOExpanders/SerialWombatBase.SwPin) | *pin* |
| `System.UInt16` | *data* |

### WritePublicData(byte, ushort)
Write public data to a pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L204)
```csharp title="Declaration"
protected ushort WritePublicData(byte pin, ushort data)
```

##### Returns

`System.UInt16`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *pin* |
| `System.UInt16` | *data* |

### ReadFlash(FlashRegister18)
Read data from flash
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L217)
```csharp title="Declaration"
protected uint ReadFlash(SerialWombatBase.FlashRegister18 register)
```

##### Returns

`System.UInt32`

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Foundation.ICs.IOExpanders.SerialWombatBase.FlashRegister18](../Meadow.Foundation.ICs.IOExpanders/SerialWombatBase.FlashRegister18) | *register* |

### ReadFlash(uint)
Read data from flash
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L225)
```csharp title="Declaration"
protected uint ReadFlash(uint address)
```

##### Returns

`System.UInt32`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.UInt32` | *address* |

### ConfigureOutputPin(byte, bool, OutputType)
Configure the state and type for a pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L239)
```csharp title="Declaration"
protected void ConfigureOutputPin(byte pin, bool state, OutputType type = OutputType.PushPull)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *pin* |
| `System.Boolean` | *state* |
| `Meadow.Hardware.OutputType` | *type* |

### ConfigureInputPin(byte, ResistorMode)
Configure the resistor mode for a pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L255)
```csharp title="Declaration"
protected void ConfigureInputPin(byte pin, ResistorMode mode)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *pin* |
| `Meadow.Hardware.ResistorMode` | *mode* |

### ConfigurePwm(byte, float, bool)
Configure the PWM parameters for a PWM pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L271)
```csharp title="Declaration"
protected void ConfigurePwm(byte pin, float dutyCycle, bool inverted)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *pin* |
| `System.Single` | *dutyCycle* |
| `System.Boolean` | *inverted* |

### ConfigurePwmDutyCycle(byte, float)
Configure the PWM duty cycle for a PWM pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L290)
```csharp title="Declaration"
protected void ConfigurePwmDutyCycle(byte pin, float dutyCycle)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *pin* |
| `System.Single` | *dutyCycle* |

### ConfigurePwm(byte, Frequency)
Configure the frequency cycle for a PWM pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L308)
```csharp title="Declaration"
protected void ConfigurePwm(byte pin, Frequency frequency)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *pin* |
| `Meadow.Units.Frequency` | *frequency* |

### ConfigurePwm(byte, uint)
Configure the period cycle for a PWM pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L317)
```csharp title="Declaration"
protected void ConfigurePwm(byte pin, uint periodMicroseconds)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *pin* |
| `System.UInt32` | *periodMicroseconds* |

### ConfigureAnalogInput(byte, ushort, ushort)
Configure an analog input pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L333)
```csharp title="Declaration"
protected void ConfigureAnalogInput(byte pin, ushort sampleCount = 64, ushort iirFilterConstant = 65408)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Byte` | *pin* |
| `System.UInt16` | *sampleCount* |
| `System.UInt16` | *iirFilterConstant* |

### ConfigureUltrasonicSensor(IPin, IPin, bool)
Configure an ultrasonic pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L359)
```csharp title="Declaration"
protected void ConfigureUltrasonicSensor(IPin trigger, IPin echo, bool autoTrigger = true)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Hardware.IPin` | *trigger* |
| `Meadow.Hardware.IPin` | *echo* |
| `System.Boolean` | *autoTrigger* |

### ReadUltrasonicSensorPulses(IPin)
Read pulses from an ultrasonic sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L375)
```csharp title="Declaration"
protected ushort ReadUltrasonicSensorPulses(IPin echo)
```

##### Returns

`System.UInt16`

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Hardware.IPin` | *echo* |

### ManualTriggerUltrasonicSensor(IPin)
Manually trigger an ultra sonic sensor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L388)
```csharp title="Declaration"
protected void ManualTriggerUltrasonicSensor(IPin echo)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Hardware.IPin` | *echo* |

### GetSupplyVoltage()
Get supply voltage
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L403)
```csharp title="Declaration"
public Voltage GetSupplyVoltage()
```

##### Returns

`Meadow.Units.Voltage`
### GetTemperature()
Get Temperature
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L412)
```csharp title="Declaration"
public Temperature GetTemperature()
```

##### Returns

`Meadow.Units.Temperature`
### CreateDigitalOutputPort(IPin, bool, OutputType)
Create a digital output port for a pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L421)
```csharp title="Declaration"
public IDigitalOutputPort CreateDigitalOutputPort(IPin pin, bool initialState = false, OutputType outputType = OutputType.PushPull)
```

##### Returns

`Meadow.Hardware.IDigitalOutputPort`

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* |
| `System.Boolean` | *initialState* |
| `Meadow.Hardware.OutputType` | *outputType* |

### CreateDigitalInputPort(IPin, ResistorMode)
Create a digital input port for a pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L429)
```csharp title="Declaration"
public IDigitalInputPort CreateDigitalInputPort(IPin pin, ResistorMode resistorMode = ResistorMode.Disabled)
```

##### Returns

`Meadow.Hardware.IDigitalInputPort`

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* |
| `Meadow.Hardware.ResistorMode` | *resistorMode* |

### CreateDigitalInputPort(IPin)
Create a digital input port for a pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L437)
```csharp title="Declaration"
public IDigitalInputPort CreateDigitalInputPort(IPin pin)
```

##### Returns

`Meadow.Hardware.IDigitalInputPort`

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* |

### CreatePwmPort(IPin, Frequency, float, bool)
Create a PWM port for a pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L445)
```csharp title="Declaration"
public IPwmPort CreatePwmPort(IPin pin, Frequency frequency, float dutyCycle = 0.5, bool invert = false)
```

##### Returns

`Meadow.Hardware.IPwmPort`

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* |
| `Meadow.Units.Frequency` | *frequency* |
| `System.Single` | *dutyCycle* |
| `System.Boolean` | *invert* |

### CreateAnalogInputPort(IPin, int)
Create an analog input port for a pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L457)
```csharp title="Declaration"
public IAnalogInputPort CreateAnalogInputPort(IPin pin, int sampleCount = 64)
```

##### Returns

`Meadow.Hardware.IAnalogInputPort`

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* |
| `System.Int32` | *sampleCount* |

### CreateAnalogInputPort(IPin, int, TimeSpan, Voltage)
Create an analog input port for a pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L465)
```csharp title="Declaration"
public IAnalogInputPort CreateAnalogInputPort(IPin pin, int sampleCount, TimeSpan sampleInterval, Voltage voltageReference)
```

##### Returns

`Meadow.Hardware.IAnalogInputPort`

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* |
| `System.Int32` | *sampleCount* |
| `System.TimeSpan` | *sampleInterval* |
| `Meadow.Units.Voltage` | *voltageReference* |

### CreateAnalogInputArray(params IPin[])
Creates an IAnalogInputArray instance from the specified set of pins
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L475)
```csharp title="Declaration"
public IAnalogInputArray CreateAnalogInputArray(params IPin[] pins)
```

##### Returns

`Meadow.Hardware.IAnalogInputArray`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin[]` | *pins* | The pins to use for the IAnalogInputArray |

### CreateDistanceSensor(IPin, IPin)
Create a distance sensor for a pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L483)
```csharp title="Declaration"
public IRangeFinder CreateDistanceSensor(IPin trigger, IPin echo)
```

##### Returns

`Meadow.Peripherals.Sensors.Distance.IRangeFinder`

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Hardware.IPin` | *trigger* |
| `Meadow.Hardware.IPin` | *echo* |

### CreateDistanceSensor(IPin, IPin, TimeSpan)
Create a distance sensor for a pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L491)
```csharp title="Declaration"
public IRangeFinder CreateDistanceSensor(IPin trigger, IPin echo, TimeSpan readPeriod)
```

##### Returns

`Meadow.Peripherals.Sensors.Distance.IRangeFinder`

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Hardware.IPin` | *trigger* |
| `Meadow.Hardware.IPin` | *echo* |
| `System.TimeSpan` | *readPeriod* |

### CreateServo(IPin)
Create a servo for a pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.SerialWombat/Driver/SerialWombatBase.cs#L499)
```csharp title="Declaration"
public IServo CreateServo(IPin pin)
```

##### Returns

[Meadow.Foundation.Servos.IServo](../Meadow.Foundation.Servos/IServo)

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* |


## Implements

* `Meadow.Hardware.IDigitalInputOutputController`
* `Meadow.Hardware.IDigitalInputController`
* `Meadow.Hardware.IDigitalOutputController`
* `Meadow.Hardware.IPwmOutputController`
* `Meadow.Hardware.IAnalogInputController`
* `Meadow.Hardware.IPinController`
* `Meadow.Hardware.II2cPeripheral`
