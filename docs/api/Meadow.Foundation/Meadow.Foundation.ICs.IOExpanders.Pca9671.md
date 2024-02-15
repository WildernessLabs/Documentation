---
uid: Meadow.Foundation.ICs.IOExpanders.Pca9671
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Pca9671
---

| Pca9671 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9671) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9671/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.Pca9671/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.Pca9671.svg?label=Meadow.Foundation.ICs.IOExpanders.Pca9671" alt="NuGet Gallery for Meadow.Foundation.ICs.IOExpanders.Pca9671" /></a> |

### Code Example

```csharp
private Pca9671 pca;

public override Task Initialize()
{
    pca = new Pca9671(Device.CreateI2cBus(), 0x20, Device.Pins.D01);

    return base.Initialize();
}

public override Task Run()
{
    while (true)
    {
        //TestBulkDigitalOutputPortWrites(20);
        TestDigitalOutputPorts(2);
    }
}

private void TestDigitalOutputPorts(int loopCount)
{
    var out00 = pca.CreateDigitalOutputPort(pca.Pins.R00);
    var out01 = pca.CreateDigitalOutputPort(pca.Pins.R01);
    var out02 = pca.CreateDigitalOutputPort(pca.Pins.R02);
    var out03 = pca.CreateDigitalOutputPort(pca.Pins.R03);
    var out04 = pca.CreateDigitalOutputPort(pca.Pins.R04);
    var out05 = pca.CreateDigitalOutputPort(pca.Pins.R05);
    var out06 = pca.CreateDigitalOutputPort(pca.Pins.R06);
    var out07 = pca.CreateDigitalOutputPort(pca.Pins.R07);
    var out08 = pca.CreateDigitalOutputPort(pca.Pins.R08);
    var out09 = pca.CreateDigitalOutputPort(pca.Pins.R09);
    var out10 = pca.CreateDigitalOutputPort(pca.Pins.R10);
    var out11 = pca.CreateDigitalOutputPort(pca.Pins.R11);
    var out12 = pca.CreateDigitalOutputPort(pca.Pins.R12);
    var out13 = pca.CreateDigitalOutputPort(pca.Pins.R13);
    var out14 = pca.CreateDigitalOutputPort(pca.Pins.R14);
    var out15 = pca.CreateDigitalOutputPort(pca.Pins.R15);


    var outputPorts = new List<IDigitalOutputPort>()
    {
        out00, out01, out02, out03, out04, out05, out06, out07,
        out08, out09, out10, out11, out12, out13, out14, out15
    };

    foreach (var outputPort in outputPorts)
    {
        outputPort.State = true;
    }

    for (int l = 0; l < loopCount; l++)
    {
        // loop through all the outputs
        for (int i = 0; i < outputPorts.Count; i++)
        {
            // turn them all off
            pca.AllOff();

            // turn on just one
            outputPorts[i].State = true;
            Thread.Sleep(250);
        }
    }

    // cleanup
    for (int i = 0; i < outputPorts.Count; i++)
    {
        outputPorts[i].Dispose();
    }
}
```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9671/Samples/Pca9671_Sample)


# Class Pca9671
Represents a PCA9671 I2C IO Expander

###### **Assembly**: Pca9671.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9671/Driver/Pca9671.PinDefinitions.cs#L7)
```csharp title="Declaration"
public class Pca9671 : I2cCommunications, II2cCommunications, IByteCommunications, IDigitalOutputController, IDigitalInputController, IPinController, II2cPeripheral, IDisposable
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.I2cCommunications](../I2cCommunications)

**Implements:**  
`Meadow.Hardware.II2cCommunications`, `Meadow.Hardware.IByteCommunications`, `Meadow.Hardware.IDigitalOutputController`, `Meadow.Hardware.IDigitalInputController`, `Meadow.Hardware.IPinController`, `Meadow.Hardware.II2cPeripheral`, `System.IDisposable`

## Properties
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9671/Driver/Pca9671.cs#L17)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
### DefaultI2cAddress
The default I2C address for the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9671/Driver/Pca9671.cs#L30)
```csharp title="Declaration"
public byte DefaultI2cAddress { get; }
```
### Pins

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9671/Driver/Pca9671.cs#L33)
```csharp title="Declaration"
public Pca9671.PinDefinitions Pins { get; }
```
## Methods
### CreateDigitalOutputPort(IPin, bool, OutputType)
Creates an IDigitalOutputPort on the specified pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9671/Driver/Pca9671.cs#L62)
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

### CreateDigitalInputPort(IPin, ResistorMode)
Creates an IDigitalInputPort on the specified pin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9671/Driver/Pca9671.cs#L86)
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

### GetPin(string)

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9671/Driver/Pca9671.cs#L125)
```csharp title="Declaration"
public IPin GetPin(string pinName)
```

##### Returns

`Meadow.Hardware.IPin`

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.String` | *pinName* |

### IsValidPin(IPin)

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9671/Driver/Pca9671.cs#L129)
```csharp title="Declaration"
protected bool IsValidPin(IPin pin)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name |
|:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* |

### Reset()
Resets the peripheral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9671/Driver/Pca9671.cs#L135)
```csharp title="Declaration"
public void Reset()
```
### AllOff()
Convenience method to turn all outputs off
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9671/Driver/Pca9671.cs#L150)
```csharp title="Declaration"
public void AllOff()
```
### AllOn()
Convenience method to turn all outputs on
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9671/Driver/Pca9671.cs#L158)
```csharp title="Declaration"
public void AllOn()
```
### GetState(IPin)
Retrieves the state of a pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9671/Driver/Pca9671.cs#L167)
```csharp title="Declaration"
public bool GetState(IPin pin)
```

##### Returns

`System.Boolean`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* | The pin to query |

### SetState(IPin, bool)
Sets the state of a pin
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9671/Driver/Pca9671.cs#L188)
```csharp title="Declaration"
public void SetState(IPin pin, bool state)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Hardware.IPin` | *pin* | The pin to affect |
| `System.Boolean` | *state* | &lt;b&gt;True&lt;/b&gt; to set the pin state high, &lt;b&gt;False&lt;/b&gt; to set it low |

### ReadState()
Reads the peripheral state register
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9671/Driver/Pca9671.cs#L212)
```csharp title="Declaration"
protected ushort ReadState()
```

##### Returns

`System.UInt16`
### WriteState(ushort)
Writes the peripheral state register
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9671/Driver/Pca9671.cs#L222)
```csharp title="Declaration"
protected void WriteState(ushort state)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.UInt16` | *state* |

### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9671/Driver/Pca9671.cs#L233)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9671/Driver/Pca9671.cs#L251)
```csharp title="Declaration"
public void Dispose()
```

## Implements

* `Meadow.Hardware.II2cCommunications`
* `Meadow.Hardware.IByteCommunications`
* `Meadow.Hardware.IDigitalOutputController`
* `Meadow.Hardware.IDigitalInputController`
* `Meadow.Hardware.IPinController`
* `Meadow.Hardware.II2cPeripheral`
* `System.IDisposable`
