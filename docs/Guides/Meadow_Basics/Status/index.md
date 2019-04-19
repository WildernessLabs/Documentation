# Meadow F7 Micro Beta Status


## GPIO

| Feature          | Tested Working      | Notes                             |
|------------------|---------------------|-----------------------------------|
| Basic Digital IO | Yes. | |
| Analog           | Yes, with caveat. | Returning invalid values. |
| PWM              | | In Progress. SoftPwmPort available in Meadow.Foundation as a low-speed workaround for now. |
| Serial (UART)    | | Planned |
| I2C              | | Planned |
| SPI              | | Planned. SoftSpi available as a workaround for now. |
| CAN              | | Planned |
| DAC              | | Not implemented. |

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
| WiFi	| | Working on co-proc. Not hooked to API. |
| Bluetooth | | Working on co-proc. Not hooked to API. |

## Other Features

| Feature          | Tested Working      | Notes                             |
|------------------|---------------------|-----------------------------------|
| Battery Charing  | Yes. |
| Battery Voltage Level | | Waiting on co-proc comms integration. |
| Power Management | | Not implemented. |

## [Next - Fundamentals of Meadow Apps](/guides/Meadow_Basics/Apps/index.html)