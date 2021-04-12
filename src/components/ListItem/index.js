import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Icon } from 'native-base';
import styles from './styles'

export default class ListItem extends Component {


    render() {
        const { onPressItem, text, key } = this.props
        return (
            <TouchableOpacity style={styles.item}
                key={key}
                onPress={onPressItem}>
                <View style={styles.iconContainer}>
                    <Icon type="FontAwesome" name="github" style={styles.icon} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {text}
                    </Text>
                </View>
            </TouchableOpacity>

        );
    }
}

