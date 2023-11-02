---
uid: Meadow.Foundation.mikroBUS.Sensors.C420T
remarks: *content
---

| C420T | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.MikroBus/tree/main/Source/C420T) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.mikroBUS.Sensors.C420T/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.mikroBUS.Sensors.C420T.svg?label=Meadow.Foundation.mikroBUS.Sensors.C420T" alt="NuGet Gallery for Meadow.Foundation.mikroBUS.Sensors.C420T" /></a> |
### Code Example

```csharp
private C420T transmitter;

public override Task Initialize()
{
    Console.WriteLine("Initializing ...");

    transmitter = new C420T(Device.CreateSpiBus(), Device.Pins.D00);

    return Task.CompletedTask;
}

public override async Task Run()
{
    var ma = 4;
    var direction = 1;

    while (true)
    {
        ma += direction;
        if (ma == 20)
        {
            direction = -1;
        }
        else if (ma == 4)
        {
            direction = 1;
        }

        var val = new Meadow.Units.Current(ma, Meadow.Units.Current.UnitType.Milliamps);

        Resolver.Log.Info($"Writing: {val.Milliamps:0.00} mA");
        transmitter?.GenerateOutput(val);

        await Task.Delay(1000);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.MikroBus/tree/main/Source/C420T/Sample/C420T_Sample)


