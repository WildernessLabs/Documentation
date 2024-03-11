---
layout: Meadow
title: Cellular
subtitle: Connect Meadow to LTE/4G cellular signals
---

Meadow offers support for several cellular modules, with straightforward APIs for setup that allow them to be used like any other network interface. With Meadow's cellular support, you can now deploy Meadow nearly anywhere in the field.

## Cellular Network Technologies

**Cat-M1**, **NB-IoT**, and **GSM** (Global System for Mobile Communications) are all cellular network technologies with distinct characteristics. **GSM**, the most widely used cellular standard globally, provides higher data rates compared to **NB-IoT** and **Cat-M1** but has higher power consumption. In contrast, **Cat-M1** and **NB-IoT** are optimized for IoT applications. **Cat-M1** offers higher data rates and mobility, while **NB-IoT** provides ultra-low power consumption and extended coverage. The choice among **GSM**, **Cat-M1**, and **NB-IoT** depends on the specific requirements of the application, considering factors such as data rates, power consumption, and coverage area.

# Supported Cellular Modules

The cellular network for the Meadow platform is compatible with various modules, each supporting different network operation modes. The following table describes the network operation modes supported by each module:

| Modules / Network Modes   | Cat-M1 (LTE-M or eMTC) | NB-IoT | GSM/GRPS 2G | GNSS   |
|---------------------------|------------------------|--------|-------------|--------|
| Quectel BG95-M3           | ✔                     | ✔      | ✔           | ✔      |
| Quectel M95               | -                      | -      | ✔           | -      |

## Next steps

After you decide which module to use, you can proceed to [configure your cellular provider and connection](/Meadow/Meadow.OS/Cellular/Configuration), and then [start developing your cellular application](/Meadow/Meadow.OS/Cellular/Develop_Cellular_Apps).

If your cellular module supports it, you can also do GNSS positioning with the cellular module. Check out the [GNSS with Cellular](/Meadow/Meadow.OS/Cellular/Cellular_GNSS) guide for more information.

If you have trouble connecting to your cellular network, check out the [Troubleshooting](/Meadow/Meadow.OS/Cellular/Troubleshooting) guide for some tips on how to scan for available networks and check the cellular network connection logs.
