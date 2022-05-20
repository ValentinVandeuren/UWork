import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

import WelcomePage from "./pages/WelcomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import TokenVerifyPage from "./pages/TokenVerifyPage";
import CreateProfilPage from "./pages/CreateProfilPage";
import AddCVPage from "./pages/AddCVPage";
import AddEducationPage from "./pages/AddEducationPage";
import AddLanguagePage from "./pages/AddLanguagePage";
import AddTypeJobPage from "./pages/AddTypeJobPage";
import WellDonePage from "./pages/WellDonePage";
import HomePage from "./pages/HomePage";
import MessagePage from "./pages/MessagePage";

import ProfilPage from "./pages/NavBarPages/ProfilPage";
import CalendarPage from "./pages/NavBarPages/CalendarPage";
import ConversationPage from './pages/NavBarPages/ConversationPage';
import ChatPage from "./pages/NavBarPages/ChatPage";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, /*gestureEnabled: false, animationEnabled: false*/}}
      >
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
        <Stack.Screen name="SignInPage" component={SignInPage} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} />
        <Stack.Screen name="TokenVerifyPage" component={TokenVerifyPage} />
        <Stack.Screen name="CreateProfilPage" component={CreateProfilPage} />
        <Stack.Screen name="AddCVPage" component={AddCVPage} />
        <Stack.Screen name="AddEducationPage" component={AddEducationPage} />
        <Stack.Screen name="AddLanguagePage" component={AddLanguagePage} />
        <Stack.Screen name="AddTypeJobPage" component={AddTypeJobPage} />
        <Stack.Screen name="WellDonePage" component={WellDonePage} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="MessagePage" component={MessagePage} />
        <Stack.Screen name="ProfilPage" component={ProfilPage} />
        <Stack.Screen name="CalendarPage" component={CalendarPage} />
        <Stack.Screen name="ConversationPage" component={ConversationPage} />
        <Stack.Screen name="ChatPage" component={ChatPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}