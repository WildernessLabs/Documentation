---
layout: Meadow
title: TLS Client Authentication
subtitle: Enhancing Security and Authorization in Network Communication
---

## TLS Client Authentication

During a standard TLS handshake, the server authenticates the client but possesses limited client information. TLS Client Authentication extends this by enabling the server to authenticate clients, ensuring that only authorized ones can connect. This method provides several advantages, such as improved security and privacy of communication, reduced dependency on other authentication methods, simplified access control management, and enhanced server performance and scalability.

## How to use TLS Client Authentication on Meadow

To enable TLS client authentication on Meadow you just need to follow a few steps:

### Step 1: Upload the client credentials to the Meadow device

Upload the client certificate file `client_cert.pem`, the client `private_key.pem`, and the private key passphrase `private_key_pass.txt` to the Meadow using the `meadow file write` CLI command or by including them in your .NET project `.csproj` file:

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

After uploading the client credential files, they'll be removed from the Meadow storage in the first OS initialization, and stored in a different storage on the secrets directory, as an additional security layer.

> The client credential files stored in the secrets directory cannot be deleted, but the user can just flash empty files to overwrite the credentials (`client_cert.pem`, `private_key.pem` and `private_key_pass.txt`) previously stored.

> It's restricted to a single certificate per client.

### Step 2: Remove any C# code related to the client certificate in your Meadow application

The client certificate will be attached automatically by the operating system to all connections that request one. So, you don't need to worry about adding them to your `C#` application.

That's all! :) 

## Meadow TLS Client Authentication Sample App with Azure IoT Hub

For straightforward TLS Client Authentication testing, you can utilize self-signed certificates. These certificates can be generated using libraries such as OpenSSL, eliminating the need for a Certificate Authority (CA) to sign them.

### Step 1: Creating a self-signed client certificate

First, you need to create a private key, and a self-signed client certificate, by running these commands, you should get a `private_key.pem` and a `client_cert.pem`:

```bash
openssl genpkey -algorithm RSA -out private_key.pem
openssl req -new -key private_key.pem -out client_csr.pem
openssl x509 -req -in client_csr.pem -signkey private_key.pem -out client_cert.pem
```

### Step 2: Adding your certificate to your Azure IoT Hub

After creating your Azure IoT Hub, go to `Security Settings -> Certificates`, and add a new certificate, uploading your `client_cert.pem`. You should save the certificate Thumbprint, since it'll be required in the next step.

### Step 3: Link a new device to your client certificate

Go to `Device Management -> Devices`, and add a new device, using `X509 Self-Signed` as the Authentication type, and using your certificate Thumbprint got in the last step as `Primary Thumbprint` and `Secondary Thumbprint`. This will link the device to your client certificate.

### Step 4: Uploading your client certificate to a Meadow device

After creating a device on your Azure IoT Hub, and configuring it, you'll need to upload the client certificate file `client_cert.pem`, and the client `private_key.pem` to your Meadow device, which can be done by running the `meadow file write` CLI command.

### Step 5 (Optional): Encrypting your private key

If you want to encrypt your private key, you can just run an OpenSSL command like the following:

```bash
openssl rsa -in decrypted_private_key.pem -out private_key.pem -des3 -traditional
```

Then, you'll need to create a file `private_key_pass.txt` carrying the client certificate private key passphrase and upload it as well to the device.

### Step 6: Sending MQTT messages to an Azure IoT Hub

Finally, you can use this [Meadow Sample App](https://github.com/WildernessLabs/Meadow.Core.Samples/blob/main/Source/OS/TLS_Client_Authentication/MeadowApp.cs) to send messages to your Azure IoT Hub. Just remember to replace the variables `IOT_HUB_NAME` and `IOT_HUB_DEVICE_ID` with your Azure IoT Hub name and your device ID.

## Troubleshooting
### How to use .PFX certificate files
The `.PFX` certificates are not supported by the Meadow TLS provider (mbedTLS). However, it's pretty simple to extract the private key and the client certificate from a PFX file using the OpenSSL library. You just need to run the following commands to generate the `private_key.pem` and  `client_cert.pem` files:

```bash
openssl pkcs12 -in yourfile.pfx -nocerts -out private_key.pem
openssl pkcs12 -in yourfile.pfx -clcerts -nokeys -out client_cert.pem
```

### Failed to parse private key
You may see this error if you attempt to use encrypted private keys, since some encryption algorithms are not supported by the Meadow TLS provider (mbedTLS), so if you see the error `Failed to parse private key`, try to encrypt your private key using another algorithm, such as the RSA algorithm with DES3 (Triple DES) encryption and the traditional PKCS#1 formatting, which can be done by using your OS OpenSSL:

```bash
openssl rsa -in private_key.pem -out private_key_output.pem -des3 -traditional
```

Then, you should get a private key with a header like this:
```
-----BEGIN RSA PRIVATE KEY-----
Proc-Type: 4,ENCRYPTED
DEK-Info: DES-EDE3-CBC,637E819E82DF740E
```