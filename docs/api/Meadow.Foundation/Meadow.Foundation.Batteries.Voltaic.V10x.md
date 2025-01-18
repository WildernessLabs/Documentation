---
uid: Meadow.Foundation.Batteries.Voltaic.V10x
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Batteries.Voltaic.V10x
---

| V10x | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Batteries.Voltaic.V10x) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Batteries.Voltaic.V10x/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Batteries.Voltaic.V10x/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Batteries.Voltaic.V10x.svg?label=Meadow.Foundation.Batteries.Voltaic.V10x" alt="NuGet Gallery for Meadow.Foundation.Batteries.Voltaic.V10x" /></a> |
### Code Example

```csharp
public override async Task Run()
{
    Resolver.Log.Info("Run...");

    using (var port = new SerialPortShim("COM5", V10x.DefaultBaudRate, Parity.None, 8, StopBits.One))
    {
        port.ReadTimeout = TimeSpan.FromSeconds(15);
        port.Open();

        var client = new ModbusRtuClient(port);
        var controller = new V10x(client);

        controller.CommTimeout += (s, e) => Debug.WriteLine("Read Timeout");
        controller.CommError += (s, e) => Debug.WriteLine($"Error: {e.Message}");

        controller.StartPolling();

        var i = 0;

        while (true)
        {
            await Task.Delay(2000);
            Debug.WriteLine($"---------------");
            Debug.WriteLine($"Battery voltage: {controller.BatteryVoltage.Volts:N2} V");
            Debug.WriteLine($"Input voltage:   {controller.InputVoltage.Volts:N2} V");
            Debug.WriteLine($"Input current:   {controller.InputCurrent.Amps:N2} A");
            Debug.WriteLine($"Load voltage:    {controller.LoadVoltage.Volts:N2} V");
            Debug.WriteLine($"Load current:    {controller.LoadCurrent.Amps:N2} A");
            Debug.WriteLine($"Environ temp:    {controller.EnvironmentTemp.Fahrenheit:N2} F");
            Debug.WriteLine($"Controller temp: {controller.ControllerTemp.Fahrenheit:N2} F");

            controller.BatteryOutput = (i++ % 2 == 0);
        }
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Batteries.Voltaic.V10x/Samples/V10x_Sample)

