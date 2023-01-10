import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../Colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={[styles.buttonOuterContainer]}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.lightCoral }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <Text style={[styles.buttonText]}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  // flex는 필요한 공간만 차지하는 것이 default 이다.
  // 기본 속성은 stretch
  buttonOuterContainer: {
    borderRadius: 30,
    margin: 4,
    overflow: "hidden",
    backgroundColor: Colors.darkRed,
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
  pressed: {
    //ios
    opacity: 0.75,
  },
});
