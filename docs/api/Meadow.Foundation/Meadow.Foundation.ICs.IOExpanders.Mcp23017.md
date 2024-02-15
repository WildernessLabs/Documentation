---
uid: Meadow.Foundation.ICs.IOExpanders.Mcp23017
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp23017
---

| Mcp23017 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.Mcp23xxx/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.Mcp23xxx.svg?label=Meadow.Foundation.ICs.IOExpanders.Mcp23xxx" alt="NuGet Gallery for Meadow.Foundation.ICs.IOExpanders.Mcp23xxx" /></a> |

### Code Example

```csharp
private Mcp23017 mcp;

public override Task Initialize()
{
    var interruptPort = Device.CreateDigitalInterruptPort(Device.Pins.D00, InterruptMode.EdgeRising);
    var resetPort = Device.CreateDigitalOutputPort(Device.Pins.D01);

    mcp = new Mcp23017(Device.CreateI2cBus(), 0x20, interruptPort, resetPort);

    return base.Initialize();
}

public override Task Run()
{
    while (true)
    {
        TestBulkDigitalOutputPortWrites(20);
        TestDigitalOutputPorts(2);
    }
}

private void TestDigitalOutputPorts(int loopCount)
{
    var out00 = mcp.CreateDigitalOutputPort(mcp.Pins.GPA0);
    var out01 = mcp.CreateDigitalOutputPort(mcp.Pins.GPA1);
    var out02 = mcp.CreateDigitalOutputPort(mcp.Pins.GPA2);
    var out03 = mcp.CreateDigitalOutputPort(mcp.Pins.GPA3);
    var out04 = mcp.CreateDigitalOutputPort(mcp.Pins.GPA4);
    var out05 = mcp.CreateDigitalOutputPort(mcp.Pins.GPA5);
    var out06 = mcp.CreateDigitalOutputPort(mcp.Pins.GPA6);
    var out07 = mcp.CreateDigitalOutputPort(mcp.Pins.GPA7);

    var outputPorts = new List<IDigitalOutputPort>()
    {
        out00, out01, out02, out03, out04, out05, out06, out07
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
            foreach (var outputPort in outputPorts)
            {
                outputPort.State = false;
            }

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

private void TestBulkDigitalOutputPortWrites(int loopCount)
{
    byte mask = 0x0;

    for (int l = 0; l < loopCount; l++)
    {
        for (int i = 0; i < 8; i++)
        {
            mcp.WriteToPorts(mask);
            mask = (byte)(1 << i);
            Thread.Sleep(5);
        }
    }
}
```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Samples/Mcp23017_Sample)

### Wiring Example

To wire a Mcp23017 to your Meadow board, connect the following:

| Mcp23017  | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |

# Class Mcp23017
Represent an MCP23017 I2C port expander

###### **Assembly**: Mcp23xxx.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Driver/Drivers/Mcp23017.cs#L8)
```csharp title="Declaration"
public class Mcp23017 : Mcp23x1x, IDigitalInputOutputController, IDigitalInputController, IDigitalOutputController, ISpiPeripheral, II2cPeripheral, IDigitalInterruptController, IPinController
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.ICs.IOExpanders.Mcp23xxx](../Mcp23x1x)

**Implements:**  
`Meadow.Hardware.IDigitalInputOutputController`, `Meadow.Hardware.IDigitalInputController`, `Meadow.Hardware.IDigitalOutputController`, `Meadow.Hardware.ISpiPeripheral`, `Meadow.Hardware.II2cPeripheral`, `Meadow.Hardware.IDigitalInterruptController`, `Meadow.Hardware.IPinController`


## Implements

* `Meadow.Hardware.IDigitalInputOutputController`
* `Meadow.Hardware.IDigitalInputController`
* `Meadow.Hardware.IDigitalOutputController`
* `Meadow.Hardware.ISpiPeripheral`
* `Meadow.Hardware.II2cPeripheral`
* `Meadow.Hardware.IDigitalInterruptController`
* `Meadow.Hardware.IPinController`
