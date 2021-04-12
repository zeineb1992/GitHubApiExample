import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: Dimensions.get('window').width,

    },
    text: {
        fontSize: 12
    },
    icon: {
        fontSize: 18
    },
    iconContainer: {
        width: Dimensions.get('window').width * 0.2,
        padding: 20
    },
    textContainer: {
        width: Dimensions.get('window').width * 0.8,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }
})  