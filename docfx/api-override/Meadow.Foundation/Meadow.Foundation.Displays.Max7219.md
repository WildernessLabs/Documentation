---
uid: Meadow.Foundation.Displays.Max7219
remarks: *content
---

| Max7219 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen"/> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.Max7219) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.Max7219/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.Max7219.svg?label=Meadow.Foundation.Displays.Max7219" /></a> |

The **MAX7219** is an LED display driver capable of driving 64 outputs. As well, the MAX7219 contains an 2-wire data bus allowing multiple MAX7219 chip to be connected together and controlled by a single I2C interface.

Although the MAX7219 can be used as a general purpose IO expander, it almost exclusively used to drive either 2-dimensional LED arrays (commonly 8x8) or an array of multi-segment displays (commonly 8 7-segment displays). The MAX7219 contains specific logic to display pre-configured characters when driving 7 segment displays, specifically: 0-9, E, H, L, P and -.

As it's most commonly used to as a display controller, you'll find it in the Meadow.Foundation.Displays namespace.

### Code Example

```csharp
Max7219 display;

public MeadowApp()
{
    Console.WriteLine("Initialize...");

    display = new Max7219(Device, Device.CreateSpiBus(), Device.Pins.D01, 1, Max7219.Max7219Type.Character);

    while (true)
    {
        TestDigitalMode();
        TestCharacterMode();
    }
}

void TestCharacterMode()
{
    display.SetMode(Max7219.Max7219Type.Character);
    //show every supported character 
    for (int i = 0; i < (int)Max7219.CharacterType.count; i++)
    {
        for (int digit = 0; digit < 8; digit++)
        {
            display.SetCharacter((Max7219.CharacterType)i, digit, i % 2 == 0);
        }
        display.Show();
    }
}

void TestDigitalMode()
{
    Console.WriteLine("Digital test");

    display.SetMode(Max7219.Max7219Type.Digital);
    //control indivial LEDs - for 8x8 matrix configurations - use the Meadow graphics library
    for (byte i = 0; i < 64; i++)
    {
        for (int d = 0; d < 8; d++)
        {
            display.SetDigit(i, d);
        }
        display.Show();
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.Max7219/Samples/Displays.Max7219_Sample)



