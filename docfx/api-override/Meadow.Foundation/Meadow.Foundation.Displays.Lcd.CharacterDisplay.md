---
uid: Meadow.Foundation.Displays.Lcd.CharacterDisplay
remarks: *content
---

| CharacterDisplay |             |
|------------------|-------------|
| Status           | Working     |
| Source code      | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay) |
| NuGet package    | ![NuGet](https://img.shields.io/nuget/v/Meadow.Foundation.Displays.LCD.CharacterDisplay.svg?label=NuGet) |
| | |

The **CharacterDisplay** class represents a multiline liquid crystal character display.

These displays are commonly found in 16x2 and 20x4 character by row configurations. Each character is represented using a grid of 5x7 pixels.

The current driver implementation uses 4 or 8 GPIO pins. It's common to find controller boards with this displays that provide I2C, SPI, or serial control. These will be supported in a future update.

### Code Example

The following example shows how to print an incrementing counter every second on the LCD display:

```csharp
class CharacterDisplayApp : App<F7Micro, CharacterDisplayApp>
{
    CharacterDisplay display;

    public CharacterDisplayApp()
    {
        display = new CharacterDisplay(
            Device,
            pinRS: Device.Pins.D05,
            pinE:  Device.Pins.D07,
            pinD4: Device.Pins.D08,
            pinD5: Device.Pins.D09,
            pinD6: Device.Pins.D10,
            pinD7: Device.Pins.D11,
            rows: 2, columns: 16    // Adjust dimensions to fit your display
            );

        int count = 0;
        display.WriteLine("CharacterDisplay", 0);

        while (true)
        {
            display.WriteLine($"Count is : {count++}", 1);
            System.Threading.Thread.Sleep(1000);
        }
    }
}

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Samples/) 

```

##### Wiring Example

![](../../API_Assets/Meadow.Foundation.Displays.Lcd.CharacterDisplay/CharacterDisplay.svg)