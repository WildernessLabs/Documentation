---
layout: Meadow
title: Meadow Application Lifecycle Events
subtitle: Responding to application lifecycle events as the Meadow board triggers them.
---

Meadow connect several events that indicate important events in the process of launching and running your application, such as initialization, errors, and sleep states.

These events are channeled through methods on the `App` base class. You can overload these methods to have your own code executed when these lifecycle events happen.

## `Run`

* `Task Run()`

## `Initialize`

* `Task Initialize()`

## `OnShutdown`

* `void OnShutdown()`

## `OnError`

* `void OnError(Exception e, out bool recovered)`

## `OnResume`

* `void OnResume()`

## `OnSleep`

* `void OnSleep()`

## `OnRecovery`

* `void OnRecovery(Exception e)`

## `OnUpdate`

* `void OnUpdate(Version newVersion, out bool approveUpdate)`

## `OnUpdateComplete`

* `void OnUpdateComplete(Version oldVersion, out bool rollbackUpdate)`

## `OnReset`

* `void OnReset()`


<!-- ## [Next - Input/Output](/Meadow/Meadow_Basics/IO/) -->
