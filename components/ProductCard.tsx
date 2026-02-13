import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export type Product = {
  id: string;
  name: string;
  price: number;
  icon: any;
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <View style={styles.card}>
      <MaterialIcons name={product.icon} size={48} color="black" />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    padding: 15,
    width: 150,
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
    marginTop: 8,
    fontFamily: "monospace",
  },
  price: {
    marginTop: 4,
  },
});
