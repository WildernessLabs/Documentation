---
layout: Meadow
title: Meadow F7 Micro Beta Status
subtitle: Guides and documentation for Meadow
---

# Meadow F7 Micro Beta Status

We are currently in [Meadow Beta 3](/Meadow/Release_Notes/Beta3/).

## GPIO

| Feature              | Tested Working      | Notes                             |
|----------------------|---------------------|-----------------------------------|
| **Basic Digital IO** | Yes | |
| **Analog**           | Yes | |
| **PWM**              | Yes | |
| **Serial (UART)**    | No | Planned, Beta 4 |
| **I2C**              | Yes | |
| **SPI**              | Yes | |
| **CAN**              | No | Planned, RTW |
| **DAC**              | No | Not implemented. Post-RTW |

## Working GPIO Ports

| Feature          | Tested Working      | Notes                             |
|------------------|---------------------|-----------------------------------|
| @"Meadow.Hardware.AnalogInputPort" | Yes | |
| @"Meadow.Hardware.DigitalOutputPort" | Yes | |
| @"Meadow.Hardware.DigitalInputPort" | Yes | |
| @"Meadow.Hardware.BiDirectionalPort" | Yes | |

## Communications

| Feature          | Tested Working      | Notes                             |
|------------------|---------------------|-----------------------------------|
| WiFi	| No| In progress. Planned Beta 4 |
| Bluetooth | No | Working on co-proc. Not hooked to API. Planned for RC-1. |

## Other Features

| Feature          | Tested Working      | Notes                             |
|------------------|---------------------|-----------------------------------|
| Battery Charging  | Yes | |
| Battery Voltage Level | No | Planed, Beta 4; Relies on Networking co-processor.
| Power Management APIs | No | Planned for RC-1 |

## [Next - Fundamentals of Meadow Apps](/Meadow/Meadow_Basics/Apps/)