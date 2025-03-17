import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";

//<a href="https://www.flaticon.com/free-icons/calendar" title="calendar icons">Calendar icons created by CreativeCons - Flaticon</a>
import Calendar from "@/assets/images/calendar.png";
//<a href="https://www.flaticon.com/free-icons/settings" title="settings icons">Settings icons created by Freepik - Flaticon</a>
import Settings from "@/assets/images/settings.png";
//<a href="https://www.flaticon.com/free-icons/home-button" title="home button icons">Home button icons created by Freepik - Flaticon</a>
import Home from "@/assets/images/home.png";
//<a href="https://www.flaticon.com/free-icons/plus" title="plus icons">Plus icons created by dmitri13 - Flaticon</a>
import Add from "@/assets/images/add.png";
//<a href="https://www.flaticon.com/free-icons/list" title="list icons">List icons created by Chanut - Flaticon</a>
import List from "@/assets/images/list.png";
//<a href="https://www.flaticon.com/free-icons/timer" title="timer icons">Timer icons created by Fahmi Yahya - Flaticon</a>
import Timer from "@/assets/images/timer.png";
//<a href="https://www.flaticon.com/free-icons/progress-bar" title="progress bar icons">Progress bar icons created by Vectors Tank - Flaticon</a>
import Progress from "@/assets/images/progress-bar.png";

const app = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_message}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Hello!</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Keep Working Hard!
          </Text>
        </View>
        <View style={styles.header_settings}>
          <TouchableOpacity onPress={() => Alert.alert("Settings Page")}>
            <Image style={styles.icons} source={Settings} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.progress_bar}>
        <Image style={{ width: 100, height: 100 }} source={Progress} />
      </View>

      <View style={styles.calendar_view}>
        <Text>10 Tasks Remaining</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => Alert.alert("Home Page")}>
          <Image style={styles.icons} source={Home} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Timer Page")}>
          <Image style={styles.icons} source={Timer} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Add Task Page")}>
          <Image style={styles.icons} source={Add} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("List Page")}>
          <Image style={styles.icons} source={List} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Calendar Page")}>
          <Image style={styles.icons} source={Calendar} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  icons: {
    width: 50,
    height: 50,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header_message: {
    flexDirection: "column",
    paddingLeft: 10,
  },
  header_settings: {
    paddingRight: 10,
  },

  progress_bar: {
    flex: 0.5,
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
  },

  calendar_view: {
    flex: 0.5,
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
  },

  footer: {
    flex: 0.2,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-end",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "lightgreen",
  },
});
