---
uid: Meadow.Foundation.Sensors.Atmospheric.Ccs811
remarks: *content
---

| Ccs811 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ccs811) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Atmospheric.Ccs811/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Atmospheric.Ccs811.svg?label=Meadow.Foundation.Sensors.Atmospheric.Ccs811" /></a> |

### Code Example

```csharp
Ccs811 sensor;

public MeadowApp()
{
    Console.WriteLine("Initializing...");

    var i2c = Device.CreateI2cBus(Meadow.Hardware.I2cBusSpeed.Fast);
    sensor = new Ccs811(i2c);

    var consumer = Ccs811.CreateObserver(
        handler: result => 
        {
            Console.WriteLine($"Observer triggered:");
            Console.WriteLine($"   new CO2: {result.New.Co2?.PartsPerMillion:N1}ppm, old: {result.Old?.Co2?.PartsPerMillion:N1}ppm.");
            Console.WriteLine($"   new VOC: {result.New.Voc?.PartsPerBillion:N1}ppb, old: {result.Old?.Voc?.PartsPerBillion:N1}ppb.");
        },
        filter: result => 
        {
            //c# 8 pattern match syntax. checks for !null and assigns var.
            if (result.Old is { } old) 
            { 
                return (
                (result.New.Co2.Value - old.Co2.Value).Abs().PartsPerMillion > 1000 // 1000ppm
                  &&
                (result.New.Voc.Value - old.Voc.Value).Abs().PartsPerBillion > 100 // 100ppb
                );
            }
            return false;
        }                
    );
    sensor.Subscribe(consumer);

    sensor.Updated += (sender, result) => 
    {
        Console.WriteLine($"CO2: {result.New.Co2.Value.PartsPerMillion:n1}ppm, VOC: {result.New.Voc.Value.PartsPerBillion:n1}ppb");
    };

    ReadConditions().Wait();

    sensor.StartUpdating(TimeSpan.FromSeconds(1));
}

async Task ReadConditions()
{
    var result = await sensor.Read();
    Console.WriteLine("Initial Readings:");
    Console.WriteLine($"  CO2: {result.Co2.Value.PartsPerMillion:n1}ppm");
    Console.WriteLine($"  VOC: {result.Voc.Value.PartsPerBillion:n1}ppb");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Atmospheric.Ccs811/Samples/Sensors.Atmospheric.Ccs811_Sample)

### Wiring Example

To wire a Ccs811 to your Meadow board, connect the following:

| Ccs811     | Meadow Pin |
|-----------|------------|
| GND       | GND        |
| VCC       | 3V3        |
| SCL       | D08        |
| SDA       | D07        |

It should look like the following diagram:

<img src="../../API_Assets/Meadow.Foundation.Sensors.Atmospheric.Ccs811/Ccs811_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

