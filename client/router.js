import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Essai from "./components/Essai.js"
import Report from "./components/report.js"
import Home from "./components/Home.js";
import Login from "./components/Authentification/Login.js";
import SignUpServiceSeeker from "./components/Authentification/SignUpServiceSeeker.js";
import SignUpServiceProvider from "./components/Authentification/SignUpServiceProvider.js";
import SignUpEquipementsProvider from "./components/Authentification/SignUpEquipementsProvider.js";
import SignUpType from "./components/Authentification/SignUpType.js";
import ForumPost from "./components/ForumPost.js";
import serviceProvidersList from "./components/serviceProvidersList.js";
import shareservice from "./components/shareService.js";
import AddBlog from "./components/AddBlog.js";
import Forum2 from "./components/forum2.js";
import Equipmentsfetch from "./components/Equipementsfetch.js";
import EquipementsProviderProfile from "./components/EquipementsProviderProfile.js"
import EditProfile from "./components/EditProfile.js"
import VerificationCode from "./components/Authentification/VerificationCode.js";
import ForgetPassword from "./components/Authentification/ForgetPassword.js";
import SSSignUpGoogle from "./components/Authentification/SSSignUpGoogle.js";
import SPSignUpGoogle from "./components/Authentification/SPSignUpGoogle.js";
import EPSignUpGoogle from "./components/Authentification/EPSignUpGoogle.js";

import ResetPassword from "./components/Authentification/ResetPassword.js";
import { NavigationContainer } from "@react-navigation/native";
import SeekerRequest  from "./components/SeekerRequest.js";
import userEquipements from "./components/userEquipements.js"
import EditEquipement from "./components/EditEquipement.js"
import ServicesRequests from "./components/ServicesRequests.js";
import HomeScreen from "./components/HomeScreen.js"

const Stack = createNativeStackNavigator();
const Router = () => {
    const linking = {
        screens: {
            ResetPassword: {
                path: "ResetPassword/:code/:email",
                parse: {
                    code: (code) => code.replace(/^@/, ""),
                    email: (email) => email.replace(/^@/, ""),
                },
                stringify: {
                    code: (code) => `@{code}`,
                    email: (email) => `@{email}`,
                },
            },
            VerificationCode: {
                path: "VerificationCode/:code/:email",
                parse: {
                    
                    email: (email) => "",
                    code: (code) =>  "",
                },
                stringify: {
                    code: (code) => "",
                    email: (email) => "",
                },
            },
        },
    };

    return (
        <NavigationContainer
            linking={linking}
        >
            <Stack.Navigator>
            
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen
                    name="Equipementsfetch"
                    component={Equipmentsfetch}
                />
                <Stack.Screen name="Edit Equipement" component={EditEquipement} />
                <Stack.Screen name="EquipementsProviderProfile" component={EquipementsProviderProfile} />
                <Stack.Screen name="userEquipements" component={userEquipements} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name="Forum2" component={Forum2} />
                <Stack.Screen name="ForumPost" component={ForumPost} />
                <Stack.Screen name="AddBlog" component={AddBlog} />
                <Stack.Screen name="Essai" component={Essai} />
                <Stack.Screen name="ServicesRequests" component={ServicesRequests} />
                <Stack.Screen
                    name="serviceProvidersList"
                    component={serviceProvidersList}
                />
              
                <Stack.Screen name="shareservice" component={shareservice} />

                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen
                    name="ForgetPassword"
                    component={ForgetPassword}
                />
                <Stack.Screen name="ResetPassword" component={ResetPassword} />
                <Stack.Screen
                    name="VerificationCode"
                    component={VerificationCode}
                />
                 <Stack.Screen
                    name="SSSignUpGoogle"
                    component={SSSignUpGoogle}
                />
                  <Stack.Screen
                    name="SPSignUpGoogle"
                    component={SPSignUpGoogle}
                />
                   <Stack.Screen
                    name="EPSignUpGoogle"
                    component={EPSignUpGoogle}
                />
           
                <Stack.Screen name="SignUpAs" component={SignUpType} />
                <Stack.Screen
                    name="SignUpServiceSeeker"
                    component={SignUpServiceSeeker}
                />
                <Stack.Screen
                    name="SignUpServiceProvider"
                    component={SignUpServiceProvider}
                />
                <Stack.Screen
                    name="SignUpEquipementsProvider"
                    component={SignUpEquipementsProvider}
                />
                  <Stack.Screen
                    name="SeekerRequest"
                    component={SeekerRequest}
             
                />
                   <Stack.Screen
                    name="Report"
                    component={Report}
             
                />
                {/* <Stack.Screen
                    name="Test"
                    component={Test}
             
                /> */}




                
            </Stack.Navigator>
        </NavigationContainer>
    );
    
};
export default Router;