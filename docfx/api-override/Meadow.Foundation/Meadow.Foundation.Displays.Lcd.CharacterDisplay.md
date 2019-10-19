---
uid: Meadow.Foundation.Displays.Lcd.CharacterDisplay
remarks: *content
---

---
uid: Meadow.Foundation.Displays.Lcd.CharacterDisplay
example: [*content]
---

The following example shows how to print an incrementing counter every second on the LCD display:

```csharp
using Meadow;
using Meadow.Devices;
using Meadow.Foundation.Displays.Lcd;
using System;
using System.Threading;

namespace LedSample
{
    public class Program
    {
        static IApp app; 

        public static void Main()
        {
            Console.WriteLine("Hello LCD");

            app = new CharacterDisplayApp();
            Thread.Sleep(Timeout.Infinite);
        }
    }
    
    class CharacterDisplayApp : App<F7Micro, CharacterDisplayApp>
    {
        CharacterDisplay display;

        public CharacterDisplayApp()
        {
            display = new CharacterDisplay(
                Device,
                pinRS: Device.Pins.D05,
                pinE:  Device.Pins.D07,
                pinD4: Device.Pins.D08,
                pinD5: Device.Pins.D09,
                pinD6: Device.Pins.D10,
                pinD7: Device.Pins.D11,
                rows: 2, columns: 16    // Adjust dimensions to fit your display
                );

            int count = 0;
            display.WriteLine("CharacterDisplay", 0);

            while (true)
            {
                display.WriteLine($"Count is : {count++}", 1);
                System.Threading.Thread.Sleep(1000);
            }
        }
    }
}
```

##### Example Circuit

![](../../API_Assets/Meadow.Foundation.Displays.Lcd.CharacterDisplay/CharacterDisplay.svg)