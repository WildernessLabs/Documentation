---
uid: Meadow.Foundation.Grove.Audio.Speaker
remarks: *content
---

| Speaker | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/Speaker) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Audio.Speaker/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Audio.Speaker.svg?label=Meadow.Foundation.Grove.Audio.Speaker" alt="NuGet Gallery for Speaker" /></a> |

### Code Example

```csharp
Speaker speaker;

public MeadowApp()
{
    Console.WriteLine("Initialize hardware...");

    speaker = new Speaker(Device.CreatePwmPort(Device.Pins.D13));

    _ = PlayTriad();
}

async Task PlayTriad()
{
    for (int i = 0; i < 5; i++)
    {
        Console.WriteLine("Playing A major triad starting at A4");
        await speaker.PlayTone(440, 500); //A
        await speaker.PlayTone(554.37f, 500); //C#
        await speaker.PlayTone(659.25f, 500); //E
        
        await Task.Delay(2500);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/Speaker/Sample/Speaker_Sample)

### Wiring Example

| Speaker | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |