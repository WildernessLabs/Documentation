---
uid: Meadow.Foundation.ICs.IOExpanders.Pca9685
remarks: *content
---

| Pca9685 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9685) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.Pca9685/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.Pca9685.svg?label=Meadow.Foundation.ICs.IOExpanders.Pca9685" /></a> |

### Code Example

```csharp
public MeadowApp()
{
    Console.WriteLine("Initialize hardware...");
    var i2CBus = Device.CreateI2cBus(I2cBusSpeed.FastPlus);

    var pca9685 = new Pca9685(i2CBus, (byte)Pca9685.Addresses.Default, 50);
    pca9685.Initialize();

      var port0 = pca9685.CreatePwmPort(0, 0.05f);
    var port7 = pca9685.CreatePwmPort(7);

    port0.Start();
    port7.Start();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Pca9685/Samples/Pca9685_Sample)

### Wiring Example

To wire a PCA9685 to your Meadow board, connect the following:

<img src="../../API_Assets/Meadow.Foundation.ICs.IOExpanders.Pca9685/Pca9685_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

