---
uid: Meadow.Foundation.Sensors.Environmental.Ens160

---

| Ens160 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ens160) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ens160/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Environmental.Ens160/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Environmental.Ens160.svg?label=Meadow.Foundation.Sensors.Environmental.Ens160" alt="NuGet Gallery for Meadow.Foundation.Sensors.Environmental.Ens160" /></a> |

### Code Example

```csharp
Ens160 sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    var i2cBus = Device.CreateI2cBus(Meadow.Hardware.I2cBusSpeed.Standard);

    sensor = new Ens160(i2cBus, (byte)Ens160.Addresses.Address_0x53);


    var consumer = Ens160.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Observer: C02 concentration changed by threshold; new: {result.New.CO2Concentration?.PartsPerMillion:N0}ppm");
        },
        filter: result =>
        {
            if (result.Old?.CO2Concentration is { } oldCon &&
                result.New.CO2Concentration is { } newCon)
            {
                return Math.Abs((newCon - oldCon).PartsPerMillion) > 10;
            }
            return false;
        }
    );

    sensor?.Subscribe(consumer);

    if (sensor != null)
    {
        sensor.Updated += (sender, result) =>
        {
            Resolver.Log.Info($"  CO2 Concentration: {result.New.CO2Concentration?.PartsPerMillion:N0}ppm");
            Resolver.Log.Info($"  Ethanol Concentration: {result.New.EthanolConcentration?.PartsPerBillion:N0}ppb");
            Resolver.Log.Info($"  TVOC Concentration: {result.New.TVOCConcentration?.PartsPerBillion:N0}ppb");
            Resolver.Log.Info($"  AQI: {sensor.GetAirQualityIndex()}");
        };
    }

    sensor?.StartUpdating(TimeSpan.FromSeconds(2));

    return base.Initialize();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ens160/Samples/Ens160_Sample)

