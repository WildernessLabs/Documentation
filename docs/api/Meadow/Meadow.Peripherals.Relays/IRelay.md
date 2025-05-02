---
title: Interface IRelay
sidebar_label: IRelay
description: Electrical switch (usually mechanical) that switches on an isolated circuit
slug: /docs/api/Meadow/Meadow.Peripherals.Relays/IRelay
---
# Interface IRelay
Electrical switch (usually mechanical) that switches on an isolated circuit

###### **Assembly**: Meadow.Contracts.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Relays/IRelay.cs#L8)
```csharp title="Declaration"
public interface IRelay
```
## Properties
### IsOpen
Gets or sets a value indicating whether the relay is in an open state.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Relays/IRelay.cs#L13)
```csharp title="Declaration"
bool IsOpen { get; set; }
```
### IsClosed
Gets or sets a value indicating whether the relay is in a closed state.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Relays/IRelay.cs#L22)
```csharp title="Declaration"
bool IsClosed { get; set; }
```
### State
Gets or sets the state of the relay.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Relays/IRelay.cs#L31)
```csharp title="Declaration"
RelayState State { get; set; }
```
### Type
Returns relay type.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Relays/IRelay.cs#L36)
```csharp title="Declaration"
RelayType Type { get; }
```
## Methods
### Toggle()
Toggles the relay on or off.
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Relays/IRelay.cs#L41)
```csharp title="Declaration"
void Toggle()
```
## Events
### OnChanged
Event raised after relay state change
###### [View Source](https://github.com/WildernessLabs/Meadow.Contracts.git/blob/develop/Source/Meadow.Contracts/Peripherals/Relays/IRelay.cs#L46)
```csharp title="Declaration"
event EventHandler<RelayState> OnChanged
```
##### Event Type
`System.EventHandler<Meadow.Peripherals.Relays.RelayState>`
