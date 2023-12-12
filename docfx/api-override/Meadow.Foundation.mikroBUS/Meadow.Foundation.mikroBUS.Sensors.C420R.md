---
uid: Meadow.Foundation.mikroBUS.Sensors.C420R
remarks: *content
---

| C420R | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.MikroBus/tree/main/Source/C420R) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.mikroBUS.Sensors.C420R/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.mikroBUS.Sensors.C420R.svg?label=Meadow.Foundation.mikroBUS.Sensors.C420R" alt="NuGet Gallery for Meadow.Foundation.mikroBUS.Sensors.C420R" /></a> |
### Code Example

```csharp
private C420R receiver;

public override Task Initialize()
{
    Console.WriteLine("Initializing ...");

    receiver = new C420R(Device.CreateSpiBus(), Device.Pins.D00);

    return Task.CompletedTask;
}

public override async Task Run()
{
    while (true)
    {
        var r = await receiver.Read();
        Resolver.Log.Info($"Reading: {r.Milliamps:0.00} mA");
        await Task.Delay(1000);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.MikroBus/tree/main/Source/C420R/Sample/C420R_Sample)

