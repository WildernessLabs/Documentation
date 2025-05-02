---
title: Namespace Meadow.Foundation.Sensors.Switches
sidebar_label: Meadow.Foundation.Sensors.Switches
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Switches
---
# Namespace Meadow.Foundation.Sensors.Switches
## Classes
### [DipSwitch](../Meadow.Foundation.Sensors.Switches/DipSwitch)
Represents a DIP-switch wired in a bus configuration, in which all switches 
are terminated to the same ground/common or high pin.
### [SimulatedSpstSwitch](../Meadow.Foundation.Sensors.Switches/SimulatedSpstSwitch)
Represents a simulated SPST switch
### [SpdtSwitch](../Meadow.Foundation.Sensors.Switches/SpdtSwitch)
Represents a simple, two position, Single-Pole-Dual-Throw (SPDT) switch that closes a circuit 
to either ground/common or high depending on position
### [SpstSwitch](../Meadow.Foundation.Sensors.Switches/SpstSwitch)
Represents a simple, on/off, Single-Pole-Single-Throw (SPST) switch that closes a circuit 
to either ground/common or high. 

Use the SwitchCircuitTerminationType to specify whether the other side of the switch
terminates to ground or high.
