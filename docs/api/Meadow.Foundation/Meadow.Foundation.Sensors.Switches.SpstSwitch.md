---
uid: Meadow.Foundation.Sensors.Switches.SpstSwitch
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Switches.SpstSwitch
---

| SpstSwitch | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Sensors/Switches) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" alt="NuGet Gallery for Meadow.Foundation" /></a> |

**SpstSwitch** represents a simple, on/off, Single-Pole-Single-Throw (SPST) switch that closes a circuit to either ground/common or high:

<img src="/API_Assets/Meadow.Foundation.Sensors.Switches.SpstSwitch/SPST_Switch.jpg"  />

Use the [`CircuitTerminationType`](/API/CircuitTerminationType) to specify whether the other side of the switch terminates to ground or high.

The following example shows how to use a SPST switch:

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    DigitalOutputPort _blueLED;
    SpstSwitch _spstSwitch;

    public MeadowApp()
    {
        _blueLED = new DigitalOutputPort(Device.Pins.OnboardLEDBlue, true);

        _spstSwitch = new SpstSwitch(Device.Pins.D13, CircuitTerminationType.High);
        _spstSwitch.Changed += (s, e) =>
        {
            Console.WriteLine("Switch Changed");
            Console.WriteLine("Switch on: " + _spstSwitch.IsOn.ToString());
        };

        Console.WriteLine("Initial switch state, isOn: " + _spstSwitch.IsOn.ToString());
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples) 

### Code Example

```csharp
protected SpstSwitch spstSwitch;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    spstSwitch = new SpstSwitch(Device.CreateDigitalInterruptPort(Device.Pins.D02, InterruptMode.EdgeFalling, ResistorMode.InternalPullDown));
    spstSwitch.Changed += (s, e) =>
    {
        Resolver.Log.Info("Switch Changed");
        Resolver.Log.Info($"Switch on: {spstSwitch.IsOn}");
    };

    Resolver.Log.Info("SpstSwitch ready...");

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples/Sensors.Switches.SpstSwitch_Sample)

### Wiring Example

<img src="/API_Assets/Meadow.Foundation.Sensors.Switches.SpstSwitch/SpstSwitch_Fritzing.svg" />

# Class SpstSwitch
Represents a simple, on/off, Single-Pole-Single-Throw (SPST) switch that closes a circuit 
to either ground/common or high. 

Use the SwitchCircuitTerminationType to specify whether the other side of the switch
terminates to ground or high.

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Switches/SpstSwitch.cs#L15)
```csharp title="Declaration"
public class SpstSwitch : ISwitch, ISensor<bool>, ISensor
```
**Implements:**  
`Meadow.Peripherals.Switches.ISwitch`, `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`, `Meadow.Peripherals.Sensors.ISensor`

## Properties
### IsOn
Describes whether or not the switch circuit is closed/connected (IsOn = true), or open (IsOn = false).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Switches/SpstSwitch.cs#L20)
```csharp title="Declaration"
public bool IsOn { get; protected set; }
```
### DigitalInputPort
Returns the DigitalInputPort.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Switches/SpstSwitch.cs#L34)
```csharp title="Declaration"
protected IDigitalInterruptPort DigitalInputPort { get; set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Switches/SpstSwitch.cs#L39)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### DigitalInChanged(object, DigitalPortResult)
Event handler when switch value has been changed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Switches/SpstSwitch.cs#L85)
```csharp title="Declaration"
protected void DigitalInChanged(object sender, DigitalPortResult e)
```

##### Parameters

| Type | Name |
|:--- |:--- |
| `System.Object` | *sender* |
| `Meadow.Hardware.DigitalPortResult` | *e* |

### Read()
Convenience method to get the current sensor reading
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Switches/SpstSwitch.cs#L93)
```csharp title="Declaration"
public Task<bool> Read()
```

##### Returns

`System.Threading.Tasks.Task<System.Boolean>`
### Dispose()

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Switches/SpstSwitch.cs#L96)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Switches/SpstSwitch.cs#L106)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |

## Events
### Changed
Raised when the switch circuit is opened or closed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Switches/SpstSwitch.cs#L29)
```csharp title="Declaration"
public event EventHandler Changed
```
##### Event Type
`System.EventHandler`

## Implements

* `Meadow.Peripherals.Switches.ISwitch`
* `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`
* `Meadow.Peripherals.Sensors.ISensor`
