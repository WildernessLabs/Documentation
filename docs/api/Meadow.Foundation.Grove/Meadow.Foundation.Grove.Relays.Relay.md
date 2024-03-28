---
uid: Meadow.Foundation.Grove.Relays.Relay
slug: /docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Relays.Relay
---

| Relay | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/Relay) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Relays.Relay/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Relays.Relay.svg?label=Meadow.Foundation.Grove.Relays.Relay" alt="NuGet Gallery for Meadow.Foundation.Grove.Relays.Relay" /></a> |

### Code Example

```csharp


        Relay relay;

        public override Task Initialize()
        {
            Resolver.Log.Info("Initialize...");

            relay = new Relay(Device.Pins.D13);

            return Task.CompletedTask;
        }

        public override async Task Run()
        {
            var state = false;

            while (true)
            {
                state = !state;

                Resolver.Log.Info($"- State: {state}");

                relay.State = state
                    ? Meadow.Peripherals.Relays.RelayState.Closed
                    : Meadow.Peripherals.Relays.RelayState.Open;

                await Task.Delay(500);
            }
        }

        ```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/Relay/Sample/Relay_Sample)

### Wiring Example

| Relay | Meadow Pin |
|--------|------------|
| GND    | GND        |
| VCC    | 3.3V       |
| RX     | D01        |
| TX     | D00        |
