# Meadow.Foundation Peripherals Library

The Meadow.Foundation peripherals library is an [open source](https://github.com/WildernessLabs/Meadow.Foundation) repository of drivers for various peripherals such as sensors, motors, displays, cameras, and other peripherals which make it easy to add hardware to your Meadow application.

The peripherals are split into two groups; the first group is general, core peripherals that are included in the main [Meadow.Foundation](https://www.fuget.org/packages/Meadow.Foundation) Nuget package. The second group are additional drivers that are available via separate Nuget packages to keep the core size to a minimum.

**Note:** While nearly all Meadow.Foundation drivers have been ported from our earlier [Netduino.Foundation](http://Netduino.Foundation) work, few are up and working right now, and this page will be updated as we test and write samples for them.


## Core Peripherals

### LEDs

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| @"Meadow.Foundation.LEDs.Led"             | Simple LED | Yes | |
| @"Meadow.Foundation.LEDs.PwmLed"          | Pulse-Width-Modulation powered LED | Yes | SoftPwm only |  
| @"Meadow.Foundation.LEDs.RgbPwmLed"       | Pulse-Width-Modulation powered RGB LED | Yes | SoftPwm only |
| @"Meadow.Foundation.LEDs.LedBarGraph"     | Generic segmented LED bar | Yes | Woks with digital IO or SoftPwm |

### Motors

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| @"Meadow.Foundation.Motors.HBridgeMotor" | Generic h-bridge motor controller | | |

### Relays

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| @"Meadow.Foundation.Relays.Relay" | Electrically isolated switch | Yes | |

### Speakers

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| @"Meadow.Foundation.Audio.PiezoSpeaker" | A 2 pin piezo-electric speaker capable of generating tones | | Blocked on hardware PWM |

### Sensors

#### Buttons

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| @"Meadow.Foundation.Sensors.Buttons.PushButton" | Simple push-button | Yes | Requires external [PU/PD resistor](http://developer.wildernesslabs.co/Hardware/Tutorials/Electronics/Part4/PullUp_PullDown_Resistors/) |

#### Rotary Encoders

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| @"Meadow.Foundation.Sensors.Rotary.RotaryEncoder" | A simple rotary encoder | Yes | |
| @"Meadow.Foundation.Sensors.Rotary.RotaryEncoderWithButton" | A rotary encoder that includes a push button | Yes | Requires external [PU/PD resistor](http://developer.wildernesslabs.co/Hardware/Tutorials/Electronics/Part4/PullUp_PullDown_Resistors/) |

#### Switches

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| @"Meadow.Foundation.Sensors.Switches.SpstSwitch" | A simple single-pole, single-throw (SPST) switch | Yes | Requires external [PU/PD resistor](http://developer.wildernesslabs.co/Hardware/Tutorials/Electronics/Part4/PullUp_PullDown_Resistors/) |
| @"Meadow.Foundation.Sensors.Switches.SpdtSwitch" | A simple single-pole, dual-throw (SPDT) switch | Yes | |
| @"Meadow.Foundation.Sensors.Switches.DipSwitch"  | A multi-pole dip switch | Yes | Requires external [PU/PD resistor](http://developer.wildernesslabs.co/Hardware/Tutorials/Electronics/Part4/PullUp_PullDown_Resistors/) |

#### Temperature

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| @"Meadow.Foundation.Sensors.Temperature.AnalogTemperature" | Analog temperature sensor (TMP35 / TMP36 / TMP37 / LM35) | | |

#### Hall Effect

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| @"Meadow.Foundation.Sensors.HallEffect.LinearHallEffectTachometer" | Hall Effect Linear Tachometer sensor | | |

## Additional Peripherals

### Display and Graphics Drivers

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| @"Meadow.Foundation.Graphics.GraphicsLibrary"        | General purpose graphics library | | |
| @"Meadow.Foundation.Displays.Lcd.CharacterDisplay"   | LCD display | Yes | digital IO only | | |
| @"Meadow.Foundation.Displays.LED.SevenSegment"       | Seven Segment Display | Yes | |
| @"Meadow.Foundation.Displays.PCD8544"                | PCD8544 LCD driver (Nokia 5110) | | Blocked on SPI |
| @"Meadow.Foundation.Displays.SerialLCD"              | SparkFun serial LCD backpack driver | | Blocked on serial |
| @"Meadow.Foundation.Displays.SSD1306"                | SSD1306 OLED Display.  Currently supports 128x64 and 128x32 pixel I2C displays | | |
| @"Meadow.Foundation.Displays.TextDisplayMenu"        | Text Display Menu for LCD displays | | Blocked on SPI |
| @"Meadow.Foundation.Displays.Tft"                    | Thin Film Transistor (TFT) SPI Library | | Blocked on SPI |
| @"Meadow.Foundation.Displays.ePaper"                 | ePaper/eInk display Library | | Blocked on SPI |

### Integrated Circuits (ICs)

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| @"Meadow.Foundation.ICs.EEPROM.AT24Cxx"              | AT24Cxx Family of EEPROMs including AT24C32 | | Blocked on I2C |
| @"Meadow.Foundation.ICs.IOExpanders.x74595"          | 74595 shift register for digital output expansion | | Blocked on SPI |
| @"Meadow.Foundation.ICs.IOExpanders.MCP23008"        | MCP23008 for digital output expansion | | Blocked on I2C |
| @"Meadow.Foundation.RTCs.DS323x"                     | Real Time Clock modules | | Blocked on I2C |

### Sensors

#### Atmospheric (Temperature, Humidity, Barometer, Altitude) Sensors

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| @"Meadow.Foundation.Sensors.Atmospheric.BME280"      | Combined I2C/SPI temperature, humidity, and pressure sensor | | Blocked on I2C/SPI |
| @"Meadow.Foundation.Sensors.Atmospheric.GroveTH02"   | Grove TH02 temperature and humidity sensor | | Blocked on I2C |
| @"Meadow.Foundation.Sensors.Atmospheric.HIH6130"     | Combined I2C temperature and humidity sensor | | Blocked on I2C |
| @"Meadow.Foundation.Sensors.Atmospheric.SHT31D"      | Combined I2C temperature and humidity sensor | | Blocked on I2C |
| @"Meadow.Foundation.Sensors.Atmospheric.SI7021"      | Combined I2C temperature and humidity sensor | | Blocked on I2C |
| @"Meadow.Foundation.Sensors.Barometric.MPL115A2"     | MPL115A2 Barometric sensor | | Blocked on I2C |
| @"Meadow.Foundation.Sensors.Barometric.MPL3115A2"    | MPL3115A2 Barometric sensor | | Blocked on I2C |
| @"Meadow.Foundation.Sensors.Temperature.DS18B20"     | DS18B20 temperature sensor | | 1-Wire bus |
| @"Meadow.Foundation.Sensors.Temperature.TMP102"      | TMP102 temperature sensor | | Blocked on I2C |

#### Distance Sensors

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| @"Meadow.Foundation.Sensors.Distance.HCSR04"  | HCSR04 distance sensor | Yes | |
| @"Meadow.Foundation.Sensors.Distance.HYSRF05" | HYSRF05 distance sensor | Yes | |

#### GPS Sensors & Libraries

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| @"Meadow.Foundation.Sensors.GPS.NMEA"                | Generic GPS sentence decoder library | Yes | |

#### Light Sensors

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| @"Meadow.Foundation.Sensors.Light.ALSPT19315C"       | Analog light sensor | | |
| @"Meadow.Foundation.Sensors.Light.SI1145"            | I2C infrared, ultraviolet, and ambient light sensor | | Blocked on I2C |
| @"Meadow.Foundation.Sensors.Light.TSL2561"           | I2C infrared-compensated light sensor | | Blocked on I2C |

#### Soil Moisture Sensors

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| @"Meadow.Foundation.Sensors.Moisture.Capacitive" | Capacitive Soil Moisture Sensor | | |
| @"Meadow.Foundation.Sensors.Moisture.FC28"       | FC-28 Soil Moisture Sensor | | |

#### Motion and Orientation Sensors

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| @"Meadow.Foundation.Sensors.Motion.ADXL335"     | Analog triple axis, +/-3g accelerometer | | Blocked on I2C |
| @"Meadow.Foundation.Sensors.Motion.ADXL345"     | I2C triple axis accelerometer, +/-16g accelerometer | | Blocked on I2C |
| @"Meadow.Foundation.Sensors.Motion.ADXL362"     | I2C ultralow power, 3-axis MEMS accelerometer | | Blocked on I2C |
| @"Meadow.Foundation.Sensors.Motion.BNO055"      | I2C 9-Axis absolute orientation sensor | | Blocked on I2C |
| @"Meadow.Foundation.Sensors.Motion.MAG3110"     | I2C three axis magnetometer | | Blocked on I2C |
| @"Meadow.Foundation.Sensors.Motion.ParallaxPir" | Parallax PIR Rev B digital motion detector | | |

### Servos

| Driver           | Description | Tested Working      | Notes                             |
|------------------|-------------|---------------------|-----------------------------------|
| @"Meadow.Foundation.Sensors.ServoCore"               | Generic servo library | | |