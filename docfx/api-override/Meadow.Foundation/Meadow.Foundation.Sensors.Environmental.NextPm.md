---
uid: Meadow.Foundation.Sensors.Environmental.NextPm

---

| NextPm | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.NextPm) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.NextPm/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Environmental.NextPm/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Environmental.NextPm.svg?label=Meadow.Foundation.Sensors.Environmental.NextPm" alt="NuGet Gallery for Meadow.Foundation.Sensors.Environmental.NextPm" /></a> |

### Code Example

```csharp
NextPm nextPm;

public override Task Initialize()
{
    var port = Device
        .PlatformOS
        .GetSerialPortName("COM1")
        .CreateSerialPort();

    nextPm = new NextPm(port);

    nextPm.Readings10sUpdated += NextPm_Readings10sUpdated;

    return Task.CompletedTask;
}

private void NextPm_Readings10sUpdated(object sender, IChangeResult<ParticulateReading> e)
{
    Resolver.Log.Info($"Past 10 seconds");
    Resolver.Log.Info($"  {e.New.CountOf1micronParticles.ParticlesPerLiter:0} 1 micron particles per liter");
    Resolver.Log.Info($"  {e.New.CountOf2_5micronParticles.ParticlesPerLiter:0} 2.5 micron particles per liter");
    Resolver.Log.Info($"  {e.New.CountOf10micronParticles.ParticlesPerLiter:0} 10 micron particles per liter");
    Resolver.Log.Info($"  {e.New.EnvironmentalPM_1micron.MicroGramsPerMetersCubed:0} ug/L^3 1 micron particles");
    Resolver.Log.Info($"  {e.New.EnvironmentalPM_2_5micron.MicroGramsPerMetersCubed:0} ug/L^3 1 micron particles");
    Resolver.Log.Info($"  {e.New.EnvironmentalPM_10micron.MicroGramsPerMetersCubed:0} ug/L^3 1 micron particles");
}

public override async Task Run()
{
    Resolver.Log.Info("Run...");

    var firmware = await nextPm.GetFirmwareVersion();
    Resolver.Log.Info($"Firmware: 0x{firmware:X4}");

    var tempAndHumidity = await nextPm.GetTemperatureAndHumidity();
    Resolver.Log.Info($"Temp: {tempAndHumidity.temperature:0.0}C  Humidity: {tempAndHumidity.humidity}%");

    nextPm.StartUpdating();
}


```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.NextPm/Samples/NextPm_Sample)

