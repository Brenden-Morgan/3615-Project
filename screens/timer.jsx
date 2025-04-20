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

import Calendar from "@/assets/images/calendar.png";
import Settings from "@/assets/images/settings.png";
import Home from "@/assets/images/home.png";
import Add from "@/assets/images/add.png";
import List from "@/assets/images/list.png";
import Timer from "@/assets/images/timer.png";

export default function TimerScreen({ navigation }) {
  let nextId = 0;

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

      <View style={globalStyles.calendar_view}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Task Added");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={globalStyles.centeredView}>
            <View style={globalStyles.modalView}>
              <Text style={globalStyles.modalText}>Enter Task: </Text>
              <TextInput
                style={globalStyles.input}
                placeholder="task name"
                onChangeText={(val) => setName(val)}
              />
              <TextInput
                style={globalStyles.input}
                placeholder="class(optional)"
                onChangeText={(val) => setClassName(val)}
              />
              <TextInput
                style={globalStyles.input}
                placeholder="description"
                onChangeText={(val) => setDesc(val)}
              />
              <TextInput
                style={globalStyles.input}
                placeholder="due date"
                onChangeText={(val) => setDate(val)}
              />
              <TextInput
                style={globalStyles.input}
                placeholder="time(optional)"
                onChangeText={(val) => setTime(val)}
              />
              <TextInput
                style={globalStyles.input}
                placeholder="set reminder"
              />

              <Pressable
                style={[globalStyles.button, globalStyles.buttonClose]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setTasks([
                    ...tasks,
                    {
                      id: nextId++,
                      name: name,
                      class: className,
                      description: desc,
                      dueDate: date,
                      time: time,
                    },
                  ]);
                }}
              >
                <Text style={globalStyles.textStyle}>Add Task</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>

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
