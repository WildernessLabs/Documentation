---
uid: Meadow.Foundation.Motors.HBridgeMotor
remarks: *content
---

An h-bridge motor controller enables a control signal to drive a much larger load in either polarity, allowing the Netduino to drive DC motors in forward or reverse from an external power supply. Using pulse-width-modulation (PWM) as the control signal, provides not just forward or reverse control, but variable speeds in either direction.

![](../../API_Assets/Meadow.Foundation.Motors.HBridgeMotor/HBridges.jpg)

###Sourcing

This generic driver works with standard h-bridges ICs such as the Texas Instruments [L2N93E](https://octopart.com/search?q=L293NE) or [SN754410](https://octopart.com/search?q=SN754410) chips.

It should also work with heavier duty [L298N](https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=l298n) drivers.

---
uid: Meadow.Foundation.Motors.HBridgeMotor
example: [*content]
---

The following example uses a dual h-bridge chip to control two motors. Both the L293NE and NS754410 are dual h-bridge chips that can drive two motors in both forward and reverse. This is a common configuration for wheeled robots. Forward and reverse motion is obtained by setting both the motors to have the same forward or reverse speed, and turning is accomplished by setting them to different speeds.

###Code

The following code creates an h-bridge controller with the PWM controllers on pins 3 and 5, and the enable pin on pin 4. It then sets the motor speed to 100% forward, stops the motor for half a second, and then sets the motor speed to 100% reverse.

```csharp
using System.Threading;
using Meadow;
using Meadow.Foundation.Motors;

namespace HBridgeMotor_Sample
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
            var motorRight = new HBridgeMotor
            (
                a1Pin: Device.CreatePwmPort(Device.Pins.D02),
                a2Pin: Device.CreatePwmPort(Device.Pins.D03),
                enablePin: Device.CreateDigitalOutputPort(Device.Pins.D04)
            );

            var motorLeft = new HBridgeMotor
            (
                a1Pin: Device.CreatePwmPort(Device.Pins.D07),
                a2Pin: Device.CreatePwmPort(Device.Pins.D08),
                enablePin: Device.CreateDigitalOutputPort(Device.Pins.D09)
            );

            while (true)
            {
                motorLeft.Speed = 1f;
                motorRight.Speed = 1f;
                Thread.Sleep(1000);

                motorLeft.Speed = 0f;
                motorRight.Speed = 0f;
                Thread.Sleep(500);

                motorLeft.Speed = -1f;
                motorRight.Speed = -1f;
                Thread.Sleep(1000);
            }
        }
    }
}
```

##### Example Circuit

Though h-bridge motor controllers come in various form factors, they typically share the following pins and usages:

| Motor Controller Pin           | Description                                           |
|--------------------------------|-------------------------------------------------------|
| **1,2EN** or **ENABLE A**      | Motor 1 enable. This should be configured as `enablePin` in the constructor, and it controls whether or not the motor is powered. The `HBridgeMotor` driver will automatically set this to high (enabled) when the speed is not zero. This is also enabled when `IsNeutral` is set to false, as powering the motor will cause it to brake when the speed is set to `0`. <br/><br/> On the L2N93E and SN754410 chips, this is labeled as **1,2EN**, and on the L298N, it's typically labeled as **ENABLE A**. |
| **3,4EN** or **ENABLE B**             | Motor 2 enable pin. If you are driving two motors, you'll need two `HBridgeMotor` objects, as shown in the example below. |
| **[1,2]A** or **INPUT [1,2]**  | Motor 1 control inputs. These are configured as the `a1Pin` and `a2pin` constructor parameter. These are the low-voltage control signals for motor 1 forward and reverse. <br/><br/> On the L2N93E and SN754410 chips, this is labeled as **1A** and **2A**, and on the L298N chip, it's typically labeled as **INPUT 1** and **INPUT 2**. |
| **[3,4]A** or **INPUT [3,4]**   | Motor 2 control inputs.                              |
| **GROUND** or **GND**           | Common/ground. Both the motor power supply and the logic power supply should be tied together on the same common ground plane. |
| **V<sub>CC2</sub>**, **+12V**, or **V<sub>s</sub>** | This is the positive voltage supply that drives the motors. Depending on the chip used, this may be anywhere from `4.5V` up to `50V`. |
| **V<sub>CC1</sub>**, **+5V**, or **V<sub>SS</sub>** | This is the logic voltage supply that powers the chip logic. This should be tied into the `5V` voltage pin on the netduino.    |

The following breadboard diagram illustrates connecting two motors to an h-bridge chip that uses a external power supply to drive the motors:

![](../../API_Assets/Meadow.Foundation.Motors.HBridgeMotor/HBridgeMotor.svg)