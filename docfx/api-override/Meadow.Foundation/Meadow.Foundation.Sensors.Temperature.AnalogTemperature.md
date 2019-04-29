---
uid: Meadow.Foundation.Sensors.Temperature.AnalogTemperature
remarks: *content
---

The analog temperature sensor driver can be used with any sensor that has a linear voltage response. It has been tested with the following series of temperature sensors:

* TMP35
* TMP36
* TMP37
* LM35

These sensors exhibit a linear change in the analog voltage for each degree centigrade. This is often presented in the datasheet as follows:

![](/API_Assets/Meadow.Foundation.Sensors.Temperature.AnalogTemperature/AnalogSensorLinearResponse.png)

This driver should work with any sensor of this type.

###Purchasing

TMP36 sensors can be purchased from a number of suppliers including:

* [Adafruit](https://www.adafruit.com/product/165)
* [Sparkfun](https://www.sparkfun.com/products/10988)

---
uid: Meadow.Foundation.Sensors.Temperature.AnalogTemperature
example: [*content]
---

The following application demonstrates how to use the TMP36 in interrupt mode. The sensor will be read every second and changes in values greater than +/- 0.1C will generate and interrupt:

```csharp
using System.Threading;
using Meadow;
using Meadow.Foundation.Sensors.Temperature;

namespace AnalogTemperature_Sample
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
            Debug.Print("Read TMP36");

            //
            //  Create a new TMP36 object to check the temperature every 1s and
            //  to report any changes greater than +/- 0.1C.
            //
            var _tmp36 = new AnalogTemperature(
                AnalogChannels.ANALOG_PIN_A0,
                AnalogTemperature.SensorType.TMP36, 
                updateInterval: 1000,
                temperatureChangeNotificationThreshold: 0.1F);

            //
            //  Connect an interrupt handler.
            //
            _tmp36.TemperatureChanged += (s, e) =>
            {
                Debug.Print("Temperature: " + e.CurrentValue.ToString("f2"));
            };
        }
    }
}
```

##### Example Circuit

Consider the TMP36, this sensor requires only three connections; power, ground and the analog output:

![](/API_Assets/Meadow.Foundation.Sensors.Temperature.AnalogTemperature/AnalogTemperature.svg)