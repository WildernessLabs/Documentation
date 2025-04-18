---
uid: Meadow.Foundation.Sensors.HallEffect.LinearHallEffectTachometer
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.HallEffect.LinearHallEffectTachometer
---

| LinearHallEffectTachometer |  |
|-----------|----------------|
| Status    | Not Tested     |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Sensors/HallEffect) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" style={{ width: "auto", height: "-webkit-fill-available" }}/></a> |

A Hall effect sensor is a device that is used to measure the magnitude of a magnetic field. Its output voltage is directly proportional to the magnetic field strength through it. These sensors are commonly used for proximity sensing, positioning, speed detection, and current sensing applications.

Frequently, a Hall sensor is combined with threshold detection so that it acts as and is called a switch. Commonly seen in industrial applications such as the pictured pneumatic cylinder, they are also used in consumer equipment; for example some computer printers use them to detect missing paper and open covers. They can also be used in computer keyboards, an application that requires ultra-high reliability.

Hall sensors are commonly used to time the speed of wheels and shafts, such as for internal combustion engine ignition timing, tachometers and anti-lock braking systems. They are used in brushless DC electric motors to detect the position of the permanent magnet. In the pictured wheel with two equally spaced magnets, the voltage from the sensor will peak twice for each revolution. This arrangement is commonly used to regulate the speed of disk drives.

The following example instantiates a LinearHallEffectTachometer object, and registers the RPMsChanged event handler, and it outputs the RPMs in the output console. To trigger the event of the sensor, you can place a magnet on a rotating object like a small motor, or even a fidget spinner, and make sure that the magnet passes very close to the sensor in every rotation so it picks up the electromagnetic field and it will start measuring RPMs.

### Code Example

The following example prints horizontal and vertical values ranging from -1 to 1, 0 being the center position:

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    public MeadowApp()
    {
        LinearHallEffectTachometer hallSensor;

        public MeadowApp()
        {
            Console.Write("Initializing...");

            hallSensor = new LinearHallEffectTachometer(
                inputPort: Device.CreateDigitalInputPort(Device.Pins.D02, Meadow.Hardware.InterruptMode.EdgeRising, Meadow.Hardware.ResistorMode.InternalPullUp, 0, 10),
                type: CircuitTerminationType.CommonGround,
                numberOfMagnets: 2,
                rpmChangeNotificationThreshold: 1);
            hallSensor.RPMsChanged += HallSensorRPMsChanged;

            Console.WriteLine("done");
        }

        void HallSensorRPMsChanged(object sender, ChangeResult<float> e)
        {
            Console.WriteLine($"RPM: {e.New}");
        }
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples) 

### Wiring Example

<img src="/API_Assets/Meadow.Foundation.Sensors.HallEffect.LinearHallEffectTachometer/LinearHallEffectTachometer_Fritzing.svg" />
