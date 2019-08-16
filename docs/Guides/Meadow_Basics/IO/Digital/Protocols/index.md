---
layout: Guides
title: Digital Protocols
subtitle: Communication Protocols
---


| Protocol | Speed | Multiple Peripheral Support | # of Wires                                                | Common use cases |
|----------|-------|-----------------------------|-----------|-----|
|   **[I2C](/Guides/Meadow_Basics/IO/Digital/Protocols/I2C)** (Inter Integrated Circuit)    | Slow to Medium (100Khz up to 5MHz)  | Yes | Two | | Short distance. Sensors, LCD displays, low-speed peripherals. |
|   **[SPI](/Guides/Meadow_Basics/IO/Digital/Protocols/SPI)** (Serial Peripheral Interface)   | Fast (1MHz+)  | Yes | Minimum of 3, Typically 4. | High-speed, data-heavy peripherals such as cameras and displays. |
|  **[UART](/Guides/Meadow_Basics/IO/Digital/Protocols/UART)** (RS232 Serial)  | Slow  | No | 2 | Used for communication between boards or with computers. |
| **[CAN](/Guides/Meadow_Basics/IO/Digital/Protocols/CAN)** |
| **[I2S](/Guides/Meadow_Basics/IO/Digital/Protocols/I2S)** (Integrated Inter-IC Sound Bus) |


# IByteCommunications

For both I2C and SPI, even though the hardware standard is slightly different, the 