---
uid: Meadow.Foundation.Sensors.Motion.Adx337
remarks: *content
---

The ADXL335 is a low power accelerometer capable of measuring +/- 3g of acceleration along three axes.

### Purchasing

The ADXL337 sensor can be purchased on a breakout board from the following suppliers:

* [Adafruit ADX337](https://www.adafruit.com/product/163)
* [Sparkfun ADX337](https://www.sparkfun.com/products/9269)

### Usage

The ADXL337 can operate in interrupt and polling mode.

### Interrupt Mode

The example below uses the default setting to check the sensor every 100 milliseconds.  The sensor will generate and interrupt if the acceleration changes by more than 0.1g:

```csharp
using System.Threading;
using Meadow;
using Meadow.Foundation.Sensors.Motion;

namespace Adx337_Sample
{
    public class Program
    {
        static IApp _app; 
        public static void Main()
        {
            _app = new MeadowApp();
        }
    }
    
    public class MeadowApp : AppBase<F7Micro, App>
    {
        public MeadowApp()
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

namespace AdxL337_Sample
{
    public class Program
    {
        static IApp _app; 
        public static void Main()
        {
            _app = new MeadowApp();
        }
    }
    
    public class MeadowApp : AppBase<F7Micro, App>
    {
        public MeadowApp ()
        {

        }
    }
}
```

### Example Circuit

![](../../API_Assets/Meadow.Foundation.Sensors.Motion.Adx337/Adx337_Fritzing.svg)