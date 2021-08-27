---
uid: Meadow.Foundation.Audio.Mp3.Yx5300
remarks: *content
---

| Yx5300 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen"/> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Audio.Mp3.Yx5300) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Audio.Mp3.Yx5300/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Audio.Mp3.Yx5300.svg?label=Meadow.Foundation.Audio.Mp3.Yx5300" /></a> |

### Code Example

```csharp
public MeadowApp()
{
    Console.WriteLine("Initialize hardware...");

    var mp3Player = new Yx5300(Device, Device.SerialPortNames.Com4);

    //using an async task - this code would likely go in an async method
    Task.Run(async () =>
    {
        mp3Player.SetVolume(15);

        var status = await mp3Player.GetStatus();
        Console.WriteLine($"Status: {status}");

        var count = await mp3Player.GetNumberOfTracksInFolder(0);
        Console.WriteLine($"Number of tracks: {count}");

        mp3Player.Play();

        await Task.Delay(5000); //leave playing for 5 seconds

        mp3Player.Next();

        await Task.Delay(5000); //leave playing for 5 seconds
    });
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Audio.Mp3.Yx5300/Samples/Audio.Mp3.Yx5300_Sample)

### Wiring Example

To wire a Yx5300 to your Meadow board, connect the following:

| Yx5300 | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |

