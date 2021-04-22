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
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [AnalogJoystick](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.AnalogJoystick.html) | A two axis analog joystick |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [AnalogTemperature](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.AnalogTemperature.html) | Analog temperature sensor (TMP35 / TMP36 / TMP37 / LM35) |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [AnalogWaterLevel](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.AnalogWaterLevel.html) | Analog water level sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [DigitalTachometer](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.HallEffect.LinearHallEffectTachometer.html) | Hall Effect Linear Tachometer sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [DipSwitch](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Switches.DipSwitch.html)  | A multi-pole dip switch |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [HBridgeMotor](/docs/api/Meadow.Foundation/Meadow.Foundation.Motors.HBridgeMotor.html) | Generic h-bridge motor controller |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [Led](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.Led.html) | Simple LED |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [LedBarGraph](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.LedBarGraph.html) | Segmented LED bar |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [PiezoSpeaker](/docs/api/Meadow.Foundation/Meadow.Foundation.Audio.PiezoSpeaker.html) | A piezo-electric speaker capable of generating tones via PWM |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [PushButton](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Buttons.PushButton.html) | Momentary button |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [PwmLed](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.PwmLed.html) | Pulse-Width-Modulation powered LED |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [PwmLedBarGraph](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.PwmLedBarGraph.html) | Pulse-Width-Modulation powered segmented LED bar |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [Relay](/docs/api/Meadow.Foundation/Meadow.Foundation.Relays.Relay.html) | Electrically isolated switch |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [RgbLed](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.RgbLed.html) | Simple RGB LED |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [RgbPwmLed](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.RgbPwmLed.html) | Pulse-Width-Modulation powered RGB LED |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [RotaryEncoder](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Rotary.RotaryEncoder.html) | A simple rotary encoder |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [RotaryEncoderWithButton](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Rotary.RotaryEncoderWithButton.html) | A rotary encoder that includes a push button |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [SpdtSwitch](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Switches.SpdtSwitch.html) | A simple single-pole, dual-throw (SPDT) switch |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [SpstSwitch](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Switches.SpstSwitch.html) | A simple single-pole, single-throw (SPST) switch |

## Libraries and Frameworks

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [NMEA](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Location.Gnss.NmeaParsing.NmeaSentenceProcessor.html) | Generic GPS sentence decoder library |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [GraphicsLibrary](/docs/api/Meadow.Foundation/Meadow.Foundation.Graphics.GraphicsLibrary.html) | General purpose graphics library |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [Maple Server](/docs/api/Meadow.Foundation/Meadow.Foundation.Web.Maple.Server.html) | An ultra-lightweight RESTful web API Server, built specifically for Meadow |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [TextDisplayMenu](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.TextDisplayMenu.html) | Text Display Menu for graphics and character displays |

## External Peripherals

External peripheral drivers can be added to Meadow projects individually and are distributed as nuget packages on [Nuget.org](www.nuget.org).

## Audio

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Audio.Mp3.Yx5300](/docs/api/Meadow.Foundation/Meadow.Foundation.Audio.Mp3.Yx5300.html) | YX5300 serial MP3 player |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Audio.Radio.Tea5767](/docs/api/Meadow.Foundation/Meadow.Foundation.Audio.Radio.Tea5767.html) | TEA5767 I2C FM radio module |

## Displays

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.ePaper](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.ePaper.html) | SPI eInk / ePaper display controllers (IL0373, IL0376F, IL0398, IL3897, IL91874, ILI91874v3, SSD1608) |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Lcd.CharacterDisplay](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Lcd.CharacterDisplay.html) | Digital and I2C LCD character displays |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Led.FourDigitSevenSegment](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Led.FourDigitSevenSegment.html) | Digtial Four digit seven segment displays |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Led.SevenSegment](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Led.SevenSegment.html) | Ditigal Seven segment displays |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Max7219](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Max7219.html) | MAX7219 SPI LED driver |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Pcd8544](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Pcd8544.html) | PCD8544 SPI monochrome display (Nokia 5110) |
| <img src="https://img.shields.io/badge/InProgress-yellow"/>   | [Displays.SerialLcd](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.SerialLcd.html) | Serial LCD charcter display |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Ssd130x](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.html) | SSD1306 / SSD1309 SPI and I2C OLED monochrome displays |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Ssd1327](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ssd1327.html) | SSD1327 SPI OLED 4bpp greyscale display |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.St7565](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.St7565.html) | ST7565 SPI color display |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.TftSpi](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft.html) | SPI Color TFT and OLED displays (GC9A01, HC8357B, HX8357D, ILI9163, ILI9341, ILI9481, ILI9488, RM68140, S6D02A1, SSD1331, SSD1351, ST7735, ST7789) |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Tm1637](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tm1637.html) | TM1637 digital character display |

### Displays.ePaper

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [IL0373](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.ePaper.Il0373.html) | ePaper driver |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [IL0376F](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.ePaper.Il0376F.html) | ePaper driver |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [IL0398](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.ePaper.Il0398.html) | ePaper driver |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [IL3897](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.ePaper.Il3897.html) | ePaper driver |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [IL91874](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.ePaper.Il91874.html) | ePaper driver |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [IL91874V03](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.ePaper.Il91874V03.html) | ePaper driver |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [SSD1608](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.ePaper.Ssd1608.html) | ePaper driver |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [SSD1681](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.ePaper.Ssd1681.html) | ePaper driver |

### Displays.Ssd130x

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Ssd1306](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ssd1306.html) | Ssd130x driver |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Ssd1309](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ssd1309.html) | Ssd130x driver |

### Displays.TftSpi

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Gc9a01](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft.Gc9a01.html) | TftSpi driver |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Hx8357b](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft.Hx8357b.html) | TftSpi driver |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Hx8357d](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft.Hx8357d.html) | TftSpi driver |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Ili9163](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft.Ili9163.html) | TftSpi driver |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Ili9341](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft.Ili9341.html) | TftSpi driver |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Ili9481](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft.Ili9481.html) | TftSpi driver |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Ili9486](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft.Ili9486.html) | TftSpi driver |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Ili9488](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft.Ili9488.html) | TftSpi driver |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Rm68140](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft.Rm68140.html) | TftSpi driver |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [S6D02A1](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft.S6D02A1.html) | TftSpi driver |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Ssd1331](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft.Ssd1331.html) | TftSpi driver |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Ssd1351](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft.Ssd1351.html) | TftSpi driver |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [ST7735](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft.St7735.html) | TftSpi driver |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [ST7789](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft.St7789.html) | TftSpi driver |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [St7796s](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft.St7796s.html) | TftSpi driver |


## FeatherWings

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.CharlieWing](/docs/api/Meadow.Foundation/Meadow.Foundation.FeatherWings.CharlieWing.html) | AdaFruit CharlieWing Matrix LED FeatherWing |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.DotstarWing](/docs/api/Meadow.Foundation/Meadow.Foundation.FeatherWings.DotstarWing.html) | AdaFruit DotstarWing LED FeatherWing |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.GPSWing](/docs/api/Meadow.Foundation/Meadow.Foundation.FeatherWings.GPSWing.html) | AdaFruit GPSWing GPS FeatherWing |
| <img src="https://img.shields.io/badge/InProgress-yellow"/>   | [FeatherWings.JoyWing](/docs/api/Meadow.Foundation/Meadow.Foundation.FeatherWings.JoyWing.html) | AdaFruit JoyWing joystick and button FeatherWing |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.LedMatrix8x16](/docs/api/Meadow.Foundation/Meadow.Foundation.FeatherWings.LedMatrix8x16Wing.html) | AdaFruit HT16K33 8x16 Matrix LED FeatherWing |
| <img src="https://img.shields.io/badge/InProgress-yellow"/>   | [FeatherWings.MiniTft](/docs/api/Meadow.Foundation/Meadow.Foundation.FeatherWings.OLED128x32Wing.html) | AdaFruit MiniTft color display FeatherWing |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.MotorWing](/docs/api/Meadow.Foundation/Meadow.Foundation.FeatherWings.MotorWing.html) | AdaFruit MotorWing motor controller FeatherWing |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.OLED128x32Wing](/docs/api/Meadow.Foundation/Meadow.Foundation.FeatherWings.OLED128x32Wing.html) | AdaFruit OLED 128x32 monochrome display FeatherWing |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.ServoWing](/docs/api/Meadow.Foundation/Meadow.Foundation.FeatherWings.ServoWing.html) | AdaFruit ServoWing servo controller FeatherWing |

## ICs

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.EEPROM.At24Cxx](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.EEPROM.At24Cxx.html) | At24Cxx I2C EEPROMs (AT24C32 / AT24C64 / AT24C128 / AT24C256) |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.Ht16K33](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Ht16K33.html) | HT16K33 I2C IO expander, led driver, and character display controller |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.Is31fl3731](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Is31fl3731.html) | IS31FL3731 I2C matrix led driver |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.Mcp23x08](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp23x08.html) | Mcp23x08 I2C digital output expander |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.Pca9685](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Pca9685.html) | PCA9685 I2C PWM expander |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.x74595](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.x74595.html) | x74595 I2C shift register digital output expander |

## Leds

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Leds.Apa102](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.Apa102.html) | Apa102 SPI RGB LED driver |

## Motors

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Motors.Stepper.A4988](/docs/api/Meadow.Foundation/Meadow.Foundation.Motors.Stepper.A4988.html) | A4988 digital input stepper motor controller |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Motors.Stepper.Uln2003](/docs/api/Meadow.Foundation/Meadow.Foundation.Motors.Stepper.Uln2003.html) | ULN2003 digital input stepper motor controller |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Motors.Tb67h420ftg](/docs/api/Meadow.Foundation/Meadow.Foundation.Motors.Tb67h420ftg.html) | Tb67h420ftg digital input motor controller |

## RTCs

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [RTCs.Ds1307](/docs/api/Meadow.Foundation/Meadow.Foundation.RTCs.Ds1307.html) | DS1307 I2C real time clock |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [RTCs.Ds323x](/docs/api/Meadow.Foundation/Meadow.Foundation.RTCs.Ds323x.html) | Ds323x I2C real time clock (DS3231) |

## Atmospheric

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.AdafruitMPRLS](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.AdafruitMPRLSSensor.html) | Adafruit MPRLS I2C barometric pressure sensor with metal port connector |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Bme280](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Bme280.html) | Bosch BME280 SPI and I2C absolute barometric pressure sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Bme680](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Bme680.html) | Bosch BME680 I2C humidity, barometric pressure, ambient temperature and gas (VOC) sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Bmp085](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Bmp085.html) | Bosch BMP085 I2C barometric pressure sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Bmp180](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Bmp180.html) | BMP180 I2C barometric pressure, temperature, and altitude sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Dhtxx](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.html) | DHTxx I2C temperature and humidity sensors (DHT10, DHT12) |
| <img src="https://img.shields.io/badge/InProgress-yellow"/>   | [Sensors.Atmospheric.GroveTH02](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.GroveTh02.html) | GroveTH02 I2C temperature and relative humidity sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Hih6130](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Hih6130.html) | HIH6130 I2C temperature and humidity sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Htu21d](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Htu21d.html) | HTU21D(F) I2C temperature and humidity sensor |
| <img src="https://img.shields.io/badge/InProgress-yellow"/>   | [Sensors.Atmospheric.Mpl115a2](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Mpl115a2.html) | MPL115A2 I2C barometric pressure and temperature sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Mpl3115a2](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Mpl3115a2.html) | MPL3115A2 I2C barometric pressure, temperature, and altitude sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Ms5611](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Ms5611.html) | MS5611 SPI and I2C altimeter and barometric pressure sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Sht31D](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Sht31D.html) | SHT31-D temperature and humidity sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Si70xx](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Si70xx.html) | Si70xx I2C humidity and temperature sensors |

### Sensors.Atmospheric.Dhtxx

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [DhtBase](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.DhtBase.html) | DhtBase driver |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Dht10](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Dht10.html) | Dht10 driver |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Dht12](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Dht12.html) | Dht12 driver |

## Camera

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Camera.ArducamMini](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Camera.ArducamMini.html) | ArducamMini I2C + SPI high definition 2MP camera controller |
| <img src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Camera.Mlx90640](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Camera.Mlx90640.html) | Mlx90640 I2C far infrared thermal sensor array camera |
| <img src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Camera.Vc0706](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Camera.Vc0706.html) | VC0706 serial VGA CMOS camera |

## Distance

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Distance.GP2D12](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.GP2D12.html) | Sharp GP2D12 analog distance sensor with integrated signal processing |
| <img src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Distance.HCSR04](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.HCSR04.html) | HCSR04 digital ultrasonic distance sensor |
| <img src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Distance.HYSRF05](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.HYSRF05.html) | HYSRF05 digital ultrasonic distance sensor |
| <img src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Distance.Mb10x0](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.Mb10x0.html) | MaxSonar MB10x0 serial ultrasonic distance sensor |
| <img src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Distance.SFSR02](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.SFSR02.html) | SFSR02 digital ultrasonic distance sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Distance.Vl53l0x](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.Vl53l0x.html) | Vl53l0x I2C time of flight ranging distance sensor |

## Environmental

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Environmental.Ags01Db](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.Ags01Db.html) | Ags01Db I2C digital MEMS VOC gas sensor |

## Hid

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Hid.Mpr121](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.Mpr121.html) | Freescale Semiconductor MPR121 I2C capacitive keypad controller |

## Light

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Alspt19](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Alspt19.html) | ALS-PT19-315C analog light sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Bh1745](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Bh1745.html) | Bh1745 I2C luminance and color light sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Bh1750](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Bh1750.html) | Bh1750 I2C luminance and color light sensor |
| <img src="https://img.shields.io/badge/InProgress-yellow"/>   | [Sensors.Light.SI1145](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.SI1145.html) | SI1145 I2C ultraviolet and ambient light sensor |
| <img src="https://img.shields.io/badge/InProgress-yellow"/>   | [Sensors.Light.Tcs3472x](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Tcs3472x.html) | Tsc3472x I2C ambient light and color sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Temt6000](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Temt6000.html) | Temt6000 analog ambient light sensor |
| <img src="https://img.shields.io/badge/InProgress-yellow"/>   | [Sensors.Light.TSL2561](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.TSL2561.html) | TSL2561 I2C luminosity and light sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Tsl2591](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Tsl2591.html) | Tsl2591 I2C high dynamic range light sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Veml7700](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Veml7700.html) | Veml7700 I2C high accuracy ambient light sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Max44009](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Max44009.html) | Max44009 I2C ultraviolet and ambient light sensor |

## LoadCell

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.LoadCell.Hx711](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.LoadCell.Hx711.html) | Hx711 digital load cell amplifier |
| <img src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.LoadCell.Nau7802](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.LoadCell.Nau7802.html) | NAU7802 I2C 24-Bit dual channel analog to digital converter |

## Location

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Gnss.Mt3339](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Gnss.Mt3339.html) | MediaTek MT3339 serial GNSS / GPS controller |

## Moisture

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Moisture.Capacitive](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Moisture.Capacitive.html) | Analog capacitive soil moisture sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Moisture.Fc28](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Moisture.Fc28.html) | FC28 analog soil moisture sensor |

## Motion

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Adxl335](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl335.html) | ADXL335 analog 3 axis accelerometer motion sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Adxl337](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl337.html) | ADXL337 analog 3 axis accelerometer motion sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Adxl345](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl345.html) | ADXL345 I2C 3 axis accelerometer motion sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Adxl362](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl362.html) | ADXL362 SPI 3 axis accelerometer motion sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Adxl377](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl377.html) | ADXL377 analog 3 axis accelerometer motion sensor |
| <img src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Motion.APDS9960](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.APDS9960.html) | APDS9960 I2C proximity, light, color and gesture sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Bno055](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Bno055.html) | Bosch BNO055 9 axis absolute orientation sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Hcsens0040](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Hcsens0040.html) | HCSENS0040 digital microwave motion sensor |
| <img src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Motion.Hmc5883](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Hmc5883.html) | Hmc5883 / Qmc5883 I2C digital compass |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Mag3110](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Mag3110.html) | Freescale MAG3110 I2C 3 axis magnetometer |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Mpu6050](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Mpu6050.html) | Mpu6050 I2C MEMS 3 axis gyroscope accelerometer motion sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.ParallaxPir](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.ParallaxPir.html) | Parallax PIR analog motion sensor |

## Power

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Power.Ina260](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Power.Ina260.html) | INA260 I2C current and power monitor |

## Radio

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Radio.Rfid.IDxxLA](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Radio.Rfid.IDxxLA.html) | IDxxLA Serial radio frequency ID readers |
| <img src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Radio.Rfid.Rc522](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Radio.Rfid.Rc522.html) | Rc522 I2C radio frequency ID reader |

## Sound

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Sound.Ky038](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Sound.Ky038.html) | KY-038 analog sound sensor |

## Temperature

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Temperature.DS18B20](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.DS18B20.html) | DS18B20 1-Wire temperature sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Temperature.Lm75](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Lm75.html) | Lm75 I2C temperature sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Temperature.Mcp9808](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Mcp9808.html) | MCP9808 I2C temperature sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Temperature.Tmp102](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Tmp102.html) | TMP102 I2C temperature sensor |

## Weather

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Weather.WindVane](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Weather.WindVane.html) | Driver for wind vanes that outputs variable voltage, based on the azimuth of the wind. |

## Servo

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen"/> | [Servo](/docs/api/Meadow.Foundation/Meadow.Foundation.Servo.html) | PWM generic servo controller |

## Transceivers

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/InProgress-yellow"/> | [Transceivers.Nrf24l01](/docs/api/Meadow.Foundation/Meadow.Foundation.Transceivers.Nrf24l01.html) | Nrf24l01 SPI radio transceiver |
| <img src="https://img.shields.io/badge/InProgress-yellow"/> | [Transceivers.SX127x](/docs/api/Meadow.Foundation/Meadow.Foundation.Transceivers.SX127x.html) | SX127x SPI LoRa transceiver |