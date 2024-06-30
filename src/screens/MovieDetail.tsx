// src/screens/MovieDetail.tsx

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { API_URL, API_ACCESS_TOKEN } from '@env';

const MovieDetail = ({ navigation }: any): JSX.Element => {
  const fetchData = (): void => {
    if (!API_URL || !API_ACCESS_TOKEN) {
      throw new Error('ENV not found');
    }

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_ACCESS_TOKEN}`,
      },
    };

    fetch(API_URL, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie Detail Page</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Fetch Data"
          onPress={fetchData}
          color="#007BFF"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Back to Home"
          onPress={() => navigation.goBack()}
          color="#FF6347"
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
    marginBottom: 10,
  },
});

export default MovieDetail;
