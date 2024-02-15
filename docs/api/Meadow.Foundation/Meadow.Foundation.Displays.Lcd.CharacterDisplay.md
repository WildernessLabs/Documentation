---
uid: Meadow.Foundation.Displays.Lcd.CharacterDisplay
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Lcd.CharacterDisplay
---

| CharacterDisplay | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Displays.Lcd.CharacterDisplay/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Displays.Lcd.CharacterDisplay.svg?label=Meadow.Foundation.Displays.Lcd.CharacterDisplay" alt="NuGet Gallery for Meadow.Foundation.Displays.Lcd.CharacterDisplay" /></a> |


The **CharacterDisplay** class represents a multiline liquid crystal character display.

These displays are commonly found in 16x2 and 20x4 character by row configurations. Each character is represented using a grid of 5x7 pixels.

The current driver implementation uses 4 or 8 GPIO pins. It's common to find controller boards with this displays that provide I2C, SPI, or serial control. These will be supported in a future update.

### Code Example

```csharp
CharacterDisplay display;

public override Task Initialize()
{
    //InitGpio();
    //InitGpioWithPWM();
    //InitI2c();
    InitGrove();

    return base.Initialize();
}

void InitGpio()
{
    Resolver.Log.Info("InitGpio...");

    display = new CharacterDisplay
    (
        pinRS: Device.Pins.D10,
        pinE: Device.Pins.D09,
        pinD4: Device.Pins.D08,
        pinD5: Device.Pins.D07,
        pinD6: Device.Pins.D06,
        pinD7: Device.Pins.D05,
        rows: 4, columns: 20
    );
}

void InitGpioWithPWM()
{
    Resolver.Log.Info("InitGpioWithPWM...");

    display = new CharacterDisplay
    (
        pinV0: Device.Pins.D11,
        pinRS: Device.Pins.D10,
        pinE: Device.Pins.D09,
        pinD4: Device.Pins.D08,
        pinD5: Device.Pins.D07,
        pinD6: Device.Pins.D06,
        pinD7: Device.Pins.D05,
        rows: 4, columns: 20
    );
}

void InitI2c()
{
    Resolver.Log.Info("InitI2c...");

    display = new CharacterDisplay
    (
        i2cBus: Device.CreateI2cBus(I2cBusSpeed.Standard),
        address: (byte)I2cCharacterDisplay.Addresses.Default,
        rows: 4, columns: 20
    );
}

void InitGrove()
{
    Resolver.Log.Info("InitGrove...");

    display = new CharacterDisplay
    (
        i2cBus: Device.CreateI2cBus(I2cBusSpeed.Standard),
        address: (byte)I2cCharacterDisplay.Addresses.Grove,
        rows: 2, columns: 16,
        isGroveDisplay: true
    );
}

void TestCharacterDisplay()
{
    Resolver.Log.Info("TestCharacterDisplay...");

    display.WriteLine("Hello", 0);

    display.WriteLine("Display", 1);

    Thread.Sleep(1000);
    display.WriteLine("Will delete in", 0);

    int count = 5;
    while (count > 0)
    {
        display.WriteLine($"{count--}", 1);
        Thread.Sleep(500);
    }

    display.ClearLines();
    Thread.Sleep(2000);

    display.WriteLine("Cursor test", 0);

    for (int i = 0; i < display.DisplayConfig.Width; i++)
    {
        display.SetCursorPosition((byte)i, 1);
        display.Write("*");
        Thread.Sleep(100);
        display.SetCursorPosition((byte)i, 1);
        display.Write(" ");
    }

    display.ClearLines();
    display.WriteLine("Complete!", 0);
}

public override Task Run()
{
    TestCharacterDisplay();

    Resolver.Log.Info("Test complete");

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Samples/CharacterDisplay_Sample)

### Wiring Example

![Wiring a CharacterDisplay to a Meadow F7](/API_Assets/Meadow.Foundation.Displays.Lcd.CharacterDisplay/CharacterDisplay_Fritzing.svg)

# Class CharacterDisplay
Represents a single or multirow LCD character display

###### **Assembly**: CharacterDisplay.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/CharacterDisplay.cs#L9)
```csharp title="Declaration"
public class CharacterDisplay : ITextDisplay
```
**Implements:**  
`Meadow.Peripherals.Displays.ITextDisplay`

## Properties
### DisplayConfig
The display configuration for text display menu
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/CharacterDisplay.cs#L16)
```csharp title="Declaration"
public TextDisplayConfig DisplayConfig { get; }
```
## Methods
### ClearLine(byte)
Clear a line of text
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/CharacterDisplay.cs#L141)
```csharp title="Declaration"
public void ClearLine(byte lineNumber)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *lineNumber* | The line to clear (0 indexed) |

### ClearLines()
Clear all lines
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/CharacterDisplay.cs#L149)
```csharp title="Declaration"
public void ClearLines()
```
### SaveCustomCharacter(byte[], byte)
Save a custom character to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/CharacterDisplay.cs#L159)
```csharp title="Declaration"
public void SaveCustomCharacter(byte[] characterMap, byte address)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte[]` | *characterMap* | The character data |
| `System.Byte` | *address* | The display character address (0-7) |

### SetCursorPosition(byte, byte)
Set the cursor position
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/CharacterDisplay.cs#L169)
```csharp title="Declaration"
public void SetCursorPosition(byte column, byte line)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Byte` | *column* | The cursor column |
| `System.Byte` | *line* | The cursor line |

### Write(string)
Write a string to the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/CharacterDisplay.cs#L178)
```csharp title="Declaration"
public void Write(string text)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *text* | The text to show as a string |

### WriteLine(string, byte, bool)
Write text to a line
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/CharacterDisplay.cs#L189)
```csharp title="Declaration"
public void WriteLine(string text, byte lineNumber, bool showCursor = false)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.String` | *text* | The text to display |
| `System.Byte` | *lineNumber* | The target line |
| `System.Boolean` | *showCursor* | If true, show the cursor |

### Show()
Update the display
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Displays.Lcd.CharacterDisplay/Driver/CharacterDisplay.cs#L197)
```csharp title="Declaration"
public void Show()
```

## Implements

* `Meadow.Peripherals.Displays.ITextDisplay`
