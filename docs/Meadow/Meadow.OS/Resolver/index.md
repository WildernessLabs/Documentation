---
layout: Meadow
title: Service Resolver
subtitle: Accessing static services, app, and device at runtime in Meadow
sidebar_label: Resolver
---

<!-- TODO: Link back to here from https://developer.wildernesslabs.co/Meadow/Meadow_Basics/Apps/#accessing-your-running-app-device-or-log -->

<!-- TODO: Questions
  * What sets up JsonSerializer?
  * All services are singleton? How to do an instance? (Mentioned in Slack at one point.)

-->

* Accessing the currently running Meadow App, Device, Logger, and services at runtime
  * API docs - https://developer.wildernesslabs.co/docs/api/Meadow/Meadow/Resolver/
  * Resolver.Device
    * `Resolver.Device.WatchdogEnable(TimeSpan.FromSeconds(10));` - https://developer.wildernesslabs.co/Meadow/Meadow.OS/Automatic_Restarts/#use-watchdog-timer-outside-app
  * Resolver.App
    * `Resolver.App.{app class properties}`
    * https://github.com/WildernessLabs/Meadow.Core/blob/main/source/Meadow.Core/Bases/App.cs#L34
  * Resolver.Log
    * 
    * Resolver.Log.Info, Resolver.Log.Warn, Resolver.Log.Error, Resolver.Log.Trace, Resolver.Log.ErrorIf
    * Default logs to `Console`
    * Provided loggers - https://github.com/WildernessLabs/Meadow.Logging/tree/develop/Source/Meadow.Logging.LogProviders/Driver ([samples](https://github.com/WildernessLabs/Meadow.Logging/tree/develop/Source/Meadow.Logging.LogProviders/Samples))
      * CloudLogger
      * FileLogger
      * UdpLogger
  * Resolver.JsonSerializer
    * `Resolver.JsonSerializer.Serialize(myObject);`
    * `Resolver.JsonSerializer.Deserialize<MyObject>(jsonString);`
  * Adding your own services to Resolver
    * `Resolver.AddService<IMyService>(new MyService());`
    * Register services for use elsewhere in your code (e.g., Maple server or MAUI and Avalonia apps)
    * [verify] Services are singletons by default, but you can use `.GetInstance<T>` to get a new instance
    * `.Get<T>` to get your singleton service, or null if it doesn't have one.
    * `.GetOrCreate<T>` to get your singleton service.
* Accessing services and static instances in Meadow
  * OTA updates - https://developer.wildernesslabs.co/Meadow/Meadow.Cloud/OtA_Updates/
    * UpdateService
    * MeadowCloudService
