import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(39, 43, 51)"
    },

    item: {
        backgroundColor: 'rgb(60, 62, 68)',
        margin: 15,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 15,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingLeft: 10
    },
    image: {
        width:150,
        height:150,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    menu: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 30,
    },
    styleText: {
        color: '#fff',
    },
    green: {
        color: 'green',
    },
    red: {
        color: 'red',
    },
    gray: {
        color: 'gray'
    },
    text: {
        color: '#fff',
        fontSize: 13
    },
    title: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    label: {
        color: 'rgb(158, 158, 158)'
    },
})