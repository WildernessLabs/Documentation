---
title: Enum ParameterCode
sidebar_label: ParameterCode
description: >-
  Parameter codes for YSI EXO sonde measurements. These codes are used to
  identify different types of sensor readings transmitted by YSI EXO
  multiparameter water quality sondes.
slug: >-
  /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Environmental.Ysi/ParameterCode
---
# Enum ParameterCode
Parameter codes for YSI EXO sonde measurements.
These codes are used to identify different types of sensor readings
transmitted by YSI EXO multiparameter water quality sondes.

###### **Assembly**: Ysi.Exo.dll
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L8)
```csharp title="Declaration"
public enum ParameterCode
```
## Fields
### TemperatureC
Temperature in degrees Celsius.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L13)
```csharp title="Declaration"
TemperatureC = 1
```
### TemperatureF
Temperature in degrees Fahrenheit.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L18)
```csharp title="Declaration"
TemperatureF = 2
```
### TemperatureK
Temperature in degrees Kelvin.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L23)
```csharp title="Declaration"
TemperatureK = 3
```
### ConductivitymScm
Conductivity in millisiemens per centimeter (mS/cm).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L28)
```csharp title="Declaration"
ConductivitymScm = 4
```
### ConductivityuScm
Conductivity in microsiemens per centimeter (μS/cm).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L33)
```csharp title="Declaration"
ConductivityuScm = 5
```
### SpecificConductancemScm
Specific conductance in millisiemens per centimeter (mS/cm).
Temperature-compensated conductivity.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L39)
```csharp title="Declaration"
SpecificConductancemScm = 6
```
### SpecificConductanceuScm
Specific conductance in microsiemens per centimeter (μS/cm).
Temperature-compensated conductivity.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L45)
```csharp title="Declaration"
SpecificConductanceuScm = 7
```
### TDSgL
Total dissolved solids in grams per liter (g/L).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L50)
```csharp title="Declaration"
TDSgL = 10
```
### Salinity
Salinity in Practical Salinity Units (PSU or PPT).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L55)
```csharp title="Declaration"
Salinity = 12
```
### pHmV
pH millivolts (mV).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L60)
```csharp title="Declaration"
pHmV = 17
```
### pH
pH in standard units.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L65)
```csharp title="Declaration"
pH = 18
```
### ORP
Oxidation-reduction potential in millivolts (mV).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L70)
```csharp title="Declaration"
ORP = 19
```
### PressurePsia
Pressure in pounds per square inch absolute (psia).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L75)
```csharp title="Declaration"
PressurePsia = 20
```
### PressurePsig
Pressure in pounds per square inch gauge (psig).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L80)
```csharp title="Declaration"
PressurePsig = 21
```
### DepthMeters
Depth in meters (m).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L85)
```csharp title="Declaration"
DepthMeters = 22
```
### DepthFeet
Depth in feet (ft).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L90)
```csharp title="Declaration"
DepthFeet = 23
```
### BatteryVoltage
Battery voltage (V).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L95)
```csharp title="Declaration"
BatteryVoltage = 28
```
### TurbidityNTU
Turbidity in Nephelometric Turbidity Units (NTU).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L100)
```csharp title="Declaration"
TurbidityNTU = 37
```
### NH3
Ammonia in milligrams per liter (mg/L).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L105)
```csharp title="Declaration"
NH3 = 47
```
### NH4
Ammonium in milligrams per liter (mg/L).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L110)
```csharp title="Declaration"
NH4 = 48
```
### DateDDMMYY
Date in DDMMYY format.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L115)
```csharp title="Declaration"
DateDDMMYY = 51
```
### DateMMDDYY
Date in MMDDYY format.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L120)
```csharp title="Declaration"
DateMMDDYY = 52
```
### DateYYMMDD
Date in YYMMDD format.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L125)
```csharp title="Declaration"
DateYYMMDD = 53
```
### TimeHHMMSS
Time in HHMMSS format.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L130)
```csharp title="Declaration"
TimeHHMMSS = 54
```
### TDSkgL
Total dissolved solids in kilograms per liter (kg/L).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L135)
```csharp title="Declaration"
TDSkgL = 95
```
### NO3mV
Nitrate millivolts (mV).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L140)
```csharp title="Declaration"
NO3mV = 101
```
### NO3
Nitrate in milligrams per liter (mg/L).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L145)
```csharp title="Declaration"
NO3 = 106
```
### NH4mV
Ammonium millivolts (mV).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L150)
```csharp title="Declaration"
NH4mV = 108
```
### TDSmgL
Total dissolved solids in milligrams per liter (mg/L).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L155)
```csharp title="Declaration"
TDSmgL = 110
```
### Chloride
Chloride in milligrams per liter (mg/L).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L160)
```csharp title="Declaration"
Chloride = 112
```
### ChlorideMV
Chloride millivolts (mV).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L165)
```csharp title="Declaration"
ChlorideMV = 145
```
### TSSmgL
Total suspended solids in milligrams per liter (mg/L).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L170)
```csharp title="Declaration"
TSSmgL = 190
```
### TSSgL
Total suspended solids in grams per liter (g/L).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L175)
```csharp title="Declaration"
TSSgL = 191
```
### ChlorophyllugL
Chlorophyll in micrograms per liter (μg/L).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L180)
```csharp title="Declaration"
ChlorophyllugL = 193
```
### ChlorophyllRFU
Chlorophyll in Relative Fluorescence Units (RFU).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L185)
```csharp title="Declaration"
ChlorophyllRFU = 194
```
### PARChannel1
PAR Channel 1 in μmol·s-1·m-2.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L190)
```csharp title="Declaration"
PARChannel1 = 201
```
### PARChannel2
PAR Channel 2 in μmol·s-1·m-2.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L195)
```csharp title="Declaration"
PARChannel2 = 202
```
### RhodamineugL
Rhodamine in micrograms per liter (μg/L).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L200)
```csharp title="Declaration"
RhodamineugL = 204
```
### ODOPercentSat
Dissolved oxygen in percent saturation (%).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L205)
```csharp title="Declaration"
ODOPercentSat = 211
```
### ODOmgL
Dissolved oxygen in milligrams per liter (mg/L).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L210)
```csharp title="Declaration"
ODOmgL = 212
```
### ODOPercentLocal
Dissolved oxygen in percent local saturation (%).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L215)
```csharp title="Declaration"
ODOPercentLocal = 214
```
### TALPCcellsmL
Total Algae-PC in cells per milliliter (cells/mL).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L220)
```csharp title="Declaration"
TALPCcellsmL = 215
```
### BGAPCrfu
Blue-green algae phycocyanin in Relative Fluorescence Units (RFU).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L225)
```csharp title="Declaration"
BGAPCrfu = 216
```
### TALPEcellsmL
Total Algae-PE in cells per milliliter (cells/mL).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L230)
```csharp title="Declaration"
TALPEcellsmL = 217
```
### BGAPErfu
Blue-green algae phycoerythrin in Relative Fluorescence Units (RFU).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L235)
```csharp title="Declaration"
BGAPErfu = 218
```
### TurbidityFNU
Turbidity in Formazin Nephelometric Units (FNU).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L240)
```csharp title="Declaration"
TurbidityFNU = 223
```
### TurbidityRaw
Turbidity raw signal.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L245)
```csharp title="Declaration"
TurbidityRaw = 224
```
### BGAPCugL
Blue-green algae phycocyanin in micrograms per liter (μg/L).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L250)
```csharp title="Declaration"
BGAPCugL = 225
```
### BGAPEugL
Blue-green algae phycoerythrin in micrograms per liter (μg/L).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L255)
```csharp title="Declaration"
BGAPEugL = 226
```
### fDOMrfu
Fluorescent dissolved organic matter in Relative Fluorescence Units (RFU).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L260)
```csharp title="Declaration"
fDOMrfu = 227
```
### fDOMqsu
Fluorescent dissolved organic matter in Quinine Sulfate Units (QSU).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L265)
```csharp title="Declaration"
fDOMqsu = 228
```
### WiperPosition
Wiper position in volts (V).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L270)
```csharp title="Declaration"
WiperPosition = 229
```
### ExternalPower
External power in volts (V).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L275)
```csharp title="Declaration"
ExternalPower = 230
```
### BGAPCRaw
Blue-green algae phycocyanin raw signal.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L280)
```csharp title="Declaration"
BGAPCRaw = 231
```
### BGAPERaw
Blue-green algae phycoerythrin raw signal.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L285)
```csharp title="Declaration"
BGAPERaw = 232
```
### fDOMRaw
Fluorescent dissolved organic matter raw signal.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L290)
```csharp title="Declaration"
fDOMRaw = 233
```
### ChlorophyllRaw
Chlorophyll raw signal.
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L295)
```csharp title="Declaration"
ChlorophyllRaw = 234
```
### PotassiummV
Potassium millivolts (mV).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L300)
```csharp title="Declaration"
PotassiummV = 235
```
### PotassiummgL
Potassium in milligrams per liter (mg/L).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L305)
```csharp title="Declaration"
PotassiummgL = 236
```
### nLFConductivitymScm
Non-linear function conductivity in millisiemens per centimeter (mS/cm).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L310)
```csharp title="Declaration"
nLFConductivitymScm = 237
```
### nLFConductivityuScm
Non-linear function conductivity in microsiemens per centimeter (μS/cm).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L315)
```csharp title="Declaration"
nLFConductivityuScm = 238
```
### WiperPeakCurrent
Wiper peak current in milliamps (mA).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L320)
```csharp title="Declaration"
WiperPeakCurrent = 239
```
### VerticalPositionm
Vertical position in meters (m).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L325)
```csharp title="Declaration"
VerticalPositionm = 240
```
### VerticalPositionft
Vertical position in feet (ft).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L330)
```csharp title="Declaration"
VerticalPositionft = 241
```
### ChlorophyllcellsmL
Chlorophyll in cells per milliliter (cells/mL).
###### [View Source](https://github.com/WildernessLabs/Meadow.Foundation.git/blob/develop/Source/Meadow.Foundation.Peripherals/Sensors.Environmental.Ysi.Exo/Driver/ParameterCode.cs#L335)
```csharp title="Declaration"
ChlorophyllcellsmL = 242
```
