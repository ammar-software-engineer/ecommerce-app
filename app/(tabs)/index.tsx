import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { ProductCard, Product } from '../../components/ProductCard';

const products: Product[] = [
  { id: '1', name: 'Product 1', price: 100, image: 'https://via.placeholder.com/150' },
  { id: '2', name: 'Product 2', price: 150, image: 'https://via.placeholder.com/150' },
  { id: '3', name: 'Product 3', price: 200, image: 'https://via.placeholder.com/150' },
  { id: '4', name: 'Product 4', price: 250, image: 'https://via.placeholder.com/150' },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>E-Commerce</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'monospace',
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
