---
layout: Meadow
title: Meadow.Foundation Peripherals Library
subtitle: Drivers for hardware peripherals such as sensors, buttons, displays, and more!
---

The Meadow.Foundation peripherals library is an [open source](https://github.com/WildernessLabs/Meadow.Foundation) repository of drivers for various peripherals such as sensors, motors, displays, cameras, and other peripherals which make it easy to add hardware to your Meadow application.

The peripherals are split into two groups; the first group is general, core peripherals that are included in the main [Meadow.Foundation](https://www.nuget.org/packages/Meadow.Foundation) NuGet package. The second group are additional drivers that are available via separate NuGet packages to keep the core size to a minimum.

## Core Peripherals

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen" /> | [AnalogJoystick](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.AnalogJoystick.html) | A two axis analog joystick |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen" /> | [AnalogTemperature](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.AnalogTemperature.html) | Analog temperature sensor (TMP35 / TMP36 / TMP37 / LM35) |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen" /> | [AnalogWaterLevel](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.AnalogWaterLevel.html) | Analog water level sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen" /> | [DigitalTachometer](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.HallEffect.LinearHallEffectTachometer.html) | Hall Effect Linear Tachometer sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen" /> | [DipSwitch](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Switches.DipSwitch.html)  | A multi-pole dip switch |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen" /> | [HBridgeMotor](/docs/api/Meadow.Foundation/Meadow.Foundation.Motors.HBridgeMotor.html) | Generic h-bridge motor controller |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen" /> | [Led](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.Led.html) | Simple LED |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen" /> | [LedBarGraph](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.LedBarGraph.html) | Segmented LED bar |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen" /> | [PiezoSpeaker](/docs/api/Meadow.Foundation/Meadow.Foundation.Audio.PiezoSpeaker.html) | A piezo-electric speaker capable of generating tones via PWM |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen" /> | [PushButton](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Buttons.PushButton.html) | Momentary button |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen" /> | [PwmLed](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.PwmLed.html) | Pulse-Width-Modulation powered LED |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen" /> | [PwmLedBarGraph](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.PwmLedBarGraph.html) | Pulse-Width-Modulation powered segmented LED bar |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen" /> | [Relay](/docs/api/Meadow.Foundation/Meadow.Foundation.Relays.Relay.html) | Electrically isolated switch |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen" /> | [RgbLed](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.RgbLed.html) | Simple RGB LED |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen" /> | [RgbPwmLed](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.RgbPwmLed.html) | Pulse-Width-Modulation powered RGB LED |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen" /> | [RotaryEncoder](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Rotary.RotaryEncoder.html) | A simple rotary encoder |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen" /> | [RotaryEncoderWithButton](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Rotary.RotaryEncoderWithButton.html) | A rotary encoder that includes a push button |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen" /> | [SpdtSwitch](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Switches.SpdtSwitch.html) | A simple single-pole, dual-throw (SPDT) switch |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen" /> | [SpstSwitch](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Switches.SpstSwitch.html) | A simple single-pole, single-throw (SPST) switch |

## Libraries and Frameworks

## DataLoggers

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [DataLoggers.AdafruitIO](/docs/api/Meadow.Foundation/Meadow.Foundation.DataLoggers.AdafruitIO.html) | Driver for the Adafruit IO data logging system |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [DataLoggers.SensorReading](/docs/api/Meadow.Foundation/Meadow.Foundation.DataLoggers.SensorReading.html) | SensorReading class for Meadow Foundation data loggers |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [DataLoggers.ThingSpeak](/docs/api/Meadow.Foundation/Meadow.Foundation.DataLoggers.ThingSpeak.html) | Driver for the ThingSpeak data logging system |

## Displays

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.MicroGraphics](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.MicroGraphics.html) | Lightweight integer accurate 2d graphics drawing system designed for embedded systems |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.TextDisplayMenu](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.TextDisplayMenu.html) | Text based stack navigation and editor for pixel and character displays |

## Location

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Location.Gnss.NmeaProcessor](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Location.Gnss.NmeaProcessor.html) | GNSS NMEA parsing library |

## Web

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Web.Maple.Client](/docs/api/Meadow.Foundation/Meadow.Foundation.Web.Maple.Client.html) | Maple is an ultra-lightweight RESTful web API Server, built specifically for Meadow. It provides an easy to extend architecture, and has integrated JSON support via System.Text.Json. |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Web.Maple.Server](/docs/api/Meadow.Foundation/Meadow.Foundation.Web.Maple.Server.html) | Maple is an ultra-lightweight RESTful web API Server, built specifically for Meadow. It provides an easy to extend architecture, and has integrated JSON support via System.Text.Json. |

## External Peripherals

External peripheral drivers can be added to Meadow projects individually and are distributed as nuget packages on [Nuget.org](www.nuget.org).

## Audio

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Audio.Mp3.Yx5300](/docs/api/Meadow.Foundation/Meadow.Foundation.Audio.Mp3.Yx5300.html) | YX5300 serial MP3 player |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Audio.Radio.Tea5767](/docs/api/Meadow.Foundation/Meadow.Foundation.Audio.Radio.Tea5767.html) | TEA5767 I2C FM radio module |

## Displays

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.ePaper](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.ePaper.html) | SPI eInk / ePaper display controllers (IL0373, IL0376F, IL0398, IL3897, IL91874, ILI91874v3, SSD1608) |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Lcd.CharacterDisplay](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Lcd.CharacterDisplay.html) | Digital and I2C LCD character displays |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Led.FourDigitSevenSegment](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Led.FourDigitSevenSegment.html) | Digtial Four digit seven segment displays |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Led.SevenSegment](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Led.SevenSegment.html) | Ditigal Seven segment displays |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Max7219](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Max7219.html) | MAX7219 SPI LED driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Pcd8544](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Pcd8544.html) | PCD8544 SPI monochrome display (Nokia 5110) |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Ssd130x](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ssd130x.html) | SSD1306 / SSD1309 SPI and I2C OLED monochrome displays |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Ssd1327](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ssd1327.html) | SSD1327 SPI OLED 4bpp greyscale display |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.St7565](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.St7565.html) | ST7565 SPI color display |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.TftSpi](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.TftSpi.html) | SPI Color TFT and OLED displays (GC9A01, HC8357B, HX8357D, ILI9163, ILI9341, ILI9481, ILI9488, RM68140, S6D02A1, SSD1331, SSD1351, ST7735, ST7789) |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Tm1637](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tm1637.html) | TM1637 digital character display |

### Displays.ePaper

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [IL0373](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.ePaper.Il0373.html) | ePaper driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [IL0376F](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.ePaper.Il0376F.html) | ePaper driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [IL0398](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.ePaper.Il0398.html) | ePaper driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [IL3897](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.ePaper.Il3897.html) | ePaper driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [IL91874](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.ePaper.Il91874.html) | ePaper driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [IL91874V03](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.ePaper.Il91874V03.html) | ePaper driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [SSD1608](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.ePaper.Ssd1608.html) | ePaper driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [SSD1681](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.ePaper.Ssd1681.html) | ePaper driver |

### Displays.Ssd130x

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ssd1306](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ssd1306.html) | Ssd130x driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ssd1309](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ssd1309.html) | Ssd130x driver |

### Displays.TftSpi

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Gc9a01](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.TftSpi.Gc9a01.html) | TftSpi driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Hx8357b](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.TftSpi.Hx8357b.html) | TftSpi driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Hx8357d](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.TftSpi.Hx8357d.html) | TftSpi driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ili9163](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.TftSpi.Ili9163.html) | TftSpi driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ili9341](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.TftSpi.Ili9341.html) | TftSpi driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ili9481](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.TftSpi.Ili9481.html) | TftSpi driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ili9486](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.TftSpi.Ili9486.html) | TftSpi driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ili9488](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.TftSpi.Ili9488.html) | TftSpi driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Rm68140](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.TftSpi.Rm68140.html) | TftSpi driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [S6D02A1](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.TftSpi.S6D02A1.html) | TftSpi driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ssd1331](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.TftSpi.Ssd1331.html) | TftSpi driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ssd1351](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.TftSpi.Ssd1351.html) | TftSpi driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [St7735](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.TftSpi.St7735.html) | TftSpi driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [St7789](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.TftSpi.St7789.html) | TftSpi driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [St7796s](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.TftSpi.St7796s.html) | TftSpi driver |

## ICs

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.ADC.Ads1x15](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.ADC.Ads1x15.html) | TI ADS1x15 I2C analog to digital converters (ADS1015 / ADS1115) |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.EEPROM.At24Cxx](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.EEPROM.At24Cxx.html) | At24Cxx I2C EEPROMs (AT24C32 / AT24C64 / AT24C128 / AT24C256) |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.Ds3502](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Ds3502.html) | Ds3502 I2C digital potentiometer |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.Ht16k33](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Ht16k33.html) | HT16K33 I2C IO expander, led driver, and character display controller |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.Is31fl3731](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Is31fl3731.html) | IS31FL3731 I2C matrix led driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.Mcp23x08](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp23x08.html) | Mcp23x08 I2C digital output expander |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.Pca9685](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Pca9685.html) | PCA9685 I2C PWM expander |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.Tca9548a](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Tca9548a.html) | TCA9548A I2C IO expander |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.x74595](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.x74595.html) | x74595 I2C shift register digital output expander |

## Leds

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Leds.Apa102](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.Apa102.html) | Apa102 SPI RGB LED driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Leds.Pca9633](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.Pca9633.html) | Pca9633 I2C RGB LED driver |

## Motors

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Motors.ElectronicSpeedController](/docs/api/Meadow.Foundation/Meadow.Foundation.Motors.ElectronicSpeedController.html) | PWM Electronic speed controller |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Motors.Stepper.A4988](/docs/api/Meadow.Foundation/Meadow.Foundation.Motors.Stepper.A4988.html) | A4988 digital input stepper motor controller |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Motors.Stepper.Uln2003](/docs/api/Meadow.Foundation/Meadow.Foundation.Motors.Stepper.Uln2003.html) | ULN2003 digital input stepper motor controller |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Motors.Tb67h420ftg](/docs/api/Meadow.Foundation/Meadow.Foundation.Motors.Tb67h420ftg.html) | Tb67h420ftg digital input motor controller |

## RTCs

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [RTCs.Ds1307](/docs/api/Meadow.Foundation/Meadow.Foundation.RTCs.Ds1307.html) | DS1307 I2C real time clock |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [RTCs.Ds323x](/docs/api/Meadow.Foundation/Meadow.Foundation.RTCs.Ds323x.html) | Ds323x I2C real time clock (DS3231) |

## Atmospheric

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.AdafruitMPRLS](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.AdafruitMPRLS.html) | Adafruit MPRLS I2C barometric pressure sensor with metal port connector |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Bme280](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Bme280.html) | Bosch BME280 SPI and I2C absolute barometric pressure sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Bme68x](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Bme68x.html) | Bosch BME68x I2C humidity, barometric pressure, ambient temperature and gas (VOC) sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Bmp085](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Bmp085.html) | Bosch BMP085 I2C barometric pressure sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Bmp180](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Bmp180.html) | BMP180 I2C barometric pressure, temperature, and altitude sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Ccs811](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Ccs811.html) | Ccs811 I2C VOC Air Quality Sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Dhtxx](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Dhtxx.html) | DHTxx I2C temperature and humidity sensors (DHT10, DHT12) |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Hih6130](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Hih6130.html) | HIH6130 I2C temperature and humidity sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Htux1d](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Htux1d.html) | HTU21D(F) and HTU31D I2C temperature and humidity sensors |
| <img alt="Status indicator: In-progress" src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Atmospheric.Mpl115a2](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Mpl115a2.html) | MPL115A2 I2C barometric pressure and temperature sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Mpl3115a2](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Mpl3115a2.html) | MPL3115A2 I2C barometric pressure, temperature, and altitude sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Ms5611](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Ms5611.html) | MS5611 SPI and I2C altimeter and barometric pressure sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Sht31D](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Sht31D.html) | SHT31-D temperature and humidity sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Sht4x](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Sht4x.html) | SHT40, SHT41, SHT45 etc. I2C temperature and humidity sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Si70xx](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Si70xx.html) | Si70xx I2C humidity and temperature sensors |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Th02](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Th02.html) | Th02 I2C Relative Humidity and temperature sensor |

### Sensors.Atmospheric.Dhtxx

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [DhtBase](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.DhtBase.html) | DhtBase driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Dht10](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Dht10.html) | Dht10 driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Dht12](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Dht12.html) | Dht12 driver |

### Sensors.Atmospheric.Htux1d

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | Htu21d | Htu21d driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | Htu31d | Htu31d driver |

## Camera

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: In-progress" src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Camera.ArducamMini](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Camera.ArducamMini.html) | ArducamMini I2C + SPI high definition 2MP camera controller |
| <img alt="Status indicator: In-progress" src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Camera.Mlx90640](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Camera.Mlx90640.html) | Mlx90640 I2C far infrared thermal sensor array camera |
| <img alt="Status indicator: In-progress" src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Camera.Vc0706](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Camera.Vc0706.html) | VC0706 serial VGA CMOS camera |

## Distance

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: In-progress" src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Distance.Gp2d12](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.Gp2d12.html) | Sharp GP2D12 analog distance sensor with integrated signal processing |
| <img alt="Status indicator: In-progress" src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Distance.Hcsr04](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.Hcsr04.html) | HCSR04 digital ultrasonic distance sensor |
| <img alt="Status indicator: In-progress" src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Distance.Hysrf05](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.Hysrf05.html) | HYSRF05 digital ultrasonic distance sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Distance.MaxBotix](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.MaxBotix.html) | MaxBotix I2C, analog and serial ultrasonic distance sensors |
| <img alt="Status indicator: In-progress" src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Distance.Mb10x0](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.Mb10x0.html) | MaxSonar MB10x0 serial ultrasonic distance sensor |
| <img alt="Status indicator: In-progress" src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Distance.Sfsr02](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.Sfsr02.html) | SFSR02 digital ultrasonic distance sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Distance.Vl53l0x](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.Vl53l0x.html) | Vl53l0x I2C time of flight ranging distance sensor |

## Environmental

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Environmental.Ags01Db](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.Ags01Db.html) | Ags01Db I2C digital MEMS VOC gas sensor |

## Gnss

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Gnss.Mt3339](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Gnss.Mt3339.html) | MediaTek MT3339 serial GNSS / GPS controller |

## Hid

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Hid.As5013](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.As5013.html) | I2C Hall sensor IC for smart navigation |
| <img alt="Status indicator: In-progress" src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Hid.Bbq10Keyboard](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.Bbq10Keyboard.html) | BB Q10 I2C Keyboard |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Hid.Mpr121](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.Mpr121.html) | Freescale Semiconductor MPR121 I2C capacitive keypad controller |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Hid.Tsc2004](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.Tsc2004.html) | Tsc2004 I2C capacitive touch screen |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Hid.WiiExtensionControllers](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.WiiExtensionControllers.html) | Nintendo Wii I2C extension controllers (nunchuck, classic controller, snes classic controller, nes classic controller) |

### Sensors.Hid.WiiExtensionControllers

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | NesClassicController | NesClassicController driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | SnesClassicController | SnesClassicController driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | WiiClassicController | WiiClassicController driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | WiiClassicControllerPro | WiiClassicControllerPro driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | WiiNunchuck | WiiNunchuck driver |

## Light

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Alspt19315C](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Alspt19315C.html) | ALS-PT19-315C analog light sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.AnalogSolarIntensityGauge](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.AnalogSolarIntensityGauge.html) | Analog solar intensity sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Bh1745](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Bh1745.html) | Bh1745 I2C luminance and color light sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Bh1750](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Bh1750.html) | Bh1750 I2C luminance and color light sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Max44009](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Max44009.html) | Max44009 I2C ultraviolet and ambient light sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Si1145](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Si1145.html) | SI1145 I2C ultraviolet and ambient light sensor |
| <img alt="Status indicator: In-progress" src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Light.Tcs3472x](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Tcs3472x.html) | Tcs3472x I2C ambient light and color sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Temt6000](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Temt6000.html) | Temt6000 analog ambient light sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Tsl2591](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Tsl2591.html) | Tsl2591 I2C high dynamic range light sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Veml7700](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Veml7700.html) | Veml7700 I2C high accuracy ambient light sensor |

## LoadCell

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.LoadCell.Hx711](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.LoadCell.Hx711.html) | Hx711 digital load cell amplifier |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.LoadCell.Nau7802](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.LoadCell.Nau7802.html) | NAU7802 I2C 24-Bit dual channel analog to digital converter |

## Moisture

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Moisture.Capacitive](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Moisture.Capacitive.html) | Analog capacitive soil moisture sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Moisture.Fc28](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Moisture.Fc28.html) | FC28 analog soil moisture sensor |

## Motion

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Adxl3xx](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl3xx.html) | ADXL3xx Analog and I2C 3-axis accelerometers (ADXL335, ADXL345, ADXL337, ADXL362, ADXL377) |
| <img alt="Status indicator: In-progress" src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Motion.Apds9960](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Apds9960.html) | APDS9960 I2C proximity, light, color and gesture sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Bno055](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Bno055.html) | Bosch BNO055 9 axis absolute orientation sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Hcsens0040](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Hcsens0040.html) | HCSENS0040 digital microwave motion sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Hmc5883](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Hmc5883.html) | Hmc5883 / Qmc5883 I2C digital compass |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Mag3110](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Mag3110.html) | Freescale MAG3110 I2C 3 axis magnetometer |
| <img alt="Status indicator: In-progress" src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Motion.Mma7660fc](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Mma7660fc.html) | Mma7660fc I2C 3-axis accelerometer |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Mpu6050](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Mpu6050.html) | Mpu6050 I2C MEMS 3 axis gyroscope accelerometer motion sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.ParallaxPir](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.ParallaxPir.html) | Parallax PIR analog motion sensor |

### Sensors.Motion.Adxl3xx

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Adxl335](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl3xx.Adxl335.html) | ADXL335 analog 3 axis accelerometer motion sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Adxl337](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl3xx.Adxl337.html) | ADXL337 analog 3 axis accelerometer motion sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Adxl345](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl3xx.Adxl345.html) | ADXL345 I2C 3 axis accelerometer motion sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Adxl362](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl3xx.Adxl362.html) | ADXL362 SPI 3 axis accelerometer motion sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Adxl377](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl3xx.Adxl377.html) | ADXL377 analog 3 axis accelerometer motion sensor |

## Power

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Power.Ina260](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Power.Ina260.html) | INA260 I2C current and power monitor |

## Radio

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Radio.Rfid.IDxxLA](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Radio.Rfid.IDxxLA.html) | IDxxLA Serial radio frequency ID readers |
| <img alt="Status indicator: In-progress" src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Radio.Rfid.Rc522](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Radio.Rfid.Rc522.html) | Rc522 I2C radio frequency ID reader |

## Sound

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Sound.Ky038](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Sound.Ky038.html) | KY-038 analog sound sensor |

## Temperature

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: In-progress" src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Temperature.Ds18B20](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Ds18B20.html) | DS18B20 1-Wire temperature sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Temperature.Lm75](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Lm75.html) | Lm75 I2C temperature sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Temperature.Mcp9808](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Mcp9808.html) | MCP9808 I2C temperature sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Temperature.Tmp102](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Tmp102.html) | TMP102 I2C temperature sensor |

## Weather

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Weather.SwitchingAnemometer](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Weather.SwitchingAnemometer.html) | Digital Switching Anemometer wind speed sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Weather.SwitchingRainGauge](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Weather.SwitchingRainGauge.html) | GPIO rain gauge sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Weather.WindVane](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Weather.WindVane.html) | Driver for wind vanes that outputs variable voltage, based on the azimuth of the wind. |

## Servos

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Servos.ServoCore](/docs/api/Meadow.Foundation/Meadow.Foundation.Servos.ServoCore.html) | PWM generic servo controller |

## Transceivers

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: In-progress" src="https://img.shields.io/badge/InProgress-yellow"/> | [Transceivers.Nrf24l01](/docs/api/Meadow.Foundation/Meadow.Foundation.Transceivers.Nrf24l01.html) | Nrf24l01 SPI radio transceiver |
| <img alt="Status indicator: In-progress" src="https://img.shields.io/badge/InProgress-yellow"/> | [Transceivers.SX127x](/docs/api/Meadow.Foundation/Meadow.Foundation.Transceivers.SX127x.html) | SX127x SPI LoRa transceiver |

## Seeed Studio Grove

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Audio.Buzzer](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.Audio.Buzzer.html) | Grove PWM Buzzer |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Audio.Speaker](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.Audio.Speaker.html) | Grove PWM Speaker |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Displays.4DigitDisplay](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.Displays.4DigitDisplay.html) | Grove GPIO 4 digit display |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Displays.LCD](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.Displays.LCD.html) | Grove I2C LCD display |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.HID.VibrationMotor](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.HID.VibrationMotor.html) | Grove GPIO vibration motor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Leds.LEDSocket](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.Leds.LEDSocket.html) | Grove GPIO led |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Relays.Relay](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.Relays.Relay.html) | Grove Relay driver |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.RTCs.RTC](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.RTCs.RTC.html) | Grove I2C real time clock (DS1307) |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Atmospheric.TemperatureHumiditySensor_HighAccuracyMini](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.Sensors.Atmospheric.TemperatureHumiditySensor_HighAccuracyMini.html) | Grove I2C Temperature and Humidity sensor - High Accuracy and Mini (TH02) |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Buttons.Button](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.Sensors.Buttons.Button.html) | Grove GPIO momentary push button |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Buttons.LEDButton](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.Sensors.Buttons.LEDButton.html) | Grove GPIO momentary push button with LED (blue, red, or yellow) |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Buttons.Touch](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.Sensors.Buttons.Touch.html) | Grove GPIO capacitive touch button |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Environmental.FlameSensor](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.Sensors.Environmental.FlameSensor.html) | Grove GPIO flame sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Environmental.WaterSensor](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.Sensors.Environmental.WaterSensor.html) | Grove Analog water level sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Hid.ThumbJoystick](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.Sensors.Hid.ThumbJoystick.html) | Grove analog 2-axis ThumbJoystick |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Light.LightSensor](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.Sensors.Light.LightSensor.html) | Grove light sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Light.LineFinder](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.Sensors.Light.LineFinder.html) | Grove line finder sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Moisture.MoistureSensor](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.Sensors.Moisture.MoistureSensor.html) | Grove analog moisture sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Motion.3-AxisDigitalAccelerometer_16g](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.Sensors.Motion.3-AxisDigitalAccelerometer_16g.html) | Grove I2C 3-Axis digital accelerometer |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Motion.3-AxisDigitalAccelerometer1_5g](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.Sensors.Motion.3-AxisDigitalAccelerometer1_5g.html) | Grove I2C 3-Axis digital accelerometer |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Motion.3-AxisDigitalCompass](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.Sensors.Motion.3-AxisDigitalCompass.html) | Grove I2C 3-axis digital compass |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Motion.MiniPIRMotionSensor](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.Sensors.Motion.MiniPIRMotionSensor.html) | Grove GPIO MiniPIRMotionSensor (Parallax PIR) |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Motion.PIRMotionSensor](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.Sensors.Motion.PIRMotionSensor.html) | Grove GPIO PIRMotionSensor (Parallax PIR) |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Motion.VibrationSensor](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.Sensors.Motion.VibrationSensor.html) | Grove GPIO vibration sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Rotary.RotaryAngleSensor](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.Sensors.Rotary.RotaryAngleSensor.html) | Grove rotary angle sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Sound.LoudnessSensor](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.Sensors.Sound.LoudnessSensor.html) | Grove loudness sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Sound.SoundSensor](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.Sensors.Sound.SoundSensor.html) | Grove sound sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Switches.MagneticSwitch](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.Sensors.Switches.MagneticSwitch.html) | Grove GPIO magetic reed switch sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Switches.SwitchP](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.Sensors.Switches.SwitchP.html) | Grove GPIO single pole dual throw slide switch |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Switches.Tilt](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.Sensors.Switches.Tilt.html) | Grove GPIO tilt switch |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Temperature.TemperatureSensor](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.Sensors.Temperature.TemperatureSensor.html) | Grove temperature sensor |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Servos.Servo](/docs/api/Meadow.Foundation/Meadow.Foundation.Grove.Servos.Servo.html) | Grove PWM servo motor |

## FeatherWings

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.CharlieWing](/docs/api/Meadow.Foundation/Meadow.Foundation.FeatherWings.CharlieWing.html) | AdaFruit CharlieWing Matrix LED FeatherWing |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.DotstarWing](/docs/api/Meadow.Foundation/Meadow.Foundation.FeatherWings.DotstarWing.html) | AdaFruit DotstarWing LED FeatherWing |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.GPSWing](/docs/api/Meadow.Foundation/Meadow.Foundation.FeatherWings.GPSWing.html) | AdaFruit GPSWing GPS FeatherWing |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.KeyboardWing](/docs/api/Meadow.Foundation/Meadow.Foundation.FeatherWings.KeyboardWing.html) | BBQ 10 Keyboard FeatherWing |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.LedMatrix8x16Wing](/docs/api/Meadow.Foundation/Meadow.Foundation.FeatherWings.LedMatrix8x16Wing.html) | AdaFruit HT16K33 8x16 Matrix LED FeatherWing |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.MotorWing](/docs/api/Meadow.Foundation/Meadow.Foundation.FeatherWings.MotorWing.html) | AdaFruit MotorWing motor controller FeatherWing |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.OLED128x32Wing](/docs/api/Meadow.Foundation/Meadow.Foundation.FeatherWings.OLED128x32Wing.html) | AdaFruit OLED 128x32 monochrome display FeatherWing |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.ServoWing](/docs/api/Meadow.Foundation/Meadow.Foundation.FeatherWings.ServoWing.html) | AdaFruit ServoWing servo controller FeatherWing |

## mikroBUS

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [mikroBUS.Displays.C16x9](/docs/api/Meadow.Foundation/Meadow.Foundation.mikroBUS.Displays.C16x9.html) | MikroElectronika I2C 16x9 Click LED board |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [mikroBUS.Displays.C8x8](/docs/api/Meadow.Foundation/Meadow.Foundation.mikroBUS.Displays.C8x8.html) | MikroElectronika SPI 8x8 Click LED board |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [mikroBUS.Sensors.Atmospheric.CTempHum15](/docs/api/Meadow.Foundation/Meadow.Foundation.mikroBUS.Sensors.Atmospheric.CTempHum15.html) | MikroElectronika I2C Temp and Hum 15 temperature and humidity click board |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [mikroBUS.Sensors.Buttons.CButton](/docs/api/Meadow.Foundation/Meadow.Foundation.mikroBUS.Sensors.Buttons.CButton.html) | MikroElectronika PWM GPIO Led Button MikroBus click board |
| <img alt="Status indicator: Working" src="https://img.shields.io/badge/Working-brightgreen"/> | [mikroBUS.Sensors.Hid.CJoystick](/docs/api/Meadow.Foundation/Meadow.Foundation.mikroBUS.Sensors.Hid.CJoystick.html) | MikroElectronika I2C Joystick MikroBus click board |
