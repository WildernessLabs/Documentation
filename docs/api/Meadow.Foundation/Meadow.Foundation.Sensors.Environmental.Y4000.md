---
uid: Meadow.Foundation.Sensors.Environmental.Y4000

---

| Y4000 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Environmental.Y4000/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Environmental.Y4000.svg?label=Meadow.Foundation.Sensors.Environmental.Y4000" alt="NuGet Gallery for Meadow.Foundation.Sensors.Environmental.Y4000" /></a> |

### Code Example

```csharp
Y4000 sensor;

public async override Task Initialize()
{
    Resolver.Log.Info("Initialize...");
    await Task.Delay(2000);

    sensor = new Y4000(Device, Device.PlatformOS.GetSerialPortName("COM4"), 0x01, Device.Pins.D09);
    await sensor.Initialize();

    await Task.Delay(2000);
}

public override async Task Run()
{
    Resolver.Log.Info("Run...");

    var isdn = await sensor.GetISDN();
    Resolver.Log.Info($"Address: {isdn}");

    var supplyVoltage = await sensor.GetSupplyVoltage();
    Resolver.Log.Info($"Supply voltage: {supplyVoltage}");

    var measurements = await sensor.Read();

    Resolver.Log.Info($"Sensor data: {measurements}");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Y4000/Samples/Y4000_Sample)

