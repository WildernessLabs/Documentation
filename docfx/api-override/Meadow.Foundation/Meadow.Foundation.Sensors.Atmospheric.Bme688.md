---
uid: Meadow.Foundation.Sensors.Atmospheric.Bme688
remarks: *content
---

| Bme688 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/develop/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Bme68x/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Bme68x.svg?label=Meadow.Foundation.Sensors.Atmospheric.Bme68x" /></a> |

### Code Example

```csharp
Bme688 sensor;

public MeadowApp()
{
    Console.WriteLine("Initializing...");

    //CreateSpiSensor();
    CreateI2CSensor();

    Console.WriteLine("A");

    var consumer = Bme688.CreateObserver(
        handler: result =>
        {
            Console.WriteLine($"Observer: Temp changed by threshold; new temp: {result.New.Temperature?.Celsius:N2}C, old: {result.Old?.Temperature?.Celsius:N2}C");
        },
        filter: result =>
        {
            //c# 8 pattern match syntax. checks for !null and assigns var.
            if (result.Old is { } old)
            {
                return (
                (result.New.Temperature.Value - old.Temperature.Value).Abs().Celsius > 0.5
                &&
                (result.New.Humidity.Value - old.Humidity.Value).Percent > 0.05
                );
            }
            return false;
        }
    );
    sensor.Subscribe(consumer);

    Console.WriteLine("B");

    sensor.Updated += (sender, result) => {
        Console.WriteLine($"  Temperature: {result.New.Temperature?.Celsius:N2}C");
        Console.WriteLine($"  Relative Humidity: {result.New.Humidity:N2}%");
        Console.WriteLine($"  Pressure: {result.New.Pressure?.Millibar:N2}mbar ({result.New.Pressure?.Pascal:N2}Pa)");
    };

    Console.WriteLine("D");

    sensor.StartUpdating(TimeSpan.FromSeconds(1));

    Console.WriteLine("C");

    ReadConditions().Wait();

    Console.WriteLine("E");
}

void CreateSpiSensor()
{
    Console.WriteLine("Create Bme688 sensor with SPI...");

    var spiBus = Device.CreateSpiBus();
    sensor = new Bme688(spiBus, Device.CreateDigitalOutputPort(Device.Pins.D14));
}

void CreateI2CSensor()
{
    Console.WriteLine("Create Bme688 sensor with I2C...");

    var i2c = Device.CreateI2cBus();
    sensor = new Bme688(i2c, (byte)Bme688.Addresses.Default); // SDA pulled up

}

async Task ReadConditions()
{
    var conditions = await sensor.Read();
    Console.WriteLine("Initial Readings:");
    Console.WriteLine($"  Temperature: {conditions.Temperature?.Celsius:N2}C");
    Console.WriteLine($"  Pressure: {conditions.Pressure?.Bar:N2}hPa");
    Console.WriteLine($"  Relative Humidity: {conditions.Humidity?.Percent:N2}%");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme688/Samples/Sensors.Atmospheric.Bme688_Sample)

### Wiring Example

To wire a Bme688 to your Meadow board, connect the following:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Atmospheric.Bme688/Bme688_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />