---
layout: Meadow
title: Cellular
subtitle: Connect Meadow to LTE/4G cellular signals
---

##  Cellular

The beta cellular network for Meadow platform is compatible with the **BG770A Cell Wing** using the **F7 Feather v2**, and supports **Cat-M1** and **Nb-IoT** network modes.

## Network configuration

To enable the cellular network interface, create a **cell.config.yaml** file, where the cell settings will be defined. Also, the cell interface should be set on the **meadow.config.yaml**, and some pins used by the cell module should be reserved.

Then, to configure your network you just need to follow these three steps:

1 - Create a **cell.config.yaml** and flash it to the device, here's an example:

```yaml
Settings:
    APN: virtueyes.com.br # Access Point Name
    User: virtu # APN user (optional)
    Password: virtu # APN password (optional)
    Operator: 72410 # Carrier numeric operator code (optional)
    Mode: 7 # Network mode (Cat-M1 = 7, Nb-IoT = 9)
```

***Notes**: It's recommended to define the carrier operator code, since it avoids the module network automatic selection, making the connection generally more reliable.*

2 - Select **BG770A** as **DefaultInterface** in the **meadow.config.yaml**, if you don't have this *yaml* file in your device, you should create and flash it to the device:

```yaml
Network:
    DefaultInterface: BG770A
```

3 - Reserve the pins **I9**, **H13** and **C7**, which are used to turn on the **BG770A Cell Wing** and to exchange data with the **F7 Feather v2**:

```yaml
Device:
    ReservedPins: I9;H13;C7
```

## Hardware configuration

To use the **BG770A Cell Wing with the F7 Feather v2**, you just need to attach them, and connect an *LTE* antenna to the cell module.

## Testing

To check if you established a connection, you can use the `meadow listen` CLI command, which should return a message like this:
`Connection established successfully! IP address '100.69.106.222'.`
