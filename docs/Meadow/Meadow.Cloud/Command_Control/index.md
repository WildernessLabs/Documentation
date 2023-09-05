---
layout: Meadow
title: Command + Control
subtitle: 
---
[< Meadow.Cloud](../)  

## Overview

Command + Control makes it easy to send a command to a set of devices. Here is an oveview of the process: 

![alt text](cmd_overview.png "Command + Control Overview")

First, a message is sent from the client to the meadowcloud.co REST API, then an MQTT message is sent to the appropriate devices with the command payload. On the device, the payload is received, deserialized, and processed by an event handler.

## Sending a Command

A command can be sent to a set of collections or devices:

**Collections**
```json
POST /api/collections/commands
Authorization: Bearer <user token> or Authorization: api_key TODO 
{
   "collectionIds": ["COLLECTION_ID_1", "COLLECTION_ID_2"],
   "commandName": "myCommand",
   "args": {
     "arg1": 1,
     "arg2": "my string"
   },
   "qos": 0
}
```

**Devices**
```json
POST /api/devices/commands
Authorization: Bearer <user token> or Authorization: api_key TODO 
{
   "deviceIds": ["DEVICE_ID_1", "DEVICE_ID_2"],
   "commandName": "myCommand",
   "args": {
     "arg1": 1,
     "arg2": "my string"
   },
   "qos": 0
}
```

| Field | Description |
| ----- | ----------- |
| `collectionIds` | Devices in this set of Collection IDs will be sent the command |
| `deviceIds` | Devices in this set of Device IDs will be sent the command |
| `commandName` | Name of the command |
| `args` | An object of argument key value pairs |
| `qos` | [QoS of the MQTT message](https://www.hivemq.com/blog/mqtt-essentials-part-6-mqtt-quality-of-service-levels/), 0=At Most Once, 1=At least once, 2=Exactly Once |

## Receiving a Command

To receive and process a command in a Meadow application, the Command Service needs to be enabled and a custom event handler needs to be registered.

### Configuration

In `app.config.yaml`, set the following:

```yaml
Update:
  Enabled: true
```
When the Command Service is enabled, the device connects to MQTT and subscibes to the appropriate topic to receive commands from Meadow.Cloud. The Command Service is currently coupled with the Update Service. There is a work item to decouple this in an upcoming release.  

### Event Handler Registration

There are two ways to register an event handler to process commands: **typed** and **untyped**.

For the following examples, let's assume we are operating a greenhouse and want to send a command to control a heater. The heater can be set to a value between 1-100 (1=off, 100=max heat).

```json
{
   "deviceIds": ["DEVICE_ID_1"],
   "commandName": "SetHeatPower",
   "args": {
      "power": 60
   },
   "qos": 0
}
```

#### Typed

With the typed approach, we can create a class of type `IMeadowCommand`:

```c#
public class SetHeatPower : IMeadowCommand 
{
    public int Power { get; set; }
}
```
We can then register the event handler with this type:

```c#
Resolver.CommandService.Subscribe<SetHeatPower>(command =>
{
    Resolver.Log.Info($"Received SetHeatPower command with power: {command.Power}");
    // add code to handle heater hardware.
});
```

When a command message is received by the device, it looks for a class with the same name as `commandName` that implements `IMeadowCommand`, deserializes the message, and invokes the event. 

#### Untyped

If you have a command without arguments or want to handle raw commands in bulk, you can subscribe directly:

```c#
Resolver.CommandService.Subscribe(command =>
{
    Resolver.Log.Info($"Command received: {command.CommandName}, args: {command.Arguments}");

    if(command.CommandName == "SetHeatPower")
    {
        // add code to handle heater hardware
    }
});
```

## Sample Application

TODO: add sample application for reference