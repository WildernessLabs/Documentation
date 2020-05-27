---
layout: Meadow
title: API Samples
subtitle: Simple and intuitive API code samples wiring a small set of peripherals and sensors together
---

### Controlling a Hitec Servo

```csharp
var servo = new Servo(
  Device.CreatePwmPort(
    Device.Pins.D03), 
  NamedServoConfigs.SG90);

var button = new PushButton(
  Device, Device.Pins.D04);
button.Clicked += (s, e) => 
{
  servo.RotateTo(75);
  Thread.Sleep(1000);
  servo.RotateTo(0);
};
```

### Joystick Sample

```csharp
var joystick = new AnalogJoystick(
    Device,
    Device.Pins.A01,
    Device.Pins.A00,
    null, true);
joystick.StartUpdating();

while (true) {
  var position = 
    await joystick.GetPosition();
  TurnOnLeds(position);  
}
```

### Soil Moisture/Led bar

```csharp
var ledBarGraph = new LedBarGraph(
  arrayOfOutputPorts);
var capacitive = new Capacitive(
  Device.CreateAnalogInputPort(
    Device.Pins.A00),
  MINIMUM_VOLTAGE_CALIBRATION,
  MAXIMUM_VOLTAGE_CALIBRATION);

while (true) {
    float moisture = capacitive.Read();
    ledBarGraph.Percentage = moisture;                
    Thread.Sleep(1000);
}
```

### Read soil moisture sensor and graph it on a LED bar graph connected to an MCP23008 IO expander

```csharp
var mcpIOExpander = new Mcp23x08(Device.CreateI2cBus());
var ledBarGraph = new LedBarGraph(mcpIOExpander);
var soilMoistureSensor = new Capacitive (
    Device.CreateAnalogInputPort(Device.Pins.A01));

soilMoistureSensor.Subscribe(new FilterableObserver
    <AtmosphericConditionChangeResult, AtmosphericConditions>(
    handler => { ledBarGraph.Percentage = h.New.Moisture; },
    // Notify when it changes at least 10% moisture
    filter => { return (Math.Abs(e.Delta.Moisture) > 0.1); }
));

soilMoistureSensor.StartUpdating();
```