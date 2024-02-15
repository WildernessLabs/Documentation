---
uid: Meadow.Foundation.Motors.ElectronicSpeedController
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Motors.ElectronicSpeedController
---

| ElectronicSpeedController | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Motors.ElectronicSpeedController) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Motors.ElectronicSpeedController/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Motors.ElectronicSpeedController/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Motors.ElectronicSpeedController.svg?label=Meadow.Foundation.Motors.ElectronicSpeedController" alt="NuGet Gallery for Meadow.Foundation.Motors.ElectronicSpeedController" /></a> |

```csharp
float frequency = 50f;
const float armMs = 0.5f;
const float powerIncrement = 0.05f;

ElectronicSpeedController esc;
RotaryEncoderWithButton rotary;

public MeadowApp()
{
    Initialize();
    DisplayPowerOnLed(esc.Power);
}

void Initialize()
{
    Console.WriteLine("Initialize hardware...");

    //==== rotary encoder
    rotary = new RotaryEncoderWithButton(Device, Device.Pins.D07, Device.Pins.D08, Device.Pins.D06);
    rotary.Rotated += Rotary_Rotated;
    rotary.Clicked += (s, e) => {
        Console.WriteLine($"Arming the device.");
        _ = esc.Arm();
    }; ;

    //==== Electronic Speed Controller
    esc = new ElectronicSpeedController(Device, Device.Pins.D02, frequency);

    Console.WriteLine("Hardware initialized.");
}

private void Rotary_Rotated(object sender, Meadow.Peripherals.Sensors.Rotary.RotaryChangeResult e)
{
    esc.Power += (e.Direction == RotationDirection.Clockwise) ? powerIncrement : -powerIncrement;
    DisplayPowerOnLed(esc.Power);

    Console.WriteLine($"New Power: {esc.Power * (float)100:n0}%");
}

/// <summary>
/// Displays the ESC power on the onboard LED as full red @ `100%`,
/// blue @ `0%`, and a proportional mix, in between those speeds.
/// </summary>
/// <param name="power"></param>
void DisplayPowerOnLed(float power)
{
    // `0.0` - `1.0`
    int r = (int)Map(power, 0f, 1f, 0f, 255f);
    int b = (int)Map(power, 0f, 1f, 255f, 0f);

    var color = Color.FromRgb(r, 0, b);
}

float Map(float value, float fromSource, float toSource, float fromTarget, float toTarget)
{
    return (value - fromSource) / (toSource - fromSource) * (toTarget - fromTarget) + fromTarget;
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Motors.ElectronicSpeedController/Samples/Motors.ElectronicSpeedController_Sample)

|
### Code Example

```csharp
private readonly Frequency frequency = new Frequency(50, Frequency.UnitType.Hertz);
private const float armMs = 0.5f;
private const float powerIncrement = 0.05f;
private ElectronicSpeedController esc;
private RotaryEncoderWithButton rotary;

public override Task Initialize()
{
    Resolver.Log.Info("Initialize...");

    rotary = new RotaryEncoderWithButton(Device.Pins.D07, Device.Pins.D08, Device.Pins.D06);
    rotary.Rotated += RotaryRotated;
    rotary.Clicked += (s, e) =>
    {
        Resolver.Log.Info($"Arming the device.");
        esc.Arm();
    }; ;

    esc = new ElectronicSpeedController(Device.Pins.D02, frequency);

    Resolver.Log.Info("Hardware initialized.");

    return base.Initialize();
}

private void RotaryRotated(object sender, RotaryChangeResult e)
{
    esc.Power += (e.New == RotationDirection.Clockwise) ? powerIncrement : -powerIncrement;
    DisplayPowerOnLed(esc.Power);

    Resolver.Log.Info($"New Power: {esc.Power * 100:n0}%");
}

/// <summary>
/// Displays the ESC power on the onboard LED as full red @ `100%`,
/// blue @ `0%`, and a proportional mix, in between those speeds.
/// </summary>
/// <param name="power"></param>
private void DisplayPowerOnLed(float power)
{
    // `0.0` - `1.0`
    int r = (int)ExtensionMethods.Map(power, 0f, 1f, 0f, 255f);
    int b = (int)ExtensionMethods.Map(power, 0f, 1f, 255f, 0f);

    var color = Color.FromRgb(r, 0, b);
}

public override Task Run()
{
    DisplayPowerOnLed(esc.Power);

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Motors.ElectronicSpeedController/Samples/ElectronicSpeedController_Sample)


# Class ElectronicSpeedController
Driver for Electronic Speed Controllers (ESCs) typically used to control motors via PWM signals.
To use, you generally have to calibrate the ESC through the following steps:
1. Depower the ESC, set the power to the intended maximum point (e.g., 1.0).
2. Power the ESC and wait for "happy tones" to indicate a good power supply, followed by possibly two beeps to indicate the max power limit set.
3. Set the ESC power to the intended minimum power point (e.g., 0.0), and the ESC should provide one beep for every LiPo cell (3.7V) of power supplied, followed by a long beep.
4. Optionally, for some ESCs, arm it by calling the `Arm()` method, which will drop the power below 0.0.

###### **Assembly**: ElectronicSpeedController.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.ElectronicSpeedController/Driver/ElectronicSpeedController.cs#L14)
```csharp title="Declaration"
public class ElectronicSpeedController
```
## Properties
### ArmingPulseDuration
The pulse duration, in milliseconds, necessary to "arm" the ESC. Default value is 0.5ms.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.ElectronicSpeedController/Driver/ElectronicSpeedController.cs#L21)
```csharp title="Declaration"
public float ArmingPulseDuration { get; set; }
```
### Power
Gets or sets the power of the ESC, in the range of 0.0 to 1.0.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.ElectronicSpeedController/Driver/ElectronicSpeedController.cs#L26)
```csharp title="Declaration"
public float Power { get; set; }
```
### Frequency
Frequency (in Hz) of the PWM signal. The default is 50Hz. Increase for higher quality ESCs that allow higher frequency PWM control signals.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.ElectronicSpeedController/Driver/ElectronicSpeedController.cs#L42)
```csharp title="Declaration"
public Frequency Frequency { get; }
```
### IsDisposed
Gets a value indicating whether the object has been disposed.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.ElectronicSpeedController/Driver/ElectronicSpeedController.cs#L47)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### Arm()
Sends a 0.5ms pulse to the motor to enable throttle control.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.ElectronicSpeedController/Driver/ElectronicSpeedController.cs#L78)
```csharp title="Declaration"
public void Arm()
```
### CalculateDutyCycle(float, Frequency)
Calculates the appropriate duty cycle of a PWM signal for the given pulse duration and frequency.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.ElectronicSpeedController/Driver/ElectronicSpeedController.cs#L89)
```csharp title="Declaration"
protected float CalculateDutyCycle(float pulseDuration, Frequency frequency)
```

##### Returns

`System.Single`: A duty cycle value expressed as a percentage between 0.0 and 1.0.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *pulseDuration* | The duration of the target pulse in milliseconds. |
| `Meadow.Units.Frequency` | *frequency* | The frequency of the PWM signal. |

### CalculatePulseDuration(float)
Returns a pulse duration in milliseconds for the given power, assuming that the allowed power band is between 1ms and 2ms.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.ElectronicSpeedController/Driver/ElectronicSpeedController.cs#L99)
```csharp title="Declaration"
protected float CalculatePulseDuration(float power)
```

##### Returns

`System.Single`: A pulse duration in milliseconds for the given power.
##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *power* | A value between 0.0 and 1.0 representing the percentage of power, with 0.0 = 0% and 1.0 = 100%. |

### Dispose()

###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.ElectronicSpeedController/Driver/ElectronicSpeedController.cs#L106)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.ElectronicSpeedController/Driver/ElectronicSpeedController.cs#L116)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |

