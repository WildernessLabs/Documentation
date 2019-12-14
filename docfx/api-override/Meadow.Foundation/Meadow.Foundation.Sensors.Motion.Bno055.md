---
uid: Meadow.Foundation.Sensors.Motion.Bno055
remarks: *content
---

BNO055 is a 9-axis absolute orientation sensor.  The three sensors (accelerometer, gyroscope and magnetometer) with a 32-bit cortex M0 microcontroller.

### Purchasing
* [Tindie BNO-055 9-axis motion sensor with fusion hardware](https://www.tindie.com/products/onehorse/bno-055-9-axis-motion-sensor-with-hardware-fusion/)


### Usage

The application below will send serial data to the [cuberotate](https://learn.adafruit.com/adafruit-bno055-absolute-orientation-sensor/downloads) application on the Adafruit web site.  Rotating the board will rotate the figure on the screen.

```csharp
using System.Threading;
using Meadow;
using Meadow.Foundation.Sensors.Motion;

namespace Bno055_Sample
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

##### Example Circuit

The following diagram shows the BNO055 configured for bas

![](../../API_Assets/Meadow.Foundation.Sensors.Motion.Bno055/Bno055_Fritzing.svg)