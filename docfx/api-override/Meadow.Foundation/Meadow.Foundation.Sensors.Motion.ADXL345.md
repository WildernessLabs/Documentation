---
uid: Meadow.Foundation.Sensors.Motion.ADXL345
remarks: *content
---

The ADXL345 is a small, low power, triple axis acceleration sensor capable of measuring up to +/-16g with a resolution of 13-bits.

## Purchasing

The ADXL345 is available on a small breakout board:

* [Sparkfun ADXL345 Breakout Board](https://www.sparkfun.com/products/9836)

---
uid: Meadow.Foundation.Sensors.Motion.ADXL345
example: [*content]
---

The ADXL345 can operating in interrupt and polling mode.  Polling applications are responsible for determining when a sensor is read.  Interrupt applications will be notified when the sensor reading changes by + / - a threshold value.

### Interrupt Example

The application below demonstrates how to connect an interrupt handler to the ADXL345 sensor and display changes only when the acceleration changes in the x, y or z axis by more than the acceleration threshold (default is 5 units):

```csharp
using System.Threading;
using Meadow;
using Meadow.Foundation.Sensors.Motion;

namespace ADXL345_Sample
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
            Console.WriteLine("\n\n");
            Console.WriteLine("ADXL345 Interrupt Example.");
            Console.WriteLine("--------------------------");
            
            var adxl345 = new ADXL345();
            Console.WriteLine("Device ID: " + adxl345.DeviceID);
            
            // Attach an interrupt handler.            
            adxl345.AccelerationChanged += (s, e) =>
            {
                Console.WriteLine("X: " + e.CurrentValue.X.ToString() +
                            ", Y: " + e.CurrentValue.Y.ToString() +
                            ", Z: " + e.CurrentValue.Z.ToString());
            };

            // Interrupts are attached so power on the sensor.
            adxl345.SetPowerState(false, false, true, false, ADXL345.Frequency.EightHz);
            
            // Put Meadow to sleep as the interrupt handler will deal 
            // with changes in acceleration.
            Thread.Sleep(Timeout.Infinite);
        }
    }
}
```

### Polling Example

The sensor is put into polling mode by setting the `updateInterval` in the constructor to 0 milliseconds.  The following application will read the sensor and output to the debug console every 500 milliseconds:

```csharp
using System.Threading;
using Meadow;
using Meadow.Foundation.Sensors.Motion;

namespace ADXL345_Sample
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
            Console.WriteLine("\n\n");
            Console.WriteLine("ADXL345 Polling Example.");
            Console.WriteLine("------------------------");
            
            ADXL345 adxl345 = new ADXL345(updateInterval: 0);
            Console.WriteLine("Device ID: " + adxl345.DeviceID);
            
            adxl345.SetPowerState(false, false, true, false, ADXL345.Frequency.EightHz);
            while (true)
            {
                adxl345.Update();
                Console.WriteLine("X: " + adxl345.X.ToString() + ", Y: " + adxl345.Y.ToString() + ", Z: " + adxl345.Z.ToString());
                Thread.Sleep(500);
            }
        }
    }
}
```

##### Example Circuit

![](../../API_Assets/Meadow.Foundation.Sensors.Motion.ADXL345/ADXL345.svg)

This diagram shows how to connect the ADXL345 to Meadow when interrupts are not required.

The `SDA` and `SCL` lines both require pull-up resistors (`4k7`) when they are not present on the breakout board.