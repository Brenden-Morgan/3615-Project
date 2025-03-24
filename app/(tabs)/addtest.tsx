import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Alert,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

import Calendar from "@/assets/images/calendar.png";
import Settings from "@/assets/images/settings.png";
import Home from "@/assets/images/home.png";
import Add from "@/assets/images/add.png";
import List from "@/assets/images/list.png";
import Timer from "@/assets/images/timer.png";
import Progress from "@/assets/images/progress-bar.png";

const App = () => {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState("");

  const addReminder = () => {
    if (newReminder.trim()) {
      setReminders([...reminders, newReminder]);
      setNewReminder("");
    } else {
      Alert.alert("Please enter a reminder.");
    }
  };

  const editReminder = (index) => {
    const updatedReminder = prompt("Edit your reminder:", reminders[index]);
    if (updatedReminder) {
      const updatedReminders = reminders.map((reminder, i) =>
        i === index ? updatedReminder : reminder
      );
      setReminders(updatedReminders);
    }
  };

  const deleteReminder = (index) => {
    const updatedReminders = reminders.filter((_, i) => i !== index);
    setReminders(updatedReminders);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_message}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Hello!</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Keep Working Hard!
          </Text>
        </View>
        <View style={styles.header_settings}>
          <TouchableOpacity onPress={() => Alert.alert("Settings Page")}>
            <Image style={styles.icons} source={Settings} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.progress_bar}>
        <Image style={{ width: 100, height: 100 }} source={Progress} />
      </View>

      <View style={styles.calendar_view}>
        <Text>10 Tasks Remaining</Text>
      </View>

      {/* Add Reminder Input */}
      <View style={styles.reminder_input}>
        <TextInput
          style={styles.input}
          placeholder="Add a new reminder"
          value={newReminder}
          onChangeText={setNewReminder}
        />
        <TouchableOpacity onPress={addReminder}>
          <Image style={styles.icons} source={Add} />
        </TouchableOpacity>
      </View>

      {/* Reminder List */}
      <View style={styles.reminder_list}>
        <Text style={styles.list_title}>Your Reminders:</Text>
        {reminders.length > 0 ? (
          reminders.map((reminder, index) => (
            <View key={index} style={styles.reminder_item}>
              <Text>{reminder}</Text>
              <TouchableOpacity onPress={() => editReminder(index)}>
                <Text style={styles.edit_delete}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteReminder(index)}>
                <Text style={styles.edit_delete}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text>No reminders added yet.</Text>
        )}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => Alert.alert("Home Page")}>
          <Image style={styles.icons} source={Home} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Timer Page")}>
          <Image style={styles.icons} source={Timer} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Add Task Page")}>
          <Image style={styles.icons} source={Add} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("List Page")}>
          <Image style={styles.icons} source={List} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Calendar Page")}>
          <Image style={styles.icons} source={Calendar} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  icons: {
    width: 50,
    height: 50,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  
  header_message: {
    flexDirection: "column",
    paddingLeft: 10,
  },
  
  header_settings: {
    paddingRight: 10,
  },

  progress_bar: {
    flex: 0.5,
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
  },

  calendar_view: {
    flex: 0.5,
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
  },

  reminder_input: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },

  reminder_list: {
    padding: 10,
  },

  list_title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  reminder_item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },

  edit_delete: {
    color: "blue",
    marginLeft: 10,
  },

  footer: {
    flex: 0.2,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-end",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "lightgreen",
  },
});
