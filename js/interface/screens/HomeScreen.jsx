import React from "react";
import { Card, Text, withTheme, Button } from "react-native-paper";
import { Linking, ScrollView, View } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Styles from "../styles";
import * as Types from "../../types";

const StepCard = ({ number, title, description, icon }) => (
  <Card style={Styles.modernCard}>
    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}>
      <View
        style={{
          width: 48,
          height: 48,
          borderRadius: 24,
          backgroundColor: "#8B5CF6",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 16,
        }}
      >
        <MaterialIcon name={icon} size={24} color="#FFFFFF" />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 12, color: "#8B5CF6", fontWeight: "bold" }}>STEP {number}</Text>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#F1F5F9" }}>{title}</Text>
      </View>
    </View>
    <Text style={{ fontSize: 14, color: "#94A3B8", lineHeight: 20 }}>{description}</Text>
  </Card>
);

StepCard.propTypes = {
  number: Types.number.isRequired,
  title: Types.string.isRequired,
  description: Types.string.isRequired,
  icon: Types.string.isRequired,
};

const HomeScreen = () => (
  <ScrollView style={{ flex: 1, backgroundColor: "#0F172A" }} overScrollMode="never">
    <View style={{ padding: 16 }}>
      {/* Hero Section */}
      <View style={[Styles.heroSection, { backgroundColor: "#8B5CF6" }]}>
        <MaterialIcon
          name="gamepad-variant"
          size={48}
          color="#FFFFFF"
          style={{ marginBottom: 12 }}
        />
        <Text style={{ fontSize: 28, fontWeight: "bold", color: "#FFFFFF", marginBottom: 8 }}>
          Welcome to Controlloid Revamped
        </Text>
        <Text style={{ fontSize: 16, color: "#E0E7FF" }}>
          Transform your phone into a real game controller
        </Text>
      </View>

      {/* Getting Started */}
      <Text style={Styles.sectionTitle}>Getting Started</Text>

      <StepCard
        number={1}
        icon="view-dashboard"
        title="Create Your Layout"
        description="Go to Layouts screen to create, edit and star a layout that suits your gaming style."
      />

      <StepCard
        number={2}
        icon="server-network"
        title="Start the Server"
        description="Start the server on your PC. Make sure your phone and computer are on the same network for optimal performance (USB Tethering > Bluetooth PAN > WiFi)."
      />

      <StepCard
        number={3}
        icon="connection"
        title="Connect to Server"
        description="Go to Controller screen, enter your PC's IP address (must begin with http://) and press CONNECT. You can also scan for LAN servers by pulling down."
      />

      <StepCard
        number={4}
        icon="tune"
        title="Customize Settings"
        description="Visit Preferences to change theme or tweak controls: analog dead zone, stick range, and socket latency."
      />

      <StepCard
        number={5}
        icon="check-circle"
        title="Start Gaming!"
        description="You're all set! Enjoy gaming with your custom controller."
      />

      {/* Server Download */}
      <Card style={[Styles.modernCard, { marginTop: 16 }]}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#F1F5F9", marginBottom: 12 }}>
          Download Server
        </Text>
        <Text style={{ fontSize: 14, color: "#94A3B8", marginBottom: 16 }}>
          Get the server application for your PC to start using Controlloid Revamped.
        </Text>
        <Button
          mode="contained"
          icon="download"
          onPress={() => Linking.openURL("https://github.com/experiment322/controlloid-server")}
          style={Styles.modernButton}
          labelStyle={Styles.modernButtonText}
        >
          Download from GitHub
        </Button>
        <Text style={{ fontSize: 12, color: "#64748B", marginTop: 12 }}>
          Linux: ./dist/linux/start.sh{"\n"}
          Windows: ./dist/windows/start.bat
        </Text>
      </Card>

      <View style={{ height: 24 }} />
    </View>
  </ScrollView>
);

export default withTheme(HomeScreen);
