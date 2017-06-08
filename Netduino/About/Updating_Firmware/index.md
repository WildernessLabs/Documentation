---
title: Updating Netduino Firmware
---

Ensuring that your Netduino has the latest firmware means that it will be up to date with the current Netduino-specific .NET Micro Framework runtime. Additionally, unless your Netduino has the latest firmware, you may have issues deploying your application to it.

## Windows (Using MFDeploy)

1. Download the latest Netduino firmware files from the [Netduino Firmware Repo](https://github.com/WildernessLabs/Netduino_Firmware_Releases). You'll need both the `ER_CONFIG` and `ER_FLASH` files for your specific Netduino model.

2. Launch **MFDeploy**. MFDeploy is installed as part of the Netduino NetMF SDK.

3. Select `USB` from the device selection area, and then your device from the drop down to the right of that:
![](MFDeploy_01.png)

4. In the **Image File** area, click the **Browse** button and navigate to the folder that has the `ER_CONFIG` and `ER_FLASH` files, select them, and click **Open**:
![](MFDeploy_02.png)

5. Click the **Deploy** button to deploy the files.

6. After it's done deploying, the console output should have something similar to the following:
![](MFDeploy_06.png)





## Mac (Using Netduino Device Manager)

1. Launch the _Netduino Device Manager_:

![](Netduino_Device_Manager-File_Upload_View.png)

2. While your Netduino is unplugged, hold down the button and then plug it in, to put it into _DFU Bootloader Mode_:

![](EnteringBootMode.gif)

2. Select your device from the left, click **Check for Update**, and follow the instructions.