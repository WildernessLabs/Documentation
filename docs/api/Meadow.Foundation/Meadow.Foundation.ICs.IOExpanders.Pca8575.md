---
uid: Meadow.Foundation.ICs.IOExpanders.Pca8575
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Pca8575
---

| Pca8575 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.Pcx857x/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.Pcx857x.svg?label=Meadow.Foundation.ICs.IOExpanders.Pcx857x" alt="NuGet Gallery for Meadow.Foundation.ICs.IOExpanders.Pcx857x" /></a> |

### Code Example

```csharp
private Pca8575 device;

public override Task Initialize()
{
    device = new Pca8575(Device.CreateI2cBus(1), 0x20, Device.Pins.D01);

    return base.Initialize();
}

public override Task Run()
{
    TestDigitalOutputPorts(10);

    return Task.CompletedTask;
}

private void TestDigitalOutputPorts(int loopCount)
{
    var out00 = device.CreateDigitalOutputPort(device.Pins.P00);
    var out01 = device.CreateDigitalOutputPort(device.Pins.P01);
    var out02 = device.CreateDigitalOutputPort(device.Pins.P02);
    var out03 = device.CreateDigitalOutputPort(device.Pins.P03);
    var out04 = device.CreateDigitalOutputPort(device.Pins.P04);
    var out05 = device.CreateDigitalOutputPort(device.Pins.P05);
    var out06 = device.CreateDigitalOutputPort(device.Pins.P06);
    var out07 = device.CreateDigitalOutputPort(device.Pins.P07);

    var out10 = device.CreateDigitalOutputPort(device.Pins.P10);
    var out11 = device.CreateDigitalOutputPort(device.Pins.P11);
    var out12 = device.CreateDigitalOutputPort(device.Pins.P12);
    var out13 = device.CreateDigitalOutputPort(device.Pins.P13);
    var out14 = device.CreateDigitalOutputPort(device.Pins.P14);
    var out15 = device.CreateDigitalOutputPort(device.Pins.P15);
    var out16 = device.CreateDigitalOutputPort(device.Pins.P16);
    var out17 = device.CreateDigitalOutputPort(device.Pins.P17);

    var outputPorts = new List<IDigitalOutputPort>()
    {
        out00, out01, out02, out03,
        out04, out05, out06, out07,
        out10, out11, out12, out13,
        out14, out15, out16, out17
    };

    foreach (var outputPort in outputPorts)
    {
        outputPort.State = true;

        Thread.Sleep(1000);
    }

    for (int l = 0; l < loopCount; l++)
    {
        // loop through all the outputs
        for (int i = 0; i < outputPorts.Count; i++)
        {
            // turn them all off
            device.AllOff();

            Thread.Sleep(1000);

            // turn them all on
            device.AllOn();
            Thread.Sleep(1000);

            // turn on just one
            Resolver.Log.Info($"Update pin {i} to {true}");
            outputPorts[i].State = true;
            Thread.Sleep(250);

            // turn off just one
            Resolver.Log.Info($"Update pin {i} to {false}");
            outputPorts[i].State = false;
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

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pcx857x/Samples/Pca8575_Sample)

