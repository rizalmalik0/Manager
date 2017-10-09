import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.headerView}>
            <Text style={styles.headerText}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerView: {
        height: 48,
        backgroundColor: '#76C5D8',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#bdc3c7',
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ecf0f1',
    }
});

export { Header };
