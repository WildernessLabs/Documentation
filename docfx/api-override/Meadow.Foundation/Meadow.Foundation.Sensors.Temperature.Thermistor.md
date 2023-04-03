---
uid: Meadow.Foundation.Sensors.Temperature.Thermistor
remarks: *content
---

| Thermistor | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Temperature.Thermistor/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Temperature.Thermistor.svg?label=Meadow.Foundation.Sensors.Temperature.Thermistor" alt="NuGet Gallery for Meadow.Foundation.Sensors.Temperature.Thermistor" /></a> |
### Code Example

```csharp
private SteinhartHartCalculatedThermistor thermistor;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    thermistor = new SteinhartHartCalculatedThermistor(Device.CreateAnalogInputPort(Device.Pins.A00), new Resistance(10, Meadow.Units.Resistance.UnitType.Kiloohms));

    var consumer = SteinhartHartCalculatedThermistor.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Temperature New Value {result.New.Fahrenheit:N1}F/{result.New.Celsius:N1}C");
            Resolver.Log.Info($"Temperature Old Value {result.Old?.Fahrenheit:N1}F/{result.Old?.Celsius:N1}C");
        },
        filter: null
    );
    thermistor.Subscribe(consumer);

    thermistor.TemperatureUpdated += (object sender, IChangeResult<Meadow.Units.Temperature> e) =>
    {
        Resolver.Log.Info($"Temperature Updated: {e.New.Fahrenheit:N1}F/{e.New.Celsius:N1}C");
    };

    return Task.CompletedTask;
}

public override async Task Run()
{
    var temp = await thermistor.Read();
    Resolver.Log.Info($"Current temperature: {temp.Fahrenheit:N1}F/{temp.Celsius:N1}C");

    thermistor.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Temperature.Thermistor/Samples/Thermistor_Sample)

