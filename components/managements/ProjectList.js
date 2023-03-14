import { useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native";
import DialogInput from 'react-native-dialog-input';
import { Complete, NotStart, Start } from "./project/Project";
import { addProject, fetchAllProject } from "./project/ProjectData";
//import * as Updates from 'expo-updates';

export default function Project({navigation}){

    // state controls
    const [state, setState] = useState('ns');
    const [search, setSearch] = useState('');
    const [visible, setVisible] = useState(false);
    // state data
    const [project, setProject] = useState([]);
    // state filter from data
    const forkUpdate = (arr) => arr.filter(e => e.name.toLowerCase().includes(search.toLowerCase()));
    const projectDataStart = (project) => project.filter(e => e.status === 1);
    const projectDataNotStart = (project) => project.filter(e => e.status === 0);
    const projectDataComplete = (project) => project.filter(e => e.status === 2);
    // state load data
    const mount = useRef(true);

    useEffect(() => {
        var t1 = 20000;
        if (mount.current === true){
            t1 = 150;
        }
        var mounted = mount;
        setTimeout(() => {
            fetchAllProject().then((res) => {
                setProject(res.data.data);
                mount.current = false;
                //console.log("Loading data from database ...")
            });
        }, t1);
        return () => mounted = false;
      });

    return(
        <>
        <View>
            <View style = {styles.header}><TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Tìm kiếm ..."
                placeholderTextColor = "#b3b3b3"
                autoCapitalize = "none"
                onChangeText = {(e) => setSearch(e)}
                value = {search}
            />
            </View>
            <View style = {styles.filter}>
                {
                    state === "ns" ? (
                    <TouchableHighlight onPress = {() => setState('ns')}>
                        <View style = {[styles.filter_item, styles.filter_item_choose]}>
                            <Text>Chưa bắt đầu</Text>
                        </View>
                    </TouchableHighlight>) : (
                    <TouchableHighlight onPress = {() => setState('ns')}>
                        <View style = {styles.filter_item}>
                            <Text>Chưa bắt đầu</Text>
                        </View>
                    </TouchableHighlight>)
                }
                {
                    state === "p" ? (
                    <TouchableHighlight onPress = {() => setState('p')}>
                        <View style = {[styles.filter_item, styles.filter_item_choose]}>
                            <Text>Đang tiến hành</Text>
                        </View>
                    </TouchableHighlight>) : (
                    <TouchableHighlight onPress = {() => setState('p')}>
                        <View style = {styles.filter_item}>
                            <Text>Đang tiến hành</Text>
                        </View>
                    </TouchableHighlight>)
                }
                {
                    state === "c" ? (
                    <TouchableHighlight onPress = {() => setState('c')}>
                        <View style = {[styles.filter_item, styles.filter_item_choose]}>
                            <Text>Đã hoàn thành</Text>
                        </View>
                    </TouchableHighlight>) : (
                    <TouchableHighlight onPress = {() => setState('c')}>
                        <View style = {styles.filter_item}>
                            <Text>Đã hoàn thành</Text>
                        </View>
                    </TouchableHighlight>)
                }
            </View>
            <ScrollView style = {styles.view}>
                {
                    projectDataStart(project) !== [] && state === "p" ? (
                        forkUpdate(projectDataStart(project)).map((e, key) => <Start data={e} navigation={navigation} key={key} />)
                    ):null
                }
                {
                    projectDataNotStart(project) !== [] && state === "ns" ? (
                        forkUpdate(projectDataNotStart(project)).map((e, key) => <NotStart data={e} navigation={navigation} mount={mount} key={key} />)
                    ):null
                }
                {
                    projectDataComplete(project) !== [] && state === "c" ? (
                        forkUpdate(projectDataComplete(project)).map((e, key) => <Complete data={e} navigation={navigation} key={key} />)
                    ):null
                }
            </ScrollView>
        </View>
        <DialogInput 
            isDialogVisible={visible}
            title={"Create project"}
            message={"Create new project"}
            hintInput ={"Enter name of project"}
            submitInput={(inputText) => {
                var data = {
                    "code": inputText.toLowerCase().replace(" ", "_"),
                    "part": "Toàn bộ",
                    "name": inputText,
                    "level_1": 0,
                    "level_2": 0,
                    "level_3": 0,
                    "level_4": 0,
                    "level_5": 0,
                    "level_6": 0,
                    "content": "Nội dung dự án",
                    "status": 0,
                    "progress": "Chưa tiến hành",
                    "deadline": "2023-12-31"
                }
                addProject(data).then((res) => setMount(true));
                setVisible(false);
            }}
            closeDialog={() => setVisible(false)}>
        </DialogInput>
        <TouchableOpacity onPress={() => setVisible(true)} style={styles.fab}>
            <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    view: {
        paddingTop: 0,
        overflow: 'scroll',
        maxHeight: 580
    },

    // styles header
    header: {
        backgroundColor: '#7a42f4',
        marginBottom: 0,
    },
    input: {
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 10,
        paddingRight: 10,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 0,
        borderRadius: 3,
        backgroundColor: "#e6e6e6",
    },

    // styles filters
    filter: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    filter_item: {
        backgroundColor: 'white',
        width: 130,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: "white",
        flexDirection: "row",
        justifyContent: 'center'
    },
    filter_item_choose: {
        borderColor: "#7a42f4"
    },

    // styles project
    project: {
        padding: 10,
        backgroundColor: "white",
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 4,
        borderWidth: 0.3,
        borderColor: '#7a42f4',
    },
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
        fontSize: 8,
        fontWeight: "500"
    },
    project_child_not_process_text: {
        backgroundColor: '#ff704d',
        padding: 5,
        borderRadius: 3,
        fontSize: 8,
        fontWeight: "500"
    },

    // Styles date
    project_date: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    project_date_text: {
        fontSize: 11
    },

    // Add button
    fab: { 
        position: 'absolute', 
        width: 46, 
        height: 46, 
        alignItems: 'center', 
        justifyContent: 'center', 
        right: 20, 
        bottom: 30, 
        backgroundColor: '#03A9F4', 
        borderRadius: 30, 
        elevation: 8,
    }, 
    fabIcon: { 
        fontSize: 32, 
        color: 'white', 
    }
});