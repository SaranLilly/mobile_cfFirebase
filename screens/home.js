import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import TextInputExample from "./textinput";
import TextInputExample2 from "./textinput2";
import { Touchables } from "./button"; // แก้ไขตรงนี้

import { collection, addDoc } from 'firebase/firestore';
import { db } from './config';

export default function HomeScreen(){

    const [nameyyy, setName] = React.useState(''); // แก้ไขตรงนี้
    const [surnameyyy, setSurName] = React.useState(''); // แก้ไขตรงนี้

    function create(){
        addDoc(collection(db, "profile"), {
            name: nameyyy,
            surname: surnameyyy
        }).then(() => {
            console.log('data submitted');
        }).catch((error) => {
            console.log(error);
        });
    }

    
    return (
        <View>
            {/* <Text>Home!</Text> */}
            {/* <TextInputExample value={nameyyy} onChangeText={(name) => setName(name)} placeholder="Name"/>
            <TextInputExample2 value={surnameyyy} onChangeText={(surname) => setSurName(surname)} placeholder="SurName"/> */}
            {/* <Touchables/> */}
            <Text>Firebase</Text>
            <TextInput value={nameyyy} onChangeText={(name) => setName(name)} placeholder="Name"/>
            <TextInput value={surnameyyy} onChangeText={(surname) => setSurName(surname)} placeholder="Surname"/>
            <Button title='Submit Data' onPress={create}/>
        </View>
    );
    
}
