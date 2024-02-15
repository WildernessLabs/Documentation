---
uid: Meadow.Foundation.ICs.IOExpanders.x74595
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.x74595
---

| x74595 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.x74595) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.x74595/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.x74595/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.x74595.svg?label=Meadow.Foundation.ICs.IOExpanders.x74595" alt="NuGet Gallery for Meadow.Foundation.ICs.IOExpanders.x74595" /></a> |

Shift registers offer the ability to increase the number of outputs on a microcontroller by using I2C or SPI interfaces. In the case of the 74xx595 series of shift registers, the SPI interface is used to output a series of bits that are then latched to the output pins of the chip.

This class allows Meadow to control the output pins on a 74HCT595 shift register using the SPI interface.

Note that when using this chip, care should be taken to ensure that the total output load of the chip does not exceed the current and thermal dissipation properties for the specific shift register being used.

### Code Example

```csharp
x74595 shiftRegister;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    shiftRegister = new x74595(Device.CreateSpiBus(), Device.Pins.D00, 8);

    return base.Initialize();
}

public override async Task Run()
{
    shiftRegister.Clear(true);

    Resolver.Log.Info("Set Pin 3 to high");
    //turn on pin 3
    shiftRegister.WriteToPin(shiftRegister.Pins.GP3, true);

    Resolver.Log.Info("Set Pin 4 to high");

    //get the port for Pin4
    var port4 = shiftRegister.CreateDigitalOutputPort(shiftRegister.Pins.GP4, true, Meadow.Hardware.OutputType.OpenDrain);

    Resolver.Log.Info("Toggle pin 4");

    await Task.Delay(1000);
    port4.State = false;
    await Task.Delay(1000);
    port4.State = true;
    await Task.Delay(1000);

    Resolver.Log.Info("Raise all pins to high");
    while (true)
    {
        shiftRegister.Clear();

        foreach (var pin in shiftRegister.Pins.AllPins)
        {
            shiftRegister.WriteToPin(pin, true);
            await Task.Delay(50);
        }
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.x74595/Samples/x74595_Sample)

### Wiring Example

To wire a 74HCT595 to your Meadow board, connect the following:

<img src="/API_Assets/Meadow.Foundation.ICs.IOExpanders.x74595/x74595_Fritzing.svg" />





# Class x74595
Provide an interface to connect to a 74595 shift register

###### **Assembly**: x74595.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.x74595/Driver/x74595.PinDefinitions.cs#L7)
```csharp title="Declaration"
public class x74595 : IDigitalOutputController, IPinController, ISpiPeripheral
```
**Implements:**  
`Meadow.Hardware.IDigitalOutputController`, `Meadow.Hardware.IPinController`, `Meadow.Hardware.ISpiPeripheral`

## Properties
### Pins
The pin definitions
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.x74595/Driver/x74595.cs#L21)
```csharp title="Declaration"
public x74595.PinDefinitions Pins { get; }
```
### DefaultSpiBusSpeed
The default SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.x74595/Driver/x74595.cs#L26)
```csharp title="Declaration"
public Frequency DefaultSpiBusSpeed { get; }
```
### SpiBusSpeed
The SPI bus speed for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.x74595/Driver/x74595.cs#L31)
```csharp title="Declaration"
public Frequency SpiBusSpeed { get; set; }
```
### DefaultSpiBusMode
The default SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.x74595/Driver/x74595.cs#L40)
```csharp title="Declaration"
public SpiClockConfiguration.Mode DefaultSpiBusMode { get; }
```
### SpiBusMode
The SPI bus mode for the device
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.x74595/Driver/x74595.cs#L45)
```csharp title="Declaration"
public SpiClockConfiguration.Mode SpiBusMode { get; set; }
```
## Fields
### spiComms
SPI Communication bus used to communicate with the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.x74595/Driver/x74595.cs#L61)
```csharp title="Declaration"
protected ISpiCommunications spiComms
```
## Methods
### CreateDigitalOutputPort(IPin, bool, OutputType)
Creates a new DigitalOutputPort using the specified pin and initial state
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.x74595/Driver/x74595.cs#L143)
```csharp title="Declaration"
public IDigitalOutputPort CreateDigitalOutputPort(IPin pin, bool initialState, OutputType outputType)
```

##### Returns

`Meadow.Hardware.IDigitalOutputPort`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* | The pin number to create the port on |
| `System.Boolean` | *initialState* | Whether the pin is initially high or low |
| `Meadow.Hardware.OutputType` | *outputType* | The port output type |

### Clear(bool)
Clear the shift register buffer
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.x74595/Driver/x74595.cs#L163)
```csharp title="Declaration"
public void Clear(bool update = true)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *update* | If true, send changes to the shift register |

### WriteToPin(IPin, bool)
Sets a particular pin's value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.x74595/Driver/x74595.cs#L178)
```csharp title="Declaration"
public void WriteToPin(IPin pin, bool value)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* | The pin to write to. |
| `System.Boolean` | *value* | The value to write. True for high, false for low. |

### IsValidPin(IPin)
Checks whether or not the pin passed in exists on the chip.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.x74595/Driver/x74595.cs#L195)
```csharp title="Declaration"
protected bool IsValidPin(IPin pin)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* |

### GetPin(string)
Get pin from name
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.x74595/Driver/x74595.cs#L205)
```csharp title="Declaration"
public IPin GetPin(string pinName)
```

##### Returns

`Meadow.Hardware.IPin`: An IPin object
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *pinName* | The pin name |


## Implements

* `Meadow.Hardware.IDigitalOutputController`
* `Meadow.Hardware.IPinController`
* `Meadow.Hardware.ISpiPeripheral`
