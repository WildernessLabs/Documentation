---
uid: Meadow.Foundation.Sensors.Switches.SpdtSwitch
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Switches.SpdtSwitch
---

| SpdtSwitch | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Sensors/Switches) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" alt="NuGet Gallery for Meadow.Foundation" /></a> |

**SpdtSwitch** represents a simple, two position, Single-Pole-Dual-Throw (SPDT) switch that closes a circuit to either ground/common or high depending on position.

<img src="/API_Assets/Meadow.Foundation.Sensors.Switches.SpdtSwitch/SPDT_Switch.png"  />

The following example shows how to use a SPDT switch:

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    DigitalOutputPort _blueLED;
    SpdtSwitch _spdtSwitch;

    public MeadowApp()
    {
        _blueLED = new DigitalOutputPort(Device.Pins.OnboardLEDBlue, true);

        _spdtSwitch = new SpdtSwitch(Device.Pins.D13);
        _spdtSwitch.Changed += (s, e) =>
        {
            Console.WriteLine("Switch Changed");
            Console.WriteLine("Switch on: " + _spdtSwitch.IsOn.ToString());
        };

        Console.WriteLine("Initial switch state, isOn: " + _spdtSwitch.IsOn.ToString());
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples) 

### Code Example

```csharp
protected SpdtSwitch spdtSwitch;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    spdtSwitch = new SpdtSwitch(Device.CreateDigitalInterruptPort(Device.Pins.D15, InterruptMode.EdgeBoth, ResistorMode.InternalPullDown));
    spdtSwitch.Changed += (s, e) =>
    {
        Resolver.Log.Info(spdtSwitch.IsOn ? "Switch is on" : "Switch is off");
    };

    Resolver.Log.Info("SpdtSwitch ready...");

    return Task.CompletedTask;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples/Sensors.Switches.SpdtSwitch_Sample)

### Wiring Example

<img src="/API_Assets/Meadow.Foundation.Sensors.Switches.SpdtSwitch/SpdtSwitch_Fritzing.svg" />

# Class SpdtSwitch
Represents a simple, two position, Single-Pole-Dual-Throw (SPDT) switch that closes a circuit 
to either ground/common or high depending on position

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Switches/SpdtSwitch.cs#L12)
```csharp title="Declaration"
public class SpdtSwitch : ISwitch, ISensor<bool>, ISensor, IDisposable
```
**Implements:**  
`Meadow.Peripherals.Switches.ISwitch`, `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`, `Meadow.Peripherals.Sensors.ISensor`, `System.IDisposable`

## Properties
### IsOn
Describes whether or not the switch circuit is closed/connected (IsOn = true), or open (IsOn = false).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Switches/SpdtSwitch.cs#L17)
```csharp title="Declaration"
public bool IsOn { get; protected set; }
```
### DigitalInputPort
Returns the DigitalInputPort.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Switches/SpdtSwitch.cs#L26)
```csharp title="Declaration"
protected IDigitalInterruptPort DigitalInputPort { get; set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Switches/SpdtSwitch.cs#L36)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### DigitalInChanged(object, DigitalPortResult)
Event handler when switch value has been changed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Switches/SpdtSwitch.cs#L82)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Switches/SpdtSwitch.cs#L90)
```csharp title="Declaration"
public Task<bool> Read()
```

##### Returns

`System.Threading.Tasks.Task<System.Boolean>`
### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Switches/SpdtSwitch.cs#L93)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Switches/SpdtSwitch.cs#L103)
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Sensors/Switches/SpdtSwitch.cs#L31)
```csharp title="Declaration"
public event EventHandler Changed
```
##### Event Type
`System.EventHandler`

## Implements

* `Meadow.Peripherals.Switches.ISwitch`
* `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`
* `Meadow.Peripherals.Sensors.ISensor`
* `System.IDisposable`
