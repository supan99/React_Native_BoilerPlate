import { asyncStorageKeys, storeAsyncData } from "$utils/index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonActions } from "@react-navigation/native";
import { Platform } from "react-native";

let loaderRef: { toggleLoader: (arg0: any) => void; } | undefined = undefined

// Back function
export const back = (navigation: any) => {
  navigation.goBack();
};

export const logoutUser = (navigation: any) => {
  if (Platform.OS === "ios") {
    AsyncStorage.getAllKeys()
      .then((keys) => AsyncStorage.multiRemove(keys))
      .then(() =>
        navigation.dispatch(
          CommonActions.reset(
            {
              index: 1,
              routes: [{ name: "WelcomeScreen" }],
            },
            //@ts-ignore
            storeAsyncData(asyncStorageKeys.isUserFirstTime, "true")
          )
        )
      );
  } else if (Platform.OS === "android") {
    AsyncStorage.clear().then(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "WelcomeScreen" }],
        })
      );
      //@ts-ignore
      storeAsyncData({key: asyncStorageKeys.isUserFirstTime});
    });
  }
};

export const setLoaderRef = (ref: any) => {
  loaderRef = ref;
};

export const toggleLoader = (showLoader: any) => {
  if (loaderRef) {
    loaderRef.toggleLoader(showLoader);
  }
};
