import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.heading}>Welcome to My Personalized App!</Text>
        <Text style={styles.message}>Here are my hobbies/tasks for the day:</Text>
        <Text style={styles.task}>1. Read a book</Text>
        <Text style={styles.task}>2. Go for a run</Text>
        <Text style={styles.task}>3. Work on a React Native project</Text>
        <Text style={styles.task}>4. Cook a new recipe</Text>
        <Text style={styles.task}>5. Watch a documentary</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6', // Light blue background
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    padding: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 20,
    marginBottom: 20,
  },
  task: {
    fontSize: 18,
    marginVertical: 5,
  },
});
