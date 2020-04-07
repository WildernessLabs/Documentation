---
uid: Meadow.Foundation.Sensors.Rotary.RotaryEncoderWithButton
remarks: *content
---

| RotaryEncoderWithButton |             |
|-------------------------|-------------|
| Status                  | <img src="https://img.shields.io/badge/Working-brightgreen" style="width: auto; height: -webkit-fill-available;" />  |
| Source code             | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Core/Sensors/Rotary)  |
| NuGet package           | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" style="width: auto; height: -webkit-fill-available;" /></a> |

Rotary encoders are similar in form factor to potentiometers, but instead of modifying a voltage output, they send a digital signal encoded using Gray Code when rotated that can be decoded to ascertain the direction of turn.

<img src="../../API_Assets/Meadow.Foundation.Sensors.Rotary.RotaryEncoder/RotaryEncoder.jpg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />

Rotary encoders have several advantages over potentiometers as input devices, namely:

* They’re more power efficient; they only use power when actuated.
* They’re not rotation-bound; they spin infinitely in either direction.
* Many rotary encoders also have a built-in pushbutton.

Rotary encoders are used almost exclusively on things like volume knobs on stereos.

And because they’re not rotation bound, they are especially useful in the case in which a device might have multiple inputs to control the same parameter. For instance, a stereo’s volume might be controlled via a knob and a remote control. If a potentiometer were used for the volume knob, then the actual volume could get out of synch with the apparent value on the potentiometer when the volume was changed via the remote.

For this reason, rotary encoders are particularly useful in connected things, in which parameters might be controlled remotely.

###Two-bit Gray Code

This rotary encoder driver works with most rotary encoders which return a two-bit Gray Code which is the minimum number of bits necessary to describe direction. Most common rotary encoders use two-bit Gray Code, so this driver should work with most common rotary encoders.

###PushButton

Some rotary encoders, such as the ones pictured above, have an integrated push button. This driver exposes that button as a PushButton via the Button property.

The following example shows how to register event handlers to print in the console when pressing and relasing the push button:

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    protected RotaryEncoderWithButton _rotary = null;
    protected PwmLed _led = null;
    // how much to change the brightness per rotation step. 
    // 0.05 = 20 clicks to 100%
    protected float _brightnessStepChange = 0.05F; 

    public MeadowApp()
    {
        // instantiate our peripherals
        _rotary = new RotaryEncoderWithButton(Device, Device.Pins.D07, Device.Pins.D08, Device.Pins.D06);
        _rotary.Rotated += RotaryRotated;
        _rotary.Clicked += RotaryClicked;

        _led = new PwmLed(Device.Pins.D12, TypicalForwardVoltage.Red);
    }

    protected void RotaryRotated(object sender, RotaryTurnedEventArgs e)
    {
        // if clockwise, turn it up! clamp to 1, so we don't go over.
        if (e.Direction == RotationDirection.Clockwise)
        {
            if(_led.Brightness >= 1) 
            {
                return;
            } 
            else 
            {
                _led.SetBrightness((_led.Brightness + 
                    _brightnessStepChange).Clamp(0,1));
            }
        } 
        else // otherwise, turn it down. clamp to 0 so we don't go below. 
        { 
            if (_led.Brightness <= 0) 
            {
                return;
            } 
            else 
            {
                _led.SetBrightness((_led.Brightness - 
                    _brightnessStepChange).Clamp(0,1));
            }
        }
    }

    private void RotaryClicked(object sender, EventArgs e)
    {
        if (_led.Brightness > 0) 
        {
            _led.SetBrightness(0f);
        } 
        else 
        {
            _led.SetBrightness(_lastOnBrightness);
        }
    }
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Core.Samples) 

### Wiring Example

<img src="../../API_Assets/Meadow.Foundation.Sensors.Rotary.RotaryEncoderWithButton/RotaryEncoderWithButton.svg" 
    style="width: 60%; display: block; margin-left: auto; margin-right: auto;" />