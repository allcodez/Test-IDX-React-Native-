import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    Button,
    TextInput,
    ScrollView,
    FlatList,
    TouchableOpacity,
} from "react-native";



export default function AddTodo({submitTodo}) {

    const [text, setText] = useState("");

    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="new todo..."
                onChangeText={changeHandler}
            />
            <Button
                onPress={() => {
                    submitTodo(text);
                }}
                title='Add Todo'
                color={'coral'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    }
})