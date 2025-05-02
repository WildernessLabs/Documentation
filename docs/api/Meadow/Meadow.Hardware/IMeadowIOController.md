---
title: Interface IMeadowIOController
sidebar_label: IMeadowIOController
description: Defines the GPIO Manager for interacting with digital and analog pins.
slug: /docs/api/Meadow/Meadow.Hardware/IMeadowIOController
---
# Interface IMeadowIOController
Defines the GPIO Manager for interacting with digital and analog pins.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IIOController.cs#L16)
```csharp title="Declaration"
public interface IMeadowIOController
```
## Properties
### DeviceChannelManager
Gets the device channel manager for managing input and output channels.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IIOController.cs#L115)
```csharp title="Declaration"
IDeviceChannelManager DeviceChannelManager { get; }
```
## Methods
### Initialize(string[]?)
Initializes the device pins to their default power-up status (outputs, low, and pulled down where applicable).
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IIOController.cs#L27)
```csharp title="Declaration"
void Initialize(string[]? reservedPinList)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String[]` | *reservedPinList* | List of any pins to reserve. |

### SetDiscrete(IPin, bool)
Sets the value of a discrete (digital) output pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IIOController.cs#L34)
```csharp title="Declaration"
void SetDiscrete(IPin pin, bool value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) representing the discrete output pin. |
| `System.Boolean` | *value* | The value to set on the discrete output pin (true for high, false for low). |

### GetDiscrete(IPin)
Gets the value of a discrete (digital) input pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IIOController.cs#L41)
```csharp title="Declaration"
bool GetDiscrete(IPin pin)
```

##### Returns

`System.Boolean`: The value of the discrete input pin (true for high, false for low).
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) representing the discrete input pin. |

### SetResistorMode(IPin, ResistorMode)
Sets the resistor mode for the given pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IIOController.cs#L48)
```csharp title="Declaration"
void SetResistorMode(IPin pin, ResistorMode mode)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) to set the resistor mode for. |
| [Meadow.Hardware.ResistorMode](../Meadow.Hardware/ResistorMode) | *mode* | The resistor mode to set. |

### ConfigureOutput(IPin, bool, OutputType)
Configures a pin as an output with specified initial state and output type.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IIOController.cs#L53)
```csharp title="Declaration"
void ConfigureOutput(IPin pin, bool initialState, OutputType outputType)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* |
| `System.Boolean` | *initialState* |
| [Meadow.Hardware.OutputType](../Meadow.Hardware/OutputType) | *outputType* |

### ConfigureInput(IPin, ResistorMode, InterruptMode, TimeSpan, TimeSpan)
Configures a pin as an input with specified resistor mode, interrupt mode, debounce duration, and glitch duration.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IIOController.cs#L62)
```csharp title="Declaration"
void ConfigureInput(IPin pin, ResistorMode resistorMode, InterruptMode interruptMode, TimeSpan debounceDuration, TimeSpan glitchDuration)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* |
| [Meadow.Hardware.ResistorMode](../Meadow.Hardware/ResistorMode) | *resistorMode* |
| [Meadow.Hardware.InterruptMode](../Meadow.Hardware/InterruptMode) | *interruptMode* |
| `System.TimeSpan` | *debounceDuration* |
| `System.TimeSpan` | *glitchDuration* |

### WireInterrupt(IPin, InterruptMode, ResistorMode, TimeSpan, TimeSpan)
Wires an interrupt for the specified pin with the given interrupt mode, resistor mode, debounce duration, and glitch duration.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IIOController.cs#L73)
```csharp title="Declaration"
void WireInterrupt(IPin pin, InterruptMode interruptMode, ResistorMode resistorMode, TimeSpan debounceDuration, TimeSpan glitchDuration)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* |
| [Meadow.Hardware.InterruptMode](../Meadow.Hardware/InterruptMode) | *interruptMode* |
| [Meadow.Hardware.ResistorMode](../Meadow.Hardware/ResistorMode) | *resistorMode* |
| `System.TimeSpan` | *debounceDuration* |
| `System.TimeSpan` | *glitchDuration* |

### UnconfigureGpio(IPin)
Unconfigures a previously configured GPIO pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IIOController.cs#L85)
```csharp title="Declaration"
bool UnconfigureGpio(IPin pin)
```

##### Returns

`System.Boolean`: `true` if the pin was successfully unconfigured, `false` otherwise.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) to unconfigure. |

### ConfigureAnalogInput(IPin)
Configures a pin as an analog input.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IIOController.cs#L90)
```csharp title="Declaration"
void ConfigureAnalogInput(IPin pin)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* |

### GetAnalogValue(IPin)
Gets the analog value read from the specified pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IIOController.cs#L97)
```csharp title="Declaration"
int GetAnalogValue(IPin pin)
```

##### Returns

`System.Int32`: The analog value read from the pin.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) representing the analog input pin. |

### ReassertConfig(IPin, bool)
Reasserts the configuration for the specified pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IIOController.cs#L104)
```csharp title="Declaration"
void ReassertConfig(IPin pin, bool validateInterruptGroup = true)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) | *pin* | The [Meadow.Hardware.IPin](../Meadow.Hardware/IPin) to reassert the configuration for. |
| `System.Boolean` | *validateInterruptGroup* | Whether to validate the interrupt group for the pin. |

### GetTemperature()
Gets the temperature reading from the device.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IIOController.cs#L110)
```csharp title="Declaration"
Temperature GetTemperature()
```

##### Returns

[Meadow.Units.Temperature](../Meadow.Units/Temperature): The current temperature reading as a [Meadow.Units.Temperature](../Meadow.Units/Temperature) object.## Events
### Interrupt
Event triggered when an interrupt occurs on a pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Hardware/Contracts/IIOController.cs#L21)
```csharp title="Declaration"
event InterruptHandler Interrupt
```
##### Event Type
[Meadow.Hardware.InterruptHandler](../Meadow.Hardware/InterruptHandler)
