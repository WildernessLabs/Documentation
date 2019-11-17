---
uid: Meadow.Foundation.ICs.EEPROM.AT24Cxx
remarks: *content
---

The AT24Cxx series of chips provide a mechanism for storing data that will survive a power outage or battery failure.  These EEPROMs are available in varying sizes and are accessible using the I2C interface.

---
uid: Meadow.Foundation.ICs.EEPROM.AT24Cxx
example: [*content]
---

The following example shows how to turn on and off the LED using the `IsOn` property, and uses a `StartBlink(onDuration, offDuration)` API method to make the LED blink staying on for 500ms (0.5s) and off for 1000ms (1s):

```csharp
using System.Threading;
using Meadow;
using Meadow.Foundation.ICs.EEPROM;

namespace LedSample
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
            var eeprom = new AT24Cxx(0x57);

            var memory = eeprom.Read(0, 16);
            for (ushort index = 0; index < 16; index++)
                Console.WriteLine("Byte: " + index + ", Value: " + memory[index]);

            eeprom.Write(3, new byte[] { 10 });
            eeprom.Write(7, new byte[] { 1, 2, 3, 4 });
            
            memory = eeprom.Read(0, 16);
            for (ushort index = 0; index < 16; index++)
                Console.WriteLine("Byte: " + index + ", Value: " + memory[index]);
            

            Thread.Sleep(Timeout.Infinite);
        }
    }
}
```

##### Example Circuit

The chip used to develop this library is one that is available on a common DS3231 RTC module with EEPROM memory module:

* [DS3231 with integrated EEPROM](https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=ds3231)

![](../../API_Assets/Meadow.Foundation.ICs.EEPROM.AT24Cxx/AT24Cxx.svg)