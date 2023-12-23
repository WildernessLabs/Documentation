---
uid: Meadow.Foundation.mikroBUS.Sensors.CACCurrent

---

| CACCurrent | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.MikroBus/tree/main/Source/CACCurrent) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.mikroBUS.Sensors.Buttons.CACCurrent/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.mikroBUS.Sensors.Buttons.CACCurrent.svg?label=Meadow.Foundation.mikroBUS.Sensors.Buttons.CACCurrent" alt="NuGet Gallery for Meadow.Foundation.mikroBUS.Sensors.Buttons.CACCurrent" /></a> |

### Code Example

```csharp
private CACCurrent currentClick;
private const bool useSpi = false;

public override Task Initialize()
{
    Console.WriteLine("Initializing ...");

    if (useSpi)
    {
        currentClick = new CACCurrent(
            Device.CreateSpiBus(),
            Device.Pins.D14.CreateDigitalOutputPort());
    }
    else
    {
        currentClick = new CACCurrent(Device.Pins.A00.CreateAnalogInputPort(5));
    }

    currentClick.CurrentUpdated += OnCurrentUpdated;
    currentClick.StartUpdating();

    return Task.CompletedTask;
}

public override async Task Run()
{
    while (true)
    {
        var r = await currentClick.Read();
        Resolver.Log.Info($"Reading: {r.Amps:0.00} A");
        await Task.Delay(1000);
    }
}

private void OnCurrentUpdated(object sender, IChangeResult<Meadow.Units.Current> e)
{
    Resolver.Log.Info($"Current changed from {(e.Old ?? new Meadow.Units.Current(0)).Amps}A to {e.New.Amps}A");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.MikroBus/tree/main/Source/CACCurrent/Sample/CACCurrent_Sample)

