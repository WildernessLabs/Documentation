---
layout: Meadow
title: TLS Client Authentication
subtitle: Enhancing Security and Authorization in Network Communication
---

# TLS Client Authentication

During a standard TLS handshake, the server authenticates the client but possesses limited client information. TLS Client Authentication extends this by enabling the server to authenticate clients, ensuring that only authorized ones can connect. This method provides several advantages, such as improved security and privacy of communication, reduced dependency on other authentication methods, simplified access control management, and enhanced server performance and scalability.

## How to use TLS Client Authentication on Meadow

To enable TLS client authentication on Meadow you just need to follow a few steps:

1. Upload the client certificate file `client_cert.pem`, the client `private_key.pem`, and the private key passphrase `private_key_pass.txt` to the Meadow using `meadow file write` CLI command or by including them in your .NET project `.csproj` file:

```
<None Update="client_cert.pem">
  <CopyToOutputDirectory>Always</CopyToOutputDirectory>
</None>
<None Update="private_key.pem">
  <CopyToOutputDirectory>Always</CopyToOutputDirectory>
</None>
<None Update="private_key_pass.txt">
  <CopyToOutputDirectory>Always</CopyToOutputDirectory>
</None>
```

> The client credential files stored in the ESP32 cannot be deleted, but the user can just flash the empty files (`client_cert.pem`, `private_key.pem` and `private_key_pass.txt`) to overwrite them.

> It's restricted to a single certificate per client.

2. Remove any C# code related to the client certificate, since it'll be attached automatically by the operating system to all connections that request one.

## Meadow TLS Client Authentication Sample App with Azure IoT Hub

For straightforward TLS Client Authentication testing, you can utilize self-signed certificates. These certificates can be generated using a library such as OpenSSL, eliminating the need for a Certificate Authority (CA) to sign them.

1. First, you need to create a private key, and a self-signed client certificate, by following these commands, you should get a `private_key.pem` and a `client_cert.pem`:

```bash
openssl genpkey -algorithm RSA -out private_key.pem
openssl req -new -key private_key.pem -out client_csr.pem
openssl x509 -req -in client_csr.pem -signkey private_key.pem -out client_cert.pem
```

2. On the Azure IoT Hub, first you need to create your IoT Hub. Then, go to `Security Settings -> Certificates`, and add a new certificate, uploading your `client_cert.pem`. You should see a Thumbprint, it'll be required in the next step.

3. Then, go to `Device Management -> Devices`, and add a new device, using `X509 Self-Signed` as Authentication type, and using your certificate Thumbprint got in the last step as `Primary Thumbprint` and `Secondary Thumbprint`. This will link the device to the certificate.

4. With your device created on Azure IoT Hub, and configured, you'll need to upload the client certificate file `client_cert.pem`, and the client `private_key.pem` to the Meadow.

5. (Optional) If you intend to use encrypted private keys, you'll need to create a file `private_key_pass.txt` to carry the client certificate private key passphrase and upload it as well to the device.

6. Then you can use this [Meadow Sample App](https://github.com/WildernessLabs/Meadow.Core.Samples/blob/main/Source/OS/TLS_Client_Authentication/MeadowApp.cs) to send messages to your Hub. Just remember to replace the variables `IOT_HUB_NAME` and `IOT_HUB_DEVICE_ID` with your Azure IoT Hub name and your device ID.

# Troubleshooting
#### Failed to parse private key
Some encryption algorithms are not supported by the Meadow TLS provider (mbedTLS), so if you see the error `Failed to parse private key`, try to encrypt your private key using another algorithm, such as the RSA algorithm with DES3 (Triple DES) encryption and the traditional PKCS#1 formatting, which can be done by using your OS OpenSSL:

```bash
openssl rsa -in private_key.pem -out private_key_output.pem -des3 -traditional
```

Then, you should get a private key with a header like this:
```
-----BEGIN RSA PRIVATE KEY-----
Proc-Type: 4,ENCRYPTED
DEK-Info: DES-EDE3-CBC,637E819E82DF740E
```