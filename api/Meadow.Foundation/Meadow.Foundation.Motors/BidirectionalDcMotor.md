---
title: Class BidirectionalDcMotor
sidebar_label: BidirectionalDcMotor
description: "A generic DC motor whose direction is dictated by two outputs (i.e. a pair of polarity relays)"
---
# Class BidirectionalDcMotor
A generic DC motor whose direction is dictated by two outputs (i.e. a pair of polarity relays)

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Motors/BidirectionalDcMotor.cs#L9)
```csharp title="Declaration"
public class BidirectionalDcMotor
```
## Properties
### State
Gets the current run state of the motor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Motors/BidirectionalDcMotor.cs#L42)
```csharp title="Declaration"
public BidirectionalDcMotor.MotorState State { get; }
```
## Methods
### Stop()
Stop turning the motor
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Motors/BidirectionalDcMotor.cs#L80)
```csharp title="Declaration"
public void Stop()
```
### StartClockwise()
Start turning the motor clockwise
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Motors/BidirectionalDcMotor.cs#L89)
```csharp title="Declaration"
public void StartClockwise()
```
### StartCounterClockwise()
Start turning the motor counter/anti clockwise
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Motors/BidirectionalDcMotor.cs#L98)
```csharp title="Declaration"
public void StartCounterClockwise()
```
## Events
### StateChanged
Occurs when the state of the motor changes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Motors/BidirectionalDcMotor.cs#L33)
```csharp title="Declaration"
public event EventHandler<BidirectionalDcMotor.MotorState> StateChanged
```
##### Event Type
`System.EventHandler<Meadow.Foundation.Motors.BidirectionalDcMotor.MotorState>`
