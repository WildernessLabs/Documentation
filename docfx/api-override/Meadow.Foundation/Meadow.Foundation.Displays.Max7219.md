---
uid: Meadow.Foundation.Displays.Max7219
remarks: *content
---

| MAX7219       |             |
|---------------|-------------|
| Status        | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code   | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.Max7219) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.Max7219/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.Max7219.svg?label=Meadow.Foundation.Displays.Max7219" style="width: auto; height: -webkit-fill-available;" /></a> |

The **MAX7219** is an LED display driver capable of driving 64 outputs. As well, the MAX7219 contains an 2-wire data bus allowing multiple MAX7219 chip to be connected together and controlled by a single I2C interface.

Although the MAX7219 can be used as a general purpose IO expander, it almost exclusively used to drive either 2-dimensional LED arrays (commonly 8x8) or an array of multi-segment displays (commonly 8 7-segment displays). The MAX7219 contains specific logic to display pre-configured characters when driving 7 segment displays, specifically: 0-9, E, H, L, P and -.

As it's most commonly used to as a display controller, you'll find it in the Meadow.Foundation.Displays namespace.

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Max7219 display;

    public MeadowApp()
    {
        Init();

        while(true)
        {
            TestDigitalMode();
            TestCharacterMode();
            CharacterDemo();
        }
    }

    void CharacterDemo()
    {
        display.SetMode(true);
        display.ClearAll();

        for (int i = 0; i < 8; i++)
        {
            display.SetCharacter(Max7219.CharacterType.Blank, i);
        }

        for (int i = 980; i < 999; i++)
        {
            display.SetNumber(i);
            display.Show();
        }

        display.SetCharacter(Max7219.CharacterType.Hyphen, 0);
        display.SetCharacter(Max7219.CharacterType.Hyphen, 1);
        display.SetCharacter(Max7219.CharacterType.P, 2);
        display.SetCharacter(Max7219.CharacterType.L, 3);
        display.SetCharacter(Max7219.CharacterType.E, 4);
        display.SetCharacter(Max7219.CharacterType.H, 5);
        display.SetCharacter(Max7219.CharacterType.Hyphen, 6);
        display.SetCharacter(Max7219.CharacterType.Hyphen, 7);
        display.Show();

        Thread.Sleep(1000);
    }

    void TestCharacterMode()
    {
        display.SetMode(true);

        for (int i = 0; i < (int)Max7219.CharacterType.count; i++)
        {
            for (int digit = 0; digit < 8; digit++)
            {
                display.SetCharacter((Max7219.CharacterType)i, digit, i%2 == 0);
            }
            display.Show();
            Console.WriteLine(((Max7219.CharacterType)i).ToString());
        }
    }
    
    void TestDigitalMode()
    {
        display.SetMode(false);

        for (byte i = 0; i < 64; i++)
        {
            for(int d = 0; d < 8; d++)
            {
                display.SetDigit(i, d);
            }
            display.Show();
        }
    }

    public void Init()
    {
        Console.WriteLine("Init...");

        display = new Max7219(Device, Device.CreateSpiBus(), Device.Pins.D02, 1, true);
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.Max7219/Samples/) 

<img src="../../API_Assets/Meadow.Foundation.Displays.Max7219/Max7219_Fritzing.png" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />