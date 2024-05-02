const hardwareTutorialsSidebar = [
    {
      // Electronics Tutorial
      type: "category",
      label: "Electronics Tutorial",
      link: {
        type: "doc",
        id: "Hardware/Tutorials/index",
      },
      items: [
        "Hardware/Tutorials/Electronics/index",
        "Hardware/Tutorials/Electronics/Prologue/Requirements/index",

        {
          // part 1
          type: "category",
          label: "1. - Physics of Electricity",
          link: {
            type: "doc",
            id: "Hardware/Tutorials/Electronics/Part1/index",
          },
          items: [
            "Hardware/Tutorials/Electronics/Part1/Atoms/index",
            "Hardware/Tutorials/Electronics/Part1/Electrical_Current/index",
            "Hardware/Tutorials/Electronics/Part1/Electromagnetism/index",
            "Hardware/Tutorials/Electronics/Part1/Review/index",
          ],
        },

        {
          // part 2
          type: "category",
          label: "2. - Amps, Volts, and Watts",
          link: {
            type: "doc",
            id: "Hardware/Tutorials/Electronics/Part2/index",
          },
          items: [
            "Hardware/Tutorials/Electronics/Part2/Amount_and_Force/index",
            "Hardware/Tutorials/Electronics/Part2/Amperage/index",
            "Hardware/Tutorials/Electronics/Part2/Voltage/index",
            "Hardware/Tutorials/Electronics/Part2/Wattage/index",
            "Hardware/Tutorials/Electronics/Part2/Source_Load_and_Ground/index",
            "Hardware/Tutorials/Electronics/Part2/Review/index",
          ],
        },

        {
          // part 3
          type: "category",
          label: "3. - Current Types; AC & DC",
          link: {
            type: "doc",
            id: "Hardware/Tutorials/Electronics/Part3/index",
          },
          items: [
            "Hardware/Tutorials/Electronics/Part3/Current_Types/index",
            "Hardware/Tutorials/Electronics/Part3/Direct_Current/index",
            "Hardware/Tutorials/Electronics/Part3/Alternating_Current/index",
            "Hardware/Tutorials/Electronics/Part3/AC_Generation/index",
            "Hardware/Tutorials/Electronics/Part3/AC_Characteristics/index",
            "Hardware/Tutorials/Electronics/Part3/Review/index",
          ],
        },

        {
          // part 4
          type: "category",
          label: "4. - Resistance & Ohm's Law",
          link: {
            type: "doc",
            id: "Hardware/Tutorials/Electronics/Part4/index",
          },
          items: [
            "Hardware/Tutorials/Electronics/Part4/Resistance/index",
            "Hardware/Tutorials/Electronics/Part4/Ohms_Law/index",
            "Hardware/Tutorials/Electronics/Part4/Calculating_Resistance/index",
            "Hardware/Tutorials/Electronics/Part4/Resistor_Power_Rating/index",
            "Hardware/Tutorials/Electronics/Part4/Series_Resistance/index",
            "Hardware/Tutorials/Electronics/Part4/Parallel_Resistance/index",
            "Hardware/Tutorials/Electronics/Part4/Reading_Resistors/index",
            "Hardware/Tutorials/Electronics/Part4/Resistor_Tolerance/index",
            "Hardware/Tutorials/Electronics/Part4/Resistor_Lab/index",
            "Hardware/Tutorials/Electronics/Part4/PullUp_PullDown_Resistors/index",
            "Hardware/Tutorials/Electronics/Part4/Review/index",
          ],
        },

        {
          // part 5
          type: "category",
          label: "5. - DC Circuit Basics",
          link: {
            type: "doc",
            id: "Hardware/Tutorials/Electronics/Part5/index",
          },
          items: [
            "Hardware/Tutorials/Electronics/Part5/DC_Circuits/index",
            "Hardware/Tutorials/Electronics/Part5/Kirchhoffs_Current_Law/index",
            "Hardware/Tutorials/Electronics/Part5/Kirchhoffs_Voltage_Law/index",
            "Hardware/Tutorials/Electronics/Part5/Voltage_Division/index",
            "Hardware/Tutorials/Electronics/Part5/Voltage_Divider_Practicals/index",
            "Hardware/Tutorials/Electronics/Part5/Resistive_Sensor_Lab/index",
            "Hardware/Tutorials/Electronics/Part5/Level_Shifting_Lab/index",
            "Hardware/Tutorials/Electronics/Part5/Circuit_Software/index",
            "Hardware/Tutorials/Electronics/Part5/Review/index",
          ],
        },

        {
          // part 6
          type: "category",
          label: "6. - Semiconductors, Part 1: Diodes",
          link: {
            type: "doc",
            id: "Hardware/Tutorials/Electronics/Part6/index",
          },
          items: [
            "Hardware/Tutorials/Electronics/Part6/Semiconductors/index",
            "Hardware/Tutorials/Electronics/Part6/Silicon/index",
            "Hardware/Tutorials/Electronics/Part6/P-Type/index",
            "Hardware/Tutorials/Electronics/Part6/N-Type/index",
            "Hardware/Tutorials/Electronics/Part6/P-N_Junctions/index",
            "Hardware/Tutorials/Electronics/Part6/General_Diodes/index",
            "Hardware/Tutorials/Electronics/Part6/Light_Related_Diodes/index",
            "Hardware/Tutorials/Electronics/Part6/LEDs/index",
            "Hardware/Tutorials/Electronics/Part6/LED_Lab/index",
            "Hardware/Tutorials/Electronics/Part6/Diode_Logic_Lab/index",
            "Hardware/Tutorials/Electronics/Part6/Review/index",
          ],
        },

        {
          // part 7
          type: "category",
          label: "7. - Semiconductors, Part 2: Transistors",
          link: {
            type: "doc",
            id: "Hardware/Tutorials/Electronics/Part7/index",
          },
          items: [
            "Hardware/Tutorials/Electronics/Part7/Transistors/index",
            "Hardware/Tutorials/Electronics/Part7/N-Channel_MOSFET/index",
            "Hardware/Tutorials/Electronics/Part7/N-Channel_MOSFET_Low-Side_Usage/index",
            "Hardware/Tutorials/Electronics/Part7/MOSFET_High-Side_Usage/index",
            "Hardware/Tutorials/Electronics/Part7/MOSFET_Technical_Details/index",
            "Hardware/Tutorials/Electronics/Part7/Depletion_MOSFETs/index",
            "Hardware/Tutorials/Electronics/Part7/Motor_Control_Lab/index",
            "Hardware/Tutorials/Electronics/Part7/Review/index",
          ],
        },

        //"Hardware/Tutorials/Electronics/Part7/Transistors/index",
        //"Hardware/Tutorials/Electronics/PartY_Other_Components/index",
        // "Hardware/Tutorials/Electronics/Notes",
      ],
    },
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
      // PCB Design Tutorial
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
      // Circuit Recipes
      type: "category",
      label: "Circuit Recipes",
      link: {
        type: "doc",
        id: "Hardware/Tutorials/Circuit_Recipes/index",
      },
      items: [
        "Hardware/Tutorials/Circuit_Recipes/I2C_Addressing/index",
    
      ],
    },
  ];
  
  module.exports = hardwareTutorialsSidebar;
  