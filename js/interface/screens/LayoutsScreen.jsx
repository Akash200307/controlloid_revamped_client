import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { FlatList, View } from "react-native";
import { Card, Text, TextInput, IconButton, FAB } from "react-native-paper";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Styles from "../styles";
import * as Types from "../../types";
import { LayoutsActions } from "../../redux";

class LayoutsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.layoutInputRef = React.createRef();
    this.state = {
      showInput: false,
    };
  }

  renderLayoutCard = ({ item }) => {
    const { activeLayout, deleteLayout, setActiveLayout, navigation } = this.props;
    const isActive = activeLayout === item;

    return (
      <Card
        style={[Styles.modernCard, isActive && { borderWidth: 2, borderColor: "#8B5CF6" }]}
        onPress={() => navigation.navigate("Editor", { editedLayout: item })}
      >
        <View
          style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
        >
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <IconButton
              icon={isActive ? "star" : "star-outline"}
              iconColor={isActive ? "#FCD34D" : "#64748B"}
              size={24}
              onPress={() => setActiveLayout(item)}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold", color: "#F1F5F9" }}>{item}</Text>
              {isActive && (
                <Text style={{ fontSize: 12, color: "#8B5CF6", marginTop: 2 }}>Active Layout</Text>
              )}
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <IconButton
              icon="pencil"
              iconColor="#06B6D4"
              size={20}
              onPress={() => navigation.navigate("Editor", { editedLayout: item })}
            />
            <IconButton
              icon="delete"
              iconColor="#EF4444"
              size={20}
              onPress={() => deleteLayout(item)}
            />
          </View>
        </View>
      </Card>
    );
  };

  renderEmptyState = () => (
    <View style={Styles.centeredContent}>
      <MaterialIcon name="gamepad-variant-outline" size={64} color="#64748B" />
      <Text style={[Styles.centeredText, { marginTop: 16, color: "#94A3B8" }]}>No layouts yet</Text>
      <Text style={{ fontSize: 14, color: "#64748B", marginTop: 8, textAlign: "center" }}>
        Tap the + button to create your first layout
      </Text>
    </View>
  );

  createLayout = ({ nativeEvent: { text } }) => {
    const { layouts, createLayout } = this.props;
    const newLayoutName = text.trim().slice(0, 256);
    if (newLayoutName && !_.has(layouts, newLayoutName)) {
      createLayout(newLayoutName, {
        name: newLayoutName,
        components: [],
      });
    }
    this.layoutInputRef.current.clear();
    this.setState({ showInput: false });
  };

  render() {
    const { layouts } = this.props;
    const { showInput } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: "#0F172A" }}>
        <View style={{ padding: 16, paddingBottom: 0 }}>
          <Text style={Styles.sectionTitle}>My Layouts</Text>
          <Text style={Styles.subtitle}>Create and manage your controller layouts</Text>
        </View>

        <FlatList
          data={_.sortBy(_.keys(layouts))}
          renderItem={this.renderLayoutCard}
          keyExtractor={_.identity}
          ListEmptyComponent={this.renderEmptyState}
          contentContainerStyle={[Styles.flexGrowOne, { padding: 16 }]}
        />

        {showInput && (
          <View style={{ padding: 16, paddingTop: 0 }}>
            <TextInput
              ref={this.layoutInputRef}
              mode="outlined"
              label="Layout Name"
              placeholder="Enter layout name"
              style={{ backgroundColor: "#1E293B" }}
              theme={{ colors: { primary: "#8B5CF6", text: "#F1F5F9", placeholder: "#94A3B8" } }}
              onSubmitEditing={this.createLayout}
              autoFocus
            />
          </View>
        )}

        <FAB
          icon={showInput ? "close" : "plus"}
          style={{
            position: "absolute",
            margin: 16,
            right: 0,
            bottom: 0,
            backgroundColor: "#8B5CF6",
          }}
          color="#FFFFFF"
          onPress={() => this.setState({ showInput: !showInput })}
        />
      </View>
    );
  }
}

LayoutsScreen.propTypes = {
  layouts: Types.objectOfControllerLayouts.isRequired,
  activeLayout: Types.string,
  createLayout: Types.func.isRequired,
  deleteLayout: Types.func.isRequired,
  setActiveLayout: Types.func.isRequired,
  navigation: Types.navigation.isRequired,
};

LayoutsScreen.defaultProps = {
  activeLayout: null,
};

const mapStateToProps = (state) => ({
  layouts: state.layouts.layouts,
  activeLayout: state.layouts.activeLayout,
});

const mapDispatchToProps = {
  createLayout: LayoutsActions.createLayout,
  deleteLayout: LayoutsActions.deleteLayout,
  setActiveLayout: LayoutsActions.setActiveLayout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LayoutsScreen);
