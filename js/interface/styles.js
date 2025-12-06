import { StyleSheet } from "react-native";

export default StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "center",
    backgroundColor: "#0F172A",
  },
  fullScreen: {
    flex: 1,
    backgroundColor: "#000000",
  },
  elevate: {
    elevation: 1,
    marginBottom: 16,
  },
  pickerModal: {
    margin: 16,
    padding: 8,
    borderRadius: 16,
    backgroundColor: "#1E293B",
  },
  preferenceCard: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
    backgroundColor: "#1E293B",
    elevation: 4,
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  flexOne: {
    flex: 1,
  },
  flexGrowOne: {
    flexGrow: 1,
  },
  centeredText: {
    fontSize: 18,
    textAlign: "center",
    color: "#F1F5F9",
  },
  centeredContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  absoluteFill: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
  },
  // Modern additions
  modernCard: {
    backgroundColor: "#1E293B",
    borderRadius: 16,
    padding: 20,
    marginVertical: 8,
    elevation: 8,
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
  },
  gradientCard: {
    borderRadius: 16,
    padding: 20,
    marginVertical: 8,
  },
  glassCard: {
    backgroundColor: "rgba(30, 41, 59, 0.8)",
    borderRadius: 16,
    padding: 20,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.3)",
  },
  heroSection: {
    padding: 24,
    borderRadius: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F1F5F9",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#94A3B8",
    marginBottom: 8,
  },
  modernButton: {
    backgroundColor: "#8B5CF6",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  modernButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
