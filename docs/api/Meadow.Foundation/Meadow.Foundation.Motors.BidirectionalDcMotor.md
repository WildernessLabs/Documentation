---
uid: Meadow.Foundation.Motors.BidirectionalDcMotor
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Motors.BidirectionalDcMotor
---

| BidirectionalDcMotor | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Motors) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" alt="NuGet Gallery for Meadow.Foundation" /></a> |

### Code Example

```csharp
private BidirectionalDcMotor motor;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing...");

    IDigitalOutputPort motorA;
    IDigitalOutputPort motorB;

    motorA = Device.Pins.D00.CreateDigitalOutputPort(false);
    motorB = Device.Pins.D01.CreateDigitalOutputPort(false);

    motor = new BidirectionalDcMotor(motorA, motorB);

    return Task.CompletedTask;
}

public override async Task Run()
{
    Resolver.Log.Info("Test Motor...");

    while (true)
    {
        // Motor clockwise
        motor.StartClockwise();
        await Task.Delay(1000);

        // Motor Stop
        motor.Stop();
        await Task.Delay(500);

        // Motor counter clockwise
        motor.StartCounterClockwise();
        await Task.Delay(1000);

        // Motor Stop
        motor.Stop();
        await Task.Delay(500);
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples/Motor.BidirectionalDcMotor_Sample)


# Class BidirectionalDcMotor
A generic DC motor whose direction is dictated by two outputs (i.e. a pair of polarity relays)

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Motors/BidirectionalDcMotor.cs#L9)
```csharp title="Declaration"
public class BidirectionalDcMotor
```
## Properties
### State
Gets the current run state of the motor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Motors/BidirectionalDcMotor.cs#L42)
```csharp title="Declaration"
public BidirectionalDcMotor.MotorState State { get; }
```
## Methods
### Stop()
Stop turning the motor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Motors/BidirectionalDcMotor.cs#L80)
```csharp title="Declaration"
public void Stop()
```
### StartClockwise()
Start turning the motor clockwise
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Motors/BidirectionalDcMotor.cs#L89)
```csharp title="Declaration"
public void StartClockwise()
```
### StartCounterClockwise()
Start turning the motor counter/anti clockwise
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Motors/BidirectionalDcMotor.cs#L98)
```csharp title="Declaration"
public void StartCounterClockwise()
```
## Events
### StateChanged
Occurs when the state of the motor changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Motors/BidirectionalDcMotor.cs#L33)
```csharp title="Declaration"
public event EventHandler<BidirectionalDcMotor.MotorState> StateChanged
```
##### Event Type
`System.EventHandler<Meadow.Foundation.Motors.BidirectionalDcMotor.MotorState>`
