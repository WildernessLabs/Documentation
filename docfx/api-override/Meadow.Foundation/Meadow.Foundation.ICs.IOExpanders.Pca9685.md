---
uid: Meadow.Foundation.ICs.IOExpanders.Pca9685
remarks: *content
---

| Pca9685       |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.PCA9685) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.Pca9685/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.Pca9685.svg?label=Meadow.Foundation.ICs.IOExpanders.Pca9685" style="width: auto; height: -webkit-fill-available;" /></a> |

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Pca9685 pca9685;

    public MeadowApp()
    {
        Initialize();
        Run();
    }

    void Initialize()
    {
        Console.WriteLine("Initialize hardware...");
        var i2CBus = Device.CreateI2cBus(I2cBusSpeed.FastPlus);

        pca9685 = new Pca9685(i2CBus, 0x40, 50);
        pca9685.Initialize();
    }

    public void Run()
    {
        var port0 = pca9685.CreatePwmPort(0, 0.05f);
        var port7 = pca9685.CreatePwmPort(7);

        port0.Start();
        port7.Start();
    }
}
```