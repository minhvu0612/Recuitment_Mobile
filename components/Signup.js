import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function Signup({navigation}){
    return(
        <View style = {styles.view}>
            <Image 
                source={require("../assets/icon.png")} 
                style = {styles.image} 
            />
            <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Tài khoản Email"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {this.handleEmail}/>
            <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Tên tài khoản"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {this.handleEmail}/>
            <TextInput style = {[styles.input]}
                secureTextEntry={true}
                underlineColorAndroid = "transparent"
                placeholder = "Mật khẩu"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {this.handlePassword}/>
            <TextInput style = {[styles.input, styles.input_assign]}
                secureTextEntry={true}
                underlineColorAndroid = "transparent"
                placeholder = "Xác nhận mật khẩu"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {this.handlePassword}/>
            <Button
                title = "Đăng ký"
                color = "#7a42f4"
            />
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 25, marginBottom: 25}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                <View>
                    <Text style={{width: 50, textAlign: 'center'}}> Hoặc </Text>
                </View>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>
            <Button
                onPress={() => navigation.navigate('Login')}
                title = "Đăng nhập bằng tài khoản"
                color = "#7a42f4"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 50,
    },
    image: {
        width: 200,
        height: 150,
        marginLeft: 40,
        marginRight: 50,
        borderRadius: 3,
    },
    input: {
      marginTop: 15,
      marginBottom: 15,
      marginLeft: 0,
      marginRight: 0,
      paddingLeft: 10,
      paddingRight: 10,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1,
    },
    input_assign: {
        marginBottom: 30
    }
});