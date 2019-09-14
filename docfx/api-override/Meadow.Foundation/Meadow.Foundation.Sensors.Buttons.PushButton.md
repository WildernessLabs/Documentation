---
uid: Meadow.Foundation.Sensors.Buttons.PushButton
remarks: *content
---

The PushButton class represents a simple push button, such as a tactile momentary button. To get notified when it’s clicked, subscribe to the Clicked event. If you need to know when the button is held down, subscribe to the PressStarted and PressEnded events.

---
uid: Meadow.Foundation.Sensors.Buttons.PushButton
example: [*content]
---

The following example shows how to register event handlers to print in the console when pressing and relasing the push button:

```csharp
using System.Threading;
using Meadow;

namespace PushButtonSample
{
    public class Program
    {
        public static void Main()
        {
            var pushButton = new PushButton(
                Device.Pins.D08, 
                Meadow.Foundation.CircuitTerminationType.High
            );
            pushButton.PressStarted += PushButtonPressStarted;
            pushButton.PressEnded += PushButtonPressEnded;

            Thread.Sleep(Timeout.Infinite);
        }

        private void PushButtonPressStarted(object sender, EventArgs e)
        {
            Console.WriteLine("Press Started..."); 
        }

        private void PushButtonPressEnded(object sender, EventArgs e)
        {
            Console.WriteLine("Press Ended...");
        }
    }
}
```

##### Example Circuit

![](../../API_Assets/Meadow.Foundation.Sensors.Buttons.PushButton/PushButton.svg)