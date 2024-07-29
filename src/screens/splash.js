import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const splash = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>LAUNCH</Text>
        <Button
          title="Drop Off"
        />
        <Button
          title="Pick Up"
        />
      </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontFamily: 'Syncopate-Regular',
        fontSize: 64,
        marginBottom: 20,
    },
});
      
export default splash;
