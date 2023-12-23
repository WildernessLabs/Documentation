---
uid: Meadow.Foundation.Sensors.Distance.A02yyuw

---

| A02yyuw | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Distance.A02yyuw/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Distance.A02yyuw.svg?label=Meadow.Foundation.Sensors.Distance.A02yyuw" alt="NuGet Gallery for Meadow.Foundation.Sensors.Distance.A02yyuw" /></a> |

### Code Example

```csharp
A02yyuw a02yyuw;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    a02yyuw = new A02yyuw(Device, Device.PlatformOS.GetSerialPortName("COM1"));

    var consumer = A02yyuw.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Observer: Distance changed by threshold; new distance: {result.New.Centimeters:N1}cm, old: {result.Old?.Centimeters:N1}cm");
        },
        filter: result =>
        {
            if (result.Old is { } old)
            {
                return Math.Abs((result.New - old).Centimeters) > 0.5;
            }
            return false;
        }
    );
    a02yyuw.Subscribe(consumer);

    a02yyuw.DistanceUpdated += A02yyuw_DistanceUpdated;

    return Task.CompletedTask;
}

public override async Task Run()
{
    Resolver.Log.Info("Run...");

    var distance = await a02yyuw.Read();
    Resolver.Log.Info($"Initial distance is: {distance.Centimeters:N1}cm / {distance.Inches:N1}in");

    a02yyuw.StartUpdating(TimeSpan.FromSeconds(2));
}

private void A02yyuw_DistanceUpdated(object sender, IChangeResult<Length> e)
{
    Resolver.Log.Info($"Distance: {e.New.Centimeters:N1}cm / {e.New.Inches:N1}in");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.A02yyuw/Samples/A02yyuw_Sample)

