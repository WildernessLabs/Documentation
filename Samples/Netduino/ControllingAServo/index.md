---
title: Controlling a Servo Using PWM
---

Servo motors (servos) are available in a wide range of sizes amd capabilities.  A servo makes it easy to add controlled motion to a project.

The application below sweeps a servo through 0 to 180 degrees and back to 0 repeatedly.

```csharp
using System.Threading;
using SecretLabs.NETMF.Hardware.NetduinoPlus;
using ArduinoLib;

namespace ServoTest
{
    public class Program
    {
        public static void Main()
        {
            Servo servo = new Servo(PWMChannels.PWM_PIN_D9, 1000, 2000);
            while (true)
            {
                for (int angle = 0; angle <= 180; angle++)
                {
                    servo.Angle = angle;
                    Thread.Sleep(40);
                }
                for (int angle = 179; angle > 0; angle--)
                {
                    servo.Angle = angle;
                    Thread.Sleep(40);
                }
            }
         }
    }
}
```

Full source code for the project can be found on the [Netduino Samples](https://github.com/WildernessLabs/Netduino_Samples/tree/master/ControllingAServo) repository.
