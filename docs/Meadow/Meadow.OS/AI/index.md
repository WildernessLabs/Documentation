---
layout: Meadow
title: Artificial Intellegence (AI)
subtitle: Artifical Intelligence (AI) at the edge with Meadow.
---

AI @ the edge is a critically important part of many IoT workflows and growing exponentially. IoT devices routinely not only provide sensory input to model training in the cloud but in turn, execute those models locally for efficient, low-latency outcomes:

* **Sensory Input** - ML training pipelines and modern LLMs are gobbling up data at an unprecedented pace. The edge provides a wealth of data from the real world that can only be gathered from field-deployed devices. Digital twins would be impossible without the edge sensory input that feeds them, and the insights from not only individual devices, but in aggregate, they can unlock insights that can massively increase overall efficiency and productivity.
* **Local Model Execution** - While it’s generally not practical to train models on edge, these devices have outsized capabilities to execute models locally. For instance, realtime defect detection via an attached camera can run easily on a microcontroller (MCU), and object detection in multi-channel video can be done on a multi-GPU Jetson NX rather efficiently. This seminal post by Pete Warden (Useful Sensors) explains why non-LLM AI/ML models run so efficiently on low-powered devices.

# Benefits of Running @ the Edge

Additionally, running AI at the edge rather than in the cloud has a number of important efficiencies and advantages:
* **Lower Latency** - By executing locally, model execution outcomes are available immediately, not requiring a round-trip to the server.
* **Reduced Bandwidth Cost** - It’s magnitudes more efficient to send the output of a model than the raw data that fed it (once training has occurred). For instance, if you’re creating a smart outlet that tracks appliance usage, all that the cloud cares about is what appliances are running and if there are anomalies. It doesn’t need the raw waveform data of actual electrical usage which may not even be possible to feed over a low-bandwidth IoT connection.
* **Reduced TCO** - By outsourcing ML processing to the edge and running in situ, server loads (and costs) can be reduced and devices can use available processing cycles as part of their normal operating lifecycle.

# AI on Meadow Devices

Meadow provides a productive and powerful, unified, multi-platform AI experience at the edge for .NET developers, whether it be an MCU-based device like a Meadow F7, Single-Board-Computer (SBC) such as a Raspberry Pi or Multi-GPU Jetson Nano, or desktop machine.

Today Meadow enables AI across the following vectors:

* **[TensorFlowLite for Microcontrollers](/Meadow/Meadow.Foundation/Libraries_and_Frameworks/TensorFlowLite/)** - TensorFlowLite is an model execution runtime that is baked into Meadow.OS as a first-class feature. Simply add the nuget package, load your model, feed it data, and get the results. For more information see the [TensorFlowLite for Microcontrollers guide](/Meadow/Meadow.Foundation/Libraries_and_Frameworks/TensorFlowLite/).

* **Useful Sensors Drivers** - We have Meadow.Foundation drivers for Useful Sensors, which are purpose built, commodity AI sensors for doing person detection and QR code reading. See the [Meadow.Foundation Peripheral driver list page](/Meadow/Meadow.Foundation/Peripherals/) for the latest Useful Sensors drivers.

* **Single-Board-Computer (SBC) Meadow Support** - Meadow.Linux has full support for a number of the most popular SBCs, including Raspberry Pi boards, Beagle Bone, Nvidia Jetson, and more. With Meadow's first class hardware and industrial protocol support, it's super easy to get sensor data into the SBC AI workflows. For more information, see the [Getting Started guides](/Getting_Started/) on how to get up and running with Meadow on SBCs.

# Future Integrations

* **Edge Impulse** - Edge Impulse provides not only pre-trained, optimized models for embedded scenarios, but they also provide a powerful workflow for importing training data, labeling it, and then training, tuning, and outputting a useful model. We're currently in the process of integrating Edge Impulse into Meadow.OS as a first class feature.