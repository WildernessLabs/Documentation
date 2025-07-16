---
uid: Meadow.Foundation.ICs.ADC.Ads7128
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.ADC.Ads7128
---

| Ads7128 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.ADC.Ads7128) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.ADC.Ads7128/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.ADC.Ads7128/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.ADC.Ads7128.svg?label=Meadow.Foundation.ICs.ADC.Ads7128" alt="NuGet Gallery for Meadow.Foundation.ICs.ADC.Ads7128" /></a> |
### Code Example

```csharp
private Ads7128 adc;
private IAnalogInputPort ch0;

public override async Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    var bus = Device.CreateI2cBus();

    adc = new Ads7128(
        bus,
        Ads7128.Addresses.Default);

    ch0 = adc.CreateAnalogInputPort(adc.Pins.AIN0);
}

public override async Task Run()
{
    while (true)
    {
        var voltage = await ch0.Read();

        Resolver.Log.Info($"AIN0 voltage: {voltage.Volts:N2}");

        await Task.Delay(2000);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.ADC.Ads7128/Samples/Ads7128_Sample)

