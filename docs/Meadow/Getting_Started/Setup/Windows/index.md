---
layout: Meadow
title: Windows Setup
subtitle: Guides and documentation for Meadow
---

# Windows Setup

## Prerequisites

[Vagrant](https://www.vagrantup.com), this guide was written for version 2.2.3

[VirtualBox](https://www.virtualbox.org), this guide was written for version 6.0

### Windows only

You'll need to disable Hyper-V in order to use the VirtualBox hypervisor. This can be done by opening **Windows Features** in the Control Panel.

Athough Vagrant supports other VM hosts such as VMWare and Hyper-V, we require VirtualBox to access Meadow over USB.

## Create the Meadow deployment Virtual Machine

 1. Download **[Vagrantfile](http://downloads.wildernesslabs.co/Meadow_Beta/Vagrantfile)** and **[config.sh](
http://downloads.wildernesslabs.co/Meadow_Beta/config.sh)** to the folder (working folder) where you wish to create your virtual machine (VM).
 * Open the Windows Command Prompt.
 * Using the Command Prompt, navigate to your working folder.
 * Enter `vagrant up`, this will create a new virtual machine and may take several minutes.

  Vagrant will automatically start your virtual machine. You can access your VM by entering `vagrant ssh` from the command prompt.

  ![VM initializing](./vm_start.png){:standalone}

## Stop the VM

 1. If you're still connected to the VM via ssh, enter `exit` to return to the Windows Command Prompt.
 * You can suspend the VM from the Command Prompt by entering `vagrant suspend`.
 * You can halt (or shut down) the VM from the Command Prompt by entering `vagrant halt`.

  You can resume a suspended or halted VM by entering `vagrant up`.

## Delete the VM

You can delete the virtual machine by entering `vagrant destroy`. You can then re-create the VM using `vagrant up`.

### Tip

If you're unable to delete the VM, you may need to stop it first. Open the **Oracle VM VirtualBox Manager** (installed with VirtualBox), right click on the running VM and select *Close -> Power off*. You should now be able to run `vagrant destroy`.

## [Next - Deploy Meadow OS](/Meadow/Getting_Started/Deploying_Meadow/)