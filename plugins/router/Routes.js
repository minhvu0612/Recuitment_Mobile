import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import Login from '../../components/Login';
import Signup from '../../components/Signup';
import { createStackNavigator } from '@react-navigation/stack';
import Project from '../../components/managements/ProjectList';
import Employee from '../../components/managements/EmployeeList';
import { StartItem, NotStart, Complete } from '../../components/managements/project/ProjectItem';

//Screen names
const login = "Login";
const signup = "Signup";
// Project
const project = "Project";
const start_item = "Start_Item";
const not_start_item = "Not_Start_Item";
const complete_item = "Complete_Item";
// Employee
const employee = "Employee";

// Init Tab Router
const Tab = createStackNavigator();

function Routes() {
   return (
      <NavigationContainer>
         <Tab.Navigator initialRouteName={login} >
            <Tab.Screen name={login} component={Login} />
            <Tab.Screen name={signup} component={Signup} />
            <Tab.Screen name={project} component={Project} />
            <Tab.Screen name={employee} component={Employee} />
            <Tab.Screen name={start_item} component={StartItem} />
            <Tab.Screen name={not_start_item} component={NotStart} />
            <Tab.Screen name={complete_item} component={Complete} />
         </Tab.Navigator>
      </NavigationContainer>
  );
}

export default Routes;