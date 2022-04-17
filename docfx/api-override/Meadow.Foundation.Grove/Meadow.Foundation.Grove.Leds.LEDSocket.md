---
uid: Meadow.Foundation.Grove.Leds.LEDSocket
remarks: *content
---

| LEDSocket | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/LEDSocket) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Leds.LEDSocket/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Leds.LEDSocket.svg?label=Meadow.Foundation.Grove.Leds.LEDSocket" /></a> |

### Code Example

```csharp
public MeadowApp()
{
    

    Console.WriteLine("Initialize hardware...");

    LEDSocket led = new LEDSocket(Device, Device.Pins.D13);

    led.StartBlink();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/LEDSocket)

### Wiring Example

| LEDSocket | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |


















