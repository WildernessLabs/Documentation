---
uid: Meadow.Foundation.Sensors.Atmospheric.Bmp085

---

| Bmp085 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bmp085) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bmp085/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Bmp085/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Bmp085.svg?label=Meadow.Foundation.Sensors.Atmospheric.Bmp085" alt="NuGet Gallery for Meadow.Foundation.Sensors.Atmospheric.Bmp085" /></a> |

The **BMP085** is a high-precision, low-power barometric pressure sensor. The BMP085 offers a measuring range of 300 to 1100 hPa with an absolute accuracy of down to 0.03 hPa. It's based on piezo-resistive technology for EMC robustness, high accuracy and linearity as well as long term stability. This sensor supports a voltage supply between 1.8 and 3.6VDC. It is designed to be connected directly to a micro-controller via the I2C bus.

### Code Example

```csharp
Bmp085? sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    sensor = new Bmp085(Device.CreateI2cBus());

    var consumer = Bmp085.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Observer: Temp changed by threshold; new temp: {result.New.Temperature?.Celsius:N2}C, old: {result.Old?.Temperature?.Celsius:N2}C");
        },
        filter: result =>
        {
            if (result.Old?.Temperature is { } oldTemp &&
                result.New.Temperature is { } newTemp)
            {
                return (newTemp - oldTemp).Abs().Celsius > 0.5; // returns true if > 0.5°C change.
            }
            return false;
        }
    );
    sensor.Subscribe(consumer);

    sensor.Updated += (sender, result) =>
    {
        Resolver.Log.Info($"  Temperature: {result.New.Temperature?.Celsius:N2}C");
        Resolver.Log.Info($"  Pressure: {result.New.Pressure?.Bar:N2}bar");
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    if (sensor == null) { return; }

    var conditions = await sensor.Read();
    Resolver.Log.Info($"Temperature: {conditions.Temperature?.Celsius}°C, Pressure: {conditions.Pressure?.Pascal}Pa");

    sensor.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bmp085/Samples/Bmp085_Sample)

### Wiring Example

To wire a BMP085 to your Meadow board, connect the following:

| BMP085  | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| SCL     | D08 (SCL)   |
| SDA     | D07 (SDA)   |
| VCC     | 3V3         |

It should look like the following diagram:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Atmospheric.BMP085/BMP085_Fritzing.svg" />




