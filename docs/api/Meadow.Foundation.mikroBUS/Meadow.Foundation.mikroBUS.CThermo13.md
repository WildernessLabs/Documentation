---
uid: Meadow.Foundation.mikroBUS.CThermo13
slug: /docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS.CThermo13
---

| CThermo13 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.MikroBus/tree/main/Source/CThermo13) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.mikroBUS.Sensors.Atmospheric.CThermo13/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.mikroBUS.Sensors.Atmospheric.CThermo13.svg?label=Meadow.Foundation.mikroBUS.Sensors.Atmospheric.CThermo13" alt="NuGet Gallery for Meadow.Foundation.mikroBUS.Sensors.Atmospheric.CThermo13" /></a> |
### Code Example

```csharp
private CThermo13 _thermo;

public MeadowApp()
{
    Console.WriteLine("Initializing...");

    _thermo = new CThermo13(Device.CreateI2cBus());

    var consumer = CThermo13.CreateObserver(
        handler: result =>
        {
            Console.WriteLine($"Observer: Temp changed by threshold; new temp: {result.New.Celsius:N2}C, old: {result.Old?.Celsius:N2}C");
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
    _thermo.Subscribe(consumer);

    _thermo.Updated += (sender, result) =>
    {
        Console.WriteLine($"  Temperature: {result.New.Celsius:N2}C");
    };

    ReadConditions().Wait();

    _thermo.StartUpdating(TimeSpan.FromSeconds(1));
}

private async Task ReadConditions()
{
    var conditions = await _thermo.Read();
    Console.WriteLine("Initial Readings:");
    Console.WriteLine($"  Temperature: {conditions.Celsius:N2}C");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.MikroBus/tree/main/Source/CThermo13/Sample/CThermo13_Sample)

