// src/screens/Home.tsx

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }: any): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Movie Detail"
          onPress={() => navigation.navigate('MovieDetail')}
          color="#007BFF"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default Home;
