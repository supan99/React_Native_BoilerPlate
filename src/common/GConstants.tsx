import { Alert, Dimensions, Platform, Text, View } from "react-native";
import { checkMultiple, openSettings, PERMISSIONS, requestMultiple, RESULTS } from "react-native-permissions";

//Global function for width and height related.
export function getWidth(size: number) {
  return (size / 390) * screenSize.width;
}

export function getHeight(size: number) {
  return (size / 844) * screenSize.height;
}

// Global size
export const screenSize = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width,
};

// Font family used in app

export const fontFamily = {
  bold: "Inter-Black",
  interBold: "Inter-Bold",
  extraBold: "Inter-ExtraBold",
  extraLight: "Inter-ExtraLight",
  light: "Inter-Light",
  medium: "Inter-Medium",
  regular: "Inter-Regular",
  semibold: "Inter-SemiBold",
  thin: "Inter-Thin",
  libreBaskervilleBoldItalic: "LibreBaskerville-Bold",
  libreBaskervilleItalic: "LibreBaskerville-Italic",
  libreBaskerville: "LibreBaskerville-Regular",
};

// Font Size
export const fontSize = (value: number) => {
  return getWidth(value)
}

// App Name
export const appName = "MyApp";
export const currency = "$";

// Touchable opacity alpha
export const opacity = 0.6;

// Constants for keyboardType
export const keyboard_type = {
  email: "email-address",
  ascii_capable_numberpad: "ascii-capable-number-pad",
  ascii_capable: "ascii-capable",
};

// Validatio messages

export const messages = {
  enterEmail: "Please enter email",
};

// Error Function
export function showError(message: string) {
  Alert.alert(appName, message, [{ text: "Ok" }]);
}

// Permissions
export const cameraPermission = Platform.select({
  ios: PERMISSIONS.IOS.CAMERA,
  android: PERMISSIONS.ANDROID.CAMERA,
});

export const galleryPermission = Platform.select({
  ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
  android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
});

// Permission popup
export function checkPermission(permission: any, message: string) {
  return new Promise((callback) => {
    checkMultiple([permission]).then((status) => {
      if (
        status[permission] == RESULTS.DENIED ||
        status[permission] == RESULTS.UNAVAILABLE
      ) {
        requestMultiple([permission]).then((status) => {
          let data = Object.values(status);
          if (data.length > 0) {
            callback(data[0] == "granted");
          } else {
            callback(false);
          }
        });
        callback(false);
      } else if (status[permission] == RESULTS.BLOCKED) {
        if (Platform.OS == "ios") {
          Alert.alert(
            appName,
            message,
            [
              {
                text: "Don't Allow",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              { text: "Allow", onPress: () => openSettings() },
            ],
            { cancelable: false }
          );
        } else {
          Alert.alert(
            appName,
            message,
            [
              {
                text: "Don't Allow",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              { text: "Allow", onPress: () => openSettings() },
            ],
            { cancelable: false }
          );
        }
        callback(false);
      } else {
        console.log("Permission printe here: ", status[permission]);
        callback(true);
      }
    });
  });
}

// Take permission from user
export function showAlert(message: string) {
  return new Promise((callback) => {
    Alert.alert(
      appName,
      message,
      [
        {
          text: "No",
          onPress: () => console.log("cancel"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => callback(true),
        },
      ],
      { cancelable: false }
    );
  });
}


