---
uid: Meadow.Foundation.FeatherWings.MotorWing
remarks: *content
---

| MotorWing | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings/tree/main/Source/MotorWing) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings/tree/main/Source/MotorWing/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.FeatherWings.MotorWing/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.FeatherWings.MotorWing.svg?label=Meadow.Foundation.FeatherWings.MotorWing" alt="NuGet Gallery for MotorWing" /></a> |

### Code Example

```csharp
MotorWing motorWing;

public MeadowApp()
{
    Console.WriteLine("Initializing ...");
    var i2CBus = Device.CreateI2cBus(I2cBusSpeed.FastPlus);
    motorWing = new MotorWing(i2CBus, 0x61);
    motorWing.Initialize();

    Run();
}

void Run()
{
    //Get DC motor 1
    var dcMotor1 = motorWing.GetMotor(1);

    //Get DC motor 2
    var dcMotor2 = motorWing.GetMotor(2);

    //Get Stepper motor number 2
    var stepper = motorWing.GetStepper(2, 200);

    dcMotor1.Run(Commmand.FORWARD);
    dcMotor2.Run(Commmand.BACKWARD);

    while (true)
    {
        Console.WriteLine("Speed up");
        for (short i = 0; i <= 255; i++)
        {
            dcMotor1.SetSpeed(i);
            dcMotor2.SetSpeed(i);
            Thread.Sleep(10);
        }

        stepper.Step(50);

        Thread.Sleep(500);

        Console.WriteLine("Slow down");
        for (short i = 255; i >= 0; i--)
        {
            dcMotor1.SetSpeed(i);
            dcMotor2.SetSpeed(i);
            Thread.Sleep(10);
        }

        stepper.Step(-50);

        Thread.Sleep(500);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings/tree/main/Source/MotorWing/Sample/MotorWing_Sample)

