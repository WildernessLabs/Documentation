---
layout: Hardware
title: Standard PID Algorithm
subtitle: Understanding the real-world PID algorithm.
---

## Overview

The "ideal" PID algorithm concisely describes the fundamental approach to PID, but it's actually a less common approach than the _standard_ algorithm, which changes it slightly to assign semantic meaning to the integral and derivative constants.

In the standard form, instead of adding the PID corrections together, the integral and derivative corrections are defined by constants that are related to time of change and are computed and then their corrections are summed and that output is then scaled (multiplied) by the proportional error constant:

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/c0b2251a7c96240727206f07d267fca833627cc2)

Again, a visual representation of this algorithm might be more enlightening:

![](../Standard_PID_Block_Diagram.svg){:standalone}

### Integral and Derivative Gain Components in Relation to Time

In the ideal algorithm, the integral and derivative gain constants have no intrinsic meaning; they are simply values that have a mathematical relation to whatever unit of time used to calculate the cumulative error or rate of change.

The standard algorithm, by contrast, assigns meaning to both of those gain values in terms of how much time it would take for those values to have the same effect as the proportional action. This is often described in _minutes per repeat_. In this form, a higher value gain would actually mean less effect, since 4 minutes to repeat is slower than say 2 minutes to repeat. For this reason, many high-quality PID controllers invert this to _repeats per minute_, which is the inverse or `1 / minutesPerRepeat`, which provides a more intuitive gain tuning parameter, since the large the value, the greater the effect on change would be.

### Standard PID Calculation Code Example

The following code comes from the Netduino.Foundation [`StandardPIDController`](http://Netduino.Foundation/API/Controllers/PID/StandardPIDController/) class, and illustrates the algorithm as expressed in code:

```csharp
public override float CalculateControlOutput()
{
    // init vars
    float control = 0.0f;
    var now = DateTime.Now;

    // time delta (how long since last calculation)
    var dt = now - _lastUpdateTime;
    var seconds = (float)(dt.Ticks / 10000 / 1000);

    // if no time has passed, don't make any changes.
    if (dt.Ticks <= 0.0) return _lastControlOutputValue;

    // copy vars
    var input = ActualInput;
    var target = TargetInput;

    // calculate the error (how far we are from target)
    var error = target - input;

    // calculate the integral
    _integral += error * seconds; // add to the integral history
    var integral = (1 / (IntegralComponent * 60)) * _integral; // calculate the integral action

    // calculate the derivative (rate of change, slope of line) term
    var diff = error - _lastError / seconds;
    var derivative = (DerivativeComponent * 60) * diff;

    // add the appropriate corrections
    control = ProportionalComponent * (error + integral + derivative);

    // clamp
    if (control > OutputMax) control = OutputMax;
    if (control < OutputMin) control = OutputMin;

    if (OutputTuningInformation)
    {
        Debug.Print("SP+PV+PID+O," + target.ToString() + "," + input.ToString() + "," +
            ProportionalComponent.ToString() + "," + integral.ToString() + "," +
            derivative.ToString() + "," + control.ToString());
    }

    // persist our state variables
    _lastControlOutputValue = control;
    _lastError = error;
    _lastUpdateTime = now;

    return control;
}

```

### Other Variations on PID

PID is a powerful algorithm, but it doesn't need to be used in its entirety to be effective. In fact, most uses of PID only use the PI component.

#### PI Controllers

Because the Derivative is so adversely affected by input signal noise, in most real world systems, it's omitted entirely. For many needs a PI controller (Proportional and Integral only), will suffice.

#### PD Controllers

PD controllers, those that use the Proportional and Derivative corrective actions only, are less common, but are sometimes used to control servos when very precise movements are needed. Servos can provide very precise data on their rotation, so in conjunction with Proportional power control, a PD controller can drive a servos into not incredibly precise alignment, but do so very quickly.


## [Next - Using PID](../Using_PID)
