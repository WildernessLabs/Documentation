---
title: Class MeadowApp
sidebar_label: MeadowApp
slug: /docs/api/Meadow.Foundation/ProgrammableAnalogInput_Sample/MeadowApp
---
# Class MeadowApp


###### **Assembly**: App.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Product/ProgrammableAnalogInput_Sample/MeadowApp.cs#L8)
```csharp title="Declaration"
public class MeadowApp : App<F7CoreComputeV2>, IApp
```
**Inheritance:** `System.Object` -> `Meadow.AppBase` -> `Meadow.App<Meadow.Devices.F7CoreComputeV2>`

**Implements:**  
`Meadow.IApp`

## Methods
### Initialize()
Called by MeadowOS to initialize the App
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Product/ProgrammableAnalogInput_Sample/MeadowApp.cs#L13)
```csharp title="Declaration"
public override Task Initialize()
```

##### Returns

`System.Threading.Tasks.Task`
### Run()
Called by MeadowOS when everything is ready for the App to run
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Product/ProgrammableAnalogInput_Sample/MeadowApp.cs#L26)
```csharp title="Declaration"
public override Task Run()
```

##### Returns

`System.Threading.Tasks.Task`

## Implements

* `Meadow.IApp`
