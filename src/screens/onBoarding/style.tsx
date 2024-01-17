import { color } from "common/GColor";
import { fontFamily, fontSize, getHeight } from "common/GConstants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {flex:1, backgroundColor: color.white},
    safeAreaContainer: {
      marginHorizontal: 20,
      flex: 1,
      justifyContent: "flex-end",
      bottom: 34,
    },
    backGroundImage: {
      height: "100%",
      width: "100%"
    },
    titleView: {
      marginHorizontal: 16,
      marginBottom: 32,
      gap: 12,
    },
    buttonTitle: {
      fontFamily: fontFamily.medium,
      fontWeight: "500",
      fontSize: fontSize(16),
      color: color.brown
    }, 
    buttonContainer: {
      paddingVertical: getHeight(12),
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: color.white,
      borderRadius: getHeight(4),
    },
    txtSubTitle: { 
      fontFamily: fontFamily.medium,
      fontWeight: "500",
      fontSize: fontSize(18),
      color: color.white,
      lineHeight: getHeight(24)
    },
    txtTitle: {
      fontFamily: fontFamily.libreBaskerville,
      fontWeight: "700",
      fontSize: fontSize(32),
      color: color.white,
    }
  });


  export default styles;