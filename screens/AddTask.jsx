import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { globalStyles } from "@/styles/global";

import Settings from "@/assets/images/settings.png";

let nextId = 0;

export default function AddTaskScreen({ navigation }) {
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

  const [className, setClassName] = useState("Course #");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showDuePicker, setShowDuePicker] = useState(false);

  return (
    <View style={styles.container}>
      <View style={globalStyles.header}>
        <Text style={styles.title}>Add New Task</Text>
        <View style={globalStyles.header_settings}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Settings", { tasks: tasks })}
          >
            <Image style={globalStyles.icons} source={Settings} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.mainContent}>
        <TextInput
          placeholder="Course #"
          style={[styles.input]}
          multiline
          onChangeText={(val) => setClassName(val)}
        />

        <TextInput
          placeholder="Task Name"
          style={[styles.input]}
          multiline
          onChangeText={(val) => setName(val)}
        />

        <TextInput
          placeholder="Additional notes / information about task."
          style={[styles.input, styles.notes]}
          multiline
          onChangeText={(val) => setDesc(val)}
        />

        <TouchableOpacity
          onPress={() => setShowStartPicker(true)}
          style={styles.dateBox}
        >
          <Icon name="calendar-outline" size={20} />
          <Text style={styles.dateText}>
            Start Date: {startDate.toDateString()}
          </Text>
        </TouchableOpacity>
        {showStartPicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display="default"
            onChange={(_, date) => {
              setShowStartPicker(false);
              if (date) setStartDate(date);
            }}
          />
        )}

        <TouchableOpacity
          onPress={() => setShowDuePicker(true)}
          style={styles.dateBox}
        >
          <Icon name="calendar-outline" size={20} />
          <Text style={styles.dateText}>
            Due Date: {dueDate.toDateString()}
          </Text>
        </TouchableOpacity>
        {showDuePicker && (
          <DateTimePicker
            value={dueDate}
            mode="date"
            display="default"
            onChange={(_, date) => {
              setShowDuePicker(false);
              if (date) setDueDate(date);
            }}
          />
        )}

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            setTasks([
              ...tasks,
              {
                id: nextId++,
                name: name,
                class: className,
                description: desc,
              },
            ]);
          }}
        >
          <Text style={styles.addButtonText}>Add Task</Text>
        </TouchableOpacity>
      </View>
      {/* Bottom navigation*/}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    height: 100,
  },
  mainContent: {
    flexGrow: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },
  card: {
    backgroundColor: "#f5f5f5",
    padding: 12,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  courseText: { marginLeft: 10, fontWeight: "600" },
  input: {
    backgroundColor: "#f5f5f5",
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
  },
  notes: { height: 100, textAlignVertical: "top" },
  dateBox: {
    backgroundColor: "#f5f5f5",
    padding: 12,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  dateText: { marginLeft: 10 },
  addButton: {
    backgroundColor: "#2E7D32",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginVertical: 20,
  },
  addButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
});
