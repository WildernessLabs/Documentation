---
uid: Meadow.Foundation.Grove.Relays.Relay
remarks: *content
---

| Relay | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen"/> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/Relay) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Relays.Relay/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Relays.Relay.svg?label=Meadow.Foundation.Grove.Relays.Relay" /></a> |

### Code Example

```csharp
Relay relay;

public MeadowApp()
{
    Console.WriteLine("Initialize hardware...");

    relay = new Relay(Device, Device.Pins.D13);

    TestRelay();
}

void TestRelay()
{
    Console.WriteLine("TestRelay...");

    var state = false;

    while (true)
    {
        state = !state;

        Console.WriteLine($"- State: {state}");
        relay.IsOn = state;

        Thread.Sleep(500);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/Relay)

### Wiring Example

| Relay | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |


















