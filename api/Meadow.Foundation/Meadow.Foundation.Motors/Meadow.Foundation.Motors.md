---
title: Namespace Meadow.Foundation.Motors
sidebar_label: Meadow.Foundation.Motors
---
# Namespace Meadow.Foundation.Motors
## Classes
### [BidirectionalDcMotor](../Meadow.Foundation.Motors/BidirectionalDcMotor)
A generic DC motor whose direction is dictated by two outputs (i.e. a pair of polarity relays)
### [ElectronicSpeedController](../Meadow.Foundation.Motors/ElectronicSpeedController)
Driver for Electronic Speed Controllers (ESCs) typically used to control motors via PWM signals.
To use, you generally have to calibrate the ESC through the following steps:
1. Depower the ESC, set the power to the intended maximum point (e.g., 1.0).
2. Power the ESC and wait for "happy tones" to indicate a good power supply, followed by possibly two beeps to indicate the max power limit set.
3. Set the ESC power to the intended minimum power point (e.g., 0.0), and the ESC should provide one beep for every LiPo cell (3.7V) of power supplied, followed by a long beep.
4. Optionally, for some ESCs, arm it by calling the `Arm()` method, which will drop the power below 0.0.
### [HBridgeMotor](../Meadow.Foundation.Motors/HBridgeMotor)
Generic h-bridge motor controller.
### [Tb67h420ftg](../Meadow.Foundation.Motors/Tb67h420ftg)
The TB67H420FTG is a brushed DC motor driver that has a dual H-Bridge
motor driver built in, along with over current protection (and notification).

With the ability to drive up to `50V` at `9A`, it's a very powerful driver.
It can also be put into single H-Bridge mode in which two motors are driven
in sync, or one motor is driven with both outputs, allowing twice the power.
### [Tb67h420ftg.Motor](../Meadow.Foundation.Motors/Tb67h420ftg.Motor)
Represents a Tb67h420ftg controlled motor
### [Tb67h420ftg.MotorOvercurrentEventArgs](../Meadow.Foundation.Motors/Tb67h420ftg.MotorOvercurrentEventArgs)
for future use?
## Enums
### [BidirectionalDcMotor.MotorState](../Meadow.Foundation.Motors/BidirectionalDcMotor.MotorState)
Represents the state of a motor
### [Tb67h420ftg.HBridgeMode](../Meadow.Foundation.Motors/Tb67h420ftg.HBridgeMode)
H-bridge mode
