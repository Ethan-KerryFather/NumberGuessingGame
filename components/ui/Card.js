import { View, StyleSheet } from "react-native";
import Colors from "../../Colors";
function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    marginTop: 36,
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
});
