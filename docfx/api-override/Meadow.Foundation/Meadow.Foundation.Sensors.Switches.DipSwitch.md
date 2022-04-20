---
uid: Meadow.Foundation.Sensors.Switches.DipSwitch
remarks: *content
---

| DipSwitch | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Sensors/Switches) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" alt="NuGet Gallery for DipSwitch" /></a> |

**DipSwitch** represents a DIP-switch wired in a bus configuration, in which all switches are terminated to the same ground/common or high pin.

<img src="../../API_Assets/Meadow.Foundation.Sensors.Switches.DipSwitch/DIP_Switches.jpg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    protected DipSwitch dipSwitch;

    public MeadowApp()
    {
        Console.WriteLine("Initializing...");

        IDigitalInputPort[] ports =
        {
            Device.CreateDigitalInputPort(Device.Pins.D06, InterruptMode.EdgeRising, ResistorMode.InternalPullDown),
            Device.CreateDigitalInputPort(Device.Pins.D07, InterruptMode.EdgeFalling, ResistorMode.InternalPullDown),
            Device.CreateDigitalInputPort(Device.Pins.D08, InterruptMode.EdgeFalling, ResistorMode.InternalPullDown),
            Device.CreateDigitalInputPort(Device.Pins.D09, InterruptMode.EdgeFalling, ResistorMode.InternalPullDown),
            Device.CreateDigitalInputPort(Device.Pins.D10, InterruptMode.EdgeFalling, ResistorMode.InternalPullDown),
            Device.CreateDigitalInputPort(Device.Pins.D11, InterruptMode.EdgeFalling, ResistorMode.InternalPullDown),
            Device.CreateDigitalInputPort(Device.Pins.D12, InterruptMode.EdgeFalling, ResistorMode.InternalPullDown),
            Device.CreateDigitalInputPort(Device.Pins.D13, InterruptMode.EdgeFalling, ResistorMode.InternalPullDown),
        };

        dipSwitch = new DipSwitch(ports);
        dipSwitch.Changed += (s,e) =>
        {
            Console.WriteLine("Switch " + e.ItemIndex + " changed to " + (((ISwitch)e.Item).IsOn ? "on" : "off"));
        };

        Console.WriteLine("DipSwitch...");
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Core.Samples) 

### Code Example

```csharp
protected DipSwitch dipSwitch;

public MeadowApp()
{
    Console.WriteLine("Initializing...");

    IDigitalInputPort[] ports =
    {
        Device.CreateDigitalInputPort(Device.Pins.D06, InterruptMode.EdgeRising, ResistorMode.InternalPullDown),
    };

    dipSwitch = new DipSwitch(ports);
    dipSwitch.Changed += (s,e) =>
    {
        Console.WriteLine("Switch " + e.ItemIndex + " changed to " + (((ISwitch)e.Item).IsOn ? "on" : "off"));
    };

    Console.WriteLine("DipSwitch...");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples/Sensors.Switches.DipSwitch_Sample)

### Wiring Example

<img src="../../API_Assets/Meadow.Foundation.Sensors.Switches.DipSwitch/DipSwitch_Fritzing.svg" 
