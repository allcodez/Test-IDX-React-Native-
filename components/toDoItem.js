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

export default function ToDoItem({ list, delTodo }) {

    return (
        <TouchableOpacity onPress={() => delTodo(list.key)}>
            <Text style={styles.list}>{list.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    list:{
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10
    }
})
