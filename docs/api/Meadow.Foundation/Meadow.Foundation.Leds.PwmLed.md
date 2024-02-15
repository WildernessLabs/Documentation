---
uid: Meadow.Foundation.Leds.PwmLed
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Leds.PwmLed
---

| PwmLed | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Leds) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" alt="NuGet Gallery for Meadow.Foundation" /></a> |

**PwmLed** represents an LED whose voltage (and brightness) is controlled by the duty-cycle of a PWM signal. It can be used both with Leds that have been current limited with in-series resistors, or Leds without resistors.

Controlling an LED via a PWM signal is more power efficient than using a current-limiting resistor. It also provides more control, allowing multiple grades of brightness. 

To use PwmLed without a resistor, pass in the forward voltage (voltage drop) of the LED to the `forwardVoltage` constructor parameter, and the class will limit its output to the maximum forward voltage rating of the LED.

To use with an LED that has a resistor in series, pass `0.0` or `TypicalForwardVoltage.ResistorLimited` for the `forwardVoltage` parameter.

### Code Example

```csharp
PwmLedBarGraph pwmLedBarGraph;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    // Using an array of Pins that support PWM (D02 - D13)
    IPin[] pins =
    {
         Device.Pins.D11,
         Device.Pins.D10,
         Device.Pins.D09,
         Device.Pins.D08,
         Device.Pins.D07,
         Device.Pins.D06,
         Device.Pins.D05,
         Device.Pins.D04,
         Device.Pins.D03,
         Device.Pins.D02
    };

    pwmLedBarGraph = new PwmLedBarGraph(pins, new Voltage(2.2));

    return Task.CompletedTask;
}

public override async Task Run()
{
    Resolver.Log.Info("TestLedBarGraph...");

    float percentage = 0;

    while (true)
    {
        Resolver.Log.Info("Turning them on and off for 200ms using SetLed...");
        for (int i = 0; i < pwmLedBarGraph.Count; i++)
        {
            await pwmLedBarGraph.SetLed(i, true);
            await Task.Delay(100);
            await pwmLedBarGraph.SetLed(i, false);
        }

        await Task.Delay(1000);

        Resolver.Log.Info("Turning them on using Percentage...");
        while (percentage < 1)
        {
            percentage += 0.01f;
            await pwmLedBarGraph.SetPercentage(Math.Min(1.0f, percentage));
            await Task.Delay(100);
        }

        await Task.Delay(1000);

        Resolver.Log.Info("Turning them off using Percentage...");
        while (percentage > 0)
        {
            percentage -= 0.01f;
            await pwmLedBarGraph.SetPercentage(Math.Max(0.0f, percentage));
            await Task.Delay(100);
        }

        await Task.Delay(1000);

        Resolver.Log.Info("Blinking for 5 seconds at 500ms on/off...");
        await pwmLedBarGraph.StartBlink();
        await Task.Delay(5000);
        await pwmLedBarGraph.StopAnimation();

        await Task.Delay(1000);

        Resolver.Log.Info("Bar blinking with high and low brightness for 5 seconds...");
        await pwmLedBarGraph.StartBlink(TimeSpan.FromMilliseconds(200), TimeSpan.FromMilliseconds(200), 0.75f, 0.25f);
        await Task.Delay(5000);
        await pwmLedBarGraph.StopAnimation();

        await Task.Delay(1000);

        Resolver.Log.Info("Bar pulsing for 5 seconds...");
        await pwmLedBarGraph.StartPulse();
        await Task.Delay(5000);
        await pwmLedBarGraph.StopAnimation();

        await Task.Delay(1000);

        await pwmLedBarGraph.SetBrightness(0);

        await Task.Delay(1000);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples/Leds.PwmLedBarGraph_Sample)

### Wiring Example

![PWM LED connected to a Meadow F7](/API_Assets/Meadow.Foundation.Leds.PwmLed/PwmLed_Fritzing.svg)

# Class PwmLed
Represents an LED whose voltage is limited by the duty-cycle of a PWM
signal.

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L12)
```csharp title="Declaration"
public class PwmLed : IPwmLed, IDisposable
```
**Implements:**  
`Meadow.Peripherals.Leds.IPwmLed`, `System.IDisposable`

## Properties
### MAX_FORWARD_VOLTAGE
Maximum forward voltage (3.3 Volts)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L21)
```csharp title="Declaration"
public Voltage MAX_FORWARD_VOLTAGE { get; }
```
### MIN_FORWARD_VOLTAGE
Minimum forward voltage (0 Volts)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L26)
```csharp title="Declaration"
public Voltage MIN_FORWARD_VOLTAGE { get; }
```
### IsOn
Turns on LED with current color or turns it off
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L31)
```csharp title="Declaration"
public bool IsOn { get; set; }
```
### Port
Gets the PwmPort
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L45)
```csharp title="Declaration"
protected IPwmPort Port { get; set; }
```
### ForwardVoltage
Gets the forward voltage value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L50)
```csharp title="Declaration"
public Voltage ForwardVoltage { get; protected set; }
```
### Brightness
The brightness value assigned to the LED
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L55)
```csharp title="Declaration"
public float Brightness { get; protected set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L60)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### StopAnimation()
Stops any running animations.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLed.Animations.cs#L17)
```csharp title="Declaration"
public Task StopAnimation()
```

##### Returns

`System.Threading.Tasks.Task`
### StartBlink(float, float)
Start a Blink animation which sets the brightness of the LED alternating between a low and high brightness setting.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLed.Animations.cs#L33)
```csharp title="Declaration"
public Task StartBlink(float highBrightness = 1, float lowBrightness = 0)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *highBrightness* | The maximum brightness of the animation |
| `System.Single` | *lowBrightness* | The minimum brightness of the animation |

### StartBlink(TimeSpan, TimeSpan, float, float)
Start the Blink animation which sets the brightness of the LED alternating between a low and high brightness setting, using the durations provided.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLed.Animations.cs#L49)
```csharp title="Declaration"
public Task StartBlink(TimeSpan highBrightnessDuration, TimeSpan lowBrightnessDuration, float highBrightness = 1, float lowBrightness = 0)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.TimeSpan` | *highBrightnessDuration* | The duration the LED stays in high brightness |
| `System.TimeSpan` | *lowBrightnessDuration* | The duration the LED stays in low brightness |
| `System.Single` | *highBrightness* | The maximum brightness of the animation |
| `System.Single` | *lowBrightness* | The minimum brightness of the animation |

### StartPulse(float, float)
Start the Pulse animation which gradually alternates the brightness of the LED between a low and high brightness setting.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLed.Animations.cs#L84)
```csharp title="Declaration"
public Task StartPulse(float highBrightness = 1, float lowBrightness = 0.15)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *highBrightness* | The maximum brightness of the animation |
| `System.Single` | *lowBrightness* | The minimum brightness of the animation |

### StartPulse(TimeSpan, float, float)
Start the Pulse animation which gradually alternates the brightness of the LED between a low and high brightness setting, using the durations provided.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLed.Animations.cs#L99)
```csharp title="Declaration"
public Task StartPulse(TimeSpan pulseDuration, float highBrightness = 1, float lowBrightness = 0.15)
```

##### Returns

`System.Threading.Tasks.Task`

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.TimeSpan` | *pulseDuration* | The pulse animation duration |
| `System.Single` | *highBrightness* | The maximum brightness of the animation |
| `System.Single` | *lowBrightness* | The minimum brightness of the animation |

### ValidateBrightness(float, float)
Validates LED brightness to ensure they're within the range 0 (off) - 1 (full brightness)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLed.Animations.cs#L157)
```csharp title="Declaration"
protected void ValidateBrightness(float highBrightness, float lowBrightness)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *highBrightness* | The maximum brightness of the animation |
| `System.Single` | *lowBrightness* | The minimum brightness of the animation |

### ValidateForwardVoltages(Voltage)
Validates forward voltages to ensure they're within the range MIN_FORWARD_VOLTAGE to MAX_FORWARD_VOLTAGE
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L110)
```csharp title="Declaration"
protected void ValidateForwardVoltages(Voltage forwardVoltage)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `Meadow.Units.Voltage` | *forwardVoltage* | The forward voltage for the LED |

### SetBrightness(float)
Sets the LED to a specific brightness.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L122)
```csharp title="Declaration"
public void SetBrightness(float brightness)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *brightness* | Valid values are from 0 to 1, inclusive |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L140)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Leds/PwmLed.cs#L150)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `Meadow.Peripherals.Leds.IPwmLed`
* `System.IDisposable`
