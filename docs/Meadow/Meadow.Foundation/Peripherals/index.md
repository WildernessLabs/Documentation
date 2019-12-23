---
layout: Meadow
title: Meadow.Foundation Peripherals Library
subtitle: Drivers for hardware peripherals such as sensors, buttons, displays, and more!
---

The Meadow.Foundation peripherals library is an [open source](https://github.com/WildernessLabs/Meadow.Foundation) repository of drivers for various peripherals such as sensors, motors, displays, cameras, and other peripherals which make it easy to add hardware to your Meadow application.

The peripherals are split into two groups; the first group is general, core peripherals that are included in the main [Meadow.Foundation](https://www.fuget.org/packages/Meadow.Foundation) NuGet package. The second group are additional drivers that are available via separate NuGet packages to keep the core size to a minimum.

## Core Peripherals

### LEDs

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| [Led](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.Led.html) | Simple LED | Yes | |
| [PwmLed](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.PwmLed.html) | Pulse-Width-Modulation powered LED | Yes | |  
| [RgbPwmLed](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.RgbPwmLed.html) | Pulse-Width-Modulation powered RGB LED | Yes | |
| [LedBarGraph](/docs/api/Meadow.Foundation/Meadow.Foundation.Leds.LedBarGraph.html) | Generic segmented LED bar | Yes | |

### Motors

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| [HBridgeMotor](/docs/api/Meadow.Foundation/Meadow.Foundation.Motors.HBridgeMotor.html) | Generic h-bridge motor controller | Yes | |

### Relays

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| [Relay](/docs/api/Meadow.Foundation/Meadow.Foundation.Relays.Relay.html) | Electrically isolated switch | Yes | |

### Speakers

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| [PiezoSpeaker](/docs/api/Meadow.Foundation/Meadow.Foundation.Audio.PiezoSpeaker.html) | A piezo-electric speaker capable of generating tones via PWM | Yes | |

### Sensors

#### Buttons

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| [PushButton](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Buttons.PushButton.html) | Simple push-button | Yes | Requires external [PU/PD resistor](http://developer.wildernesslabs.co/Hardware/Tutorials/Electronics/Part4/PullUp_PullDown_Resistors/) |

#### Rotary Encoders

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| [RotaryEncoder](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Rotary.RotaryEncoder.html) | A simple rotary encoder | | |
| [RotaryEncoderWithButton](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Rotary.RotaryEncoderWithButton.html) | A rotary encoder that includes a push button | | Requires external [PU/PD resistor](http://developer.wildernesslabs.co/Hardware/Tutorials/Electronics/Part4/PullUp_PullDown_Resistors/) |

#### Switches

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| [SpstSwitch](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Switches.SpstSwitch.html) | A simple single-pole, single-throw (SPST) switch | Yes | Requires external [PU/PD resistor](http://developer.wildernesslabs.co/Hardware/Tutorials/Electronics/Part4/PullUp_PullDown_Resistors/) |
| [SpdtSwitch](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Switches.SpdtSwitch.html) | A simple single-pole, dual-throw (SPDT) switch | | |
| [DipSwitch](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Switches.DipSwitch.html)  | A multi-pole dip switch | | Requires external [PU/PD resistor](http://developer.wildernesslabs.co/Hardware/Tutorials/Electronics/Part4/PullUp_PullDown_Resistors/) |

#### Temperature

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| [AnalogTemperature](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.AnalogTemperature.html) | Analog temperature sensor (TMP35 / TMP36 / TMP37 / LM35) | Yes | |

#### Hall Effect

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| [LinearHallEffectTachometer](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.HallEffect.LinearHallEffectTachometer.html) | Hall Effect Linear Tachometer sensor | | |

## Additional Peripherals

### Audio

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| [TEA5767](/docs/api/Meadow.Foundation/Meadow.Foundation.Audio.Radio.TEA5767.html) | FM radio module | Yes | |

### Display and Graphics Drivers

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| [GraphicsLibrary](/docs/api/Meadow.Foundation/Meadow.Foundation.Graphics.GraphicsLibrary.html) | General purpose graphics library | Yes | |
| [CharacterDisplay](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Lcd.CharacterDisplay.html) | LCD display | Yes | digital IO only |
| [ePaper](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.ePaper.html) | ePaper/eInk display Library | Yes | |
| [MAX7219](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Max7219.html) | MAX7219 led display driver Library | Yes | |
| [PCD8544](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Pcd8544.html) | PCD8544 LCD driver (Nokia 5110) | Yes | |
| [SerialLCD](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.SerialLCD.html) | SparkFun serial LCD backpack driver | | Blocked on serial |
| [SSD1306](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.SSD1306.html) | OLED single color display | Yes | |
| [SevenSegment](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.LED.SevenSegment.html) | Seven Segment display | Yes | |
| [ST7565](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.St7565.html) | Single color positive LCD | Yes | |
| [TM1637](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tm1637.html) | Segmented LCD display | Yes | |
| [TftSpi](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.Tft.html) | Thin Film Transistor (TFT) SPI Library | Yes | |
| [TextDisplayMenu](/docs/api/Meadow.Foundation/Meadow.Foundation.Displays.TextDisplayMenu.html) | Text Display Menu for LCD displays | | |

### Integrated Circuits (ICs)

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| [AT24Cxx](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.EEPROM.AT24Cxx.html) | AT24Cxx Family of EEPROMs including AT24C32 | | |
| [x74595](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.x74595.html) | 74595 shift register for digital output expansion | |  |
| [MCP23008](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Mcp23008.html) | MCP23008 for digital output expansion | | |
| [HT16K33](/docs/api/Meadow.Foundation/Meadow.Foundation.ICs.IOExpanders.Ht16K33.html) | HT16K33 for digital output expansion | Yes | |

### Real Time Clocks (RTCs)

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| [DS323x](/docs/api/Meadow.Foundation/Meadow.Foundation.RTCs.DS323x.html) | Real Time Clock modules | | |
| [SD1307](/docs/api/Meadow.Foundation/Meadow.Foundation.RTCs.SD1307.html) | Real Time Clock SD1307 | Yes | |

### Sensors

#### Atmospheric (Temperature, Humidity, Barometer, Altitude) Sensors

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| [BME280](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Bme280.html) | I2C/SPI temperature, humidity, and pressure sensor | Yes | |
| [BMP085](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.Bmp085.html) | I2C pressure sensor | Yes | |
| [GroveTH02](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.GroveTH02.html) | Grove TH02 temperature and humidity sensor | | |
| [HIH6130](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.HIH6130.html) | I2C temperature and humidity sensor | Yes | |
| [HTU21D](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.HIH6130.html) | I2C temperature and humidity sensor | Yes | |
| [SHT31D](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.SHT31D.html) | I2C temperature and humidity sensor | Yes | |
| [SI70xx](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Atmospheric.SI70xx.html) |  I2C temperature and humidity sensor | Yes | |
| [MPL115A2](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Barometric.MPL115A2.html) | Barometric sensor | | |
| [MPL3115A2](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Barometric.MPL3115A2.html) | Barometric sensor | | |
| [DS18B20](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.DS18B20.html) | Temperature sensor | Blocked | 1-Wire bus |
| [TMP102](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Temperature.TMP102.html) | I2C temperature sensor | Yes | |

#### Distance Sensors

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| [HCSR04](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.HCSR04.html) | Sonic distance sensor | Blocked | |
| [HYSRF05](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.HYSRF05.html) | Sonic distance sensor | Blocked | |
| [SFSR02](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Distance.SFSR02.html) | Sonic distance sensor | Blocked | |

#### GPS Sensors & Libraries

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| [NMEA](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.GPS.NMEA.html) | Generic GPS sentence decoder library | Blocked | |

#### Light Sensors

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| [ALSPT19315C](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.ALSPT19315C.html) | Analog light sensor | Yes | |
| [SI1145](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.SI1145.html) | I2C infrared, ultraviolet, and ambient light sensor | | |
| [TSL2561](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Light.TSL2561.html) | I2C infrared-compensated light sensor | | |

#### Soil Moisture Sensors

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| [Capacitive](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Moisture.Capacitive.html) | Capacitive Soil Moisture Sensor | Yes | |
| [FC28](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Moisture.FC28.html) | Soil Moisture Sensor | Yes | |

#### Motion and Orientation Sensors

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| [ADXL335](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl335.html) | Analog triple axis, +/-3g accelerometer | Yes | |
| [ADXL337](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl337.html) | Analog triple axis, +/-3g accelerometer | Yes | |
| [ADXL345](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl345.html) | I2C triple axis accelerometer, +/-16g accelerometer | Yes | |
| [ADXL362](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl362.html) | SPI low power, 3-axis MEMS accelerometer | | |
| [ADXL377](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Adxl377.html) | Analog triple axis, +/-200g accelerometer | Yes | |
| [BNO055](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Bno055.html) | I2C 9-Axis absolute orientation sensor | | |
| [MPU6050](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Mpu6050.html) | I2C 6-Axis absolute orientation sensor | Yes | |
| [MAG3110](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.Mag3110.html) | I2C three axis magnetometer | | |
| [ParallaxPir](/docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Motion.ParallaxPir.html) | Parallax PIR Rev B digital motion detector | Yes | |

### Servos

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| [Servo](/docs/api/Meadow.Foundation/Meadow.Foundation.Servos.Servo.html) | Generic servo library | Yes | |