import { DarkTheme } from "react-native-paper";

export default {
  ...DarkTheme,
  name: "Dark",
  mode: "exact",
  colors: {
    ...DarkTheme.colors,
    primary: "#8B5CF6", // Vibrant purple
    accent: "#06B6D4", // Cyan accent
    secondary: "#3B82F6", // Blue
    background: "#0F172A", // Deep dark blue
    surface: "#1E293B", // Slightly lighter surface
    text: "#F1F5F9", // Light text
    disabled: "#64748B", // Muted gray
    placeholder: "#94A3B8", // Placeholder gray
    backdrop: "#00000080", // Semi-transparent backdrop
  },
};
