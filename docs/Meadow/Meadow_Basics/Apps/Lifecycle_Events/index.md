---
layout: Meadow
title: Meadow Application Lifecycle Events
subtitle: Responding to application lifecycle events as the Meadow board triggers them.
---

Meadow provides several connection points to respond to important events in the process of launching and running your application, such as initialization, errors, and sleep states.

These events are channeled through methods on the `App` base class. You can overload these methods to have your own code executed when these lifecycle events happen.

The default implementations are often empty, but if your app is inheriting from a parent class that has its own app lifecycle event implementations, you may want to call those parent event handlers from your own app overrides.

## `Initialize`

* `Task Initialize()`

The `Initialize` method is called once when Meadow is first booted. It is also called once when Meadow is restarted either via reset or [automatic error recovery](../../../Meadow.OS/Automatic_Restarts/).

## `Run`

* `Task Run()`

The `Run` method is called once after your app's `Initialize` method.

## `OnReset`

* `void OnReset()`

<!-- The `OnReset` method is called ... -->

## `OnShutdown`

* `Task OnShutdown()`

The `OnShutdown` method is called before the Meadow is shut down, offering an opportunity to perform some clean-up before stopping execution of your app.

## `OnError`

* `void OnError(Exception e, out bool recovered)`

The `OnError` method is called when your application causes an unhandled exception. You will have a chance to inspect and, optionally, handle this error. If you resolve the error, you can set the `recovered` output parameter to `true`.

## `OnSleep`

* `void OnSleep()`

The `OnSleep` method is called when you request your application sleeps via the [`Sleep(...)` method](../Sleep/), allowing you a chance to resolve anything before the Meadow device begins sleeping.

## `OnResume`

* `void OnResume()`

The `OnResume` method is called when your application resumes execution after sleeping from the [`Sleep(...)` method](../Sleep/).

## `OnRecovery`

* `void OnRecovery(Exception e)`

<!-- The `OnRecovery` method is called after you application recovers from a previously unhandled exception. -->

## `OnUpdate`

* `void OnUpdate(Version newVersion, out bool approveUpdate)`

## `OnUpdateComplete`

* `void OnUpdateComplete(Version oldVersion, out bool rollbackUpdate)`

<!-- ## [Next - Input/Output](/Meadow/Meadow_Basics/IO/) -->
