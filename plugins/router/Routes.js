import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import Login from '../../components/Login';
import Signup from '../../components/Signup';
import { createStackNavigator } from '@react-navigation/stack';
import Project from '../../components/managements/ProjectList';
import Employee from '../../components/managements/EmployeeList';
import { StartItem, NotStart, Complete } from '../../components/managements/project/ProjectItem';
import { EditProject } from '../../components/managements/project/EditProject';
import { AddEmployee } from '../../components/managements/employee/AddEmployee';
import { AddEmployeeToProject } from '../../components/managements/employee/AddEmployeeToProject';
import { CountEmployee } from '../../components/human_resources/CountEmployee';
import { Candidate } from '../../components/applys/Candidate';

//Screen names
const login = "Login";
const signup = "Signup";

// Project
const project = "Project";
const start_item = "Start_Item";
const not_start_item = "Not_Start_Item";
const complete_item = "Complete_Item";
const edit_project = "Edit_Project";

// Employee
const employee = "Employee";
const add_employee = "Add_Employee";
const add_employee_to_project = "Add_Employee_To_Project";

// Recuitment
const count = "Count_Recuitment";


// Applys
const candidate = "Candidate";
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
            <Tab.Screen name={edit_project} component={EditProject} />
            <Tab.Screen name={add_employee} component={AddEmployee} />
            <Tab.Screen name={add_employee_to_project} component={AddEmployeeToProject} />
            <Tab.Screen name={count} component={CountEmployee} />
            <Tab.Screen name={candidate} component={Candidate} />
         </Tab.Navigator>
      </NavigationContainer>
  );
}

export default Routes;