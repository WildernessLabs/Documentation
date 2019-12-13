---
uid: Meadow.Foundation.Sensors.Atmospheric.Htu21d
remarks: *content
---

The HTU21D is a low-cost, easy to use, highly accurate, digital humidity sensor. All you need is two lines for I2C communication and you’ll have relative humidity readings such as “45.2%” or “23.1%” and very accurate temperature readings as a bonus!

An example will be available once the driver is implemented.

### Code Example

```csharp
using System.Threading;
using Meadow;
using Meadow.Foundation.Motors;

namespace Htu21d_Sample
{
    public class Program
    {
        static IApp _app; 
        public static void Main()
        {
            _app = new App();
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

### Circuit Example

![](../../API_Assets/Meadow.Foundation.Sensors.Atmospheric.Htu21d/Htu21d_Fritzing.png)
