export default [
  {
    name: "Left stick",
    type: "Analog",
    props: {
      emitX: "ANALOG_LX",
      emitY: "ANALOG_LY",
      // eslint-disable-next-line global-require
      stickerIcon: require("../../../assets/icons/ps2_icons/PS3-Left_Stick.png"),
    },
  },
  {
    name: "Right stick",
    type: "Analog",
    props: {
      emitX: "ANALOG_RX",
      emitY: "ANALOG_RY",
      // eslint-disable-next-line global-require
      stickerIcon: require("../../../assets/icons/ps2_icons/PS3-Right_Stick.png"),
    },
  },
  {
    name: "L1",
    type: "Button",
    props: {
      emit: "L1",
      // eslint-disable-next-line global-require
      stickerIcon: require("../../../assets/icons/ps2_icons/L1.png"),
    },
  },
  {
    name: "L2",
    type: "Button",
    props: {
      emit: "L2",
      // eslint-disable-next-line global-require
      stickerIcon: require("../../../assets/icons/ps2_icons/L2.png"),
    },
  },
  {
    name: "R1",
    type: "Button",
    props: {
      emit: "R1",
      // eslint-disable-next-line global-require
      stickerIcon: require("../../../assets/icons/ps2_icons/R1.png"),
    },
  },
  {
    name: "R2",
    type: "Button",
    props: {
      emit: "R2",
      // eslint-disable-next-line global-require
      stickerIcon: require("../../../assets/icons/ps2_icons/R2.png"),
    },
  },
  {
    name: "L3",
    type: "Button",
    props: {
      emit: "L3",
      // eslint-disable-next-line global-require
      stickerIcon: require("../../../assets/icons/ps2_icons/L3.png"),
    },
  },
  {
    name: "R3",
    type: "Button",
    props: {
      emit: "R3",
      // eslint-disable-next-line global-require
      stickerIcon: require("../../../assets/icons/ps2_icons/R3.png"),
    },
  },
  {
    name: "Triangle",
    type: "Button",
    props: {
      emit: "TRIANGLE",
      // eslint-disable-next-line global-require
      stickerIcon: require("../../../assets/icons/ps2_icons/triangle.png"),
    },
  },
  {
    name: "Cross",
    type: "Button",
    props: {
      emit: "CROSS",
      // eslint-disable-next-line global-require
      stickerIcon: require("../../../assets/icons/ps2_icons/cross.png"),
    },
  },
  {
    name: "Square",
    type: "Button",
    props: {
      emit: "SQUARE",
      // eslint-disable-next-line global-require
      stickerIcon: require("../../../assets/icons/ps2_icons/square.png"),
    },
  },
  {
    name: "Circle",
    type: "Button",
    props: {
      emit: "CIRCLE",
      // eslint-disable-next-line global-require
      stickerIcon: require("../../../assets/icons/ps2_icons/circle.png"),
    },
  },
  {
    name: "Up",
    type: "Button",
    props: {
      emit: "UP",
      // eslint-disable-next-line global-require
      stickerIcon: require("../../../assets/icons/ps2_icons/up.png"),
    },
  },
  {
    name: "Down",
    type: "Button",
    props: {
      emit: "DOWN",
      // eslint-disable-next-line global-require
      stickerIcon: require("../../../assets/icons/ps2_icons/down.png"),
    },
  },
  {
    name: "Left",
    type: "Button",
    props: {
      emit: "LEFT",
      // eslint-disable-next-line global-require
      stickerIcon: require("../../../assets/icons/ps2_icons/left.png"),
    },
  },
  {
    name: "Right",
    type: "Button",
    props: {
      emit: "RIGHT",
      // eslint-disable-next-line global-require
      stickerIcon: require("../../../assets/icons/ps2_icons/right.png"),
    },
  },
  {
    name: "Select",
    type: "Button",
    props: {
      emit: "SELECT",
      // eslint-disable-next-line global-require
      stickerIcon: require("../../../assets/icons/ps2_icons/select.png"),
    },
  },
  {
    name: "Start",
    type: "Button",
    props: {
      emit: "START",
      // eslint-disable-next-line global-require
      stickerIcon: require("../../../assets/icons/ps2_icons/start.png"),
    },
  },
  {
    name: "M1",
    type: "MacroButton",
    props: {
      emits: ["L2", "R2"],
      macroLabel: "M1",
    },
  },
  {
    name: "M2",
    type: "MacroButton",
    props: {
      emits: ["L1", "L2"],
      macroLabel: "M2",
    },
  },
];
