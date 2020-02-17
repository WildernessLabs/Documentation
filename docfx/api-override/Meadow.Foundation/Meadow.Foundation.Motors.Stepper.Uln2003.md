---
uid: Meadow.Foundation.Motors.Stepper.Uln2003
remarks: *content
---

| ULN2003       |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Motors.Stepper.Uln2003) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Motors.Stepper.Uln2003/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Motors.Stepper.Uln2003.svg?label=Meadow.Foundation.Motors.Stepper.Uln2003" style="width: auto; height: -webkit-fill-available;" /></a> |

**ULN2003** is a high voltage, high current Darlington array containing seven open collector Darlington pairs. The ULN2003 is often packaged on board used to control stepper motors.

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Uln2003 stepperController;

    public MeadowApp()
    {
        stepperController = new Uln2003(
                device: Device, 
                pin1: Device.Pins.D01, 
                pin2: Device.Pins.D02, 
                pin3: Device.Pins.D03, 
                pin4: Device.Pins.D04);

        stepperController.Step(1024);

        for (int i = 0; i < 100; i++)
        {
            Console.WriteLine($"Step forward {i}");
            stepperController.Step(50);
            Thread.Sleep(10);
        }

        for (int i = 0; i < 100; i++)
        {
            Console.WriteLine($"Step backwards {i}");
            stepperController.Step(-50);
            Thread.Sleep(10);
        }
    }
}
```
[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Motors.Stepper.Uln2003/Samples/) 

### Wiring Example

To wire a ULN2003 to your Meadow board, connect the following:

| ULN2003 | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| VCC     | 3V3         |
| INT1    | D01         |
| INT2    | D02         |
| INT3    | D03         |
| INT4    | D04         |

It should look like the following diagram:

<img src="../../API_Assets/Meadow.Foundation.Motors.Stepper.Uln2003/Uln2003_Fritzing.png" 
    style="width: 40%; display: block; margin-left: auto; margin-right: auto;" />