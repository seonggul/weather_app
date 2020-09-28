import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default Loading = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="white-content" />
      <Text style={styles.text}>Getting the Awesome Weather</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#FDF6AA",
  },
  text: {
    color: "#2c2c2c",
    fontSize: 30,
  },
});