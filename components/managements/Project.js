import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
import { NotStart, Start } from "./project/Start";
import { projectDataNotStart, projectDataStart } from "./project/ProjectData";

export default function Project({navigation}){

    const [state, setState] = useState('ns');

    return(
        <ScrollView style = {styles.view}>
            <View style = {styles.header}><TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Tìm kiếm ..."
                placeholderTextColor = "#b3b3b3"
                autoCapitalize = "none"
                onChangeText = {this.handleEmail}/>
            </View>

            <View style = {styles.filter}>
                {
                    state === "ns" ? (
                    <TouchableHighlight onPress={() => setState('ns')}>
                    <View style = {[styles.filter_item, styles.filter_item_choose]}>
                        <Text>Chưa bắt đầu</Text>
                    </View></TouchableHighlight>) : (
                    <TouchableHighlight onPress={() => setState('ns')}>
                        <View style = {styles.filter_item}>
                        <Text>Chưa bắt đầu</Text>
                    </View></TouchableHighlight>)
                }
                {
                    state === "p" ? (
                    <TouchableHighlight onPress={() => setState('p')}>
                    <View style = {[styles.filter_item, styles.filter_item_choose]}>
                        <Text>Đang tiến hành</Text>
                    </View></TouchableHighlight>) : (
                    <TouchableHighlight onPress={() => setState('p')}>
                        <View style = {styles.filter_item}>
                        <Text>Đang tiến hành</Text>
                    </View></TouchableHighlight>)
                }
                {
                    state === "c" ? (
                    <TouchableHighlight onPress={() => setState('c')}>
                    <View style = {[styles.filter_item, styles.filter_item_choose]}>
                        <Text>Đã hoàn thành</Text>
                    </View></TouchableHighlight>) : (
                    <TouchableHighlight onPress={() => setState('c')}>
                        <View style = {styles.filter_item}>
                        <Text>Đã hoàn thành</Text>
                    </View></TouchableHighlight>)
                }
            </View>

            {
                projectDataStart && state === "p" ? (
                    projectDataStart.map((e, key) => <Start data = {e} />)
                ):null
            }

            {
                projectDataNotStart && state === "ns" ? (
                    projectDataNotStart.map((e, key) => <NotStart data={e} />)
                ):null
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    view: {
        paddingTop: 0,
        position: 'relative'
    },


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

    project: {
        padding: 10,
        backgroundColor: "white",
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 4,
        borderWidth: 0.3,
        borderColor: '#7a42f4',
        /*
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 1,*/
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

    project_date: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    project_date_text: {
        fontSize: 11
    }
});