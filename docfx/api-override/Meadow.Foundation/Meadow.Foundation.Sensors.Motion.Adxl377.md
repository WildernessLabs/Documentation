---
uid: Meadow.Foundation.Sensors.Motion.Adxl377
remarks: *content
---

ADXL362 is an ultralow power, 3-axis MEMS accelerometer that consumes less than 2 μA at a 100 Hz output data rate and 270 nA when in motion triggered wake-up mode. 

## Purchasing

The ADXL362 is available on a small breakout board:

* [Sparkfun ADXL362 Breakout Board](https://www.sparkfun.com/products/11446)

### Usage

The ADXL362 can operating in interrupt and polling mode.  Polling applications are responsible for determining when a sensor is read.  Interrupt applications will be notified when the sensor reading changes by + / - a threshold value.

### Interrupt Example

The application below demonstrates how to connect an interrupt handler to the ADXL362 sensor and display changes only when the acceleration changes in the x, y or z axis by more than the acceleration threshold (default is 5 units):

```csharp
using System.Threading;
using Meadow;
using Meadow.Foundation.Sensors.Motion;

namespace Adxl377_Sample
{
    public class Program
    {
        static IApp _app; 
        public static void Main()
        {
            _app = new MeadowApp();
        }
    }
    
    public class MeadowApp : App<F7Micro, MeadowApp>
    {
        public App ()
        {

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

namespace Adxl377_Sample
{
    public class Program
    {
        static IApp _app; 
        public static void Main()
        {
            _app = new MeadowApp();
        }
    }
    
    public class MeadowApp : App<F7Micro, MeadowApp>
    {
        public App ()
        {

        }
    }
}
```

### Example Wiring

![](../../API_Assets/Meadow.Foundation.Sensors.Motion.Adxl377/Adxl377_Fritzing.svg)