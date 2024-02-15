---
uid: Meadow.Foundation.Motors.Stepper.Uln2003
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Motors.Stepper.Uln2003
---

| Uln2003 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.Uln2003) |
| Datasheet(s) | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.Uln2003/Datasheet) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Motors.Stepper.Uln2003/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Motors.Stepper.Uln2003.svg?label=Meadow.Foundation.Motors.Stepper.Uln2003" alt="NuGet Gallery for Meadow.Foundation.Motors.Stepper.Uln2003" /></a> |

**ULN2003** is a high voltage, high current Darlington array containing seven open collector Darlington pairs. The ULN2003 is often packaged on board used to control stepper motors.

### Code Example

```csharp
Uln2003 stepperController;

public override Task Initialize()
{
    stepperController = new Uln2003(
        pin1: Device.Pins.D01,
        pin2: Device.Pins.D02,
        pin3: Device.Pins.D03,
        pin4: Device.Pins.D04);

    return base.Initialize();
}

public override Task Run()
{
    stepperController.Step(1024);

    for (int i = 0; i < 100; i++)
    {
        Resolver.Log.Info($"Step forward {i}");
        stepperController.Step(50);
        Thread.Sleep(10);
    }

    for (int i = 0; i < 100; i++)
    {
        Resolver.Log.Info($"Step backwards {i}");
        stepperController.Step(-50);
        Thread.Sleep(10);
    }

    return base.Run();
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.Uln2003/Samples/Uln2003_Sample)

### Wiring Example

To wire a ULN2003 to your Meadow board, connect the following:

| ULN2003 | Meadow Pin  |
|---------|-------------|
| GND     | GND         |
| VCC     | 3V3         |
| INT1    | D01         |
| INT2    | D02         |
| INT3    | D03         |
| INT4    | D04         |

It should look like the following diagram:

<img src="/API_Assets/Meadow.Foundation.Motors.Stepper.Uln2003/Uln2003_Fritzing.png" />





# Class Uln2003
This class is for controlling stepper motors that are controlled by a 4 pin controller board.

###### **Assembly**: Uln2003.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.Uln2003/Driver/Uln2003.cs#L10)
```csharp title="Declaration"
public class Uln2003 : IDisposable
```
**Implements:**  
`System.IDisposable`

## Properties
### AngularVelocity
Sets the motor speed to revolutions per minute.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.Uln2003/Driver/Uln2003.cs#L16)
```csharp title="Declaration"
public AngularVelocity AngularVelocity { get; set; }
```
### Mode
Sets the stepper's mode.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.Uln2003/Driver/Uln2003.cs#L23)
```csharp title="Declaration"
public Uln2003.StepperMode Mode { get; set; }
```
### IsDisposed
Is the object disposed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.Uln2003/Driver/Uln2003.cs#L63)
```csharp title="Declaration"
public bool IsDisposed { get; }
```
## Methods
### Stop()
Stop the motor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.Uln2003/Driver/Uln2003.cs#L142)
```csharp title="Declaration"
public void Stop()
```
### Step(int)
Moves the motor - If the number is negative, the motor moves in the reverse direction
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.Uln2003/Driver/Uln2003.cs#L156)
```csharp title="Declaration"
public void Step(int steps)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Int32` | *steps* | Number of steps |

### Dispose()
Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.Uln2003/Driver/Uln2003.cs#L201)
```csharp title="Declaration"
public void Dispose()
```
### Dispose(bool)
Dispose of the object
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Peripherals/Motors.Stepper.Uln2003/Driver/Uln2003.cs#L211)
```csharp title="Declaration"
protected virtual void Dispose(bool disposing)
```

##### Parameters

| Type | Name | Description |
|:--- |:--- |:--- |
| `System.Boolean` | *disposing* | Is disposing |


## Implements

* `System.IDisposable`
