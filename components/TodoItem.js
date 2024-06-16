import React from 'react';
import { Card, Text, Button, Checkbox } from 'react-native-paper';

export default function TodoItem({ task, deleteTask, toggleCompleted }) {
  return (
    <Card style={{ marginBottom: 10 }}>
        <Checkbox
        status={task.completed ? "checked" : "unchecked"}
        onPress={() => toggleCompleted(task.id)}
      />
      <Card.Content>
        <Text
          style={[{ fontSize: 16 }, task.completed && { textDecorationLine: 'line-through', color: '#ccc' }]}
          onPress={() => toggleCompleted(task.id)}
        >
          {task.text}
        </Text>
        <Button mode="contained" onPress={() => deleteTask(task.id)}>
          Delete
        </Button>
      </Card.Content>
    </Card>
  );
}
