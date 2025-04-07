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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//<a href="https://www.flaticon.com/free-icons/calendar" title="calendar icons">Calendar icons created by CreativeCons - Flaticon</a>
import Calendar from "@/assets/images/calendar.png";
//<a href="https://www.flaticon.com/free-icons/settings" title="settings icons">Settings icons created by Freepik - Flaticon</a>
import Settings from "@/assets/images/settings.png";
//<a href="https://www.flaticon.com/free-icons/home-button" title="home button icons">Home button icons created by Freepik - Flaticon</a>
import Home from "@/assets/images/home.png";
//<a href="https://www.flaticon.com/free-icons/plus" title="plus icons">Plus icorns created by dmitri13 - Flaticon</a>
import Add from "@/assets/images/add.png";
//<a href="https://www.flaticon.com/free-icons/list" title="list icons">List icons created by Chanut - Flaticon</a>
import List from "@/assets/images/list.png";
//<a href="https://www.flaticon.com/free-icons/timer" title="timer icons">Timer icons created by Fahmi Yahya - Flaticon</a>
import Timer from "@/assets/images/timer.png";
//<a href="https://www.flaticon.com/free-icons/progress-bar" title="progress bar icons">Progress bar icons created by Vectors Tank - Flaticon</a>
import Progress from "@/assets/images/progress-bar.png";

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_message}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Hello!</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Keep Working Hard!
          </Text>
        </View>
        <View style={styles.header_settings}>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
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
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image style={styles.icons} source={Home} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Timer")}>
          <Image style={styles.icons} source={Timer} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AddTask")}>
          <Image style={styles.icons} source={Add} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ViewTasks")}>
          <Image style={styles.icons} source={List} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
          <Image style={styles.icons} source={Calendar} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const TimerScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_message}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Timer</Text>
        </View>
        <View style={styles.header_settings}>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Image style={styles.icons} source={Settings} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.progress_bar}></View>

      <View style={styles.calendar_view}></View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image style={styles.icons} source={Home} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Timer")}>
          <Image style={styles.icons} source={Timer} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AddTask")}>
          <Image style={styles.icons} source={Add} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ViewTasks")}>
          <Image style={styles.icons} source={List} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
          <Image style={styles.icons} source={Calendar} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const AddTaskScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_message}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Add Task</Text>
        </View>
        <View style={styles.header_settings}>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Image style={styles.icons} source={Settings} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.progress_bar}></View>

      <View style={styles.calendar_view}></View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image style={styles.icons} source={Home} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Timer")}>
          <Image style={styles.icons} source={Timer} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AddTask")}>
          <Image style={styles.icons} source={Add} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ViewTasks")}>
          <Image style={styles.icons} source={List} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
          <Image style={styles.icons} source={Calendar} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ViewTasksScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_message}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>View Tasks</Text>
        </View>
        <View style={styles.header_settings}>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Image style={styles.icons} source={Settings} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.progress_bar}></View>

      <View style={styles.calendar_view}></View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image style={styles.icons} source={Home} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Timer")}>
          <Image style={styles.icons} source={Timer} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AddTask")}>
          <Image style={styles.icons} source={Add} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ViewTasks")}>
          <Image style={styles.icons} source={List} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
          <Image style={styles.icons} source={Calendar} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CalendarScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_message}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Calendar</Text>
        </View>
        <View style={styles.header_settings}>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Image style={styles.icons} source={Settings} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.progress_bar}></View>

      <View style={styles.calendar_view}></View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image style={styles.icons} source={Home} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Timer")}>
          <Image style={styles.icons} source={Timer} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AddTask")}>
          <Image style={styles.icons} source={Add} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ViewTasks")}>
          <Image style={styles.icons} source={List} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
          <Image style={styles.icons} source={Calendar} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_message}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Settings</Text>
        </View>
      </View>

      <View style={styles.progress_bar}></View>

      <View style={styles.calendar_view}></View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image style={styles.icons} source={Home} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Timer")}>
          <Image style={styles.icons} source={Timer} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AddTask")}>
          <Image style={styles.icons} source={Add} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ViewTasks")}>
          <Image style={styles.icons} source={List} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
          <Image style={styles.icons} source={Calendar} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

function app() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Timer" component={TimerScreen} />
      <Stack.Screen name="AddTask" component={AddTaskScreen} />
      <Stack.Screen name="ViewTasks" component={ViewTasksScreen} />
      <Stack.Screen name="Calendar" component={CalendarScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

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
