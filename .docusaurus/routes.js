import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page/',
    component: ComponentCreator('/markdown-page/', 'bbb'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', 'b8f'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', 'b00'),
        exact: true
      },
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '8db'),
        exact: true
      },
      {
        path: '/docs/DevCamp2020/',
        component: ComponentCreator('/docs/DevCamp2020/', '16f'),
        exact: true
      },
      {
        path: '/docs/DevCamp2021/',
        component: ComponentCreator('/docs/DevCamp2021/', '4a3'),
        exact: true
      },
      {
        path: '/docs/Events/',
        component: ComponentCreator('/docs/Events/', '47b'),
        exact: true
      },
      {
        path: '/docs/HackKit/',
        component: ComponentCreator('/docs/HackKit/', '7fb'),
        exact: true
      },
      {
        path: '/docs/HackKit/BlogSeries/',
        component: ComponentCreator('/docs/HackKit/BlogSeries/', '9e8'),
        exact: true
      },
      {
        path: '/docs/HackKit/Contents/',
        component: ComponentCreator('/docs/HackKit/Contents/', '91e'),
        exact: true
      },
      {
        path: '/docs/HackKit/HackKitLite/',
        component: ComponentCreator('/docs/HackKit/HackKitLite/', 'e95'),
        exact: true
      },
      {
        path: '/docs/HackKit/Projects/',
        component: ComponentCreator('/docs/HackKit/Projects/', '5b5'),
        exact: true
      },
      {
        path: '/docs/Hardware/',
        component: ComponentCreator('/docs/Hardware/', '347'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Circuits/Components/',
        component: ComponentCreator('/docs/Hardware/Circuits/Components/', '2c1'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Circuits/Components/Capacitors/',
        component: ComponentCreator('/docs/Hardware/Circuits/Components/Capacitors/', '9a2'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Circuits/Components/Diodes/',
        component: ComponentCreator('/docs/Hardware/Circuits/Components/Diodes/', '2cc'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Circuits/Components/LEDs/',
        component: ComponentCreator('/docs/Hardware/Circuits/Components/LEDs/', '36f'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Circuits/Components/LEDs/Driving_w_PWM/',
        component: ComponentCreator('/docs/Hardware/Circuits/Components/LEDs/Driving_w_PWM/', 'b00'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Circuits/Components/LEDs/Driving_w_Resistor/',
        component: ComponentCreator('/docs/Hardware/Circuits/Components/LEDs/Driving_w_Resistor/', '0d5'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Circuits/Components/Resistors/',
        component: ComponentCreator('/docs/Hardware/Circuits/Components/Resistors/', '339'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Circuits/Components/Resistors/PullUpAndPullDownResistors/',
        component: ComponentCreator('/docs/Hardware/Circuits/Components/Resistors/PullUpAndPullDownResistors/', '191'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Circuits/Components/Resistors/Reading/',
        component: ComponentCreator('/docs/Hardware/Circuits/Components/Resistors/Reading/', '3d0'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Circuits/Components/ShiftRegister74595/',
        component: ComponentCreator('/docs/Hardware/Circuits/Components/ShiftRegister74595/', 'e45'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Circuits/Integrating_Meadow/F7/',
        component: ComponentCreator('/docs/Hardware/Circuits/Integrating_Meadow/F7/', 'e71'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Circuits/Integrating_Meadow/F7/F7_Core-Compute/',
        component: ComponentCreator('/docs/Hardware/Circuits/Integrating_Meadow/F7/F7_Core-Compute/', '4b5'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Circuits/Integrating_Meadow/F7/F7_Micro/',
        component: ComponentCreator('/docs/Hardware/Circuits/Integrating_Meadow/F7/F7_Micro/', '3e8'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Design/PCB_Design_and_Assembly/Reference/',
        component: ComponentCreator('/docs/Hardware/Design/PCB_Design_and_Assembly/Reference/', '338'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Fundamentals/Introduction_to_Hardware_Design/',
        component: ComponentCreator('/docs/Hardware/Fundamentals/Introduction_to_Hardware_Design/', '357'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Fundamentals/Introduction_to_Hardware_Design/Breadboarding/',
        component: ComponentCreator('/docs/Hardware/Fundamentals/Introduction_to_Hardware_Design/Breadboarding/', '320'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Fundamentals/Introduction_to_Hardware_Design/Printed_Circuit_Boards_(PCBs)/',
        component: ComponentCreator('/docs/Hardware/Fundamentals/Introduction_to_Hardware_Design/Printed_Circuit_Boards_(PCBs)/', 'a9f'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Fundamentals/Introduction_to_Hardware_Design/Product_Design_Lifecycle/',
        component: ComponentCreator('/docs/Hardware/Fundamentals/Introduction_to_Hardware_Design/Product_Design_Lifecycle/', '02f'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Fundamentals/Introduction_to_Hardware_Design/Production_Scale/',
        component: ComponentCreator('/docs/Hardware/Fundamentals/Introduction_to_Hardware_Design/Production_Scale/', 'a52'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Peripherals/',
        component: ComponentCreator('/docs/Hardware/Peripherals/', '67b'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Peripherals/IOExpanders/ShiftRegister74595/',
        component: ComponentCreator('/docs/Hardware/Peripherals/IOExpanders/ShiftRegister74595/', '2a5'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Peripherals/Motors_and_Servos/Servos/',
        component: ComponentCreator('/docs/Hardware/Peripherals/Motors_and_Servos/Servos/', 'f0b'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Peripherals/Relays/',
        component: ComponentCreator('/docs/Hardware/Peripherals/Relays/', 'f6c'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Printed_Circuit_Boards_(PCBs)/Components/',
        component: ComponentCreator('/docs/Hardware/Printed_Circuit_Boards_(PCBs)/Components/', 'b35'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Printed_Circuit_Boards_(PCBs)/Components/Component_Search/',
        component: ComponentCreator('/docs/Hardware/Printed_Circuit_Boards_(PCBs)/Components/Component_Search/', 'd20'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Printed_Circuit_Boards_(PCBs)/Components/Packages_and_Sizes/',
        component: ComponentCreator('/docs/Hardware/Printed_Circuit_Boards_(PCBs)/Components/Packages_and_Sizes/', '76f'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Printed_Circuit_Boards_(PCBs)/Components/Symbols_and_Footprints/',
        component: ComponentCreator('/docs/Hardware/Printed_Circuit_Boards_(PCBs)/Components/Symbols_and_Footprints/', '576'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Printed_Circuit_Boards_(PCBs)/PCB_Assembly/',
        component: ComponentCreator('/docs/Hardware/Printed_Circuit_Boards_(PCBs)/PCB_Assembly/', '660'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Printed_Circuit_Boards_(PCBs)/PCB_Assembly/Component_Placement/',
        component: ComponentCreator('/docs/Hardware/Printed_Circuit_Boards_(PCBs)/PCB_Assembly/Component_Placement/', '5da'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Printed_Circuit_Boards_(PCBs)/PCB_Assembly/Solder_Paste_Application/',
        component: ComponentCreator('/docs/Hardware/Printed_Circuit_Boards_(PCBs)/PCB_Assembly/Solder_Paste_Application/', '8e4'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Printed_Circuit_Boards_(PCBs)/PCB_Fabrication/',
        component: ComponentCreator('/docs/Hardware/Printed_Circuit_Boards_(PCBs)/PCB_Fabrication/', '83f'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Printed_Circuit_Boards_(PCBs)/PCB_Stackups/',
        component: ComponentCreator('/docs/Hardware/Printed_Circuit_Boards_(PCBs)/PCB_Stackups/', '600'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Reference/',
        component: ComponentCreator('/docs/Hardware/Reference/', '66f'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Reference/Algorithms/',
        component: ComponentCreator('/docs/Hardware/Reference/Algorithms/', 'b1c'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Reference/Algorithms/Proportional_Integral_Derivative/',
        component: ComponentCreator('/docs/Hardware/Reference/Algorithms/Proportional_Integral_Derivative/', '45c'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Reference/Algorithms/Proportional_Integral_Derivative/Closed_Loop_Gain_Controllers/',
        component: ComponentCreator('/docs/Hardware/Reference/Algorithms/Proportional_Integral_Derivative/Closed_Loop_Gain_Controllers/', 'b1f'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Reference/Algorithms/Proportional_Integral_Derivative/Ideal_PID_Algorithm/',
        component: ComponentCreator('/docs/Hardware/Reference/Algorithms/Proportional_Integral_Derivative/Ideal_PID_Algorithm/', '8c9'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Reference/Algorithms/Proportional_Integral_Derivative/Intro/',
        component: ComponentCreator('/docs/Hardware/Reference/Algorithms/Proportional_Integral_Derivative/Intro/', '674'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Reference/Algorithms/Proportional_Integral_Derivative/Standard_PID_Algorithm/',
        component: ComponentCreator('/docs/Hardware/Reference/Algorithms/Proportional_Integral_Derivative/Standard_PID_Algorithm/', 'c7c'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Reference/Algorithms/Proportional_Integral_Derivative/Tuning/',
        component: ComponentCreator('/docs/Hardware/Reference/Algorithms/Proportional_Integral_Derivative/Tuning/', 'ef9'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Reference/Algorithms/Proportional_Integral_Derivative/Using_PID/',
        component: ComponentCreator('/docs/Hardware/Reference/Algorithms/Proportional_Integral_Derivative/Using_PID/', '6b2'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Reference/BitBanging/',
        component: ComponentCreator('/docs/Hardware/Reference/BitBanging/', '147'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Reference/Equations_and_Laws/',
        component: ComponentCreator('/docs/Hardware/Reference/Equations_and_Laws/', '14c'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Reference/Equations_and_Laws/Capacitance/',
        component: ComponentCreator('/docs/Hardware/Reference/Equations_and_Laws/Capacitance/', 'df9'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Reference/Equations_and_Laws/Resistance/',
        component: ComponentCreator('/docs/Hardware/Reference/Equations_and_Laws/Resistance/', '740'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Reference/Equations_and_Laws/Resistance/Parallel/',
        component: ComponentCreator('/docs/Hardware/Reference/Equations_and_Laws/Resistance/Parallel/', 'f34'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Reference/Equations_and_Laws/Resistance/Series/',
        component: ComponentCreator('/docs/Hardware/Reference/Equations_and_Laws/Resistance/Series/', '44e'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Reference/Equations_and_Laws/Voltage/',
        component: ComponentCreator('/docs/Hardware/Reference/Equations_and_Laws/Voltage/', 'c24'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Reference/Equations_and_Laws/Voltage/Division/',
        component: ComponentCreator('/docs/Hardware/Reference/Equations_and_Laws/Voltage/Division/', '4c3'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Reference/Equations_and_Laws/Voltage/Ohms_Law/',
        component: ComponentCreator('/docs/Hardware/Reference/Equations_and_Laws/Voltage/Ohms_Law/', 'd95'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Reference/UnderstandingWaveforms/DigitalSignals/',
        component: ComponentCreator('/docs/Hardware/Reference/UnderstandingWaveforms/DigitalSignals/', 'f1d'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Reference/Units/',
        component: ComponentCreator('/docs/Hardware/Reference/Units/', '2fb'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Reference/Units/Amps/',
        component: ComponentCreator('/docs/Hardware/Reference/Units/Amps/', '9ee'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Reference/Units/Volts/',
        component: ComponentCreator('/docs/Hardware/Reference/Units/Volts/', '6ba'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Reference/Units/Watts/',
        component: ComponentCreator('/docs/Hardware/Reference/Units/Watts/', '044'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/',
        component: ComponentCreator('/docs/Hardware/Tutorials/', '56e'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/', '880'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Notes/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Notes/', '78a'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part1/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part1/', '93e'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part1/Atoms/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part1/Atoms/', '151'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part1/Electrical_Current/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part1/Electrical_Current/', '4ae'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part1/Electromagnetism/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part1/Electromagnetism/', '1bf'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part1/Review/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part1/Review/', 'a62'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part2/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part2/', 'f52'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part2/Amount_and_Force/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part2/Amount_and_Force/', 'bf4'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part2/Amperage/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part2/Amperage/', '593'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part2/Review/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part2/Review/', 'f75'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part2/Source_Load_and_Ground/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part2/Source_Load_and_Ground/', '419'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part2/Voltage/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part2/Voltage/', 'dbb'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part2/Wattage/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part2/Wattage/', '1a4'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part3/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part3/', '368'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part3/AC_Characteristics/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part3/AC_Characteristics/', '8b0'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part3/AC_Generation/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part3/AC_Generation/', '754'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part3/Alternating_Current/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part3/Alternating_Current/', '155'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part3/Current_Types/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part3/Current_Types/', '8e8'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part3/Direct_Current/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part3/Direct_Current/', '066'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part3/Review/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part3/Review/', '513'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part4/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part4/', '562'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part4/Calculating_Resistance/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part4/Calculating_Resistance/', '232'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part4/Ohms_Law/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part4/Ohms_Law/', 'e60'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part4/Parallel_Resistance/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part4/Parallel_Resistance/', 'cf0'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part4/PullUp_PullDown_Resistors/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part4/PullUp_PullDown_Resistors/', '972'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part4/PullUp_PullDown_Resistors/notes/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part4/PullUp_PullDown_Resistors/notes/', '443'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part4/Reading_Resistors/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part4/Reading_Resistors/', '663'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part4/Resistance/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part4/Resistance/', '503'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part4/Resistor_Circuit_Comparison/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part4/Resistor_Circuit_Comparison/', '36d'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part4/Resistor_Lab/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part4/Resistor_Lab/', '995'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part4/Resistor_Power_Rating/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part4/Resistor_Power_Rating/', '1fe'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part4/Resistor_Tolerance/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part4/Resistor_Tolerance/', '9e7'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part4/Review/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part4/Review/', '3fe'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part4/Series_Resistance/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part4/Series_Resistance/', '65a'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part5/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part5/', '600'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part5/Circuit_Software/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part5/Circuit_Software/', '97d'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part5/DC_Circuits/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part5/DC_Circuits/', '723'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part5/Kirchhoffs_Current_Law/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part5/Kirchhoffs_Current_Law/', '659'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part5/Kirchhoffs_Voltage_Law/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part5/Kirchhoffs_Voltage_Law/', 'd6f'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part5/Level_Shifting_Lab/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part5/Level_Shifting_Lab/', '91b'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part5/Resistive_Sensor_Lab/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part5/Resistive_Sensor_Lab/', '46e'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part5/Review/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part5/Review/', '47d'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part5/Voltage_Divider_Practicals/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part5/Voltage_Divider_Practicals/', '3ad'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part5/Voltage_Division/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part5/Voltage_Division/', '086'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part6/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part6/', 'cf4'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part6/Diode_Logic_Lab/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part6/Diode_Logic_Lab/', '0db'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part6/General_Diodes/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part6/General_Diodes/', 'a28'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part6/LED_Lab/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part6/LED_Lab/', '1d8'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part6/LEDs/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part6/LEDs/', 'fbb'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part6/Light_Related_Diodes/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part6/Light_Related_Diodes/', 'e21'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part6/N-Type/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part6/N-Type/', 'dde'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part6/P-N_Junctions/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part6/P-N_Junctions/', 'bfc'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part6/P-Type/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part6/P-Type/', 'df9'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part6/Photodiode_Lab/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part6/Photodiode_Lab/', '190'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part6/Review/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part6/Review/', 'cb1'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part6/Semiconductors/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part6/Semiconductors/', 'aac'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part6/Silicon/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part6/Silicon/', '4c4'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part7/Notes/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part7/Notes/', 'c83'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Part7/Transistors/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Part7/Transistors/', '001'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/PartX_Batteries/Batteries/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/PartX_Batteries/Batteries/', 'd71'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/PartX_Batteries/Battery_Circuits/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/PartX_Batteries/Battery_Circuits/', 'b1f'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/PartX_Batteries/Battery_Resistance/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/PartX_Batteries/Battery_Resistance/', 'e52'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/PartX_Batteries/Battery_Types/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/PartX_Batteries/Battery_Types/', '6e7'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/PartX_Batteries/Review/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/PartX_Batteries/Review/', '535'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/PartY_Other_Components/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/PartY_Other_Components/', '7b7'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Prologue/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Prologue/', 'b4e'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/Electronics/Prologue/Requirements/',
        component: ComponentCreator('/docs/Hardware/Tutorials/Electronics/Prologue/Requirements/', '41f'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/PCB_Tutorial/',
        component: ComponentCreator('/docs/Hardware/Tutorials/PCB_Tutorial/', '8e1'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/PCB_Tutorial/Add_Meadow/',
        component: ComponentCreator('/docs/Hardware/Tutorials/PCB_Tutorial/Add_Meadow/', 'b07'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/PCB_Tutorial/PCB_Assembly/',
        component: ComponentCreator('/docs/Hardware/Tutorials/PCB_Tutorial/PCB_Assembly/', 'fb9'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/PCB_Tutorial/PCB_Layout/',
        component: ComponentCreator('/docs/Hardware/Tutorials/PCB_Tutorial/PCB_Layout/', '059'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/PCB_Tutorial/Project_Creation/',
        component: ComponentCreator('/docs/Hardware/Tutorials/PCB_Tutorial/Project_Creation/', '0aa'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Hardware/Tutorials/PCB_Tutorial/Schematic_Design/',
        component: ComponentCreator('/docs/Hardware/Tutorials/PCB_Tutorial/Schematic_Design/', '3e2'),
        exact: true,
        sidebar: "hardwareSidebar"
      },
      {
        path: '/docs/Meadow/',
        component: ComponentCreator('/docs/Meadow/', '71c'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Getting_Started/',
        component: ComponentCreator('/docs/Meadow/Getting_Started/', '6d8'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Getting_Started/Assemble_Meadow/',
        component: ComponentCreator('/docs/Meadow/Getting_Started/Assemble_Meadow/', '685'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Getting_Started/Deploying_Meadow/',
        component: ComponentCreator('/docs/Meadow/Getting_Started/Deploying_Meadow/', '40b'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Getting_Started/Deployment/',
        component: ComponentCreator('/docs/Meadow/Getting_Started/Deployment/', 'd7d'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Getting_Started/Getting_Started_Core-Compute_Module/',
        component: ComponentCreator('/docs/Meadow/Getting_Started/Getting_Started_Core-Compute_Module/', 'bbf'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Getting_Started/Getting_Started_Meadow.Desktop/',
        component: ComponentCreator('/docs/Meadow/Getting_Started/Getting_Started_Meadow.Desktop/', '332'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Getting_Started/Getting_Started_Meadow.Desktop/Getting_Started_Linux/',
        component: ComponentCreator('/docs/Meadow/Getting_Started/Getting_Started_Meadow.Desktop/Getting_Started_Linux/', '86e'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Getting_Started/Getting_Started_Meadow.Desktop/Getting_Started_Windows/',
        component: ComponentCreator('/docs/Meadow/Getting_Started/Getting_Started_Meadow.Desktop/Getting_Started_Windows/', '898'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Getting_Started/Hello_World/',
        component: ComponentCreator('/docs/Meadow/Getting_Started/Hello_World/', 'c35'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Getting_Started/Setup/',
        component: ComponentCreator('/docs/Meadow/Getting_Started/Setup/', '2de'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Getting_Started/Setup/macos/',
        component: ComponentCreator('/docs/Meadow/Getting_Started/Setup/macos/', 'a23'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Getting_Started/Setup/stlink/',
        component: ComponentCreator('/docs/Meadow/Getting_Started/Setup/stlink/', '31f'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Getting_Started/Setup/Windows/',
        component: ComponentCreator('/docs/Meadow/Getting_Started/Setup/Windows/', '5fe'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Getting_Started/Update_USB_Driver/',
        component: ComponentCreator('/docs/Meadow/Getting_Started/Update_USB_Driver/', '4dc'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/', '815'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/Apps/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/Apps/', '4db'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/Apps/Lifecycle_Events/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/Apps/Lifecycle_Events/', '991'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/Apps/Sleep/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/Apps/Sleep/', 'fd4'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/Bluetooth/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/Bluetooth/', 'dab'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/Events_and_IObservable/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/Events_and_IObservable/', '58e'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/File_System/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/File_System/', '935'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/Hardware/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/Hardware/', 'fec'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/Hardware/F7v1/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/Hardware/F7v1/', 'be4'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/Hardware/F7v2/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/Hardware/F7v2/', '18b'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/IO/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/IO/', '517'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/IO/Analog/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/IO/Analog/', '7d9'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/IO/Digital/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/IO/Digital/', '8bc'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/IO/Digital/Protocols/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/IO/Digital/Protocols/', '609'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/IO/Digital/Protocols/I2C/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/IO/Digital/Protocols/I2C/', '0c0'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/IO/Digital/Protocols/SPI/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/IO/Digital/Protocols/SPI/', '0c6'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/IO/Digital/Protocols/UART/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/IO/Digital/Protocols/UART/', '86e'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/IO/Digital/PWM/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/IO/Digital/PWM/', '818'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/IO/Power/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/IO/Power/', '97e'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/Meadow_CLI/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/Meadow_CLI/', '205'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/Meadow.OS/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/Meadow.OS/', '201'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/Meadow.OS/RTC/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/Meadow.OS/RTC/', 'cb6'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/Meadow.OS/Watchdog/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/Meadow.OS/Watchdog/', 'f3f'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/Networking/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/Networking/', '530'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/Status/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/Status/', '756'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/Troubleshooting/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/Troubleshooting/', '1ce'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/Troubleshooting/Linux/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/Troubleshooting/Linux/', 'ade'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/Troubleshooting/macOS/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/Troubleshooting/macOS/', '7ad'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/Troubleshooting/MeadowOSDeployment/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/Troubleshooting/MeadowOSDeployment/', '72a'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/Troubleshooting/VisualStudio/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/Troubleshooting/VisualStudio/', '3d3'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow_Basics/Units/',
        component: ComponentCreator('/docs/Meadow/Meadow_Basics/Units/', '8e7'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.Cloud/',
        component: ComponentCreator('/docs/Meadow/Meadow.Cloud/', '64e'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.Cloud/Command_Control/',
        component: ComponentCreator('/docs/Meadow/Meadow.Cloud/Command_Control/', '8f5'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.Cloud/Device_Provisioning/',
        component: ComponentCreator('/docs/Meadow/Meadow.Cloud/Device_Provisioning/', '31b'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.Cloud/Health_Monitoring/',
        component: ComponentCreator('/docs/Meadow/Meadow.Cloud/Health_Monitoring/', 'fe4'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.Cloud/Integrations/',
        component: ComponentCreator('/docs/Meadow/Meadow.Cloud/Integrations/', 'fef'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.Cloud/Integrations/AzureEventGrid/',
        component: ComponentCreator('/docs/Meadow/Meadow.Cloud/Integrations/AzureEventGrid/', '40b'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.Cloud/Integrations/AzureEventHubs/',
        component: ComponentCreator('/docs/Meadow/Meadow.Cloud/Integrations/AzureEventHubs/', '55e'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.Cloud/Integrations/Datacake/',
        component: ComponentCreator('/docs/Meadow/Meadow.Cloud/Integrations/Datacake/', '305'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.Cloud/Integrations/Webhooks/',
        component: ComponentCreator('/docs/Meadow/Meadow.Cloud/Integrations/Webhooks/', '2e8'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.Cloud/Logs_Events/',
        component: ComponentCreator('/docs/Meadow/Meadow.Cloud/Logs_Events/', '834'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.Cloud/OtA_Updates/',
        component: ComponentCreator('/docs/Meadow/Meadow.Cloud/OtA_Updates/', 'de5'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.Foundation/',
        component: ComponentCreator('/docs/Meadow/Meadow.Foundation/', '04f'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.Foundation/API_Samples/',
        component: ComponentCreator('/docs/Meadow/Meadow.Foundation/API_Samples/', 'bb7'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.Foundation/Getting_Started/',
        component: ComponentCreator('/docs/Meadow/Meadow.Foundation/Getting_Started/', 'e61'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.Foundation/Libraries_and_Frameworks/',
        component: ComponentCreator('/docs/Meadow/Meadow.Foundation/Libraries_and_Frameworks/', '122'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.Foundation/Libraries_and_Frameworks/Gps_Gnss_Nmea_Processor/',
        component: ComponentCreator('/docs/Meadow/Meadow.Foundation/Libraries_and_Frameworks/Gps_Gnss_Nmea_Processor/', '269'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.Foundation/Libraries_and_Frameworks/Maple.Server/',
        component: ComponentCreator('/docs/Meadow/Meadow.Foundation/Libraries_and_Frameworks/Maple.Server/', '4a7'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.Foundation/Libraries_and_Frameworks/MicroGraphics/',
        component: ComponentCreator('/docs/Meadow/Meadow.Foundation/Libraries_and_Frameworks/MicroGraphics/', '398'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.Foundation/Libraries_and_Frameworks/MicroLayout/',
        component: ComponentCreator('/docs/Meadow/Meadow.Foundation/Libraries_and_Frameworks/MicroLayout/', 'fd8'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.Foundation/Libraries_and_Frameworks/TextDisplayMenu/',
        component: ComponentCreator('/docs/Meadow/Meadow.Foundation/Libraries_and_Frameworks/TextDisplayMenu/', '0a5'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.Foundation/Peripherals/',
        component: ComponentCreator('/docs/Meadow/Meadow.Foundation/Peripherals/', 'b4b'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.Foundation/Unified_GPIO_Arch/',
        component: ComponentCreator('/docs/Meadow/Meadow.Foundation/Unified_GPIO_Arch/', '2f5'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.Foundation/Working_with_Sensors/',
        component: ComponentCreator('/docs/Meadow/Meadow.Foundation/Working_with_Sensors/', 'e13'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.OS/',
        component: ComponentCreator('/docs/Meadow/Meadow.OS/', 'd92'),
        exact: true,
        sidebar: "meadowOsSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.OS/Automatic_Restarts/',
        component: ComponentCreator('/docs/Meadow/Meadow.OS/Automatic_Restarts/', '350'),
        exact: true,
        sidebar: "meadowOsSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.OS/Bluetooth/',
        component: ComponentCreator('/docs/Meadow/Meadow.OS/Bluetooth/', '5ed'),
        exact: true,
        sidebar: "meadowOsSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.OS/Cellular/',
        component: ComponentCreator('/docs/Meadow/Meadow.OS/Cellular/', '647'),
        exact: true,
        sidebar: "meadowOsSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.OS/Configuration/',
        component: ComponentCreator('/docs/Meadow/Meadow.OS/Configuration/', '4ec'),
        exact: true,
        sidebar: "meadowOsSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.OS/Configuration/Application_Settings_Configuration/',
        component: ComponentCreator('/docs/Meadow/Meadow.OS/Configuration/Application_Settings_Configuration/', '917'),
        exact: true,
        sidebar: "meadowOsSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.OS/Configuration/OS_Device_Configuration/',
        component: ComponentCreator('/docs/Meadow/Meadow.OS/Configuration/OS_Device_Configuration/', 'aaf'),
        exact: true,
        sidebar: "meadowOsSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.OS/Configuration/WiFi_Configuration/',
        component: ComponentCreator('/docs/Meadow/Meadow.OS/Configuration/WiFi_Configuration/', '6bd'),
        exact: true,
        sidebar: "meadowOsSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.OS/Core-Compute_SD_Card/',
        component: ComponentCreator('/docs/Meadow/Meadow.OS/Core-Compute_SD_Card/', 'aef'),
        exact: true,
        sidebar: "meadowOsSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.OS/File_System/',
        component: ComponentCreator('/docs/Meadow/Meadow.OS/File_System/', '51b'),
        exact: true,
        sidebar: "meadowOsSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.OS/Networking/',
        component: ComponentCreator('/docs/Meadow/Meadow.OS/Networking/', 'ce8'),
        exact: true,
        sidebar: "meadowOsSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.OS/Networking/Antenna/',
        component: ComponentCreator('/docs/Meadow/Meadow.OS/Networking/Antenna/', 'df4'),
        exact: true,
        sidebar: "meadowOsSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.OS/RTC/',
        component: ComponentCreator('/docs/Meadow/Meadow.OS/RTC/', 'e87'),
        exact: true,
        sidebar: "meadowOsSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.OS/SQLite/',
        component: ComponentCreator('/docs/Meadow/Meadow.OS/SQLite/', 'b86'),
        exact: true,
        sidebar: "meadowOsSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.OS/Threading/',
        component: ComponentCreator('/docs/Meadow/Meadow.OS/Threading/', 'e24'),
        exact: true,
        sidebar: "meadowOsSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.OS/Updates/',
        component: ComponentCreator('/docs/Meadow/Meadow.OS/Updates/', '4db'),
        exact: true,
        sidebar: "meadowOsSidebar"
      },
      {
        path: '/docs/Meadow/Meadow.OS/Watchdog/',
        component: ComponentCreator('/docs/Meadow/Meadow.OS/Watchdog/', 'a70'),
        exact: true,
        sidebar: "meadowOsSidebar"
      },
      {
        path: '/docs/Meadow/Release_Notes/',
        component: ComponentCreator('/docs/Meadow/Release_Notes/', '986'),
        exact: true,
        sidebar: "meadowOsSidebar"
      },
      {
        path: '/docs/Meadow/Release_Notes/Beta2/',
        component: ComponentCreator('/docs/Meadow/Release_Notes/Beta2/', '7b4'),
        exact: true,
        sidebar: "meadowOsSidebar"
      },
      {
        path: '/docs/Meadow/Release_Notes/Beta3/',
        component: ComponentCreator('/docs/Meadow/Release_Notes/Beta3/', '29e'),
        exact: true,
        sidebar: "meadowOsSidebar"
      },
      {
        path: '/docs/Meadow/Release_Notes/Beta4/',
        component: ComponentCreator('/docs/Meadow/Release_Notes/Beta4/', '572'),
        exact: true,
        sidebar: "meadowOsSidebar"
      },
      {
        path: '/docs/Meadow/Release_Notes/Beta5/',
        component: ComponentCreator('/docs/Meadow/Release_Notes/Beta5/', '63a'),
        exact: true,
        sidebar: "meadowOsSidebar"
      },
      {
        path: '/docs/Meadow/Release_Notes/Beta6/',
        component: ComponentCreator('/docs/Meadow/Release_Notes/Beta6/', '2af'),
        exact: true,
        sidebar: "meadowOsSidebar"
      },
      {
        path: '/docs/Meadow/Release_Notes/Release-Candidates/',
        component: ComponentCreator('/docs/Meadow/Release_Notes/Release-Candidates/', '3f9'),
        exact: true,
        sidebar: "meadowOsSidebar"
      },
      {
        path: '/docs/Meadow/Release_Notes/Release-Candidates/Lifecycle_Update/',
        component: ComponentCreator('/docs/Meadow/Release_Notes/Release-Candidates/Lifecycle_Update/', '896'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Release_Notes/Roadmap/',
        component: ComponentCreator('/docs/Meadow/Release_Notes/Roadmap/', 'cbf'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Meadow/Release_Notes/v1/',
        component: ComponentCreator('/docs/Meadow/Release_Notes/v1/', '46d'),
        exact: true,
        sidebar: "meadowSidebar"
      },
      {
        path: '/docs/Netduino/',
        component: ComponentCreator('/docs/Netduino/', '60d'),
        exact: true
      },
      {
        path: '/docs/Netduino/About/',
        component: ComponentCreator('/docs/Netduino/About/', '9a8'),
        exact: true
      },
      {
        path: '/docs/Netduino/About/Downloads/',
        component: ComponentCreator('/docs/Netduino/About/Downloads/', '262'),
        exact: true
      },
      {
        path: '/docs/Netduino/About/Source/',
        component: ComponentCreator('/docs/Netduino/About/Source/', 'c14'),
        exact: true
      },
      {
        path: '/docs/Netduino/About/Troubleshooting/',
        component: ComponentCreator('/docs/Netduino/About/Troubleshooting/', '6a3'),
        exact: true
      },
      {
        path: '/docs/Netduino/About/Updating_Firmware/',
        component: ComponentCreator('/docs/Netduino/About/Updating_Firmware/', '553'),
        exact: true
      },
      {
        path: '/docs/Netduino/Application_Fundamentals/',
        component: ComponentCreator('/docs/Netduino/Application_Fundamentals/', '05c'),
        exact: true
      },
      {
        path: '/docs/Netduino/Application_Fundamentals/Debug_Print/',
        component: ComponentCreator('/docs/Netduino/Application_Fundamentals/Debug_Print/', '305'),
        exact: true
      },
      {
        path: '/docs/Netduino/Application_Fundamentals/Memory_Management/',
        component: ComponentCreator('/docs/Netduino/Application_Fundamentals/Memory_Management/', '95c'),
        exact: true
      },
      {
        path: '/docs/Netduino/Application_Fundamentals/NETMF/',
        component: ComponentCreator('/docs/Netduino/Application_Fundamentals/NETMF/', '445'),
        exact: true
      },
      {
        path: '/docs/Netduino/Application_Fundamentals/Threading/',
        component: ComponentCreator('/docs/Netduino/Application_Fundamentals/Threading/', '7c9'),
        exact: true
      },
      {
        path: '/docs/Netduino/Getting_Started/',
        component: ComponentCreator('/docs/Netduino/Getting_Started/', '5ca'),
        exact: true
      },
      {
        path: '/docs/Netduino/Getting_Started/Installation/Mac/',
        component: ComponentCreator('/docs/Netduino/Getting_Started/Installation/Mac/', '0c6'),
        exact: true
      },
      {
        path: '/docs/Netduino/Getting_Started/Installation/Windows/',
        component: ComponentCreator('/docs/Netduino/Getting_Started/Installation/Windows/', 'a50'),
        exact: true
      },
      {
        path: '/docs/Netduino/Input_Output/',
        component: ComponentCreator('/docs/Netduino/Input_Output/', '58c'),
        exact: true
      },
      {
        path: '/docs/Netduino/Input_Output/Analog/',
        component: ComponentCreator('/docs/Netduino/Input_Output/Analog/', '924'),
        exact: true
      },
      {
        path: '/docs/Netduino/Input_Output/Digital/',
        component: ComponentCreator('/docs/Netduino/Input_Output/Digital/', '997'),
        exact: true
      },
      {
        path: '/docs/Netduino/Input_Output/Digital/I2C/',
        component: ComponentCreator('/docs/Netduino/Input_Output/Digital/I2C/', 'c56'),
        exact: true
      },
      {
        path: '/docs/Netduino/Input_Output/Digital/I2C/Reading/',
        component: ComponentCreator('/docs/Netduino/Input_Output/Digital/I2C/Reading/', '40a'),
        exact: true
      },
      {
        path: '/docs/Netduino/Input_Output/Digital/I2C/Writing/',
        component: ComponentCreator('/docs/Netduino/Input_Output/Digital/I2C/Writing/', '8d8'),
        exact: true
      },
      {
        path: '/docs/Netduino/Input_Output/Digital/PWM/',
        component: ComponentCreator('/docs/Netduino/Input_Output/Digital/PWM/', 'd8a'),
        exact: true
      },
      {
        path: '/docs/Netduino/Input_Output/Digital/SPI/',
        component: ComponentCreator('/docs/Netduino/Input_Output/Digital/SPI/', 'cfd'),
        exact: true
      },
      {
        path: '/docs/Netduino/Input_Output/Digital/SPI/ControllingLCD/',
        component: ComponentCreator('/docs/Netduino/Input_Output/Digital/SPI/ControllingLCD/', 'e21'),
        exact: true
      },
      {
        path: '/docs/Netduino/Input_Output/Digital/SPI/Reading/',
        component: ComponentCreator('/docs/Netduino/Input_Output/Digital/SPI/Reading/', 'aff'),
        exact: true
      },
      {
        path: '/docs/Netduino/Input_Output/Digital/SPI/ReadingTime/',
        component: ComponentCreator('/docs/Netduino/Input_Output/Digital/SPI/ReadingTime/', '950'),
        exact: true
      },
      {
        path: '/docs/Netduino/Input_Output/Digital/SPI/Writing/',
        component: ComponentCreator('/docs/Netduino/Input_Output/Digital/SPI/Writing/', 'd92'),
        exact: true
      },
      {
        path: '/docs/Netduino/Input_Output/Digital/UART/',
        component: ComponentCreator('/docs/Netduino/Input_Output/Digital/UART/', '95c'),
        exact: true
      },
      {
        path: '/docs/Netduino/Input_Output/File_Storage/',
        component: ComponentCreator('/docs/Netduino/Input_Output/File_Storage/', 'cde'),
        exact: true
      },
      {
        path: '/docs/Netduino/Input_Output/Network/',
        component: ComponentCreator('/docs/Netduino/Input_Output/Network/', '7fd'),
        exact: true
      },
      {
        path: '/docs/Netduino/Input_Output/Network/Configuration/',
        component: ComponentCreator('/docs/Netduino/Input_Output/Network/Configuration/', 'ffa'),
        exact: true
      },
      {
        path: '/docs/Netduino/Input_Output/Network/Connection/',
        component: ComponentCreator('/docs/Netduino/Input_Output/Network/Connection/', '406'),
        exact: true
      },
      {
        path: '/docs/Netduino/Input_Output/Onboard_Button_+_LED/',
        component: ComponentCreator('/docs/Netduino/Input_Output/Onboard_Button_+_LED/', '214'),
        exact: true
      },
      {
        path: '/docs/Product_Design_Lifecycle/Breadboard_Prototyping/',
        component: ComponentCreator('/docs/Product_Design_Lifecycle/Breadboard_Prototyping/', '759'),
        exact: true
      },
      {
        path: '/docs/Product_Design_Lifecycle/Conceptual_Design/',
        component: ComponentCreator('/docs/Product_Design_Lifecycle/Conceptual_Design/', '3a2'),
        exact: true
      },
      {
        path: '/docs/Product_Design_Lifecycle/Industrial_Design/',
        component: ComponentCreator('/docs/Product_Design_Lifecycle/Industrial_Design/', '73f'),
        exact: true
      },
      {
        path: '/docs/Product_Design_Lifecycle/Mass_Production/',
        component: ComponentCreator('/docs/Product_Design_Lifecycle/Mass_Production/', '74a'),
        exact: true
      },
      {
        path: '/docs/Product_Design_Lifecycle/Mass_Production/Certifications/',
        component: ComponentCreator('/docs/Product_Design_Lifecycle/Mass_Production/Certifications/', '93c'),
        exact: true
      },
      {
        path: '/docs/Product_Design_Lifecycle/Mass_Production/MAC_Addresses/',
        component: ComponentCreator('/docs/Product_Design_Lifecycle/Mass_Production/MAC_Addresses/', 'a97'),
        exact: true
      },
      {
        path: '/docs/Product_Design_Lifecycle/Mass_Production/UPCs_EANs/',
        component: ComponentCreator('/docs/Product_Design_Lifecycle/Mass_Production/UPCs_EANs/', '446'),
        exact: true
      },
      {
        path: '/docs/Product_Design_Lifecycle/Mass_Production/USB_VendorIDs/',
        component: ComponentCreator('/docs/Product_Design_Lifecycle/Mass_Production/USB_VendorIDs/', '15b'),
        exact: true
      },
      {
        path: '/docs/Product_Design_Lifecycle/PCBs/',
        component: ComponentCreator('/docs/Product_Design_Lifecycle/PCBs/', '56d'),
        exact: true
      },
      {
        path: '/docs/Product_Design_Lifecycle/PCBs/Assembly/',
        component: ComponentCreator('/docs/Product_Design_Lifecycle/PCBs/Assembly/', 'a45'),
        exact: true
      },
      {
        path: '/docs/Product_Design_Lifecycle/PCBs/Fabrication/',
        component: ComponentCreator('/docs/Product_Design_Lifecycle/PCBs/Fabrication/', '8d4'),
        exact: true
      },
      {
        path: '/docs/Product_Design_Lifecycle/PCBs/Prototyping/',
        component: ComponentCreator('/docs/Product_Design_Lifecycle/PCBs/Prototyping/', 'dcb'),
        exact: true
      },
      {
        path: '/docs/Product_Design_Lifecycle/PCBs/Solder_Masks/',
        component: ComponentCreator('/docs/Product_Design_Lifecycle/PCBs/Solder_Masks/', '565'),
        exact: true
      },
      {
        path: '/docs/Product_Design_Lifecycle/PCBs/Surface_Finishes/',
        component: ComponentCreator('/docs/Product_Design_Lifecycle/PCBs/Surface_Finishes/', '2b7'),
        exact: true
      },
      {
        path: '/docs/Product_Design_Lifecycle/Programming/',
        component: ComponentCreator('/docs/Product_Design_Lifecycle/Programming/', '41e'),
        exact: true
      },
      {
        path: '/docs/Product_Design_Lifecycle/Schematic_Design/',
        component: ComponentCreator('/docs/Product_Design_Lifecycle/Schematic_Design/', '637'),
        exact: true
      },
      {
        path: '/docs/Samples/',
        component: ComponentCreator('/docs/Samples/', '06d'),
        exact: true
      },
      {
        path: '/docs/Samples/Netduino/',
        component: ComponentCreator('/docs/Samples/Netduino/', '252'),
        exact: true
      },
      {
        path: '/docs/Samples/Netduino/Blinky/',
        component: ComponentCreator('/docs/Samples/Netduino/Blinky/', 'af3'),
        exact: true
      },
      {
        path: '/docs/Samples/Netduino/ButtonInterruptEvents/',
        component: ComponentCreator('/docs/Samples/Netduino/ButtonInterruptEvents/', 'e9b'),
        exact: true
      },
      {
        path: '/docs/Samples/Netduino/ControllingAServo/',
        component: ComponentCreator('/docs/Samples/Netduino/ControllingAServo/', '3df'),
        exact: true
      },
      {
        path: '/docs/Samples/Netduino/DrivingLED_w_PWM/',
        component: ComponentCreator('/docs/Samples/Netduino/DrivingLED_w_PWM/', 'adb'),
        exact: true
      },
      {
        path: '/docs/Samples/Netduino/GlitchFilter/',
        component: ComponentCreator('/docs/Samples/Netduino/GlitchFilter/', '2fd'),
        exact: true
      },
      {
        path: '/docs/Samples/Netduino/LCDMicroLiquidCrystal/',
        component: ComponentCreator('/docs/Samples/Netduino/LCDMicroLiquidCrystal/', '90c'),
        exact: true
      },
      {
        path: '/docs/Samples/Netduino/OnboardButtonAndLed/',
        component: ComponentCreator('/docs/Samples/Netduino/OnboardButtonAndLed/', '361'),
        exact: true
      },
      {
        path: '/docs/Samples/Netduino/PotentiometerControlled_RgbLed/',
        component: ComponentCreator('/docs/Samples/Netduino/PotentiometerControlled_RgbLed/', '46b'),
        exact: true
      },
      {
        path: '/docs/Samples/Netduino/ReadDS3234/',
        component: ComponentCreator('/docs/Samples/Netduino/ReadDS3234/', '582'),
        exact: true
      },
      {
        path: '/docs/Samples/Netduino/RGB_Blinky/',
        component: ComponentCreator('/docs/Samples/Netduino/RGB_Blinky/', '27a'),
        exact: true
      },
      {
        path: '/docs/Samples/Netduino/RgbLed/',
        component: ComponentCreator('/docs/Samples/Netduino/RgbLed/', '3e3'),
        exact: true
      },
      {
        path: '/docs/Samples/Netduino/SDCardIO/',
        component: ComponentCreator('/docs/Samples/Netduino/SDCardIO/', '888'),
        exact: true
      },
      {
        path: '/docs/Samples/Netduino/TMP102BasicRead/',
        component: ComponentCreator('/docs/Samples/Netduino/TMP102BasicRead/', 'dcf'),
        exact: true
      },
      {
        path: '/docs/Samples/Netduino/TMP102ReadWrite/',
        component: ComponentCreator('/docs/Samples/Netduino/TMP102ReadWrite/', '123'),
        exact: true
      },
      {
        path: '/docs/Samples/Netduino/UARTTest/',
        component: ComponentCreator('/docs/Samples/Netduino/UARTTest/', '428'),
        exact: true
      },
      {
        path: '/docs/Samples/Netduino/WebRequest/',
        component: ComponentCreator('/docs/Samples/Netduino/WebRequest/', '698'),
        exact: true
      },
      {
        path: '/docs/Samples/Netduino/WebRequestMultithreaded/',
        component: ComponentCreator('/docs/Samples/Netduino/WebRequestMultithreaded/', 'df7'),
        exact: true
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '1a1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
