---
uid: Meadow.Foundation.Sensors.LoadCell.Hx711
remarks: *content
---

| Hx711 | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.LoadCell.Hx711) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation.Sensors.LoadCell.Hx711/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.Sensors.LoadCell.Hx711.svg?label=Meadow.Foundation.Sensors.LoadCell.Hx711" /></a> |

```csharp
Hx711 loadSensor;

public int CalibrationFactor { get; set; } = 0; //9834945 - 8458935; // TODO: change this based on your scale (using the method provided below)
public double CalibrationWeight { get; set; } = 1.6; // TODO: enter the known-weight (in units below) you used in calibration
public WeightUnits CalibrationWeightUnits { get; set; } = WeightUnits.Kilograms; // TODO: enter the units of the known-weight you used in calibration

public MeadowApp()
{
    Console.WriteLine($"Creating Sensor...");
    using (loadSensor = new Hx711(Device, Device.Pins.D04, Device.Pins.D03))
    {
        if (CalibrationFactor == 0)
        {
            GetAndDisplayCalibrationUnits(loadSensor);
        }
        else
        {   // wait for the ADC to settle
            Thread.Sleep(500);

            // Set the current load to be zero
            loadSensor.SetCalibrationFactor(CalibrationFactor, new Mass(CalibrationWeight, Mass.UnitType.Grams));
            loadSensor.Tare();

            loadSensor.MassUpdated += (sender, values) => Console.WriteLine($"Mass is now returned {values.New.Grams:N2}g");
      
            loadSensor.StartUpdating(TimeSpan.FromSeconds(2));
        }
    }
}

public void GetAndDisplayCalibrationUnits(Hx711 sensor)
{   // first notify the user we're starting
    Console.WriteLine($"Beginning Calibration. First we'll tare (set a zero).");
    Console.WriteLine($"Make sure scale bed is clear. Next step in 5 seconds...");
    Thread.Sleep(5000);
    sensor.Tare();
    Console.WriteLine($"Place a known weight on the scale. Next step in 5 seconds...");
    Thread.Sleep(5000);
    var factor = sensor.CalculateCalibrationFactor();
    Console.WriteLine($"Your scale's Calibration Factor is: {factor}.  Enter this into the code for future use.");
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Sensors.LoadCell.Hx711/Samples/Sensors.LoadCell.Hx711_Sample)

|
