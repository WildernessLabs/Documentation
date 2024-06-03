---
layout: Meadow
title: Meadow Hardware
subtitle: Meadow System-on-Modules (SoM) boards for prototype and production.
---

The Meadow F7 is a workhorse Wi-Fi and Bluetooth enabled System-on-Module (SoM) microcontroller-based board designed for sophisticated IoT applications and is based on the STMicroelectronics STM32F7 microcontroller (MCU) with an Espressif ESP32 coprocessor.

![Photo of the Meadow F7 board.](/Common_Files/F7v2_Dev_Medium_Cropped.jpg)

The Meadow F7 is provisioned with Meadow.OS which runs full .NET Standard v2.1 applications and can be managed remotely via Meadow.Cloud with secure, over-the-air (OtA) updates, reliable push messaging, and device and application health monitoring over a Wi-Fi or ethernet (F7 Core-Compute model only) network.

## Meadow F7 Block Diagram

![Meadow F7 Block Diagram](meadowF7blockdiagram.png)

## Hardware Resources

* [F7v2 Hardware Designs GitHub Repo](https://github.com/WildernessLabs/Meadow_Hardware_Designs)
  * [Meadow F7v2 Feather Development Module v2.d STEP file](https://github.com/WildernessLabs/Meadow_Hardware_Designs/blob/main/Meadow_F7v2/Feather_Dev_Module/F7CoreComputeModuleV2a.step)
  * [Meadow F7v2 Core-Compute Module v2 STEP file](https://github.com/WildernessLabs/Meadow_Hardware_Designs/blob/main/Meadow_F7v2/Core-Compute_Module/F7CoreComputeModuleV2a.step)
* [Meadow EDA Symbols and Footprints Github Repo](https://github.com/WildernessLabs/Meadow_EDA_Parts)
* [Meadow Core-Compute Developer Module Repo](https://github.com/WildernessLabs/Meadow.Core-Compute.DevBreakouts)
* [Meadow Hardware Add-on Module Designs GitHub Repo](https://github.com/WildernessLabs/Hardware_Addon_Modules)

## Form-Factors

The Meadow F7v2 System-on-Module (SoM) is available in two models, based on two differing form factors:

* **Meadow F7v2 Feather Development Module** - An [Adafruit Feather specification](https://learn.adafruit.com/adafruit-feather/feather-specification) compatible design, intended for development, prototyping, and low-volume (1,000 or less) production.
* **Meadow F7v2 Core-Compute Module** -  A surface mount device (SMD) intended for high-volume and industrial production, the F7 Production also adds Ethernet and SD card capabilities.

![Rendering of the two F7v2 boards: left is the Meadow F7v2 Development Module with labeled pins for prototyping and development, right is the Core-Compute Module in a minimal rectangular footprint intended for surface mount use.](/Common_Files/Meadow_F7v2_Modules.png)

## F7v2 Features

* Fully Surface Mount Technology (SMT) compatible. Both modules can be used in SMD designs without the need for through-hole (PTH)  soldering.
* [STMicroelectronics STM32F7](https://www.st.com/en/microcontrollers-microprocessors/stm32f7-series.html) 32-bit ARM Cortex-M7 based core MCU at up to 216MHz
  * 2MB internal Flash memory
  * 412Kb internal RAM
  * 2D Graphics Acceleration (DMA2D) via ST Chrom-ART Accelerator
  * Internal, low-power realtime clock (RTC)
  * Cryptographic Hardware Acceleration for AES 128, 192, 256, triple DES, HASH (MD5, SHA-1, SHA-2), and HMAC
    * True random number generator
    * Floating point unit (FPU)
    * Secure Boot secure, encrypted firmware loader
* [Espressif ESP32](https://www.espressif.com/en/products/socs/esp32) (ESP-Pico-D4) Xtensa 32-bit dual-core LX6 up to 240MHz coprocessor.
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

## Power
### Meadow F7 Feather

The Meadow F7 Feather development board has onboard power features not present on the embedded version, including an LDA and battery charging circuit, and is designed such that it can be powered by supplying the appropriate voltage to either the USB connector, or the 5V or 3.3V power rails.

### LiPo, LiIon Battery Charging

Supplying voltage via either the USB connector or 5V rail is effectively the same; it will output 3.3V on the 3V3 power rail, and enable the battery charging circuit, which will charge any standard 3.7V LiPo/LiIon battery.

To use a battery, you can either hook it to the JST-PH battery connector, or wire it directly to the VBAT and GND pins on the header. Both Adafruit and SparkFun have a good selection of LiPo/LiIon batteries that will work.

![JST-PH Battery Connector](jst-phBatteryConnector.png)

The battery charging circuit will supply a battery with up to 200mA of current (at up to 4.2V).

If you supply voltage only to the 3.3V power rail, the board will operate as expected, but the battery charging circuit will not be enabled and the 5V power rail will only be at 3.3V.

#### Charge Status LED

When charging, the yellow charge status LED next to the JST-PH connector will light up.

### Meadow F7 Core-Compute

Unlike the Meadow F7 Feather, the F7 Core-Compute SoM doesn’t include onboard power regulation or battery charging circuit. It must be supplied with at least 500mA of available current on the 3V3 pin.

### Power Budget

The Meadow F7 and IOs are intended to operate on a combined maximum power budget of ~500mA with 400mA reserved for onboard functionality including both MCUs, RAM, and flash. This leaves, at a minimum, 100mA for peripherals, including anything drawing power from the IOs on the board.

#### Peripheral Usage

In addition to the overall power budget, the amount of power being delivered to peripherals via the IO pins must be considered. There is both an overall maximum that the MCU can drive, as well as a per pin maximum.

On the Meadow F7, there is a 25mA per IO maximum, and a total maximum of 120mA.

For additional information on supplying and using power on the Meadow F7 boards, including using solar panels, please refer to the [Power Guide](http://developer.wildernesslabs.co/Meadow/Meadow_Basics/IO/Power/).
