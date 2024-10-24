---
uid: Meadow.Foundation.Grove.Relays.4-ChannelSpdtRelay
slug: >-
  /docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Relays.4-ChannelSpdtRelay
---

| 4-ChannelSpdtRelay | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/4-ChannelSpdtRelay) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Grove.Relays.4-ChannelSpdtRelay/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Grove.Relays.4-ChannelSpdtRelay.svg?label=Meadow.Foundation.Grove.Relays.4-ChannelSpdtRelay" alt="NuGet Gallery for Meadow.Foundation.Grove.Relays.4-ChannelSpdtRelay" /></a> |

### Code Example

```csharp
FourChannelSpdtRelay module;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing ...");

    module = new FourChannelSpdtRelay(Device.CreateI2cBus(), 0x11);

    return Task.CompletedTask;
}

public override Task Run()
{
    for (int i = 0; i < 5; i++)
    {
        Resolver.Log.Info("All on");
        module.SetAllOn();

        Thread.Sleep(1000);

        Resolver.Log.Info("All off");
        module.SetAllOff();

        Thread.Sleep(1000);

        for (int j = 0; j < 4; j++)
        {
            Resolver.Log.Info($"{(RelayIndex)j} closed");
            module.Relays[j].State = RelayState.Closed;
            Thread.Sleep(1000);
        }

        for (int j = 0; j < 4; j++)
        {
            Resolver.Log.Info($"{(RelayIndex)j} open");
            module.Relays[j].State = RelayState.Closed;
            Thread.Sleep(1000);
        }
    }

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.Grove/tree/main/Source/4-ChannelSpdtRelay/Sample/4-ChannelSpdtRelay_Sample)

