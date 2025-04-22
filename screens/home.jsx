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

export default function HomeScreen({ navigation }) {
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
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Hello!</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Keep Working Hard!
          </Text>
        </View>
        <View style={globalStyles.header_settings}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Settings", { tasks: tasks })}
          >
            <Image style={globalStyles.icons} source={Settings} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={globalStyles.progress_bar}>
        <Text>You have {tasks.length} tasks remaining</Text>
      </View>

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
