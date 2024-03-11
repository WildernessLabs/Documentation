---
layout: Meadow
title: Developing Cellular Applications
subtitle: Enabling Cellular on your Meadow Application
---

Using Cellular on Meadow, you will need to do three things:

* Configure your cellular provider and connection.
* Configure the Meadow pins and network setting.
* Handle cell connection and start making network requests

## Adding a cell.config.yaml file

Create a **cell.config.yaml** file, set the `Copy To Output` property to `Copy always` or `Copy if newer`, and fill out the values under the `Settings` section like APN, Module, and a additional optional pins to ensure a proper connection with your internet provider. Here's what a cell config file looks like with the required and optional fields:

```yaml
Settings:
    APN: YOUR-APN         # (required) Access Point Name
    Module: BG95M3        # (required) Module model (BG770A, BG95M3 or M95)
    User: USER            # (optional) APN user
    Password: PASSWORD    # (optional) APN password
    Operator: 00000       # (optional) Carrier numeric operator code
    Mode: CATM1           # (optional) Network mode (CATM1, NBIOT or GSM)
    Interface: /dev/ttyS1 # (optional) Serial interface
                          # UART1 (COM1) = /dev/ttyS0
                          # UART4 (COM4) = /dev/ttyS1 (default),
                          # UART6 = /dev/ttyS3)
    TurnOnPin: D10        # (optional) Enable pin to turn the module on/off.
                          # Default value is Meadow Pin name D10
```

A few things to consider:

* If the carrier numeric operator code (**Operator**) or the network mode is not specified (**Mode**), the module will attempt to automatically determine the optimal network based on the M2M sim card inserted and your location.
* **However, if you encounter any connectivity issues, we recommend to set the operator code and operation mode to the `Operator` and `Mode` properties**. If you don't know this information, you can use the [**Cell Network Scanner**](#scanning-cell-networks) method that will list nearby networks in the area.
* `TurnOnPin` is a pin used to turn on the module.

## Specify Network Interface and reserved pins

In the `meadow.config.yaml` file, you need to specify `DefaultInterface` to `Cell` and specify the RX/TX serial pins and an additional pin for Meadow to enable or disable the cellular module, turning it on or off. **Important: The reserved pins must be specified by MCU Pin name, not by Meadow Pin name.**

* If you're using a [Meadow Feather V2](https://developer.wildernesslabs.co/Common_Files/Meadow_F7v2_Micro_Pinout.svg), you would connect the cellular module to `D00` and `D01`, which are the COM4 serial pins that, according to the [datasheet](https://developer.wildernesslabs.co/Meadow/Meadow_Basics/Hardware/Wilderness_Labs_Meadow_F7v2_Datasheet.pdf), the MCU Pin names are `PI9` and `PH13`, but in the config file we can ommit the `p` prefix. As for the enable pin, say if you connect it to the `D10` pin, the MCU pin name is `C7`. So the required values in the config file should look like this:

```yaml
# Device specific config
Device:
    # Name of the device
    Name: F7v2Feather

    # Corresponding MCU pin names for the reserved pins
    # (COMX_RX pin, COM_TX pin, ENABLE pin)
    ReservedPins: I9;H13;C7

# Network configuration
Network:
    #  Which interface should be used?
    DefaultInterface: Cell
```

* In the case that you're using a Project Lab v3, if you look at the [latest schematic](https://github.com/WildernessLabs/Meadow.ProjectLab/blob/main/Hardware/v3.e/Schematic.pdf) and trace what pins on the Meadow Core Compute Module are connected to the microBUS 1 connector, you'll find that are connected to pins `PB15`, `PB14` and `PA3` for the Serial RX/TX and Enable pins respectively:

```yaml
# Device specific config
Device:
    # Name of the device
    Name: ProjectLabV3

    # Corresponding MCU pin names for the reserved pins
    # (COMX_RX pin, COM_TX pin, ENABLE pin)
    ReservedPins: B15;B14;A3

# Network configuration
Network:
    #  Which interface should be used?
    DefaultInterface: Cell
```

## Handling Cell connection using a Meadow application

To check if you established a connection, you can use the `meadow listen` CLI command, which should return a message like this:
`Connection established successfully! IP address '100.69.106.222'.`

You can also check the Cell connection status by accessing the `IsConnected` property present in the `ICellNetworkAdapter`, as in the following example:

```csharp
var cell = Device.NetworkAdapters.Primary<ICellNetworkAdapter>();

if (cell.IsConnected)
{
    Console.WriteLine("Cell is connected!");
}
else
{
    Console.WriteLine("Cell isn't connected");
}
```

Therefore, you can use the `NetworkConnected` and `NetworkDisconnected` event handlers with Cell.

```csharp
var cell = Device.NetworkAdapters.Primary<ICellNetworkAdapter>();

cell.NetworkConnected += CellAdapter_NetworkConnected;
cell.NetworkDisconnected += CellAdapter_NetworkDisconnected;

void CellAdapter_NetworkConnected(INetworkAdapter networkAdapter, NetworkConnectionEventArgs e)
{
    Resolver.Log.Info("Cell network connected!");
}

void CellAdapter_NetworkDisconnected(INetworkAdapter networkAdapter)
{
    Resolver.Log.Info("Cell network disconnected!");
}
```

### Getting module IMEI

You can get some extra information about the connection and the module, such as the Cell Signal Quality (CSQ), and the International Mobile Equipment Identity (IMEI).

```csharp
var cell = Device.NetworkAdapters.Primary<ICellNetworkAdapter>();

cell.NetworkConnected += CellAdapter_NetworkConnected;

void CellAdapter_NetworkConnected(INetworkAdapter networkAdapter, INetworkAdapter networkAdapter)
{
    Resolver.Log.Info("Cell network connected!");

    ICellNetworkAdapter cellAdapter = networkAdapter as ICellNetworkAdapter;
    if (cellAdapter != null)
    {
        Console.WriteLine("Cell CSQ: " + cellAdapter.Csq);
        Console.WriteLine("Cell IMEI: " + cellAdapter.Imei);
    }
}
```

> **Note**: Before using the mentioned properties, ensure a successful connection has been established. The `Csq` property returns a static value (0-31) representing the signal quality obtained on the connection.

### Fetching Cell Signal Quality

It's important to note that the `Csq` property returns a cached value obtained from the connection, then to retrieve the most up-to-date CSQ (Cellular Signal Quality), you should utilize the `GetSignalQuality` method, as illustrated in the following example:

```csharp
var cell = Device.NetworkAdapters.Primary<ICellNetworkAdapter>();

double csq  = cell.GetSignalQuality();
Console.WriteLine("Cell Signal Quality: " + csq);
```

> **Note**: To convert the CSQ value to dBm, you need to use the formula: dBm = -113 + CSQ * 2 (where CSQ is the returned value). You may experience disconnection from the cellular network for a brief period while the module gets the signal quality, so we suggest to avoid calling this method frequently to ensure a seamless user experience.

## Additional resources

If you have trouble connecting to your cellular network, check out the [Troubleshooting](/Meadow/Meadow.OS/Cellular/Troubleshooting) guide for some tips on how to scan for available networks and check the cellular network connection logs.

If your cellular module supports it, you can also do GNSS positioning with the cellular module. Check out the [GNSS with Cellular](/Meadow/Meadow.OS/Cellular/Cellular_GNSS) guide for more information.
