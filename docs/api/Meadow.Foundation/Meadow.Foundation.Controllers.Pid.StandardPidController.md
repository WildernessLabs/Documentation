---
uid: Meadow.Foundation.Controllers.Pid.StandardPidController
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Controllers.Pid.StandardPidController
---

| StandardPidController | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Controllers/PID) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" alt="NuGet Gallery for Meadow.Foundation" /></a> |


# Class StandardPidController
Represents a standard PID controller

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Controllers/PID/StandardPidController.cs#L8)
```csharp title="Declaration"
public class StandardPidController : PidControllerBase, IPidController
```
**Inheritance:** `System.Object` -> [Meadow.Foundation.Controllers.Pid.PidControllerBase](../PidControllerBase)

**Implements:**  
`Meadow.Peripherals.Controllers.PID.IPidController`

## Properties
### IntegralComponent
Integral time in minutes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Controllers/PID/StandardPidController.cs#L13)
```csharp title="Declaration"
public override float IntegralComponent { get; set; }
```
### DerivativeComponent
Derivative time in minutes
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Controllers/PID/StandardPidController.cs#L18)
```csharp title="Declaration"
public override float DerivativeComponent { get; set; }
```
## Methods
### CalculateControlOutput()
Calculate control output of PID
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation/blob/main/Source/Meadow.Foundation.Core/Controllers/PID/StandardPidController.cs#L24)
```csharp title="Declaration"
public override float CalculateControlOutput()
```

##### Returns

`System.Single`

## Implements

* `Meadow.Peripherals.Controllers.PID.IPidController`
