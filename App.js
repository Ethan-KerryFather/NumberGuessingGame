import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import Colors from "./Colors";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient
      colors={[Colors.game.gradientStart, Colors.game.gradientEnd]}
      style={styles.rootScreen}
    >
      <StartGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
