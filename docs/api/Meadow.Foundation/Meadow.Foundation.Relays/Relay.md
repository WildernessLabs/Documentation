---
title: Class Relay
sidebar_label: Relay
description: Electrical switch (usually mechanical) that switches on an isolated circuit.
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Relays/Relay
---
# Class Relay
Electrical switch (usually mechanical) that switches on an isolated circuit.

###### **Assembly**: Meadow.Foundation.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Relays/Relay.cs#L10)
```csharp title="Declaration"
public class Relay : IRelay
```
**Implements:**  
`Meadow.Peripherals.Relays.IRelay`

## Properties
### DigitalOut
Returns digital output port
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Relays/Relay.cs#L21)
```csharp title="Declaration"
protected IDigitalOutputPort DigitalOut { get; set; }
```
### Type
Returns type of relay.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Relays/Relay.cs#L26)
```csharp title="Declaration"
public RelayType Type { get; protected set; }
```
### State
Whether or not the relay is on. Setting this property will turn it on or off.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Relays/Relay.cs#L31)
```csharp title="Declaration"
public RelayState State { get; set; }
```
## Methods
### Toggle()
Toggles the relay on or off.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Relays/Relay.cs#L75)
```csharp title="Declaration"
public void Toggle()
```
## Events
### OnChanged
Event raised after relay state change
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Relays/Relay.cs#L16)
```csharp title="Declaration"
public event EventHandler<RelayState> OnChanged
```
##### Event Type
`System.EventHandler<Meadow.Peripherals.Relays.RelayState>`

## Implements

* `Meadow.Peripherals.Relays.IRelay`
