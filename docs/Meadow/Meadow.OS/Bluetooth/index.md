---
layout: Meadow
title: Bluetooth
subtitle: Meadow BLE Implementation
---

![Bluetooth logo](Bluetooth_Logo.svg)

## Bluetooth Low-Energy (BLE) Feature Subset

Meadow contains an initial subset of BLE features. While this covers a large number of basic Bluetooth use cases, and a starting point from which additional features will be added. It's not a complete BLE implementation. The BLE specification contains a very large number of potential features, from common to rarely used. As you use and test the current implementation, please help us prioritize and curate what features get added next. If you have a use case that is not currently covered, please file an issue in the [Meadow_Issues GitHub repo](https://github.com/WildernessLabs/Meadow_Issues/issues) describing your use case and the features needed.

### Currently Available Features

The following features are available in this release:

* **User-Definable BLE Definition Tree** - You can create a BLE tree `Definition` of _services_ and _characteristics_ that contain primitive type values including; `int`, `double`, `string`, etc.
* **BLE Server** - Start a Bluetooth server on the Meadow and initialize it with your BLE definition tree.
* **Accept Client Connections** - Connect to the server from a _client_ device application such as a mobile phone.
* **Edit Values at Runtime** - Write values to the graph from your managed application. Those values can be read by a BLE Client app.
* **Value Change Notifications** - Get notified in your Meadow application when a BLE client writes to a characteristic in your BLE tree.

#### Planned Features

The following features are not available today, but are on-deck for implementation:

* **Pairing & Bonding** - The ability to pair a client to the server.
* **Encrypted Communications** - Once paired and bonded, server and client will use encrypted transport for communications.
* **`NOTIFY` Properties** - Once connected, _NOTIFY_ properties allow characteristics to _push_ values to the client from server.

## BLE Clients

There are a variety of BLE client applications and libraries. When filing Bluetooth issues, please let us know which client you're using.

### Mobile BLE Clients

There are several good BLE mobile client applications available from iOS and Android app stores that can expedite testing and validation of BLE endpoints including:

* Android: [BLE Scanner](https://play.google.com/store/apps/details?id=com.macdom.ble.blescanner)
* iOS: [BLE Scanner 4.0](https://apps.apple.com/us/app/ble-scanner-4-0/id1221763603#?platform=iphone)

### C# and Xamarin BLE Clients

* **Bluetooth LE plugin for Xamarin** - A dedicated mobile BLE client that makes cross-platform BLE easy. [Nuget](https://www.nuget.org/packages/Plugin.BLE/), [GitHub Site](https://github.com/xabre/xamarin-bluetooth-le)
* **Shiny** - Cross-platform device services (including BLE) project. [Nuget](https://www.nuget.org/packages/Shiny.BluetoothLE/), [GitHub Site](https://github.com/shinyorg/shiny).
* **32feet.NET** - A project to make personal area networking technologies such as Bluetooth, Infrared (IrDA) and more, easily accessible from .NET code. [Nuget](https://www.nuget.org/packages/InTheHand.BluetoothLE), [GitHub Site](https://github.com/inthehand/32feet).

# Using Meadow's BLE Server

## Pre-requisites

BLE features have been added and improved since their introduction in beta-5 releases. Make sure you have updated your Meadow to the latest Meadow OS and ESP32 firmware to have access to all available BLE features. See the [Deploying Meadow.OS Guide](/Meadow/Getting_Started/Deploying_Meadow%2EOS/) for more information.

## Defining a BLE Service Definition

The Meadow BLE server must be initialized with a `Definition` tree which includes a graph of the following three things:

* **`Device`** - This is the Meadow device that hosts the BLE server. BLE definitions should include a `deviceName` property that provides a friendly name to identify the device.
* **`Services`** - A service is a high-level group of accessible endpoints, identified by a _UUID_ that define a particular "feature" that can be interacted with in BLE. There are a number of predefined services such as _Battery_, _Blood Pressure_, and _Device Information_ that have known UUIDs, but you can also define your own, custom services.
* **`Characteristics`** - These are properties within a given service (also identified by a UUID) exposed as data endpoints that can be read from, and optionally, written to, by clients. As with Services, there are known characteristics such as _Apparent Wind Speed_, or _Humidity_, but again, you can also define your own custom characteristics.

### Important Note about Known Services and Characteristics

When creating known services and characteristics with established UUIDs, some of the features of them (such as whether they can be written to) might be locked down. Meaning that if a known characteristic is read-only, the underlying library will not allow it to be written to.

For a full list of known IDs for services and characteristics, see the [Bluetooth Assigned Numbers documents](https://www.bluetooth.com/specifications/assigned-numbers/)

### Creating a BLE `Definition` Tree

To define your server's characteristic graph, you must create a BLE `Definition` object tree.

For example, the following code specifies a Meadow BLE server instance that advertises to BLE clients as a device named `MY MEADOW` and contains a single service with three simple properties:

```csharp
var definition = new Definition(
    "MY MEADOW",
    new Service(
        "ServiceA",
        253,
        new CharacteristicBool(
            "My Bool",
            uuid: "017e99d6-8a61-11eb-8dcd-0242ac1300aa",
            permissions: CharacteristicPermission.Read,
            properties: CharacteristicProperty.Read
            ),
        new CharacteristicInt32(
            "My Number",
            uuid: "017e99d6-8a61-11eb-8dcd-0242ac1300bb",
            permissions: CharacteristicPermission.Write | CharacteristicPermission.Read,
            properties: CharacteristicProperty.Write | CharacteristicProperty.Read
            ),
        new CharacteristicString(
            "My Text",
            uuid: "017e99d6-8a61-11eb-8dcd-0242ac1300cc",
            maxLength: 20,
            permissions: CharacteristicPermission.Write | CharacteristicPermission.Read,
            properties: CharacteristicProperty.Write | CharacteristicProperty.Read
            )
        )
    );

```

Examining the previous code, there are some important details:

* The first property in the `Definition` tree is `deviceName`, which defines the name of the device/server.
* The tree above creates a single service with a randomly chosen ID of `253`
* Service Names are for convenience only, they are not viewable by the client.
* Characteristics are typed to try to make programming easier without passing `byte[]` around.
* The Uuid in the Bluetooth spec can be either a `Guid` or a `ushort` but the `ushort` gets translated to a `Guid` anyway, so we've opted for just `Guid` support in this release.
*	Permissions versus properties are nuanced. See the Bluetooth spec for details, but for general purposes just make them the same
* _Meadow currently only supports `Read` or `Write` even though the `enum`s have all of the BLE supported values_
* Strings require a maxLength. Try not to exceed it. Client writes of larger than this length may be problematic (we need to do more testing)

## Initializing the Bluetooth Server

Once you have a BLE tree definition you can start initialize the BLE server with the following code:

```csharp
Device.BluetoothAdapter.StartBluetoothServer(definition);
```

## Setting Data for a Client to Read

Interacting with the Bluetooth Characteristics will be done through your `Definition`. When you want to set a value for a Client to read, use the `SetValue()` method on a `Characteristic`.

For example, with our example definition, we could set the boolean and integer Characteristics every two seconds with a loop like this:

```csharp
bool state = false;
int value = 0;

while (true)
{
    // we can access the characteristics by index by name if we want:
    definition.Services[0].Characteristics["My Number"].SetValue(value);

    // or even by the UUID:
    definition.Services[0].Characteristics["017e99d6-8a61-11eb-8dcd-0242ac1300aa"].SetValue(state);

    value++;
    state = !state;

    Thread.Sleep(2000);
}
```

Note that you can access a Characteristic by index, name or UUID (the latter two are case-insensitive as well);

## Knowing when a Client Writes a Value

Your application can be notified when a Client sets a `Characteristic` value through the `ValueSet` event. You can wire up any of the `Characteristics` you're interested in.

To continue our example, if we wanted to wire up all of the Characteristics (yes, in this example even the read-only ones that will never actually get written to) we could use the following:

```csharp
foreach (var characteristic in bleTreeDefinition.Services[0].Characteristics) {
    characteristic.ValueSet += (c, d) => {
        Console.WriteLine($"HEY, I JUST GOT THIS BLE DATA for Characteristic '{c.Name}' of type {d.GetType().Name}: {d}");
    };
}
```

The incoming parameters are the `Characteristic` definition being set and a type-safe value.

## Sample projects

You can look through these samples to use Bluetooth on Meadow with a Xamarin.Forms companion app.

<table>
  <tbody>
    <tr>
      <td style={{ width: "50%" }}>
        <img
          alt="Video showing LED color selection from a phone app color slider and reflected on an RGB LED connected to a Meadow."
          src="../../../Common_Files/Hackster/BleRgbLed.gif"
        />
      </td>
      <td style={{ width: "50%", fontSize: 20 }}>
        <p style={{ fontSize: 22 }}>
          <a
            style={{ fontSize: 25 }}
            href="https://www.hackster.io/wilderness-labs/control-an-rgb-led-via-bluetooth-with-meadow-and-xamarin-9b2af3"
          >
            Control an RGB LED via Bluetooth with Meadow and Xamarin
          </a>
          <br />
          Check this project to learn how to control an RGB LED using Meadow's
          Bluetooth capability with a Xamarin.Forms app.
        </p>
      </td>
    </tr>
    <tr>
      <td style={{ width: "50%" }}>
        <img
          alt="Video showing servo rotation selection from a phone app slider and reflected on a servo connected to a Meadow."
          src="../../../Common_Files/Hackster/BleServo.gif"
        />
      </td>
      <td style={{ width: "50%" }}>
        <p style={{ fontSize: 22 }}>
          <a
            style={{ fontSize: 25 }}
            href="https://www.hackster.io/wildernesslabs/control-a-servo-via-bluetooth-with-meadow-and-xamarin-57940a"
          >
            Control a Servo via Bluetooth with Meadow and Xamarin
          </a>
          <br />
          Check this project to learn how to control a micro servo using
          Meadow's Bluetooth capability with a Xamarin.Forms app.
        </p>
      </td>
    </tr>
    <tr>
      <td style={{ width: "50%" }}>
        <img
          alt="Video showing a remote controlled vehicle built with a Meadow and controlled by a phone app remote."
          src="../../../Common_Files/Hackster/BleRover.gif"
        />
      </td>
      <td style={{ width: "50%" }}>
        <p style={{ fontSize: 22 }}>
          <a
            style={{ fontSize: 25 }}
            href="https://www.hackster.io/wilderness-labs/meadow-rover-part-2-remote-control-over-bluetooth-fe43f5"
          >
            Meadow Rover Part 2: Remote Control over Bluetooth
          </a>
          <br />
          Control the Meadow Rover with Bluetooth using a Xamarin application on
          your mobile device.
        </p>
      </td>
    </tr>
  </tbody>
</table>
