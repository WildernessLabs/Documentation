---
uid: Meadow.Foundation.Grove.Displays.LCD
remarks: *content
---

| LCD | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/LCD/Driver) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Displays.LCD/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Displays.LCD.svg?label=Meadow.Foundation.Grove.Displays.LCD" alt="NuGet Gallery for Meadow.Foundation.Grove.Displays.LCD" /></a> |

### Code Example

```csharp
LCD display;

public override Task Initialize()
{
    Console.WriteLine("Initialize...");

    var display = new LCD(Device.CreateI2cBus());

    return Task.CompletedTask;
}

public override async Task Run()
{
    display.Write("Hello Grove");

    await Task.Delay(2000);

    for (byte i = 0; i < 16; i++)
    {
        display.SetCursorPosition(i, 0);
        display.Write("1");
        Thread.Sleep(250);

        display.SetCursorPosition(i, 1);
        display.Write("2");
        Thread.Sleep(250);
    }

    display.ClearLines();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/LCD/Samples/LCD_Sample)

### Wiring Example

| LCD | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |

