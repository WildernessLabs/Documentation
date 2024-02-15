---
uid: Meadow.Foundation.Motors.Stepper.A4988
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Motors.Stepper.A4988
---

| A4988 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.A4988) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.A4988/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Motors.Stepper.A4988/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Motors.Stepper.A4988.svg?label=Meadow.Foundation.Motors.Stepper.A4988" alt="NuGet Gallery for Meadow.Foundation.Motors.Stepper.A4988" /></a> |

### Code Example

```csharp
private A4988 a4988;

public override Task Initialize()
{
    a4988 = new A4988(
        step: Device.Pins.D01,
        direction: Device.Pins.D00,
        ms1Pin: Device.Pins.D04,
        ms2Pin: Device.Pins.D03,
        ms3Pin: Device.Pins.D02);

    return base.Initialize();
}

public override Task Run()
{
    var stepDivisors = (StepDivisor[])Enum.GetValues(typeof(StepDivisor));
    while (true)
    {
        foreach (var step in stepDivisors)
        {
            for (var d = 2; d < 5; d++)
            {
                Resolver.Log.Info($"180 degrees..Speed divisor = {d}..1/{(int)step} Steps..{a4988.Direction}...");
                a4988.RotationSpeedDivisor = d;
                a4988.StepDivisor = step;
                a4988.Rotate(180);

                Thread.Sleep(500);
            }
        }
        a4988.Direction = (a4988.Direction == RotationDirection.Clockwise) ? RotationDirection.CounterClockwise : RotationDirection.Clockwise;
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.A4988/Samples/A4988_Sample)

### Wiring Example

To wire a A4988 to your Meadow board, connect the following:

| A4988     | Meadow Pin |
|-----------|------------|
| GND       | GND        |
| VCC       | 5V         |
| STEP      | D01        |
| DIRECTION | D00        |
| M1        | D04        |
| M2        | D03        |
| M3        | D02        |

It should look like the following diagram:

<img src="/API_Assets/Meadow.Foundation.Motors.Stepper.A4988/A4988_Fritzing.png" />


# Class A4988
This class is for the A4988 Stepper Motor Driver

###### **Assembly**: A4988.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.A4988/Driver/A4988.cs#L13)
```csharp title="Declaration"
public class A4988 : IDisposable
```
**Implements:**  
`System.IDisposable`

## Properties
### StepAngle
Gets or sets the angle, in degrees, of one step for the connected stepper motor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.A4988/Driver/A4988.cs#L18)
```csharp title="Declaration"
public Angle StepAngle { get; set; }
```
### RotationSpeedDivisor
Divisor used to adjust rotational speed of the stepper motor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.A4988/Driver/A4988.cs#L32)
```csharp title="Declaration"
public int RotationSpeedDivisor { get; set; }
```
### Direction
Sets or gets the direction of rotation used for Step or Rotate methods
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.A4988/Driver/A4988.cs#L48)
```csharp title="Declaration"
public RotationDirection Direction { get; set; }
```
### StepDivisor
Divisor for micro-stepping a motor  
This requires the three micro-step control lines to be connected to the motor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.A4988/Driver/A4988.cs#L54)
```csharp title="Declaration"
public StepDivisor StepDivisor { get; set; }
```
### StepsPerRevolution
Gets the number of steps/micro-steps in the current configuration required for one 360-degree revolution
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.A4988/Driver/A4988.cs#L106)
```csharp title="Declaration"
public int StepsPerRevolution { get; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.A4988/Driver/A4988.cs#L118)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### Rotate(float, RotationDirection)
Rotates the stepper motor a specified number of degrees
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.A4988/Driver/A4988.cs#L215)
```csharp title="Declaration"
public void Rotate(float degrees, RotationDirection direction)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *degrees* | Degrees to rotate |
| `Meadow.Peripherals.RotationDirection` | *direction* | Direction of rotation |

### Rotate(float)
Rotates the stepper motor a specified number of degrees
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.A4988/Driver/A4988.cs#L225)
```csharp title="Declaration"
public void Rotate(float degrees)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Single` | *degrees* | Degrees to rotate |

### Step(int, RotationDirection)
Rotates the stepper motor a specified number of steps (or microsteps)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.A4988/Driver/A4988.cs#L237)
```csharp title="Declaration"
public void Step(int count, RotationDirection direction)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *count* | Number of steps to rotate |
| `Meadow.Peripherals.RotationDirection` | *direction* | Direction of rotation |

### Step(int)
Rotates the stepper motor a specified number of steps (or microsteps)
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.A4988/Driver/A4988.cs#L247)
```csharp title="Declaration"
public void Step(int count)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *count* | Number of steps to rotate |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.A4988/Driver/A4988.cs#L271)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.A4988/Driver/A4988.cs#L281)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `System.IDisposable`
