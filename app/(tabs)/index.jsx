import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/screens/home";
import TimerScreen from "@/screens/timer";
import ViewTasksScreen from "@/screens/viewTasks";
import CalendarScreen from "@/screens/calendar";
import SettingsScreen from "@/screens/settings";
import AddTaskScreen from "@/screens/AddTask";
import SetTimerScreen from "@/screens/SetTimerScreen";

function app() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Timer" component={SetTimerScreen} />
      <Stack.Screen name="AddTask" component={AddTaskScreen} />
      <Stack.Screen name="ViewTasks" component={ViewTasksScreen} />
      <Stack.Screen name="Calendar" component={CalendarScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default app;

//<a href="https://www.flaticon.com/free-icons/settings" title="settings icons">Settings icons created by Freepik - Flaticon</a>
