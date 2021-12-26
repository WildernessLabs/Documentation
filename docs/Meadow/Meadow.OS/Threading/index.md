---
layout: Meadow
title: Threading
subtitle: Using threads, Tasks, and parallel programming in Meadow.OS.
---

Parallel programming in Meadow.OS is essentially the same as any other .NET enabled platform. Meadow fully supports `System.Threading` and `System.Threading.Tasks` as well as the underlying Task Parallel Library methods.

For example code using these technologies, see the following samples in the [Meadow.Core.Samples repo](https://github.com/WildernessLabs/Meadow.Core.Samples):

 * **[Threading](https://github.com/WildernessLabs/Meadow.Core.Samples/blob/main/Source/Meadow.Core.Samples/OS/Threading/MeadowApp.cs)**
 * **[Threading.Tasks](https://github.com/WildernessLabs/Meadow.Core.Samples/blob/main/Source/Meadow.Core.Samples/OS/Threading.Tasks/MeadowApp.cs)**


## `BeginInvokeOnMainThread`

The `MeadowOS` class has a `BeginInvokeOnMainThread` method that enables code to be put into a queue to be executed on the main thread:

```csharp
Task.Run(() => {
    MeadowOS.BeginInvokeOnMainThread(() => {
            ...
        });
});
```