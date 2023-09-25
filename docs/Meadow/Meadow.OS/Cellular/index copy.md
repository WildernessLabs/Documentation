---
layout: Meadow
title: Client Certificate TLS authentication
subtitle: Secure user connection with client certificates TLS
---

## Client Certificate vs SAS Token Authentication

SAS (Shared Access Signature) authentication and client certificate authentication are two distinct methods of securing access to resources. While SAS authentication relies on shared access keys and allows temporary, granular access to resources with a specific token, client certificate authentication uses digital certificates to verify the identity of the client, providing a more robust and permanent form of authentication. In essence, SAS authentication is token-based and temporary, whereas client certificate authentication is certificate-based and enduring, offering varying levels of security based on the use case and requirements.


## Using Client Certificate Authentication in Meadow

To enable client certificate authentication for your Meadow device, follow these steps:

1. Rename the client credential files:
   - Rename your client certificate file to `client_cert.pem`.
   - Rename your private key file to `private_key.pem`.
   - Include the private key passphrase to a `private_key_pass.txt` file. In the case of decrypted private keys, you can skip this step.

2. Upload the client credentials:
   - Transfer both `client_cert.pem`, `private_key.pem` and `private_key_pass.txt` (in the case of encrypted private keys) to your Meadow device, by using `meadow file write`, or by including them in your .NET project.

3. Remove C# code related to the client certificate, since it is attached automatically to connections that request one.
   
Now, your Meadow device is configured for client certificate authentication. 

> Notes:
> - Only PEM certificate formats are supported.
> - Meadow supports the installation of only a single client certificate.
> - During the first OS initialization, all the client credentials will be deleted from the STM32 storage, and these credentials will then be stored in a dedicated secure storage area. 

### Removing client credentials

To remove the client credentials, you can just upload empty files to override the previously stored ones:

1. Let the client credential files empty:
   - Erase your client certificate file `client_cert.pem` content.
   - Erase your private key file `private_key.pem` content.
   - Erase your private key passphrase file `private_key_pass.pem` content.

2. Upload the client credentials:
   - Transfer both `client_cert.pem`, `private_key.pem` and `private_key_pass.txt` to your Meadow device, by using `meadow file write`, or by including them in your .NET project.

Then, your credentials will be deleted from the Meadow secure dedicated storage.

### Troubleshooting

1. In the case of having a PFX certificate, you can convert it to a PEM certificate and private key:

```shell
openssl pkcs12 -in certificate.pfx -clcerts -nokeys -out client_cert.pem
openssl pkcs12 -in certificate.pfx -nocerts -nodes -out private_key.pem
```
