---
layout: Meadow
title: Peripherals Library
subtitle: Drivers for hardware peripherals such as sensors, buttons, displays, and more!
---

The Meadow.Foundation peripherals library is an [open source](https://github.com/WildernessLabs/Meadow.Foundation) repository of drivers for various peripherals such as sensors, motors, displays, cameras, and other peripherals which make it easy to add hardware to your Meadow application.

The peripherals are split into two groups; the first group is general, core peripherals that are included in the main [Meadow.Foundation](https://www.nuget.org/packages/Meadow.Foundation) NuGet package. The second group are additional drivers that are available via separate NuGet packages to keep the core size to a minimum.

## Core Peripherals

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [AnalogJoystick](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.AnalogJoystick) | AnalogJoystick meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [AnalogLightSensor](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.AnalogLightSensor) | AnalogLightSensor meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [AnalogTemperature](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.AnalogTemperature) | AnalogTemperature meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [AnalogWaterLevel](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.AnalogWaterLevel) | AnalogWaterLevel meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [BidirectionalDcMotor](/docs/api/Meadow.Foundation/Meadow.Foundation.Motors.BidirectionalDcMotor) | BidirectionalDcMotor meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [DigitalJoystick](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.DigitalJoystick) | DigitalJoystick meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [DigitalPushButtonJoystick](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.DigitalPushButtonJoystick) | DigitalPushButtonJoystick meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [DigitalTachometer](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.HallEffect.DigitalTachometer) | DigitalTachometer meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [DipSwitch](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Switches.DipSwitch) | DipSwitch meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [HBridgeMotor](/docs/api/Meadow.Foundation/Meadow.Foundation.Motors.HBridgeMotor) | HBridgeMotor meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Led](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.Led) | Led meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [LedBarGraph](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.LedBarGraph) | LedBarGraph meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [PiezoSpeaker](/docs/api/Meadow.Foundation/Meadow.Foundation.Audio.PiezoSpeaker) | PiezoSpeaker meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [PollingPushButton](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Buttons.PollingPushButton) | PollingPushButton meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Potentiometer](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Potentiometer) | Potentiometer meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [PushButton](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Buttons.PushButton) | PushButton meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [PwmLed](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.PwmLed) | PwmLed meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [PwmLedBarGraph](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.PwmLedBarGraph) | PwmLedBarGraph meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Relay](/docs/api/Meadow.Foundation/Meadow.Foundation.Relays.Relay) | Relay meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [RgbLed](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.RgbLed) | RgbLed meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [RgbPwmLed](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.RgbPwmLed) | RgbPwmLed meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [RotaryEncoder](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Rotary.RotaryEncoder) | RotaryEncoder meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [RotaryEncoderWithButton](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Rotary.RotaryEncoderWithButton) | RotaryEncoderWithButton meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [SimulateBarometricPressureSensor](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.SimulateBarometricPressureSensor) | SimulateBarometricPressureSensor meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [SpdtSwitch](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Switches.SpdtSwitch) | SpdtSwitch meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [SpstSwitch](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Switches.SpstSwitch) | SpstSwitch meadow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [StandardPidController](/docs/api/Meadow.Foundation/Meadow.Foundation.Controllers.Pid.StandardPidController) | StandardPidController meadow driver |

## Libraries and Frameworks

### Audio

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Audio.MicroAudio](/docs/api/Meadow.Foundation/Meadow.Foundation.Audio.MicroAudio) | Lightweight single-voice sound effect and music player designed for embedded applications |

### DataLoggers

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [DataLoggers.AdafruitIO](/docs/api/Meadow.Foundation/Meadow.Foundation.DataLoggers.AdafruitIO) | Driver for the Adafruit IO data logging system |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [DataLoggers.SensorReading](/docs/api/Meadow.Foundation/Meadow.Foundation.DataLoggers.SensorReading) | SensorReading class for Meadow Foundation data loggers |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [DataLoggers.ThingSpeak](/docs/api/Meadow.Foundation/Meadow.Foundation.DataLoggers.ThingSpeak) | Driver for the ThingSpeak data logging system |

### Displays

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.TextDisplayMenu](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.TextDisplayMenu) | Text based stack navigation and editor for pixel and character displays |

### Graphics

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Graphics.MicroGraphics](/docs/api/Meadow.Foundation/Meadow.Foundation.Graphics.MicroGraphics) | Lightweight integer accurate 2d graphics drawing system designed for embedded applications |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Graphics.MicroLayout](/docs/api/Meadow.Foundation/Meadow.Foundation.Graphics.MicroLayout) | Lightweight UI Framework for embedded applications |

### Location

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Location.Gnss.NmeaProcessor](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Location.Gnss.NmeaProcessor) | GNSS NMEA parsing library |

### Serialization

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Serialization.MicroJson](/docs/api/Meadow.Foundation/Meadow.Foundation.Serialization.MicroJson) | Lightweight .NET Json serializer/deserializer |

## External Peripherals

External peripheral drivers can be added to Meadow projects individually and are distributed as nuget packages on [Nuget.org](https://www.nuget.org/).

### Audio

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Audio.Mp3.Yx5300](/docs/api/Meadow.Foundation/Meadow.Foundation.Audio.Mp3.Yx5300) | YX5300 serial MP3 player |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Audio.Radio.Tea5767](/docs/api/Meadow.Foundation/Meadow.Foundation.Audio.Radio.Tea5767) | TEA5767 I2C FM radio module |

### Batteries

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Batteries.Voltaic.V10x](/docs/api/Meadow.Foundation/Meadow.Foundation.Batteries.Voltaic.V10x) | Voltaix V10x-series RS485 Modbus solar battery with charge controller |

### Displays

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.AsciiConsole](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.AsciiConsole) | Ascii console display |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Ch1115](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ch1115) | Ch1115 SPI monochrome OLED display |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Gtk](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Gtk) | Gtk display driver for Meadow |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Lcd.CharacterDisplay](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Lcd.CharacterDisplay) | Digital and I2C LCD character displays |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Led.FourDigitSevenSegment](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Led.FourDigitSevenSegment) | Digital Four digit seven segment displays |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Led.FourteenSegment](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Led.FourteenSegment) | Digital Fourteen (14) segment display |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Led.SevenSegment](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Led.SevenSegment) | Digital Seven (7) segment display |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Led.SixteenSegment](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Led.SixteenSegment) | Digital Sixteen (16) segment display |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Max7219](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Max7219) | MAX7219 SPI LED driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Pcd8544](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Pcd8544) | PCD8544 SPI monochrome display (Nokia 5110) |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Silk](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Silk) | Display driver for Meadow using Silk.NET and SkiaSharp |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Ssd1327](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ssd1327) | SSD1327 SPI OLED 4bpp greyscale display |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.St7565](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.St7565) | ST7565 SPI monochrome OLED display |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Tm1637](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tm1637) | TM1637 digital character display |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.Uc1609c](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Uc1609c) | Uc1609c SPI monochrome OLED display |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Displays.WinForms](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.WinForms) | Windows Forms display driver for Meadow |

#### Displays.ePaper

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Il0373](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Il0373) | Il0373 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Il0376F](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Il0376F) | Il0376F display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Il0398](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Il0398) | Il0398 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Il3897](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Il3897) | Il3897 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Il91874](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Il91874) | Il91874 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Il91874V03](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Il91874V03) | Il91874V03 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ssd1608](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ssd1608) | Ssd1608 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ssd1680](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ssd1680) | Ssd1680 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ssd1681](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ssd1681) | Ssd1681 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Uc8151c](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Uc8151c) | Uc8151c display driver |

#### Displays.ePaperWaveShare

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Epd1in54](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Epd1in54) | Epd1in54 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Epd1in54b](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Epd1in54b) | Epd1in54b display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Epd1in54c](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Epd1in54c) | Epd1in54c display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Epd2in13](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Epd2in13) | Epd2in13 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Epd2in13b](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Epd2in13b) | Epd2in13b display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Epd2in13b_V4](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Epd2in13b_V4) | Epd2in13b_V4 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Epd2in15g](/docs/api/Meadow.Foundation/Displays.ePaperWaveShare.Drivers.Epd2in15g) | Epd2in15g display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Epd2in7b](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Epd2in7b) | Epd2in7b display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Epd2in9](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Epd2in9) | Epd2in9 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Epd2in9b](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Epd2in9b) | Epd2in9b display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Epd4in2](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Epd4in2) | Epd4in2 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Epd4in2bc](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Epd4in2bc) | Epd4in2bc display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Epd4in2bV2](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Epd4in2bV2) | Epd4in2bV2 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Epd5in65f](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Epd5in65f) | Epd5in65f display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Epd7in5V2](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Epd7in5V2) | Epd7in5V2 display driver |

#### Displays.Sh110x

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sh1106](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Sh1106) | Sh1106 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sh1107](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Sh1107) | Sh1107 display driver |

#### Displays.Ssd130x

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ssd1306](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ssd1306) | Ssd1306 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ssd1309](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ssd1309) | Ssd1309 display driver |

#### Displays.TftSpi

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Gc9a01](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Gc9a01) | Gc9a01 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Hx8357b](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Hx8357b) | Hx8357b display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Hx8357d](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Hx8357d) | Hx8357d display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ili9163](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ili9163) | Ili9163 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ili9225](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ili9225) | Ili9225 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ili9341](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ili9341) | Ili9341 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ili9481](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ili9481) | Ili9481 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ili9486](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ili9486) | Ili9486 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ili9488](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ili9488) | Ili9488 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Rm68140](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Rm68140) | Rm68140 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [S6D02A1](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.S6D02A1) | S6D02A1 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ssd1331](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ssd1331) | Ssd1331 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ssd1351](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Ssd1351) | Ssd1351 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [St7735](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.St7735) | St7735 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [St7789](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.St7789) | St7789 display driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [St7796s](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.St7796s) | St7796s display driver |

### ICs

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.ADC.Ads7128](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.ADC.Ads7128) | TI ADS7128 I2C analog to digital converter |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.CAN.Mcp2515](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.CAN.Mcp2515) | Microchip MCP2515 CAN Controller |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.CAN.PCanBasic](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.CAN.PCanBasic) | PCAN-Basic USB CAN Controller for Windows |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.DAC.Mcp4728](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.DAC.Mcp4728) | Microchip MCP4728 I2C digital to analog converter |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.DigiPots.Ds3502](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.DigiPots.Ds3502) | Ds3502 I2C digital potentiometer |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.EEPROM.At24Cxx](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.EEPROM.At24Cxx) | At24Cxx I2C EEPROMs (AT24C32 / AT24C64 / AT24C128 / AT24C256) |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.FanControllers.Emc2101](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.FanControllers.Emc2101) | Emc2101 I2C fan controller and temperature monitor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.Ads1263](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Ads1263) | TI ADS1263 SPI analog to digital converter, IO expander |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.As1115](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.As1115) | AS1115 I2C IO expander, led driver, character display controller and keyscan |
| <img alt="Status badge: in-progress" src="https://img.shields.io/badge/InProgress-yellow"/> | [ICs.IOExpanders.Cp2112](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Cp2112) | CP2112 USB IOExpander for GPIO, I2C, SPI on Windows |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.Ht16k33](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Ht16k33) | HT16K33 I2C IO expander, led driver, and character display controller |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.Is31fl3731](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Is31fl3731) | IS31FL3731 I2C matrix led driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.Pca9671](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Pca9671) | PCA9671 I2C digital input/output expander |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.Pca9685](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Pca9685) | PCA9685 I2C PWM expander |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.SerialWombat](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.SerialWombat) | SerialWombat I2C IO expander for GPIO, PWM, servos, etc. |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.Tca9548a](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Tca9548a) | TCA9548A I2C IO expander |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [ICs.IOExpanders.x74595](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.x74595) | x74595 SPI shift register digital output expander |

#### ICs.ADC.Ads1x15

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ads1015](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.ADC.Ads1015) | Ads1015 analog digital converter driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ads1115](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.ADC.Ads1115) | Ads1115 analog digital converter driver |

#### ICs.ADC.Mcp3xxx

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp3001](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.ADC.Mcp3001) | Mcp3001 analog digital converter driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp3002](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.ADC.Mcp3002) | Mcp3002 analog digital converter driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp3004](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.ADC.Mcp3004) | Mcp3004 analog digital converter driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp3008](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.ADC.Mcp3008) | Mcp3008 analog digital converter driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp3201](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.ADC.Mcp3201) | Mcp3201 analog digital converter driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp3202](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.ADC.Mcp3202) | Mcp3202 analog digital converter driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp3204](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.ADC.Mcp3204) | Mcp3204 analog digital converter driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp3208](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.ADC.Mcp3208) | Mcp3208 analog digital converter driver |

#### ICs.DAC.Mcp492x

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp4921](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.DAC.Mcp4921) | Mcp4921 dac driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp4922](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.DAC.Mcp4922) | Mcp4922 dac driver |

#### ICs.DigiPots.Mcp4xxx

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp4131](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.DigiPots.Mcp4131) | Mcp4131 digipot driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp4132](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.DigiPots.Mcp4132) | Mcp4132 digipot driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp4141](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.DigiPots.Mcp4141) | Mcp4141 digipot driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp4142](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.DigiPots.Mcp4142) | Mcp4142 digipot driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp4151](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.DigiPots.Mcp4151) | Mcp4151 digipot driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp4152](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.DigiPots.Mcp4152) | Mcp4152 digipot driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp4161](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.DigiPots.Mcp4161) | Mcp4161 digipot driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp4162](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.DigiPots.Mcp4162) | Mcp4162 digipot driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp4231](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.DigiPots.Mcp4231) | Mcp4231 digipot driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp4232](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.DigiPots.Mcp4232) | Mcp4232 digipot driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp4241](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.DigiPots.Mcp4241) | Mcp4241 digipot driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp4242](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.DigiPots.Mcp4242) | Mcp4242 digipot driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp4251](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.DigiPots.Mcp4251) | Mcp4251 digipot driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp4252](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.DigiPots.Mcp4252) | Mcp4252 digipot driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp4261](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.DigiPots.Mcp4261) | Mcp4261 digipot driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp4262](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.DigiPots.Mcp4262) | Mcp4262 digipot driver |

#### ICs.IOExpanders.AnalogMux

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Hp4067](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Hp4067) | Hp4067 IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Nxp74HC4051](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Nxp74HC4051) | Nxp74HC4051 IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Nxp74HC4067](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Nxp74HC4067) | Nxp74HC4067 IO expander driver |

#### ICs.IOExpanders.Ftxxxx

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ft2232](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Ft2232) | Ft2232 IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ft232h](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Ft232h) | Ft232h IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ft4232](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Ft4232) | Ft4232 IO expander driver |

#### ICs.IOExpanders.Mcp23xxx

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp23008](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp23008) | Mcp23008 IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp23009](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp23009) | Mcp23009 IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp23017](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp23017) | Mcp23017 IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp23018](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp23018) | Mcp23018 IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp23s08](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp23s08) | Mcp23s08 IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp23s09](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp23s09) | Mcp23s09 IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp23s17](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp23s17) | Mcp23s17 IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp23s18](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp23s18) | Mcp23s18 IO expander driver |

#### ICs.IOExpanders.Pcx857x

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Pca8574](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Pca8574) | Pca8574 IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Pca8574a](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Pca8574a) | Pca8574a IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Pca8575](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Pca8575) | Pca8575 IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Pcf8574](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Pcf8574) | Pcf8574 IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Pcf8574a](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Pcf8574a) | Pcf8574a IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Pcf8575](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Pcf8575) | Pcf8575 IO expander driver |

#### ICs.IOExpanders.Sc16is7x2

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sc16is752](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Sc16is752) | Sc16is752 IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sc16is762](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Sc16is762) | Sc16is762 IO expander driver |

#### ICs.IOExpanders.Tca95x5

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Tca9535](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Tca9535) | Tca9535 IO expander driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Tca9555](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Tca9555) | Tca9555 IO expander driver |


#### IOExpanders.Temco.T3xxx

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [T322ai](/docs/api/Meadow.Foundation/Meadow.Foundation.IOExpanders.T322ai) | T322ai temco driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [T38i8o6do](/docs/api/Meadow.Foundation/Meadow.Foundation.IOExpanders.T38i8o6do) | T38i8o6do temco driver |

### Leds

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Leds.Apa102](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.Apa102) | Apa102 SPI RGB LED driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Leds.Pca9633](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.Pca9633) | Pca9633 I2C RGB LED driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Leds.Ws2812](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.Ws2812) | WS2812 SPI RGB LED driver |

### Motors

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Motors.CerusXDrive](/docs/api/Meadow.Foundation/Meadow.Foundation.Motors.CerusXDrive) | RS485 Driver for Franklin Electric's Cerus X-Drive series of VFDs |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Motors.ElectronicSpeedController](/docs/api/Meadow.Foundation/Meadow.Foundation.Motors.ElectronicSpeedController) | PWM Electronic speed controller |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Motors.Stepper.A4988](/docs/api/Meadow.Foundation/Meadow.Foundation.Motors.Stepper.A4988) | A4988 digital input stepper motor controller |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Motors.Stepper.GpioStepper](/docs/api/Meadow.Foundation/Meadow.Foundation.Motors.Stepper.GpioStepper) | Digital input stepper motor controller |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Motors.Stepper.Uln2003](/docs/api/Meadow.Foundation/Meadow.Foundation.Motors.Stepper.Uln2003) | ULN2003 digital input stepper motor controller |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Motors.Tb67h420ftg](/docs/api/Meadow.Foundation/Meadow.Foundation.Motors.Tb67h420ftg) | Tb67h420ftg digital input motor controller |

#### Motors.StepperOnline

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [BLD510B](/docs/api/Meadow.Foundation/Meadow.Foundation.MotorControllers.StepperOnline.BLD510B) | BLD510B motor driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [F55B150_24GL_30S](/docs/api/Meadow.Foundation/Meadow.Foundation.Motors.StepperOnline.F55B150_24GL_30S) | F55B150_24GL_30S motor driver |

### RTCs

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [RTCs.Ab0805](/docs/api/Meadow.Foundation/Meadow.Foundation.RTCs.Ab0805) | Ab0805 I2C real time clock |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [RTCs.Ds1307](/docs/api/Meadow.Foundation/Meadow.Foundation.RTCs.Ds1307) | DS1307 I2C real time clock |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [RTCs.Pcf8523](/docs/api/Meadow.Foundation/Meadow.Foundation.RTCs.Pcf8523) | Pcf8523 I2C real time clock |

#### RTCs.Ds323x

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ds3231](/docs/api/Meadow.Foundation/Meadow.Foundation.RTCs.Ds3231) | Ds3231 rtc driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ds3232](/docs/api/Meadow.Foundation/Meadow.Foundation.RTCs.Ds3232) | Ds3232 rtc driver |

### Atmospheric

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.AdafruitMPRLS](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.AdafruitMPRLS) | Adafruit MPRLS I2C barometric pressure sensor with metal port connector |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Bh1900Nux](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Bh1900Nux) | Rohm BH1900NUX I2C temperature sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Bmp085](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Bmp085) | Bosch BMP085 I2C barometric pressure sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Bmp180](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Bmp180) | BMP180 I2C barometric pressure, temperature, and altitude sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Ccs811](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Ccs811) | Ccs811 I2C VOC Air Quality Sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Hc2](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Hc2) | HC2 Analog and Serial humidity and temperature probe |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Hih6130](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Hih6130) | HIH6130 I2C temperature and humidity sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Mpl3115a2](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Mpl3115a2) | MPL3115A2 I2C barometric pressure, temperature, and altitude sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Ms5611](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Ms5611) | MS5611 I2C altimeter and barometric pressure sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Sgp40](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Sgp40) | SGP40 I2C VOC sensor driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Sht31d](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Sht31d) | SHT31-D I2C temperature and humidity sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Sht4x](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Sht4x) | SHT40, SHT41, SHT45 etc. I2C temperature and humidity sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Si70xx](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Si70xx) | Si70xx I2C humidity and temperature sensors |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Atmospheric.Th02](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Th02) | Th02 I2C Relative Humidity and temperature sensor |

#### Sensors.Atmospheric.Ahtx0

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Aht10](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Aht10) | Aht10 atmospheric driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Aht20](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Aht20) | Aht20 atmospheric driver |

#### Sensors.Atmospheric.Bme68x

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Bme680](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Bme680) | Bme680 atmospheric driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Bme688](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Bme688) | Bme688 atmospheric driver |

#### Sensors.Atmospheric.Bmx280

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Bme280](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Bme280) | Bme280 atmospheric driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Bmp280](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Bmp280) | Bmp280 atmospheric driver |

#### Sensors.Atmospheric.Dhtxx

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Dht10](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Dht10) | Dht10 atmospheric driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Dht12](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Dht12) | Dht12 atmospheric driver |

#### Sensors.Atmospheric.Htux1d

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Htu21d](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Htu21d) | Htu21d atmospheric driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Htu31d](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Htu31d) | Htu31d atmospheric driver |


#### Sensors.Battery.Max1704x

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Max17043](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Battery.Max17043) | Max17043 battery driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Max17044](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Battery.Max17044) | Max17044 battery driver |

### Camera

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Camera.Amg8833](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Camera.Amg8833) | Grid-EYE Amg8833 I2C infrared array sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Camera.Arducam](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Camera.Arducam) | Arducam SPI CMOS camera |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Camera.Mlx90640](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Camera.Mlx90640) | Mlx90640 I2C far infrared thermal sensor array camera |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Camera.Vc0706](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Camera.Vc0706) | VC0706 serial VGA CMOS camera |

### Color

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Color.Tcs3472x](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Color.Tcs3472x) | Tcs3472x family of I2C color sensors (Tcs34721, Tcs34723, Tcs34725, Tcs34727) |

### Distance

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Distance.A02yyuw](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.A02yyuw) | A02yyuw serial ultrasonic distance sensor |
| <img alt="Status badge: in-progress" src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Distance.Hcsr04](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.Hcsr04) | HCSR04 digital ultrasonic distance sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Distance.MaxBotix](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.MaxBotix) | MaxBotix I2C, analog and serial ultrasonic distance sensors |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Distance.Me007ys](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.Me007ys) | Me007ys serial ultrasonic distance sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Distance.Vl53l0x](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.Vl53l0x) | Vl53l0x I2C time of flight ranging distance sensor |

### Environmental

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Environmental.Ags01Db](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.Ags01Db) | Ags01Db I2C digital MEMS VOC gas sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Environmental.AtlasScientificGravityDOMeter](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.AtlasScientificGravityDOMeter) | Atlas Scientific analog gravity dissolved oxygen sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Environmental.DFRobotGravityDOMeter](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.DFRobotGravityDOMeter) | DFRobot analog gravity dissolved oxygen sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Environmental.Ens160](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.Ens160) | ENS160 I2C C02, Ethanol and AQI sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Environmental.MiniPID2](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.MiniPID2) | MiniPID2 analog photoionisation (PID) VOC sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Environmental.NextPm](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.NextPm) | TERA Sensor NextPM serial particulate matter sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Environmental.Pmsa003i](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.Pmsa003i) | PMSA003I I2C particulate matter AQI sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Environmental.Scd30](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.Scd30) | SCD30 I2C C02, temperature, and relative humidity sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Environmental.Ysi.Exo](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.Ysi.Exo) | Driver for the EXO line of YSI Modbus Water Quality Sensors |

#### Sensors.Environmental.GroPoint

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Gplp2625](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.GroPoint.Gplp2625) | Gplp2625 environmental driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Gplp2625_S_2](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.GroPoint.Gplp2625_S_2) | Gplp2625_S_2 environmental driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Gplp2625_S_3](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.GroPoint.Gplp2625_S_3) | Gplp2625_S_3 environmental driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Gplp2625_S_4](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.GroPoint.Gplp2625_S_4) | Gplp2625_S_4 environmental driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Gplp2625_S_5](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.GroPoint.Gplp2625_S_5) | Gplp2625_S_5 environmental driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Gplp2625_S_6](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.GroPoint.Gplp2625_S_6) | Gplp2625_S_6 environmental driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Gplp2625_S_8](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.GroPoint.Gplp2625_S_8) | Gplp2625_S_8 environmental driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Gplp2625_S_T_2](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.GroPoint.Gplp2625_S_T_2) | Gplp2625_S_T_2 environmental driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Gplp2625_S_T_3](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.GroPoint.Gplp2625_S_T_3) | Gplp2625_S_T_3 environmental driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Gplp2625_S_T_4](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.GroPoint.Gplp2625_S_T_4) | Gplp2625_S_T_4 environmental driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Gplp2625_S_T_5](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.GroPoint.Gplp2625_S_T_5) | Gplp2625_S_T_5 environmental driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Gplp2625_S_T_6](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.GroPoint.Gplp2625_S_T_6) | Gplp2625_S_T_6 environmental driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Gplp2625_S_T_8](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.GroPoint.Gplp2625_S_T_8) | Gplp2625_S_T_8 environmental driver |

#### Sensors.Environmental.Keller.XLine

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [KellerTransducer](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.KellerTransducer) | KellerTransducer keller driver |

#### Sensors.Environmental.Scd4x

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Scd40](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.Scd40) | Scd40 environmental driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Scd41](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.Scd41) | Scd41 environmental driver |

#### Sensors.Environmental.Y4000

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Y4000](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.Y4000) | Y4000 environmental driver |

### Flow

| Status | Driver | Description |
|--------|--------|-------------|

#### Sensors.Flow.HallEffect

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Gr105](/docs/api/Meadow.Foundation/Meadow.Peripherals.Sensors.Flow.Gr105) | Gr105 flow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Gr201](/docs/api/Meadow.Foundation/Meadow.Peripherals.Sensors.Flow.Gr201) | Gr201 flow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Gr216](/docs/api/Meadow.Foundation/Meadow.Peripherals.Sensors.Flow.Gr216) | Gr216 flow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [YfB1](/docs/api/Meadow.Foundation/Meadow.Peripherals.Sensors.Flow.YfB1) | YfB1 flow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [YfB10](/docs/api/Meadow.Foundation/Meadow.Peripherals.Sensors.Flow.YfB10) | YfB10 flow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [YfB2](/docs/api/Meadow.Foundation/Meadow.Peripherals.Sensors.Flow.YfB2) | YfB2 flow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [YfB3](/docs/api/Meadow.Foundation/Meadow.Peripherals.Sensors.Flow.YfB3) | YfB3 flow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [YfB6](/docs/api/Meadow.Foundation/Meadow.Peripherals.Sensors.Flow.YfB6) | YfB6 flow driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [YfB9](/docs/api/Meadow.Foundation/Meadow.Peripherals.Sensors.Flow.YfB9) | YfB9 flow driver |

### Gnss

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Gnss](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Gnss) | BG95-M3 Cellular / GNSS controller |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Gnss.Mt3339](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Gnss.Mt3339) | MediaTek MT3339 serial GNSS / GPS controller |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Gnss.NeoM8](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Gnss.NeoM8) | NEO M8 SPI, I2C, and serial GNSS / GPS controller |

### Hid

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Hid.ANONavigationEncoder](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.ANONavigationEncoder) | GPIO ANO Directional Navigation and Scroll Wheel Rotary Encoder |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Hid.As5013](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.As5013) | I2C Hall sensor IC for smart navigation |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Hid.Bbq10Keyboard](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.Bbq10Keyboard) | BB Q10 I2C Keyboard |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Hid.Keyboard](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.Keyboard) | Standard 108-key PC keyboard |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Hid.Mpr121](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.Mpr121) | Freescale Semiconductor MPR121 I2C capacitive keypad controller |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Hid.Tsc2004](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.Tsc2004) | Tsc2004 I2C capacitive touch screen |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Hid.Xpt2046](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.Xpt2046) | Xpt2046 SPI, 4-wire resistive touch screen controller |

#### Sensors.Hid.WiiExtensionControllers

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [NesClassicController](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.NesClassicController) | NesClassicController HID driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [SnesClassicController](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.SnesClassicController) | SnesClassicController HID driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [WiiClassicController](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.WiiClassicController) | WiiClassicController HID driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [WiiClassicControllerPro](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.WiiClassicControllerPro) | WiiClassicControllerPro HID driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [WiiNunchuck](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Hid.WiiNunchuck) | WiiNunchuck HID driver |

### Light

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Alspt19315C](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Alspt19315C) | ALS-PT19-315C analog light sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.AnalogSolarIntensityGauge](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.AnalogSolarIntensityGauge) | Analog solar intensity sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Bh1745](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Bh1745) | Bh1745 I2C luminance and color light sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Bh1750](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Bh1750) | Bh1750 I2C luminance and color light sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Max44009](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Max44009) | Max44009 I2C ultraviolet and ambient light sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Si1145](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Si1145) | SI1145 I2C ultraviolet and ambient light sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Temt6000](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Temt6000) | Temt6000 analog ambient light sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Tsl2591](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Tsl2591) | Tsl2591 I2C high dynamic range light sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Light.Veml7700](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.Veml7700) | Veml7700 I2C high accuracy ambient light sensor |

### LoadCell

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.LoadCell.Hx711](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.LoadCell.Hx711) | Hx711 digital load cell amplifier |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.LoadCell.Nau7802](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.LoadCell.Nau7802) | NAU7802 I2C 24-Bit dual channel analog to digital converter |

### Moisture

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Moisture.Capacitive](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Moisture.Capacitive) | Analog capacitive soil moisture sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Moisture.Fc28](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Moisture.Fc28) | FC28 analog soil moisture sensor |

### Motion

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: in-progress" src="https://img.shields.io/badge/InProgress-yellow"/> | [Sensors.Motion.Apds9960](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Apds9960) | APDS9960 I2C proximity, light, color and gesture sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Bmi270](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Bmi270) | BMI270 I2C 6-axis accelerometer and motion sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Bno055](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Bno055) | Bosch BNO055 I2C 9 axis absolute orientation sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Hcsens0040](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Hcsens0040) | HCSENS0040 digital microwave motion sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Hmc5883](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Hmc5883) | Hmc5883 / Qmc5883 I2C digital compass |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Lis2Mdl](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Lis2Mdl) | LIS2MDL I2C 3-axis magnetometer |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Lis3mdl](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Lis3mdl) | Lis3mdl I2C 3-axis magnetometer |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Lsm303agr](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Lsm303agr) | Lsm303agr I2C 6-axis accelerometer and magnetometer |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Lsm6dsox](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Lsm6dsox) | Lsm6Dsox I2C 6-axis accelerometer and gyroscope |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Mag3110](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Mag3110) | Freescale MAG3110 I2C 3 axis magnetometer |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Mma7660fc](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Mma7660fc) | Mma7660fc I2C 3-axis accelerometer |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Mmc5603](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Mmc5603) | MMC5603 I2C 3 axis digital magnetometer |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.Mpu6050](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Mpu6050) | Mpu6050 I2C MEMS 3 axis gyroscope accelerometer motion sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Motion.ParallaxPir](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.ParallaxPir) | Parallax PIR analog motion sensor |

#### Sensors.Motion.Adxl3xx

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Adxl335](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl335) | Adxl335 motion driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Adxl337](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl337) | Adxl337 motion driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Adxl343](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl343) | Adxl343 motion driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Adxl345](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl345) | Adxl345 motion driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Adxl362](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl362) | Adxl362 motion driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Adxl377](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl377) | Adxl377 motion driver |

### Power

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Power.CurrentTransducer](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Power.CurrentTransducer) | Current transducer library |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Power.Spm1x](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Power.Spm1x) | Temco Controls' SPM1-X Modbus Single-Phase Power Meter library |

#### Sensors.Power.Ina2xx

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ina219](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Power.Ina219) | Ina219 power driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ina228](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Power.Ina228) | Ina228 power driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Ina260](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Power.Ina260) | Ina260 power driver |

### Radio

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Radio.Rfid.IDxxLA](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Radio.Rfid.IDxxLA) | IDxxLA Serial radio frequency ID readers |

### Sound

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Sound.Ky038](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Sound.Ky038) | KY-038 analog sound sensor |

### Temperature

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Temperature.Adt7410](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Adt7410) | Adt7410 I2C temperature sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Temperature.Lm75](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Lm75) | Lm75 I2C temperature sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Temperature.Max6675](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Max6675) | Max6675 SPI thermocouple temperature sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Temperature.Mcp9808](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Mcp9808) | MCP9808 I2C temperature sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Temperature.Mlx90614](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Mlx90614) | Mlx90614 I2C temperature sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Temperature.Pct2075](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Pct2075) | Pct2075 I2C temperature sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Temperature.Thermistor](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Thermistor) | Thermistor analog temperature sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Temperature.Tmp102](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Tmp102) | TMP102 I2C temperature sensor |

#### Sensors.Temperature.Mcp960x

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp9600](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Mcp9600) | Mcp9600 temperature driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Mcp9601](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.Mcp9601) | Mcp9601 temperature driver |

### Volume

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Volume.ResistiveTankLevelSender](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Volume.ResistiveTankLevelSender) | A generic resistive tank level sending unit |

### Weather

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Weather.SwitchingAnemometer](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Weather.SwitchingAnemometer) | Digital Switching Anemometer wind speed sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Weather.SwitchingRainGauge](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Weather.SwitchingRainGauge) | GPIO rain gauge sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Weather.WindVane](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Weather.WindVane) | WindVane analog wind direction sensor |


### Grove

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Audio.Buzzer](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Audio.Buzzer) | Grove PWM Buzzer |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Audio.Speaker](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Audio.Speaker) | Grove PWM Speaker |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Displays.4-DigitDisplay](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Displays.4-DigitDisplay) | Grove GPIO 4 digit display |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Displays.LCD](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Displays.LCD) | Grove I2C LCD display |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Displays.OLEDDisplay1_12inch](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Displays.OLEDDisplay1_12inch) | Grove I2C OLED 1.12" display |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.HID.VibrationMotor](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.HID.VibrationMotor) | Grove GPIO vibration motor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Leds.LEDSocket](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Leds.LEDSocket) | Grove GPIO led |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Relays.4-ChannelSpdtRelay](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Relays.4-ChannelSpdtRelay) | Grove I2C 4-Channel SPDT Relay |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Relays.Relay](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Relays.Relay) | Grove Relay driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.RTCs.RTC](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.RTCs.RTC) | Grove I2C real time clock (DS1307) |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Atmospheric.TemperatureHumiditySensor_HighAccuracyMini](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Atmospheric.TemperatureHumiditySensor_HighAccuracyMini) | Grove I2C Temperature and Humidity sensor - High Accuracy and Mini (TH02) |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Buttons.Button](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Buttons.Button) | Grove GPIO momentary push button |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Buttons.LEDButton](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Buttons.LEDButton) | Grove GPIO momentary push button with LED (blue, red, or yellow) |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Buttons.Touch](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Buttons.Touch) | Grove GPIO capacitive touch button |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Environmental.FlameSensor](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Environmental.FlameSensor) | Grove GPIO flame sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Environmental.WaterSensor](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Environmental.WaterSensor) | Grove Analog water level sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Hid.ThumbJoystick](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Hid.ThumbJoystick) | Grove analog 2-axis ThumbJoystick |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Light.LightSensor](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Light.LightSensor) | Grove light sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Light.LineFinder](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Light.LineFinder) | Grove line finder sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Moisture.MoistureSensor](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Moisture.MoistureSensor) | Grove analog moisture sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Motion.3-AxisDigitalAccelerometer_16g](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Motion.3-AxisDigitalAccelerometer_16g) | Grove I2C 3-Axis digital accelerometer |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Motion.3-AxisDigitalAccelerometer1_5g](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Motion.3-AxisDigitalAccelerometer1_5g) | Grove I2C 3-Axis digital accelerometer |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Motion.3-AxisDigitalCompass](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Motion.3-AxisDigitalCompass) | Grove I2C 3-axis digital compass |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Motion.MiniPIRMotionSensor](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Motion.MiniPIRMotionSensor) | Grove GPIO MiniPIRMotionSensor (Parallax PIR) |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Motion.PIRMotionSensor](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Motion.PIRMotionSensor) | Grove GPIO PIRMotionSensor (Parallax PIR) |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Motion.VibrationSensor](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Motion.VibrationSensor) | Grove GPIO vibration sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Rotary.RotaryAngleSensor](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Rotary.RotaryAngleSensor) | Grove rotary angle sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Sound.LoudnessSensor](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Sound.LoudnessSensor) | Grove loudness sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Sound.SoundSensor](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Sound.SoundSensor) | Grove sound sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Switches.MagneticSwitch](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Switches.MagneticSwitch) | Grove GPIO magetic reed switch sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Switches.SwitchP](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Switches.SwitchP) | Grove GPIO single pole dual throw slide switch |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Switches.Tilt](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Switches.Tilt) | Grove GPIO tilt switch |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Sensors.Temperature.TemperatureSensor](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Sensors.Temperature.TemperatureSensor) | Grove temperature sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Grove.Servos.Servo](/docs/api/Meadow.Foundation.Grove/Meadow.Foundation.Grove.Servos.Servo) | Grove PWM servo motor |

### FeatherWings

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.CanBusWing](/docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings.CanBusWing) | AdaFruit CAN Bus FeatherWing |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.CharlieWing](/docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings.CharlieWing) | AdaFruit CharlieWing Matrix LED FeatherWing |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.DotstarWing](/docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings.DotstarWing) | AdaFruit DotstarWing LED FeatherWing |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.GPSWing](/docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings.GPSWing) | AdaFruit GPSWing GPS FeatherWing |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.KeyboardWing](/docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings.KeyboardWing) | BBQ 10 Keyboard FeatherWing |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.LedMatrix8x16Wing](/docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings.LedMatrix8x16Wing) | AdaFruit HT16K33 8x16 Matrix LED FeatherWing |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.MotorWing](/docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings.MotorWing) | AdaFruit MotorWing motor controller FeatherWing |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.NeoPixelWing](/docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings.NeoPixelWing) | AdaFruit NeoPixel FeatherWing |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.NineDofImuWing](/docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings.NineDofImuWing) | AdaFruit I2C ST 9-DoF IMU FeatherWing |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.OLED128x32Wing](/docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings.OLED128x32Wing) | AdaFruit OLED 128x32 monochrome display FeatherWing |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.OLED128x64Wing](/docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings.OLED128x64Wing) | AdaFruit OLED 128x64 monochrome display FeatherWing |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [FeatherWings.ServoWing](/docs/api/Meadow.Foundation.FeatherWings/Meadow.Foundation.FeatherWings.ServoWing) | AdaFruit ServoWing servo controller FeatherWing |

### mikroBUS

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [mikroBUS.Displays.C16x9](/docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS.Displays.C16x9) | MikroElectronika I2C 16x9 Click LED board |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [mikroBUS.Displays.C8800Retro](/docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS.Displays.C8800Retro) | MikroElectronika Altair 8800 I2C led driver and keyscan MikroBus retro click board |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [mikroBUS.Displays.C8x8](/docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS.Displays.C8x8) | MikroElectronika SPI 8x8 Click LED board |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [mikroBUS.Sensors.Atmospheric.CTempHum15](/docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS.Sensors.Atmospheric.CTempHum15) | MikroElectronika I2C Temp and Hum 15 temperature and humidity click board |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [mikroBUS.Sensors.Atmospheric.CThermo13](/docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS.Sensors.Atmospheric.CThermo13) | MikroElectronika I2C Thermo 13 temperature click board |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [mikroBUS.Sensors.Buttons.CButton](/docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS.Sensors.Buttons.CButton) | MikroElectronika PWM GPIO Led Button MikroBus click board |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [mikroBUS.Sensors.C420R](/docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS.Sensors.C420R) | MikroElectronika SPI 4-20mA Receiver click board |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [mikroBUS.Sensors.C420T](/docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS.Sensors.C420T) | MikroElectronika SPI 4-20mA Transmitter click board |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [mikroBUS.Sensors.CACCurrent](/docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS.Sensors.CACCurrent) | MikroElectronika SPI AC Current click board |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [mikroBUS.Sensors.CLEM](/docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS.Sensors.CLEM) | MikroElectronika SPI LEM AC Current click board |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [mikroBUS.Sensors.Gnss.CGNSS10](/docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS.Sensors.Gnss.CGNSS10) | MikroElectronika Serial I2C SPI Neo M8 GPS / GNSS 10 MikroBus click board |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [mikroBUS.Sensors.Gnss.CGNSS5](/docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS.Sensors.Gnss.CGNSS5) | MikroElectronika Serial I2C Neo M8 GPS / GNSS 5 MikroBus click board |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [mikroBUS.Sensors.Hid.CJoystick](/docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS.Sensors.Hid.CJoystick) | MikroElectronika I2C Joystick MikroBus click board |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [mikroBUS.Sensors.MBus.CMBusMaster](/docs/api/Meadow.Foundation.mikroBUS/Meadow.Foundation.mikroBUS.Sensors.MBus.CMBusMaster) | MikroElectronika Serial M-Bus MikroBus click board |

## Composite Devices

### Relays

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Relays.ElectromagneticRelayModule](/docs/api/Meadow.Foundation.CompositeDevices/Meadow.Foundation.Relays.ElectromagneticRelayModule) | I2C 4 Channel Electromagnetic Relay Module |

### Camera

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Camera.UsefulSensors.PersonSensor](/docs/api/Meadow.Foundation.CompositeDevices/Meadow.Foundation.Sensors.Camera.UsefulSensors.PersonSensor) | Useful Sensor's Person Sensor I2C optical person sensor |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [Sensors.Camera.UsefulSensors.TinyCodeReader](/docs/api/Meadow.Foundation.CompositeDevices/Meadow.Foundation.Sensors.Camera.UsefulSensors.TinyCodeReader) | Useful Sensor's Tiny Code Reader I2C optical QR code reader |


#### Switches.ChromaTek

| Status | Driver | Description |
|--------|--------|-------------|
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [LatchingButton](/docs/api/Meadow.Foundation/Meadow.Foundation.Switches.ChromaTek.LatchingButton) | LatchingButton switche driver |
| <img alt="Status badge: working" src="https://img.shields.io/badge/Working-brightgreen"/> | [MomentaryButton](/docs/api/Meadow.Foundation/Meadow.Foundation.Switches.ChromaTek.MomentaryButton) | MomentaryButton switche driver |
