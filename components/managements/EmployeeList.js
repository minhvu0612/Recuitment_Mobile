import { useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { AllE } from "./employee/Employee";
import { fetchAllEmployee } from "./employee/EmployeeData";

export default function Employee({navigation}){

    const [state, setState] = useState('all');
    const [search, setSearch] = useState('');
    const [employees, setEmployees] = useState([]);

    const forkUpdate = (arr) => arr.filter(e => e.name.toLowerCase().includes(search.toLowerCase()));

    const checkEndTime = (end_day) => {
        return new Date().getTime() - new Date(end_day).getTime();
    }

    const Doing = () => employees.filter(e => checkEndTime(e.end_day) < 0);
    const Break = () => employees.filter(e => checkEndTime(e.end_day) >= 0);

    // state load data
    const mount = useRef(true);

    useEffect(() => {
        var t1 = 20000;
        if (mount.current === true){
            t1 = 150;
        }
        var mounted = mount;
        setTimeout(() => {
            fetchAllEmployee().then((res) => {
                setEmployees(res.data.data);
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
                    employees && state === "all" ? (
                        forkUpdate(employees).map(e => <AllE data={e} navigation={navigation} key={e.code} />)
                    ):null
                }
                {
                    Doing() && state === "doing" ? (
                        forkUpdate(Doing()).map(e => <AllE data={e} navigation={navigation} key={e.code} />)
                    ):null
                }
                {
                    Break() && state === "break" ? (
                        forkUpdate(Break()).map(e => <AllE data={e} navigation={navigation} key={e.code} />)
                    ):null
                }
            </ScrollView>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Add_Employee", {mount: mount})} style={styles.fab}>
            <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>
        </>
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