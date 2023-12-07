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
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen" /> | [AnalogJoystick](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.AnalogJoystick.html) | A two axis analog joystick |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Led](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.Led.html) | Led meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [LedBarGraph](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.LedBarGraph.html) | LedBarGraph meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [PwmLed](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.PwmLed.html) | PwmLed meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [PwmLedBarGraph](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.PwmLedBarGraph.html) | PwmLedBarGraph meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [RgbLed](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.RgbLed.html) | RgbLed meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [RgbPwmLed](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.RgbPwmLed.html) | RgbPwmLed meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [BidirectionalDcMotor](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Motors.BidirectionalDcMotor.html) | BidirectionalDcMotor meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [HBridgeMotor](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Motors.HBridgeMotor.html) | HBridgeMotor meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Relay](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Relays.Relay.html) | Relay meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [PiezoSpeaker](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Audio.PiezoSpeaker.html) | PiezoSpeaker meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [StandardPidController](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Controllers.Pid.StandardPidController.html) | StandardPidController meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [PollingPushButton](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Buttons.PollingPushButton.html) | PollingPushButton meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [PushButton](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Buttons.PushButton.html) | PushButton meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [AnalogWaterLevel](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.AnalogWaterLevel.html) | AnalogWaterLevel meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [DigitalTachometer](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.HallEffect.DigitalTachometer.html) | DigitalTachometer meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [AnalogJoystick](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.AnalogJoystick.html) | AnalogJoystick meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [DigitalJoystick](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.DigitalJoystick.html) | DigitalJoystick meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [AnalogLightSensor](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.AnalogLightSensor.html) | AnalogLightSensor meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [RotaryEncoder](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Rotary.RotaryEncoder.html) | RotaryEncoder meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [RotaryEncoderWithButton](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Rotary.RotaryEncoderWithButton.html) | RotaryEncoderWithButton meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [DipSwitch](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Switches.DipSwitch.html) | DipSwitch meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [SpdtSwitch](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Switches.SpdtSwitch.html) | SpdtSwitch meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [SpstSwitch](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Switches.SpstSwitch.html) | SpstSwitch meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [AnalogTemperature](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.AnalogTemperature.html) | AnalogTemperature meadow driver |

## Libraries and Frameworks

### DataLoggers

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [DataLoggers.AdafruitIO](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.DataLoggers.AdafruitIO.html) | Driver for the Adafruit IO data logging system |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [DataLoggers.SensorReading](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.DataLoggers.SensorReading.html) | SensorReading class for Meadow Foundation data loggers |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [DataLoggers.ThingSpeak](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.DataLoggers.ThingSpeak.html) | Driver for the ThingSpeak data logging system |

### Displays

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.TextDisplayMenu](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.TextDisplayMenu.html) | Text based stack navigation and editor for pixel and character displays |

### Graphics

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Graphics.MicroGraphics](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Graphics.MicroGraphics.html) | Lightweight integer accurate 2d graphics drawing system designed for embedded applications |

### Location

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Location.Gnss.NmeaProcessor](../Libraries_and_Frameworks/Gps_Gnss_Nmea_Processor/) | GNSS NMEA parsing library |

## External Peripherals

External peripheral drivers can be added to Meadow projects individually and are distributed as nuget packages on [Nuget.org](https://www.nuget.org/).

### Audio

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Audio.Mp3.Yx5300](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Audio.Mp3.Yx5300.html) | YX5300 serial MP3 player |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Audio.Radio.Tea5767](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Audio.Radio.Tea5767.html) | TEA5767 I2C FM radio module |

### Displays

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Ch1115](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ch1115.html) | Ch1115 SPI monochrome OLED display |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.ePaper](#displaysepaper) | SPI eInk / ePaper display controllers (IL0373, IL0376F, IL0398, IL3897, IL91874, ILI91874v3, SSD1608) |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.ePaperWaveShare](#displaysepaperwaveshare) | WaveShare SPI eInk / ePaper display controllers |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.GtkDisplay](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.GtkDisplay.html) | Gtk display driver for Meadow |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Lcd.CharacterDisplay](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Lcd.CharacterDisplay.html) | Digital and I2C LCD character displays |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Led.FourDigitSevenSegment](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Led.FourDigitSevenSegment.html) | Digital Four digit seven segment displays |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Led.FourteenSegment](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Led.FourteenSegment.html) | Digital Fourteen (14) segment display |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Led.SevenSegment](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Led.SevenSegment.html) | Digital Seven (7) segment display |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Led.SixteenSegment](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Led.SixteenSegment.html) | Digital Sixteen (16) segment display |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Max7219](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Max7219.html) | MAX7219 SPI LED driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Pcd8544](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Pcd8544.html) | PCD8544 SPI monochrome display (Nokia 5110) |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Sh1106](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Sh1106.html) | Sh1106 SPI monochrome OLED display |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Ssd130x](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ssd130xBase.html) | SSD1306 / SSD1309 SPI and I2C OLED monochrome displays |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Ssd1327](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ssd1327.html) | SSD1327 SPI OLED 4bpp greyscale display |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.St7565](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.St7565.html) | ST7565 SPI monochrome OLED display |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.TftSpi](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.TftSpiBase.html) | SPI Color TFT and OLED displays (GC9A01, HC8357B, HX8357D, ILI9163, ILI9341, ILI9481, ILI9488, RM68140, S6D02A1, SSD1331, SSD1351, ST7735, ST7789) |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Tm1637](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tm1637.html) | TM1637 digital character display |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Uc1609c](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Uc1609c.html) | Uc1609c SPI monochrome OLED display |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.WinForms](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.WinFormsDisplay.html) | Windows Forms display driver for Meadow |


#### Displays.ePaper

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Il0373](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Il0373.html) | Il0373 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Il0376F](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Il0376F.html) | Il0376F display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Il0398](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Il0398.html) | Il0398 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Il3897](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Il3897.html) | Il3897 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Il91874](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Il91874.html) | Il91874 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Il91874V03](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Il91874V03.html) | Il91874V03 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ssd1608](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ssd1608.html) | Ssd1608 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ssd1680](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ssd1680.html) | Ssd1680 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ssd1681](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ssd1681.html) | Ssd1681 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Uc8151c](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Uc8151c.html) | Uc8151c display driver |

#### Displays.ePaperWaveShare

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Epd1in54](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Epd1in54.html) | Epd1in54 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Epd1in54b](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Epd1in54b.html) | Epd1in54b display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Epd1in54c](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Epd1in54c.html) | Epd1in54c display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Epd2in13](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Epd2in13.html) | Epd2in13 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Epd2in13b](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Epd2in13b.html) | Epd2in13b display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Epd2in13b_V4](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Epd2in13b_V4.html) | Epd2in13b_V4 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Epd2in7b](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Epd2in7b.html) | Epd2in7b display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Epd2in9](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Epd2in9.html) | Epd2in9 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Epd2in9b](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Epd2in9b.html) | Epd2in9b display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Epd4in2](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Epd4in2.html) | Epd4in2 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Epd4in2bc](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Epd4in2bc.html) | Epd4in2bc display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Epd4in2bV2](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Epd4in2bV2.html) | Epd4in2bV2 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Epd5in65f](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Epd5in65f.html) | Epd5in65f display driver |

#### Displays.Sh1106

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sh1106](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Sh1106.html) | Sh1106 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sh1107](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Sh1107.html) | Sh1107 display driver |

#### Displays.Ssd130x

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ssd1306](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ssd1306.html) | Ssd1306 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ssd1309](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ssd1309.html) | Ssd1309 display driver |

#### Displays.TftSpi

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Gc9a01](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Gc9a01.html) | Gc9a01 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Hx8357b](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Hx8357b.html) | Hx8357b display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Hx8357d](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Hx8357d.html) | Hx8357d display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ili9163](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ili9163.html) | Ili9163 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ili9341](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ili9341.html) | Ili9341 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ili9481](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ili9481.html) | Ili9481 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ili9486](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ili9486.html) | Ili9486 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ili9488](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ili9488.html) | Ili9488 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Rm68140](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Rm68140.html) | Rm68140 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [S6D02A1](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.S6D02A1.html) | S6D02A1 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ssd1331](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ssd1331.html) | Ssd1331 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ssd1351](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ssd1351.html) | Ssd1351 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [St7735](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.St7735.html) | St7735 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [St7789](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.St7789.html) | St7789 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [St7796s](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.St7796s.html) | St7796s display driver |

### ICs

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.ADC.Ads1x15](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.ADC.Ads1x15Base.html) | TI ADS1x15 I2C analog to digital converters (ADS1015 / ADS1115) |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.ADCs.Mcp3xxx](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.ADCs.Mcp3xxxBase.html) | Mcp3xxx SPI analog-to-digital converter (MCP3001, MCP3002, MCP3004, MCP3008, MCP3201, MCP3202, MCP3204, MCP3208) |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.EEPROM.At24Cxx](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.EEPROM.At24Cxx.html) | At24Cxx I2C EEPROMs (AT24C32 / AT24C64 / AT24C128 / AT24C256) |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.FanControllers.Emc2101](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.FanControllers.Emc2101.html) | Emc2101 I2C fan controller and temperature monitor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.AnalogMux](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.AnalogMuxBase.html) | Library for various analog multiplexers |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.As1115](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.As1115.html) | AS1115 I2C IO expander, led driver, character display controller and keyscan |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.Ds3502](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Ds3502.html) | Ds3502 I2C digital potentiometer |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.Ft232h](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Ft232h.html) | Ft232h USB IOExpander for GPIO, I2C, SPI on Windows |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.Ht16k33](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Ht16k33.html) | HT16K33 I2C IO expander, led driver, and character display controller |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.Is31fl3731](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Is31fl3731.html) | IS31FL3731 I2C matrix led driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.Mcp23xxx](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp23xxx.html) | Mcp23xxx I2C and SPI digital output expanders |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.Pca9671](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Pca9671.html) | PCA9671 I2C digital input/output expander |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.Pca9685](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Pca9685.html) | PCA9685 I2C PWM expander |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.Pcx857x](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Pcx857xBase.html) | Pcx857x I2C digital input/output expander (Pca8574, Pca8575, Pcf8574, Pcf855) |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.Sc16is7x2](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Sc16is7x2Base.html) | SC16IS7x2 SPI I2C family of UART expanders (SC16IS752, SC16IS762) |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.SerialWombat](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Sw18AB.html) | SerialWombat I2C IO expander for GPIO, PWM, servos, etc. |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.Tca9548a](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Tca9548a.html) | TCA9548A I2C IO expander |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.x74595](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.x74595.html) | x74595 SPI shift register digital output expander |

#### ICs.ADC.Ads1x15

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ads1015](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.ADC.Ads1015.html) | Ads1015 analog digital converter driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ads1115](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.ADC.Ads1115.html) | Ads1115 analog digital converter driver |

#### ICs.ADCs.Mcp3xxx

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp3001](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp3001.html) | Mcp3001 analog digital converter driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp3002](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp3002.html) | Mcp3002 analog digital converter driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp3004](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp3004.html) | Mcp3004 analog digital converter driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp3008](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp3008.html) | Mcp3008 analog digital converter driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp3201](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp3201.html) | Mcp3201 analog digital converter driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp3202](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp3202.html) | Mcp3202 analog digital converter driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp3204](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp3204.html) | Mcp3204 analog digital converter driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp3208](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp3208.html) | Mcp3208 analog digital converter driver |

#### ICs.IOExpanders.AnalogMux

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Hp4067](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Hp4067.html) | Hp4067 IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Nxp74HC4051](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Nxp74HC4051.html) | Nxp74HC4051 IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Nxp74HC4067](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Nxp74HC4067.html) | Nxp74HC4067 IO expander driver |

#### ICs.IOExpanders.Mcp23xxx

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp23008](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp23008.html) | Mcp23008 IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp23009](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp23009.html) | Mcp23009 IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp23017](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp23017.html) | Mcp23017 IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp23018](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp23018.html) | Mcp23018 IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp23s08](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp23s08.html) | Mcp23s08 IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp23s09](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp23s09.html) | Mcp23s09 IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp23s17](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp23s17.html) | Mcp23s17 IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp23s18](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp23s18.html) | Mcp23s18 IO expander driver |

#### ICs.IOExpanders.Pcx857x

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Pca8574](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Pca8574.html) | Pca8574 IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Pca8575](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Pca8575.html) | Pca8575 IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Pcf8574](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Pcf8574.html) | Pcf8574 IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Pcf8575](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Pcf8575.html) | Pcf8575 IO expander driver |

#### ICs.IOExpanders.Sc16is7x2

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sc16is752](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Sc16is752.html) | Sc16is752 IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sc16is762](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Sc16is762.html) | Sc16is762 IO expander driver |

### Leds

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Leds.Apa102](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.Apa102.html) | Apa102 SPI RGB LED driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Leds.Pca9633](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.Pca9633.html) | Pca9633 I2C RGB LED driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Leds.Ws2812](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.Ws2812.html) | WS2812 SPI RGB LED driver |

### Motors

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Motors.ElectronicSpeedController](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Motors.ElectronicSpeedController.html) | PWM Electronic speed controller |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Motors.Stepper.A4988](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Motors.Stepper.A4988.html) | A4988 digital input stepper motor controller |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Motors.Stepper.Uln2003](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Motors.Stepper.Uln2003.html) | ULN2003 digital input stepper motor controller |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Motors.Tb67h420ftg](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Motors.Tb67h420ftg.html) | Tb67h420ftg digital input motor controller |

### RTCs

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [RTCs.Ds1307](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.RTCs.Ds1307.html) | DS1307 I2C real time clock |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [RTCs.Ds323x](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.RTCs.Ds323x.html) | Ds323x I2C real time clock (DS3231) |

### Atmospheric

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.AdafruitMPRLS](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.AdafruitMPRLS.html) | Adafruit MPRLS I2C barometric pressure sensor with metal port connector |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Bh1900Nux](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Bh1900Nux.html) | Rohm BH1900NUX I2C temperature sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Bme280](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Bme280.html) | Bosch BME280 SPI and I2C absolute barometric pressure sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Bme68x](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Bme68x.html) | Bosch BME68x SPI / I2C humidity, barometric pressure, ambient temperature and gas (VOC) sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Bmp085](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Bmp085.html) | Bosch BMP085 I2C barometric pressure sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Bmp180](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Bmp180.html) | BMP180 I2C barometric pressure, temperature, and altitude sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Ccs811](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Ccs811.html) | Ccs811 I2C VOC Air Quality Sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Dhtxx](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.DhtxxBase.html) | DHTxx I2C temperature and humidity sensors (DHT10, DHT12) |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Hc2](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Hc2.html) | HC2 Analog and Serial humidity and temperature probe |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Hih6130](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Hih6130.html) | HIH6130 I2C temperature and humidity sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Htux1d](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Htux1dBase.html) | HTU21D(F) and HTU31D I2C temperature and humidity sensors |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Mpl3115a2](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Mpl3115a2.html) | MPL3115A2 I2C barometric pressure, temperature, and altitude sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Ms5611](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Ms5611.html) | MS5611 I2C altimeter and barometric pressure sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Sgp40](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Sgp40.html) | SGP40 I2C VOC sensor driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Sht31d](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Sht31d.html) | SHT31-D I2C temperature and humidity sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Sht4x](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Sht4x.html) | SHT40, SHT41, SHT45 etc. I2C temperature and humidity sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Si70xx](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Si70xx.html) | Si70xx I2C humidity and temperature sensors |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Th02](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Th02.html) | Th02 I2C Relative Humidity and temperature sensor |

#### Sensors.Atmospheric.Bme68x

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Bme680](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Bme680.html) | Bme680 atmospheric driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Bme688](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Bme688.html) | Bme688 atmospheric driver |

#### Sensors.Atmospheric.Dhtxx

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Dht10](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Dht10.html) | Dht10 atmospheric driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Dht12](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Dht12.html) | Dht12 atmospheric driver |

#### Sensors.Atmospheric.Htux1d

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Htu21d](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Htu21d.html) | Htu21d atmospheric driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Htu31d](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Htu31d.html) | Htu31d atmospheric driver |

### Camera

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Camera.Mlx90640](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Camera.Mlx90640.html) | Mlx90640 I2C far infrared thermal sensor array camera |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Camera.Vc0706](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Camera.Vc0706.html) | VC0706 serial VGA CMOS camera |

### Distance

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: in-progress" src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Distance.Hcsr04](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.Hcsr04.html) | HCSR04 digital ultrasonic distance sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Distance.MaxBotix](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.MaxBotix.html) | MaxBotix I2C, analog and serial ultrasonic distance sensors |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Distance.Me007ys](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.Me007ys.html) | Me007ys serial ultrasonic distance sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Distance.Vl53l0x](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.Vl53l0x.html) | Vl53l0x I2C time of flight ranging distance sensor |

### Environmental

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Environmental.Ags01Db](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.Ags01Db.html) | Ags01Db I2C digital MEMS VOC gas sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Environmental.Ens160](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.Ens160.html) | ENS160 I2C C02, Ethanol and AQI sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Environmental.MiniPID2](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.MiniPID2.html) | MiniPID2 analog photoionisation (PID) VOC sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Environmental.NextPm](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.NextPm.html) | TERA Sensor NextPM serial particulate matter sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Environmental.Pmsa300i](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.Pmsa300i.html) | PMSA300I I2C particulate matter AQI sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Environmental.Scd4x](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.Scd4xBase.html) | SCD4x I2C C02, temperature, and relative humidity sensor (SCD40, SCD41) |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Environmental.Y4000](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.Y4000.html) | Y4000 Sonde RS485 Modbus water quality sensor |


#### Sensors.Environmental.Scd4x

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Scd40](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.Scd40.html) | Scd40 environmental driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Scd41](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.Scd41.html) | Scd41 environmental driver |

### Gnss

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Gnss](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Gnss.html) | BG95-M3 Cellular / GNSS controller |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Gnss.Mt3339](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Gnss.Mt3339.html) | MediaTek MT3339 serial GNSS / GPS controller |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Gnss.NeoM8](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Gnss.NeoM8.html) | NEO M8 serial GNSS / GPS controller |

### Hid

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Hid.ANONavigationEncoder](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.ANONavigationEncoder.html) | GPIO ANO Directional Navigation and Scroll Wheel Rotary Encoder |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Hid.As5013](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.As5013.html) | I2C Hall sensor IC for smart navigation |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Hid.BBQ10Keyboard](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.BBQ10Keyboard.html) | BB Q10 I2C Keyboard |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Hid.Keyboard](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.Keyboard.html) | Standard 108-key PC keyboard |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Hid.Mpr121](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.Mpr121.html) | Freescale Semiconductor MPR121 I2C capacitive keypad controller |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Hid.Tsc2004](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.Tsc2004.html) | Tsc2004 I2C capacitive touch screen |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Hid.WiiExtensionControllers](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.WiiExtensionControllerBase.html) | Nintendo Wii I2C extension controllers (nunchuck, classic controller, snes classic controller, nes classic controller) |

#### Sensors.Hid.WiiExtensionControllers

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [NesClassicController](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.NesClassicController.html) | NesClassicController HID driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [SnesClassicController](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.SnesClassicController.html) | SnesClassicController HID driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [WiiClassicController](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.WiiClassicController.html) | WiiClassicController HID driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [WiiClassicControllerPro](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.WiiClassicControllerPro.html) | WiiClassicControllerPro HID driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [WiiNunchuck](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.WiiNunchuck.html) | WiiNunchuck HID driver |

### Light

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Alspt19315C](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Alspt19315C.html) | ALS-PT19-315C analog light sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.AnalogSolarIntensityGauge](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.AnalogSolarIntensityGauge.html) | Analog solar intensity sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Bh1745](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Bh1745.html) | Bh1745 I2C luminance and color light sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Bh1750](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Bh1750.html) | Bh1750 I2C luminance and color light sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Max44009](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Max44009.html) | Max44009 I2C ultraviolet and ambient light sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Si1145](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Si1145.html) | SI1145 I2C ultraviolet and ambient light sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Temt6000](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Temt6000.html) | Temt6000 analog ambient light sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Tsl2591](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Tsl2591.html) | Tsl2591 I2C high dynamic range light sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Veml7700](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Veml7700.html) | Veml7700 I2C high accuracy ambient light sensor |

### LoadCell

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.LoadCell.Hx711](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.LoadCell.Hx711.html) | Hx711 digital load cell amplifier |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.LoadCell.Nau7802](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.LoadCell.Nau7802.html) | NAU7802 I2C 24-Bit dual channel analog to digital converter |

### Moisture

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Moisture.Capacitive](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Moisture.Capacitive.html) | Analog capacitive soil moisture sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Moisture.Fc28](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Moisture.Fc28.html) | FC28 analog soil moisture sensor |

### Motion

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Adxl3xx](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl3xxBase.html) | ADXL3xx Analog and I2C 3-axis accelerometers (ADXL335, ADXL345, ADXL337, ADXL362, ADXL377) |
| <img alt="Status badge: in-progress" src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Motion.Apds9960](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Apds9960.html) | APDS9960 I2C proximity, light, color and gesture sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Bmi270](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Bmi270.html) | BMI270 I2C 6-axis accelerometer and motion sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Bno055](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Bno055.html) | Bosch BNO055 I2C 9 axis absolute orientation sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Hcsens0040](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Hcsens0040.html) | HCSENS0040 digital microwave motion sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Hmc5883](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Hmc5883.html) | Hmc5883 / Qmc5883 I2C digital compass |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Lis2Mdl](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Lis2Mdl.html) | LIS2MDL I2C 3-axis magnetometer |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Lis3mdl](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Lis3mdl.html) | Lis3mdl I2C 3-axis magnetometer |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Lsm303agr](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Lsm303agr.html) | Lsm303agr I2C 6-axis accelerometer and magnetometer |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Lsm6dsox](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Lsm6dsox.html) | Lsm6Dsox I2C 6-axis accelerometer and gyroscope |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Mag3110](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Mag3110.html) | Freescale MAG3110 I2C 3 axis magnetometer |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Mma7660fc](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Mma7660fc.html) | Mma7660fc I2C 3-axis accelerometer |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Mmc5603](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Mmc5603.html) | MMC5603 I2C 3 axis digital magnetometer |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Mpu6050](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Mpu6050.html) | Mpu6050 I2C MEMS 3 axis gyroscope accelerometer motion sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.ParallaxPir](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.ParallaxPir.html) | Parallax PIR analog motion sensor |

#### Sensors.Motion.Adxl3xx

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Adxl335](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl335.html) | Adxl335 motion driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Adxl337](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl337.html) | Adxl337 motion driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Adxl345](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl345.html) | Adxl345 motion driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Adxl362](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl362.html) | Adxl362 motion driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Adxl377](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl377.html) | Adxl377 motion driver |

### Power

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Power.CurrentTransducer](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Power.CurrentTransducer.html) | Current transducer library |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Power.Ina260](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Power.Ina260.html) | INA260 I2C current and power monitor |

### Radio

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Radio.Rfid.IDxxLA](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Radio.Rfid.IDxxLA.html) | IDxxLA Serial radio frequency ID readers |

### Sound

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Sound.Ky038](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Sound.Ky038.html) | KY-038 analog sound sensor |

### Temperature

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Temperature.Lm75](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Lm75.html) | Lm75 I2C temperature sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Temperature.Mcp960x](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Mcp960xBase.html) | Mcp960x I2C thermocouple temperature sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Temperature.Mcp9808](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Mcp9808.html) | MCP9808 I2C temperature sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Temperature.Thermistor](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Thermistor.html) | Thermistor analog temperature sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Temperature.Tmp102](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Tmp102.html) | TMP102 I2C temperature sensor |

#### Sensors.Temperature.Mcp960x

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp9600](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Mcp9600.html) | Mcp9600 temperature driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp9601](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Mcp9601.html) | Mcp9601 temperature driver |

### Weather

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Weather.SwitchingAnemometer](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Weather.SwitchingAnemometer.html) | Digital Switching Anemometer wind speed sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Weather.SwitchingRainGauge](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Weather.SwitchingRainGauge.html) | GPIO rain gauge sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Weather.WindVane](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Weather.WindVane.html) | WindVane analog wind direction sensor |

### Servos

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Servos.Servo](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation/Meadow.Foundation.Servos.Servo.html) | PWM generic servo controller |

## Seeed Studio Grove

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Audio.Buzzer](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Audio.Buzzer.html) | Grove PWM Buzzer |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Audio.Speaker](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Audio.Speaker.html) | Grove PWM Speaker |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Displays.4DigitDisplay](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Displays.FourDigitDisplay.html) | Grove GPIO 4 digit display |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Displays.LCD](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Displays.LCD.html) | Grove I2C LCD display |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Displays.OLEDDisplay112](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Displays.OLEDDisplay112.html) | Grove I2C OLED 1.12" display |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.HID.VibrationMotor](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.HID.VibrationMotor.html) | Grove GPIO vibration motor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Leds.LEDSocket](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Leds.LEDSocket.html) | Grove GPIO led |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Relays.Relay](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Relays.Relay.html) | Grove Relay driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.RTCs.RTC](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.RTCs.RTC.html) | Grove I2C real time clock (DS1307) |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Atmospheric.TemperatureHumiditySensor_HighAccuracyMini](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Atmospheric.TemperatureHumiditySensor_HighAccuracyMini.html) | Grove I2C Temperature and Humidity sensor - High Accuracy and Mini (TH02) |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Buttons.Button](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Buttons.Button.html) | Grove GPIO momentary push button |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Buttons.LEDButton](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Buttons.LEDButton.html) | Grove GPIO momentary push button with LED (blue, red, or yellow) |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Buttons.Touch](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Buttons.Touch.html) | Grove GPIO capacitive touch button |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Environmental.FlameSensor](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Environmental.FlameSensor.html) | Grove GPIO flame sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Environmental.WaterSensor](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Environmental.WaterSensor.html) | Grove Analog water level sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Hid.ThumbJoystick](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Hid.ThumbJoystick.html) | Grove analog 2-axis ThumbJoystick |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Light.LightSensor](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Light.LightSensor.html) | Grove light sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Light.LineFinder](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Light.LineFinder.html) | Grove line finder sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Moisture.MoistureSensor](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Moisture.MoistureSensor.html) | Grove analog moisture sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Motion.ThreeAxisDigitalAccelerometer_16g](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Motion.ThreeAxisDigitalAccelerometer16g.html) | Grove I2C 3-Axis digital accelerometer |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Motion.ThreeAxisDigitalAccelerometer1_5g](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Motion.ThreeAxisDigitalAccelerometer1_5g.html) | Grove I2C 3-Axis digital accelerometer |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Motion.ThreeAxisDigitalCompass](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Motion.ThreeAxisDigitalCompass.html) | Grove I2C 3-axis digital compass |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Motion.MiniPIRMotionSensor](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Motion.MiniPIRMotionSensor.html) | Grove GPIO MiniPIRMotionSensor (Parallax PIR) |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Motion.PIRMotionSensor](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Motion.PIRMotionSensor.html) | Grove GPIO PIRMotionSensor (Parallax PIR) |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Motion.VibrationSensor](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Motion.VibrationSensor.html) | Grove GPIO vibration sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Rotary.RotaryAngleSensor](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Rotary.RotaryAngleSensor.html) | Grove rotary angle sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Sound.LoudnessSensor](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Sound.LoudnessSensor.html) | Grove loudness sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Sound.SoundSensor](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Sound.SoundSensor.html) | Grove sound sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Switches.MagneticSwitch](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Switches.MagneticSwitch.html) | Grove GPIO magetic reed switch sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Switches.SwitchP](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Switches.SwitchP.html) | Grove GPIO single pole dual throw slide switch |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Switches.Tilt](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Switches.Tilt.html) | Grove GPIO tilt switch |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Temperature.TemperatureSensor](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Temperature.TemperatureSensor.html) | Grove temperature sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Servos.Servo](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Servos.Servo.html) | Grove PWM servo motor |

## FeatherWings

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.CharlieWing](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings.CharlieWing.html) | AdaFruit CharlieWing Matrix LED FeatherWing |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.DotstarWing](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings.DotstarWing.html) | AdaFruit DotstarWing LED FeatherWing |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.GPSWing](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings.GPSWing.html) | AdaFruit GPSWing GPS FeatherWing |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.KeyboardWing](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings.KeyboardWing.html) | BBQ 10 Keyboard FeatherWing |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.LedMatrix8x16Wing](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings.LedMatrix8x16Wing.html) | AdaFruit HT16K33 8x16 Matrix LED FeatherWing |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.MotorWing](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings.MotorWing.html) | AdaFruit MotorWing motor controller FeatherWing |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.NeoPixelWing](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings.NeoPixelWing.html) | AdaFruit NeoPixel FeatherWing |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.NineDofImuWing](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings.NineDofImuWing.html) | AdaFruit I2C ST 9-DoF IMU FeatherWing |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.OLED128x32Wing](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings.OLED128x32Wing.html) | AdaFruit OLED 128x32 monochrome display FeatherWing |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.ServoWing](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings.ServoWing.html) | AdaFruit ServoWing servo controller FeatherWing |

## mikroBUS

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [mikroBUS.Displays.C16x9](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS.Displays.C16x9.html) | MikroElectronika I2C 16x9 Click LED board |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [mikroBUS.Displays.C8800Retro](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS.Displays.C8800Retro.html) | MikroElectronika Altair 8800 I2C led driver and keyscan MikroBus retro click board |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [mikroBUS.Displays.C8x8](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS.Displays.C8x8.html) | MikroElectronika SPI 8x8 Click LED board |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [mikroBUS.Sensors.Atmospheric.CTempHum15](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS.Sensors.Atmospheric.CTempHum15.html) | MikroElectronika I2C Temp and Hum 15 temperature and humidity click board |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [mikroBUS.Sensors.Buttons.CACCurrent](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS.Sensors.Buttons.CACCurrent.html) | MikroElectronika SPI AC Current click board |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [mikroBUS.Sensors.Buttons.CButton](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS.Sensors.Buttons.CButton.html) | MikroElectronika PWM GPIO Led Button MikroBus click board |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [mikroBUS.Sensors.Buttons.CLEM](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS.Sensors.Buttons.CLEM.html) | MikroElectronika SPI LEM AC Current click board |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [mikroBUS.Sensors.Gnss.CGNSS10](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.mikroBus/Meadow.Foundation.mikroBUS.Sensors.Gnss.CGNSS10.html) | MikroElectronika Serial I2C SPI Neo M8 GPS / GNSS 10 MikroBus click board |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [mikroBUS.Sensors.Gnss.CGNSS5](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS.Sensors.Gnss.CGNSS5.html) | MikroElectronika Serial I2C Neo M8 GPS / GNSS 5 MikroBus click board |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [mikroBUS.Sensors.Hid.CJoystick](http://developer.wildernesslabs.co/docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS.Sensors.Hid.CJoystick.html) | MikroElectronika I2C Joystick MikroBus click board |
