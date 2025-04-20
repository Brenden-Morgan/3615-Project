import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/screens/home";
import TimerScreen from "@/screens/timer";
import ViewTasksScreen from "@/screens/viewTasks";
import CalendarScreen from "@/screens/calendar";
import SettingsScreen from "@/screens/settings";

function app() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Timer" component={TimerScreen} />
      <Stack.Screen name="ViewTasks" component={ViewTasksScreen} />
      <Stack.Screen name="Calendar" component={CalendarScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default app;

//<a href="https://www.flaticon.com/free-icons/calendar" title="calendar icons">Calendar icons created by CreativeCons - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/settings" title="settings icons">Settings icons created by Freepik - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/home-button" title="home button icons">Home button icons created by Freepik - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/plus" title="plus icons">Plus icorns created by dmitri13 - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/list" title="list icons">List icons created by Chanut - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/timer" title="timer icons">Timer icons created by Fahmi Yahya - Flaticon</a>
