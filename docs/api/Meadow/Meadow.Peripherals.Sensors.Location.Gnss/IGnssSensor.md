---
title: Interface IGnssSensor
sidebar_label: IGnssSensor
description: Interface describing a Global navigation satellite system (GNSS) sensor
slug: /docs/api/Meadow/Meadow.Peripherals.Sensors.Location.Gnss/IGnssSensor
---
# Interface IGnssSensor
Interface describing a Global navigation satellite system (GNSS) sensor

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/IGnssSensor.cs#L8)
```csharp title="Declaration"
public interface IGnssSensor
```
## Properties
### SupportedResultTypes
Supported GNSS result types
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/IGnssSensor.cs#L18)
```csharp title="Declaration"
IGnssResult[] SupportedResultTypes { get; }
```
## Methods
### StartUpdating()
Start updating GNSS data
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/IGnssSensor.cs#L23)
```csharp title="Declaration"
void StartUpdating()
```
### StopUpdating()
Stop updating GNSS data
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/IGnssSensor.cs#L28)
```csharp title="Declaration"
void StopUpdating()
```
## Events
### GnssDataReceived
Raised when new GNSS data is available
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Sensors/Location/Gnss/IGnssSensor.cs#L13)
```csharp title="Declaration"
event EventHandler<IGnssResult> GnssDataReceived
```
##### Event Type
`System.EventHandler<Meadow.Peripherals.Sensors.Location.Gnss.IGnssResult>`
