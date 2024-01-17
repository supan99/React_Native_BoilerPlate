import { ImageBackground, View, SafeAreaView, TouchableOpacity, Text } from "react-native";

import { images } from "assets/images";
import i18n from "assets/localizestring/Localize";
import styles from "./style";

function OnBoarding({props, navigation }: any) {

  const handleNavigation = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={images.onboarding} style={styles.backGroundImage}>
        <SafeAreaView style={styles.safeAreaContainer}>
          {/* Text Related View */}
          <View style={styles.titleView}>
            <Text style={styles.txtTitle}>
              {i18n.t("title")}
            </Text>

            <Text style={styles.txtSubTitle}>
              {i18n.t("onboardTitle")}
            </Text>
          </View>

          {/* Button Get started View */}
          <TouchableOpacity
            style={styles.buttonContainer}
            activeOpacity={0.6}
            onPress={() => handleNavigation()}
          >
            <Text style={styles.buttonTitle}>
              {i18n.t("getStarted")}
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

export default OnBoarding;