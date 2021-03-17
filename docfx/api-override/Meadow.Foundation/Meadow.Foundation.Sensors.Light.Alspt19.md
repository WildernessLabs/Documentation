---
uid: Meadow.Foundation.Sensors.Light.Alspt19
remarks: *content
---

| Alspt19       |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> | 
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Alspt19315C) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Light.Alspt19/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Light.Alspt19.svg?label=Meadow.Foundation.Sensors.Light.Alspt19" style="width: auto; height: -webkit-fill-available;" /></a> |

### Code Example

The following example shows how to initialize a Alspt19 sensor and print its readings on a console output:

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    public MeadowApp()
    {
        Alspt19315C sensor;

        public MeadowApp()
        {
            Initialize();

            Task.Run(async () =>
            {
                while(true)
                {
                    Console.WriteLine($"Voltage: {await sensor.GetVoltage()}");
                    await Task.Delay(500);
                }
            });
        }

        void Initialize()
        {
            Console.WriteLine("Init...");

            sensor = new Alspt19315C(Device, Device.Pins.A01);
        }

    
    }
}
```
[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Sensors.Light.Alspt19315C/Samples/Sensors.Light.Alspt19315C_Sample) 