import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class INScreen extends React.Component {
    render(){
        return (
            <View>
                <Text style={styles.text}>Instagram</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        marginTop: 150,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});