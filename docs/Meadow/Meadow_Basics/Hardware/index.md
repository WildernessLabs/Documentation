---
layout: Meadow
title: Meadow Hardware
subtitle: Meadow System-on-Modules (SoM) boards for prototype and production.
---

The Meadow F7 is a workhorse Wi-Fi and Bluetooth enabled System-on-Module (SoM) microcontroller-based board designed for sophisticated IoT applications and is based on the STMicroelectronics STM32F7 microcontroller (MCU) with an Espressif ESP32 coprocessor.

![Photo of the Meadow F7 board.](/Common_Files/F7v2_Dev_Medium_Cropped.jpg)

The Meadow F7 is provisioned with Meadow.OS which runs full .NET Standard v2.1 applications and can be managed remotely via Meadow.Cloud with secure, over-the-air (OtA) updates, reliable push messaging, and device and application health monitoring over a Wi-Fi or ethernet (F7 Production model only) network.

## Form-Factors

The Meadow F7v2 System-on-Module (SoM) is available in two models, based on two differing form factors:

* **Meadow F7v2 Feather Development Module** - An Adafruit Feather specification compatible design, intended for development, prototyping, and low-volume (1,000 or less) production.
* **Meadow F7v2 Core-Compute Module** -  A surface mount device (SMD) intended for high-volume and industrial production, the F7 Production also adds Ethernet and SD card capabilities.

![Rendering of the two F7v2 boards: left is the Meadow F7v2 Development Module with labeled pins for prototyping and development, right is the Core-Compute Module in a minimal rectangular footprint intended for surface mount use.](/Common_Files/Meadow_F7v2_Modules.png)

## F7v2 Features

* Fully Surface Mount Technology (SMT) compatible. Both modules can be used in SMD designs without the need for through-hole (PTH)  soldering.
* STMicroelectronics STM32F7 32-bit ARM Cortex-M7 based core MCU at up to 216MHz
  * 2MB internal Flash memory
  * 412Kb internal RAM
  * 2D Graphics Acceleration (DMA2D) via ST Chrom-ART Accelerator
  * Internal, low-power realtime clock (RTC)
  * Cryptographic Hardware Acceleration for AES 128, 192, 256, triple DES, HASH (MD5, SHA-1, SHA-2), and HMAC
    * True random number generator
    * Floating point unit (FPU)
    * Secure Boot secure, encrypted firmware loader
* Espressif ESP32 (ESP-Pico-D4) Xtensa 32-bit dual-core LX6 up to 240MHz coprocessor.
  * 2.4GHz WiFi 802.11 b/g/n with WFA, WPA/WPA2 and WAPI
  * Bluetooth 4.2, 5.1
* 32MB external, onboard QSPI RAM
* 64MB external, onboard non-volatile Flash memory (60MB available for user code)
* 25 Mixed Signal IO ports (6/8x Analog, 12x PWM, 3x UART, I2C, SPI, CAN, 2x DAC)
* On-board 2.4GHz ceramic chip antenna
* U.FL external antenna connector
* RoHS compliant (lead and hazardous materials-free)

## Meadow F7v2 Feather Features

The Meadow F7 Feather models have additional onboard features designed to make developing and prototyping easier.

![Rendering of the top and bottom of the Meadow F7 Development Module showing all components on the top for surface mounting and the Meadow and Wilderness Labs logos screened on the bottom.](/Common_Files/Meadow_F7v2_Illustration.png)

* Reset and Boot buttons
* Onboard user-accessible RGB LED
* Micro USB 3.0 with USB On-the-Go (OTG)
* Integrated 3.7V LiPo/LiIon battery charging and JST-PH 2-pin battery connector
* Can be powered via standard USB, or 5V/3V3 rails
* Integrated switching power supply capable of providing 800mA when powered from USB or 5V rail
* SMT and PTH compatible

## Meadow F7v2 Core-Compute Features

The Meadow F7 Core-Compute model is designed to be an easy upgrade path to production volume solution, or for when Ethernet and an external SD card interface is required.

![Rendering of the Meadow F7 Core-Compute module in a minimal rectangular footprint intended for surface mount use.](/Common_Files/Meadow_F7v2_Core-Compute_Illustration.png)

* Ultra-small Surface Mount Device (SMD) form factor.
* External SD Card interface
* Dual-Port External Ethernet interface
