import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Button, Alert } from "react-native";

const app = () => {
  const handlePress = () => {
    Alert.alert("Button Pressed!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <SafeAreaView style={styles.bottomMenu}>
        <Button title="Calendar" onPress={handlePress} />
        <Button title="Timer" onPress={handlePress} />
        <Button title="New Task" onPress={handlePress} />
        <Button title="Groups" onPress={handlePress} />
        <Button title="Settings" onPress={handlePress} />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 10,
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  bottomMenu: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  text: {
    color: "black",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
});
