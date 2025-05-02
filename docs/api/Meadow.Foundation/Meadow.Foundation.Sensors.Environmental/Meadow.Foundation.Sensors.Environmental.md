---
title: Namespace Meadow.Foundation.Sensors.Environmental
sidebar_label: Meadow.Foundation.Sensors.Environmental
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental
---
# Namespace Meadow.Foundation.Sensors.Environmental
## Classes
### [Ags01Db](../Meadow.Foundation.Sensors.Environmental/Ags01Db)
Represents an AGS01DB MEMS VOC gas / air quality sensor
Pinout (left to right, label side down): VDD, SDA, GND, SCL
Note: requires pull-up resistors on SDA/SCL
### [AnalogWaterLevel](../Meadow.Foundation.Sensors.Environmental/AnalogWaterLevel)
Represents an analog water level sensor
### [AnalogWaterLevel.Calibration](../Meadow.Foundation.Sensors.Environmental/AnalogWaterLevel.Calibration)
Calibration class for AnalogWaterLevel
### [AtlasScientificGravityDOMeter](../Meadow.Foundation.Sensors.Environmental/AtlasScientificGravityDOMeter)
Atlas Scientific Analog Gravity Dissolved Oxygen Meter
### [DFRobotGravityDOMeter](../Meadow.Foundation.Sensors.Environmental/DFRobotGravityDOMeter)
DFRobot Analog Gravity Dissolved Oxygen Meter
### [Ens160](../Meadow.Foundation.Sensors.Environmental/Ens160)
Represents an ENS160 Digital Metal-Oxide Multi-Gas Sensor
### [KellerTransducer](../Meadow.Foundation.Sensors.Environmental/KellerTransducer)
Represents a Keller pressure transducer or transmitter that communicates via Modbus RTU.
### [MiniPID2](../Meadow.Foundation.Sensors.Environmental/MiniPID2)
Represents an IonScience MiniPID2 analog photoionisation (PID) Volatile Organic Compounds (VOC) sensor
### [NextPm](../Meadow.Foundation.Sensors.Environmental/NextPm)
Represents a TERA Sensor NextPM serial particulate matter sensor
### [Pmsa003i](../Meadow.Foundation.Sensors.Environmental/Pmsa003i)
Represents a Pmsa003i AQI particulate matter sensor
### [Scd30](../Meadow.Foundation.Sensors.Environmental/Scd30)
Represents an SCD30 C02 sensor
### [Scd30Base](../Meadow.Foundation.Sensors.Environmental/Scd30Base)
Base class for SCD30 C02 sensor
### [Scd40](../Meadow.Foundation.Sensors.Environmental/Scd40)
Represents an SCD40 C02 sensor
### [Scd41](../Meadow.Foundation.Sensors.Environmental/Scd41)
Represents an SCD41 C02 sensor
### [Scd4xBase](../Meadow.Foundation.Sensors.Environmental/Scd4xBase)
Base class for SCD4x series of C02 sensors
### [SimulatedKellerTransducer](../Meadow.Foundation.Sensors.Environmental/SimulatedKellerTransducer)
Simulated implementation of the IKellerTransducer interface.
This class provides mock functionality for testing or development purposes without hardware.
### [SimulatedY4000](../Meadow.Foundation.Sensors.Environmental/SimulatedY4000)
Represents a simulated Yosemitech Y4000 Multiparameter Sonde
### [TeraException](../Meadow.Foundation.Sensors.Environmental/TeraException)
Exception thrown by a TERA NextPM sensor
### [Y4000](../Meadow.Foundation.Sensors.Environmental/Y4000)
Represents a Yosemitech Y4000 Multiparameter Sonde water quality sensor 
for dissolved oxygen, conductivity, turbidity, pH, chlorophyll, 
blue green algae, chlorophyll, and temperature
## Structs
### [ParticulateReading](../Meadow.Foundation.Sensors.Environmental/ParticulateReading)
A collection of particulate density readings
### [WaterQualityConcentrations](../Meadow.Foundation.Sensors.Environmental/WaterQualityConcentrations)
Represents concentrations indicating water quality
### [Y4000.Measurements](../Meadow.Foundation.Sensors.Environmental/Y4000.Measurements)
Struct to hold Y4000 sensor measurement data
## Interfaces
### [IKellerTransducer](../Meadow.Foundation.Sensors.Environmental/IKellerTransducer)
Defines the interface for Keller pressure transducers and transmitters.
### [IRedoxPotentialSensor](../Meadow.Foundation.Sensors.Environmental/IRedoxPotentialSensor)
Represents a sensor for measuring oxidation/reduction potential
### [IWaterQualityConcentrationsSensor](../Meadow.Foundation.Sensors.Environmental/IWaterQualityConcentrationsSensor)
Represents a sensor for measuring water quality concentrations
### [IY4000](../Meadow.Foundation.Sensors.Environmental/IY4000)
Y4000 hardware interface
## Enums
### [Ags01Db.Addresses](../Meadow.Foundation.Sensors.Environmental/Ags01Db.Addresses)
Valid I2C addresses for the sensor
### [Ens160.Addresses](../Meadow.Foundation.Sensors.Environmental/Ens160.Addresses)
Valid I2C addresses for the sensor
### [Ens160.OperatingMode](../Meadow.Foundation.Sensors.Environmental/Ens160.OperatingMode)
Sensor operating mode
### [Ens160.UBAAirQualityIndex](../Meadow.Foundation.Sensors.Environmental/Ens160.UBAAirQualityIndex)
AQI Rating
### [MiniPID2.MiniPID2Type](../Meadow.Foundation.Sensors.Environmental/MiniPID2.MiniPID2Type)
The MiniPID 2 Volatile Organic Compounds (VOC) sensor variant
### [PressureChannel](../Meadow.Foundation.Sensors.Environmental/PressureChannel)
The Pressure Channel
### [Scd30Base.Addresses](../Meadow.Foundation.Sensors.Environmental/Scd30Base.Addresses)
Valid I2C addresses for the sensor
### [Scd4xBase.Addresses](../Meadow.Foundation.Sensors.Environmental/Scd4xBase.Addresses)
Valid I2C addresses for the sensor
### [TemperatureChannel](../Meadow.Foundation.Sensors.Environmental/TemperatureChannel)
Represents the available temperature channels
