# React Native Paper Todo App

A simple and stylish Todo List app built with React Native and the React Native Paper UI library. This app allows you to add tasks, mark them as completed, delete tasks, and manage your todo list with ease.

## Features

- Add new tasks with the TextInput
- Mark tasks as completed with a checkbox
- Delete tasks with a button
- Clean and modern UI with Material Design styles

## Getting Started

### Prerequisites

- Node.js and npm installed
- Expo CLI installed globally (`npm install -g expo-cli`)

### Installation

1. Clone the repo and install dependencies:

```
git clone https://github.com/your/repo
cd repo
npm install
```

2. Start the development server:

```
expo start
```

3. Scan the QR code with the Expo Go app (Android) or the Camera app (iOS) to run on your device.

## Usage

The `App` component is the entry point, rendering the `TodoList` component which manages the todo list functionality.

`TodoList` renders the list of tasks using `TodoItem` components, which handle completion checkboxes, task text styling, and delete buttons.

Refer to this [tutorial](https://medium.com/@worachote/building-a-todo-list-app-with-react-native-a-step-by-step-guide-7ed7871d3f98) for step-by-step instructions on building the app.

## Components

### TodoItem

The `TodoItem` component renders an individual task item with a checkbox, task text, and delete button.

**Props**:
- `task`: Object containing task details (id, text, completed)
- `deleteTask`: Function to delete the task
- `toggleCompleted`: Function to toggle task completion

### TodoList

The `TodoList` component manages the list of tasks, adding new tasks, and deleting tasks.

**Props**:
- `tasks`: Array of task objects
- `addTask`: Function to add a new task
- `deleteTask`: Function to delete a task

## Styling

The app uses the Material Design styling from the React Native Paper library, providing a clean and modern look and feel. Styling is applied using the `react-native-paper` components and themes.