import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import { addEmployee } from "./EmployeeData";


/** Edit components */
export const AddEmployee = ({route, navigation}) => {

    const init_data = {
        'code': '',
        'name': '',
        'part': '',
        'level': 1,
        'start_day': '',
        'end_day': '2024-12-31',
        'citizen_id': '',
        'birthday': '',
        'address': '',
        'phone': ''
    }

    useEffect(() => {
        var d1 = new Date();
        var d2 = new Date("2024-10-31");
        console.log(d1.getTime() - d2.getTime());
        console.log(d2.getTime());
    })

    const addData = () => {
        console.log(init_data);
        addEmployee(init_data).then(
            (res) => {
                console.log(res);
                navigation.navigate("Employee");
                route.params.mount = true;
            }
        )
    }

    return(
        <>
        <View>
            <TextInput style = {[styles.input, styles.input_assign]}
                underlineColorAndroid = "transparent"
                placeholder = "Họ và tên"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {(e) => {init_data['name'] = e}}/>

            <TextInput style = {[styles.input, styles.input_assign]}
                underlineColorAndroid = "transparent"
                placeholder = "Mã nhân viên"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {(e) => {init_data['code'] = e}}/>

            <TextInput style = {[styles.input, styles.input_assign]}
                underlineColorAndroid = "transparent"
                placeholder = "Cấp độ"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {(e) => {init_data['level'] = Number(e)}}/>

            <TextInput style = {[styles.input, styles.input_assign]}
                underlineColorAndroid = "transparent"
                placeholder = "Bộ phận"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {(e) => {init_data['part'] = e}}/>

            <TextInput style = {[styles.input, styles.input_assign]}
                underlineColorAndroid = "transparent"
                placeholder = "CMND"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {(e) => {init_data['citizen_id'] = e}}/>

            <TextInput style = {[styles.input, styles.input_assign]}
                underlineColorAndroid = "transparent"
                placeholder = "Ngày sinh"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {(e) => {init_data['birthday'] = e}}/>

            <TextInput style = {[styles.input, styles.input_assign]}
                underlineColorAndroid = "transparent"
                placeholder = "Địa chỉ"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {(e) => {init_data['address'] = e}}/>

            <TextInput style = {[styles.input, styles.input_assign]}
                underlineColorAndroid = "transparent"
                placeholder = "SĐT"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {(e) => {init_data['phone'] = e}}/>

            <TextInput style = {[styles.input, styles.input_assign]}
                underlineColorAndroid = "transparent"
                placeholder = "Ngày bắt đầu"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {(e) => {init_data['start_day'] = e}}/>
            
        </View>

        <View style = {styles.edit}>
            <Button
                onPress={() => addData()}
                title = "Lưu"
                color = "#7a42f4"
            />
        </View>
        </>
    )
}


/** Styles */
const styles = StyleSheet.create({
    // project
    project: {
        padding: 10,
        backgroundColor: "white",
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 4,
        borderWidth: 0,
        borderColor: '#7a42f4',
    },

    // name, process
    project_child: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "center"
    },
    font: {
        fontWeight: 'bold',
        fontSize: 20
    },
    bottom: {
        marginBottom: 10
    },
    project_child_process: {
        marginLeft: 10,
    },
    project_child_process_text: {
        backgroundColor: '#ffc266',
        padding: 5,
        borderRadius: 3,
        fontSize: 7,
        fontWeight: "500"
    },
    project_child_not_process_text: {
        backgroundColor: '#ff704d',
        padding: 5,
        borderRadius: 3,
        fontSize: 7,
        fontWeight: "500"
    },
    project_child_complete_text: {
        backgroundColor: '#00e64d',
        padding: 5,
        borderRadius: 3,
        fontSize: 7,
        fontWeight: "500"
    },

    // deadline
    project_date: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    project_date_text: {
        fontSize: 11
    },

    // employees
    employee_view: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        padding: 20,
        borderRadius: 2,
        backgroundColor: 'white',
    },
    font_level: {
        fontSize: 15,
    },

    // part
    part_view: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        padding: 20,
        borderRadius: 2,
        backgroundColor: 'white',
    },

    // Edit
    edit: {
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10
    },
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
    // selection
    select: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    }
});