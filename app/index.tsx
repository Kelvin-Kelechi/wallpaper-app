import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { wp, hp } from "../helpers/common";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";
import { theme } from "../constants/theme";
import { useRouter } from "expo-router";

const WelcomeScreen = () => {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image
        source={require("../assets/images/welcome.png")}
        style={styles.bgImage}
        resizeMode="cover"
      />
      <Animated.View entering={FadeInDown.duration(600)} style={{ flex: 1 }}>
        <LinearGradient
          colors={[
            "rgba(255,255,255,0)",
            "rgba(255,255,255,0.5)",
            "white",
            "white",
          ]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
        />
        <View style={styles.contenContainer}>
          <Animated.Text
            entering={FadeInDown.delay(400).springify()}
            style={styles.title}
          >
            Pixels
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.delay(500).springify()}
            style={styles.punchline}
          >
            Every Pixel Tells a Story
          </Animated.Text>
          <Animated.View entering={FadeInDown.delay(600).springify()}>
            <Pressable onPress={()=> router.push('home')}  style={styles.startButton}>
              <Text style={styles.startText}>Start Exploring</Text>
            </Pressable>
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: { width: wp(100), height: hp(100), position: "absolute" },
  gradient: {
    width: wp(100),
    height: hp(65),
    position: "absolute",
    bottom: 0,
  },
  contenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 14,
  },
  title: {
    fontWeight: theme.fonts.bold,
    color: theme.colors.neutral(0.9),
    fontSize: hp(7),
  },
  punchline: {
    fontWeight: theme.fonts.medium,
    color: theme.colors.neutral(0.9),
    fontSize: hp(2),
    marginBottom: 10,
  },
  startButton: {
    backgroundColor: theme.colors.neutral(0.9),
    marginBottom: 50,
    borderCurve: "continuous",
    padding: 15,
    paddingHorizontal: 90,
    borderRadius: theme.radius.xl,
  },
  startText: {
    fontWeight: theme.fonts.bold,
    color: theme.colors.white,
    fontSize: hp(2.5),
    letterSpacing:1
  },
});