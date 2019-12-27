---
layout: Meadow
title: Meadow.Foundation Peripherals Library
subtitle: Drivers for hardware peripherals such as sensors, buttons, displays, and more!
---

The Meadow.Foundation peripherals library is an [open source](https://github.com/WildernessLabs/Meadow.Foundation) repository of drivers for various peripherals such as sensors, motors, displays, cameras, and other peripherals which make it easy to add hardware to your Meadow application.

The peripherals are split into two groups; the first group is general, core peripherals that are included in the main [Meadow.Foundation](https://www.fuget.org/packages/Meadow.Foundation) NuGet package. The second group are additional drivers that are available via separate NuGet packages to keep the core size to a minimum.

## Core Peripherals

| Status | Driver | Description | Notes |
|--------|--------|-------------|-------|
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [Led](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.Led.html) | Simple LED | |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [PwmLed](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.PwmLed.html) | Pulse-Width-Modulation powered LED | |  
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [RgbPwmLed](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.RgbPwmLed.html) | Pulse-Width-Modulation powered RGB LED | |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [LedBarGraph](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.LedBarGraph.html) | Generic segmented LED bar | |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [HBridgeMotor](/docs/api/Meadow.Foundation/Meadow.Foundation.Motors.HBridgeMotor.html) | Generic h-bridge motor controller | |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [Relay](/docs/api/Meadow.Foundation/Meadow.Foundation.Relays.Relay.html) | Electrically isolated switch | |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [PushButton](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Buttons.PushButton.html) | Simple push-button | Requires external [PU/PD resistor](http://developer.wildernesslabs.co/Hardware/Tutorials/Electronics/Part4/PullUp_PullDown_Resistors/) |
| <img src="https://img.shields.io/badge/Pending-yellow" />      | [DigitalTachometer](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.HallEffect.LinearHallEffectTachometer.html) | Hall Effect Linear Tachometer sensor | |
| <img src="https://img.shields.io/badge/Pending-yellow" />      | [AnalogJoystick](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Rotary.RotaryEncoder.html) | A generic analog joystick | | 
| <img src="https://img.shields.io/badge/Pending-yellow" />      | [RotaryEncoder](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Rotary.RotaryEncoder.html) | A simple rotary encoder | | 
| <img src="https://img.shields.io/badge/Pending-yellow" />      | [RotaryEncoderWithButton](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Rotary.RotaryEncoderWithButton.html) | A rotary encoder that includes a push button | Requires external [PU/PD resistor](http://developer.wildernesslabs.co/Hardware/Tutorials/Electronics/Part4/PullUp_PullDown_Resistors/) |
| <img src="https://img.shields.io/badge/Pending-yellow" />      | [DipSwitch](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Switches.DipSwitch.html)  | A multi-pole dip switch | Requires external [PU/PD resistor](http://developer.wildernesslabs.co/Hardware/Tutorials/Electronics/Part4/PullUp_PullDown_Resistors/) |
| <img src="https://img.shields.io/badge/Pending-yellow" />      | [SpdtSwitch](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Switches.SpdtSwitch.html) | A simple single-pole, dual-throw (SPDT) switch | |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [SpstSwitch](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Switches.SpstSwitch.html) | A simple single-pole, single-throw (SPST) switch | Requires external [PU/PD resistor](http://developer.wildernesslabs.co/Hardware/Tutorials/Electronics/Part4/PullUp_PullDown_Resistors/) |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [AnalogTemperature](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.AnalogTemperature.html) | Analog temperature sensor (TMP35 / TMP36 / TMP37 / LM35) | |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [PiezoSpeaker](/docs/api/Meadow.Foundation/Meadow.Foundation.Audio.PiezoSpeaker.html) | A piezo-electric speaker capable of generating tones via PWM | |

## External Peripherals

### Audio

| Status | Driver | Description | 
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [Tea5767](/docs/api/Meadow.Foundation/Meadow.Foundation.Audio.Radio.TEA5767.html) | FM radio module |

### Display and Graphics Drivers

| Status | Driver | Description | Notes |
|--------|--------|-------------|-------|
| <img src="https://img.shields.io/badge/Working-orange" />      | [ePaper](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.ePaper.html) | ePaper/eInk display Library | Slow due interpret mode |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [CharacterDisplay](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Lcd.CharacterDisplay.html) | LCD display | digital IO only |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [SevenSegment](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.LED.SevenSegment.html) | Seven Segment display | |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [Max7219](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Max7219.html) | MAX7219 led display driver Library | |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [Pcd8544](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Pcd8544.html) | PCD8544 LCD driver (Nokia 5110) | |
| <img src="https://img.shields.io/badge/Pending-yellow" />      | [SerialLCD](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.SerialLCD.html) | SparkFun serial LCD backpack driver | |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [Ssd1306](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.SSD1306.html) | OLED single color display | |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [St7565](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.St7565.html) | Single color positive LCD | |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [TftSpi](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft.html) | Thin Film Transistor (TFT) SPI Library | |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [Tm1637](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tm1637.html) | Segmented LCD display | |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [GraphicsLibrary](/docs/api/Meadow.Foundation/Meadow.Foundation.Graphics.GraphicsLibrary.html) | General purpose graphics library | |
| <img src="https://img.shields.io/badge/Pending-yellow" />      | [TextDisplayMenu](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.TextDisplayMenu.html) | Text Display Menu for LCD displays | |

### FeatherWings

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Pending-yellow" />      | [JoyWing](/docs/api/Meadow.Foundation/Meadow.Foundation.FeatherWings.JoyWing.html) | A 2-axis joystick and 5 momentary buttons gamepad |

### Integrated Circuits (ICs)

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Pending-yellow" />      | [AT24Cxx](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.EEPROM.AT24Cxx.html) | AT24Cxx Family of EEPROMs including AT24C32 |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [HT16K33](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Ht16K33.html) | HT16K33 for digital output expansion |
| <img src="https://img.shields.io/badge/Pending-yellow" />      | [MCP23008](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp23008.html) | MCP23008 for digital output expansion |
| <img src="https://img.shields.io/badge/Pending-yellow" />      | [x74595](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.x74595.html) | 74595 shift register for digital output expansion |

### Motors

| Status | Driver | Description | Notes |
|--------|--------|-------------|-------|
| <img src="https://img.shields.io/badge/Working-orange" />      | [Uln2003](/docs/api/Meadow.Foundation/Meadow.Foundation.Motors.Stepper.Uln2003.html) | A 2-axis joystick and 5 momentary buttons gamepad | Slow due interpret mode |

### Real Time Clocks (RTCs)

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [SD1307](/docs/api/Meadow.Foundation/Meadow.Foundation.RTCs.SD1307.html) | Real Time Clock SD1307 |
| <img src="https://img.shields.io/badge/Pending-yellow" />      | [DS323x](/docs/api/Meadow.Foundation/Meadow.Foundation.RTCs.DS323x.html) | Real Time Clock modules |

### Sensors

#### Atmospheric (Temperature, Humidity, Barometer, Altitude) Sensors

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [Bme280](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Bme280.html) | I2C/SPI temperature, humidity, and pressure sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [Bmp085](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Bmp085.html) | I2C pressure sensor |
| <img src="https://img.shields.io/badge/Pending-yellow" />      | [GroveTH02](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.GroveTH02.html) | Grove TH02 temperature and humidity sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [Hih6130](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.HIH6130.html) | I2C temperature and humidity sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [Htu21d](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.HIH6130.html) | I2C temperature and humidity sensor |
| <img src="https://img.shields.io/badge/Pending-yellow" />      | [MPL115A2](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Barometric.MPL115A2.html) | Barometric sensor |
| <img src="https://img.shields.io/badge/Pending-yellow" />      | [MPL3115A2](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Barometric.MPL3115A2.html) | Barometric sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [Sht31D](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.SHT31D.html) | I2C temperature and humidity sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [Si70xx](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.SI70xx.html) |  I2C temperature and humidity sensor |

#### Cameras

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Pending-yellow" /> | [Vc0706](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Camera.Vc0706.html) | A VGA CMOS camera sensor |
| <img src="https://img.shields.io/badge/Pending-yellow" /> | [ArducamMini](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Camera.ArducamMini.html) | A high definition 2MP SPI camera |

#### Distance Sensors

| Status | Driver | Description | Notes |
|--------|--------|-------------|-------|
| <img src="https://img.shields.io/badge/Blocked-red" /> | [HCSR04](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.HCSR04.html) | Sonic distance sensor   | Needs AOT compilation |
| <img src="https://img.shields.io/badge/Blocked-red" /> | [HYSRF05](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.HYSRF05.html) | Sonic distance sensor | Needs AOT compilation |
| <img src="https://img.shields.io/badge/Blocked-red" /> | [SFSR02](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.SFSR02.html) | Sonic distance sensor   | Needs AOT compilation |

#### GPS Sensors & Libraries

| Status | Driver | Description | Notes |
|--------|--------|-------------|-------|
| <img src="https://img.shields.io/badge/Blocked-red" /> | [NMEA](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.GPS.NMEA.html) | Generic GPS sentence decoder library | |

#### Light Sensors

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [ALSPT19315C](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.ALSPT19315C.html) | Analog light sensor |
| <img src="https://img.shields.io/badge/Pending-yellow" />      | [Si1145](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.SI1145.html) | I2C infrared, ultraviolet, and ambient light sensor |
| <img src="https://img.shields.io/badge/Pending-yellow" />      | [Tsl2561](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.TSL2561.html) | I2C infrared-compensated light sensor |

#### Soil Moisture Sensors

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [Capacitive](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Moisture.Capacitive.html) | Capacitive Soil Moisture Sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [Fc28](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Moisture.FC28.html) | Soil Moisture Sensor |

#### Motion and Orientation Sensors

| Status | Driver | Description |
|--------|--------|-------------|
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [Adxl335](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl335.html) | Analog triple axis, +/-3g accelerometer |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [Adxl337](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl337.html) | Analog triple axis, +/-3g accelerometer |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [Adxl345](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl345.html) | I2C triple axis accelerometer, +/-16g accelerometer |
| <img src="https://img.shields.io/badge/Pending-yellow" />      | [Adxl362](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl362.html) | SPI low power, 3-axis MEMS accelerometer |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [Adxl377](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl377.html) | Analog triple axis, +/-200g accelerometer |
| <img src="https://img.shields.io/badge/Pending-yellow" />      | [Apds9960](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Bno055.html) | I2C 9-Axis absolute orientation sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [Bno055](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Bno055.html) | I2C 9-Axis absolute orientation sensor |
| <img src="https://img.shields.io/badge/Pending-yellow" />      | [Mag3110](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Mag3110.html) | I2C three axis magnetometer |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [Mpu6050](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Mpu6050.html) | I2C 6-Axis absolute orientation sensor |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [ParallaxPir](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.ParallaxPir.html) | Parallax PIR Rev B digital motion detector |

#### Temperature Sensors

| Status | Driver | Description | Notes |
|--------|--------|-------------|-------|
| <img src="https://img.shields.io/badge/Blocked-red" />         | [Ds18B20](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.DS18B20.html) | Temperature sensor | 1-Wire bus |
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [Tmp102](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.TMP102.html) | I2C temperature sensor | |

### Servos

| Status | Driver | Description | Notes |
|--------|--------|-------------|-------|
| <img src="https://img.shields.io/badge/Working-brightgreen" /> | [Servo](/docs/api/Meadow.Foundation/Meadow.Foundation.Servos.Servo.html) | Generic servo library  | |