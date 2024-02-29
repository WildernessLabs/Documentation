---
layout: Meadow
sidebar_label: Hello, F7 Feather
title: Hello, Meadow F7 Feather
subtitle: Create, deploy, and understand your first Meadow application.
---

![Meadow F7 Feather Getting Started Guide](wildernesslabs_feather_getting_started.jpg)

This guide shows you how to set up your [Meadow F7 Feather](https://store.wildernesslabs.co/collections/frontpage/products/meadow-f7-feather) board from unboxing all the way to deploying your fist Meadow app from either Visual Studio 2022 or Visual Studio Code.

<Tabs groupId="ide">
  <TabItem value="visualstudio2022" label="Visual Studio 2022" default>

### Step 1 - Install .NET Runtime

Download and install the latest version of the [.NET runtime](https://dotnet.microsoft.com/en-us/download).

### Step 2 - Install Visual Studio

Download and Install [Visual Studio](https://visualstudio.microsoft.com/) for Windows to prepare your development machine. Community edition will work fine.

### Step 3 - Add Meadow Visual Studio Extension

Open Visual Studio’s Extensions Manager and install the [VS 2022 Tools for Meadow](https://marketplace.visualstudio.com/items?itemName=WildernessLabs.vsmeadow2022) Extension.

### Step 4 - Deploy latest version of Meadow.OS

Use the [Meadow.CLI](../../../Meadow_Tools/Meadow_CLI/) to deploy [Meadow.OS](../../Deploying_Meadow%2EOS/) to your board to ensure it’s running with the latest version available.

### Step 5 - Create your first Meadow application

In **Visual Studio**, open the **Create a new project** window. When you search for **Meadow**, you will see a list of project templates, click on **Meadow F7 Feather App (Wilderness Labs)**:

![Visual Studio create a new project window showing several Meadow project temlates.](../../Common_Assets/wildernesslabs_meadow_projects.png)

Once the new project is loaded, right-click on the toolbar area and select the **Meadow Device List** item.

![Selecting the Meadow Device List item to show in the Visual Studio toolbar.](../../Common_Assets/wildernesslabs_meadow_toolbar.png)

This is your device selector to deploy applications to Meadow devices.

### Step 6 - Deploy your application

Connect your board if disconnected, and in the **Meadow devices** drop down it should list its corresponding COM port. Once selected, click on the play **Debug button** to start transferring the application to your board.

![Meadow Devices dropdown in the Visual Studio toolbar showing a selected device port.](../../Common_Assets/wildernesslabs-vswin-usage.jpg)

:::caution
⚠️ **Note**: When deploying a project for the first time, the transfer will take several minutes, since it's transferring all the necessary libraries to run the application. Once the app is running for the first time, deployment will be faster as it will transfer only the files that have been changed.
:::

Once all the files are transferred to your device, the app will start in debug mode and you should see Meadow’s onboard RGB LED lighting up in different colors.

![Animation showing Meadow Feather F7 running Blinky and cycling between colors on the onboard LED.](wildernesslabs_feather_blinky.gif)

### Step 7 - Check out additional samples

You can check more samples in our [Meadow.Project.Samples](https://github.com/WildernessLabs/Meadow.Project.Samples) GitHub repo.

![Several Meadow devices wired up to components and running various sample projects.](wilderness-labs-meadow-project-samples.jpg)

  </TabItem>
  <TabItem value="visualstudiocode" label="Visual Studio Code">

### Step 1 - Install .NET Runtime

Download and install the latest version of the [.NET runtime](https://dotnet.microsoft.com/en-us/download).

### Step 2 - Install Visual Studio Code

Download and Install [Visual Studio Code](https://visualstudio.microsoft.com/) to prepare your development machine.

### Step 3 - Add Meadow VSCode Extension

Open VSCode’s Extensions Manager and install [VSCode Tools for Meadow](https://marketplace.visualstudio.com/items?itemName=WildernessLabs.meadow) Extension.

### Step 4 - Deploy latest version of Meadow.OS

Use the [Meadow.CLI](../../../Meadow_Tools/Meadow_CLI/) to deploy [Meadow.OS](../../Deploying_Meadow%2EOS/) to your board to ensure it’s running with the latest version available.

### Step 5 - Install Meadow Project Templates

Open a Terminal and enter the following command to install a list of Meadow project templates:

```console
dotnet new install WildernessLabs.Meadow.Template
```

When installed, you’ll see a list of templates available

```console
The following template packages will be installed:
   WildernessLabs.Meadow.Template

Success: WildernessLabs.Meadow.Template installed the following templates:
Template Name                  Short Name         Language        Tags
-----------------------------  -----------------  --------------  --------------
Meadow Core-Compute App        CoreComputeModule  [C#],F#,VB.NET  Meadow/Console
Meadow F7 Feather App          F7Feather          [C#],F#,VB.NET  Meadow/Console
Meadow Library                 Library            [C#],F#,VB.NET  Meadow/Library
Meadow Project Lab App         ProjectLab         [C#]            Meadow/Console
Meadow.Desktop App             Desktop            [C#]            Meadow/Console
Meadow.Linux Jetson Nano App   JetsonNano         [C#]            Meadow/Console
Meadow.Linux Raspberry Pi App  RaspberryPi        [C#]            Meadow/Console
Meadow.Linux reTerminal App    reTerminal         [C#]            Meadow/Console
```

### Step 6 - Create your first Meadow application

Lets verify everything is set up by deploying your first Meadow application.

Open VSCode and in a new Terminal within, enter the following command to create a new Meadow F7 Feather project:

```console
dotnet new F7Feather --name F7FeatherDemo
```

What this Meadow application does is creates an `RgbPwmLed` object on the onboard RGB LED and cycles through different colors.

![Source code for a new Blinky application.](../../Common_Assets/wildernesslabs_meadow_vscode_blinky.png)

### Step 7 - Deploy your application

With no code changes, let's deploy this app to your new board.

In the bottom toolbar, click on the COM port button that will open a drop down menu at the top, where you’ll select the corresponding port your board is using.

![Deploying an app to the COM3 port.](../../Common_Assets/wildernesslabs_meadow_vscode_deploy.jpg)

:::caution
⚠️ **Note**: When deploying a project for the first time, the transfer will take several minutes, since it's transferring all the necessary libraries to run the application. Once the app is running for the first time, deployment will be faster as it will transfer only the files that have been changed.
:::

Once all the files are transferred to your device, the app will start in debug mode and you should see Meadow’s onboard RGB LED lighting up in different colors.

![Animation showing Meadow Feather F7 running Blinky and cycling between colors on the onboard LED.](wildernesslabs_feather_blinky.gif)

### Step 8 - Check out additional samples

You can check more samples in our [Meadow.Project.Samples](https://github.com/WildernessLabs/Meadow.Project.Samples) GitHub repo.

![Meadow.Project.Samples GitHub Repository](wilderness-labs-meadow-project-samples.jpg)

  </TabItem>
</Tabs>
