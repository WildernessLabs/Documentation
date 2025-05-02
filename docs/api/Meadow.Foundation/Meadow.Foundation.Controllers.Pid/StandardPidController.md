---
title: Class StandardPidController
sidebar_label: StandardPidController
description: Represents a standard PID controller
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Controllers.Pid/StandardPidController
---
# Class StandardPidController
Represents a standard PID controller

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Controllers/PID/StandardPidController.cs#L8)
```csharp title="Declaration"
public class StandardPidController : PidControllerBase, IPidController
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Controllers.Pid.PidControllerBase](../Meadow.Foundation.Controllers.Pid/PidControllerBase)

**Implements:**  
`Meadow.Peripherals.Controllers.PID.IPidController`

## Properties
### IntegralComponent
Integral time in minutes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Controllers/PID/StandardPidController.cs#L13)
```csharp title="Declaration"
public override float IntegralComponent { get; set; }
```
### DerivativeComponent
Derivative time in minutes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Controllers/PID/StandardPidController.cs#L18)
```csharp title="Declaration"
public override float DerivativeComponent { get; set; }
```
## Methods
### CalculateControlOutput()
Calculate control output of PID
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Controllers/PID/StandardPidController.cs#L24)
```csharp title="Declaration"
public override float CalculateControlOutput()
```

##### Returns

`System.Single`

## Implements

* `Meadow.Peripherals.Controllers.PID.IPidController`
