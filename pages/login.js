import {ScrollView, View, StyleSheet} from 'react-native'
import { Avatar, Text } from 'react-native-paper';
import styles from '../styles/styles';

const Login = () => {
    return (
        <View style={loginStyle.container}>
            <View style={{...loginStyle.section,...loginStyle.logoBox}}>
                <Avatar.Image source={require("../assets/avatar.png")}size={100}/>
                <Text variant='displayMedium'>Basta App</Text>
            </View>
            <View style={loginStyle.section}>
                <Text>Inputs</Text>
            </View>
            <View style={loginStyle.section}> 
                <Text>Buttons</Text>
            </View>
        </View>
    )
}

export default Login

const loginStyle = StyleSheet.create(styles)