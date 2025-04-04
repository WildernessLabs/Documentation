---
uid: Meadow.Foundation.ICs.IOExpanders.Mcp23008
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp23008
---

| Mcp23008 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.Mcp23xxx/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.Mcp23xxx.svg?label=Meadow.Foundation.ICs.IOExpanders.Mcp23xxx" alt="NuGet Gallery for Meadow.Foundation.ICs.IOExpanders.Mcp23xxx" /></a> |

### Code Example

```csharp
private Mcp23008 mcp;

public override Task Initialize()
{
    var interruptPort = Device.CreateDigitalInterruptPort(Device.Pins.D00, InterruptMode.EdgeRising);
    var resetPort = Device.CreateDigitalOutputPort(Device.Pins.D01);

    mcp = new Mcp23008(Device.CreateI2cBus(), 0x20, interruptPort, resetPort);

    return base.Initialize();
}

public override Task Run()
{
    BenchmarkDigitalOutputPorts();
    while (true)
    {
        TestBulkDigitalOutputPortWrites(20);
        TestDigitalOutputPorts(2);
    }
}

private void BenchmarkDigitalOutputPorts()
{
    var out00 = mcp.CreateDigitalOutputPort(mcp.Pins.GP0);
    var out01 = mcp.CreateDigitalOutputPort(mcp.Pins.GP1);
    var out02 = mcp.CreateDigitalOutputPort(mcp.Pins.GP2);
    var out03 = mcp.CreateDigitalOutputPort(mcp.Pins.GP3);
    var out04 = mcp.CreateDigitalOutputPort(mcp.Pins.GP4);
    var out05 = mcp.CreateDigitalOutputPort(mcp.Pins.GP5);
    var out06 = mcp.CreateDigitalOutputPort(mcp.Pins.GP6);
    var out07 = mcp.CreateDigitalOutputPort(mcp.Pins.GP7);

    var outputPorts = new List<IDigitalOutputPort>()
    {
        out00, out01, out02, out03, out04, out05, out06, out07
    };

    var state = false;
    var stopwatch = new Stopwatch();
    Resolver.Log.Info("Starting benchmark");

    for (var x = 0; x < 10; x++)
    {
        stopwatch.Restart();
        for (var iteration = 0; iteration < 100; iteration++)
        {
            for (var i = 0; i < outputPorts.Count; i++)
            {
                outputPorts[i].State = state;
            }

            state = !state;
        }
        stopwatch.Stop();

        Resolver.Log.Info($"{100 * outputPorts.Count} pins toggled in {stopwatch.ElapsedMilliseconds}ms");
    }

    Resolver.Log.Info("Benchmark finished");
}

private void TestDigitalOutputPorts(int loopCount)
{
    var out00 = mcp.CreateDigitalOutputPort(mcp.Pins.GP0);
    var out01 = mcp.CreateDigitalOutputPort(mcp.Pins.GP1);
    var out02 = mcp.CreateDigitalOutputPort(mcp.Pins.GP2);
    var out03 = mcp.CreateDigitalOutputPort(mcp.Pins.GP3);
    var out04 = mcp.CreateDigitalOutputPort(mcp.Pins.GP4);
    var out05 = mcp.CreateDigitalOutputPort(mcp.Pins.GP5);
    var out06 = mcp.CreateDigitalOutputPort(mcp.Pins.GP6);
    var out07 = mcp.CreateDigitalOutputPort(mcp.Pins.GP7);

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

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Mcp23xxx/Samples/Mcp23008_Sample)

### Wiring Example

To wire a Mcp23008 to your Meadow board, connect the following:

| Mcp23008  | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |
