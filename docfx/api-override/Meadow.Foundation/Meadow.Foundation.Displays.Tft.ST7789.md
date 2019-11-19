---
uid: Meadow.Foundation.Displays.Tft.ST7789
remarks: *content
---

### Purchasing

You can get ST7789 displays from the following suppliers:

* [AliExpress](https://www.aliexpress.com/item/32880846744.html?src=google&src=google&albch=shopping&acnt=494-037-6276&isdl=y&slnk=&plac=&mtctp=&albbt=Google_7_shopping&aff_platform=google&aff_short_key=UneMJZVf&&albagn=888888&albcp=7386552844&albag=80241711349&trgt=539263010115&crea=en32880846744&netw=u&device=c&gclid=CjwKCAiA_MPuBRB5EiwAHTTvMVIDoaCOAdZ1ZLqQo8NbMrvi3cFQ7ODW4--DtZpMFRh41rKjV1cbqRoCDHgQAvD_BwE&gclsrc=aw.ds)
* [Ebay](https://ebay.to/2pokpFE)
* [Amazon](https://www.amazon.com/MakerFocus-Display-1-3inch-Interface-Routines/dp/B07P9X3L7M/ref=sr_1_1?keywords=ST7789&qid=1574063790&sr=8-1)

### Code Example

The following example shows how to initialize a ST7789 display and draw three lines using `DrawPixel` method:

```csharp
using System;
using System.Threading;
using Meadow;
using Meadow.Devices;
using Meadow.Foundation.Displays.Tft;
using Meadow.Hardware;

namespace ST7789_Sample
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
        protected ISpiBus spiBus;
        protected ST7789 ST7789;

        public MeadowApp ()
        {
            var config = new SpiClockConfiguration(6000, SpiClockConfiguration.Mode.Mode3);
            spiBus = Device.CreateSpiBus(Device.Pins.SCK, Device.Pins.MOSI, Device.Pins.MISO, config);

            ST7789 = new ST7789(
                device: Device, 
                spiBus: spiBus,
                chipSelectPin: null,
                dcPin: Device.Pins.D01,
                resetPin: Device.Pins.D00,
                width: 240, height: 240);

            Console.WriteLine("Clear display");
            ST7789.ClearScreen(250);
            ST7789.Refresh();

            Console.WriteLine("Draw lines");
            for (int i = 0; i < 30; i++)
            {
                ST7789.DrawPixel(i, i, true);
                ST7789.DrawPixel(30 + i, i, true);
                ST7789.DrawPixel(60 + i, i, true);
            }

            ST7789.Show(); 
        }
    }
}
```

### Circuit Example

 To wire a ST7789 to your Meadow board, connect the following:

| ST7789  | Meadow Pin |
|---------|------------|
| GND     | GND        |
| VCC     | 3V3        |
| SCL     | SCK        |
| SDA     | MOSI       |
| RESET   | D00        |
| DC      | D01        |

It should look like the following diagram:

![](../../API_Assets/Meadow.Foundation.Displays.Tft.ST7789/ST7789_Fritzing.png)