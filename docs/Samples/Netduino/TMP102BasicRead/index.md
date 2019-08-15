---
layout: Samples
title: Reading From a TMP102 Temperature Sensor Using I2C
---

This example demonstrates how to read from a [TMP102 temperature sensor](https://www.sparkfun.com/products/13314) using the I2C protocol.

The full discussion can be found in the [Wilderness Labs Developer](http://developer.wildernesslabs.co/Netduino/Input_Output/Digital/I2C/Reading/) portal.

## Hardware

![Netduino and TMP102 Temperature Sensor](NetduinoAndTMP102FritzingDiagram.png){:standalone}

### Code

```csharp
using Microsoft.SPOT;
using Microsoft.SPOT.Hardware;
using System.Threading;

namespace TMP102
{
    public class Program
    {
        public static void Main()
        {
            //
            //  Create a new I2C device for the TMP102 on address 0x48 with the clock
            //  running at 50 KHz.
            //
            I2CDevice tmp102 = new I2CDevice(new I2CDevice.Configuration(0x48, 50));
            //
            //  Create a transaction to read two bytes of data from the TMP102 sensor.
            //
            byte[] buffer = new byte[2];
            I2CDevice.I2CTransaction[] reading = new I2CDevice.I2CTransaction[1];
            reading[0] = I2CDevice.CreateReadTransaction(buffer);
            while (true)
            {
                //
                //  Read the temperature.
                //
                int bytesRead = tmp102.Execute(reading, 100);
                //
                //  Convert the reading into Centigrade and Fahrenheit.
                //
                int sensorReading = ((buffer[0] << 4) | (buffer[1]) >> 4);
                double centigrade = sensorReading * 0.0625;
                double fahrenheit = centigrade * 1.8 + 32;
                //
                //  Display the readings in the debug window and pause before repeating.
                //
                Debug.Print(centigrade.ToString() + " C / " + fahrenheit.ToString() + " F");
                Thread.Sleep(1000);
            }
        }
    }
}
```

### Hardware Required

* Netduino
* [TMP102 I2C Temperature Sensor](https://www.sparkfun.com/products/13314)


## [Netduino Samples Github Repository](https://github.com/WildernessLabs/Netduino_Samples)

Full source code for all of the samples can be found in the Netduino Samples repository on Github.
