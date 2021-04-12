import React, { Component } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Linking,
    Button
} from 'react-native';
import { callRemoteMethod } from "../../utils/WebServiceHandler"
import { Card, CardItem, Body } from 'native-base';
import styles from './styles'


class Details extends Component {
    static navigationOptions = {
        title: 'Github Dashboard Sample',
        headerStyle: { backgroundColor: '#00c2c7' },
        headerTitleStyle: { color: 'white' },
    };

    state = {
        repositoryDetails: {},
    };

    componentDidMount() {
        this.getRepositoryDetails();
    }


    getRepositoryDetails = () => {
        var endpoint =
            `https://api.github.com/repositories/${this.props.navigation.state.params.id}`
        callRemoteMethod(this, endpoint, {}, "getRepositoryDetailsCallback", "GET", true);
    };



    getRepositoryDetailsCallback = response => {
        this.setState({ repositoryDetails: response });
    };

    render() {
        const { repositoryDetails } = this.state

        return (

            <SafeAreaView>
                <Card>
                    <CardItem>
                        <Body>
                            <View style={styles.wrapper}>
                                <Text style={styles.detailsHeader}>{repositoryDetails.full_name}</Text>

                                <View style={styles.counts}>
                                    <Text> Language: {repositoryDetails.language}</Text>
                                    <Text> Stars: {repositoryDetails.stargazers_count}</Text>
                                    <Text>Description: {repositoryDetails.description}</Text>
                                    <Text>Created At: {repositoryDetails.created_at}</Text>
                                </View>
                                <Button onPress={() => { Linking.openURL(repositoryDetails.html_url); }} style={styles.button} title="View Repo" />
                            </View>
                        </Body>
                    </CardItem>
                </Card>
            </SafeAreaView>

        );
    };
}

export default Details;
