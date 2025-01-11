---
uid: Meadow.Foundation.ICs.CAN.Mcp2515
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.CAN.Mcp2515
---

| Mcp2515 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.CAN.Mcp2515) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.CAN.Mcp2515/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.CAN.Mcp2515/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.CAN.Mcp2515.svg?label=Meadow.Foundation.ICs.CAN.Mcp2515" alt="NuGet Gallery for Meadow.Foundation.ICs.CAN.Mcp2515" /></a> |
### Code Example

```csharp
public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    expander = new Mcp2515(
        Device.CreateSpiBus(),
        Device.Pins.D05,
        Mcp2515.CanOscillator.Osc_8MHz,
        Device.Pins.D06);


    return base.Initialize();
}

public override async Task Run()
{
    var bus = expander.CreateCanBus(CanBitrate.Can_250kbps);

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

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.CAN.Mcp2515/Samples/Mcp2515_Sample)


