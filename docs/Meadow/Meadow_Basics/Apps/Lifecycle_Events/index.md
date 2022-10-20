---
layout: Meadow
title: Meadow Application Lifecycle Events
subtitle: Responding to application lifecycle events as the Meadow board triggers them.
---

Meadow provides several connection points to respond to important events in the process of launching and running your application, such as initialization, errors, and sleep states.

These events are channeled through methods on the `App` base class and events on the platform OS available through the current Meadow device being used.

## Platform OS lifecycle events

The sleep and resume events are handled by the platform operating system where your Meadow code is executing. These are standard .NET events where you can attach a handler either inline or via a delegate.

### `BeforeSleep`

* `Device.PlatformOS.BeforeSleep += () => {...};`

The `BeforeSleep` event is called prior to your application sleeping via the [`Device.PlatformOS.Sleep(...)` method](../Sleep), allowing you a chance to resolve anything before the Meadow device enters a power-saving sleeping mode.

```csharp
Device.PlatformOS.BeforeSleep += () =>
{
    Resolver.Log.Info("Device is about to enter sleep mode");
    // Actual serial output is asynchronous, so we need to delay a little to ensure the output is completed before Meadow sleeps.
    Thread.Sleep(500);
};
```

### `AfterWake`

* `Device.PlatformOS.AfterWake += () => {...};`

The `AfterWake` event is called when your application resumes execution after sleeping via the [`Device.PlatformOS.Sleep(...)` method](../Sleep), allowing you a chance to restore anything before the Meadow device starts executing your code again.

```csharp
Device.PlatformOS.AfterWake += () =>
{
    Resolver.Log.Info("Device has returned from sleep mode");
};
```

### `BeforeReset`

* `Device.PlatformOS.BeforeReset += () => {...}`

The `BeforeReset` event is called prior to your application sleeping via the `Device.PlatformOS.Reset()` method, allowing you a chance to resolve anything before the Meadow device restarts completely.

```csharp
Device.PlatformOS.BeforeReset += () =>
{
    Resolver.Log.Info("Device is about to reset");
    // Actual serial output is asynchronous, so we need to delay a little to ensure the output is completed before Meadow restarts.
    Thread.Sleep(500);
};
```

## Application event lifecycle methods

Your application can respond to application lifecycle events through methods on the `App` base class. You can overload these `App` methods to have your own code executed when these lifecycle events occur.

For the `App` methods, the default implementations are often empty, but if your app is inheriting from a parent class that has its own app lifecycle event implementations, you may want to call those parent event handlers from your own app overrides.

### `Initialize`

* `Task Initialize()`

The `Initialize` method is called once when Meadow is first booted. It is also called once when Meadow is restarted either via reset or [automatic error recovery](../../../Meadow.OS/Automatic_Restarts).

### `Run`

* `Task Run()`

The `Run` method is called once after your app's `Initialize` method.

### `OnReset`

* `void OnReset()`

The `OnReset` method is called after Meadow restarts, either manually via `Device.PlatformOS.Reset()` or via [automatic error recovery](../../../Meadow.OS/Automatic_Restarts).

### `OnShutdown`

* `Task OnShutdown()`

The `OnShutdown` method is called before the Meadow is shut down, offering an opportunity to perform some clean-up before stopping execution of your app.

### `OnError`

* `void OnError(Exception e)`

The `OnError` method is called when your application causes an unhandled exception, but before it stops running your app or triggers any [automatic error recovery](../../../Meadow.OS/Automatic_Restarts). You will have a chance to inspect and, optionally, handle this error.

### `OnUpdate`

* `void OnUpdate(Version newVersion, out bool approveUpdate)`

The `OnUpdate` method is called when Meadow is going to attempt an over-the-air (OTA) app update.

### `OnUpdateComplete`

* `void OnUpdateComplete(Version oldVersion, out bool rollbackUpdate)`

The `OnUpdateComplete` method is called after Meadow has completed an over-the-air (OTA) app update.
