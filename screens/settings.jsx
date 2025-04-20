import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { globalStyles } from "@/styles/global";

import Calendar from "@/assets/images/calendar.png";
import Home from "@/assets/images/home.png";
import Add from "@/assets/images/add.png";
import List from "@/assets/images/list.png";
import Timer from "@/assets/images/timer.png";

export default function SettingsScreen({ navigation }) {
  const route = useRoute();
  const receivedArray = route.params?.tasks || [];
  const [tasks, setTasks] = useState([]);

  const handleSetTasks = () => {
    setTasks([...receivedArray]);
  };

  useEffect(() => {
    const onScreenLoad = () => {
      handleSetTasks();
    };
    onScreenLoad();
  }, []);

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <View style={globalStyles.header_message}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Settings</Text>
        </View>
      </View>

      <View style={globalStyles.progress_bar}></View>

      <View style={globalStyles.calendar_view}></View>

      <View style={globalStyles.footer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home", { tasks: tasks })}
        >
          <Image style={globalStyles.icons} source={Home} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Timer", { tasks: tasks })}
        >
          <Image style={globalStyles.icons} source={Timer} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image style={globalStyles.icons} source={Add} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("ViewTasks", { tasks: tasks })}
        >
          <Image style={globalStyles.icons} source={List} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Calendar", { tasks: tasks })}
        >
          <Image style={globalStyles.icons} source={Calendar} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
