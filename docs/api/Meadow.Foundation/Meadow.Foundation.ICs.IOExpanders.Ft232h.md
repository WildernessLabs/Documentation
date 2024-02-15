---
uid: Meadow.Foundation.ICs.IOExpanders.Ft232h
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Ft232h
---

| Ft232h | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.Ft232h/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.Ft232h.svg?label=Meadow.Foundation.ICs.IOExpanders.Ft232h" alt="NuGet Gallery for Meadow.Foundation.ICs.IOExpanders.Ft232h" /></a> |


# Class Ft232h
Represents a DS3502 digital potentiometer

###### **Assembly**: Ft232h.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/SPITransferOptions.cs#L5)
```csharp title="Declaration"
public class Ft232h : IDisposable, IDigitalInputOutputController, IDigitalInputController, ISpiController, IDigitalOutputController, II2cController, IPinController
```
**Implements:**  
`System.IDisposable`, `Meadow.Hardware.IDigitalInputOutputController`, `Meadow.Hardware.IDigitalInputController`, `Meadow.Hardware.ISpiController`, `Meadow.Hardware.IDigitalOutputController`, `Meadow.Hardware.II2cController`, `Meadow.Hardware.IPinController`

## Properties
### Pins
The pins
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232h.cs#L25)
```csharp title="Declaration"
public Ft232h.PinDefinitions Pins { get; }
```
### DefaultClockConfiguration

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232h.cs#L108)
```csharp title="Declaration"
public static SpiClockConfiguration DefaultClockConfiguration { get; }
```
## Methods
### CreateI2cBus(int)

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232h.cs#L42)
```csharp title="Declaration"
public II2cBus CreateI2cBus(int busNumber = 0)
```

##### Returns

`Meadow.Hardware.II2cBus`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *busNumber* |

### CreateI2cBus(int, I2cBusSpeed)
Creates an I2C bus instance for the default pins and the requested bus speed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232h.cs#L48)
```csharp title="Declaration"
public II2cBus CreateI2cBus(int busNumber, I2cBusSpeed busSpeed)
```

##### Returns

`Meadow.Hardware.II2cBus`: An instance of an I2cBus
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *busNumber* | The bus number |
| `Meadow.Hardware.I2cBusSpeed` | *busSpeed* | The bus speed |

### CreateI2cBus(IPin[], I2cBusSpeed)
Creates an I2C bus instance for the requested pins and bus speed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232h.cs#L55)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232h.cs#L63)
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

### CreateSpiBus()

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232h.cs#L76)
```csharp title="Declaration"
public ISpiBus CreateSpiBus()
```

##### Returns

`Meadow.Hardware.ISpiBus`
### CreateSpiBus(IPin, IPin, IPin, SpiClockConfiguration)
Creates a SPI bus instance for the requested control pins and clock configuration
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232h.cs#L82)
```csharp title="Declaration"
public ISpiBus CreateSpiBus(IPin clock, IPin mosi, IPin miso, SpiClockConfiguration config)
```

##### Returns

`Meadow.Hardware.ISpiBus`: An instance of an `Meadow.Hardware.ISpiBus`
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *clock* | The IPin instance to use as the bus clock |
| `Meadow.Hardware.IPin` | *mosi* |  |
| `Meadow.Hardware.IPin` | *miso* |  |
| `Meadow.Hardware.SpiClockConfiguration` | *config* | The bus clock configuration parameters |

### CreateSpiBus(IPin, IPin, IPin, Frequency)
Creates a SPI bus instance for the requested control pins and bus speed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232h.cs#L94)
```csharp title="Declaration"
public ISpiBus CreateSpiBus(IPin clock, IPin mosi, IPin miso, Frequency speed)
```

##### Returns

`Meadow.Hardware.ISpiBus`: An instance of an `Meadow.Hardware.ISpiBus`
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *clock* | The IPin instance to use as the bus clock |
| `Meadow.Hardware.IPin` | *mosi* |  |
| `Meadow.Hardware.IPin` | *miso* |  |
| `Meadow.Units.Frequency` | *speed* | The bus speed |

### CreateSpiBus(int, SpiClockConfiguration)

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232h.cs#L102)
```csharp title="Declaration"
public ISpiBus CreateSpiBus(int busNumber, SpiClockConfiguration config)
```

##### Returns

`Meadow.Hardware.ISpiBus`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Int32` | *busNumber* |
| `Meadow.Hardware.SpiClockConfiguration` | *config* |

### CreateDigitalInputPort(IPin)
Creates an IDigitalInputPort on the specified pin with Disabled resistor mode
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232h.cs#L115)
```csharp title="Declaration"
public IDigitalInputPort CreateDigitalInputPort(IPin pin)
```

##### Returns

`Meadow.Hardware.IDigitalInputPort`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* | The pin on which to create the port. |

### CreateDigitalInputPort(IPin, ResistorMode)
Creates an IDigitalInputPort on the specified pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232h.cs#L121)
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

### CreateDigitalOutputPort(IPin, bool, OutputType)
Creates an IDigitalOutputPort on the specified pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232h.cs#L128)
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

### Dispose(bool)

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232h.cs#L135)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Boolean` | *disposing* |

### ~Ft232h()
Finalizer for the Ft232h class, used to release unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232h.cs#L148)
```csharp title="Declaration"
protected ~Ft232h()
```
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Ft232h/Driver/Ft232h.cs#L154)
```csharp title="Declaration"
public void Dispose()
```

## Implements

* `System.IDisposable`
* `Meadow.Hardware.IDigitalInputOutputController`
* `Meadow.Hardware.IDigitalInputController`
* `Meadow.Hardware.ISpiController`
* `Meadow.Hardware.IDigitalOutputController`
* `Meadow.Hardware.II2cController`
* `Meadow.Hardware.IPinController`
