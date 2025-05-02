---
title: Namespace Meadow.Gateways.Bluetooth
sidebar_label: Meadow.Gateways.Bluetooth
slug: /docs/api/Meadow/Meadow.Gateways.Bluetooth
---
# Namespace Meadow.Gateways.Bluetooth
## Classes
### [AdapterCapabilities](../Meadow.Gateways.Bluetooth/AdapterCapabilities)
Describes the capabilities of the Bluetooth adapter.
### [BluetoothExtensionMethods](../Meadow.Gateways.Bluetooth/BluetoothExtensionMethods)
Extension methods for Meadow Bluetooth objects
### [Characteristic](../Meadow.Gateways.Bluetooth/Characteristic)
Represents a Bluetooth characteristic.
### [Characteristic&lt;T&gt;](../Meadow.Gateways.Bluetooth/Characteristic`T`)
Represents a Bluetooth characteristic with a generic value of type &lt;code class="typeparamref"&gt;T&lt;/code&gt;.
### [CharacteristicBool](../Meadow.Gateways.Bluetooth/CharacteristicBool)
Represents a Bluetooth characteristic with a boolean value.
### [CharacteristicCollection](../Meadow.Gateways.Bluetooth/CharacteristicCollection)
Represents a collection of characteristics.
### [CharacteristicInt32](../Meadow.Gateways.Bluetooth/CharacteristicInt32)
Represents a Bluetooth characteristic with an integer (Int32) value.
### [CharacteristicString](../Meadow.Gateways.Bluetooth/CharacteristicString)
Represents a Bluetooth characteristic with a string value.
### [CharacteristicUpdatedEventArgs](../Meadow.Gateways.Bluetooth/CharacteristicUpdatedEventArgs)
Provides data for the event when a characteristic is updated.
### [Definition](../Meadow.Gateways.Bluetooth/Definition)
Represents the definition of a Bluetooth device.
### [Descriptor](../Meadow.Gateways.Bluetooth/Descriptor)
Represents a Bluetooth descriptor.
### [KnownCharacteristics](../Meadow.Gateways.Bluetooth/KnownCharacteristics)
Provides a static class for known Bluetooth GATT characteristics and their lookup.
### [KnownDescriptors](../Meadow.Gateways.Bluetooth/KnownDescriptors)
Provides a static class for known Bluetooth GATT descriptors and their lookup.
### [KnownServices](../Meadow.Gateways.Bluetooth/KnownServices)
Provides a static class for known Bluetooth GATT services and their lookup.
### [Service](../Meadow.Gateways.Bluetooth/Service)
Provides access to a device Bluetooth capabilities
### [ServiceCollection](../Meadow.Gateways.Bluetooth/ServiceCollection)
Represents a collection of Bluetooth services.
## Structs
### [KnownCharacteristic](../Meadow.Gateways.Bluetooth/KnownCharacteristic)
Represents a known Bluetooth GATT characteristic with a name and a GUID.
### [KnownDescriptor](../Meadow.Gateways.Bluetooth/KnownDescriptor)
Represents a known Bluetooth GATT descriptor with a name and a GUID.
### [KnownService](../Meadow.Gateways.Bluetooth/KnownService)
Represents a known Bluetooth GATT service with a name and a GUID.
## Interfaces
### [IAttribute](../Meadow.Gateways.Bluetooth/IAttribute)
Represents a Bluetooth attribute.
### [ICharacteristic](../Meadow.Gateways.Bluetooth/ICharacteristic)
Represents a Bluetooth characteristic.
### [IDefinition](../Meadow.Gateways.Bluetooth/IDefinition)
Represents the definition of a Bluetooth device.
### [IDescriptor](../Meadow.Gateways.Bluetooth/IDescriptor)
A descriptor for a GATT characteristic
### [IJsonSerializable](../Meadow.Gateways.Bluetooth/IJsonSerializable)
Represents an interface for objects that can be serialized to JSON.
### [IService](../Meadow.Gateways.Bluetooth/IService)
Represents a service in Bluetooth GATT.
## Enums
### [CharacteristicPermission](../Meadow.Gateways.Bluetooth/CharacteristicPermission)
Specifies the permissions for accessing a Bluetooth characteristic.
### [CharacteristicProperty](../Meadow.Gateways.Bluetooth/CharacteristicProperty)
Specifies the properties of a Bluetooth characteristic.
### [CharacteristicPropertyType](../Meadow.Gateways.Bluetooth/CharacteristicPropertyType)
Represents the properties of a characteristic.
It's a superset of all common platform specific properties.

TODO: CTacke: we'll need to update these with whatever the ESP supports, i'm guessing.
### [CharacteristicWriteType](../Meadow.Gateways.Bluetooth/CharacteristicWriteType)
Specifies how a value should be written.
## Delegates
### [CharacteristicValueSetHandler](../Meadow.Gateways.Bluetooth/CharacteristicValueSetHandler)
Delegate representing the event handler for the ValueSet event of a Bluetooth characteristic.
### [ServerValueChangedHandler](../Meadow.Gateways.Bluetooth/ServerValueChangedHandler)
Delegate representing the event handler for the ServerValueSet event of a Bluetooth characteristic.
