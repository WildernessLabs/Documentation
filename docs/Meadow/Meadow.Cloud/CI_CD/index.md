---
layout: Meadow
title: Publishing with GitHub Actions
sidebar_label: GitHub Actions Publisher
subtitle: Getting started
---

With GitHub Actions, you can automate the complete process of building, uploading and publishing Meadow MPAK files to Meadow.Cloud using [`Meadow.Cloud Package Upload`](https://github.com/marketplace/actions/meadow-cloud-package-upload) and [`Meadow.Cloud Package Publish`](https://github.com/marketplace/actions/meadow-cloud-package-publish) GitHub Actions. It provides an integrated solution for managing the deployment pipeline of Meadow-based applications.

## Ensure your Meadow device receives OTA Updates

Before you continue with this guide, make sure your Meadow application has [over-the-air updates](../OtA_Updates/index.md) enabled. You can also head over to our [Meadow.Samples](https://github.com/WildernessLabs/Meadow.Samples) repo where you can check OTA Update samples under the Meadow.Cloud section.

## Configure a repo with Meadow.Cloud Publisher

### Step 1 - Get a Meadow.Cloud API Key

Login to your Wilderness Labs account in the [Meadow.Cloud](https://www.meadowcloud.co/) site, click on your profile photo and select **Your API Keys**. Once there, create an API Key with **Package scope enabled**, and save it somewhere safe, as you'll need it further down when creating the GitHub Actions workflow script.

![Create API key](wildernesslabs-api-key.jpg)

### Step 2 - Get your Organization and Collection IDs

In your Meadow.Cloud site, go to the **Collections** section and copy the `Collections ID` and keep it somewhere handy.

![Get collection ID](wildernesslabs-collection-id.png)

You'll also need the `Organization ID`. Click on your profile and select **Your Organizations**, and copy the ID value there as well.

![Get organization ID](wildernesslabs-organization-id.png)

### Step 3 - Setting up WiFi config file (if using WiFi connectivity)

:::caution
This guide is using an example thats using a WiFi network connection. If your project is using Ethernet or Cellular to listen for Over-the-Air Updates, you can skip this step and continue on Step 4.
:::

Once you have your hardware and app deployed and connected to a WiFI network to listen for OTA updates, you need to update the `wifi.config.yml` and replace the credentials with GitHub Actions variables:

```yml
# WiFi network credentials
Credentials:

    # WiFi SSID
    Ssid: {{CONFIG_WIFI_SSID}}

    # WiFi Password
    Password: {{CONFIG_WIFI_PASS}}
```

That way you dont need to have hard-coded WiFi credentials inside your application. Instead, you can create repository variables, and the **GitHub Actions Publisher** will replace them in the upload pipeline.

### Step 4 - Add Repository Secrets for sensitive data

Create repository secrets to store your sensitive information like WiFi credentials (if you're using WiFi), API Keys, etc. You'll reference them later when writing the GitHub Actions workflow script.

In the repo page, go to the **Settings** tab, look **Secrets and variables** settings under the **Security** section, and enter the repository secrets for your private data such as WiFi credentials, API keys, etc.

![Add WiFi and API Key secrets](wildernesslabs-secrets.jpg)

### Step 5 - Create a GitHub action Workflow

In your repository, add a `.github` folder if you havent already and inside add a `workflows` folder. Finally, create a workflow file, `main.yml` for example. Copy the following code block:

```yml
name: Upload/Publish MPAK

on:
  workflow_dispatch:

jobs:

  deploy:

    runs-on: ubuntu-latest

    steps:

    - name: Build + Upload
      uses: WildernessLabs/meadow-cloud-package-upload@main
      with:
        project_path: "Source/<PROJECT PATH>/"
        organization_id: "<YOUR ORGANIZATION ID>" # Required, set this to your organization
        api_key: ${{ secrets.API_KEY }} # Required, set this to an api key that has package scope        
        configs : '{"CONFIG_WIFI_SSID": "${{ secrets.CONFIG_WIFI_SSID }}", "CONFIG_WIFI_PASS": "${{ secrets.CONFIG_WIFI_PASS }}"}' # Optional, set this to a matching token to replaced within your *.yaml files if required
        
    - name: Publish
      uses: WildernessLabs/meadow-cloud-package-publish@main
      with:
        api_key: ${{ secrets.API_KEY }} # Required, set this to an api key that has package scope        
        collection_id: "<YOUR COLLECTION ID>" # Required, set this to an api key that has package scope        
        metadata: "metadata part of my publish" # Optional, set this to the desired metadata for publish if required
```

:::info
Things to note:
 - You can access secrets variables by doing `${{ secrets.VARIABLE_NAME }}`
 - In the `configs` field at the **Build + Upload** step, you can enter a list of repository variables along with values that will be replaced during the build and upload pipeline. In this example guide, we're referencing the SSID and Password variables names that match to the ones given in the `wifi.config.yml` file.
:::

Make sure to paste your ``Organization ID`` and ``Collection ID`` in the corresponding fields.

### Step 6 - Publish an update

If everything is configured properly, you can finally publish app updates from GitHub Actions. Head over to your repo, select the **Actions** tab, and select the workflow you just created. Click the **Run workflow** button to publish an update.

![Publish an update](wildernesslabs-publish.jpg)

### End-To-End Sample Repo

If you're having issues getting your publisher to work, you can refer to our [F7FeatherDemo](https://github.com/WildernessLabs/F7FeatherDemo) repo that has a basic Meadow F7 Feather application with OTA Updates enabled along with the GitHub Action Publisher properly configured.

### Check out other Meadow.Cloud Features

With the automatic publishing configured, check out the other Meadow.Cloud features.

* [Health Monitoring](../Health_Monitoring/)
* [Logs + Events](../Logs_Events/)
* [Command + Control](../Command_Control/)
* [Integrations](../Integrations/)