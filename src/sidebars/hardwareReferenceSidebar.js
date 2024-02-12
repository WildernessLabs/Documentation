const hardwareReferenceSidebar = [
  {
    // Electronics Basics
    type: "category",
    label: "Electronic Fundamentals",
    items: [
      {
        type: "category",
        label: "Voltage",
        link: {
          type: "doc",
          id: "Hardware/Reference/Electronic_Fundamentals/Voltage/index",
        },
        items: [
          "Hardware/Reference/Electronic_Fundamentals/Voltage/Division/index",
        ],
      },
      "Hardware/Reference/Electronic_Fundamentals/Amperage/index",
      "Hardware/Reference/Electronic_Fundamentals/Power/index",
      {
        type: "category",
        label: "Resistance",
        link: {
          type: "doc",
          id: "Hardware/Reference/Electronic_Fundamentals/Resistance/index",
        },
        items: [
          "Hardware/Reference/Electronic_Fundamentals/Resistance/Parallel/index",
          "Hardware/Reference/Electronic_Fundamentals/Resistance/Series/index",
        ],
      },
      "Hardware/Reference/Electronic_Fundamentals/Ohms_Law/index",
      "Hardware/Reference/Electronic_Fundamentals/Capacitance/index",
    ],
  },
  {
    // Components Basics
    type: "category",
    label: "Components",
    link: {
      type: "doc",
      id: "Hardware/Reference/Components/Common/index",
    },
    items: [
      {
        type: "category",
        label: "Common Components",
        items: [
          {
            type: "category",
            label: "Resistors",
            link: {
              type: "doc",
              id: "Hardware/Reference/Components/Common/Resistors/index",
            },
            items: [
              "Hardware/Reference/Components/Common/Resistors/Reading_Axial_Resistors/index",
            ],
          },
          {
            type: "category",
            label: "Diodes",
            link: {
              type: "doc",
              id: "Hardware/Reference/Components/Common/Diodes/index",
            },
            items: [
              "Hardware/Reference/Components/Common/Diodes/Light-Emitting_Diodes/index",
              "Hardware/Reference/Components/Common/Diodes/Photodiodes/index",
              "Hardware/Reference/Components/Common/Diodes/Power_Diodes/index",
              "Hardware/Reference/Components/Common/Diodes/Schottky_Diodes/index",
              "Hardware/Reference/Components/Common/Diodes/Small-Signal_Diodes/index",
              "Hardware/Reference/Components/Common/Diodes/Zener_Diodes/index",
            ],
          },
          "Hardware/Reference/Components/Common/Capacitors/index",
          {
            type: "category",
            label: "Transistors",
            link: {
              type: "doc",
              id: "Hardware/Reference/Components/Common/Transistors/index",
            },
            items: [
              "Hardware/Reference/Components/Common/Transistors/Low-Side_MOSFET_Circuit/index",
              "Hardware/Reference/Components/Common/Transistors/High-Side_MOSFET_Circuit/index",
              "Hardware/Reference/Components/Common/Transistors/MOSFET_Technical_Details/index",
            ],
          },
        ],
      },
      "Hardware/Printed_Circuit_Boards_PCBs/Components/Component_Search/index",
      "Hardware/Printed_Circuit_Boards_PCBs/Components/Packages_and_Sizes/index",
      "Hardware/Printed_Circuit_Boards_PCBs/Components/Symbols_and_Footprints/index",
    ],
  },
  {
    type: "category",
    label: "Algorithms",
    items: [
      {
        type: "category",
        label: "PID",
        link: {
          type: "doc",
          id: "Hardware/Reference/Algorithms/Proportional_Integral_Derivative/Intro/index",
        },
        items: [
          "Hardware/Reference/Algorithms/Proportional_Integral_Derivative/Intro/index",
          "Hardware/Reference/Algorithms/Proportional_Integral_Derivative/Closed_Loop_Gain_Controllers/index",
          "Hardware/Reference/Algorithms/Proportional_Integral_Derivative/Ideal_PID_Algorithm/index",
          "Hardware/Reference/Algorithms/Proportional_Integral_Derivative/Standard_PID_Algorithm/index",
          "Hardware/Reference/Algorithms/Proportional_Integral_Derivative/Using_PID/index",
        ],
      },
    ],
  },
];

module.exports = hardwareReferenceSidebar;
