import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './Stack';

const Root = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default Root;
