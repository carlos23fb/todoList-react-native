import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from "./components/Tasks";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> Tareas de Hoy</Text>

        <View style={styles.items}>
          <Task text={'Tarea 1'}/>

        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',

  },

  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items : {}


});
