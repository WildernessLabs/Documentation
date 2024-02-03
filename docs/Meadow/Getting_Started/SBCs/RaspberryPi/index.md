---
layout: Meadow
sidebar_label: Hello, Raspberry Pi
title: Hello, Raspberry Pi
subtitle: Create, deploy, and understand your first Meadow application.
---

![](wildernesslabs_raspberry_pi_getting_started.jpg)

<Tabs groupId="ide">
<TabItem value="visualstudio2022" label="Visual Studio 2022" default>

### Step 1 - Install .NET Runtime

Download and install the latest version of the [.NET runtime](https://dotnet.microsoft.com/en-us/download).

### Step 2 - Install Visual Studio

Download and Install [Visual Studio](https://visualstudio.microsoft.com/) for Windows to prepare your development machine. Community edition will work fine.

### Step 3 - Add VS Linux Debugger Studio Extension

Open Visual Studio’s Extensions Manager and install the [VS Linux Debugger](https://marketplace.visualstudio.com/items?itemName=SuessLabs.VSLinuxDebugger) Extension.

Make sure you go through their Getting Started instructions to properly configure the target device (reTerminal) and how to use the extension to build and deploy the Meadow.Linux application over the network.

### Step 4 - Create your first Meadow.Linux application

In **Visual Studio**, open the **Create a new project** window. When you search for **Meadow**, you will see a list of project templates, click on **Meadow.Linux Raspberry Pi App (Wilderness Labs)**:

![Create new Meadow Application](../../Common_Assets/wildernesslabs_meadow_projects.png)

This is a minimal Meadow.Linux application that it'll output a few strings on a terminal to confirm the application is running correctly.

### Step 5 - Deploy your application

Once the application is deployed successfully, open a terminal on the reTerminal and go to inside the project's folder and type:

```console
dotnet [Your Project Name].dll
```

The terminal will output a few console output strings ending with `Hello, Raspberry Pi!`.

```console
Initializing OS... 
Using default app.config.yaml...
Log level: Information
Platform does not support gpiod
Update Service is disabled.
Health Metrics disabled.
Initialize...
Run...
Hello, Raspberry Pi!
```

### Step 6 - Check out additional samples

You can check more samples in our [Meadow.Desktop.Samples](https://github.com/WildernessLabs/Meadow.Desktop.Samples) GitHub repo.

  </TabItem>
  <TabItem value="visualstudiocode" label="Visual Studio Code" default>

### Step 1 - Install .NET Runtime

Follow this [blog post](https://www.petecodes.co.uk/install-and-use-microsoft-dot-net-8-with-the-raspberry-pi/) to download and install .NET on a [Raspberry Pi](https://www.raspberrypi.com/).

### Step 2 - Install Visual Studio Code

Download and Install [Visual Studio Code](https://visualstudio.microsoft.com/) to prepare your development machine.

### Step 3 - Install Meadow Project Templates

Open a Terminal and enter the following command to install a list of Meadow project templates:

```console
dotnet new install WildernessLabs.Meadow.Template
```

When installed, you’ll see a list of Templates available

```console
The following template packages will be installed:
   WildernessLabs.Meadow.Template

Success: WildernessLabs.Meadow.Template::1.8.0.1 installed the following templates:
Template Name                  Short Name         Language        Tags
-----------------------------  -----------------  --------------  --------------
Meadow Core-Compute App        CoreComputeModule  [C#],F#,VB.NET  Meadow/Console
Meadow F7 Feather App          F7Feather          [C#],F#,VB.NET  Meadow/Console
Meadow Library                 Library            [C#],F#,VB.NET  Meadow/Library
Meadow Project Lab App         ProjectLab         [C#]            Meadow/Console
Meadow.Linux Jetson Nano App   JetsonNano         [C#]            Meadow/Console
Meadow.Linux Raspberry Pi App  RaspberryPi        [C#]            Meadow/Console
Meadow.Linux reTerminal App    reTerminal         [C#]            Meadow/Console
Meadow.Windows + FT232H App    WinFormsHardware   [C#]            Meadow/Console
Meadow.Windows App             WinForms           [C#]            Meadow/Console
```

### Step 4 - Create your first Meadow application

Lets verify everything is set up by deploying your first Meadow application. 

Open VSCode and in a new Terminal within, enter the following command to create a new Meadow.Linux project that will run on your Raspberry Pi:

```console
dotnet new RaspberryPi -n RaspberryPiDemo
```

This Meadow.Linux application shows a basic Meadow app structure with an `Initialize` and `Run` methods with logging strings to confirm in the output the application ran successfully.

![Raspberry Pi VS Code](wildernesslabs_raspberry_pi_vscode.png)

### Step 5 - Run your application

Lets run this application as is on your Raspberry Pi. In a terminal inside the project folder, build the project with the command:

```console
dotnet build
```

And finally to run the Meadow application, use the command:

```console
dotnet run
```

At that point, you should see the application’s output in the console and the RGB LED cycling through different colors:

```console
Log level: Information
Platform does not support gpiod
Update Service is disabled.
Health Metrics disabled.
Initialize...
Run...
Hello, Raspberry Pi!
```

  </TabItem>
</Tabs>