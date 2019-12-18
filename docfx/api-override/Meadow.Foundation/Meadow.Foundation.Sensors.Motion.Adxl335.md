---
uid: Meadow.Foundation.Sensors.Motion.Adxl335
remarks: *content
---

The ADXL335 is a low power accelerometer capable of measuring +/- 3g of acceleration along three axes.

### Purchasing

The ADXL335 sensor can be purchased on a breakout board from the following suppliers:

* [Adafruit ADXL335](https://www.adafruit.com/product/163)
* [Sparkfun ADXL335](https://www.sparkfun.com/products/9269)

### Usage

The ADXL335 can operate in interrupt and polling mode.

### Interrupt Mode

The example below uses the default setting to check the sensor every 100 milliseconds.  The sensor will generate and interrupt if the acceleration changes by more than 0.1g:

```csharp
using System.Threading;
using Meadow;
using Meadow.Foundation.Sensors.Motion;

namespace Adxl335_Sample
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

### Polling Mode

The following code will set up the sensor and display the G force and raw sensor data every 250 milliseconds:

```csharp
using System.Threading;
using Meadow;
using Meadow.Foundation.Sensors.Motion;

namespace Adxl335_Sample
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

![](../../API_Assets/Meadow.Foundation.Sensors.Motion.Adxl335/Adxl335_Fritzing.svg)