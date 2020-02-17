---
uid: Meadow.Foundation.Sensors.Atmospheric.Ms5611
remarks: *content
---

| Ms5611        |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ms5611) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Ms5611/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Ms5611.svg?label=Meadow.Foundation.Sensors.Atmospheric.Ms5611" style="width: auto; height: -webkit-fill-available;" /></a> |

The MS5611 is a barometer and temperature sensor that communicates over I2C or SPI up to 20Mhz. Operating range: 10 to 1200 mbar, -40 to +85 °C.

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    public MeadowApp()
    {
        Console.WriteLine("Ms5611App");

        Ms5611I2cTest();
        //   Ms5611SpiTest();
    }

    void Ms5611I2cTest()
    {
        Console.WriteLine("MS5611 I2C Test");

        var i2c = Device.CreateI2cBus();
        var sensor = new Ms5611(i2c);

        while (true)
        {
            Thread.Sleep(1000);

            Console.WriteLine(" Reading Temp...");
            sensor.ReadTemperature();

            Console.WriteLine(" Reading Pressure...");
            sensor.ReadPressure();
            
            Thread.Sleep(1000);
        }
    }

    void Ms5611SpiTest()
    {
        Console.WriteLine("MS5611 SPI Test");

        var spi = Device.CreateSpiBus();
        var sensor = new Ms5611(spi, Device.Pins.D00);

        while (true)
        {
            Console.WriteLine(" Reading...");
            Thread.Sleep(2000);
        }
    }
}
```
[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ms5611/Samples/Sensors.Atmospheric.Ms5611_Sample) 

### Wiring Example

To wire a Ms5611 to your Meadow board, connect the following:

| Ms5611 | Meadow Pin  |
|--------|-------------|
| GND    | GND         |
| SCL    | D08 (SCL)   |
| SDA    | D07 (SDA)   |
| VCC    | 3V3         |

It should look like the following diagram:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Atmospheric.Ms5611/Ms5611_Frizzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />