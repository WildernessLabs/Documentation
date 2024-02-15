---
uid: Meadow.Foundation.Sensors.Environmental.MiniPID2
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.MiniPID2
---

| MiniPID2 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.MiniPID2) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.MiniPID2/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Environmental.MiniPID2/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Environmental.MiniPID2.svg?label=Meadow.Foundation.Sensors.Environmental.MiniPID2" alt="NuGet Gallery for Meadow.Foundation.Sensors.Environmental.MiniPID2" /></a> |

### Code Example

```csharp
MiniPID2 sensor;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    sensor = new MiniPID2(Device.Pins.A01, MiniPID2.MiniPID2Type.PPB_WR);

    var consumer = MiniPID2.CreateObserver(
        handler: result =>
        {
            Resolver.Log.Info($"Observer: VOC concentration changed by threshold; new: {result.New.PartsPerBillion:N1}ppm");
        },
        filter: result =>
        {
            if (result.Old is { } oldCon &&
                result.New is { } newCon)
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
            Resolver.Log.Info($"  VOC Concentration: {result.New.PartsPerMillion:N1}ppm");
        };
    }

    sensor?.StartUpdating(TimeSpan.FromSeconds(2));

    return base.Initialize();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.MiniPID2/Samples/MiniPID2_Sample)

