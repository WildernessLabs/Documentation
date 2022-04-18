---
uid: Meadow.Foundation.Audio.PiezoSpeaker
remarks: *content
---

| PiezoSpeaker | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Speakers) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" /></a> |

The **PiezoSpeaker** class represents a piezoelectric speaker that can be used to generate tones across a range of frequencies. They typically perform well between 1-5kHz but may go as high as 100kHz. PiezoSpeaker Implements IToneGenerator.

The positive pin of the piezo speaker connects to a pulse width modulation (PWM) capable pin on the Meadow and the negative pin connects to common/ground. A resistor can be placed in-line to reduce volume.

<img src="../../API_Assets/Meadow.Foundation.Audio.PiezoSpeaker/img_PiezoSpeaker.jpg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

### Code Example

```csharp
protected PiezoSpeaker piezoSpeaker;

public MeadowApp()
{
    Console.WriteLine("Initializing...");

    piezoSpeaker = new PiezoSpeaker(Device.CreatePwmPort(Device.Pins.D05));

    _ = PlayTriad();
}

async Task PlayTriad()
{
    for (int i = 0; i < 5; i++)
    {
        Console.WriteLine("Playing A major triad starting at A4");
        await piezoSpeaker.PlayTone(440, 500); //A
        await piezoSpeaker.PlayTone(554.37f, 500); //C#
        await piezoSpeaker.PlayTone(659.25f, 500); //E

        await Task.Delay(2500);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples/Audio.PiezoSpeaker_Sample)

### Wiring Example

<img src="../../API_Assets/Meadow.Foundation.Audio.PiezoSpeaker/PiezoSpeaker_Fritzing.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />
