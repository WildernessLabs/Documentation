---
uid: Meadow.Foundation.ICs.IOExpanders.Pca9685
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Pca9685
---

| Pca9685 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9685) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9685/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.Pca9685/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.Pca9685.svg?label=Meadow.Foundation.ICs.IOExpanders.Pca9685" alt="NuGet Gallery for Meadow.Foundation.ICs.IOExpanders.Pca9685" /></a> |

### Code Example

```csharp
private Pca9685 pca9685;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");
    var i2CBus = Device.CreateI2cBus(I2cBusSpeed.FastPlus);

    pca9685 = new Pca9685(i2CBus, new Meadow.Units.Frequency(50, Meadow.Units.Frequency.UnitType.Hertz), (byte)Pca9685.Addresses.Default);

    return base.Initialize();
}

public override Task Run()
{
    var port0 = pca9685.CreatePwmPort(pca9685.Pins.LED0, 0.05f);
    var port7 = pca9685.CreatePwmPort(pca9685.Pins.LED7);

    port0.Start();
    port7.Start();

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9685/Samples/Pca9685_Sample)

### Wiring Example

To wire a PCA9685 to your Meadow board, connect the following:

<img src="/API_Assets/Meadow.Foundation.ICs.IOExpanders.Pca9685/Pca9685_Fritzing.png" />

