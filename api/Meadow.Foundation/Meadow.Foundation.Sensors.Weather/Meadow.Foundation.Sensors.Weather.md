---
title: Namespace Meadow.Foundation.Sensors.Weather
sidebar_label: Meadow.Foundation.Sensors.Weather
---
# Namespace Meadow.Foundation.Sensors.Weather
## Classes
### [SwitchingAnemometer](../Meadow.Foundation.Sensors.Weather/SwitchingAnemometer)
Driver for a "switching" anemometer (wind speed gauge) that has an
internal switch that is triggered during every revolution.
### [SwitchingRainGauge](../Meadow.Foundation.Sensors.Weather/SwitchingRainGauge)
Represents a simple switching rain gauge
### [WindVane](../Meadow.Foundation.Sensors.Weather/WindVane)
Driver for a wind vane that outputs variable voltage, based on the
azimuth of the wind. Matches the input voltage to the `AzimuthVoltages`
dictionary lookup and returns the nearest azimuth to the voltage specified.

By default it will use look ups that match voltage outputs from the windvane
in the Sparkfun/Shenzen Fine Offset Electronics with a voltage divider of
4.7kΩ / 1kΩ, as can be found in the SparkFun weather shield, or Wilderness
Labs Clima Pro board.
