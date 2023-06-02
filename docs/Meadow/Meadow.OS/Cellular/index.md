---
layout: Meadow
title: Cellular
subtitle: Connect Meadow to LTE/4G cellular signals
---

##  Cellular

The beta cellular network for Meadow platform is compatible with the **Quectel BG770A Cell Wing**, **Quectel BG95-M3** and **Quectel M95** using the **F7 Feather v2**, and supports **Cat-M1** (**LTE-M** or **eMTC**),  **NB-IoT** and **GSM/GRPS** **2G** network modes.

**Cat-M1**, **NB-IoT**, and **GSM** (Global System for Mobile Communications) are all cellular network technologies with distinct characteristics. **GSM**, the most widely used cellular standard globally, provides higher data rates compared to **NB-IoT** and **Cat-M1** but has higher power consumption. In contrast, **Cat-M1** and **NB-IoT** are optimized for IoT applications. **Cat-M1** offers higher data rates and mobility, while **NB-IoT** provides ultra-low power consumption and extended coverage. The choice among **GSM**, **Cat-M1**, and **NB-IoT** depends on the specific requirements of the application, considering factors such as data rates, power consumption, and coverage area.

The following table describes the network operation modes that each module support:

| Modules / Network Modes   | Cat-M1 (LTE-M or eMTC) | NB-IoT | GSM/GRPS 2G |
|--------------------------|------------------------|--------|-------------|
| Quectel BG770A Cell Wing | ✔                  | ✔  | -        |
| Quectel BG95-M3          | ✔                  | ✔  | ✔       |
| Quectel M95              | -                   | -   | ✔       |

## Network configuration

Using Cellular Meadow, you don't need to understand the complexities of AT commands or invest time studying module datasheets to enable the cellular network interface.

You only need to create a **cell.config.yaml** file, where the cell settings will be defined, define the cell interface on the **meadow.config.yaml**, and reserve some pins used by the cell module.

Then, to configure your network you just need to follow these three steps:

1 - Create a **cell.config.yaml** and flash it to the device, here's an example:

```yaml
Settings:
    APN: virtueyes.com.br # Access Point Name
    Module: BG95-M3 # Module model (BG770A, BG95-M3 or M95)
    User: virtu # APN user (optional)
    Password: virtu # APN password (optional)
    Operator: 72410 # Carrier numeric operator code (optional)
    Mode: Cat-M1 # Network mode (Cat-M1, Nb-IoT or GSM)
```

***Notes**: It's recommended to define the carrier operator code, since it avoids the module network automatic selection, making the connection generally more reliable with the **Cat-M1** (**LTE-M** or **eMTC**) or **NB-IoT** modes.*

2 - Select `Cell` as `DefaultInterface` in the **meadow.config.yaml**, if you don't have this *yaml* file in your device, you should create and flash it to the device:

```yaml
Network:
    DefaultInterface: Cell
```

3 - Reserve the pins `I9` and `H13`, which are used to exchange data between the modem and the **F7 Feather v2**, and the `C7`, that is used to turn on the modules:

```yaml
Device:
    ReservedPins: I9;H13;C7
```

***Notes**: The pins `I9`, `H13` and `C7` are defined as `D00`, `D01` and `D10` on the F7 Feather v2, respectively.*

## Hardware configuration

### BG770A Cell Wing
To use the **BG770A Cell Wing with the F7 Feather v2**, you just need to attach them, connect an *LTE* antenna and insert a **M2M** SIM card to the cell module.

### BG95-M3
To use this module you will need to connect the **F7 Feather v2** `D00` and `D01` pins to the `TX` and `RX` module pins, respectively, to establish the data communication between then, and the **F7 Feather v2** `D10` pin to the `EN` **BG95-M3** pin, to turn on the module.

### M95
To use this module you will need to connect the **F7 Feather v2** `D00` and `D01` pins to the `TX` and `RX` module pins, respectively, to establish the data communication between then, and the **F7 Feather v2** `D10` pin to the `PWK` **M95** pin, to turn on the module.

***Notes**: It's necessary a **M2M** (Machine-to-Machine) SIM card to enable the **Cat-M1** (**LTE-M** or **eMTC**) or **NB-IoT** network modes, which is different than the ordinary models, that are usually used in cellphones. However, for **GSM/GRPS 2G** connection it's generally possible to use a standard SIM card.*

## Testing

To check if you established a connection, you can use the `meadow listen` CLI command, which should return a message like this:
`Connection established successfully! IP address '100.69.106.222'.`
