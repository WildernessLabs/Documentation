---
title: Interface IPidController
sidebar_label: IPidController
description: 'Represents a Proportional, Integral, Derivative (PID) controller.'
slug: /docs/api/Meadow/Meadow.Peripherals.Controllers.PID/IPidController
---
# Interface IPidController
Represents a Proportional, Integral, Derivative (PID) controller.

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Controllers/PID/IPidController.cs#L6)
```csharp title="Declaration"
public interface IPidController
```
## Properties
### OutputMin
The minimum allowable control output value. The control output is clamped to this value after being calculated via the CalculateControlOutput method.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Controllers/PID/IPidController.cs#L11)
```csharp title="Declaration"
float OutputMin { get; set; }
```
### OutputMax
The maximum allowable control output value. The control output is clamped to this value after being calculated via the CalculateControlOutput method.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Controllers/PID/IPidController.cs#L16)
```csharp title="Declaration"
float OutputMax { get; set; }
```
### ActualInput
Represents the Process Variable (PV), or the actual signal reading of the system in its current state.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Controllers/PID/IPidController.cs#L21)
```csharp title="Declaration"
float ActualInput { get; set; }
```
### TargetInput
Represents the set point (SP), or the reference target signal to achieve.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Controllers/PID/IPidController.cs#L26)
```csharp title="Declaration"
float TargetInput { get; set; }
```
### IntegralComponent
The value to use when calculating the integral corrective action.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Controllers/PID/IPidController.cs#L31)
```csharp title="Declaration"
float IntegralComponent { get; set; }
```
### DerivativeComponent
The value to use when calculating the derivative corrective action.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Controllers/PID/IPidController.cs#L36)
```csharp title="Declaration"
float DerivativeComponent { get; set; }
```
### ProportionalComponent
The value to use when calculating the proportional corrective action.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Controllers/PID/IPidController.cs#L41)
```csharp title="Declaration"
float ProportionalComponent { get; set; }
```
### OutputTuningInformation
Whether or not to print the calculation information to the output console in an comma-delimited form.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Controllers/PID/IPidController.cs#L46)
```csharp title="Declaration"
bool OutputTuningInformation { get; set; }
```
## Methods
### ResetIntegrator()
Resets the integrator error history.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Controllers/PID/IPidController.cs#L51)
```csharp title="Declaration"
void ResetIntegrator()
```
### CalculateControlOutput()
Calculates the control output based on the difference (error) between the ActualInput and TargetInput, using the supplied ProportionalComponent, IntegralComponent, and DerivativeComponent.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Controllers/PID/IPidController.cs#L57)
```csharp title="Declaration"
float CalculateControlOutput()
```

##### Returns

`System.Single`
