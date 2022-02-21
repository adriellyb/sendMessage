import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackScreens from './src/routes/StackScreens';

export default function App() {
  return (
    <NavigationContainer>
      <StackScreens />
    </NavigationContainer>
  );
}
