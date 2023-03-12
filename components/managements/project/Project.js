import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Start = ({data, navigation}) => {

    return(
        <TouchableOpacity style = {styles.project} onPress={() => navigation.navigate("Start_Item", {data: data})}>
            <View style = {[styles.project_child, styles.bottom]}>
                <View><Text style = {styles.font}>{data.name}</Text></View>
                <View style = {styles.project_child_process}>
                    <Text style = {styles.project_child_process_text}>{data.progress}</Text>
                </View>
            </View>
            <View style = {styles.project_date}>
                <View><Text style = {styles.project_date_text}>Deadline: {data.deadline}</Text></View>  
            </View>
        </TouchableOpacity>
    )
}

export const NotStart = ({data, navigation}) => {

    return(
        <TouchableOpacity style = {styles.project} onPress={() => navigation.navigate("Not_Start_Item", {data: data})}>
            <View style = {[styles.project_child, styles.bottom]}>
                <View><Text style = {styles.font}>{data.name}</Text></View>
                <View style = {styles.project_child_process}>
                    <Text style = {styles.project_child_not_process_text}>{data.progress}</Text>
                </View>
            </View>
            <View style = {styles.project_date}>
                <View><Text style = {styles.project_date_text}>Deadline: {data.deadline}</Text></View>  
            </View>
        </TouchableOpacity>
    )
}

export const Complete = ({data, navigation}) => {
    return(
        <TouchableOpacity style = {styles.project} onPress={() => navigation.navigate("Complete_Item", {data: data})}>
            <View style = {[styles.project_child, styles.bottom]}>
                <View><Text style = {styles.font}>{data.name}</Text></View>
                <View style = {styles.project_child_process}>
                    <Text style = {styles.project_child_complete_text}>{data.progress}</Text>
                </View>
            </View>
            <View style = {styles.project_date}>
                <View><Text style = {styles.project_date_text}>Deadline: {data.deadline}</Text></View>  
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    project: {
        padding: 10,
        backgroundColor: "white",
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 4,
        borderWidth: 0.3,
        borderColor: '#7a42f4',
        zIndex: 100
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
    project_date: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    project_date_text: {
        fontSize: 11
    }
});