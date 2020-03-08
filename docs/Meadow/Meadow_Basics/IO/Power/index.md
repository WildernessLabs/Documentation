---
layout: Meadow
title: Power
subtitle: Understanding power IO and stuffs.
---

## Powering the Meadow F7 Micro

The Meadow F7 Micro development board is designed such that it can be powered by supplying the appropriate voltage to either the `USB` connector, or the `5V` or `3.3V` power rails. 

### Battery Charging Circuit

Supplying voltage via either the `USB` connector or `5V` rail is effectively the same, and will output `3.3V` on the `3V3` power rail, as well as enable the battery charging circuit, which will charge any standard `3.7V` LiPo/LiIon battery.

To use a battery, you can either hook it to the JST-PH battery connector, or wire it directly to the `VBAT` and `GND` pins on the header. Both [Adafruit](https://www.adafruit.com/category/916) and [SparkFun](https://www.sparkfun.com/categories/54) have a good selection of LiPo/LiIon batteries that will work.

The battery charging circuit will supply a battery with up to `200mA` of current (at up to `4.2V`).

If you supply voltage only to the `3.3V` power rail, the board will operate as expected, but the battery charging circuit will not be enabled and the `5V` power rail will only be at `3.3V`.

### Power Budget

When powered by either `USB` connector or the `5V` rail, the amount of combined `3.3V` current available onboard (including the `3V3` power rail, MCUs, and IO peripherals) is limited is known as the _power budget_. 

When powered via the `USB` connector, the budget is limited only by the `3.3V` power regulator, which is good for `800mA` of output. However, on revision `1.c` of the board, it's limited by a diode that has a `500mA` maximum power throughput:

| Revision | Power Input | Budget  |
|----------|-------------|---------|
| `1.c`    | `USB`       | `800mA` | 
| `1.c`    | `5V`        | `500mA` |
| `1.d`    | `USB`       | `800mA` |
| `1.d`    | `5V`        | `800mA` |

However, in practice, a typical USB port is only rated to deliver `500mA` of power. Some USB charging adapters will deliver much more than this, however.

You can manually upgrade a `v1.c` board to handle `800mA` of current via the `5V` rail by swapping out a diode. [guide coming soon]

#### Nominal Power Usage

You should generally reserve up to `400mA` of the power budget for onbaord functionality including both MCUs, RAM, and flash. This leaves, at a minimum, `100mA` for peripherals, including anything drawing power from the IOs on the board.

##### Battery Charger Usage

The battery charging circuit is hooked directly to the `USB` power rail, and to the `5V` rail via a diode. Meaning that when power input comes from the `USB` connector, up to `200mA` of current should be subtracted from the USB power budget, rather than the board power budget. So for instance, if the `USB` connector is hooked to a USB power supply that can supply `1A` of power, then the board still has `800mA` available. However, is power input comes from the `5V` rail, then the charging current comes from the diode limit; either `500mA` for revision `1.c` or `800mA` for `1.d`.

## Solar + Battery Power

The board can be adequately powered by only a solar panel that outputs a minimum of `500mA` at `6V`, but it's best to pair a battery with the solar panel in order to provide backup power when solar power is not available.

## Real-Time Clock (RTC)

The STM32F7 is equipped with a real-time clock (RTC), which, when set, will retain the system time as long as the the board has power. If the board will have intermittent power, as when powered by a solar panel, having a battery hooked up to the board will ensure the RTC will not lose the time.

## Hardware Pins

![](/Common_Files/Meadow_F7_Micro_Pinout.svg)

### Reset (`RST`)

[pull this pin low momentarily and it will reset the board.]

[if `3V3` rail has power, either from powering the `5V` rail, or having an attached battery, will not reset the RTC on the MCU]

### `3V3` Power Rail (`3V3`)

### Analog Reference (`AREF`)

[we automatically connect to 3v3

if you apply a voltage on AREF this you will need to make a small modification to the board to remove the 3.3V we supply from the AREF pin.]

### Ground (`GND`)

### Battery (`BAT`)

### Enable (`EN`)

[Pulling low will power down the MCU (but if you have `BAT` hooked up, it'll keep the RTC]

### `5V` Power Rail (`5V`)

## Adding Power to External Peripherals

