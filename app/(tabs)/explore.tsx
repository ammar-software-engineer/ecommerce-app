import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const categories = [
  { id: '1', name: 'New Arrivals' },
  { id: '2', name: 'Clothing' },
  { id: '3', name: 'Shoes' },
  { id: '4', name: 'Accessories' },
  { id: '5', name: 'Sale' },
];

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={24} color="black" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="gray"
        />
      </View>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.categoryItem}>
              <Text style={styles.categoryText}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'monospace',
  },
  categoryItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  categoryText: {
    fontSize: 18,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
});
