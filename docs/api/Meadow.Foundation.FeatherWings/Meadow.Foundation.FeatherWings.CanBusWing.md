---
uid: Meadow.Foundation.FeatherWings.CanBusWing
slug: /docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings.CanBusWing
---

| CanBusWing | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings/tree/main/Source/CanBusWing) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.FeatherWings.CanBusWing/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.FeatherWings.CanBusWing.svg?label=Meadow.Foundation.FeatherWings.CanBusWing" alt="NuGet Gallery for Meadow.Foundation.FeatherWings.CanBusWing" /></a> |
### Code Example

```csharp
private CanBusWing wing;

public override Task Initialize()
{
    Console.WriteLine("Initialize...");

    wing = new CanBusWing(Device);

    return Task.CompletedTask;
}

public override async Task Run()
{
    var bus = wing.CreateCanBus(CanBitrate.Can_250kbps);

    Console.WriteLine($"Listening for CAN data...");

    var tick = 0;

    while (true)
    {
        var frame = bus.ReadFrame();
        if (frame != null)
        {
            if (frame is StandardDataFrame sdf)
            {
                Console.WriteLine($"Standard Frame: {sdf.ID:X3} {BitConverter.ToString(sdf.Payload)}");
            }
            else if (frame is ExtendedDataFrame edf)
            {
                Console.WriteLine($"Extended Frame: {edf.ID:X8} {BitConverter.ToString(edf.Payload)}");
            }
        }
        else
        {
            await Task.Delay(100);
        }

        if (tick++ % 50 == 0)
        {
            Console.WriteLine($"Sending Standard Frame...");

            bus.WriteFrame(new StandardDataFrame
            {
                ID = 0x700,
                Payload = new byte[] { 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, (byte)(tick & 0xff) }
            });
        }
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation.FeatherWings/tree/main/Source/CanBusWing/Samples/CanBusWing_Sample)

