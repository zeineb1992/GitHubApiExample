import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import ListItem from '../../components/ListItem';


class ListScreen extends Component {
    static navigationOptions = {
        title: 'Github Dashboard Sample',
        headerStyle: { backgroundColor: '#00c2c7' },
        headerTitleStyle: { color: 'white' },
    };
    constructor(props) {
        super(props);

        this.state = {
            data: props.navigation.state.params.data,
        };

    }



    render() {
        const { data } = this.state
        return (
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', margin: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: 30, height: 30, borderRadius: 25 }} source={{ uri: data[0].owner.avatar_url }} />
                    <Text style={{ fontSize: 15 }}>{data[0].owner.login}</Text></View>
                <View style={{ flex: 1 }}>
                    <ScrollView style={{ flex: 1 }}>
                        {data.map(function (item, i) {
                            return (
                                <ListItem onPressItem={() => this.props.navigation.navigate("Details", { id: item.id })}
                                    key={i}
                                    text={item.name}
                                />


                            );
                        }, this)}

                    </ScrollView>

                </View>
            </View>
        );
    }
}

export default ListScreen;