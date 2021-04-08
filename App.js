import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList } from 'react-native';

export default function App() {

const [enteredGoal, setEnteredGoal] = useState("");
const [courseGoals, setCourseGoals] = useState([]);
function goalInputHandler(enteredText){
  setEnteredGoal(enteredText);
}

const addGoalHandler = () => {
setCourseGoals(currenGoals => [...courseGoals, enteredGoal]);
}

  return (
    <View style={styles.container}>
      <View style={{padding: -10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <TextInput placeholder="What's going on?" 
          style={styles.inputContainer} 
          onChangeText={goalInputHandler}
          value={enteredGoal}
          />
          
          <Button title="Add" 
          style={styles.button}
          onPress={addGoalHandler}/>
        </View>
      </View>

      <View>
        {courseGoals.map((goal) => 
        <View key={goal} style={styles.listItem}><Text >{goal}</Text></View>)}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '70%',
    fontSize: 20
  },
  button: {
   
  },
  listItem: {
    padding:10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
  }
});
