---
uid: Meadow.Foundation.Grove.Audio.Buzzer
remarks: *content
---

| Buzzer | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/Buzzer) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Audio.Buzzer/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Audio.Buzzer.svg?label=Meadow.Foundation.Grove.Audio.Buzzer" alt="NuGet Gallery for Meadow.Foundation.Grove.Audio.Buzzer" /></a> |

### Code Example

```csharp
Buzzer buzzer;

public override Task Initialize()
{
    Console.WriteLine("Initialize...");

    buzzer = new Buzzer(Device, Device.Pins.D13);

    return Task.CompletedTask;
}

public override async Task Run()
{
    for (int i = 0; i < 5; i++)
    {
        Console.WriteLine("Playing A major triad starting at A4");
        await buzzer.PlayTone(new Frequency(440, Frequency.UnitType.Hertz), TimeSpan.FromMilliseconds(500)); //A
        await buzzer.PlayTone(new Frequency(554.37f, Frequency.UnitType.Hertz), TimeSpan.FromMilliseconds(500)); //C#
        await buzzer.PlayTone(new Frequency(659.25f, Frequency.UnitType.Hertz), TimeSpan.FromMilliseconds(500)); //E

        await Task.Delay(2500);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/Buzzer/Sample/Buzzer_Sample)

### Wiring Example

| Buzzer | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
