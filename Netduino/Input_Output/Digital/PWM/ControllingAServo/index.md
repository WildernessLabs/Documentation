---
title: Controlling a Servo using PWM
---

Servo motors (servos) are available in a wide range of sizes amd capabilities.  A servo makes it easy to add controlled motion to a project.

A typical servo has four components:

* Motor
* Control unit
* Gears
* Horns

The motor provides the motion turning the spindle.  Gears connect the spindle from the motor to the project.  A small controller board translates the signals from the Netduino into a position for the spindle.  All of this in a small package:

![Servo Motor](Servo.png)

The horns provide a way to connect the spindle from the servo to the rest of the project.  Servos are normally supplied with several horns allowing a number of methods to connect the servo:

![Servo horns](ServoHorns.png)

Three wires are used to connect the servo to the Netduino:

* Power
* Ground
* Control signal

The servo above uses a 5V power supply.  According to the data sheet the control signal should be 4.8V - 5V.  In practice, the 3.3V signal from a Netduino PWM pin can be used.

## Types of Servo Motors

The two common types of servos are fixed range and continuous rotation.

Fixed range servos have a defined sweep, typically 0 to 180 degrees.  Fixed range servos typically have hard stops built into the case.  Care should be taken not to attempt to rotate the motor past these stops.

Continuous rotation servos act similar to a standard DC motor rotating in either direction continuously.

## Control Signals

A typical servo uses a 50Hz signal to control the position of the servo.  The position is determined by the width of the high pulse of the signal so a control signal will look something like this:

![Servo Control Signal](ServoControlSignal.png)

This makes PWM ideal to control a servo.  Code to set the initial position of a servo is as simple as this:

```csharp
pwm = new PWM(Pin, 50.0, 0.05, false);
pwm.Start();
```

Changing the position is as simple as changing the duty cycle of the pulse:

```csharp
pwm.DutyCycle = 0.07;
```

## Sweeping Through 180 Degrees

The <i>SG90</i> servo pictured above is capable of sweeping through 180 degrees.  The stated pulse width is 1ms (0 degrees) to 2ms (180 degrees).  An application to repeatedly sweep from 0 to 180 and then back to 0 would look something like this:

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

where the `Servo` class allows the angle of the servo to be set.

### Servo Class

The Arduino library contains a `servo` class which implements the functionality needed to control a servo.  The class implements the following methods:

| Method            | Description                                               |
|-------------------|-----------------------------------------------------------|
| attach            | Attach a servo to a PWM pin.                              |
| write             | Set the servo to a specified angle.                       |
| writeMicroseconds | Set the PWM pulse to the specified width in microseconds. |
| read              | Read the current angle from the servo.                    |
| attached          | Is the servo object attached to a PWM pin?                |
| detach            | Detach the servo class from the PWM pin.                  |

Replicating this functionality will ease the process of porting Arduino code to the Netduino platform.

Additionally, C# allows the use of properties to implement complex functionality such as setting the angle of the servo.

Much of the code for the C# `Servo` class is obvious and the full source code is provided in the sample code.  Two key components used in the application above deserve a deep dive into the code:

* `Servo` constructor
* `Angle` property

#### `Servo` Constructor

The constructor sets up three of the key pieces of information required to control the servo:

* PWM Pin the servo is attached to (`pin`)
* Pulse width (in microseconds) representing 0 degrees (`minimum`)
* Pulse width (in microseconds) representing 180 derees (`maximum`)

The `minimum` and `maximum` parameters will be discussed with the `Angle` property.

```csharp
/// <summary>
/// Create a new instance of the Servo class.  This call is equivalent to creating a new instance and
/// then calling the <i>Attach</i> method.
/// </summary>
/// <param name="pin">PWM pin to which the servo is attached.</param>
/// <param name="minimum">Minimum value for the pulse width, the default is 544.</param>
/// <param name="maximum">Maximum value for the pulse width, the default value is 2400.</param>
public Servo(Cpu.PWMChannel pin, int minimum = 544, int maximum = 2400)
{
    Attach(pin, minimum, maximum);
}

/// <summary>
/// Attach the servo to a specific PWM pin and set the minimum and maximum pulse
/// widths for the 0 and 180 degree angles.
/// </summary>
/// <param name="pin">PWM pin to use for this servo.</param>
/// <param name="minimum">Minimum pulse width for the servo.  The minimum width define the value used for 0 degrees.</param>
/// <param name="maximum">Maximum pulse width for the servo.  The maximum value determines the value used for 180 degrees.</param>
void Attach(Cpu.PWMChannel pin, int minimum = 544, int maximum = 2400)
{
    Pin = pin;
    MinimumPulseWidth = minimum;
    MaximumPulseWidth = maximum;
}
```

#### `Angle` Property

In the Arduino class, the angle of the servo is set using the `write` method.  C# properties allow a more intuitive method of setting (and reading) the angle of the servo.

Before looking at the code it is necessary to examine how the position of the servo is set.  The following descriptions taken from the data sheet of the <i>Microservo SG90</i> used in this project.  The terms will be common to most servos but the exact values should be taken from the servo data sheet.

![Servo Control Signal with Measurements](ServoControlSignalWithMeasurements.png)

The frequency of the signal is 50Hz giving a <i>period</i> of 20,000 ms.

The <i>pulse</i> width determines the position of the servo.  This should be between the <i>minimum</i> and <i>maximum</i> pulse width.

From the data sheet of the <i>Microservo SG90</i>, the <i>minimum</i> pulse width is 1ms (0 degrees) and the <i>maximum</i> pulse width is 2ms (180 degrees).

* Pulse range = maximum pulse width - minimum pulse width
* Pulse width per degree = pulse width / 181
* For a specified angle, the pulse width = minimum pulse width + (angle * pulse width per degree)

For the Netduino this needs to be converted into a duty cycle.  For an average servo, the pulse frequency is 50 Hz.  The duty cycle for a specified angle becomes the pulse width / 20,000.  In code this becomes:

```csharp
double pulseWidth = MinimumPulseWidth + (_angle * ((MaximumPulseWidth - MinimumPulseWidth) / 181));
double dutyCycle = pulseWidth / 20000;
if (PWMPin == null)
{
    PWMPin = new PWM(Pin, SERVO_FREQUENCY, dutyCycle, false);
    PWMPin.Start();
}
else
{
    PWMPin.DutyCycle = dutyCycle;
}
```

Why 181 in the `pulseWidth` calculation, there are 181 divisions as the angle is between 0 and 180 <i>inclusive</i>.

# Sample Code

The sample application and the `Servo` class can be accessed through the [samples area](/Samples/ControllingAServo/).

# Further Reading

* [PWM on Wikipedia](https://en.wikipedia.org/wiki/Pulse-width_modulation)
* [NETMF PWM Reference](https://msdn.microsoft.com/en-us/library/microsoft.spot.hardware.pwm(v=vs.102).aspx)
* [Servomotros](https://en.wikipedia.org/wiki/Servomotor)
* [Servomechanism](https://en.wikipedia.org/wiki/Servomechanism)