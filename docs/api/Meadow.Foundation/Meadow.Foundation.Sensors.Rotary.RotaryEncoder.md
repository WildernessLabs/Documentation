---
uid: Meadow.Foundation.Sensors.Rotary.RotaryEncoder
slug: /docs/api/Meadow.Foundation/Meadow.Foundation.Sensors.Rotary.RotaryEncoder
---

| RotaryEncoder | |
|--------|--------|
| Status | <img src="https://img.shields.io/badge/Working-brightgreen" style={{ width: "auto", height: "-webkit-fill-available" }} alt="Status badge: working" /> |
| Source code | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core/Sensors/Rotary) |
| NuGet package | <a href="https://www.nuget.org/packages/Meadow.Foundation/" target="_blank"><img src="https://img.shields.io/nuget/v/Meadow.Foundation.svg?label=Meadow.Foundation" alt="NuGet Gallery for Meadow.Foundation" /></a> |

Rotary encoders are similar in form factor to potentiometers, but instead of modifying a voltage output, they send a digital signal encoded using Gray Code when rotated that can be decoded to ascertain the direction of turn.

<img src="/API_Assets/Meadow.Foundation.Sensors.Rotary.RotaryEncoder/RotaryEncoder.jpg"  />

Rotary encoders have several advantages over potentiometers as input devices, namely:

* They’re more power efficient; they only use power when actuated.
* They’re not rotation-bound; they spin infinitely in either direction.
* Many rotary encoders also have a built-in pushbutton.

Rotary encoders are used almost exclusively on things like volume knobs on stereos.

And because they’re not rotation bound, they are especially useful in the case in which a device might have multiple inputs to control the same parameter. For instance, a stereo’s volume might be controlled via a knob and a remote control. If a potentiometer were used for the volume knob, then the actual volume could get out of synch with the apparent value on the potentiometer when the volume was changed via the remote.

For this reason, rotary encoders are particularly useful in connected things, in which parameters might be controlled remotely.

### Code Example

```csharp
protected int value = 0;
protected RotaryEncoderWithButton rotaryEncoder;

public override Task Initialize()
{
    Resolver.Log.Info("Initializing Hardware...");

    // Note: on the rotary encoder in the hack kit, the pinout is as
    // follows:
    //
    // | Encoder Name | Driver Pin Name |
    // |--------------|-----------------|
    // | `SW`         | `buttonPin`     |
    // | `DT`         | `aPhasePin`     |
    // | `CLK`        | `bPhasePin`     |

    // initialize the encoder
    rotaryEncoder = new RotaryEncoderWithButton(Device.Pins.D07, Device.Pins.D08, Device.Pins.D06);

    //==== Classic Events
    rotaryEncoder.Rotated += RotaryEncoder_Rotated;

    rotaryEncoder.Clicked += (s, e) => Resolver.Log.Info("Button Clicked");

    rotaryEncoder.PressEnded += (s, e) => Resolver.Log.Info("Press ended");

    rotaryEncoder.PressStarted += (s, e) => Resolver.Log.Info("Press started");

    Resolver.Log.Info("Hardware initialization complete.");

    return Task.CompletedTask;
}

private void RotaryEncoder_Rotated(object sender, RotaryChangeResult e)
{
    switch (e.New)
    {
        case RotationDirection.Clockwise:
            value++;
            Resolver.Log.Info($"/\\ Value = {value} CW");
            break;
        case RotationDirection.CounterClockwise:
            value--;
            Resolver.Log.Info($"\\/ Value = {value} CCW");
            break;
    }
}

```

[Sample project(s) available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples/Sensors.Rotary.RotaryEncoderWithButton_Sample)

###Two-bit Gray Code

This rotary encoder driver works with most rotary encoders which return a two-bit Gray Code which is the minimum number of bits necessary to describe direction. Most common rotary encoders use two-bit Gray Code, so this driver should work with most common rotary encoders.

The following example uses a rotary encoder to adjust the brightness of a PwmLed.

```csharp
public class MeadowApp : App<F7Micro, MeadowApp>
{
    protected RotaryEncoder _rotary = null;
    protected PwmLed _led = null;
    // how much to change the brightness per rotation step. 
    // 0.05 = 20 clicks to 100%
    protected float _brightnessStepChange = 0.05F; 

    public MeadowApp()
    {
        // instantiate our peripherals
        _rotary = new RotaryEncoder(Device.Pins.D07, Device.Pins.D09);
        _rotary.Rotated += RotaryRotated;

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
}
```

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/main/Source/Meadow.Foundation.Core.Samples) 

### Wiring Example

Note, depending on your encoder, it may have a common/ground (gnd) or (-) leg in addition to the positive (+) leg. If it does, make sure to wire it to ground.

The a-phase pin may be labeled (A), (CLK) or other. If the Rotated event is indicating the wrong direction, simply switch the a-phase and b-phase pins.

<img src="/API_Assets/Meadow.Foundation.Sensors.Rotary.RotaryEncoder/RotaryEncoder_Fritzing.svg" />
