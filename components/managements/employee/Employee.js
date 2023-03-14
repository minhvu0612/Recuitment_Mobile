import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const AllE = ({data, navigation}) => {

    const checkEndTime = (end_day) => {
        return new Date().getTime() - new Date(end_day).getTime();
    }

    return(
        <TouchableOpacity style = {styles.employee} onPress={() => navigation.navigate("Add_Employee_To_Project", {data: data})}>
            <View style = {[styles.employee_child, styles.bottom]}>
                <View>
                    <Text style = {styles.font}>{data.name}</Text>
                </View>
                <View style = {styles.employee_child_process}>
                    {
                        checkEndTime(data.end_day) < 0 ? (
                            <Text style = {styles.employee_child_complete_text}>Level: {data.level}</Text>
                        ):(
                            <Text style = {styles.employee_child_not_process_text}>Level: {data.level}</Text>
                        )
                    }
                </View>
            </View>
            <View style = {styles.employee_date}>
                <View>
                    <Text style = {styles.employee_date_text}>Part: {data.part}</Text>
                </View>  
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    employee: {
        padding: 10,
        backgroundColor: "white",
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 4,
        borderWidth: 0.3,
        borderColor: '#7a42f4',
    },
    employee_child: {
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
    employee_child_process: {
        marginLeft: 10,
    },
    employee_child_process_text: {
        backgroundColor: '#ffc266',
        padding: 5,
        borderRadius: 3,
        fontSize: 7,
        fontWeight: "500"
    },
    employee_child_not_process_text: {
        backgroundColor: '#ff704d',
        padding: 5,
        borderRadius: 3,
        fontSize: 7,
        fontWeight: "500"
    },
    employee_child_complete_text: {
        backgroundColor: '#00e64d',
        padding: 5,
        borderRadius: 3,
        fontSize: 7,
        fontWeight: "500"
    },
    employee_date: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    employee_date_text: {
        fontSize: 11
    }
});