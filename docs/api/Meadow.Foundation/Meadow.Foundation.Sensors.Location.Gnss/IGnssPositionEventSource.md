---
title: Interface IGnssPositionEventSource
sidebar_label: IGnssPositionEventSource
description: An interface for classes that generate GNSS positional data events
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Location.Gnss/IGnssPositionEventSource
---
# Interface IGnssPositionEventSource
An interface for classes that generate GNSS positional data events

###### **Assembly**: NmeaProcessor.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/IGnssPositionEventSource.cs#L9)
```csharp title="Declaration"
public interface IGnssPositionEventSource
```
## Events
### PositionReceived
Raised when position data is received
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Libraries_and_Frameworks/Sensors.Location.Gnss.NmeaProcessor/Driver/IGnssPositionEventSource.cs#L14)
```csharp title="Declaration"
event EventHandler<GnssPositionInfo>? PositionReceived
```
##### Event Type
`System.EventHandler<Meadow.Peripherals.Sensors.Location.Gnss.GnssPositionInfo>`
