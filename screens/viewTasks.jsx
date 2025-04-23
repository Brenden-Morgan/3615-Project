import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  Modal,
  Pressable,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { globalStyles } from "@/styles/global";
import Icon from "react-native-vector-icons/Ionicons";

import Settings from "@/assets/images/settings.png";

export default function ViewTasksScreen({ navigation }) {
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
  const [id, setId] = useState("");
  const [className, setClassName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [desc, setDesc] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const [editModalVisible, setEditModalVisible] = useState(false);
  const editScreen = (name, id, className, desc) => {
    setEditModalVisible(true);
    setName(name);
    setId(id);
    setClassName(className);
    setDesc(desc);
  };

  const pressHandler = (key) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((tasks) => tasks.id != key);
    });
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <View style={globalStyles.header_message}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>View Tasks</Text>
        </View>
        <View style={globalStyles.header_settings}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Settings", { tasks: tasks })}
          >
            <Image style={globalStyles.icons} source={Settings} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={globalStyles.mainContent}>
        {tasks.length < 1 ? (
          <Text>No Tasks Available</Text>
        ) : (
          <FlatList
            keyExtractor={(item) => item.id}
            data={tasks}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  editScreen(item.name, item.id, item.className, item.desc)
                }
              >
                <Text style={styles.item}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        )}
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={editModalVisible}
        onRequestClose={() => {
          setEditModalVisible(!editModalVisible);
        }}
      >
        <View style={globalStyles.centeredView}>
          <View style={globalStyles.modalView}>
            <Text style={globalStyles.modalText}>Task Info</Text>
            <Text style={globalStyles.modalText}>Name: {name}</Text>
            <Text style={globalStyles.modalText}>Class: {className}</Text>
            <Text style={globalStyles.modalText}>Description: {desc}</Text>

            <Pressable
              style={[globalStyles.button, globalStyles.buttonClose]}
              onPress={() => {
                pressHandler(id);
                setEditModalVisible(!editModalVisible);
              }}
            >
              <Text style={globalStyles.textStyle}>Delete Task</Text>
            </Pressable>
            <Pressable
              style={[globalStyles.button, globalStyles.buttonClose]}
              onPress={() => {
                setEditModalVisible(!editModalVisible);
              }}
            >
              <Text style={globalStyles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
