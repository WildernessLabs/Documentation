---
title: Class ChannelStatusChangedEventArgs
sidebar_label: ChannelStatusChangedEventArgs
description: >-
  Represents the arguments of event rising when the channel statuses have been
  changed.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid/ChannelStatusChangedEventArgs
---
# Class ChannelStatusChangedEventArgs
Represents the arguments of event rising when the channel statuses have been changed.

###### **Assembly**: Mpr121.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Mpr121/Driver/Mpr121.cs#L221)
```csharp title="Declaration"
public class ChannelStatusChangedEventArgs : EventArgs
```
**Inheritance:** `System.Object` -> `System.EventArgs`

## Properties
### ChannelStatus
The channel statuses.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Hid.Mpr121/Driver/Mpr121.cs#L226)
```csharp title="Declaration"
public IReadOnlyDictionary<Mpr121.Channels, bool> ChannelStatus { get; }
```
