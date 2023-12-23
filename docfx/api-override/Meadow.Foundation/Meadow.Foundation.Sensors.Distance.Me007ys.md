---
uid: Meadow.Foundation.Sensors.Distance.Me007ys

---

| Me007ys | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Me007ys) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Me007ys/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Distance.Me007ys/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Distance.Me007ys.svg?label=Meadow.Foundation.Sensors.Distance.Me007ys" alt="NuGet Gallery for Meadow.Foundation.Sensors.Distance.Me007ys" /></a> |

### Code Example

```csharp
Me007ys me007ys;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    me007ys = new Me007ys(Device, Device.PlatformOS.GetSerialPortName("COM1"));

    var consumer = Me007ys.CreateObserver(
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
    me007ys.Subscribe(consumer);

    me007ys.DistanceUpdated += Me007y_DistanceUpdated;

    return Task.CompletedTask;
}

public override async Task Run()
{
    Resolver.Log.Info("Run...");

    var distance = await me007ys.Read();
    Resolver.Log.Info($"Initial distance is: {distance.Centimeters:N1}cm / {distance.Inches:N1}in");

    me007ys.StartUpdating(TimeSpan.FromSeconds(2));
}

private void Me007y_DistanceUpdated(object sender, IChangeResult<Length> e)
{
    Resolver.Log.Info($"Distance: {e.New.Centimeters:N1}cm / {e.New.Inches:N1}in");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Distance.Me007ys/Samples/Me007ys_Sample)

