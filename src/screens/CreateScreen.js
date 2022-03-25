import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import React, { useState, useContext } from "react";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(Context);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput
        style={styles.inputStyle}
        value={title}
        autoCapitalize="none"
        onChangeText={setTitle}
      />
      <Text style={styles.label}>Enter Content</Text>
      <TextInput
        autoCapitalize="none"
        style={styles.inputStyle}
        value={content}
        onChangeText={setContent}
      />
      <Button
        title="Add Blog Post"
        onPress={() =>
          addBlogPost(title, content, () => {
            navigation.navigate("Index");
          })
        }
      />
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 18,
    borderWidth: 1,
    marginBottom: 15,
    borderColor: "black",
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
  },
  container: {
    padding: 5,
  },
});
