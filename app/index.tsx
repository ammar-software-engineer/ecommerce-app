import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";

export default function AuthScreen() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          {isLogin ? "Welcome Back" : "Create Account"}
        </Text>

        <Text style={styles.subtitle}>
          {isLogin
            ? "Login to continue shopping"
            : "Sign up to start your journey"}
        </Text>

        <View style={styles.divider} />

        <TextInput placeholder="Email" placeholderTextColor="#888" style={styles.input} />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          style={styles.input}
        />

        {!isLogin && (
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#888"
            secureTextEntry
            style={styles.input}
          />
        )}

        <TouchableOpacity style={styles.primaryBtn} onPress={() => router.push("/shop")}>
          <Text style={styles.primaryText}>
            {isLogin ? "LOGIN" : "CREATE ACCOUNT"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
          <Text style={styles.switchText}>
            {isLogin
              ? "Don't have an account? Sign up"
              : "Already have an account? Login"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    padding: 20,
  },

  card: {
    borderRadius: 20,
    padding: 25,
    borderWidth: 1,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },

  subtitle: {
    color: "#aaa",
    textAlign: "center",
    marginTop: 6,
    marginBottom: 20,
  },

  divider: {
    height: 1,
    backgroundColor: "#ffffff",
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#000",
    color: "#fff",
    borderWidth: 1,
    borderColor: "#333",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
  },

  primaryBtn: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
  },

  primaryText: {
    color: "#000",
    fontWeight: "bold",
    letterSpacing: 1,
  },

  switchText: {
    color: "#aaa",
    textAlign: "center",
    marginTop: 18,
  },
});
