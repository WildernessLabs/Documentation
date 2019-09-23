---
layout: Meadow
title: Events and IObservable
subtitle: Standard and advanced notification subscription in Meadow.
---

# Interrupts & Notifications

Meadow has two complementary approaches to notifications when interrupts (changes) happen on inputs. The first is the classic .Net Eventing pattern, in which an `event` is raised on change, and the second is an `IObservable` pattern, which is a more powerful and flexible _reactive_-style approach.

## Classic Events

The event pattern is a familiar and simple pattern for subscribing to change notifications; interrupts (changes) on inputs such as digital or analog inputs can raise a `Changed` notification, that can be subscribed to via a classic handler (delegate):

```csharp
public class ButtonEventsApp : App<F7Micro, ButtonEventsApp>
{
    IDigitalInputPort input;

    public ButtonEventsApp()
    {
        input = Device.CreateDigitalInputPort(Device.Pins.D02, debounceDuration: 20);
        input.Changed += Input_Changed;
    }

    private void Input_Changed(object sender, DigitalInputPortEventArgs e)
    {
        Console.WriteLine("Changed: " + e.Value.ToString() + ", Time: " + e.Time.ToString());
    }
}
```

## `IObservable`/Reactive Pattern

However, for more advanced filtering we've exposed `System.IObservable` support, along with a [`FilterableObserver<T>`](/docs/api/Meadow/Meadow.FilterableObserver-1.html) that allows you to subscribe to an observable, with an optional filter on the events, as well as a handler shortcut. Consider the following code:

```csharp
public class InputObservableApp : App<F7Micro, InputObservableApp>
{
    IDigitalInputPort _input;

    public InputObservableApp()
    {
        // create an input port on D02. 
        _input = Device.CreateDigitalInputPort(Device.Pins.D02);

        // Note that the filter is an optional parameter. If you're
        // interested in all notifications, don't pass a filter/predicate.
        _input.Subscribe(new FilterableObserver<DigitalInputPortEventArgs>(
            e => {
                Console.WriteLine($"Observer Observing the Observable, Observably speaking, Time: {e.Time.Millisecond}, Value: {e.Value}");
            },
            f => {
                return (f.Time - f.PreviousTime > new TimeSpan(0, 0, 0, 0, 1000));
            }));
    }
}
```

In the case of the code above, it uses a `FilterableObserver` to filter out events that occur less than a second after the last notification.

However, the `Subscribe` method will take any `IObservable`, so you can also use whatever Reactive pattern and framework you choose.

### Advantages of FilterableObserver

The `FilterableObservable` pattern has the distinct advantage of handling event filtering internally, meaning that consuming code will only be notified with the notifications satisfy the filter expression passed in. 