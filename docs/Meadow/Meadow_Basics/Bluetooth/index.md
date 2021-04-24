# Bluetooth Low Energy on Meadow Beta 5.0

The Beta 5 release of Meadow contains a small subset of BLE capabilities to help developers, customers and the community at large to both test aas well as provide feedback as to which BLE features are important to their projects and products. The BLE specification contains a very large number of potential features, from common to rarely used.  We've implemented a small subset to get started to allow early access and feedback so we can focus our resource efforts on what our users need.

This document is intended to outline what you can do today with the Meadow, how to set it up, and best practices.

> *Please file all bugs and feature requests at:*
> https://github.com/WildernessLabs/Meadow_Issues/issues

# Capabilities

BLE on Meadow b5.0 allows you to:

- define a simple graph of bluetooth characteristics that can contain simple values (`int`, `double`, `string`, etc)
- Start a bluetooth server on the Meadow and initialize it with your characteristic graph
- Connect to the server from a Client device application
- Write values to the graph from your managed application.  Those values can be read by the BLE Client app.
- Get notified and receive a value in your mnaged application when a BLE client writes to a characteristic in your graph.

# Not Included

Features not currently supported include:

- Bonding a client to the server
- `NOTIFY` properties (i.e. characteristics that automatically push to a Client)
- Encrypted communications

# BLE Clients

Almost all testing of the BLE stack has been done from the BLE Scanner Android application.  If you are using another client, especially your own, please provide that information in any bug reports.

https://play.google.com/store/apps/details?id=com.macdom.ble.blescanner

# Setting up

BLE requires your meadow be updated to the b5.0 binaries.  This includes both a Meadow OS and new firmware for the ESP32.  See the Developer section on our web site for more details if you've not updated your Meadow before.

# Code

Now the fun part - implementing your BLE Server.

The Meadow Bluetooth API is comprised primarily of 3 things:

- `Device`: really the Meadow
- `Services`: basically groupings of Characteristics
- `Characteristics`: properties that are exposed by your server 

## Defining your Characteristic Graph

To define your server's charcteristic graph, We create a `Definition` that contains these items.  As an example, let's assume you want your Meadow to show up to Clients as a device named `MY MEADOW` that contains a single service with two properties.  Let's say the properties are an integer that Clients can read or write and a string that is read-only.

Creating the definition would look like this:

```
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

Let's look at what's happeing here.

- First we provide the name for the meadow (this is the device name Clients will see when discoviering devices).
- Next we're creating a single service.  The ID of our service is 253.  This ID is pretty open.  There's nothing magical about the "253" value.
	- NOTE: The name is actually only a programmer's aid.  It shows up nowhere in the actual BLE data t the client.
- Next we add 3 characteristics to the service.
	- Characteristics are typed to try to make programming easier without passing `byte[]` around.
	- The Uuid in the Bluetooth spec can be either a `Guid` or a `ushort` but the `ushort` gets translated to a `Guid` anyway, so we've opted for just `Guid` support in this release.
	- Permissions versus properties are nuanced.  See the Bluetooth spec for details, but for general purposes just make them the same
	- *Meadow currently only supports `Read` or `Write` even though the `enum`s have all of the BLE supported values*
	- Strings require a maxLength.  Try not to exceed it.  Client writes of larger than this length may be problematic (we need to do more testing)

## Initializing the Bluetooth Server

Once you have a definition, starting Bluetooth is as simple as this:

```
Device.InitBluetoothAdapter();
Device.BluetoothAdapter.StartBluetoothStack(definition);
```

## Setting Data for a Client to Read

Interacting with the Bluetooth Characteristics will be done through your `Definition`.  When you want to set a value for a Client to read, use the `SetValue` method on a `Characteristic`.

For example, with our example definition, we could set the boolean and integer Characteristics every two seconds with a loop like this:

```
bool state = false;
int value = 0;

while (true)
{
    // we can access the characteristics by index by name if we want:
    _definition.Services[0].Characteristics["My Number"].SetValue(value);

    // or even by the UUID:
    _definition.Services[0].Characteristics["017e99d6-8a61-11eb-8dcd-0242ac1300aa"].SetValue(state);

    value++;
    state = !state;

    Thread.Sleep(2000);
}
```

Note that you can access a Characteristic by index, name or UUID (the latter two are case-insensitive as well);

## Knowing when a Client Writes a Value

Your application can be notified when a Client sets a `Characteristic` value through the `ValueSet` event.  You can wire up any of the `Characteristics` you're interested in.

To continue our example, if we wanted to wire up all of the Characteristics (yes, in this example even the read-only ones that will never actually get written to) we could use the following:

```
foreach (var c in _definition.Services[0].Characteristics)
{
    c.ValueSet += (c, d) =>
    {
        Console.WriteLine($"HEY, I JUST GOT THIS BLE DATA for Characteristic '{c.Name}' of type {d.GetType().Name}: {d}");
    };
}

The incoming paramerters are the `Characteristic` definition being set and a type-safe value.
```
