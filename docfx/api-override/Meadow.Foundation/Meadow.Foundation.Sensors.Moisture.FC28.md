---
uid: Meadow.Foundation.Sensors.Moisture.Fc28
remarks: *content
---

| FC-28         |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.FC28) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Moisture.FC28/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Moisture.Fc28.svg?label=Meadow.Foundation.Sensors.Moisture.Fc28" style="width: auto; height: -webkit-fill-available;" /></a> |

**FC-28** Soil Moisture Sensor is a simple breakout for measuring the moisture in soil and similar materials. The sensor has two probes and measures the resistance between them, which means this sensor is of type Resistive. Since water is conductive, as moisture in the soil increases, the resistance decreases allowing the sensor to determine soil humidity. 

<img src="../../API_Assets/Meadow.Foundation.Sensors.Moisture.FC28/img_FC28.jpg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

The biggest issue of this sensor is the corrosion of the probes, not just because it is in contact with the soil but also because there is a DC current flowing which causes electrolysis of the sensors. A work-around to prolong the life of the probes is to not constantly have the sensor powered on, but activate it every time the sensor will perform a read using a digital output port connected to the VCC pin. The code and circuit example shows you how to use it.

The following example shows how read the soil moisture every second:

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Fc28 fc28;

    public MeadowApp()
    {
        Console.WriteLine("Initializing...");

        fc28 = new Fc28(
            Device.CreateAnalogInputPort(Device.Pins.A01),
            Device.CreateDigitalOutputPort(Device.Pins.D15),
            minimumVoltageCalibration: 3.24f,
            maximumVoltageCalibration: 2.25f
        );

        TestFC28Updating();
    }

    void TestFC28Updating() 
    {
        Console.WriteLine("TestFC28Updating...");

        fc28.Subscribe(new FilterableObserver<FloatChangeResult, float>(
            h => { Console.WriteLine($"Moisture values: {Math.Truncate(h.New)}, old: {Math.Truncate(h.Old)}, delta: {h.DeltaPercent}"); },
            e => { return true; }
        ));

        fc28.Updated += (object sender, FloatChangeResult e) =>
        {
            Console.WriteLine($"Moisture Updated: {e.New}");
        };

        fc28.StartUpdating();
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Moisture.FC28/Samples/) 

### Wiring Example

<img src="../../API_Assets/Meadow.Foundation.Sensors.Moisture.FC28/FC28.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />