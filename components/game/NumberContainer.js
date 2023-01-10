import { View, Text, StyleSheet } from "react-native";
import Colors from "../../Colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.game.text,
    borderWidth: 4,
    paddingVertical: 50,
    marginVertical: 40,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  numberText: {
    fontWeight: "bold",
    fontSize: 40,
    color: Colors.game.opponentsNumber,
  },
});
