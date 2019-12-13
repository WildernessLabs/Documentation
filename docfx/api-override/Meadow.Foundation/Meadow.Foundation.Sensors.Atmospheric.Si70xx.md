---
uid: Meadow.Foundation.Sensors.Atmospheric.Si70xx
remarks: *content
---

-

### Sourcing

-

### Code Example

```csharp
using System.Threading;
using Meadow;
using Meadow.Foundation.Motors;

namespace Si70xx_Sample
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

![](../../API_Assets/Meadow.Foundation.Sensors.Atmospheric.Si70xx/Si7020_Fritzing.png)