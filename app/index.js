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
    Touchable,
    Alert,
} from "react-native";
import Header from './../components/header';
import ToDoItem from "../components/toDoItem";
import AddTodo from './../components/addTodo';


export default function App() {
    // const [name, setName] = useState("Fahd");
    // const [age, setAge] = useState(25);

    // const clickHandler = () => {
    // 	setName("Adebayo Fahd");
    // 	setAge(58)
    // }

    const [people, setPeople] = useState([
        { name: "fahd", id: "1" },
        { name: "daniel", id: "2" },
        { name: "david", id: "3" },
        { name: "micheal", id: "4" },
        { name: "mitch", id: "5" },
        { name: "ola", id: "6" },
        { name: "loyalty", id: "7" },
    ]);

    const pressHandler = (id) => {
        console.log(id);
        setPeople((prevPeople) => {
            return prevPeople.filter((person) => person.id != id)
        })
    }

    // Todo
    const [todo, setTodo] = useState([
        { text: "buy coffee", key: 1 },
        { text: "create an app", key: 2 },
        { text: "play on the beach", key: 3 },
    ]);

    const delTodo = (key) => {
        setTodo((prevTodo) => {
            return prevTodo.filter((todo) => todo.key != key)
        })
    }

    const submitTodo = (text) => {
        if (text === "" || text.length < 3) {
            setTodo((prevTodo) => {
                console.log(...prevTodo);
                return [
                    // { text: text, key: Math.random() },
                    ...prevTodo
                ]
            })
            Alert.alert("You can add and empty todo or your todo must be 4 char longs", [
                {text: 'Ok', onPress: () => console.log('alert closed') }
            ])
        }

        // else if(){

        // }

        else {
            setTodo((prevTodo) => {
                console.log(...prevTodo);
                return [
                    { text: text, key: Math.random() },
                    ...prevTodo
                ]
            })
        }

    }

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                {/* To Form */}
                <AddTodo submitTodo={submitTodo} />

                <View style={styles.list}>
                    <FlatList
                        data={todo}
                        renderItem={({ item }) => (
                            <ToDoItem list={item} delTodo={delTodo} />
                        )}
                    />
                </View>
            </View>
            {/* <FlatList
                numColumns={2}
                keyExtractor={(item) => item.id}
                data={people}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => pressHandler(item.id)}>
                        <Text style={styles.item}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            /> */}

            {/* <ScrollView>
				{people.map((item) => {
					return (
						<View key={item.key}>
							<Text style={styles.item}>{item.name}</Text>
						</View>
					)
				})}
			</ScrollView> */}

            {/* <Text>Enter name:</Text>
			<TextInput
				multiline
				style={styles.Input}
				placeholder='e.g. John Doe'
				onChangeText={(val) => setName(val)} />

			<Text>Enter Age:</Text>
			<TextInput
				style={styles.Input}
				placeholder='e.g. 40'
				keyboardType='numeric'
				onChangeText={(value) => setAge(value)} />

			<Text>name is : {name}, Age is {age}</Text>


			<View style={styles.buttonContainer}>
				<Button title="Update Name" onPress={clickHandler} />
			</View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        // paddingTop: 40,
        // paddingHorizontal: 20,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    content: {
        padding: 40,
    },
    list: {
        marginTop: 20,
    }
    // buttonContainer: {
    //     marginTop: 20,
    // },
    // Input: {
    //     borderWidth: 1,
    //     padding: 10,
    //     borderColor: "red",
    //     margin: 20,
    //     width: 200,
    // },
    // item: {
    //     marginTop: 24,
    //     padding: 30,
    //     backgroundColor: "pink",
    //     fontSize: 24,
    //     marginHorizontal: 20,
    // },
});
