import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
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
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("20");
  const [seconds, setSeconds] = useState("00");
  const [isRunning, setIsRunning] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [notes, setNotes] = useState("");
  const intervalRef = useRef(null);

  const formatTime = (n) => n.toString().padStart(2, "0");

  const startTimer = () => {
    if (isRunning) return;
    setIsRunning(true);

    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => {
        let s = parseInt(prevSeconds, 10);
        let m = parseInt(minutes, 10);
        let h = parseInt(hours, 10);

        if (s === 0 && m === 0 && h === 0) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setIsRunning(false);
          return "00";
        }

        if (s === 0) {
          s = 59;
          if (m === 0) {
            m = 59;
            h = h - 1;
            setHours(formatTime(h));
          } else {
            m = m - 1;
          }
          setMinutes(formatTime(m));
        } else {
          s = s - 1;
        }

        return formatTime(s);
      });
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    stopTimer();
    setHours("00");
    setMinutes("20");
    setSeconds("00");
  };

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
    <View style={styles.container}>
      <View style={globalStyles.mainContent}>
        <Text style={styles.title}>Set Your Timer</Text>

        <View style={styles.inputRow}>
          <TextInput
            style={styles.timeInput}
            keyboardType="numeric"
            maxLength={2}
            value={hours}
            onChangeText={setHours}
          />
          <Text style={styles.colon}>:</Text>
          <TextInput
            style={styles.timeInput}
            keyboardType="numeric"
            maxLength={2}
            value={minutes}
            onChangeText={setMinutes}
          />
          <Text style={styles.colon}>:</Text>
          <TextInput
            style={styles.timeInput}
            keyboardType="numeric"
            maxLength={2}
            value={seconds}
            onChangeText={setSeconds}
          />
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={startTimer} style={styles.button}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={stopTimer} style={styles.button}>
            <Text style={styles.buttonText}>Stop</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={resetTimer} style={styles.button}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Task Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="e.g. Homework 1"
          value={taskName}
          onChangeText={setTaskName}
        />

        <Text style={styles.label}>Notes</Text>
        <TextInput
          style={[styles.textInput, { height: 100 }]}
          placeholder="Write notes here..."
          multiline
          value={notes}
          onChangeText={setNotes}
        />
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

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f0f4f8" },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  timeInput: {
    borderWidth: 1,
    borderColor: "#aaa",
    width: 60,
    height: 60,
    fontSize: 28,
    textAlign: "center",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  colon: { fontSize: 30, marginHorizontal: 10, alignSelf: "center" },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#2E7D32",
    padding: 12,
    borderRadius: 10,
    minWidth: 80,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
  label: { fontSize: 16, fontWeight: "600", marginBottom: 6 },
  textInput: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
});
