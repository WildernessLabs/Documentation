---
layout: Meadow
title: Events and IObservable
subtitle: Understanding how to handle interrupts and notifications in Meadow.
---

Meadow has two complementary approaches to notifications when interrupts (changes) happen on inputs. The first is the classic .NET Eventing pattern, in which an `event` is raised on change, and the second is an `IObservable` pattern, which is a more powerful and flexible _reactive_-style approach.

## Classic Events

The event pattern is a familiar and simple pattern for subscribing to change notifications; interrupts (changes) on inputs such as digital or analog inputs can raise a `Changed` notification, that can be subscribed to via a classic handler (delegate):

```csharp
public class ButtonEventsApp : App<F7Micro, ButtonEventsApp>
{
    IDigitalInputPort input;

    public ButtonEventsApp()
    {
        input = Device.CreateDigitalInputPort(Device.Pins.D02);
        input.Changed += (s,e) => {
            Console.WriteLine($"Changed: {result.New.State.ToString()}, Time: {result.New.Time.ToString()}");
        };
    }
}
```

## `IObservable`/Reactive Pattern

However, for more advanced filtering we've exposed `System.IObservable` support, along with a [`FilterableObserver<T>`](/docs/api/Meadow/Meadow.FilterableObserver-1.html) that allows you to subscribe to an observable, with an optional predicate to filter on the events, as well as a handler shortcut. Consider the following code:

```csharp
public class InputObservableApp : App<F7Micro, InputObservableApp>
{
    IDigitalInputPort input;

    public InputObservableApp()
    {
        // create an input port on D02. 
        input = Device.CreateDigitalInputPort(Device.Pins.D02);

        // Note that the filter is an optional parameter. If you're
        // interested in all notifications, don't pass a filter/predicate.
        var observer = IDigitalInputPort.CreateObserver(
            handler: result => {
                Console.WriteLine($"Observer filter satisfied, time: {result.New.Time.ToShortTimeString()}");
            },
            // Optional filter paramter, showing a 1 second filter, i.e., only notify
            // if the new event is > 1 second from last time it was notified.
            filter: result => {
                if (result.Old is { } old) { // C# 8 null pattern matching for not null
                    return (result.New.Time - old.Time) > TimeSpan.FromSeconds(1);
                } else return false;
            });
        input.Subscribe(observer);
    }
}
```

A filter expression, or _predicate_, that tests for a particular condition is passed in to the `FilterableChangeObserver` constructor, which is used to test whether the change satisfies a particular condition. Any expression that evaluates to a `boolean` (`true`/`false`), can be used.

In the above code, it filters out events that occur less than a second after the last notification:

```csharp
return (result.New.Time - old.Time) > TimeSpan.FromSeconds(1);
```

### General Use

However, the `Subscribe` method will take any `IObservable`, so you can also use whatever Reactive pattern and framework you choose.

### Advantages of FilterableChangeObserver

The `FilterableChangeObservable` pattern has the distinct advantage of handling event filtering internally, meaning that consuming code will only be notified with the notifications satisfy the filter expression passed in. 