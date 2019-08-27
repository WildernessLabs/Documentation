---
layout: Meadow
title: Meadow F7 Micro Beta Status
subtitle: Guides and documentation for Meadow
---

# Meadow F7 Micro Beta Status

## GPIO

| Feature          | Tested Working      | Notes                             |
|------------------|---------------------|-----------------------------------|
| **Basic Digital IO** | Yes. | |
| **Analog**           | Yes, with caveat. | Returning invalid values. |
| **PWM**              | Yes. | |
| **Serial (UART)**    | | Planned, RC-1 |
| **I2C**              | Yes. | |
| **SPI**              | Yes. | |
| **CAN**              | | Planned, RTW |
| **DAC**              | | Not implemented. Post-RTW |

## Working GPIO Ports

| Feature          | Tested Working      | Notes                             |
|------------------|---------------------|-----------------------------------|
| @"Meadow.Hardware.AnalogInputPort" | Yes, see notes. | Returning invalid values. |
| @"Meadow.Hardware.DigitalOutputPort" | Yes | |
| @"Meadow.Hardware.DigitalInputPort" | Yes | |
| @"Meadow.Hardware.BiDirectionalPort" | Yes | |

## Communications

| Feature          | Tested Working      | Notes                             |
|------------------|---------------------|-----------------------------------|
| WiFi	| Yes. | |
| Bluetooth | | Working on co-proc. Not hooked to API. Planned for RC-1. |

## Other Features

| Feature          | Tested Working      | Notes                             |
|------------------|---------------------|-----------------------------------|
| Battery Charing  | Yes. |
| Battery Voltage Level | ? | Waiting on co-proc comms integration. |
| Power Management | | Not implemented. |

## [Next - Fundamentals of Meadow Apps](/Guides/Meadow_Basics/Apps/)