---
layout: Hardware
title: Using PID
subtitle: A practical PID usage example.
---

## Dehydrator Example

The [Food Dehydrator 3000](https://github.com/WildernessLabs/Netduino_Samples/tree/master/Netduino.Foundation/FoodDehydrator3000) sample app illustrates basic standard PID controller usage. Specifically, the [`DehydratorController`](https://github.com/WildernessLabs/Netduino_Samples/blob/master/Netduino.Foundation/FoodDehydrator3000/FoodDehydrator3000/DehydratorController.cs) class utilizes Netduino.Foundation's `StandardPIDController` to bring the dehydrator up to a specified temperature and uses an [Analog Temperature Sensor](http://Netduino.Foundation/API/Sensors/Temperature/Analog/) to provide feedback.

Additionally, the dehydrator uses a [PWM Signal](/Netduino/Input_Output/Digital/PWM/) to modulate the power of the heater element.

The salient usage is described below.

### `DehydratorController` Constructor:

In the constructor, the PID controller is instantiated and configured. In the case of the dehydrator, only the `ProportionalComponent` and `IntegralComponent` are used to calculate the control output (`DerivativeComponent` is set to `0`, effectively removing it from the control). This is because the derivative calculation is based on the rate of change, and it requires a very smooth sensor reading, but the temp sensor reading is fairly noisy. However, it doesn't matter, as this still provides a very efficient control.

Additionally, the control output is clamped via the `OutputMin` and `OutputMax` properties between `0.0` and `1.0`, which translates to `0%` to `100%` duty cycle of the PWM that controls the heater element. If the controller were used in an system that kept a boat on a heading, or a car between lines, then the clamp might be between something like `-0.5` and `0.5`, in which a negative value meant a left heading, and a positive value meant a right heading.

```csharp
public DehydratorController(AnalogTemperature tempSensor, SoftPwm heater, Relay fan, SerialLCD display)
{
    _tempSensor = tempSensor;
    _heaterRelayPwm = heater;
    _fanRelay = fan;
    _display = display;

    _pidController = new StandardPidController();
    _pidController.ProportionalComponent = .5f; // proportional
    _pidController.IntegralComponent = .55f; // integral time minutes
    _pidController.DerivativeComponent = 0f; // derivative time in minutes
    _pidController.OutputMin = 0.0f; // 0% power minimum
    _pidController.OutputMax = 1.0f; // 100% power max
    _pidController.OutputTuningInformation = true;

}
```

#### `TurnOn` Method

When the dehydrator is turned on, the `TurnOn` method is called, which sets the temperature and running time, and then calls the `StartRegulatingTemperatureThread` method which is responsible for the bulk of the control work.

```csharp
public void TurnOn(int temp, TimeSpan runningTime)
{
    // set our state vars
    TargetTemperature = (float)temp;
    this._runningTimeLeft = runningTime;
    this._running = true;

    // keeping fan off, to get temp to rise.
    this._fanRelay.IsOn = true;

    // TEMP - to be replaced with PID stuff
    this._heaterRelayPwm.Frequency = 1.0f / 5.0f; // 5 seconds to start (later we can slow down)
    // on start, if we're under temp, turn on the heat to start.
    float duty = (_tempSensor.Temperature < TargetTemperature) ? 1.0f : 0.0f;
    this._heaterRelayPwm.DutyCycle = duty;
    this._heaterRelayPwm.Start();

    // start our temp regulation thread. might want to change this to notify.
    StartRegulatingTemperatureThread();
}
```

#### `StartRegulatingTemperatureThread` Method

This method starts a new thread which is actually responsible for reading the temperature input from the sensor and calling the PID controller's `CalculateControlOutput` method to determine the amount of power to provide to the heating element in order to bring the dehydrator up to the target temperature:

```csharp
protected void StartRegulatingTemperatureThread()
{
    _tempControlThread = new Thread(() => {

        // reset our integral history
        _pidController.ResetIntegrator();

        while (this._running) {

            // set our input and target on the PID calculator
            _pidController.ActualInput = _tempSensor.Temperature;
            _pidController.TargetInput = this.TargetTemperature;

            // get the appropriate power level
            var powerLevel = _pidController.CalculateControlOutput();

            // set our PWM appropriately
            this._heaterRelayPwm.DutyCycle = powerLevel;

            // sleep for a while.
            Thread.Sleep(_powerUpdateInterval);
        }
    });
    _tempControlThread.Start();
}
```

## Next - Tuning PID (Coming Soon)
