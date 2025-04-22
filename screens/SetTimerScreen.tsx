import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { globalStyles } from "@/styles/global";
import { useNavigation } from "@react-navigation/native";

export default function TimerScreen({}) {
  const navigation = useNavigation();
  const [time, setTime] = useState(new Date(0, 0, 0, 20, 0)); // Default 20:00
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (_: any, selectedTime?: Date) => {
    setShowPicker(false);
    if (selectedTime) setTime(selectedTime);
  };

  // let nextId = 0;

  // const route = useRoute();
  // const receivedArray = route.params?.tasks || [];
  // const [tasks, setTasks] = useState([]);

  // const handleSetTasks = () => {
  //   setTasks([...receivedArray]);
  // };

  // useEffect(() => {
  //   const onScreenLoad = () => {
  //     handleSetTasks();
  //   };
  //   onScreenLoad();
  // }, []);

  // const [name, setName] = useState("");
  // const [className, setClassName] = useState("");
  // const [date, setDate] = useState("");
  // const [time, setTime] = useState("");
  // const [desc, setDesc] = useState("");
  // const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="chevron-back-outline" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>SET TIMER</Text>
        <TouchableOpacity>
          <Icon name="help-circle-outline" size={24} />
        </TouchableOpacity>
      </View>

      {/* Timer Picker Box */}
      <View style={styles.timerBox}>
        <Text style={styles.enterTime}>Enter Time</Text>

        <TouchableOpacity
          onPress={() => setShowPicker(true)}
          style={styles.timeDisplay}
        >
          <Text style={styles.timeText}>
            {time.getHours().toString().padStart(2, "0")} :{" "}
            {time.getMinutes().toString().padStart(2, "0")}
          </Text>
        </TouchableOpacity>

        <View style={styles.timerActions}>
          <Icon name="time-outline" size={22} />
          <View style={styles.timerButtons}>
            <TouchableOpacity onPress={() => setShowPicker(false)}>
              <Text style={styles.cancel}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.ok}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* DateTimePicker */}
      {showPicker && (
        <DateTimePicker
          value={time}
          mode="time"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          is24Hour={true}
          onChange={onChange}
        />
      )}

      {/* Task Info */}
      <View style={styles.taskInfo}>
        <Text style={styles.label}>Task Name</Text>
        <Text style={styles.value}>Homework 1</Text>

        <Text style={[styles.label, { marginTop: 16 }]}>Notes</Text>
        <View style={styles.notesBox}>
          <Text>Additional notes / information about task.</Text>
        </View>
      </View>

      {/* Bottom Nav */}
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
            onPress={() => navigation.navigate(item.screen)}
          >
            <Icon name={item.icon + "-outline"} size={50} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: { fontWeight: "bold", fontSize: 16 },
  timerBox: {
    backgroundColor: "#e5eee2",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  enterTime: { fontSize: 16, marginBottom: 12 },
  timeDisplay: {
    backgroundColor: "#d3eacb",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
  },
  timeText: { fontSize: 30, fontWeight: "600", letterSpacing: 1 },
  timerActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  timerButtons: { flexDirection: "row", gap: 20 },
  cancel: { color: "#777" },
  ok: { color: "#2E7D32", fontWeight: "bold" },
  taskInfo: { marginTop: 30 },
  label: { fontWeight: "600", marginBottom: 4 },
  value: { fontSize: 16, color: "#333" },
  notesBox: {
    backgroundColor: "#f5f5f5",
    padding: 12,
    borderRadius: 12,
    marginTop: 4,
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: "#ddd",
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
  },
});
