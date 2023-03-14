import { Text, View } from "react-native"

export const Dash = ({route, navigation}) => {

    const { data } = route.params; 

    <View>
        {
            data.role === "admin" ? (
                <View>
                    <Text>Project</Text>
                    <Text>Employee</Text>
                </View>
            ):null
        }
        {
            data.role === "hr" ? (
                <View>
                    <Text>Recuitment</Text>
                    <Text>Candidate</Text>
                </View>
            ):null
        }
        {
            data.role === "recuiter" ? (
                <View>
                    <Text>Recuitment</Text>
                </View>
            ):null
        }
    </View>
}