---
layout: Meadow
title: Service Resolver
subtitle: Accessing static services, app, and device at runtime in Meadow
sidebar_label: Resolver
---

This guide will give you an overall view of how to use the static Resolver class to access the currently running Meadow App, Device, Logger, and any registered services at runtime.

If you want to see entire API available through via the Resolver class, please look at the [Meadow Resolver API docs](/docs/api/Meadow/Meadow/Resolver/).

### Resolver.Device

`Resolver.Device` accesses the currently running [Meadow device](/docs/api/Meadow/Meadow/IMeadowDevice/), where you can access device-specific details such as capabilities and pins that are available.

### Resolver.App

`Resolver.App` accesses the currently running Meadow app, the instance of your [`App` class](/docs/api/Meadow/Meadow/App%60D%60/), where you can access your custom app properties and methods.

### Resolver.Log

`Resolver.Log` accesses the current [Meadow logger](/docs/api/Meadow/Meadow.Logging/Logger/) implementation, where you can send information with various levels of logging detail/severity. Additionally, you can also register your own logging providers. By default, Meadow will log to the console output that you can view via the `meadow listen` command from a terminal or other wired serial outputs.

Logging can be done at several levels of severity. There are methods for `Trace`, `Debug`, `Info`, `Warn`, and `Error`, which will log the provided details with that severity set. Additionally, you can use the various `{LogLevel}If` methods to log if a condition is met. For example, `Resolver.Log.ErrorIf(condition, "Error message")` will log the error message if the condition is met and returns true.

There are [several logging systems provided in the Meadow.Logging class](https://github.com/WildernessLabs/Meadow.Logging/tree/develop/Source/Meadow.Logging.LogProviders/Driver), such as logging to a file, UDP, or Meadow.Cloud. And there is a [sample app](https://github.com/WildernessLabs/Meadow.Logging/tree/develop/Source/Meadow.Logging.LogProviders/Samples) to see how these loggers can be used in your Meadow apps. From there, you can also create your own logger implementations and register them via `Resolver.Log.AddProvider(...)`. For more information, see the [Meadow.Logging API documentation](/docs/api/Meadow/Meadow.Logging/).

### Resolver services

Resolver offers properties to access several common services, such as JSON serialization, update service, sensor service, as well as a system for registering your own services for use elsewhere in your app.

`Resolver.JsonSerializer` provides access to a JSON serialization and deserialization library registered for you as part of the Meadow OS runtime setup. Currently, Meadow registers an instance of the MicroJson serialization library for JSON serialization and deserialization because of its performance capabilities in memory restricted environments like microcontrollers. From the registered serializer implementation, you can use `Resolver.JsonSerializer.Serialize(myObject)` and `Resolver.JsonSerializer.Deserialize<MyObject>(jsonString)` to serialize and deserialize objects to and from JSON strings.

`Resolver.MeadowCloudService` accesses the currently running Meadow Cloud service, which allows you to send data to Meadow.Cloud from your Meadow device.

`Resolver.CommandService` accesses the currently running command service, allowing you to handle commands sent to your Meadow device from Meadow.Cloud.

`Resolver.UpdateService` accesses the currently running [OTA update](/Meadow/Meadow.Cloud/OtA_Updates/) service, which allows you to update your Meadow device's firmware over the air from Meadow.Cloud.

`Resolver.SensorService` accesses the currently running sensor service, which provides a place to register sensors connected to your Meadow device to access them from anywhere in your app. For some platforms, like Project Lab boards, many of the onboard sensors will be registered for you already.

`Resolver.Services` is a `ServiceCollection` that contains all of the above services registered for you as well as any additional services you register yourself. You can register your own services for use elsewhere in your code (e.g., a Maple server, Avalonia, or MAUI app) by calling `Resolver.AddService<IMyService>(new MyService())`. Services are registered as singletons by default. Once registered, you can access your service from anywhere in your app by calling `Resolver.Get<IMyService>()` or `Resolver.GetOrCreate<IMyService>()`. The `Get` method will return your singleton service or `null` if it doesn't have one, while the `GetOrCreate` method will return your singleton service or create a new instance if it doesn't have one.
