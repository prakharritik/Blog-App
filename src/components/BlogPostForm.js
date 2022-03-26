import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import React, { useState } from "react";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

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
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

export default BlogPostForm;

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
