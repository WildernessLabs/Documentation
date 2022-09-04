---
uid: Meadow.Foundation.Grove.Audio.Speaker
remarks: *content
---

| Speaker | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/Speaker/Driver) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Audio.Speaker/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Audio.Speaker.svg?label=Meadow.Foundation.Grove.Audio.Speaker" alt="NuGet Gallery for Meadow.Foundation.Grove.Audio.Speaker" /></a> |

### Code Example

```csharp
Speaker speaker;

public override Task Initialize()
{
    Console.WriteLine("Initialize...");

    speaker = new Speaker(Device, Device.Pins.D13);

    return Task.CompletedTask;
}

public override async Task Run()
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
