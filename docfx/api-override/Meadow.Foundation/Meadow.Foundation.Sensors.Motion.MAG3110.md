---
uid: Meadow.Foundation.Sensors.Motion.Mag3110
remarks: *content
---

| MAG3110       |             |
|---------------|-------------|
| Status        | Not tested  |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mag3110) |
| NuGet package | Not published |

The **MAG3110** is a three axis magnetometer with an I2C interface. The magnetometer is capable of single and continuous readings.

### Code Example

This library supports interrupts when the sensor completes a reading:

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    public MeadowApp()
    {
        Console.WriteLine("MAG3110 Test Application");
        Mag3110 mag3110 = new Mag3110(0x0e, 400, Pins.GPIO_PIN_D8);
        mag3110.OnReadingComplete += mag3110_OnReadingComplete;
        mag3110.InterruptsEnabled = true;
        mag3110.Standby = false;
        Thread.Sleep(Timeout.Infinite);
    }

    static void mag3110_OnReadingComplete(Mag3110.SensorReading sensorReading)
    {
        Console.WriteLine(
            "Reading: x = " + sensorReading.X.ToString() + 
            ", y = " + sensorReading.Y.ToString() + 
            ", z = " + sensorReading.Z.ToString());
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.Motion.Mag3110/Samples/) 

### Polling Mode

The following application reads the values from the magnetometer and displays the readings on the debug output:

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    public MeadowApp()
    {
        Console.WriteLine("MAG3110 Test Application");
        Mag3110 mag3110 = new Mag3110();
        mag3110.Standby = false;
        int readingCount = 0;

        while (true)
        {
            mag3110.Read();
            readingCount++;
            Console.WriteLine(
                "Reading " + readingCount.ToString() + 
                ": x = " + mag3110.X.ToString() + 
                ", y = " + mag3110.Y.ToString() + 
                ", z = " + mag3110.Z.ToString());
            Thread.Sleep(1000);
        }
    }
}
```

### Wiring Example

In it's basic configuration the magnetometer requires four connections:

| Meadow Pin   | Sensor Pin     | Wire Color |
|--------------|----------------|------------|
| 3.3V         | V<sub>cc</sub> | Red        |
| GND          | GND            | Black      |
| SC           | SCK            | Green      |
| SD           | SDA            | Blue       |
| D8           | INT1           | Orange     |

<img src="../../API_Assets/Meadow.Foundation.Sensors.Motion.MAG3110/MAG3110.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />