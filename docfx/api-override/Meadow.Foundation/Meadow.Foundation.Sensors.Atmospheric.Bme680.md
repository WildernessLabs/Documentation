---
uid: Meadow.Foundation.Sensors.Atmospheric.Bme680
remarks: *content
---

| Bme680 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Bme68x/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Bme68x.svg?label=Meadow.Foundation.Sensors.Atmospheric.Bme68x" alt="NuGet Gallery for Meadow.Foundation.Sensors.Atmospheric.Bme68x" /></a> |

### Code Example

```csharp
Bme680? sensor;

public override Task Initialize()
{
    Console.WriteLine("Initializing...");

    //CreateSpiSensor();
    CreateI2CSensor();

    //uncomment to enable on sensor heater for gas readings
    //EnableGasHeater();

    var consumer = Bme680.CreateObserver(
        handler: result =>
        {
            Console.WriteLine($"Observer: Temp changed by threshold; new temp: {result.New.Temperature?.Celsius:N2}C, old: {result.Old?.Temperature?.Celsius:N2}C");
        },
        filter: result =>
        {
            //c# 8 pattern match syntax. checks for !null and assigns var.
            if (result.Old?.Temperature is { } oldTemp &&
                result.Old?.Humidity is { } oldHumidity &&
                result.New.Temperature is { } newTemp && 
                result.New.Humidity is { } newHumidity)
            {
                return ((newTemp - oldTemp).Abs().Celsius > 0.5 &&
                        (newHumidity - oldHumidity).Percent > 0.05);
            }
            return false;
        }
    );

    sensor?.Subscribe(consumer);

    if(sensor != null)
    {
        sensor.Updated += (sender, result) =>
        {
            Console.WriteLine($"  Temperature: {result.New.Temperature?.Celsius:N2}C");
            Console.WriteLine($"  Relative Humidity: {result.New.Humidity:N2}%");
            Console.WriteLine($"  Pressure: {result.New.Pressure?.Millibar:N2}mbar ({result.New.Pressure?.Pascal:N2}Pa)");
            if (sensor.GasConversionIsEnabled)
            {
                Console.WriteLine($"  Gas Resistance: {result.New.GasResistance:N0}Ohms");
            }
        };
    }

    sensor?.StartUpdating(TimeSpan.FromSeconds(2));

    ReadConditions().Wait();

    return base.Initialize();
}

void EnableGasHeater()
{
    sensor.GasConversionIsEnabled = true;
    sensor.HeaterIsEnabled = true;
    sensor.ConfigureHeatingProfile(Bme688.HeaterProfileType.Profile1, new Meadow.Units.Temperature(300), TimeSpan.FromMilliseconds(100), new Meadow.Units.Temperature(22));
    sensor.HeaterProfile = Bme688.HeaterProfileType.Profile1;
}

void CreateSpiSensor()
{
    Console.WriteLine("Create BME680 sensor with SPI...");

    var spiBus = Device.CreateSpiBus();
    sensor = new Bme680(spiBus, Device.CreateDigitalOutputPort(Device.Pins.D14));
}

void CreateI2CSensor()
{
    Console.WriteLine("Create BME680 sensor with I2C...");

    var i2c = Device.CreateI2cBus();
    sensor = new Bme680(i2c, (byte)Bme688.Addresses.Address_0x76);
}

async Task ReadConditions()
{
    if(sensor == null) { return; }

    var (Temperature, Humidity, Pressure, Resistance) = await sensor.Read();

    Console.WriteLine("Initial Readings:");
    Console.WriteLine($"  Temperature: {Temperature?.Celsius:N2}C");
    Console.WriteLine($"  Pressure: {Pressure?.Hectopascal:N2}hPa");
    Console.WriteLine($"  Relative Humidity: {Humidity?.Percent:N2}%");
    Console.WriteLine($"  Gas Resistance: {Resistance?.Ohms:N0}Ohms");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bme68x/Samples/Bme680_Sample)

### Wiring Example

To wire a Bme680 to your Meadow board, connect the following:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Atmospheric.Bme680/Bme680_Fritzing.png" 
