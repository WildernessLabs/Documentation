#!/bin/bash
set -x

cd ../../Meadow.Core
git pull
cd ../Meadow.Foundation
git pull
cd ../Meadow.Foundation.Grove
git pull
cd ../Meadow.Foundation.FeatherWings
git pull
cd ../Meadow.Docs/docfx