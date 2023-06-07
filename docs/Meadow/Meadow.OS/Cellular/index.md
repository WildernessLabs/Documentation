---
layout: Meadow
title: Cellular
subtitle: Connect Meadow to LTE/4G cellular signals
---

##  Cellular

The beta cellular network for the Meadow platform is compatible with various modules, each supporting different network operation modes. The following table describes the network operation modes supported by each module:

| Modules / Network Modes   | Cat-M1 (LTE-M or eMTC) | NB-IoT | GSM/GRPS 2G |
|--------------------------|------------------------|--------|-------------|
| Quectel BG770A Cell Wing | ✔                  | ✔  | -        |
| Quectel BG95-M3          | ✔                  | ✔  | ✔       |
| Quectel M95              | -                   | -   | ✔       |


**Cat-M1**, **NB-IoT**, and **GSM** (Global System for Mobile Communications) are all cellular network technologies with distinct characteristics. **GSM**, the most widely used cellular standard globally, provides higher data rates compared to **NB-IoT** and **Cat-M1** but has higher power consumption. In contrast, **Cat-M1** and **NB-IoT** are optimized for IoT applications. **Cat-M1** offers higher data rates and mobility, while **NB-IoT** provides ultra-low power consumption and extended coverage. The choice among **GSM**, **Cat-M1**, and **NB-IoT** depends on the specific requirements of the application, considering factors such as data rates, power consumption, and coverage area.


## Network configuration

Using Cellular Meadow, you don't need to understand the complexities of AT commands or invest time studying module datasheets to enable the cellular network interface.

You only need to create a **cell.config.yaml** file, where the cell settings will be defined, define the cell interface on the **meadow.config.yaml**, and reserve some pins used by the cell module.

Then, to configure your network you just need to follow these three steps:

1 - Create a **cell.config.yaml** and flash it to the device, here's an example:

```yaml
Settings:
    APN: virtueyes.com.br # Access Point Name
    Module: BG95M3 # Module model (BG770A, BG95M3 or M95)
    User: virtu # APN user (optional)
    Password: virtu # APN password (optional)
    Operator: 72410 # Carrier numeric operator code (optional)
    Mode: CATM1 # Network mode (CATM1, NBIOT or GSM) (optional)
```

> **Notes**: If the carrier numeric operator code (**Operator**) or the network mode is not specified (**Mode**), the module will attempt to automatically determine the optimal network based on the M2M sim card inserted and your location. However, if you encounter any connectivity issues, it is advisable to manually configure these settings.

2 - Select `Cell` as `DefaultInterface` in the **meadow.config.yaml**, if you don't have this *yaml* file in your device, you should create and flash it to the device:

```yaml
Network:
    DefaultInterface: Cell
```

3 - Reserve the pins `I9` and `H13`, which are used to exchange data between the modem and the **Meadow F7v2 Feather**, and the `C7`, which is used to turn on the modules:

```yaml
Device:
    ReservedPins: I9;H13;C7
```

> **Notes**: You can find the pins `I9`, `H13` and `C7` as `D00`, `D01` and `D10` on the **Meadow F7v2 Feather**, respectively.

## Hardware configuration

To set up the hardware, the easiest way is to use our **BG770A Cell Wing** by attaching it to the **Meadow F7v2 Feather**. This provides a straightforward and hassle-free solution for establishing cellular connectivity. However, you can also use other cell click board models. All you need to do is connect the click boards to the **Meadow F7v2 Feather** using a few jumpers. To set up the hardware, follow the instructions based on your cell click board model:

### Quectel BG770A - Meadow Cell Wing
To utilize the **BG770A Cell Wing** with the **Meadow F7v2 Feather**, simply attach them, connect an LTE antenna (Rubber ducky or Dome) with an SMA Plug connector, aiming for a preferred gain of 5 dBi (recommended) while ensuring a minimum gain of 2 dBi (required), and insert an **M2M** SIM card into the cell module.

### Quectel BG95-M3 - NimbeLink Skywire click board

To use this module you will need to connect the **Meadow F7v2 Feather** `D00` and `D01` pins to the `TX` and `RX` click board pins, respectively, to establish the data communication between them.

Also, you need to connect the **Meadow F7v2 Feather** `D10` pin to the `EN` **NimbeLink Skywire click board** pin. If you are using another click board for the **BG95-M3** module, you need to connect the `D10` pin to the equivalent power-up pin.

Finally, connect an LTE antenna (Rubber ducky or Dome) with an SMA Plug connector, aiming for a preferred gain of 5 dBi (recommended) while ensuring a minimum gain of 2 dBi (required), and insert an **M2M** SIM card into the cell module.

### Quectel M95 - GSM2 click board
To use this module you will need to connect the **Meadow F7v2 Feather** `D00` and `D01` pins to the `TX` and `RX` click board pins, respectively, to establish the data communication between them.

Also, you need to connect the **Meadow F7v2 Feather** `D10` pin to the `PWK` **Quectel GSM2 click board** pin, to turn on the module. If you are using another click board for the **M95** module, you need to connect the `D10` pin to the equivalent power-up pin.

Finally, establish a connection by attaching a GSM antenna (Rubber ducky) with an SMA Plug connector, aiming for a preferred gain of 5 dBi (recommended) while ensuring a minimum gain of 2 dBi (required), and insert a SIM card into the cell module.

> **Notes**: To enable **Cat-M1** (LTE-M or eMTC) or **NB-IoT** network modes, a specialized **M2M** (Machine-to-Machine) SIM card is required, distinct from the standard SIM cards used in cellphones. However, for **GSM/GPRS 2G** connections, a standard SIM card can generally be used.

## Testing

To check if you established a connection, you can use the `meadow listen` CLI command, which should return a message like this:
`Connection established successfully! IP address '100.69.106.222'.`
