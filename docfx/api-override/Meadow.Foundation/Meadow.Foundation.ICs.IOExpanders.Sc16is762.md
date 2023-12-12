---
uid: Meadow.Foundation.ICs.IOExpanders.Sc16is762
remarks: *content
---

| Sc16is762 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.ICs.IOExpanders.Sc16is7x2/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.ICs.IOExpanders.Sc16is7x2.svg?label=Meadow.Foundation.ICs.IOExpanders.Sc16is7x2" alt="NuGet Gallery for Meadow.Foundation.ICs.IOExpanders.Sc16is7x2" /></a> |
### Code Example

```csharp
private Sc16is762? expander = null;
private ISerialPort? portA = null;
private ISerialPort? portB = null;

public override async Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    var address = Sc16is762.Addresses.Address_0x4D;

    try
    {
        expander = new Sc16is762(
            Device.CreateI2cBus(),
            new Meadow.Units.Frequency(1.8432, Meadow.Units.Frequency.UnitType.Megahertz),
            address);

        portA = expander.PortA.CreateSerialPort();
        portB = expander.PortB.CreateSerialPort();
    }
    catch (Exception ex)
    {
        Resolver.Log.Error($"Failed to initialize 0x{(byte)address:X2}: {ex.Message}");
        await Task.Delay(1000);
    }
}

public override Task Run()
{
    if (expander == null || portA == null || portB == null)
    {
        return Task.CompletedTask;
    }

    PollingApp();

    while (true)
    {
        Thread.Sleep(1000);
    }
}

private void PollingApp()
{
    Task.Run(() =>
    {
        if (portA != null)
        {
            _ = PollProc(portA);
        }
    });
}

private async Task PollProc(ISerialPort port)
{
    var readBuffer = new byte[64];

    while (true)
    {
        try
        {
            Resolver.Log.Info($"Writing");
            port.Write(Encoding.ASCII.GetBytes("ping\n"));

            Resolver.Log.Info($"Reading");
            var count = port.Read(readBuffer, 0, readBuffer.Length);
            Resolver.Log.Info($"Read {count} bytes");

            Resolver.Log.Info($"{BitConverter.ToString(readBuffer, 0, count)}");

            await Task.Delay(5000);
        }
        catch (Exception ex)
        {
            Resolver.Log.Error($"Poll error: {ex.Message}");
            await Task.Delay(5000);
        }
    }
}
```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.Sc16is7x2/Samples/Sc16is762_Sample)

