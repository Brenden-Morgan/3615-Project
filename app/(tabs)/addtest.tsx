import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Notifications from 'expo-notifications'; // Import Notifications

// Import your assets
import Calendar from "@/assets/images/calendar.png";
import Settings from "@/assets/images/settings.png";
import Home from "@/assets/images/home.png";
import Add from "@/assets/images/add.png";
import List from "@/assets/images/list.png";
import Timer from "@/assets/images/timer.png";
import Progress from "@/assets/images/progress-bar.png";

const Stack = createNativeStackNavigator();

const App = () => {
  const [tasks, setTasks] = useState([]); // State to store tasks

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Timer" component={TimerScreen} />
        <Stack.Screen name="AddTask">
          {(props) => <AddTaskScreen {...props} addTask={addTask} />}
        </Stack.Screen>
        <Stack.Screen name="ViewTasks">
          {(props) => <ViewTasksScreen {...props} tasks={tasks} />}
        </Stack.Screen>
        <Stack.Screen name="CalendarView">
          {(props) => <CalendarViewScreen {...props} tasks={tasks} />}
        </Stack.Screen>
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

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
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");

  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== 'granted') {
        await Notifications.requestPermissionsAsync();
      }
    };

    requestPermissions();
  }, []);

  const scheduleNotification = async () => {
    const schedulingOptions = {
      content: {
        title: "Task Reminder",
        body: `Don't forget: ${taskName}`,
      },
      trigger: {
        date: new Date(taskDate), // Convert to Date object
      },
    };

    await Notifications.scheduleNotificationAsync(schedulingOptions);
    addTask({ name: taskName, date: taskDate });
    Alert.alert("Notification Scheduled", `Task "${taskName}" is scheduled!`);
    navigation.navigate("ViewTasks"); // Navigate to ViewTasks after scheduling
  };

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

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Task Name"
          value={taskName}
          onChangeText={setTaskName}
        />
        <TextInput
          style={styles.input}
          placeholder="Date/Time (YYYY-MM-DDTHH:MM)"
          value={taskDate}
          onChangeText={setTaskDate}
        />
        <Button title="Add Task" onPress={scheduleNotification} />
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

      <View style={styles.progress_bar}>{tasks.length === 0 ? (
          <Text>No tasks available</Text>
        ) : (
          tasks.map((task, index) => (
            <View key={index} style={styles.taskItem}>
              <Text style={styles.taskTitle}>{task.name}</Text>
              <Text style={styles.taskDate}>{task.date}</Text>
            </View>
          ))
        )}
      </View>

      // <View style={styles.calendar_view}></View>
 
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

const CalendarViewScreen = ({ navigation, tasks }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_message}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Calendar View</Text>
        </View>
        <View style={styles.header_settings}>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Image style={styles.icons} source={Settings} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.progress_bar}>
        {tasks.length === 0 ? (
          <Text>No tasks available</Text>
        ) : (
          tasks.map((task, index) => (
            <View key={index} style={styles.taskItem}>
              <Text style={styles.taskTitle}>{task.name}</Text>
              <Text style={styles.taskDate}>{task.date}</Text>
            </View>
          ))
        )}
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
        <TouchableOpacity onPress={() => navigation.navigate("CalendarView")}>
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

function App() {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}

//export default App;

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
    padding: 10,
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
  inputContainer: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  taskItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  taskDate: {
    fontSize: 14,
    color: "gray",
  },
});

export default App;
