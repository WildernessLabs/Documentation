#!/bin/bash
set -x

# Up to repo root
currentDir=$(pwd)

cd ..
cd ../Meadow.Units
git pull
cd ../Meadow.Logging
git pull
cd ../Meadow.Contracts
git pull
cd ../Meadow.Modbus
git pull
cd ../Meadow.Foundation
git pull
cd ../Meadow.Core
git pull
cd ../MQTTnet
git pull
cd ../Meadow
git pull
cd ../Meadow.Foundation.CompositeDevices
git pull
cd ../Meadow.Foundation.Grove
git pull
cd ../Meadow.Foundation.FeatherWings
git pull
cd ../Meadow.Foundation.mikroBUS
git pull
cd ../Meadow.Foundation.MBus
git pull

cd "$currentDir"