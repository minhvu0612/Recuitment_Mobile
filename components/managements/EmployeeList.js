import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
import { AllE, BreakE, DoingE } from "./employee/Employee";
import { All, Break, Doing } from "./employee/EmployeeData";

export default function Employee({navigation}){

    const [state, setState] = useState('all');
    const [search, setSearch] = useState('');

    const forkUpdate = (arr) => arr.filter(e => e.name.toLowerCase().includes(search.toLowerCase()));

    return(
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
                    state === "all" ? (
                    <TouchableHighlight onPress={() => setState('all')}>
                    <View style = {[styles.filter_item, styles.filter_item_choose]}>
                        <Text>Tất cả</Text>
                    </View></TouchableHighlight>) : (
                    <TouchableHighlight onPress={() => setState('all')}>
                        <View style = {styles.filter_item}>
                        <Text>Tất cả</Text>
                    </View></TouchableHighlight>)
                }
                {
                    state === "doing" ? (
                    <TouchableHighlight onPress={() => setState('doing')}>
                    <View style = {[styles.filter_item, styles.filter_item_choose]}>
                        <Text>Đang làm</Text>
                    </View></TouchableHighlight>) : (
                    <TouchableHighlight onPress={() => setState('doing')}>
                        <View style = {styles.filter_item}>
                        <Text>Đang làm</Text>
                    </View></TouchableHighlight>)
                }
                {
                    state === "break" ? (
                    <TouchableHighlight onPress={() => setState('break')}>
                    <View style = {[styles.filter_item, styles.filter_item_choose]}>
                        <Text>Đã nghỉ</Text>
                    </View></TouchableHighlight>) : (
                    <TouchableHighlight onPress={() => setState('break')}>
                        <View style = {styles.filter_item}>
                        <Text>Đã nghỉ</Text>
                    </View></TouchableHighlight>)
                }
            </View>
            <ScrollView style = {styles.view}>
                {
                    All && state === "all" ? (
                        forkUpdate(All).map(e => <AllE data={e} key={e.code} />)
                    ):null
                }
                {
                    Doing && state === "doing" ? (
                        Doing.map(e => <DoingE data={e} key={e.code} />)
                    ):null
                }
                {
                    Break && state === "break" ? (
                        Break.map(e => <BreakE data={e} key={e.code} />)
                    ):null
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        paddingTop: 0,
        position: 'relative',
        overflow: 'scroll',
        maxHeight: 580
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
});