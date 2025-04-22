import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
// import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from "react-native-vector-icons/Ionicons";
import { globalStyles } from "@/styles/global";

export default function AddTaskScreen({ navigation }) {
  const [course, setCourse] = useState("Course #");
  const [taskName, setTaskName] = useState("");
  const [notes, setNotes] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showDuePicker, setShowDuePicker] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainContent}>
        <Text style={styles.title}>ADD NEW TASK</Text>

        <View style={styles.card}>
          //
          <Icon name="school-outline" size={20} />
          <Text style={styles.courseText}>{course}</Text>
        </View>

        <TextInput
          placeholder="Task Name"
          style={styles.input}
          value={taskName}
          onChangeText={setTaskName}
        />

        <TextInput
          placeholder="Additional notes / information about task."
          style={[styles.input, styles.notes]}
          multiline
          value={notes}
          onChangeText={setNotes}
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
        {/* {showStartPicker && (
        <DateTimePicker
          value={startDate}
          mode="date"
          display="default"
          onChange={(_, date) => {
            setShowStartPicker(false);
            if (date) setStartDate(date);
          }}
        />
      )} */}

        <TouchableOpacity
          onPress={() => setShowDuePicker(true)}
          style={styles.dateBox}
        >
          <Icon name="calendar-outline" size={20} />
          <Text style={styles.dateText}>
            Due Date: {dueDate.toDateString()}
          </Text>
        </TouchableOpacity>
        {/* {showDuePicker && (
        <DateTimePicker
          value={dueDate}
          mode="date"
          display="default"
          onChange={(_, date) => {
            setShowDuePicker(false);
            if (date) setDueDate(date);
          }}
        />
      )} */}

        <TouchableOpacity style={styles.addButton}>
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
            onPress={() => navigation.navigate(item.screen)}
          >
            <Icon name={item.icon + "-outline"} size={50} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
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
    fontSize: 18,
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

//export default AddTaskScreen;
