---
title: Class Relay
sidebar_label: Relay
description: "Electrical switch (usually mechanical) that switches on an isolated circuit."
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
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Relays/Relay.cs#L18)
```csharp title="Declaration"
protected IDigitalOutputPort DigitalOut { get; set; }
```
### Type
Returns type of relay.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Relays/Relay.cs#L23)
```csharp title="Declaration"
public RelayType Type { get; protected set; }
```
### IsOn
Whether or not the relay is on. Setting this property will turn it on or off.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Relays/Relay.cs#L28)
```csharp title="Declaration"
public bool IsOn { get; set; }
```
## Methods
### Toggle()
Toggles the relay on or off.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Relays/Relay.cs#L69)
```csharp title="Declaration"
public void Toggle()
```
## Events
### OnRelayChanged
Event raised after relay state change
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Core/Relays/Relay.cs#L13)
```csharp title="Declaration"
public event EventHandler<bool> OnRelayChanged
```
##### Event Type
`System.EventHandler<System.Boolean>`

## Implements

* `Meadow.Peripherals.Relays.IRelay`
