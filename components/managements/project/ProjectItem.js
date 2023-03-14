import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { deleteProject } from "./ProjectData";


/** ______________________________________ START _____________________________________ */
/** Start Item Project */
export const StartItem = ({route}) => {

    const { data, navigator, mount } = route.params;

    const showAlert = () => {  
        Alert.alert(
            "Xóa dự án",  
            "Bạn chắc chắn muốn xóa ?",
            [  
                {  
                    text: 'Cancel',  
                    onPress: () => console.log(mount),  
                    style: 'cancel',  
                },  
                {
                    text: 'OK', 
                    onPress: () => {
                        deleteProject(data.code).then(
                            () => {
                                navigator.navigate("Project");
                                mount.current = true;
                            }
                        )
                    }
                },  
            ]  
        );  
    }  

    return(
        <>
        <View style = {styles.project}>
            <View style = {[styles.project_child, styles.bottom]}>
                <View><Text style = {styles.font}>{data.name}</Text></View>
                <View style = {styles.project_child_process}>
                    <Text style = {styles.project_child_process_text}>{data.progress}</Text>
                </View>
            </View>
            <View style = {styles.project_date}>
                <View><Text style = {styles.project_date_text}>Deadline: {data.deadline}</Text></View>  
            </View>
        </View>
        <View>
            <View style = {styles.employee_view}><Text style = {styles.font_level}>Nhân viên cấp 1: {data.level_1} Người</Text></View>
            <View style = {styles.employee_view}><Text style = {styles.font_level}>Nhân viên cấp 2: {data.level_2} Người</Text></View>
            <View style = {styles.employee_view}><Text style = {styles.font_level}>Nhân viên cấp 3: {data.level_3} Người</Text></View>
            <View style = {styles.employee_view}><Text style = {styles.font_level}>Nhân viên cấp 4: {data.level_4} Người</Text></View>
            <View style = {styles.employee_view}><Text style = {styles.font_level}>Nhân viên cấp 5: {data.level_5} Người</Text></View>
            <View style = {styles.employee_view}><Text style = {styles.font_level}>Nhân viên cấp 6: {data.level_6} Người</Text></View>
        </View>
        <View>
            <View style = {styles.part_view}><Text style = {styles.font_level}>Bộ phận: {data.part}</Text></View>
        </View>
        <View style = {styles.edit}>
            <Button
                onPress={() => navigator.navigate("Edit_Project", {data: data, mount: mount})}
                title = "Chỉnh sửa"
                color = "#7a42f4"
            />
        </View>
        <View style = {styles.remove}>
            <Button
                onPress={() => showAlert()}
                title = "Xóa"
                color = "#7a42f4"
            />
        </View>
        </>
    )
}


/** ______________________________________ NOT START _____________________________________ */
/** Not Start Item Project */
export const NotStart = ({route}) => {

    const { data, navigator, mount } = route.params;

    const showAlert = () => {  
        Alert.alert(
            "Xóa dự án",  
            "Bạn chắc chắn muốn xóa ?",
            [  
                {  
                    text: 'Cancel',  
                    onPress: () => console.log(mount),  
                    style: 'cancel',  
                },  
                {
                    text: 'OK', 
                    onPress: () => {
                        deleteProject(data.code).then(
                            () => {
                                navigator.navigate("Project");
                                mount.current = true;
                            }
                        )
                    }
                },  
            ]  
        );  
    } 

    return(
        <>
        <View style = {styles.project}>
            <View style = {[styles.project_child, styles.bottom]}>
                <View><Text style = {styles.font}>{data.name}</Text></View>
                <View style = {styles.project_child_process}>
                    <Text style = {styles.project_child_not_process_text}>{data.progress}</Text>
                </View>
            </View>
            <View style = {styles.project_date}>
                <View><Text style = {styles.project_date_text}>Deadline: {data.deadline}</Text></View>  
            </View>
        </View>
        <View>
            <View style = {styles.employee_view}><Text style = {styles.font_level}>Nhân viên cấp 1: {data.level_1} Người</Text></View>
            <View style = {styles.employee_view}><Text style = {styles.font_level}>Nhân viên cấp 2: {data.level_2} Người</Text></View>
            <View style = {styles.employee_view}><Text style = {styles.font_level}>Nhân viên cấp 3: {data.level_3} Người</Text></View>
            <View style = {styles.employee_view}><Text style = {styles.font_level}>Nhân viên cấp 4: {data.level_4} Người</Text></View>
            <View style = {styles.employee_view}><Text style = {styles.font_level}>Nhân viên cấp 5: {data.level_5} Người</Text></View>
            <View style = {styles.employee_view}><Text style = {styles.font_level}>Nhân viên cấp 6: {data.level_6} Người</Text></View>
        </View>
        <View>
            <View style = {styles.part_view}><Text style = {styles.font_level}>Bộ phận: {data.part}</Text></View>
        </View>
        <View style = {styles.edit}>
            <Button
                onPress={() => navigator.navigate("Edit_Project", {data: data, mount: mount})}
                title = "Chỉnh sửa"
                color = "#7a42f4"
            />
        </View>
        <View style = {styles.remove}>
            <Button
                onPress={() => showAlert()}
                title = "Xóa"
                color = "#7a42f4"
            />
        </View>
        </>
    )
}


/** ______________________________________ COMPLETE _____________________________________ */
/** Complete Item Project */
export const Complete = ({route}) => {

    const { data, navigator, mount } = route.params;

    const showAlert = () => {  
        Alert.alert(
            "Xóa dự án",  
            "Bạn chắc chắn muốn xóa ?",
            [  
                {  
                    text: 'Cancel',  
                    onPress: () => console.log(mount),  
                    style: 'cancel',  
                },  
                {
                    text: 'OK', 
                    onPress: () => {
                        deleteProject(data.code).then(
                            () => {
                                navigator.navigate("Project");
                                mount.current = true;
                            }
                        )
                    }
                },  
            ]  
        );  
    }

    return(
        <>
        <View style = {styles.project}>
            <View style = {[styles.project_child, styles.bottom]}>
                <View><Text style = {styles.font}>{data.name}</Text></View>
                <View style = {styles.project_child_process}>
                    <Text style = {styles.project_child_complete_text}>{data.state}</Text>
                </View>
            </View>
            <View style = {styles.project_date}>
                <View><Text style = {styles.project_date_text}>Deadline: {data.deadline}</Text></View>  
            </View>
        </View>
        <View>
            <View style = {styles.employee_view}><Text style = {styles.font_level}>Nhân viên cấp 1: {data.level_1} Người</Text></View>
            <View style = {styles.employee_view}><Text style = {styles.font_level}>Nhân viên cấp 2: {data.level_2} Người</Text></View>
            <View style = {styles.employee_view}><Text style = {styles.font_level}>Nhân viên cấp 3: {data.level_3} Người</Text></View>
            <View style = {styles.employee_view}><Text style = {styles.font_level}>Nhân viên cấp 4: {data.level_4} Người</Text></View>
            <View style = {styles.employee_view}><Text style = {styles.font_level}>Nhân viên cấp 5: {data.level_5} Người</Text></View>
            <View style = {styles.employee_view}><Text style = {styles.font_level}>Nhân viên cấp 6: {data.level_6} Người</Text></View>
        </View>
        <View>
            <View style = {styles.part_view}><Text style = {styles.font_level}>Bộ phận: {data.part}</Text></View>
        </View>
        <View style = {styles.edit}>
            <Button
                onPress={() => navigator.navigate("Edit_Project", {data: data, mount: mount})}
                title = "Chỉnh sửa"
                color = "#7a42f4"
            />
        </View>
        <View style = {styles.remove}>
            <Button
                onPress={() => showAlert()}
                title = "Xóa"
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

    // Part
    part_view: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        padding: 20,
        borderRadius: 2,
        backgroundColor: 'white',
    },

    // Edit, remove
    edit: {
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
    },
    remove: {
        marginLeft: 10,
        marginRight: 10
    }
});