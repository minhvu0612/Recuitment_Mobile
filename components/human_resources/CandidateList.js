import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

export const CandidateList = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        filterData(mock_data);
    }, [])

    return (
        <ScrollView>
            {
                data ? (
                    data.map((e, key) => <></>)
                ):(
                    <View>
                        <Text>No Recuitment</Text>
                    </View>
                )
            }
        </ScrollView>
    )
}