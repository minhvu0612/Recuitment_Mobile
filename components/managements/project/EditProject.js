import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import { SelectList } from 'react-native-dropdown-select-list'
import { updateProject } from "./ProjectData";


/** Edit components */
export const EditProject = ({route, navigation}) => {

    const options = [
        { key: '1', value: 'Start' },
        { key: '0', value: 'Not start' },
        { key: '2', value: 'Complete' },
    ];

    const { data, mount } = route.params;
    const [select, setSelect] = useState();

    const editData = () => {
        if (select === "Start") {
            data['status'] = 1;
            console.log(data);
        }
        if (select === "Not start") {
            data['status'] = 0;
            console.log(data);
        }
        if (select === "Complete") {
            data['status'] = 2;
            console.log(data);
        }
        updateProject(data, data['code']).then(
            (res) => {
                navigation.navigate("Project");
                //mount.current = true;
            }
        )
    }

    return(
        <>
        <View style = {styles.project}>
            <View style = {[styles.project_child, styles.bottom]}>
                <View>
                    <Text style = {styles.font}>{data.name}</Text>
                </View>
                {
                    data.status === 0 ? (
                        <View style = {styles.project_child_process}>
                            <Text style = {styles.project_child_not_process_text}>{data.progress}</Text>
                        </View>
                    ):null
                }
                {
                    data.status === 1 ? (
                        <View style = {styles.project_child_process}>
                            <Text style = {styles.project_child_process_text}>{data.progress}</Text>
                        </View>
                    ):null
                }
                {
                    data.status === 2 ? (
                        <View style = {styles.project_child_process}>
                            <Text style = {styles.project_child_complete_text}>{data.progress}</Text>
                        </View>
                    ):null
                }
            </View>
            <View style = {styles.project_date}>
                <View>
                    <Text style = {styles.project_date_text}>Deadline: {data.deadline}</Text>
                </View>  
            </View>
        </View>

        <View>
            <TextInput style = {[styles.input, styles.input_assign]}
                underlineColorAndroid = "transparent"
                placeholder = "Tiến độ"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                defaultValue={data.progress}
                onChangeText = {(e) => {data['name'] = e}}/>

            <View style = {styles.select}>
                <SelectList 
                    setSelected={(val) => {
                        setSelect(val);
                    }}
                    data={options} 
                    save="value"
                    maxHeight={150}
                    defaultOption={options.filter(e => e.key === data.status.toString())[0]}
                />
            </View>

            <TextInput style = {[styles.input, styles.input_assign]}
                underlineColorAndroid = "transparent"
                placeholder = "Thời hạn hoàn thành"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                defaultValue={data.deadline}
                onChangeText = {(e) => {data['deadline'] = e}}/>

            <TextInput style = {[styles.input, styles.input_assign]}
                underlineColorAndroid = "transparent"
                placeholder = "Nhân viên cấp 1"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                defaultValue={data.level_1.toString()}
                onChangeText = {(e) => {data['level_1'] = Number(e)}}/>

            <TextInput style = {[styles.input, styles.input_assign]}
                underlineColorAndroid = "transparent"
                placeholder = "Nhân viên cấp 2"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                defaultValue={data.level_2.toString()}
                onChangeText = {(e) => {data['level_2'] = Number(e)}}/>

            <TextInput style = {[styles.input, styles.input_assign]}
                underlineColorAndroid = "transparent"
                placeholder = "Nhân viên cấp 3"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                defaultValue={data.level_3.toString()}
                onChangeText = {(e) => {data['level_3'] = Number(e)}}/>

            <TextInput style = {[styles.input, styles.input_assign]}
                underlineColorAndroid = "transparent"
                placeholder = "Nhân viên cấp 4"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                defaultValue={data.level_4.toString()}
                onChangeText = {(e) => {data['level_4'] = Number(e)}}/>

            <TextInput style = {[styles.input, styles.input_assign]}
                underlineColorAndroid = "transparent"
                placeholder = "Nhân viên cấp 5"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                defaultValue={data.level_5.toString()}
                onChangeText = {(e) => {data['level_5'] = Number(e)}}/>

            <TextInput style = {[styles.input, styles.input_assign]}
                underlineColorAndroid = "transparent"
                placeholder = "Nhân viên cấp 6"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                defaultValue={data.level_6.toString()}
                onChangeText = {(e) => {data['level_6'] = Number(e)}}/>

            <TextInput style = {[styles.input, styles.input_assign]}
                underlineColorAndroid = "transparent"
                placeholder = "Bộ phận"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                defaultValue={data.part}
                onChangeText = {(e) => {data['part'] = e}}/>
        </View>

        <View style = {styles.edit}>
            <Button
                onPress={() => editData()}
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
        marginTop: 10,
        marginBottom: 15,
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