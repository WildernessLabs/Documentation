---
uid: Meadow.Foundation.Audio.Mp3.Yx5300
remarks: *content
---

| Yx5300           |             |
|------------------|-------------|
| Status           | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code      | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Audio.Mp3.Yx5300)  |
| NuGet package    | <a href="https://www.nuget.org/packages/Meadow.Foundation.Audio.Mp3.Yx5300/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Audio.Mp3.Yx5300.svg?label=Meadow.Foundation.Audio.Mp3.Yx5300" style="width: auto; height: -webkit-fill-available;" /></a> |

### Code Example

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    Yx5300 mp3Player;

    RgbPwmLed onboardLed;

    public MeadowApp()
    {
        Initialize();

        onboardLed.SetColor(Color.Yellow);

        Mp3Test();
    }

    async Task Mp3Test()
    {
        onboardLed.SetColor(Color.Green);

        mp3Player.SetVolume(15);

        var status = await mp3Player.GetStatus();
        Console.WriteLine($"Status: {status}");

        var count = await mp3Player.GetNumberOfTracksInFolder(0);
        Console.WriteLine($"Count: {count}");

        mp3Player.Play();
        await Task.Delay(5000);

        status = await mp3Player.GetStatus();
        Console.WriteLine($"Status: {status}");

        mp3Player.Next();

        onboardLed.SetColor(Color.Blue);
    }

    void Initialize()
    {
        Console.WriteLine("Initialize hardware...");

        onboardLed = new RgbPwmLed(device: Device,
            redPwmPin: Device.Pins.OnboardLedRed,
            greenPwmPin: Device.Pins.OnboardLedGreen,
            bluePwmPin: Device.Pins.OnboardLedBlue,
            3.3f, 3.3f, 3.3f,
            Meadow.Peripherals.Leds.IRgbLed.CommonType.CommonAnode);

        mp3Player = new Yx5300(Device, Device.SerialPortNames.Com4);
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Audio.Mp3.Yx5300/Samples/Audio.Mp3.Yx5300_Sample) 

### Wiring Example

To wire a Yx5300 to your Meadow board, connect the following:

| Yx5300 | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |