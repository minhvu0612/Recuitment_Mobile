import { useEffect, useState } from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { mock_data, filterData, RecuitmentItem, part_skills_requirement } from "./RecuitmentData"

export const CountEmployee = ({navigation}) => {

    const [data, setData] = useState(part_skills_requirement);

    useEffect(() => {
        //filterData(mock_data);
    }, [])

    return (
        <ScrollView style={styles.view}>
            {
                data ? (
                    data.map((e, key) => <RecuitmentItem data={e} navigation={navigation} key={key} />)
                ):(
                    <View>
                        <Text>No Recuitment</Text>
                    </View>
                )
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    view: {
        margin: 10,
        padding: 20,
    }
})