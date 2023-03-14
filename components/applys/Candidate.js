import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { useState } from "react";

export const Candidate = () => {

    const init_data = {
        "code": "",
        "position": "",
        "name": "",
        "citizen_id": "",
        "birthday": "",
        "address": "",
        "phone": "",
        "cv_file": ""
    }

    const [result, setResult] = useState();

    const pickDocument = async () => {
        await DocumentPicker.getDocumentAsync({
        }).then(
            (res) => {
                setResult(res);
            }
        )
        .catch((err) => console.log(err))
        await RNFetchBlob.fs.readFile(result.uri, 'base64')
        .then((data) => {
            setdata(data);
        })
        .catch((err) => {console.log(err)});
    };

    const applyData = () => {

    };


    return(
        <View>
            <TextInput style = {[styles.input, styles.input_assign]}
                underlineColorAndroid = "transparent"
                placeholder = "Họ và tên"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {(e) => {
                    init_data["name"] = e;
                    var result = e.split(" ");
                    for (var i in result){
                        init_data["code"] += result[i][0];
                    }
                }}/>

            <TextInput style = {[styles.input, styles.input_assign]}
                underlineColorAndroid = "transparent"
                placeholder = "Ngày sinh"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {(e) => {}}/>

            <TextInput style = {[styles.input, styles.input_assign]}
                underlineColorAndroid = "transparent"
                placeholder = "Địa chỉ"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {(e) => {}}/>

            <TextInput style = {[styles.input, styles.input_assign]}
                underlineColorAndroid = "transparent"
                placeholder = "Điện thoại"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {(e) => {}}/>

            <TextInput style = {[styles.input, styles.input_assign]}
                underlineColorAndroid = "transparent"
                placeholder = "CMND"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {(e) => {}}/>

            <Text style={styles.file}>{result ? result["name"]:null}</Text>
            <View style={styles.button}>
                <TouchableOpacity>
                <Button
                    title="upload your file"
                    onPress={pickDocument}
                    color= "#9a73ef"
                />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // input
    input: {
        marginTop: 20,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 10,
        paddingRight: 10,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
        backgroundColor: 'white'
    },
    input_assign: {
          marginBottom:3
    },
    file: {
        margin: 10,
        marginTop: 20,
        color: "#9a73ef",
        textDecorationLine: "underline"
    },
    button: {
        margin: 10,
    },
})