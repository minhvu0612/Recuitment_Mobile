import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import Login from '../../components/Login';
import Signup from '../../components/Signup';
import { createStackNavigator } from '@react-navigation/stack';
import Project from '../../components/managements/Project';

//Screen names
const login = "Login";
const signup = "Signup";
const project = "Project";

const Tab = createStackNavigator();

function Routes() {
   return (
      <NavigationContainer>
         <Tab.Navigator
            initialRouteName={login} >
            <Tab.Screen name={login} component={Login} />
            <Tab.Screen name={signup} component={Signup} />
            <Tab.Screen name={project} component={Project} />
         </Tab.Navigator>
      </NavigationContainer>
  );
}

export default Routes;