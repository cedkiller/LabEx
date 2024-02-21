import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home.js';
import About from './About.js';
import Education from './Education';
import Project from './Project';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Education" component={Education} />
        <Stack.Screen name="Project" component={Project} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;