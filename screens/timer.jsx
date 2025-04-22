import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  Modal,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { globalStyles } from "@/styles/global";
import Icon from "react-native-vector-icons/Ionicons";

import Settings from "@/assets/images/settings.png";

export default function TimerScreen({ navigation }) {
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

  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [desc, setDesc] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const pressHandler = (key) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((tasks) => tasks.key != key);
    });
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <View style={globalStyles.header_message}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Timer</Text>
        </View>
        <View style={globalStyles.header_settings}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Settings", { tasks: tasks })}
          >
            <Image style={globalStyles.icons} source={Settings} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={globalStyles.progress_bar}></View>

      <View style={globalStyles.calendar_view}></View>

      <View style={globalStyles.footer}>
        {[
          { icon: "home", screen: "Home" },
          { icon: "time", screen: "Timer" },
          { icon: "add-circle", screen: "AddTask" },
          { icon: "menu", screen: "ViewTasks" },
          { icon: "calendar", screen: "Calendar" },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(item.screen, { tasks: tasks })}
          >
            <Icon name={item.icon + "-outline"} size={50} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
