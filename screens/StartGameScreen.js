import { TextInput, View, StyleSheet, Pressable } from "react-native";
import Colors from "../Colors";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  function pressHandler() {
    console.log("pressed..!");
  }
  return (
    <Pressable onPress={pressHandler}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          placeholder="00"
          keyboardType="number-pad"
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.lightCoral,
    borderRadius: 8,
    elevation: 4, // only Android
    shadowColor: Colors.saddleBrown,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 1,

    flexDirection: "column",
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 70,
    fontSize: 32,
    borderBottomColor: Colors.saddleBrown,
    borderBottomWidth: 2,
    color: Colors.saddleBrown,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
