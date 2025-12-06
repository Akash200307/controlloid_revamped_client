import React from "react";
import { SvgXml } from "react-native-svg";
import { Animated, View, Image } from "react-native";
import * as Types from "../../types";
import { TouchReceiverMixin } from "../utils";
import Styles, { buildContainerStyle } from "./styles";

export default class Button extends TouchReceiverMixin(React.PureComponent) {
  constructor(props) {
    super(props);
    this.touchId = null;
    this.opacity = new Animated.Value(1);
  }

  buttonPress() {
    const { dispatch, emit } = this.props;
    dispatch({ [emit]: 1 }, true);
    this.opacity.setValue(0.25);
  }

  buttonRelease() {
    const { dispatch, emit } = this.props;
    dispatch({ [emit]: 0 }, true);
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
    const { x, y, size, theme, stickerIcon, emit, style, ...viewProps } = this.props;
    // Use rectangular shape for shoulder buttons (L1, L2, R1, R2, L3, R3)
    const isShoulderButton = emit && ["L1", "L2", "R1", "R2", "L3", "R3"].includes(emit);
    const buttonShape = isShoulderButton ? theme.rect : theme.knob;

    return (
      <Animated.View {...viewProps} style={[buildContainerStyle(x, y, size), style]}>
        <Animated.View style={{ opacity: this.opacity }}>
          <SvgXml xml={buttonShape} width={size} height={size} />
          <View style={Styles.overlayContainer}>
            {stickerIcon && (
              <Image
                source={stickerIcon}
                style={{ width: size * 0.5, height: size * 0.5 }}
                resizeMode="contain"
              />
            )}
          </View>
        </Animated.View>
      </Animated.View>
    );
  }
}

Button.propTypes = {
  x: Types.number.isRequired,
  y: Types.number.isRequired,
  size: Types.number.isRequired,
  emit: Types.string.isRequired,
  theme: Types.controllerTheme.isRequired,
  style: Types.any,
  dispatch: Types.func,
  stickerIcon: Types.any, // Image source
};

Button.defaultProps = {
  dispatch: () => null,
  stickerIcon: null,
};
