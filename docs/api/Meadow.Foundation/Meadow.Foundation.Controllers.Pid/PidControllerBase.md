---
title: Class PidControllerBase
sidebar_label: PidControllerBase
description: Represents a PID controller
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Controllers.Pid/PidControllerBase
---
# Class PidControllerBase
Represents a PID controller

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Controllers/PID/PidControllerBase.cs#L9)
```csharp title="Declaration"
public abstract class PidControllerBase : IPidController
```
**Derived:**  
[Meadow.Foundation.Controllers.Pid.IdealPidController](../Meadow.Foundation.Controllers.Pid/IdealPidController), [Meadow.Foundation.Controllers.Pid.StandardPidController](../Meadow.Foundation.Controllers.Pid/StandardPidController)

**Implements:**  
`Meadow.Peripherals.Controllers.PID.IPidController`

## Properties
### ActualInput
Represents the ProcessVariable (PV), or the actual signal
reading of the system in its current state. For example, 
when heating a cup of coffee to 75°, if the temp sensor
says the coffee is currently at 40°, the 40� is the 
actual input value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Controllers/PID/PidControllerBase.cs#L39)
```csharp title="Declaration"
public float ActualInput { get; set; }
```
### TargetInput
Represents the SetPoint (SP), or the reference target signal
to achieve. For example, when heating a cup of coffee to 
75°, 75° is the target input value.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Controllers/PID/PidControllerBase.cs#L45)
```csharp title="Declaration"
public float TargetInput { get; set; }
```
### OutputMin
Output minimum value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Controllers/PID/PidControllerBase.cs#L50)
```csharp title="Declaration"
public float OutputMin { get; set; }
```
### OutputMax
Output maximum value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Controllers/PID/PidControllerBase.cs#L55)
```csharp title="Declaration"
public float OutputMax { get; set; }
```
### ProportionalComponent
Proportional gain
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Controllers/PID/PidControllerBase.cs#L60)
```csharp title="Declaration"
public virtual float ProportionalComponent { get; set; }
```
### IntegralComponent
Integral gain
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Controllers/PID/PidControllerBase.cs#L64)
```csharp title="Declaration"
public virtual float IntegralComponent { get; set; }
```
### DerivativeComponent
Derivative gain
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Controllers/PID/PidControllerBase.cs#L68)
```csharp title="Declaration"
public virtual float DerivativeComponent { get; set; }
```
### OutputTuningInformation
Whether or not to print the calculation information to the
output console in an comma-delimited form. Useful for 
pasting into a spreadsheet to graph the system control 
performance when tuning the PID controller corrective
action gains.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Controllers/PID/PidControllerBase.cs#L76)
```csharp title="Declaration"
public bool OutputTuningInformation { get; set; }
```
## Fields
### _lastUpdateTime
Last update time
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Controllers/PID/PidControllerBase.cs#L15)
```csharp title="Declaration"
protected DateTime _lastUpdateTime
```
### _lastError
Last error value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Controllers/PID/PidControllerBase.cs#L20)
```csharp title="Declaration"
protected float _lastError
```
### _integral
Integral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Controllers/PID/PidControllerBase.cs#L25)
```csharp title="Declaration"
protected float _integral
```
### _lastControlOutputValue
Last control output value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Controllers/PID/PidControllerBase.cs#L30)
```csharp title="Declaration"
protected float _lastControlOutputValue
```
## Methods
### ResetIntegrator()
Reset integral
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Controllers/PID/PidControllerBase.cs#L91)
```csharp title="Declaration"
public void ResetIntegrator()
```
### CalculateControlOutput()
Calculates the control output based on the Target and Actual, using the current PID values
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Controllers/PID/PidControllerBase.cs#L101)
```csharp title="Declaration"
public abstract float CalculateControlOutput()
```

##### Returns

`System.Single`

## Implements

* `Meadow.Peripherals.Controllers.PID.IPidController`
