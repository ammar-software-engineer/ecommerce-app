import { View, Text, FlatList, TouchableOpacity, SafeAreaView, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useCart, Product } from "./context/CartContext";
import { MaterialIcons } from "@expo/vector-icons";

const PRODUCTS: Product[] = [
  { id: "1", name: "Headphones", price: 79.99, icon: "headphones" },
  { id: "2", name: "Smart Watch", price: 129.99, icon: "watch" },
  { id: "3", name: "Gaming Mouse", price: 49.99, icon: "mouse" },
  { id: "4", name: "Keyboard", price: 59.99, icon: "keyboard" },
  { id: "5", name: "Laptop", price: 899.99, icon: "laptop" },
  { id: "6", name: "Phone", price: 699.99, icon: "smartphone" },
  { id: "7", name: "Camera", price: 499.99, icon: "photo-camera" },
  { id: "8", name: "Speaker", price: 149.99, icon: "speaker" },
  { id: "9", name: "Controller", price: 69.99, icon: "sports-esports" },
  { id: "10", name: "TV", price: 999.99, icon: "tv" },
  { id: "11", name: "Tablet", price: 329.99, icon: "tablet" },
];

export default function ShopScreen() {
  const router = useRouter();
  const { addToCart, cart } = useCart();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Shop</Text>
        <TouchableOpacity onPress={() => router.push("/cart")} style={styles.cartButton}>
          <MaterialIcons name="shopping-cart" size={28} color="white" />
          {cart.length > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{cart.length}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <FlatList
        data={PRODUCTS}
        keyExtractor={(i) => i.id}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 20 }}
        columnWrapperStyle={{ justifyContent: "space-around", marginBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => addToCart(item)}
              activeOpacity={0.8}
            >
              <MaterialIcons name={item.icon} size={50} color="white" />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>${item.price}</Text>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Add to Cart</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
  },
  cartButton: {
    position: "relative",
    padding: 5,
  },
  badge: {
    position: "absolute",
    top: -6,
    right: -6,
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 5,
    minWidth: 20,
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontWeight: "bold",
  },
  cardContainer: {
    width: "45%",
  },
  card: {
    backgroundColor: "#222",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  name: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
  price: {
    color: "white",
    marginTop: 5,
    fontWeight: "bold",
  },
  button: {
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#111",
    fontWeight: "bold",
  },
});
