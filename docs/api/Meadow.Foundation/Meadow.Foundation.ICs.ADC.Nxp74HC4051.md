---
uid: Meadow.Foundation.ICs.ADC.Nxp74HC4051
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.ADC.Nxp74HC4051
---

| Nxp74HC4051 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.ADC.AnalogMux) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.ADC.AnalogMux/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.ADC.AnalogMux/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.ADC.AnalogMux.svg?label=Meadow.Foundation.ICs.ADC.AnalogMux" alt="NuGet Gallery for Meadow.Foundation.ICs.ADC.AnalogMux" /></a> |
### Code Example

```csharp
private Nxp74HC4051 mux;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    mux = new Nxp74HC4051(
        Device.CreateAnalogInputPort(Device.Pins.A00),      // input
        Device.CreateDigitalOutputPort(Device.Pins.D00),    // s0
        Device.CreateDigitalOutputPort(Device.Pins.D01),    // s1
        Device.CreateDigitalOutputPort(Device.Pins.D02),    // s2
        Device.CreateDigitalOutputPort(Device.Pins.D03)     // enable
        );

    return base.Initialize();
}

public override Task Run()
{
    Task.Run(ReadRoundRobin);

    return base.Run();
}

public async Task ReadRoundRobin()
{
    while (true)
    {
        for (var channel = 0; channel < 8; channel++)
        {
            mux.SetInputChannel(channel);
            var read = await mux.Signal.Read();
            Resolver.Log.Info($"ADC Channel {channel} = {read.Volts:0.0}V");
            await Task.Delay(1000);
        }
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.ADC.AnalogMux/Samples/Nxp74HC4051_Sample)


