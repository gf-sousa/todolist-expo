import React from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

class App extends React.Component {
  state = {
    text: "",
    todo: []
  };
  addTodo = () => {
    let newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({ todo: arr, text: "" });
  };
  deleteTodo = t => {
    let arr = this.state.todo;
    let pos = arr.indexOf(t);
    arr.splice(pos, 1);
    this.setState({ todo: arr });
  };
  renderTodos = () => {
    return this.state.todo.map(t => {
      return (
        <TouchableOpacity key={t}>
          <Text
            style={styles.todo}
            onPress={() => {
              this.deleteTodo(t);
            }}
          >
            {t}
          </Text>
        </TouchableOpacity>
      );
    });
  };
  render() {
    return (
      <View style={styles.wholeStyle}>
        <View style={styles.viewStyle}>
          <Text style={styles.header}>ToDo List</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={text => this.setState({ text: text })}
            value={this.state.text}
          />
          <Button title="Add Todo" color="green" onPress={this.addTodo} />
          <View style={{ marginTop: 100 }}>{this.renderTodos()}</View>
        </View>
      </View>
    );
  }
}

const styles = {
  wholeStyle: {
    flex: 1,
    backgroundColor: "#f12d23"
  },
  viewStyle: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  inputStyle: {
    borderColor: "#f0f0f0",
    borderWidth: 1,
    width: 100
  },
  header: {
    color: "#f0ea66",
    fontSize: 20,
    fontWeight: "bold"
  },
  todo: {
    fontSize: 18,
    color: "white"
  }
};

export default App;
