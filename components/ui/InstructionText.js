import { Text, StyleSheet } from "react-native";
import Colors from "../../Colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.game.text,
    fontSize: 24,
  },
});
