---
title: Class KeyScanEventArgs
sidebar_label: KeyScanEventArgs
description: The KeyScanEventArgs class
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders/KeyScanEventArgs
---
# Class KeyScanEventArgs
The KeyScanEventArgs class

###### **Assembly**: As1115.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/KeyScanEventArgs.cs#L8)
```csharp title="Declaration"
public class KeyScanEventArgs : EventArgs
```
**Inheritance:** `System.Object` -> `System.EventArgs`

## Properties
### Button
The button for the event args
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/KeyScanEventArgs.cs#L13)
```csharp title="Declaration"
public As1115.KeyScanButtonType Button { get; protected set; }
```
### KeyA
KeyA value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/KeyScanEventArgs.cs#L18)
```csharp title="Declaration"
public byte KeyA { get; protected set; }
```
### KeyB
KeyB value
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/ICs.IOExpanders.As1115/Driver/KeyScanEventArgs.cs#L23)
```csharp title="Declaration"
public byte KeyB { get; protected set; }
```
