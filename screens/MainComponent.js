import React from 'react';
import { Platform, View } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DirectoryScreen from './DirectoryScreen';
import CampsiteInfoScreen from './CampsiteInfoScreen';
import HomeScreen from './HomeScreen';

// Drawer Navigator
const Drawer = createDrawerNavigator();

// Shared screen options
const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#5637DD' }
};

// Home Stack Navigator
const HomeNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{ title: 'Home' }}
            />
        </Stack.Navigator>
    );
};

// Directory Stack Navigator
const DirectoryNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName='Directory'
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Directory'
                component={DirectoryScreen}
                options={{ title: 'Campsite Directory' }}
            />
            <Stack.Screen
                name='CampsiteInfo'
                component={CampsiteInfoScreen}
                options={({ route }) => ({
                    title: route.params.campsite.name
                })}
            />
        </Stack.Navigator>
    );
};

// Main Component with Drawer Navigator
const Main = () => {
    return (
        <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
            <Drawer.Navigator
                initialRouteName='HomeNav'
                screenOptions={{
                    drawerStyle: { backgroundColor: '#CEC8FF' },
                    headerShown: true,
                }}
            >
                <Drawer.Screen
                    name='HomeNav'
                    component={HomeNavigator}
                    options={{
                        title: 'Home',
                        headerShown: false,
                    }}
                />
                <Drawer.Screen
                    name='DirectoryNav'
                    component={DirectoryNavigator}
                    options={{
                        title: 'Campsite Directory',
                        headerShown: false,
                    }}
                />
            </Drawer.Navigator>
        </View>
    );
};

export default Main;
