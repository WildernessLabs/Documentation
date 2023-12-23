---
uid: Meadow.Foundation.Sensors.Atmospheric.Bh1900Nux

---

| Bh1900Nux | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Bh1900Nux/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Bh1900Nux.svg?label=Meadow.Foundation.Sensors.Atmospheric.Bh1900Nux" alt="NuGet Gallery for Meadow.Foundation.Sensors.Atmospheric.Bh1900Nux" /></a> |

### Code Example

```csharp
private Bh1900Nux _sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    _sensor = new Bh1900Nux(Device.CreateI2cBus(), Bh1900Nux.Addresses.Default);

    var consumer = Bh1900Nux.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Observer: Temp changed by threshold; new temp: {result.New.Celsius:N2}C, old: {result.Old?.Celsius:N2}C");
        },
        filter: result =>
        {
            if (result.Old is { } old)
            {
                return (result.New - old).Abs().Celsius > 0.5;
            }
            return false;
        }
    );
    _sensor.Subscribe(consumer);

    _sensor.Updated += (sender, result) =>
    {
        Resolver.Log.Info($"  Temperature: {result.New.Celsius:N2}C");
    };

    return Task.CompletedTask;
}

public async override Task Run()
{
    var conditions = await _sensor.Read();
    Resolver.Log.Info("Initial Readings:");
    Resolver.Log.Info($"  Temperature: {conditions.Celsius:N2}C");

    _sensor.StartUpdating(TimeSpan.FromSeconds(1));
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Bh1900Nux/Samples/Bh1900Nux_Sample)

### Wiring Example

To wire a Adafruit Bh1900Nux Sensor to your Meadow board, connect the following:

| Bh1900Nux  | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| SCL    | D08        |
| SDA    | D07        |




