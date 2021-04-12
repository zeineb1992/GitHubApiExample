import React, { Component } from 'react';
import { View, Alert, TextInput } from 'react-native';
import { Button, Text, Item } from 'native-base';
import styles from './styles'

import { callRemoteMethod } from "../../utils/WebServiceHandler"


class SearchScreen extends Component {
    static navigationOptions = {
        title: 'Github Dashboard Sample',
        headerStyle: { backgroundColor: '#00c2c7' },
        headerTitleStyle: { color: 'white' },
    };
    constructor(props) {
        super(props);

        this.state = {
            gitList: [],
            searchText: '',
        };


    }
    searchButtonPressed = () => {
        if (this.state.searchText.length) {
            var endpoint =
                `https://api.github.com/search/repositories?q=user:${this.state.searchText}`
            callRemoteMethod(this, endpoint, {}, "searchCallback", "GET", true);

        } else {
            Alert.alert('This Field is required');
        }
    };



    searchCallback = response => {
        if (response) {
            this.setState({ gitList: response.items })
            this.props.navigation.navigate("ListScreen", { data: this.state.gitList })
        } else {
            this.setState({ gitList: [] })
        }

    };


    render() {

        return (
            <View style={styles.container}>
                <Item style={styles.input}>
                    <TextInput onChangeText={text => this.setState({ searchText: text })} placeholder='Search Repo' ></TextInput>
                </Item>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} onPress={this.searchButtonPressed}><Text>Search</Text></Button>

                </View>
            </View>
        );
    }
}

export default SearchScreen;