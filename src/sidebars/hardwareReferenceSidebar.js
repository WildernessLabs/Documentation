const hardwareReferenceSidebar = [
  {
    // Hardware Fundementals
    type: "category",
    label: "Hardware Fundementals",
    link: {
      type: "doc",
      id: "Hardware/index",
    },
    items: [
      {
        type: "category",
        label: "Intro to Hardware Design",
        link: {
          type: "doc",
          id: "Hardware/Fundamentals/Introduction_to_Hardware_Design/index",
        },
        items: [
          "Hardware/Fundamentals/Introduction_to_Hardware_Design/Product_Design_Lifecycle/index",
          "Hardware/Fundamentals/Introduction_to_Hardware_Design/Production_Scale/index",
          "Hardware/Fundamentals/Introduction_to_Hardware_Design/Breadboarding/index",
          "Hardware/Fundamentals/Introduction_to_Hardware_Design/Printed_Circuit_Boards_PCBs/index",
        ],
      },
      {
        type: "category",
        label: "PCB Design Tutorial",
        link: {
          type: "doc",
          id: "Hardware/Tutorials/PCB_Tutorial/index",
        },
        items: [
          "Hardware/Tutorials/PCB_Tutorial/Schematic_Design/index",
          "Hardware/Tutorials/PCB_Tutorial/PCB_Layout/index",
          "Hardware/Tutorials/PCB_Tutorial/PCB_Assembly/index",
        ],
      },
    ],
  },
  {
    // Advanced PCB Concepts
    type: "category",
    label: "Advanced PCB Concepts",
    items: [
      "Hardware/Printed_Circuit_Boards_PCBs/PCB_Stackups/index",
      
      {
        type: "category",
        label: "PCB Design Tutorial",
        link: {
          type: "doc",
          id: "Hardware/Tutorials/PCB_Tutorial/index",
        },
        items: [
          "Hardware/Tutorials/PCB_Tutorial/Schematic_Design/index",
          "Hardware/Tutorials/PCB_Tutorial/PCB_Layout/index",
          "Hardware/Tutorials/PCB_Tutorial/PCB_Assembly/index",
        ],
      },

      {
        type: "category",
        label: "Components",
        items: [
          "Hardware/Printed_Circuit_Boards_PCBs/Components/Component_Search/index",
          "Hardware/Printed_Circuit_Boards_PCBs/Components/Packages_and_Sizes/index",
          "Hardware/Printed_Circuit_Boards_PCBs/Components/Symbols_and_Footprints/index",
        ],
      },
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

  {
    type: "category",
    label: "Equations and Laws",
    items: [
      "Hardware/Reference/Units/Amps/index",
      "Hardware/Reference/Units/Volts/index",
      "Hardware/Reference/Units/Watts/index",

      {
        type: "category",
        label: "Voltage",
        link: {
          type: "doc",
          id: "Hardware/Reference/Equations_and_Laws/Voltage/index",
        },
        items: [
          "Hardware/Reference/Equations_and_Laws/Voltage/Division/index",
          "Hardware/Reference/Equations_and_Laws/Voltage/Ohms_Law/index",
        ],
      },

      {
        type: "category",
        label: "Resistance",
        link: {
          type: "doc",
          id: "Hardware/Reference/Equations_and_Laws/Resistance/index",
        },
        items: [
          "Hardware/Reference/Equations_and_Laws/Resistance/Parallel/index",
          "Hardware/Reference/Equations_and_Laws/Resistance/Series/index",
        ],
      },
    ],
  },
];

module.exports = hardwareReferenceSidebar;
