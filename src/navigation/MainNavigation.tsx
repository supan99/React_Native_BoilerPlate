import React, { PropsWithChildren, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, CommonActions, createNavigationContainerRef } from "@react-navigation/native";
import * as Screens from "../screens/index";


const Stack = createNativeStackNavigator();
const ModalStack = createNativeStackNavigator();

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const headerShownConfig = {
  headerShown: false,
  title: "",
  headerBackVisible: false,
  headerTitleAlign: "center",
}

const headerNotShownConfig = {
  headerShown: false,
  title: "",
  headerBackVisible: false,
  headerTitleAlign: "center",
}

export const navigationRef = createNavigationContainerRef();

export const navigate = (name: string, params: any) => {
  if (navigationRef.isReady()) {
    //@ts-ignore
    navigationRef.navigate(name, params)
  }
};

export const navigateAndReset = (routes = [], index = 0) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes,
      })
    );
  }
};

export const navigateAndSimpleReset = (name: string, index = 0) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes: [{ name }],
      })
    );
  }
};

//Main navigation Props Style
// type MainNavigationProps = PropsWithChildren<{
//   initialRouteName: string;
// }>;

export default class MainNavigation extends React.Component {
  // Constructor method
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  
  // Life Cycle Method
  componentDidMount() {}

  componentWillUnmount() {}

  // Render Method
  render() {
    // Stack Navigator: Use to push any screen to stack(animation style : card)
    const MainStackScreen = () => {
      return (
        <Stack.Navigator>
          <Stack.Screen
            name="OnboardScreen"
            component={Screens.OnBoarding}
            options={{
              headerShown: false,
              title: "",
              headerBackVisible: false,
              headerTitleAlign: "center",
            }}
          />

          {/* <Stack.Screen
            name="WelcomeScreen"
            component={Screens.WelcomeScreen}
            options={{
              title: "",
              headerTransparent: true,
              style: {
                textAlign: "center",
                headerTitleAlign: "center",
              },
            }}
          />

          <Stack.Screen
            name="SignInScreen"
            component={Screens.SignInScreen}
            options={{
              headerTransparent: true,
              headerTitleAlign: "center",
              title: "",
            }}
          />

          <Stack.Screen
            name="SignUpScreen"
            component={Screens.SignUpScreen}
            options={{
              headerTransparent: true,
              headerTitleAlign: "center",
              title: "",
            }}
          /> */}
        </Stack.Navigator>
      );
    };

    return (
      <View style={{ flex: 1 }}>
        <NavigationContainer ref={navigationRef}>
          <ModalStack.Navigator
            screenOptions={{
              presentation: "transparentModal",
              animation: "slide_from_bottom",
            }}
          >
            <ModalStack.Screen
              name="MainStackScreen"
              component={MainStackScreen}
              options={{
                headerShown: false,
              }}
            />
          </ModalStack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const style = StyleSheet.create({});
