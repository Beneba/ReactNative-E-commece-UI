
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DetailPage from './components/DetailPage';
import StoreDisplay from './components/StoreDisplay';
import StoreList from './components/StoreList';

export default function App() {
  return (
      // <StoreList />
      <DetailPage />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
