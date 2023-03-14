import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native"
import { SelectList } from "react-native-dropdown-select-list";
import { fetchAllProject } from "../project/ProjectData";


export const AddEmployeeToProject = ({route, navigation}) => {

    const { data } = route.params;

    const [project, setProject] = useState([]);
    const [select,, setSelect] = useState();

    const options = () => {
        var arr = [];
        for(var item in project){
            arr.push({key: item.toString(), value: project[item].name});
        }
        return arr;
    }

    const addData = () => {
        
    }

    useEffect(() => {
        var mounted = true;
        fetchAllProject().then(
            (res) => setProject(res.data.data)
        )
        return () => mounted = false;
    }, [])

    return (
        <View>
            <View style={styles.employee}>
                <Text style={styles.text}>Tên nhân viên: {data.name}</Text>
                <Text style={styles.text}>Mã nhân viên: {data.code}</Text>
                <Text style={styles.text}>Bộ phận: {data.part}</Text>
                <Text style={styles.text}>Địa chỉ: {data.address}</Text>
                <Text style={styles.text}>Ngày sinh: {data.birthday}</Text>
                <Text style={styles.text}>Địa chỉ: {data.phone}</Text>
                <Text style={styles.text}>CMND: {data.citizen_id}</Text>
                <Text style={styles.text}>Ngày bắt đầu: {data.start_day}</Text>
            </View>
            <View style={styles.employee}>
                <Text style={styles.text}>Thêm vào dự án</Text>
                <SelectList 
                    setSelected={(val) => {
                        setSelect(project.filter(e => e.name === val)[0]['code']);
                    }}
                    data={options()} 
                    save="value"
                    maxHeight={150}
                />
            </View>
            <View style = {styles.edit}>
                <Button
                    onPress={() => addData()}
                    title = "Lưu"
                    color = "#7a42f4"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    employee: {
        backgroundColor: 'white',
        margin: 10,
        padding: 20,
        borderRadius: 5,
    },

    text: {
        fontSize:16,
        marginTop: 10,
        marginBottom: 10
    },

    edit: {
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10
    },
})