import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-hazy",
  },
  Clear: {
    iconName: "weather-night",
  },
};

export default Weather = ({ temp }) => {
  return (
    <LinearGradient
      colors={["rgba(0,0,0,0.8)", "transparent"]}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfcontainer}>
        <MaterialCommunityIcons
          name={weatherOptions["Clear"].iconName}
          size={100}
          color="#E5E7EB"
        />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={styles.halfcontainer}></View>
    </LinearGradient>
  );
};

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    top: 0,
    height: 400,
  },
  temp: {
    fontSize: 42,
    color: "#E5E7EB",
  },
  halfcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
