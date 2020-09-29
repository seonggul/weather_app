import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "폭풍이다",
    subtitle: "밖에 나가지마라 날라간다.",
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "이슬비",
    subtitle: "우산챙겨 나가라",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    title: "비",
    subtitle: "우산챙교라 비맞는다",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "눈",
    subtitle: "우산챙기고 넘어져라",
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "뭔지 몰겠다",
    subtitle: "알아서해",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "개조음",
    subtitle: "나가 놀아라라라라",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#304352", "#D7D2CC"],
    title: "구름",
    subtitle: "덥진않겠네",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "흐린날",
    subtitle: "흐리다아아아아앙",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "안개",
    subtitle: "운전조심해라아아",
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "먼지",
    subtitle: "마스크 착용해라라라아아",
  },
};

export default Weather = ({ temp, condition, name }) => {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfcontainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={100}
          color="#E5E7EB"
        />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={{ ...styles.halfcontainer, ...styles.textContainer }}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
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
  title: {
    color: "#E5E7EB",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "left",
  },
  subtitle: {
    fontWeight: "600",
    color: "#E5E7EB",
    fontSize: 24,
    textAlign: "left",
  },
  textContainer: {
    alignItems: "flex-start",
    paddingHorizontal: 40,
    justifyContent: "center",
    flex: 1,
  },
});
