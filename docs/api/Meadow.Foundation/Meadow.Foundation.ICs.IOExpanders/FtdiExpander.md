---
title: Class FtdiExpander
sidebar_label: FtdiExpander
description: Represents an FTDI expander.
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/FtdiExpander
---
# Class FtdiExpander
Represents an FTDI expander.

###### **Assembly**: Ft2xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.SpiBus.cs#L7)
```csharp title="Declaration"
public abstract class FtdiExpander : IDigitalInputOutputController, IDigitalInputController, ISpiController, IDigitalOutputController, II2cController, IPinController
```
**Derived:**  
[Meadow.Foundation.ICs.IOExpanders.Ft2232](../Meadow.Foundation.ICs.IOExpanders/Ft2232), [Meadow.Foundation.ICs.IOExpanders.Ft232h](../Meadow.Foundation.ICs.IOExpanders/Ft232h), [Meadow.Foundation.ICs.IOExpanders.Ft4232](../Meadow.Foundation.ICs.IOExpanders/Ft4232)

**Implements:**  
`Meadow.Hardware.IDigitalInputOutputController`, `Meadow.Hardware.IDigitalInputController`, `Meadow.Hardware.ISpiController`, `Meadow.Hardware.IDigitalOutputController`, `Meadow.Hardware.II2cController`, `Meadow.Hardware.IPinController`

## Properties
### Pins
The pins
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.cs#L39)
```csharp title="Declaration"
public FtdiExpander.PinDefinitions Pins { get; }
```
## Methods
### CreateI2cBus(int, I2cBusSpeed)
Creates an I2C bus instance for the default pins and the requested bus speed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.cs#L32)
```csharp title="Declaration"
public abstract II2cBus CreateI2cBus(int channel = 0, I2cBusSpeed busSpeed = I2cBusSpeed.Standard)
```

##### Returns

`Meadow.Hardware.II2cBus`: An instance of an I2cBus
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *channel* |  |
| `Meadow.Hardware.I2cBusSpeed` | *busSpeed* | The bus speed |

### CreateSpiBus(int, SpiClockConfiguration)

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.cs#L34)
```csharp title="Declaration"
public abstract ISpiBus CreateSpiBus(int channel, SpiClockConfiguration configuration)
```

##### Returns

`Meadow.Hardware.ISpiBus`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *channel* |
| `Meadow.Hardware.SpiClockConfiguration` | *configuration* |

### CreateDigitalOutputPort(IPin, bool, OutputType)
Creates an IDigitalOutputPort on the specified pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.cs#L238)
```csharp title="Declaration"
public IDigitalOutputPort CreateDigitalOutputPort(IPin pin, bool initialState = false, OutputType initialOutputType = OutputType.PushPull)
```

##### Returns

`Meadow.Hardware.IDigitalOutputPort`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* | The pin on which to create the port. |
| `System.Boolean` | *initialState* | The default initial state of the port,
    either `LOW` (`false`), or `HIGH` (`true`). |
| `Meadow.Hardware.OutputType` | *initialOutputType* | Whether the port is initially configured
    as PushPull or OpenDrain. PushPull by default. |

### CreateI2cBus(IPin[], I2cBusSpeed)
Creates an I2C bus instance for the requested pins and bus speed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.cs#L281)
```csharp title="Declaration"
public II2cBus CreateI2cBus(IPin[] pins, I2cBusSpeed busSpeed)
```

##### Returns

`Meadow.Hardware.II2cBus`: An instance of an I2cBus
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin[]` | *pins* | An array of two pins holding the I2C clock and data pins |
| `Meadow.Hardware.I2cBusSpeed` | *busSpeed* | The bus speed |

### CreateI2cBus(IPin, IPin, I2cBusSpeed)
Creates an I2C bus instance for the requested pins and bus speed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.cs#L287)
```csharp title="Declaration"
public II2cBus CreateI2cBus(IPin clock, IPin data, I2cBusSpeed busSpeed)
```

##### Returns

`Meadow.Hardware.II2cBus`: An instance of an I2cBus
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *clock* | The I2C clock pin |
| `Meadow.Hardware.IPin` | *data* | The I2C data pin |
| `Meadow.Hardware.I2cBusSpeed` | *busSpeed* | The bus speed |

### CreateSpiBus(IPin, IPin, IPin, SpiClockConfiguration)
Creates a SPI bus instance for the requested control pins and clock configuration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.cs#L293)
```csharp title="Declaration"
public ISpiBus CreateSpiBus(IPin clock, IPin copi, IPin cipo, SpiClockConfiguration config)
```

##### Returns

`Meadow.Hardware.ISpiBus`: An instance of an `Meadow.Hardware.ISpiBus`
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *clock* | The IPin instance to use as the bus clock |
| `Meadow.Hardware.IPin` | *copi* | The IPin instance to use for data transmit (controller out/peripheral in) |
| `Meadow.Hardware.IPin` | *cipo* | The IPin instance to use for data receive (controller in/peripheral out) |
| `Meadow.Hardware.SpiClockConfiguration` | *config* | The bus clock configuration parameters |

### CreateSpiBus(IPin, IPin, IPin, Frequency)
Creates a SPI bus instance for the requested control pins and bus speed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.cs#L299)
```csharp title="Declaration"
public ISpiBus CreateSpiBus(IPin clock, IPin copi, IPin cipo, Frequency speed)
```

##### Returns

`Meadow.Hardware.ISpiBus`: An instance of an `Meadow.Hardware.ISpiBus`
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *clock* | The IPin instance to use as the bus clock |
| `Meadow.Hardware.IPin` | *copi* | The IPin instance to use for data transmit (controller out/peripheral in) |
| `Meadow.Hardware.IPin` | *cipo* | The IPin instance to use for data receive (controller in/peripheral out) |
| `Meadow.Units.Frequency` | *speed* | The bus speed |

### CreateSpiBus(int, Frequency)
Creates a SPI bus instance for the requested bus number and bus speed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.cs#L305)
```csharp title="Declaration"
public ISpiBus CreateSpiBus(int channel, Frequency speed)
```

##### Returns

`Meadow.Hardware.ISpiBus`: An instance of an `Meadow.Hardware.ISpiBus`
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *channel* |  |
| `Meadow.Units.Frequency` | *speed* | The bus speed |

### CreateSpiBus(SpiClockConfiguration)
Creates a SPI bus instance for the requested control pins and bus speed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.cs#L320)
```csharp title="Declaration"
public ISpiBus CreateSpiBus(SpiClockConfiguration configuration)
```

##### Returns

`Meadow.Hardware.ISpiBus`: Returns an instance of `Meadow.Hardware.ISpiBus`.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.SpiClockConfiguration` | *configuration* | The SPI clock configuration. |

### CreateSpiBus(int)
Creates an SPI bus on the expander.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.cs#L330)
```csharp title="Declaration"
public ISpiBus CreateSpiBus(int channel = 0)
```

##### Returns

`Meadow.Hardware.ISpiBus`: Returns an instance of `Meadow.Hardware.ISpiBus`.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *channel* | The channel number to use for the SPI bus. |

### CreateDigitalInputPort(IPin, ResistorMode)
Creates an IDigitalInputPort on the specified pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ftxxxx/Driver/FtdiExpander.cs#L336)
```csharp title="Declaration"
public IDigitalInputPort CreateDigitalInputPort(IPin pin, ResistorMode resistorMode)
```

##### Returns

`Meadow.Hardware.IDigitalInputPort`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* | The pin on which to create the port. |
| `Meadow.Hardware.ResistorMode` | *resistorMode* | The `ResistorMode` specifying whether an
    external pull-up/pull-down resistor is used, or an internal pull-up/pull-down
    resistor should be configured for default state. |


## Implements

* `Meadow.Hardware.IDigitalInputOutputController`
* `Meadow.Hardware.IDigitalInputController`
* `Meadow.Hardware.ISpiController`
* `Meadow.Hardware.IDigitalOutputController`
* `Meadow.Hardware.II2cController`
* `Meadow.Hardware.IPinController`
