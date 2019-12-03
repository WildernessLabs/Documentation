---
layout: Meadow
title: API Samples
subtitle: Simple and intuitive API code samples wiring a small set of peripherals and sensors together
---

### Controlling a Hitec Servo

```csharp
Servo servo; = new Servo(
    Device.CreatePwmPort(Device.Pins.D05), 
    NamedServoConfigs.HiTecStandard
);
servo.RotateTo(90);
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