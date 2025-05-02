---
title: Class MagneticSwitch
sidebar_label: MagneticSwitch
description: Represents a Magnetic Switch
slug: >-
  /docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Switches/MagneticSwitch
---
# Class MagneticSwitch
Represents a Magnetic Switch

###### **Assembly**: MagneticSwitch.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.Grove.git/blob/develop/Source/MagneticSwitch/Driver/MagneticSwitch.cs#L11)
```csharp title="Declaration"
public class MagneticSwitch : ISwitch, ISensor<bool>, ISensor
```
**Implements:**  
`Meadow.Peripherals.Switches.ISwitch`, `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`, `Meadow.Peripherals.Sensors.ISensor`

## Properties
### IsOn
Returns the state of the switch
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.Grove.git/blob/develop/Source/MagneticSwitch/Driver/MagneticSwitch.cs#L18)
```csharp title="Declaration"
public bool IsOn { get; }
```
## Methods
### Read()
Returns the state of the switch
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.Grove.git/blob/develop/Source/MagneticSwitch/Driver/MagneticSwitch.cs#L57)
```csharp title="Declaration"
public Task<bool> Read()
```

##### Returns

`System.Threading.Tasks.Task<System.Boolean>`
## Events
### Changed
Event triggered when status has changed
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.Grove.git/blob/develop/Source/MagneticSwitch/Driver/MagneticSwitch.cs#L23)
```csharp title="Declaration"
public event EventHandler Changed
```
##### Event Type
`System.EventHandler`

## Implements

* `Meadow.Peripherals.Switches.ISwitch`
* `Meadow.Peripherals.Sensors.ISensor<System.Boolean>`
* `Meadow.Peripherals.Sensors.ISensor`
