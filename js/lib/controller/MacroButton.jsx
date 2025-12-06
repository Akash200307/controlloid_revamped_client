import React from "react";
import { SvgXml } from "react-native-svg";
import { Animated, View, Text } from "react-native";
import * as Types from "../../types";
import { TouchReceiverMixin } from "../utils";
import Styles, { buildContainerStyle } from "./styles";

export default class MacroButton extends TouchReceiverMixin(React.PureComponent) {
  constructor(props) {
    super(props);
    this.touchId = null;
    this.opacity = new Animated.Value(1);
  }

  buttonPress() {
    const { dispatch, emits } = this.props;
    // Trigger all buttons in the macro simultaneously
    const macroState = {};
    emits.forEach((emit) => {
      macroState[emit] = 1;
    });
    dispatch(macroState, true);
    this.opacity.setValue(0.25);
  }

  buttonRelease() {
    const { dispatch, emits } = this.props;
    // Release all buttons in the macro simultaneously
    const macroState = {};
    emits.forEach((emit) => {
      macroState[emit] = 0;
    });
    dispatch(macroState, true);
    this.opacity.setValue(1);
  }

  onTouchDown(id) {
    if (this.touchId === null) {
      this.touchId = id;
      this.buttonPress();
      return true;
    }
    return false;
  }

  onTouchMove(touch) {
    if (this.touchId === touch.identifier) {
      const { x, y, size } = this.props;
      if (
        x > touch.locationX ||
        touch.locationX > x + size ||
        y > touch.locationY ||
        touch.locationY > y + size
      ) {
        this.touchId = null;
        this.buttonRelease();
        return false;
      }
    } else if (this.touchId === null) {
      this.touchId = touch.identifier;
      this.buttonPress();
    }
    return true;
  }

  onTouchUp(id) {
    if (this.touchId === id) {
      this.touchId = null;
      this.buttonRelease();
    }
  }

  render() {
    const { x, y, size, theme, macroLabel, emits, style, ...viewProps } = this.props;
    const buttonCount = emits ? emits.length : 0;

    return (
      <Animated.View {...viewProps} style={[buildContainerStyle(x, y, size), style]}>
        <Animated.View style={{ opacity: this.opacity }}>
          <SvgXml xml={theme.rect} width={size} height={size} />
          <View style={Styles.overlayContainer}>
            {/* Large bold macro label in center (M1, M2, etc.) */}
            {macroLabel && (
              <Text
                style={{
                  color: "#000",
                  fontSize: size * 0.35,
                  fontWeight: "900",
                  textAlign: "center",
                }}
              >
                {macroLabel}
              </Text>
            )}
            {/* Badge showing button count */}
            {buttonCount > 0 && (
              <View
                style={{
                  position: "absolute",
                  top: size * 0.05,
                  right: size * 0.05,
                  backgroundColor: "#ff6b6b",
                  borderRadius: size * 0.1,
                  minWidth: size * 0.2,
                  height: size * 0.2,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: size * 0.05,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: size * 0.12,
                    fontWeight: "bold",
                  }}
                >
                  {buttonCount}
                </Text>
              </View>
            )}
          </View>
        </Animated.View>
      </Animated.View>
    );
  }
}

MacroButton.propTypes = {
  x: Types.number.isRequired,
  y: Types.number.isRequired,
  size: Types.number.isRequired,
  emits: Types.arrayOf(Types.string).isRequired, // Array of button names to trigger
  theme: Types.controllerTheme.isRequired,
  style: Types.any,
  dispatch: Types.func,
  macroLabel: Types.string, // Bold text label like "M1", "M2", etc.
};

MacroButton.defaultProps = {
  dispatch: () => null,
  macroLabel: "M",
};
