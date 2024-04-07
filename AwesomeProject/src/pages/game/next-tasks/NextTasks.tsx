import React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

interface Task {
  name: string;
  tourDeadline: number;
}

const TMP_NEXTTASKS_DATA: Task[] = [
  {
    name: 'Zbierz zasoby',
    tourDeadline: 3,
  },
  {
    name: 'Napraw piko',
    tourDeadline: 1,
  },
  {
    name: 'Zbierz Paliwo',
    tourDeadline: 20,
  },
  {
    name: 'Zbierz Paliwo',
    tourDeadline: 1,
  },
  {
    name: 'Zbierz Paliwo',
    tourDeadline: 1,
  },
  {
    name: 'Zbierz Paliwo',
    tourDeadline: 1,
  },
  {
    name: 'Zbierz Paliwo',
    tourDeadline: 1,
  },
];

const sortTasks = (tasks: Task[]) => { 
  return tasks.sort((a, b) => a.tourDeadline - b.tourDeadline);
};

const NextTasks = () => {
  return (
    <div style={styles.container}>
      <Text style={styles.title}>Najbliższe zadania:</Text>
      <ScrollView style={styles.scrollView}>
        {sortTasks(TMP_NEXTTASKS_DATA).map((task, index) => (
          <Text key={index}>
            {`${task.name} za ${task.tourDeadline} ${task.tourDeadline == 1 ? "turę" : (task.tourDeadline > 1 && task.tourDeadline < 5) ? "tury" : "tur"}`}
          </Text>
          ))
        }
      </ScrollView>
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 70,
    padding: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollView: {
    marginTop: 8,
    maxHeight: 60,
  },
});

export default NextTasks;
