---
uid: Meadow.Foundation.Sensors.Motion.Hcsens0040
remarks: *content
---

| Hcsen0040     |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Hcsens0040) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.Motion.Hcsens0040/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.Motion.Hcsens0040.svg?label=Meadow.Foundation.Sensors.Motion.Hcsens0040" style="width: auto; height: -webkit-fill-available;" /></a> |

The HCSENS0040 is a microwave motion detector commonly found on the RCWL-0516 board. It detects relative motion using the doppler effect. It uses a single GPIO pin to notify Meadow when motion is detected.

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Hcsens0040 sensor;
    Led blueLed;

    public MeadowApp()
    {
        sensor = new Hcsens0040(Device.CreateDigitalInputPort(Device.Pins.D05));
        sensor.OnMotionDetected += ParallaxPirOnMotionStart;

        blueLed = new Led(Device.CreateDigitalOutputPort(Device.Pins.OnboardLedBlue));
    }

    //here's an example where it's ok to use async void
    //the method signature is required to be void because of the event
    async void ParallaxPirOnMotionStart(object sender)
    {
        Console.WriteLine($"Motion started {DateTime.Now}");
        blueLed.IsOn = true;

        await Task.Delay(2000);

        blueLed.IsOn = false;
    }
}
```
[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Hcsens0040/Samples/Sensors.Motion.Hcsens0040_Sample) 

### Wiring Example

To wire a Hcsens0040 to your Meadow board, connect the following:

| Hcsens0040 | Meadow Pin  |
|------------|-------------|
| GND        | GND         |
| TriggerOut | D05         |
| VCC        | 3V3         |
