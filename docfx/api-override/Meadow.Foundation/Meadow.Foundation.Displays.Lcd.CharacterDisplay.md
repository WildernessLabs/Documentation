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

[Source code available on GitHub](
https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Samples/Displays.Lcd.CharacterDisplay_Sample) 

```

##### Wiring Example

![](../../API_Assets/Meadow.Foundation.Displays.Lcd.CharacterDisplay/CharacterDisplay.svg)