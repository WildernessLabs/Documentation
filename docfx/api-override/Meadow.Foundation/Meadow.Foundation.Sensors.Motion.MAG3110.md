---
uid: Meadow.Foundation.Sensors.Motion.MAG3110
remarks: *content
---

The MAG3110 is a three axis magnetometer with an I2C interface.  The magnetometer is capable of single shot readings and also continuous readings.

---
uid: Meadow.Foundation.Sensors.Motion.MAG3110
example: [*content]
---

### Interrupt Mode

This library supports interrupts when the sensor completes a reading:

```csharp
using System.Threading;
using Meadow;
using Meadow.Foundation.Sensors.Motion;

namespace MAG3110_Sample
{
    public class Program
    {
        static IApp _app; 
        public static void Main()
        {
            _app = new App();
        }
    }
    
    public class App : AppBase<F7Micro, App>
    {
        public App ()
        {
            Console.WriteLine("MAG3110 Test Application");
            MAG3110 mag3110 = new MAG3110(0x0e, 400, Pins.GPIO_PIN_D8);
            mag3110.OnReadingComplete += mag3110_OnReadingComplete;
            mag3110.InterruptsEnabled = true;
            mag3110.Standby = false;
            Thread.Sleep(Timeout.Infinite);
        }

        static void mag3110_OnReadingComplete(MAG3110.SensorReading sensorReading)
        {
            Console.WriteLine(
                "Reading: x = " + sensorReading.X.ToString() + 
                ", y = " + sensorReading.Y.ToString() + 
                ", z = " + sensorReading.Z.ToString());
        }
    }
}
```

### Polling Mode

The following application reads the values from the magnetometer and displays the readings on the debug output:

```csharp
using System.Threading;
using Meadow;
using Meadow.Foundation.Sensors.Motion;

namespace MAG3110_Sample
{
    public class Program
    {
        static IApp _app; 
        public static void Main()
        {
            _app = new App();
        }
    }
    
    public class App : AppBase<F7Micro, App>
    {
        public App ()
        {
            Console.WriteLine("MAG3110 Test Application");
            MAG3110 mag3110 = new MAG3110();
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
}
```

##### Example Circuit

In it's basic configuration the magnetometer requires four connections:

| Meadow Pin   | Sensor Pin     | Wire Color |
|--------------|----------------|------------|
| 3.3V         | V<sub>cc</sub> | Red        |
| GND          | GND            | Black      |
| SC           | SCK            | Green      |
| SD           | SDA            | Blue       |
| D8           | INT1           | Orange     |

![](../../API_Assets/Meadow.Foundation.Sensors.Motion.MAG3110/MAG3110.svg)