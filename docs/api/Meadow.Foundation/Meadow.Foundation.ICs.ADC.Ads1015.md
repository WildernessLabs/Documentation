---
uid: Meadow.Foundation.ICs.ADC.Ads1015
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.ADC.Ads1015
---

| Ads1015 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.ADC.Ads1x15) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.ADC.Ads1x15/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.ADC.Ads1x15/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.ADC.Ads1x15.svg?label=Meadow.Foundation.ICs.ADC.Ads1x15" alt="NuGet Gallery for Meadow.Foundation.ICs.ADC.Ads1x15" /></a> |

### Code Example

```csharp
private Ads1015 adc;

public override async Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    adc = new Ads1015(
        Device.CreateI2cBus(Meadow.Hardware.I2cBusSpeed.FastPlus),
        Ads1x15Base.Addresses.Default,
        Ads1x15Base.MeasureMode.Continuous,
        Ads1x15Base.ChannelSetting.A0SingleEnded,
        Ads1015.SampleRateSetting.Sps3300);

    adc.Gain = Ads1x15Base.FsrGain.TwoThirds;

    var observer = Ads1015.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Observer: Voltage changed by threshold; new temp: {result.New.Volts:N2}C, old: {result.Old?.Volts:N2}C");
        },
        filter: result =>
        {
            if (result.Old is { } old)
            {
                // TODO: you can check to see if the voltage change is > your desired threshold.
                // here we look to see if it's > 0.5V
                return Math.Abs(result.New.Volts - old.Volts) > 0.5d;
            }
            return false;
        }
        );
    adc.Subscribe(observer);

    adc.Updated += (sender, result) =>
    {
        Resolver.Log.Info($"  Voltage: {result.New.Volts:N2}V");
    };

    await adc.Read();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.ADC.Ads1x15/Samples/Ads1015_Sample)

### Wiring Example

To wire a Ads1015 to your Meadow board, connect the following:

| Ads1015  | Meadow Pin    |
|---------|---------------|
| GND     | GND           |
| VCC     | 3V3           |
| SCL     | D08 (SCL Pin) |
| SDA     | D07 (SDA Pin) |
